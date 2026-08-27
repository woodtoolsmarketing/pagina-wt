/* =============================================================================
   WOODTOOLS - Fotos de producto para la Tienda Nube
   -----------------------------------------------------------------------------
   Lo carga el "codigo del sello" de tiendadewoodtoolssrl.mitiendanube.com con:
       <script src="https://www.woodtools.com.ar/tienda/fotos.js" defer></script>

   POR QUE EXISTE: Tienda Nube no deja cargar fotos por CSV (su importador no
   tiene columna de imagen) ni pegando una URL en el editor de producto. Hasta
   que las fotos se suban de verdad a la tienda, se muestran las de este sitio.

   COMO FUNCIONA: cada producto de la tienda quedo con el mismo "Identificador
   de URL" que usa el CSV (sierras-lg3d, cabezales-tm06m, ...), asi que alcanza
   con leerlo de la URL de la tarjeta o de la pagina y buscarlo en el mapa.

   PARA ACTUALIZAR: se edita este archivo y se sube por FTP. No hay que tocar
   nada en Tienda Nube.

   LIMITE CONOCIDO: estas fotos NO quedan guardadas en Tienda Nube. No sirven
   para Google Shopping, para la vista previa al compartir en redes, ni si este
   sitio se cae. Es una solucion para poder probar y para no mostrar el icono
   de camara gris mientras tanto.

   Los productos que no figuran en el mapa tampoco tienen foto en este sitio;
   esos caen en la imagen de familia que pone el CSS de la tienda.
   ============================================================================= */
(function () {
	'use strict';

	var BASE = 'https://www.woodtools.com.ar/imagenes/herramientas/';

	var FOTOS = {
		"sierras-lg3d": "Sierras/LG3D/1.jpg",
		"sierras-lu3f": "Sierras/LU3F 0100/1.jpg",
		"sierras-lu3e": "Sierras/LU3E 0200/1.jpg",
		"sierras-lu3d": "Sierras/LU3D 0200/1.jpg",
		"sierras-lsb": "Sierras/LSB25003X/1.jpg",
		"sierras-lg2a": "Sierras/LG2A/1.jpg",
		"sierras-lg2b": "Sierras/LG2B/1.jpg",
		"sierras-lu2a": "Sierras/LU2A/1.jpg",
		"sierras-lu2b": "Sierras/LU2B 2100/1.jpg",
		"sierras-lu2c": "Sierras/LU2C 1200/1.jpg",
		"sierras-lu1d": "Sierras/LU1D/1.jpg",
		"sierras-lu1f": "Sierras/LU1F/1.jpg",
		"sierras-fi14m": "Sierras/FI14M AA3/1.jpg",
		"sierras-fr09w": "Sierras/FR09W003H/1.jpg",
		"sierras-lp40m": "Sierras/LP40M 016P/1.jpg",
		"sierras-lu4a": "Sierras/LU4A 0100/1.jpg",
		"sierras-lu5b": "Sierras/LU5B/1.jpg",
		"sierras-lu5d": "Sierras/LU5D/1.jpg",
		"sierras-lu5e": "Sierras/LU5E/1.jpg",
		"sierras-lm01": "Sierras/LM01/1.jpg",
		"sierras-lm02": "Sierras/LM02/1.jpg",
		"sierras-lm04": "Sierras/LM04/1.jpg",
		"sierras-lm05": "Sierras/LM05/1.jpg",
		"sierras-lm06": "Sierras/LM06/1.jpg",
		"sierras-lm63m": "Sierras/LM63M/1.jpg",
		"sierras-li13md": "Sierras/LI13MDAA3/1 (1).jpg",
		"sierras-li13ms": "Sierras/LI13MSAA3/1.jpg",
		"sierras-li16m": "Sierras/LI16MAA3/1.jpg",
		"sierras-li25m": "Sierras/LI25M31BA3/1.jpg",
		"sierras-tr15ms": "Sierras/TR15MS/1.jpg",
		"fresas-frs": "Fresas/FRS0606/1 (1).jpg",
		"fresas-fri": "Fresas/FRI01566/1.jpeg",
		"mechas-mpd": "Mechas/Familias MPD  MPI/1.jpeg",
		"mechas-mcd-mci": "Mechas/Familias MCD  MCI/1.jpeg",
		"mechas-mcd": "Mechas/Familias MCD  MCI/1.jpeg",
		"mechas-mbi": "Mechas/Familia MB/1.jpeg",
		"mechas-mbd": "Mechas/Familia MB/1.jpeg",
		"mechas-mb": "Mechas/Familia MB/1.jpeg",
		"mechas-midn": "Mechas/Familia MIDN/1.jpg",
		"mechas-mid": "Mechas/Familia MID/1.jpeg",
		"mechas-miir": "Mechas/Familia MI/1.jpeg",
		"mechas-mi": "Mechas/Familia MI/1.jpeg",
		"mechas-mam-pinza": "Mechas/Familias MAM  PINZA/mandril para 3mm/1.jpeg",
		"mechas-mam": "Mechas/Familias MAM  PINZA/mandril para 3mm/1.jpeg",
		"mechas-mba": "Mechas/Familia MBA/1.jpeg",
		"diamante-sccd": "Diamante/Incisor diamante/1.jpg",
		"diamante-scid": "Diamante/Incisor diamante/1.jpg",
		"diamante-sced": "Diamante/Sierras diamante/1.jpg",
		"diamante-mbdd": "Diamante/Mechas diamante/1.jpg",
		"diamante-mdd": "Diamante/Mechas diamante/1.jpg",
		"cuchillas-chc-hss": "Cuchillas/CHC_HSS/1.jpg",
		"cuchillas-chc-md": "Cuchillas/CHC_MD/1.jpg",
		"cuchillas-chcr-hss": "Cuchillas/CHCR_HSS/1.jpg",
		"cuchillas-chcr-md": "Cuchillas/CHCR_MD/1.jpg",
		"cuchillas-chcech": "Cuchillas/CHC_ECH/1.jpg",
		"cabezales-t194m": "Cabezales/T194M-BB3/1.png",
		"cabezales-tm06m": "Cabezales/TM06M/1.png",
		"cabezales-t198m": "Cabezales/T198M/1.png",
		"cabezales-tw": "Cabezales/TW01MAB3/1.png",
		"cabezales-tp": "Cabezales/TP23M AB3/1.png",
		"cabezales-td": "Cabezales/TD51M/1 (1).png"
	};

	function urlDe(handle) {
		var rel = FOTOS[handle];
		if (!rel) return null;
		// Hay carpetas con espacios y parentesis: hay que codificar tramo por
		// tramo, no la ruta entera, para no romper las barras.
		return BASE + rel.split('/').map(encodeURIComponent).join('/');
	}

	function handleDe(u) {
		var p = String(u || '').split('?')[0].split('#')[0].split('/productos/')[1];
		return p ? p.replace(/\/+$/, '') : null;
	}

	// Solo se tocan los placeholders de Tienda Nube (no-photo-*.webp). Si algun
	// dia se suben fotos de verdad, este script deja de hacer efecto solo.
	function pintar(nodo, url) {
		var im = nodo.querySelectorAll('img[src*="no-photo"], img[srcset*="no-photo"]');
		for (var i = 0; i < im.length; i++) {
			im[i].removeAttribute('srcset');
			im[i].src = url;
			im[i].style.objectFit = 'contain';
		}
	}

	function aplicar() {
		try {
			// ficha de producto
			if (window.LS && window.LS.template === 'product') {
				var u = urlDe(handleDe(window.location.pathname));
				if (u) pintar(document, u);
			}
			// listados: cada tarjeta trae su propio link
			var items = document.querySelectorAll('.item');
			for (var j = 0; j < items.length; j++) {
				var a = items[j].querySelector('a[href*="/productos/"]');
				if (!a) continue;
				var uu = urlDe(handleDe(a.getAttribute('href')));
				if (uu) pintar(items[j], uu);
			}
		} catch (e) {}
	}

	function arrancar() {
		aplicar();
		// El listado se repinta con la carga infinita y con los filtros.
		try {
			var g = document.querySelector('.js-product-list, main') || document.body;
			new MutationObserver(aplicar).observe(g, { childList: true, subtree: true });
		} catch (e) {}
	}

	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar);
	else arrancar();
})();
