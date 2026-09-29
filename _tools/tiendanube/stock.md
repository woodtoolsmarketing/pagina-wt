# Stock en Tienda Nube (habilitar / deshabilitar)

Tienda: `tiendadewoodtoolssrl.mitiendanube.com` (panel del mismo dominio,
`/admin`). Estado desde **22/09/2026**: **todos los productos quedaron en
"Sin stock" Y "Oculto"** (114 productos / 675 variantes) — no tienen stock y no
aparecen en la web. Se van a ir habilitando de a uno a medida que los indiquen.

> **IMPORTANTE (acople stock + visibilidad):** Tienda Nube/Morelia NO oculta
> solo los productos sin stock (los muestra con cartel "Sin stock"). Por eso,
> además de dejarlos en 0, se los puso en **Oculto** a mano. Al **re-habilitar**
> un producto hay que hacer **las dos cosas**: darle **stock** (A/B) **y**
> ponerlo **Visible** (C). Si le das stock pero sigue Oculto, no aparece.

En Tienda Nube el stock de cada variante puede estar:
- **∞ Infinito** = sin control de stock, siempre disponible (así estaban antes).
- **Sin stock** = control activado con cantidad **0** (no comprable). ← estado actual.
- **Cantidad N** = control activado con N unidades.

---

## A) Re-habilitar UN producto desde el panel (lo más común)

Para habilitar de a uno, es lo más simple y seguro:

1. Panel → **Productos** → **Lista de productos**.
2. Buscá el producto por nombre, SKU o código (ej. `SD04MA`) y entrá a la ficha.
3. En la sección de **Stock / Variantes**, por cada variante elegí:
   - **Sin límite** (queda **∞ Infinito**, disponible sin contar cantidad), **o**
   - escribí una **cantidad** (ej. `10`).
4. **Guardar cambios**.

El listado de Productos muestra la columna **Stock** ("Sin stock" / "∞ Infinito"
/ número): es la fuente que hay que mirar para confirmar. La **web pública puede
tardar** en reflejarlo por caché; el panel manda.

---

## B) Re-habilitar VARIOS a la vez (por CSV)

Es el mismo método con el que se pusieron todos en "Sin stock". Actualiza **solo
la columna Stock**; no toca precio ni descripción (porque esas columnas no van
en el archivo).

### Cómo funciona el import (Productos → "Exportar e importar")
- Pestaña **Importar** → **Cargar archivo .csv**.
- Dejar tildado **"Modificar productos ya existentes"** y **"Actualizar stock"**.
- **Importar** → aparece **"Revisar cambios"** (mapea cada columna del archivo;
  tiene que decir *"0 de N columnas ignoradas"*) → **Importar**.
- Procesa en segundo plano y manda un resumen al e-mail de la cuenta.
- **Solo se modifican las columnas que están en el archivo.** Por eso el CSV
  lleva únicamente las columnas para identificar la variante + `Stock`.

### Formato del CSV (¡importante!)
- Separador **`;`** (punto y coma), **no** coma.
- Codificación **cp1252 / Latin-1** (no UTF-8). Excel de Windows lo guarda así.
- Columna **`Stock`**:
  - `0` → **Sin stock**
  - `N` (ej. `10`) → **cantidad N**
  - **vacío** → **∞ Infinito** (sin control). *(Verificado que vacío deja
    "infinito" en el export; si dudás, para "infinito" usá el panel — punto A.)*

### Columnas mínimas (identifican la variante + stock)
```
Identificador de URL;Nombre de propiedad 1;Valor de propiedad 1;Nombre de propiedad 2;Valor de propiedad 2;Nombre de propiedad 3;Valor de propiedad 3;Stock
```
El `Identificador de URL` es el handle del producto (ej. `cabezales-sd04ma`) y
`Valor de propiedad 1` es el código/medida de la variante (ej. `SD04MA AA9`).
Para sacar los handles y valores exactos: **Exportar** el catálogo primero y
copiar esas columnas.

### Ejemplo (habilitar 2 productos con cantidad 10)
```
Identificador de URL;Nombre de propiedad 1;Valor de propiedad 1;Nombre de propiedad 2;Valor de propiedad 2;Nombre de propiedad 3;Valor de propiedad 3;Stock
cabezales-sd04ma;Medida;SD04MA AA9;;;;;10
mechas-frs;Medida;FRS0606;;;;;10
```

### Generarlo con un script (a partir de un export fresco)
```js
// node: toma export.csv (el que baja "Exportar"), pone Stock=N a los handles
// de la lista y escribe import-stock.csv listo para subir.
const fs=require('fs');
const SRC='export.csv', OUT='import-stock.csv';
const HABILITAR={ 'cabezales-sd04ma':'10', 'mechas-frs':'10' }; // handle -> stock
const filas=fs.readFileSync(SRC,'latin1').split(/\r?\n/).filter(Boolean).map(l=>l.split(';'));
const h=filas[0], i=n=>h.indexOf(n);
const cols=['Identificador de URL','Nombre de propiedad 1','Valor de propiedad 1',
  'Nombre de propiedad 2','Valor de propiedad 2','Nombre de propiedad 3','Valor de propiedad 3','Stock'];
const out=[cols.join(';')];
for(const r of filas.slice(1)){
  const handle=r[i('Identificador de URL')];
  if(!(handle in HABILITAR)) continue;           // solo los de la lista
  const v=cols.map(c=> c==='Stock' ? HABILITAR[handle] : (r[i(c)]||''));
  out.push(v.join(';'));
}
fs.writeFileSync(OUT, out.join('\r\n'), 'latin1');
console.log('escrito', OUT, out.length-1, 'variantes');
```

---

## C) Ocultar / mostrar en la tienda (visibilidad)

Cada producto tiene 3 estados de visibilidad: **Visible**, **No listado**
(oculto de listados pero accesible por link directo) y **Oculto** (no aparece
en ningún lado). Hoy están todos en **Oculto**.

**Desde el panel (uno):** Productos → ficha del producto → sección de
**visibilidad** (radios Visible / No listado / Oculto) → elegir **Visible** →
Guardar.

**Por CSV (varios):** mismo import que el stock, con la columna
**`Mostrar en tienda`**:
- **`SI`** → Visible (aparece)
- **`NO`** → Oculto (no aparece). **Ojo: en MAYÚSCULAS.** Probado que `No` en
  minúscula NO lo oculta (queda Visible); `NO` sí.

Columnas mínimas para el CSV de visibilidad (identifican la variante + la
columna de visibilidad):
```
Identificador de URL;Nombre de propiedad 1;Valor de propiedad 1;Nombre de propiedad 2;Valor de propiedad 2;Nombre de propiedad 3;Valor de propiedad 3;Mostrar en tienda
cabezales-sd04ma;Medida;SD04MA AA9;;;;;SI
```
(No lleva columna `Stock`, así el stock no se toca.)

**Para volver a mostrar + con stock un producto** podés hacer UN solo CSV que
tenga las dos columnas (`Stock` y `Mostrar en tienda`):
```
Identificador de URL;Nombre de propiedad 1;Valor de propiedad 1;...;Stock;Mostrar en tienda
cabezales-sd04ma;Medida;SD04MA AA9;...;10;SI
```

---

## D) Regla automática: ocultar sin stock por API (`auto-ocultar-stock.js`)

Como Tienda Nube no tiene la regla nativa, hay un script que la hace: recorre
todos los productos por la API y **oculta los que no tienen stock y muestra los
que sí**. Corriéndolo en un horario, funciona como esa regla (es **periódico,
no instantáneo**: aplica en la próxima corrida). Ventaja: al re-habilitar un
producto alcanza con **cargarle stock** — el script lo vuelve a mostrar solo.

> **Estado (22/09/2026): YA CONFIGURADO Y ANDANDO.** La app quedó creada e
> instalada (App ID **43158**, permisos View + Edit Products), el token está en
> `api-config.json`, y hay una **tarea programada de Windows** ("WoodTools
> Auto-ocultar-stock") que corre la regla **cada 1 hora**. No hay que volver a
> hacer nada de esto salvo que cambie el token o se quiera ajustar la frecuencia.

Archivos:
- `auto-ocultar-stock.js` — script principal (la regla).
- `obtener-token.js` — canjea el `code` de autorización por el token (paso único).
- `api-config.json` — el token. **NO se sube** (está en `.gitignore`).
- `auto-ocultar-stock.cmd` — wrapper que ejecuta la regla con `--aplicar` y
  guarda la salida en `auto-ocultar-stock.log` (solo la última corrida).
- `auto-ocultar-stock.vbs` — lanza el `.cmd` **oculto** (sin ventana negra); es
  lo que dispara la tarea programada.
- `auto-ocultar-stock.log` — resultado de la última corrida (local, ignorado).

### Alta del token (una sola vez)

1. Entrá a **https://partners.tiendanube.com** e iniciá sesión. Si no tenés
   cuenta de Partner, creala gratis (podés usar el mismo mail; es una cuenta de
   desarrollador, aparte de la de la tienda).
2. **Crear aplicación**:
   - Nombre: `Auto stock WoodTools` (o el que quieras).
   - **URL de redirección (Redirect URI)**: `https://localhost` (no se usa de
     verdad, pero es obligatoria).
   - **Permisos (scopes)**: tildá **`read_products`** y **`write_products`**.
   - Guardá. Te da un **Client ID** y un **Client Secret** (anotalos).
3. **Autorizar la app en tu tienda**: en el navegador donde estás logueado en tu
   tienda, abrí (reemplazando `CLIENT_ID`):
   ```
   https://www.tiendanube.com/apps/CLIENT_ID/authorize
   ```
   Aceptá. Te redirige a `https://localhost/?code=XXXXXXXX` → va a decir "no se
   puede acceder al sitio" (es normal). **Copiá el valor de `code=`** de la barra
   de direcciones.
4. **Canjear el code por el token** (en la PC, dentro de `_tools/tiendanube/`):
   ```
   node obtener-token.js CLIENT_ID CLIENT_SECRET CODE
   ```
   Imprime el `access_token` y el `user_id` (que es el `store_id`, 8150635).
5. **Guardar el token**: copiá `api-config.example.json` a `api-config.json` y
   pegá el `access_token`.

### Correrlo

```
node _tools/tiendanube/auto-ocultar-stock.js            # simulacro: informa, no cambia
node _tools/tiendanube/auto-ocultar-stock.js --aplicar  # aplica los cambios
```

### La tarea programada (ya creada)

Nombre: **`WoodTools Auto-ocultar-stock`**. Corre `auto-ocultar-stock.vbs`
(oculto) cada **1 hora**, solo cuando la PC está encendida y con sesión iniciada.
El token no vence, así que una vez configurado corre solo.

Comandos útiles (PowerShell / CMD):
```
schtasks /Query  /TN "WoodTools Auto-ocultar-stock" /V /FO LIST   REM ver estado
schtasks /Run    /TN "WoodTools Auto-ocultar-stock"               REM correr ya
schtasks /Change /TN "WoodTools Auto-ocultar-stock" /RI 120       REM cada 120 min
schtasks /Delete /TN "WoodTools Auto-ocultar-stock" /F            REM eliminarla
```
Para ver qué hizo la última vez: abrir `auto-ocultar-stock.log`.

Si alguna vez hay que **recrearla** desde cero:
```
schtasks /Create /TN "WoodTools Auto-ocultar-stock" ^
  /TR "wscript.exe C:\Users\WoodTools-02\Desktop\vscode\pagina-wt\_tools\tiendanube\auto-ocultar-stock.vbs" ^
  /SC HOURLY /MO 1 /F
```

---

## E) Tarjetas del sitio -> tienda segun stock (`stock-sitio.js`)

En los listados de www.woodtools.com.ar (Sierras, Fresas, Mechas, Cuchillas,
Cabezales, Diamante y "Todos los productos"), la tarjeta de un producto:
- **con stock en la tienda** -> lleva al producto de Tienda Nube
  (`https://woodtools.ar/productos/<handle>/?variant=<id>`);
- **sin stock** -> lleva a la ficha del sitio, como siempre.

La tarjeta **no muestra ni precio ni stock**: solo cambia a donde lleva.

### Como funciona
1. Cada hora (`auto-ocultar-stock.cmd`), **primero** corre `stock-sitio.js`:
   lee el stock por la API (solo lectura), arma `stock-tienda.json` en la raiz
   del sitio con las fichas que hoy se pueden comprar y lo sube por FTP.
2. **Despues**, y **solo si el paso 1 salio bien**, corre la regla
   `auto-ocultar-stock.js --aplicar` (oculta/publica en la tienda).
   Por que en ese orden: un producto que se agota sale de los enlaces del sitio
   ANTES de ocultarse, asi ninguna tarjeta lleva a una pagina 404. Si falla la
   API o el FTP, esa hora no se oculta nada (el producto queda en la tienda
   con "Sin stock", que es mejor que un 404).
3. En los listados, `ruta-productos/JS/stock-tienda.js` lee ese archivo y
   cambia el destino de esas tarjetas. Si el archivo no esta, falla, o tiene
   **mas de 7 dias** (la tarea dejo de correr), todas van a la ficha. Tambien
   lo vuelve a leer al volver con "atras" o a una pestaña abierta hace rato.

Una ficha va a la tienda si su producto esta **publicado** y:
- ficha de una medida (tiene `variante` en el mapa) -> **esa** variante esta
  visible y tiene stock;
- ficha de familia (`variante: null`) -> **alguna** variante la tiene.

**Demoras:** cuando un producto recibe stock, la regla lo publica en la corrida
siguiente y la tarjeta lo enlaza en la otra: **hasta ~2 horas** (a proposito,
para darle tiempo a la cache de la tienda). Cuando se agota, la tarjeta vuelve
a la ficha en la corrida siguiente (hasta ~1 hora; mientras tanto la tienda
lo muestra "Sin stock", no da 404). La PC tiene que estar prendida: de noche
o el fin de semana no corre, y todo sigue como quedo en la ultima corrida.

**Como ver si anda:** `stock-historial.log` (misma carpeta) tiene una linea
por corrida: `OK` o `ERROR ...`. El detalle de la ultima corrida esta en
`auto-ocultar-stock.log`.

### Que ficha corresponde a que producto: `mapa-tarjetas.json`
129 fichas mapeadas (verificadas contra la tienda el 25/09/2026). Las fichas
que no estan en el mapa (fresas no rectas, Plegado, FRPDIBUJO, FRINR0804) no
tienen producto en la tienda y siempre van a la ficha.

**Si se agrega un producto nuevo al sitio y a la tienda**, sumar su entrada:
```
"MCH/NUEVA.html": { "handle": "mechas-nueva", "variante": 1234567890 }
```
(`handle` = Identificador de URL del producto; `variante` = id de la variante,
o `null` si la tarjeta es de familia). Los ids se ven en la API o en el link
"?variant=" de la tienda. Si una entrada apunta a algo que no existe,
`stock-sitio.js` lo avisa en el log. Tambien avisa ("tarjetas ... sin entrada
en mapa-tarjetas.json") cuando hay una tarjeta en los listados que no esta en
el mapa ni en `sin_tienda` (la lista de tarjetas sin producto en la tienda).

**Ojo con los productos agregados de Mechas** (mechas-mb, mechas-mi,
mechas-mcd-mci, mechas-mam-pinza, mechas-router-franzoi): repiten variantes de
otros productos con SKU propio. El stock se mira en el producto al que apunta
el mapa: hay que cargarlo ahi para que la tarjeta lleve a la tienda.

### Comandos
```
node _tools/tiendanube/stock-sitio.js --dry        # que haria, sin escribir ni subir
node _tools/tiendanube/stock-sitio.js              # genera y sube
node _tools/tiendanube/stock-sitio.js --probar "SC/LG3D 0400.html" --salida prueba.json
                                                    # prueba sin tocar la tienda ni el sitio
```
`subir.js` **no** sube `stock-tienda.json` (lo sube solo `stock-sitio.js`).

---

## Notas / trampas encontradas (22/09/2026)

- La **sesión del panel caduca**: si el navegador no está logueado, no se puede
  operar (y no hay que ingresar credenciales por acá). El dueño inicia sesión.
- El panel es **pesado**: la pestaña **Importar** a veces no se activa al primer
  clic. Lo que funcionó: cerrar el aviso verde "Archivo listo" y clickear la
  pestaña "Importar" (a veces dos veces) hasta que aparezca "Cargar archivo .csv".
- El **Exportar** es asíncrono: da un link "Descargar archivo" (y lo manda por
  e-mail). El link es una URL directa a cloudfront; se puede bajar con `curl`.
- Para **subir** un archivo desde la automatización, el archivo tiene que estar
  en una carpeta permitida (el directorio de trabajo del proyecto sirve; borrarlo
  después así no se commitea ni se sube al sitio con `subir.js`).
- **Verificar siempre en el panel** (columna Stock del listado). La web pública
  cachea y puede mostrar un producto como comprable un rato después del cambio.
- El import **mínimo** (solo columnas de identificación + Stock) **no toca**
  precio ni descripción — probado el 22/09/2026 en 1 producto antes de aplicarlo
  a todos (precio y descripción intactos). Lo mismo con la columna
  `Mostrar en tienda`: solo cambia la visibilidad.
- **Activar la pestaña "Importar" es intermitente** (el panel es pesado). Lo que
  funcionó seguro: `find` de la pestaña "Importar" → clic en su ref → tecla
  **Espacio** (o Enter). Ahí aparece "Cargar archivo .csv". Los clics por
  coordenada fallan (la captura y el clic tienen escalas distintas).
- En el listado de Productos, un producto oculto muestra un cartelito
  **"👁 Oculto"** debajo de los tags. Es la forma rápida de verificar.
- La **web pública cachea**: después de ocultar/mostrar o cambiar stock puede
  tardar en reflejarse. El panel es la fuente que manda.
