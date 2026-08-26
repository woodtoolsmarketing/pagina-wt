{% comment %}
=============================================================================
  WOODTOOLS - Pie de pagina (Tienda Nube, tema propio)
  Archivo sugerido: snipplets/wt-footer.tpl
  Se incluye desde layout.tpl con:  {% include "snipplets/wt-footer.tpl" %}

  MISMA ADVERTENCIA QUE EL HEADER: no se puede instalar en la tienda actual
  (no hay edicion de archivos de tema ni FTP de tema). Ver INSTALACION.md.
  Codigo NO probado en ejecucion.

  Replica el pie de www.woodtools.com.ar mas la tira de marcas representadas.
=============================================================================
{% endcomment %}

{% comment %}
  TIRA DE MARCAS REPRESENTADAS.
  En la tienda actual esto NO hace falta codearlo: el tema Morelia ya trae una
  seccion nativa "Marcas" en la pagina de inicio (Diseno > Pagina de inicio >
  Marcas). Este bloque es para el caso de tema propio.
  Los archivos estan en el repo del sitio, en imagenes/marcas/.
{% endcomment %}
<section class="wt-marcas">
	{% assign marcas = "Ilma,Schiavon,Freud,Franzoi,Nordutensili" | split: "," %}
	{% for m in marcas %}
		<img loading="lazy"
		     src="{{ 'marcas-' | append: m | append: '.jpeg' | static_url }}"
		     alt="{{ m }}">
	{% endfor %}
</section>

<footer class="footer-colors wt-footer">
	<div class="wt-footer-inner">

		{% comment %} Datos obligatorios (Resolucion 104/2005) + los del sitio {% endcomment %}
		<p class="wt-footer-datos">
			{{ store.name }}:
			Cabildo 61 - CP (1870) - Avellaneda - Buenos Aires - Argentina
			&nbsp;|&nbsp; +54 (11) 4218-1700 &oacute; +54 (11) 4218-1701
			&nbsp;|&nbsp; <a href="mailto:ventas@woodtools.com.ar">ventas@woodtools.com.ar</a>
		</p>

		{% comment %}
		  VUELTA AL SITIO MADRE. Es la parte que hace que la tienda se lea como
		  una extension y no como otro sitio. Las fresas que no son rectas se
		  quedan en woodtools.com.ar, asi que el enlace al catalogo completo
		  tiene que estar siempre a mano.
		{% endcomment %}
		<nav class="wt-footer-links">
			<a href="https://www.woodtools.com.ar/">Sitio institucional</a>
			<a href="https://www.woodtools.com.ar/ruta-productos/HTML/productos.html">Catálogo completo</a>
			<a href="https://www.woodtools.com.ar/ruta-productos/fresas-madera.html">Fresas</a>
			<a href="https://www.woodtools.com.ar/ruta-contactanos/HTML/Service.html">Servicio de afilado</a>
			<a href="https://www.woodtools.com.ar/ruta-contactanos/HTML/Quienes-somos.html">Quiénes somos</a>
		</nav>

		<div class="wt-social">
			<a href="https://www.facebook.com/woodtoolsargentina" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-square-facebook facebook"></i></a>
			<a href="https://www.youtube.com/channel/UCsUxQWm2n8BMEhVQsOP_ydw" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube youtube"></i></a>
			<a href="https://www.instagram.com/woodtoolssrl/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram instagram"></i></a>
		</div>

		<p class="wt-footer-legal">
			Copyright {{ store.name }} - {{ 'now' | date: '%Y' }}. Todos los derechos reservados.
		</p>

	</div>
</footer>

{% comment %}
  BOTONES FLOTANTES (mail + WhatsApp), como en el sitio.
  En la tienda actual el de WhatsApp ya esta activo desde
  Configuracion > Boton de WhatsApp, asi que ahi solo faltaria el de mail.
{% endcomment %}
<div class="wt-floating">
	<a href="mailto:ventas@woodtools.com.ar" aria-label="Enviar email">
		<img src="{{ 'mail.png' | static_url }}" alt="Enviar email">
	</a>
	<a href="https://wa.me/5491157528428" target="_blank" rel="noopener" aria-label="Enviar WhatsApp">
		<img src="{{ 'whatsapp.png' | static_url }}" alt="Enviar WhatsApp">
	</a>
</div>
