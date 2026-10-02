# Especificaciones de las fichas (medidas desde el Excel)

Las fichas de producto muestran 5 medidas: **Ø exterior, Ø interior, Ancho de
corte, Cantidad de dientes, Largo**. Desde 2026-10-02 esas medidas salen del
Excel de datos técnicos (fuente de verdad), no de texto escrito a mano.

## Archivos

- `datos-tecnicos.xlsx` — **la fuente**. Es el Excel de datos técnicos (hoja
  `Todas`: una fila por código). No se sube al sitio ni al repo (está en
  `.gitignore`): queda solo en esta PC, como las credenciales.
- `generar-especificaciones.py` — lee el Excel y escribe
  `ruta-productos/JS/especificaciones.json`.
- `generar-especificaciones.cmd` — doble clic para correr lo de arriba.
- La ficha (`ruta-productos/JS/producto.js`) descarga ese JSON y, para el código
  de cada producto y cada variante del desplegable, usa esas medidas. Si un
  código no está en el Excel, la ficha sigue mostrando lo de antes (no se rompe).

## Cómo actualizar cuando llega una lista nueva

1. Reemplazá `datos-tecnicos.xlsx` por el Excel nuevo (mismo nombre, mismas
   columnas; la hoja que se usa es `Todas`).
2. Doble clic en `generar-especificaciones.cmd` (o `python generar-especificaciones.py`).
3. Subí el sitio con `node _tools/subir.js` (sube el `especificaciones.json` nuevo).

No hace falta tocar `producto.js` ni las fichas: la próxima visita toma las
medidas nuevas (el JSON se pide con revalidación en cada carga).

## Mapeo de columnas (hoja `Todas` → ficha)

| Ficha              | Columna del Excel            |
|--------------------|------------------------------|
| Ø exterior         | Ø D (mm)                     |
| Ø interior         | d agujero / Ø interior (mm)  |
| Ancho de corte     | B ancho de corte / # (mm)    |
| Cantidad de dientes| Z dientes / filos            |
| Largo              | Largo L / LT (mm)            |

Solo se tocan esas 5 medidas. Marca, material, uso, tipo de diente, fotos y
títulos siguen definidos en `producto.js` (no vienen del Excel).

## Requisitos

Python 3 con `openpyxl` (`pip install openpyxl`).
