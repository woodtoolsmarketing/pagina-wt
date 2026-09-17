/* Menu desplegable de la cabecera (PRODUCTOS y CONTACTANOS), en las 186 paginas.
 *
 * Antes el menu se abria con el primer toque (un onclick inline que agrega la
 * clase .open) pero NUNCA se cerraba: no habia ningun codigo que sacara .open.
 * Tocar afuera no hacia nada y el menu abierto tapaba contenido. CONTACTANOS
 * ni siquiera tenia onclick: su href="#" mandaba al principio de la pagina.
 *
 * Comportamiento (igual con mouse que con dedo):
 *   - primer toque/clic en el titulo: abre ese menu y cierra el otro
 *   - segundo toque en PRODUCTOS: navega a productos.html (como antes)
 *   - segundo toque en CONTACTANOS (href="#"): cierra
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

		if (li.classList.contains('open')) {
			if (a.getAttribute('href') === '#') {
				e.preventDefault();
				e.stopPropagation();
				cerrar();
			}
			// PRODUCTOS: se deja pasar. El onclick inline ve dataset.abierto
			// puesto, no frena el clic y el enlace navega.
			return;
		}

		e.preventDefault();
		e.stopPropagation();          // el onclick inline no llega a correr
		cerrar(li);
		li.classList.add('open');
		a.dataset.abierto = '1';
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
