# -*- coding: utf-8 -*-
"""
Actualiza el STOCK de Tienda Nube a partir de un Excel (.xlsx) o CSV.

Qué hace
--------
1. Lee el archivo y detecta automáticamente las columnas de SKU y de Stock.
   Acepta nombres variados (sin importar mayúsculas/acentos):
     SKU  -> "SKU", "Código", "Codigo", "Cod", "Modelo", "Código / Modelo"
     Stock-> "Stock", "Cantidad", "Existencia(s)", "Stock Actual", "Disponible", "Unidades"
2. Busca cada variante en Tienda Nube por SKU y le pone la cantidad del archivo.
3. (Opcional, activado por defecto) PUBLICA los productos que queden con stock > 0.
4. (Opcional) Oculta los productos que queden en 0 con --ocultar-sin-stock.

Seguridad
---------
- Sin --aplicar hace una SIMULACIÓN: no escribe nada, solo muestra qué cambiaría.
- Con --aplicar escribe de verdad en la tienda.

Uso
---
  py -3 actualizar-stock.py "ruta\\a\\stock.xlsx"            (simulación)
  py -3 actualizar-stock.py "ruta\\a\\stock.xlsx" --aplicar  (aplica)
  Opciones extra: --sin-publicar  --ocultar-sin-stock
  Si no pasás archivo, busca stock.xlsx / stock.csv en esta misma carpeta.
"""
import json, os, sys, time, csv, re, unicodedata
import requests

# Mostrar acentos correctamente en la consola de Windows
try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

HERE = os.path.dirname(os.path.abspath(__file__))
CFG = json.load(open(os.path.join(HERE, "api-config.json"), encoding="utf-8"))
BASE = "https://api.tiendanube.com/v1/%s" % CFG["store_id"]
SESSION = requests.Session()
SESSION.headers.update({
    "Authentication": "bearer %s" % CFG["access_token"],
    "User-Agent": "WoodTools actualizar-stock (%s)" % CFG.get("contact_email", "woodtoolsmarketing@gmail.com"),
    "Content-Type": "application/json",
})

# ---------- utilidades ----------
def norm(s):
    """Normaliza para comparar: sin acentos, sin espacios repetidos, MAYÚSCULAS."""
    if s is None:
        return ""
    s = str(s).strip()
    s = "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")
    return re.sub(r"\s+", " ", s).upper()

def a_entero(v):
    """Convierte un valor de celda a entero de stock (>=0). Devuelve None si está vacío."""
    if v is None:
        return None
    s = str(v).strip()
    if s == "":
        return None
    s = s.replace(".", "").replace(",", ".") if ("," in s and "." in s) else s.replace(",", ".")
    try:
        n = int(round(float(s)))
    except ValueError:
        return None
    return max(0, n)

def api(method, path, body=None):
    for intento in range(6):
        try:
            r = SESSION.request(method, BASE + path, data=(json.dumps(body) if body is not None else None), timeout=30)
        except requests.RequestException as e:
            if intento == 5:
                return 0, str(e)
            time.sleep(1); continue
        if r.status_code == 429:          # límite de tasa: esperar y reintentar
            time.sleep(float(r.headers.get("Retry-After", 2)) + 0.5); continue
        try:
            return r.status_code, r.json()
        except ValueError:
            return r.status_code, r.text

# ---------- lectura del archivo ----------
SKU_KEYS   = ["SKU", "CODIGO", "COD", "MODELO", "REFERENCIA", "IDENTIFICADOR DE URL", "IDENTIFICADOR"]
STOCK_KEYS = ["STOCK ACTUAL", "STOCK", "CANTIDAD", "EXISTENCIAS", "EXISTENCIA", "DISPONIBLE", "UNIDADES"]

def elegir_columna(headers_norm, claves):
    # 1) match exacto en orden de prioridad
    for k in claves:
        if k in headers_norm:
            return headers_norm.index(k)
    # 2) "empieza con" / "contiene" en orden de prioridad
    for k in claves:
        for i, h in enumerate(headers_norm):
            if h.startswith(k) or k in h:
                return i
    return -1

def leer_filas(path):
    """Devuelve lista de (sku, stock_int) leídas del archivo."""
    ext = os.path.splitext(path)[1].lower()
    filas = []
    if ext in (".xlsx", ".xlsm"):
        import openpyxl
        wb = openpyxl.load_workbook(path, data_only=True, read_only=True)
        ws = wb.active
        rows = [[c for c in r] for r in ws.iter_rows(values_only=True)]
    else:
        # CSV: detectar separador (coma o punto y coma)
        with open(path, "r", encoding="utf-8-sig", errors="replace", newline="") as f:
            muestra = f.read(4096); f.seek(0)
            sep = ";" if muestra.count(";") > muestra.count(",") else ","
            rows = list(csv.reader(f, delimiter=sep))

    # encontrar la fila de encabezados (la primera que tenga columna SKU y Stock)
    hdr_idx = sku_i = stock_i = -1
    for i, row in enumerate(rows[:15]):
        hn = [norm(x) for x in row]
        s_i = elegir_columna(hn, SKU_KEYS)
        k_i = elegir_columna(hn, STOCK_KEYS)
        if s_i != -1 and k_i != -1:
            hdr_idx, sku_i, stock_i = i, s_i, k_i
            break
    if hdr_idx == -1:
        raise SystemExit("No encontré columnas de SKU y Stock en el archivo. "
                         "Asegurate de tener una columna tipo 'SKU'/'Código' y otra 'Stock'/'Cantidad'.")

    for row in rows[hdr_idx + 1:]:
        if sku_i >= len(row):
            continue
        sku = row[sku_i]
        if sku is None or str(sku).strip() == "":
            continue
        stock = a_entero(row[stock_i] if stock_i < len(row) else None)
        if stock is None:
            continue  # sin cantidad: no tocar
        filas.append((str(sku).strip(), stock))
    return filas, (sku_i, stock_i)

# ---------- catálogo de Tienda Nube ----------
def traer_catalogo():
    variantes = {}   # norm(sku) -> dict(pid, vid, stock, pname, published)
    productos = {}   # pid -> dict(name, published, vids=[], stocks={vid:stock})
    dup = set()
    page = 1
    while True:
        st, data = api("GET", "/products?per_page=200&page=%d&fields=id,name,published,variants" % page)
        if st != 200 or not isinstance(data, list) or not data:
            break
        for p in data:
            pid = p["id"]
            pname = (p.get("name") or {}).get("es") or next(iter((p.get("name") or {}).values()), str(pid))
            productos[pid] = {"name": pname, "published": p.get("published", False), "vids": [], "stocks": {}}
            for v in p.get("variants", []):
                vid = v["id"]
                productos[pid]["vids"].append(vid)
                productos[pid]["stocks"][vid] = v.get("stock")
                sk = norm(v.get("sku"))
                if sk:
                    if sk in variantes:
                        dup.add(sk)
                    variantes[sk] = {"pid": pid, "vid": vid, "stock": v.get("stock"),
                                     "pname": pname, "published": p.get("published", False)}
        if len(data) < 200:
            break
        page += 1
    return variantes, productos, dup

# ---------- principal ----------
def generar_plantilla():
    """Crea stock-plantilla.xlsx con todas las variantes (SKU + nombre + stock actual)
    para que completes las cantidades y después corras el script sobre ese archivo."""
    import openpyxl
    variantes, productos, _ = traer_catalogo()
    wb = openpyxl.Workbook(); ws = wb.active; ws.title = "stock"
    ws.append(["SKU", "Producto", "Medida/Variante", "Stock"])
    # orden estable por nombre de producto + sku
    orden = sorted(variantes.items(), key=lambda kv: (kv[1]["pname"] or "", kv[0]))
    for sk, v in orden:
        ws.append([sk, v["pname"], "", (v["stock"] if v["stock"] is not None else 0)])
    ws.freeze_panes = "A2"
    for col, w in zip("ABCD", (20, 46, 20, 8)):
        ws.column_dimensions[col].width = w
    out = os.path.join(HERE, "stock-plantilla.xlsx")
    wb.save(out)
    print("Plantilla creada:", out)
    print("Variantes:", len(orden), "- completá la columna 'Stock' y después corré:")
    print('   py -3 actualizar-stock.py "stock-plantilla.xlsx"           (simulación)')
    print('   py -3 actualizar-stock.py "stock-plantilla.xlsx" --aplicar (aplica)')

def main():
    args = sys.argv[1:]
    if "--plantilla" in args:
        generar_plantilla()
        return
    aplicar = "--aplicar" in args
    publicar = "--sin-publicar" not in args
    ocultar_sin_stock = "--ocultar-sin-stock" in args
    paths = [a for a in args if not a.startswith("--")]

    if paths:
        archivo = paths[0]
    else:
        archivo = next((os.path.join(HERE, n) for n in ("stock.xlsx", "stock.csv", "stock.xlsm")
                        if os.path.exists(os.path.join(HERE, n))), None)
    if not archivo or not os.path.exists(archivo):
        raise SystemExit("No encontré el archivo. Pasá la ruta: py -3 actualizar-stock.py \"C:\\...\\stock.xlsx\"\n"
                         "O dejá un 'stock.xlsx' en: %s" % HERE)

    print("Archivo:", archivo)
    print("Modo:", "APLICAR (escribe en la tienda)" if aplicar else "SIMULACIÓN (no escribe nada)")
    print("Publicar los que queden con stock > 0:", "SÍ" if publicar else "NO")
    if ocultar_sin_stock:
        print("Ocultar los que queden en 0: SÍ")
    print("-" * 64)

    filas, _ = leer_filas(archivo)
    print("Filas con SKU + stock en el archivo:", len(filas))
    variantes, productos, dup = traer_catalogo()
    print("Variantes en Tienda Nube:", len(variantes), "| Productos:", len(productos))
    if dup:
        print("OJO: hay SKUs repetidos en la tienda (se usa el último):", ", ".join(sorted(dup)[:10]))
    print("-" * 64)

    cambios = []      # (sku, vid, pid, viejo, nuevo, pname)
    no_encontrados = []
    for sku, nuevo in filas:
        v = variantes.get(norm(sku))
        if not v:
            no_encontrados.append(sku); continue
        viejo = v["stock"] if v["stock"] is not None else 0
        if int(viejo) != int(nuevo):
            cambios.append((sku, v["vid"], v["pid"], viejo, nuevo, v["pname"]))

    # stock final por producto (para decidir publicación)
    stock_final = {pid: dict(info["stocks"]) for pid, info in productos.items()}
    for _, vid, pid, _, nuevo, _ in cambios:
        stock_final[pid][vid] = nuevo

    def tiene_stock(pid):
        return any((s or 0) > 0 for s in stock_final[pid].values())

    a_publicar = [pid for pid, info in productos.items() if not info["published"] and tiene_stock(pid)] if publicar else []
    a_ocultar  = [pid for pid, info in productos.items() if info["published"] and not tiene_stock(pid)] if ocultar_sin_stock else []

    print("Variantes a cambiar de stock:", len(cambios))
    for sku, vid, pid, viejo, nuevo, pname in cambios[:40]:
        print("   %-16s  %4s -> %-4s  | %s" % (sku, viejo, nuevo, pname[:40]))
    if len(cambios) > 40:
        print("   ... y %d más" % (len(cambios) - 40))
    if no_encontrados:
        print("\nSKUs del archivo que NO existen en la tienda (%d):" % len(no_encontrados))
        print("   " + ", ".join(no_encontrados[:30]) + (" ..." if len(no_encontrados) > 30 else ""))
    print("\nProductos a PUBLICAR (quedan con stock):", len(a_publicar))
    if ocultar_sin_stock:
        print("Productos a OCULTAR (quedan en 0):", len(a_ocultar))

    if not aplicar:
        print("\n(SIMULACIÓN) No se escribió nada. Volvé a correr con  --aplicar  para efectuarlo.")
        return

    # ---- aplicar ----
    print("\nAplicando cambios de stock...")
    ok = err = 0
    for sku, vid, pid, viejo, nuevo, pname in cambios:
        st, _ = api("PUT", "/products/%d/variants/%d" % (pid, vid), {"stock": nuevo})
        if st == 200:
            ok += 1
        else:
            err += 1; print("   ERROR stock SKU %s (HTTP %s)" % (sku, st))
        time.sleep(0.25)
    print("Stock actualizado: %d OK, %d con error." % (ok, err))

    if a_publicar:
        print("Publicando %d productos con stock..." % len(a_publicar))
        pok = perr = 0
        for pid in a_publicar:
            st, _ = api("PUT", "/products/%d" % pid, {"published": True})
            if st == 200: pok += 1
            else: perr += 1; print("   ERROR publicar producto %d (HTTP %s)" % (pid, st))
            time.sleep(0.25)
        print("Publicados: %d OK, %d con error." % (pok, perr))

    if a_ocultar:
        print("Ocultando %d productos sin stock..." % len(a_ocultar))
        for pid in a_ocultar:
            api("PUT", "/products/%d" % pid, {"published": False}); time.sleep(0.25)
        print("Ocultados.")

    print("\nListo.")

if __name__ == "__main__":
    main()
