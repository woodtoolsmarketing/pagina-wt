# E-mails automaticos de Tienda Nube

Estilo unificado aplicado el 08/09/2026. La referencia estetica es
"Activacion de cuenta": fondo gris `#f4f4f4`, tarjeta blanca centrada,
banda roja corporativa `#a41e22` arriba y logo de WoodTools al pie.

## Donde se editan

Admin -> Configuracion -> Comunicacion -> E-mails automaticos -> (plantilla)
-> pestania **HTML** -> **Editar codigo**.

`https://tiendadewoodtoolssrl.mitiendanube.com/admin/settings/notifications/<ID>`

| ID       | Plantilla               | Estado |
|----------|-------------------------|--------|
| 51641491 | Confirmacion de compra  | shell aplicado |
| 51641492 | Confirmacion de pago    | shell aplicado |
| 51641493 | Confirmacion de envio   | shell aplicado |
| 51641494 | Cancelacion de compra   | shell aplicado |
| 51641495 | Cambio de contrasenia   | shell aplicado |
| 51641496 | Activacion de cuenta    | REFERENCIA - no lleva la banda inyectada, ya tiene la suya |
| 51641497 | Bienvenida              | shell aplicado |
| 51641498 | Carritos abandonados    | shell aplicado |
| 51641499 | Listo para retirar      | shell aplicado |
| 51641500 | Confirmacion de entrega | shell aplicado |
| 51641501 | Factura                 | shell aplicado |
| 51717108 | Edicion de compra       | shell aplicado (hubo que habilitar el HTML primero) |

## Que se le agrega a cada plantilla

1. `<style id="wt-estilo">` antes de `</head>`: fondo `#f4f4f4`, tipografia
   Arial y color de texto `#333333`.
2. Banda roja `<!--wt-banda-->` justo despues de `<body>`: tabla al 100% con
   `bgcolor="#a41e22"` y el texto "WOOD TOOLS S.R.L." centrado en blanco.
3. Pie `<!--wt-pie-->` antes de `</body>`: logo (150px) + direccion + telefono
   y mail. Se saltea si la plantilla ya tenia un logo.
4. Botones: todo `<a>` que tenga `background`/`background-color` pasa a
   `#a41e22` con texto blanco.

## Habilitar el HTML de una plantilla

"Edicion de compra" venia con la version HTML apagada (`htmlEnabled = false`),
asi que solo salia en texto plano. El interruptor esta en la pestania HTML,
"Habilitar el e-mail en HTML".

Lo importante: **Tienda Nube ya trae su propia plantilla HTML aunque este
apagada**. Al prender el interruptor aparece "Editar codigo" con 35.413 bytes
de HTML oficial, con la tabla de items, los descuentos, el envio y los totales
ya resueltos en Liquid. NO hay que escribir el cuerpo a mano: se le inyecta la
misma cascara que a las otras y listo (quedo en 36.729 bytes). Escribir el
cuerpo uno mismo es peor y mas riesgoso, porque cualquier variable Liquid mal
puesta rompe el envio.

El interruptor y el codigo se guardan juntos con un solo "Guardar".

## Trampas conocidas del editor

- **El texto hay que TIPEARLO.** Asignar `textarea.value` por script deja el
  boton Guardar deshabilitado y, si igual se guarda, se pierde el cambio.
  Lo que si funciona:
  `ta.focus(); ta.select(); document.execCommand('insertText', false, v);`
- **El asunto tambien.** Setearlo por el setter nativo anula todo el guardado.
- **Guardar navega la pagina padre**, asi que se borran los helpers que uno
  haya dejado en `window`. Por eso se hace una plantilla por vez.
- La banda usa `<span>`, no `<h1>`: el CSS propio de las plantillas pisa el
  color y la alineacion de los encabezados.
- No hay boton de "enviar prueba": para ver un mail de verdad hay que
  disparar el flujo real (crear una orden, abandonar un carrito, etc.).
