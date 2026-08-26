{% comment %}
=============================================================================
  WOODTOOLS - Bloques de seguimiento para el <head>
  Archivo sugerido: snipplets/wt-head-tracking.tpl
  Se incluye lo mas arriba posible dentro del <head> de layout.tpl:

      <head>
        {% include "snipplets/wt-head-tracking.tpl" %}
        ...

  MISMA ADVERTENCIA: no instalable en la tienda actual. Codigo NO probado.

  ANTES DE USAR ESTO, LEER:
  En la tienda actual NO hace falta tocar el <head> para los pixeles. Hay
  campos nativos en Configuracion > Codigos externos, y son mejores que pegar
  el pixel a mano, porque Tienda Nube ya les manda los eventos de ecommerce
  armados (ver producto, agregar al carrito, iniciar checkout, compra) con el
  detalle de productos y montos. Un pixel pegado a pelo solo ve PageView.

      Pixel de Meta ......... Codigos externos > Facebook > Campanias
      Google Analytics 4 .... Codigos externos > Google > Analytics 4
      Verificacion Google ... Codigos externos > Metaetiqueta de Google
      Verificacion Bing ..... Codigos externos > Metaetiqueta de Bing
      Data Fiscal AFIP ...... Codigos externos > AFIP
      Google Tag Manager .... Codigos externos > GTM  (PIDE PLAN SUPERIOR)

  Este archivo queda para lo que esos campos NO cubren.
=============================================================================
{% endcomment %}


{% comment %} ---------------------------------------------------------------
  GOOGLE TAG MANAGER
  El contenedor del sitio institucional es GTM-TCRRTM5 (esta en index.html de
  woodtools.com.ar). Usar el mismo permite ver los dos dominios en un solo
  contenedor. Descomentar para activar.
------------------------------------------------------------------------- {% endcomment %}
{% comment %}
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TCRRTM5');</script>
{% endcomment %}


{% comment %} ---------------------------------------------------------------
  CAPA DE DATOS
  Le da a GTM / Meta / Ads el contexto de la pagina antes de que carguen los
  pixeles. Con esto se pueden armar audiencias y catalogos dinamicos sin
  volver a tocar el tema.
------------------------------------------------------------------------- {% endcomment %}
<script>
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		tienda:  {{ store.name | json }},
		pagina:  {{ template | json }}
		{% if template == 'product' %}
		, producto: {
			id:     {{ product.id | json }},
			nombre: {{ product.name | json }},
			sku:    {{ product.selected_or_first_available_variant.sku | json }},
			precio: {{ product.price | json }},
			marca:  {{ product.brand | json }}
		}
		{% endif %}
	});
</script>


{% comment %} ---------------------------------------------------------------
  META ADS - pixel manual
  Solo si por algun motivo no se usa el campo nativo. Reemplazar ID_DEL_PIXEL.
------------------------------------------------------------------------- {% endcomment %}
{% comment %}
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'ID_DEL_PIXEL');
fbq('track', 'PageView');
</script>
{% endcomment %}


{% comment %} ---------------------------------------------------------------
  GOOGLE ADS - etiqueta de conversion
  Reemplazar AW-XXXXXXXXX.
------------------------------------------------------------------------- {% endcomment %}
{% comment %}
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'AW-XXXXXXXXX');
</script>
{% endcomment %}


{% comment %} ---------------------------------------------------------------
  CRM - captura del lead de cotizacion
  El click en "Consultar cotizacion" es el lead B2B: es la persona que pide
  presupuesto en vez de comprar de una. Completar el endpoint y descomentar.
  keepalive es importante: sin eso la peticion se corta cuando la pestania
  salta a WhatsApp.
------------------------------------------------------------------------- {% endcomment %}
{% comment %}
<script>
document.addEventListener('click', function (ev) {
	var b = ev.target.closest ? ev.target.closest('.wt-btn-cotizar') : null;
	if (!b) return;
	fetch('https://CRM/endpoint', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			producto: {{ product.name | json }},
			sku:      {{ product.selected_or_first_available_variant.sku | json }},
			url:      window.location.href,
			origen:   'tiendanube-cotizacion'
		}),
		keepalive: true
	}).catch(function(){});
});
</script>
{% endcomment %}
