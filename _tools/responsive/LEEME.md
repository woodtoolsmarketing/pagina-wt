# Responsive del sitio

## Como esta armado

- **`/responsive.css`**: todo lo responsive comun (cabecera, menu, pie, botones
  flotantes, banners, controles tactiles). Va enlazada como **ULTIMA hoja** en
  las 185 paginas. Tiene que seguir siendo la ultima: la cabecera y el pie
  estan repetidos en `styles.css`, `ruta-productos/CSS/styles.css` y
  `ruta-productos/styles_producto_gral.css`, y con la misma especificidad gana
  la hoja que se carga despues.
- **`/menu.js`**: abre y cierra los desplegables de la cabecera (antes se
  abrian con el primer toque y no se cerraban nunca). Enlazado con `defer` en
  las 185 paginas.
- Lo propio de cada plantilla sigue en su hoja: `lista-productos.css`
  (filtros plegables, chips, titulos de tarjeta), `producto-detalle.css`
  (galeria, tarjeta en tablet) y el `<style>` inline de cada institucional.
- En los 7 listados, `filtros.js` maneja el boton **Filtrar** (panel plegado
  hasta 768px, con contador de filtros activos).

## Puntos de quiebre

| Ancho | Que cambia |
|---|---|
| >= 1280px | Escritorio: igual que siempre. |
| <= 1279px | Cabecera en dos filas (logo + acciones arriba, menu abajo). Por debajo de ~1205px (Windows), ~1277px (Mac) o ~1340px (iPhone/iPad) la de una fila no entraba. |
| <= 1279px tactil, <= 900px, o pantalla baja tactil | La cabecera deja de ser fija y sube con la pagina. |
| <= 900px | Desplegable a todo el ancho; pie con espacio para los botones flotantes. |
| <= 768px | Filtros plegados detras de "Filtrar" y como chips; miniaturas de la galeria en una fila deslizable. |
| <= 600px | Iconos sociales de la cabecera ocultos (estan en el pie). |
| <= 480px | Flechas del slider abajo en las esquinas. |
| `pointer: coarse` | Botones y enlaces de 40-44px; campos de texto a 16px (evita el zoom automatico del iPhone). |

## Paginas nuevas

Toda pagina nueva tiene que llevar, igual que las demas:

```html
<link rel="stylesheet" href="(ruta)/responsive.css?v=2">   <!-- ultima hoja del head -->
<script src="(ruta)/menu.js?v=2" defer></script>           <!-- antes de </body> -->
```

`generar-fresas-nuevas.sh` ya lo incluye. Si se crean paginas a mano o con
otro script, correr despues:

```
node _tools/responsive/enlazar-responsive.js            (simulacro)
node _tools/responsive/enlazar-responsive.js --escribir
```

Es idempotente: lo que ya esta no lo repite. Si se vuelve a tocar
`responsive.css` o `menu.js`, subir `V_RESPONSIVE` / `V_MENU` en ese script (y
agregar la version vieja->nueva en `VERSIONES`) para que los navegadores no
sigan usando la copia guardada.

## Como comprobar que nada se rompio

Con el sitio servido en local (`.claude/launch.json` > `sitio-estatico`, puerto
8123), abrir cualquier pagina y en la consola:

```js
await new Promise(r => { const s = document.createElement('script'); s.src = '/_tools/responsive/escaner.js'; s.onload = r; document.head.appendChild(s); });
const lista = await (await fetch('/_tools/responsive/paginas.json')).json();

// 1) desbordes, imagenes deformadas, texto chico, toques chicos
const r = await wtEscanear(lista.generales, [320, 375, 768, 1024, 1280], null, 8);
wtProblemas(r);

// 2) escritorio identico: firma ANTES del cambio, firma DESPUES, comparar
const antes = await wtFirmas(lista.generales, [[1366, 768], [1920, 1080]]);
// ... aplicar el cambio y recargar el script ...
const despues = await wtFirmas(lista.generales, [[1366, 768], [1920, 1080]]);
wtCompararFirmas(antes, despues);   // [] = nada se movio
```

Ojo: el escaner corre en un navegador de escritorio (con mouse), asi que las
reglas `pointer: coarse` y `hover: none` no se ven ahi. Para eso usar el modo
celular del navegador (DevTools) o un telefono real.

En las fichas la galeria rota sola la miniatura activa: esas 2-5 diferencias
en `img.mini-img` son ruido, no un cambio.
