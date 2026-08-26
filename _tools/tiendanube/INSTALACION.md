# Tienda Nube como extensión de woodtools.com.ar

Tienda: `tiendadewoodtoolssrl.mitiendanube.com` · Tema **Morelia** · 26/08/2026

---

## Lo primero: Tienda Nube no tiene FTP de tema

El pedido asumía que se subían archivos del tema por FTP. **Eso no existe en
Tienda Nube.** Lo comprobé en el panel: en `Tienda online > Diseño` esta cuenta
solo ofrece **"Editar diseño actual"** y **"Editar logo"**. No hay
"Editar código HTML/CSS" ni acceso a archivos.

Las únicas tres formas de tocar un tema de Tienda Nube son:

| Vía | Disponible acá | Qué permite |
|---|---|---|
| Editor de diseño + Edición avanzada de CSS | **Sí** | CSS propio en todo el sitio |
| Campo "Código del sello" en el pie | **Sí** | HTML/JS propio en todas las páginas |
| Tema propio vía Partners + CLI `nube` | No | Archivos `.tpl` (Liquid). Requiere cuenta Partner y plan pago |

El FTP al que estás conectado es el de **woodtools.com.ar**, y sirve para el
sitio institucional, no para el tema de la tienda.

Por eso todo lo que pediste está resuelto por las dos primeras vías, que sí
funcionan hoy. El Liquid está entregado igual, en `liquid/`, para el día que
haya tema propio — pero está marcado como no probado, porque no hay dónde
correrlo.

---

## Estado: qué quedó instalado y funcionando

Todo esto ya está **publicado y verificado en vivo**.

### 1. Diseño clonado — `theme-custom.css`

**Dónde:** `Tienda online > Diseño > Editar diseño actual > Edición avanzada de CSS`
**Cómo:** pegar el archivo → **"Probar CSS"** → **"Publicar cambios"**.
El botón de publicar recién se habilita después de "Probar CSS".

39 reglas tomadas de `styles.css` del sitio: tipografía Segoe UI, fondo
`#f8f8f8`, rojo corporativo `#a41e22` con hover `#7d161a`, tarjetas con borde
y elevación al pasar el mouse, fotos con `object-fit: contain` (Morelia las
recortaba), menú de 14px semi-negrita, submenú rojo con letras blancas, pie
`#383c40`.

**Dos límites del editor, comprobados a mano:**

- **Borra `!important` y las variables propias (`--x`).** Y el tema Morelia sí
  usa `!important` en sus clases utilitarias, así que `.font-small` y
  `.text-center` no se pueden pisar de frente. La vuelta que funciona es poner
  la regla en el hijo, que solo hereda.
- **Borra los comentarios.** Por eso el archivo del repo es la copia
  documentada; en la tienda queda el mismo CSS pelado.

Los selectores descendientes (`.a .b`, con espacio) **sí se guardan y sí
funcionan** — lo verifiqué leyendo la hoja que sirve el storefront.

**Una diferencia aceptada:** el nombre del producto queda en 12px y el sitio
usa 13px. Ganarle obligaría a cambiar `--font-small`, que alimenta otras 21
reglas del tema (botones, formularios, chips, buscador). No compensa.

### 2. Modelo híbrido comprar + cotizar — `sello-woodtools.html`

**Dónde:** `Editar diseño actual > Pie de página > Sellos personalizados en el
footer > "Código Javascript o HTML del sello"` → pegar → **"Publicar cambios"**.

Es el único campo de esta cuenta que inyecta HTML/JS en **todas** las páginas.
(`Configuración > Códigos externos` no sirve para esto: solo tiene campos
cerrados, y sus dos campos de código libre corren nada más que en las páginas
de fin de compra.)

En la ficha de producto agrega, debajo de "Agregar al carrito", el botón
**"Consultar cotización por WhatsApp"** — contorno rojo sobre blanco, la
variante secundaria del botón del sitio, para que no compita con la compra
directa. El mensaje sale armado con nombre, SKU y URL:

> Hola WoodTools, necesito una cotización para: Sierra para Melamina LU3F 0200. Link: https://…

Debajo va el enlace de vuelta al catálogo completo del sitio: es lo que hace
que la tienda se lea como extensión y no como un sitio aparte. Importa
especialmente porque **las fresas que no son rectas se quedan en
woodtools.com.ar**.

Para cambiar el número de WhatsApp o el texto, se edita el objeto `CFG` arriba
del archivo y se vuelve a pegar.

### 3. El sitio y la tienda convergen

**Un solo menú, el mismo en los dos lados.** En la tienda, Inicio / Productos /
Nosotros / Servicio de Afilado / Contacto llevan todos a woodtools.com.ar,
igual que en el sitio. Para que el comprador no quede varado, la tienda suma
**"Comprar online"**, que es el equivalente del botón COMPRÁ AHORA del sitio.
Cada lado queda entonces con los mismos 5 ítems más una entrada de compra.

**El botón COMPRÁ AHORA del sitio ahora apunta a la tienda propia.** Antes iba
a Mercado Libre en 176 páginas y a WhatsApp en otras 8 — dos destinos
distintos para el mismo botón. Ahora las 184 van a
`tiendadewoodtoolssrl.mitiendanube.com`. **Ojo: el sitio ya no enlaza a
Mercado Libre por ningún lado.** Si conviene mantener ese canal, se revierte
cambiando una constante en el script de unificación.

**Un solo pie.** El sitio tenía tres versiones distintas: 7 páginas con un
párrafo suelto, 174 con solo la barra de contacto y 3 con la versión completa.
Las 184 quedaron con la completa — barra oscura + redes + copyright — que es
la que se corresponde con el pie de la tienda. Las clases del pie estaban solo
en `ruta-productos/CSS/styles.css`, así que se agregaron también a
`styles.css` y a `ruta-productos/styles_producto_gral.css`, junto con
`footer.footer-wt`, que anula la regla `footer {}` de esas hojas (pintaba el
pie de una sola pieza y peleaba con los tres niveles).

**Las marcas se ven en los dos lados.** El sitio ya tenía la tira de Ilma,
Schiavon, Freud, Franzoi y Nordutensili en sus 184 páginas; a la tienda se la
agrega el script del sello arriba del pie. Las imágenes se sirven desde
woodtools.com.ar — no hay protección de hotlink y se verificó que las 5 cargan
por https desde el dominio de la tienda, así que no hay que duplicar archivos
ni subirlos a mano.

**Las herramientas sin foto muestran la imagen de su familia.** En vez del
ícono de cámara gris, cada producto muestra la imagen de su familia
(`imagenes/herramientas/Productos-slide/` del sitio). El script del sello le
pone al `<body>` una clase `wt-cat-*` mirando primero la categoría y después
el nombre — en ese orden, porque "Inserto / Cuchilla para Cabezal CG03M" vive
en Cabezales y mirando el nombre primero caería en Cuchillas. Si no reconoce
la familia, queda el logo de WoodTools.

> Detalle técnico: en un `<img>`, `content: url(...)` reemplaza lo que se
> dibuja sin tocar el `src`. El placeholder se reconoce porque su archivo se
> llama `no-photo-*.webp`, y hay que matchear `src` **y** `srcset`: las
> tarjetas de más abajo cargan en diferido y ahí el nombre solo aparece en
> `srcset`.

### 4. Menú y pie: los valores cargados

**Menú** (`Tienda online > Menús`), en el orden del sitio:

| Item | Destino |
|---|---|
| Inicio | tienda |
| Productos | tienda |
| Nosotros | `woodtools.com.ar/ruta-contactanos/HTML/Quienes-somos.html` |
| Servicio de Afilado | `woodtools.com.ar/ruta-contactanos/HTML/Service.html` |
| Contacto | formulario de la tienda |

**Datos de contacto** (`Configuración > Información de contacto`), actualizados
a los del sitio:

- ventas@woodtools.com.ar *(antes: woodtoolsmarketing@gmail.com)*
- Cabildo 61 - CP (1870) - Avellaneda - Buenos Aires - Argentina *(antes: "Cabildo 61, Piñeyro")*
- +54 (11) 4218-1700 / +54 (11) 4218-1701 *(antes: el WhatsApp)*

El botón flotante de WhatsApp ya estaba activo en
`Configuración > Botón de WhatsApp` y sigue con el 11 5752-8428.

> Este formulario tiene captcha Turnstile: **no se guarda si los campos se
> completan por script**, hay que tipearlos. Anotado por si alguna vez parece
> que guardó y no guardó.

---

## Lo que falta y por qué

### Logos de marcas — 5 minutos a mano

El tema trae la sección nativa `Diseño > Página de inicio > Marcas`. Hay que
arrastrar los cinco archivos, que están en el repo del sitio:

```
imagenes/marcas/Ilma.jpeg
imagenes/marcas/Schiavon.jpeg
imagenes/marcas/Freud.jpeg
imagenes/marcas/Franzoi.jpeg
imagenes/marcas/Nordutensili.jpeg
```

**No lo puedo hacer yo:** el componente de carga de Tienda Nube consume y
limpia el campo de archivos al instante, así que la automatización no logra
adjuntar nada. Es la misma razón por la que los 3 productos de prueba siguen
sin foto.

### Píxeles — usar los campos nativos, no el código

En `Configuración > Códigos externos` hay campos nativos para el **píxel de
Meta** y **Google Analytics 4**. Son mejores que pegar el píxel a mano: Tienda
Nube ya les manda los eventos de ecommerce armados (ver producto, agregar al
carrito, compra) con productos y montos. Un píxel pegado a pelo solo ve
PageView.

**Google Tag Manager está bloqueado por plan** ("Subí de plan para vincular tu
cuenta con Tag Manager"). El contenedor del sitio es `GTM-TCRRTM5`; el snippet
quedó listo y comentado dentro de `sello-woodtools.html`, sección 2, para
activarlo cuando se pueda.

### CRM

El bloque queda comentado en `sello-woodtools.html`, sección 3. Engancha el
click en "Consultar cotización" — que es el lead B2B — y lo manda al endpoint
con producto, SKU y URL. Falta el endpoint.

### Los precios no bloquean el lanzamiento

Probado el 26/08/2026 sobre un producto de prueba: **si un producto no tiene
precio, Tienda Nube lo marca solo como `contact` y cambia "Agregar al carrito"
por "Consultar precio"**. Se guarda sin error y no rompe nada.

O sea que el catálogo entero se puede importar sin precios y la tienda funciona
como catálogo + motor de cotización desde el día uno. Después se van cargando
precios de a poco, y cada producto que recibe uno pasa solo a botón de compra
real.

Para que no queden dos botones de consulta compitiendo, el script del sello le
pone al `<body>` la clase `wt-consultar-whatsapp` cuando el producto no tiene
precio, y el CSS invierte la jerarquía:

| Producto | Botón principal | Botón secundario |
|---|---|---|
| Con precio | Agregar al carrito *(rojo lleno)* | Cotizar por WhatsApp *(contorno)* |
| Sin precio | Cotizar por WhatsApp *(rojo lleno)* | Consultar precio *(contorno)* |

El cambio es automático por producto. Para invertirlo, en el script del sello
está `prioridad_sin_precio`, que acepta `'whatsapp'` (default), `'formulario'`
o `'ninguno'`.

### Antes de importar: borrar los 3 productos de prueba

El CSV modela el catálogo como **productos-familia con variantes**, no como
productos sueltos. Los tres de prueba están adentro del CSV pero como variantes:

| Producto de prueba cargado a mano | En el CSV es |
|---|---|
| Sierra para Melamina LU3F 0200 | variante `LU3F 0200` de `sierras-lu3f` |
| Cabezal Cepillador Helicoidal TM06M AB3 de 125mm | variante `TM06M AB3` de `cabezales-tm06m` |
| Fresa Recta de Desbaste FRS0606 de 6x6mm | variante `FRS0606` de `fresas-frs` |

Si se importa sin borrarlos, quedan **duplicados**: el producto suelto por un
lado y la familia con su variante por el otro. Hay que borrar los tres primero.
Encima dos de ellos todavía tienen precios inventados.

### Subdominio `tienda.woodtools.com.ar`

`Configuración > Dominios`. Requiere **plan pago** y un CNAME hacia Tienda
Nube. Ojo con un detalle que ya se ve hoy: `www.tiendadewoodtoolssrl…` no
tiene certificado válido (`ERR_SSL_VERSION_OR_CIPHER_MISMATCH`); la dirección
buena es sin `www`.

### Bloqueos de plan / negocio

- **Importar el catálogo pide plan pago.** El CSV de 114 productos / 675
  variantes está listo en `_tools/tiendanube-productos.csv`, con las cabeceras
  ya validadas por el propio importador (0 columnas ignoradas). Según la
  comparativa de planes del panel, la carga masiva y el dominio propio entran
  desde **Esencial**; **Impulso** agrega la tabla de precios mayoristas, que es
  la función que más pega con un modelo B2B.
- **Pago Nube** lo tenés que configurar vos: es alta de medios de cobro.

---

## Archivos

```
_tools/tiendanube/
├── INSTALACION.md              este archivo
├── theme-custom.css            INSTALADO - Edición avanzada de CSS
├── sello-woodtools.html        INSTALADO - Código del sello del pie
└── liquid/                     NO instalable hoy: sólo con tema propio
    ├── wt-header.tpl
    ├── wt-footer.tpl
    ├── wt-boton-cotizacion.tpl
    └── wt-head-tracking.tpl
```

El Liquid de `liquid/` está **sin probar**, porque no hay dónde ejecutarlo.
El día que haya tema propio conviene migrar el botón de cotización de JS a
Liquid: se arma en el servidor, no depende de JavaScript y no parpadea.
