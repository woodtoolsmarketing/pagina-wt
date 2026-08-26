{% comment %}
=============================================================================
  WOODTOOLS - Encabezado (Tienda Nube, tema propio)
  Archivo sugerido: snipplets/wt-header.tpl
  Se incluye desde layout.tpl con:  {% include "snipplets/wt-header.tpl" %}

  OJO - ESTO NO SE PUEDE INSTALAR EN LA TIENDA ACTUAL.
  La cuenta no tiene edicion de archivos del tema, y Tienda Nube no da FTP de
  tema. Esto sirve solo si algun dia se pasa a un tema propio por el programa
  de Partners + la CLI "nube". Ver INSTALACION.md.
  Codigo NO probado en ejecucion, justamente porque no hay donde correrlo.

  Replica el header de www.woodtools.com.ar: logo a la izquierda, menu al
  centro, buscador + boton de compra + redes a la derecha. Los estilos salen
  de theme-custom.css.
=============================================================================
{% endcomment %}

<header class="head-main wt-header">
	<div class="wt-header-container">

		{% comment %} LOGO - vuelve al inicio de la tienda {% endcomment %}
		<div class="wt-logo">
			<a href="{{ store.url }}" title="{{ store.name }}">
				{% if store.logo %}
					<img src="{{ store.logo }}" alt="{{ store.name }}" width="171">
				{% else %}
					<span>{{ store.name }}</span>
				{% endif %}
			</a>
		</div>

		{% comment %}
		  MENU. Los items salen del menu configurado en Tienda online > Menus,
		  asi que se editan desde el admin sin tocar codigo. Los que apuntan al
		  sitio madre (Nosotros, Servicio de Afilado) se cargan alli como
		  links de tipo URL absoluta y se abren en la misma pestania: la idea
		  es que el usuario no perciba dos sitios.
		{% endcomment %}
		<nav class="wt-nav">
			<ul class="nav-list">
				{% for link in menus.main %}
					<li class="nav-item {% if link.links %}wt-dropdown{% endif %}">
						<a href="{{ link.url }}">{{ link.title }}</a>
						{% if link.links %}
							<ul class="nav-list-inner">
								{% for sub in link.links %}
									<li><a href="{{ sub.url }}">{{ sub.title }}</a></li>
								{% endfor %}
							</ul>
						{% endif %}
					</li>
				{% endfor %}
			</ul>
		</nav>

		<div class="wt-header-actions">

			{% comment %} BUSCADOR {% endcomment %}
			<form action="{{ store.search_url }}" method="get" class="wt-search">
				<input type="search" name="q" placeholder="Buscar herramienta…" aria-label="Buscar herramientas">
			</form>

			{% comment %}
			  El sitio tiene un boton "COMPRA AHORA" que hoy manda a Mercado
			  Libre. Adentro de la tienda ese boton no tiene sentido: aca ya
			  se compra. Se reemplaza por el carrito.
			{% endcomment %}
			<a href="{{ store.cart_url }}" class="wt-cart-link">
				Carrito (<span class="js-cart-widget-amount">{{ cart.items_count }}</span>)
			</a>

			{% comment %} REDES - los mismos perfiles del sitio {% endcomment %}
			<div class="wt-social">
				<a href="https://www.facebook.com/woodtoolsargentina" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-square-facebook facebook"></i></a>
				<a href="https://www.youtube.com/channel/UCsUxQWm2n8BMEhVQsOP_ydw" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube youtube"></i></a>
				<a href="https://www.instagram.com/woodtoolssrl/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram instagram"></i></a>
			</div>

		</div>
	</div>
</header>
