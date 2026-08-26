{% comment %}
=============================================================================
  WOODTOOLS - Modelo hibrido: comprar + cotizar
  Archivo sugerido: snipplets/wt-boton-cotizacion.tpl
  Se incluye DENTRO del formulario de compra de product.tpl, justo despues
  del boton "Agregar al carrito":

      {% include "snipplets/wt-boton-cotizacion.tpl" %}

  MISMA ADVERTENCIA: no instalable en la tienda actual (no hay edicion de
  archivos de tema ni FTP de tema). Codigo NO probado en ejecucion.

  EN LA TIENDA ACTUAL ESTO YA ESTA FUNCIONANDO, pero resuelto por JavaScript
  desde el campo del sello (ver sello-woodtools.html). Esta version en Liquid
  es mejor -- se arma en el servidor, no depende de JS y no parpadea -- y es
  la que habria que usar el dia que haya tema propio.
=============================================================================
{% endcomment %}

{% comment %}
  El mensaje se arma en el servidor con el nombre, el SKU y la URL canonica.
  url_encode es lo que evita que se rompa con los espacios y los acentos
  (LU3F 0200, cotización, 6x6mm...).
{% endcomment %}
{% assign wt_tel = "5491157528428" %}

{% assign wt_etiqueta = product.name %}
{% if product.selected_or_first_available_variant.sku %}
	{% assign wt_etiqueta = wt_etiqueta | append: " (código " | append: product.selected_or_first_available_variant.sku | append: ")" %}
{% endif %}

{% assign wt_mensaje = "Hola WoodTools, necesito una cotización para: "
	| append: wt_etiqueta
	| append: ". Link: "
	| append: product.canonical_url %}

<a class="wt-btn-cotizar"
   href="https://wa.me/{{ wt_tel }}?text={{ wt_mensaje | url_encode }}"
   target="_blank"
   rel="noopener">
	<svg class="wt-ico-wa" viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.4.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.9-1.4-1.3-3-1.3-4.6 0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.7 8.5-8.3 8.5z"/></svg>
	Consultar cotización por WhatsApp
</a>

<p class="wt-nota-catalogo">
	¿No encontrás la herramienta? Ver el catálogo completo en
	<a href="https://www.woodtools.com.ar/ruta-productos/HTML/productos.html">woodtools.com.ar</a>
</p>
