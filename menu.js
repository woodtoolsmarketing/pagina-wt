/* Menu desplegable de la cabecera (PRODUCTOS y CONTACTANOS), en las 186 paginas.
 *
 * Antes el menu se abria con el primer toque (un onclick inline que agrega la
 * clase .open) pero NUNCA se cerraba: no habia ningun codigo que sacara .open.
 * Tocar afuera no hacia nada y el menu abierto tapaba contenido. CONTACTANOS
 * ni siquiera tenia onclick: su href="#" mandaba al principio de la pagina.
 *
 * Comportamiento (igual con mouse que con dedo):
 *   - clic en el TEXTO de PRODUCTOS: va a productos.html (catalogo general)
 *   - clic en la FLECHA de PRODUCTOS: abre/cierra el submenu (no navega)
 *   - clic en CONTACTANOS (texto o flecha, href="#"): abre/cierra el submenu
 *   - tocar en cualquier otro lado, Escape, o volver atras: cierra
 *
 * Escucha en fase de captura, asi decide antes que el onclick inline del <a>
 * sin tener que tocar ese onclick en las 186 paginas.
 */
(function () {
	function cerrar(salvo) {
		var abiertos = document.querySelectorAll('nav .dropdown.open');
		for (var i = 0; i < abiertos.length; i++) {
			if (abiertos[i] === salvo) continue;
			abiertos[i].classList.remove('open');
			var a = abiertos[i].querySelector('a');
			if (a) delete a.dataset.abierto;
		}
	}

	document.addEventListener('click', function (e) {
		var a = e.target.closest ? e.target.closest('nav .dropdown > a') : null;
		if (!a) return;
		var li = a.parentElement;
		var href = a.getAttribute('href') || '';
		var tienePagina = href && href !== '#';            // PRODUCTOS si; CONTACTANOS (href="#") no
		var icon = a.querySelector('i, svg');              // la flecha (caret)
		var enFlecha = !!(icon && (e.target === icon || (icon.contains && icon.contains(e.target))));

		// Decidimos nosotros: bloqueamos la navegacion por defecto y el onclick
		// inline del <a>, y elegimos si togglear o navegar.
		e.preventDefault();
		e.stopPropagation();

		// La FLECHA abre/cierra el submenu (NUNCA navega). Un titulo sin pagina
		// (CONTACTANOS, href="#") tambien togglea al tocar el texto.
		if (enFlecha || !tienePagina) {
			if (li.classList.contains('open')) cerrar();           // segundo toque: cierra
			else { cerrar(li); li.classList.add('open'); a.dataset.abierto = '1'; }  // abre
			return;
		}

		// Click en el TEXTO de un titulo CON pagina (PRODUCTOS): va al catalogo
		// general (productos.html), tanto en celular como en escritorio.
		cerrar();
		window.location.href = a.href;
	}, true);

	// pointerdown y no click: Safari de iPhone no manda "click" al documento
	// cuando se toca algo que no es un enlace ni un boton.
	document.addEventListener('pointerdown', function (e) {
		if (!e.target.closest || !e.target.closest('nav .dropdown')) cerrar();
	});

	// Escape cierra y deja el foco en el titulo del menu: si el foco estaba en
	// un item, al esconderse el menu el navegador lo mandaba al <body>.
	document.addEventListener('keydown', function (e) {
		if (e.key !== 'Escape') return;
		var act = document.activeElement;
		var li = act && act.closest ? act.closest('nav .dropdown.open') : null;
		cerrar();
		if (li) li.querySelector('a').focus();
	});

	// con teclado, al salir del menu con Tab se cierra (si no, quedaba abierto
	// tapando lo que tiene el foco)
	document.addEventListener('focusin', function (e) {
		if (!e.target.closest || !e.target.closest('nav .dropdown')) cerrar();
	});

	// Al volver atras el navegador puede restaurar la pagina con el menu
	// abierto. Solo en ese caso (persisted): "pageshow" tambien se dispara al
	// terminar la carga normal, y cerraba un menu que el usuario ya habia abierto.
	window.addEventListener('pageshow', function (e) { if (e.persisted) cerrar(); });
})();

/* ==========================================================================
 * ITEM "INSERTOS" EN EL DESPLEGABLE "PRODUCTOS" (todas las paginas, sin tocar
 * los 186 HTML). Clona el <li> de "Cabezales" (asi hereda el prefijo relativo
 * correcto segun la profundidad de la pagina y el icono) y lo apunta a la
 * grilla de insertos. Aparece tanto en el desplegable de escritorio como en
 * el cajon de celular (es el mismo <nav>).
 * ========================================================================== */
(function () {
	// Buscar el <li> de "Cabezales" por TEXTO (robusto: en algunas paginas el href
	// es "cabezales.html" y en otras "Cabezales.html" -> un selector por href fallaba).
	var links = document.querySelectorAll('nav .dropdown-menu a');
	var cabLink = null;
	for (var i = 0; i < links.length; i++) {
		if ((links[i].textContent || '').trim().toLowerCase() === 'cabezales') { cabLink = links[i]; break; }
	}
	if (!cabLink) return;
	var cabLi = cabLink.closest('li');
	if (!cabLi || !cabLi.parentNode) return;
	if (cabLi.parentNode.querySelector('a[href$="HTML/Insertos.html"]')) return;   // idempotente
	var nuevo = cabLi.cloneNode(true);
	var a = nuevo.querySelector('a');
	// Ruta ABSOLUTA: anda desde cualquier pagina sin importar la profundidad.
	a.setAttribute('href', '/ruta-productos/HTML/Insertos.html');
	// Cambiar el texto "Cabezales" por "Insertos" (el ultimo nodo de texto del <a>).
	for (var n = a.lastChild; n; n = n.previousSibling) {
		if (n.nodeType === 3 && n.nodeValue.trim()) { n.nodeValue = 'Insertos'; break; }
	}
	// Usar el icono propio de Insertos (en vez del de Cabezales clonado); mantiene el prefijo relativo.
	var img = a.querySelector('img');
	if (img) { img.setAttribute('alt', 'Insertos'); img.setAttribute('src', img.getAttribute('src').replace(/Cabezales\.png$/i, 'Insertos.png')); }
	cabLi.parentNode.insertBefore(nuevo, cabLi.nextSibling);
})();

/* ==========================================================================
 * MENU HAMBURGUESA (celular, <=900px)
 * Inyecta el boton en TODAS las paginas (sin tocar los HTML) y convierte el
 * <nav> en un cajon que se abre/cierra. En escritorio el boton esta oculto por
 * CSS (responsive.css) y el nav se ve normal. El toggle de los desplegables lo
 * sigue manejando la IIFE de arriba (clase .open); aca solo se agrega el cajon.
 * ========================================================================== */
(function () {
	var cont = document.querySelector('header .header-container');
	var nav = cont && cont.querySelector('nav');
	if (!cont || !nav) return;
	if (cont.querySelector('.nav-toggle')) return;   // idempotente

	nav.id = nav.id || 'menu-principal';
	var btn = document.createElement('button');
	btn.type = 'button';
	btn.className = 'nav-toggle';
	btn.setAttribute('aria-label', 'Abrir menú');
	btn.setAttribute('aria-expanded', 'false');
	btn.setAttribute('aria-controls', nav.id);
	btn.innerHTML = '<span></span><span></span><span></span>';
	cont.appendChild(btn);   // el CSS lo ubica a la derecha en celular

	function abrir(v) {
		document.body.classList.toggle('nav-abierto', v);
		btn.setAttribute('aria-expanded', v ? 'true' : 'false');
		btn.setAttribute('aria-label', v ? 'Cerrar menú' : 'Abrir menú');
	}
	btn.addEventListener('click', function (e) {
		e.stopPropagation();
		abrir(!document.body.classList.contains('nav-abierto'));
	});
	// Tocar un enlace del nav cierra el cajon. Excepcion: el <a> padre de un
	// desplegable (PRODUCTOS/CONTACTANOS) es un toggle del submenu -> no cerrar.
	nav.addEventListener('click', function (e) {
		var a = e.target.closest ? e.target.closest('a') : null;
		if (!a) return;
		var li = a.parentElement;
		if (li && li.classList.contains('dropdown')) return;
		abrir(false);
	});
	// Tocar fuera del header cierra el cajon.
	document.addEventListener('click', function (e) {
		if (!document.body.classList.contains('nav-abierto')) return;
		if (e.target.closest && e.target.closest('header')) return;
		abrir(false);
	});
	document.addEventListener('keydown', function (e) { if (e.key === 'Escape') abrir(false); });
	window.addEventListener('pageshow', function (e) { if (e.persisted) abrir(false); });
	// Si se agranda a escritorio con el cajon abierto, se cierra para no dejarlo pegado.
	window.addEventListener('resize', function () { if (window.innerWidth > 900) abrir(false); });
})();

/* ==========================================================================
 * BOTONES FLOTANTES (WhatsApp/Gmail) SCROLL-AWARE (celular)
 * En celular tapaban contenido y CTAs. Ahora, debajo de 900px, se ocultan al
 * bajar (mientras se lee/escanea) y reaparecen al subir o al frenar. En
 * escritorio no cambian. No hace nada en paginas sin botones flotantes.
 * ========================================================================== */
(function () {
	var fab = document.querySelector('.floating-buttons');
	if (!fab) return;
	var ultimo = window.pageYOffset || 0, oculto = false, t;
	function set(v) { if (v === oculto) return; oculto = v; fab.classList.toggle('fab-oculto', v); }
	window.addEventListener('scroll', function () {
		if (window.innerWidth > 900) { set(false); return; }
		var y = window.pageYOffset || 0;
		if (y > ultimo + 6 && y > 140) set(true);        // bajando -> ocultar
		else if (y < ultimo - 6) set(false);             // subiendo -> mostrar
		ultimo = y;
		clearTimeout(t);
		t = setTimeout(function () { set(false); }, 900); // al frenar, reaparecen
	}, { passive: true });
})();
