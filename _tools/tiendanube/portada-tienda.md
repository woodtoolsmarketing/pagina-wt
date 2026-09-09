# Portada de la tienda (Tienda Nube, tema Morelia)

Estado al 08/09/2026. Antes la home tenia una sola frase a medio escribir
("Que herramienta estas") y el bloque de newsletter. Nada mas.

## Mensaje de bienvenida

Editar diseno actual > Pagina de inicio > Mensaje de bienvenida.

| Campo           | Valor |
|-----------------|-------|
| Subtitulo       | Mas de 40 anos fabricando y afilando en Avellaneda. |
| Titulo          | Herramientas de corte para la industria de la madera |
| Link            | /productos |
| Texto del boton | Ver catalogo |

Lo de "mas de 40 anos" sale de Quienes-somos del sitio, no es inventado:
"Nuestra empresa cuenta con la experiencia de mas de 40 anos en el mercado de
la fabricacion y comercializacion de herramientas de corte".

## Categorias principales

Tiene dos partes y las dos hacen falta:

1. **Imagen de cada categoria** (Productos > Categorias > cada una > Imagen).
   OJO CON LA MEDIDA: el campo pide **1580 x 220** (un banner ancho), no una
   foto cuadrada. La primera vez se subio la foto cuadrada de 512x512 y el tema
   la estiro a todo el ancho: tapaba la pantalla entera y empujaba la grilla de
   productos abajo del pliegue. Ahora se sube un banner armado por canvas:
   fondo #f8f8f8, la foto de la familia a la izquierda, el nombre en rojo
   #a41e22 a 54px, "WOOD TOOLS S.R.L." abajo en gris, y una franja roja de 6px
   al pie. Se ven arriba de cada pagina de categoria.

   | Categoria | id admin | archivo |
   |-----------|----------|---------|
   | Mechas    | 40643745 | Mechas.png |
   | Sierras   | 40643746 | Sierras.jpg |
   | Fresas    | 40643766 | Fresas.png |
   | Diamante  | 40643817 | Diamante.png |
   | Cuchillas | 40643819 | Cuchillas.png |
   | Cabezales | 40643828 | Cabezales.png |

2. **Tira de imagenes del tema** (Pagina de inicio > Categorias principales).
   OJO: con la casilla "Mostrar categorias en la pagina principal" tildada NO
   alcanza; mientras esa tira este vacia, la seccion no se dibuja. Hay que
   cargar una imagen por categoria ahi tambien. Se subieron las mismas seis,
   en este orden: Sierras, Cuchillas, Mechas, Diamante, Fresas, Cabezales.

**Lo que Morelia NO hace**: no envuelve esas imagenes en un enlace ni les pone
el nombre. Quedan seis fotos inertes bajo el titulo "Categorias". El panel
tampoco ofrece un campo de link por imagen (el lapiz solo reemplaza el
archivo). El enlace y el nombre los agrega el script del sello, bloque 6,
POR POSICION. Si se reordenan las imagenes en el panel (se arrastran), hay
que reordenar la lista CATEGORIAS_HOME del sello.

## Productos destacados

Productos > Organizar productos > Destacar > Destacados (hasta 40).
Se eligio uno por familia, todos con foto cargada:

  Sierra de Ranurar · Cuchilla Plana HSS CHC · Mandril Adaptador ·
  Fresas Rectas con Incisores HM · Cabezal Replan para Multiperfil ·
  Mecha Diamante Forante HM

## Fotos de producto

Cabezales paso de 3 a 6 productos con foto propia:

  | Producto en la tienda              | id        | foto del sitio |
  |------------------------------------|-----------|----------------|
  | Cabezal Ranurador HM               | 363644246 | Cabezales/T198M/1.png |
  | Cabezal Multiperfil                | 363644266 | Cabezales/TP23M AB3/1.png |
  | Cabezal para Juntar (Finger Joint) | 363644254 | Cabezales/TW01MAB3/1.png + TW20M BF3/1.png |

Los otros 25 de Cabezales **no tienen foto en ningun lado del repo**. El sitio
tampoco: en sus listados usa Cabezales/simple.png como imagen generica, y para
CG50M usa el logo de Ilma. El manifiesto de galeria solo tiene ocho carpetas de
Cabezales: JFE8121, T194M-BB3, T198M, TD51M, TM06M, TP23M AB3, TW01MAB3 y
TW20M BF3.

**Como subir una foto a un producto**: NO sirve setear `input.files` y disparar
`change` -si se usa `document.querySelector('input[type=file]')` a secas se
agarra el input del editor de la descripcion y la foto termina adentro del
texto-. Hay que soltar el archivo en la zona de drop:

    var zona = [...document.querySelectorAll('*')].filter(function (e) {
        return /Arrastra y solta/i.test(e.textContent) && e.children.length < 4;
    }).pop();
    var dt = new DataTransfer(); dt.items.add(file);
    ['dragenter','dragover','drop'].forEach(function (t) {
        zona.dispatchEvent(new DragEvent(t, {bubbles:true, cancelable:true, dataTransfer:dt}));
    });

Despues el boton dice **"Guardar cambios"** (en Categorias dice solo "Guardar").

**NUNCA** hacer un click a ciegas sobre botones que matcheen /Cerrar/: en la
barra lateral esta "Cerrar Sesion" y cierra la sesion del admin.

## Pendiente

- **Banners promocionales** esta prendido sin banners cargados: deja un <h2>
  vacio en el medio de la home. Mide 0px de alto, no se ve, pero esta.
- El pie de la tienda dice tienda@woodtools.com.ar y CP B1868BUA; el sitio
  institucional usa ventas@woodtools.com.ar y CP (1870), y el link de Google
  Maps del sitio apunta a B1870AFA. Hay que definir cual es el bueno.
- De los 114 productos, poco mas de la mitad tienen foto.
