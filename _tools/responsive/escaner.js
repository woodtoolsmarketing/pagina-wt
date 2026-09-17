/* Escaner de problemas responsive del sitio.
 *
 * Carga cada pagina dentro de un iframe del ancho pedido -las media queries
 * del iframe responden a SU ancho, asi que es lo mismo que abrirla en un
 * telefono de ese ancho- y mide, ya renderizada:
 *
 *   - desborde horizontal: si la pagina se puede arrastrar de costado
 *     (scrollWidth > ancho) y QUE elementos se salen del borde derecho.
 *     Solo se informa el elemento mas externo que se sale: si un contenedor
 *     se sale, sus hijos tambien, y listarlos a todos no ayuda.
 *   - imagenes deformadas: la proporcion en pantalla no coincide con la del
 *     archivo (y no tienen object-fit que lo justifique).
 *   - imagenes mas anchas que su contenedor.
 *   - texto de menos de 12px.
 *   - botones y enlaces de menos de 32px de alto en pantallas tactiles.
 *
 * Uso: con el sitio servido en localhost (launch.json > sitio-estatico),
 * abrir cualquier pagina del sitio, cargar este script y llamar:
 *
 *   await wtEscanear(['/index.html', ...], [320, 375, 768, 1366])
 *
 * No toca nada: solo lee.
 */
(function () {
	function selector(el) {
		var partes = [];
		for (var i = 0; el && el.nodeType === 1 && i < 4; i++) {
			var s = el.tagName.toLowerCase();
			if (el.id) { s += '#' + el.id; partes.unshift(s); break; }
			var cl = (typeof el.className === 'string' ? el.className : '').trim().split(/\s+/).filter(Boolean).slice(0, 2);
			if (cl.length) s += '.' + cl.join('.');
			partes.unshift(s);
			el = el.parentElement;
		}
		return partes.join(' > ');
	}

	function recorta(w, el, W) {
		// true si algun ancestro recorta el desborde (overflow-x distinto de
		// visible) y ese ancestro si entra en pantalla: ahi el usuario no ve
		// ni puede arrastrar lo que sobra, o lo arrastra dentro de un scroll propio.
		var a = el.parentElement;
		while (a && a.tagName !== 'BODY' && a.tagName !== 'HTML') {
			var ox = w.getComputedStyle(a).overflowX;
			if (ox !== 'visible') {
				var r = a.getBoundingClientRect();
				if (r.right <= W + 1 && r.left >= -1) return true;
			}
			a = a.parentElement;
		}
		return false;
	}

	function escanearDoc(w, d, W) {
		var res = {
			ancho: W,
			scrollWidth: Math.max(d.documentElement.scrollWidth, d.body ? d.body.scrollWidth : 0),
			desbordes: [], imagenesDeformadas: [], imagenesAnchas: [],
			textoChico: [], toquesChicos: 0, toquesChicosEj: []
		};
		if (!d.body) return res;
		var todos = d.body.querySelectorAll('*');
		var sale = new Set();
		for (var i = 0; i < todos.length; i++) {
			var el = todos[i];
			var cs = w.getComputedStyle(el);
			if (cs.display === 'none' || cs.visibility === 'hidden') continue;
			var r = el.getBoundingClientRect();
			if (r.width < 1 || r.height < 1) continue;

			if ((r.right > W + 1 || r.left < -1) && !recorta(w, el, W)) {
				sale.add(el);
				if (!sale.has(el.parentElement)) {
					res.desbordes.push({
						el: selector(el), izq: Math.round(r.left), der: Math.round(r.right),
						ancho: Math.round(r.width), width: cs.width, minWidth: cs.minWidth,
						position: cs.position, whiteSpace: cs.whiteSpace
					});
				}
			}

			if (el.tagName === 'IMG' && el.naturalWidth > 0 && r.width > 4 && r.height > 4) {
				var fit = cs.objectFit;
				var real = el.naturalWidth / el.naturalHeight, vista = r.width / r.height;
				if (fit === 'fill' && Math.abs(real - vista) / real > 0.04) {
					res.imagenesDeformadas.push({ el: selector(el), src: (el.getAttribute('src') || '').split('/').slice(-2).join('/'), archivo: el.naturalWidth + 'x' + el.naturalHeight, pantalla: Math.round(r.width) + 'x' + Math.round(r.height) });
				}
				var p = el.parentElement;
				if (p) {
					var pr = p.getBoundingClientRect(), pcs = w.getComputedStyle(p);
					var interior = pr.width - parseFloat(pcs.paddingLeft) - parseFloat(pcs.paddingRight);
					if (r.width > interior + 2 && interior > 0) {
						res.imagenesAnchas.push({ el: selector(el), img: Math.round(r.width), contenedor: Math.round(interior) });
					}
				}
			}

			var tieneTexto = false;
			for (var c = el.firstChild; c; c = c.nextSibling) {
				if (c.nodeType === 3 && c.nodeValue.trim().length > 2) { tieneTexto = true; break; }
			}
			if (tieneTexto && parseFloat(cs.fontSize) < 12 && res.textoChico.length < 25) {
				res.textoChico.push({ el: selector(el), px: cs.fontSize, texto: el.textContent.trim().slice(0, 30) });
			}

			if (W <= 1024 && (el.tagName === 'A' || el.tagName === 'BUTTON' || (el.tagName === 'INPUT' && el.type !== 'hidden') || el.tagName === 'SELECT')) {
				if (r.height < 32 && r.width < 400) {
					res.toquesChicos++;
					if (res.toquesChicosEj.length < 40) res.toquesChicosEj.push({ el: selector(el), alto: Math.round(r.height), texto: el.textContent.trim().slice(0, 20) });
				}
			}
		}
		res.anchoVisible = d.documentElement.clientWidth;
		res.desbordes = res.desbordes.slice(0, 15);
		res.imagenesDeformadas = res.imagenesDeformadas.slice(0, 10);
		res.imagenesAnchas = res.imagenesAnchas.slice(0, 10);
		return res;
	}

	// No se espera el evento "load": las paginas traen mapas, videos y
	// etiquetas de terceros que pueden tardar o no terminar nunca, y el
	// "load" no llega. Para medir el layout alcanza con que el HTML este
	// parseado y las hojas de estilo PROPIAS cargadas; despues se da un
	// margen para que producto.js y filtros.js armen lo suyo.
	function listoParaMedir(f) {
		try {
			var d = f.contentDocument;
			if (!d || d.readyState === 'loading' || !d.body) return false;
			var hojas = d.querySelectorAll('link[rel="stylesheet"]');
			for (var i = 0; i < hojas.length; i++) {
				var href = hojas[i].getAttribute('href') || '';
				if (/^https?:/i.test(href)) continue;          // CDN: no se espera
				if (!hojas[i].sheet) return false;
			}
			return true;
		} catch (e) { return false; }
	}

	function cargar(url, W, alto) {
		return new Promise(function (ok) {
			var f = document.createElement('iframe');
			f.style.cssText = 'position:absolute;left:-10000px;top:0;border:0;width:' + W + 'px;height:' + (alto || 900) + 'px';
			f.src = url;
			document.body.appendChild(f);
			var t0 = Date.now();
			(function esperar() {
				if (!listoParaMedir(f) && Date.now() - t0 < 15000) return setTimeout(esperar, 150);
				// En un telefono la barra de scroll no ocupa lugar; en el iframe
				// de escritorio si (15px), y la pagina se armaria sobre 305px en
				// vez de 320. Se oculta para medir sobre el ancho real.
				try {
					var st = f.contentDocument.createElement('style');
					st.textContent = 'html{scrollbar-width:none}html::-webkit-scrollbar{width:0;height:0}';
					f.contentDocument.head.appendChild(st);
				} catch (e) {}
				setTimeout(function () {
					var r;
					try { r = escanearDoc(f.contentWindow, f.contentDocument, W); }
					catch (e) { r = { ancho: W, error: String(e) }; }
					f.remove(); ok(r);
				}, 1800);
			})();
		});
	}

	// Se miden varias combinaciones pagina/ancho a la vez: cada iframe tiene
	// su propio layout y no se pisan. "simultaneos" limita cuantas a la vez.
	window.wtEscanear = async function (paginas, anchos, alAvanzar, simultaneos) {
		var tareas = [];
		paginas.forEach(function (p) { anchos.forEach(function (W) { tareas.push([p, W]); }); });
		var salida = {}, hechas = 0, i = 0;
		paginas.forEach(function (p) { salida[p] = {}; });
		async function obrero() {
			while (i < tareas.length) {
				var t = tareas[i++];
				salida[t[0]][t[1]] = await cargar(t[0], t[1]);
				hechas++;
				if (alAvanzar) alAvanzar(hechas, tareas.length);
			}
		}
		var obreros = [];
		for (var k = 0; k < (simultaneos || 6); k++) obreros.push(obrero());
		await Promise.all(obreros);
		return salida;
	};

	// Solo lo que esta mal, agrupado por elemento: con 166 fichas, el mismo
	// defecto aparece cientos de veces y lo que importa es donde y desde que ancho.
	window.wtProblemas = function (salida) {
		var grupos = {};
		function anotar(tipo, el, p, W, extra) {
			var k = tipo + ' | ' + el;
			var g = grupos[k] || (grupos[k] = { tipo: tipo, el: el, anchos: {}, paginas: {}, ej: extra });
			g.anchos[W] = true; g.paginas[p] = true;
		}
		var scroll = [];
		Object.keys(salida).forEach(function (p) {
			Object.keys(salida[p]).forEach(function (W) {
				var r = salida[p][W];
				if (r.error) { anotar('error', r.error, p, W); return; }
				if (r.scrollWidth - r.ancho > 1) scroll.push(p + ' @' + W + ' +' + (r.scrollWidth - r.ancho) + 'px');
				r.desbordes.forEach(function (x) { anotar('desborde', x.el, p, W, x); });
				r.imagenesDeformadas.forEach(function (x) { anotar('img-deformada', x.el, p, W, x); });
				r.imagenesAnchas.forEach(function (x) { anotar('img-ancha', x.el, p, W, x); });
				r.textoChico.forEach(function (x) { anotar('texto<12px', x.el, p, W, x); });
				r.toquesChicosEj.forEach(function (x) { anotar('toque<32px', x.el, p, W, x); });
			});
		});
		var lista = Object.keys(grupos).map(function (k) {
			var g = grupos[k];
			var an = Object.keys(g.anchos).map(Number).sort(function (a, b) { return a - b; });
			var ps = Object.keys(g.paginas);
			return { tipo: g.tipo, el: g.el, anchos: an.join(','), paginas: ps.length, ejPagina: ps[0], ej: g.ej };
		});
		lista.sort(function (a, b) { return a.tipo < b.tipo ? -1 : a.tipo > b.tipo ? 1 : b.paginas - a.paginas; });
		return { scrollLateral: scroll, grupos: lista };
	};

	/* Medidas de "se ve bien o no" que el escaner de desbordes no ve:
	 * cuanto de la pantalla se come la cabecera fija, a que altura empieza el
	 * contenido, si los botones flotantes tapan el pie, cuanto ocupa el banner,
	 * y si el menu desplegable entra en pantalla. */
	function medirDoc(w, d, W, H) {
		var m = { W: W, H: H };
		function rect(s) { var e = d.querySelector(s); return e ? e.getBoundingClientRect() : null; }
		var hdr = d.querySelector('header');
		if (hdr) {
			var hr = hdr.getBoundingClientRect();
			m.cabecera = Math.round(hr.height);
			m.cabeceraFija = /sticky|fixed/.test(w.getComputedStyle(hdr).position);
			m.cabeceraPct = Math.round(hr.height / H * 100);
			var lis = [].map.call(d.querySelectorAll('nav > ul > li'), function (e) { return Math.round(e.getBoundingClientRect().top); });
			m.filasMenu = new Set(lis).size;
		}
		var hero = rect('#hero') || rect('.categoria-hero');
		if (hero) { m.banner = Math.round(hero.height); m.bannerPct = Math.round(hero.height / H * 100); }
		var primero = d.querySelector('.products-grid .product-card, .producto-container, .contact-container, .catalogo-seccion, #productos, main, section');
		if (primero) { m.contenidoEmpieza = Math.round(primero.getBoundingClientRect().top + w.scrollY); m.selContenido = selector(primero); }
		// botones flotantes vs pie, con la pagina bajada hasta el fondo
		var flot = d.querySelector('.floating-buttons');
		if (flot) {
			w.scrollTo(0, d.documentElement.scrollHeight);
			var fr = flot.getBoundingClientRect();
			var tapados = [];
			[].forEach.call(d.querySelectorAll('footer p, footer a, .footer-bottom p, .footer-contact-bar, .footer-social a'), function (e) {
				var r = e.getBoundingClientRect();
				if (r.width && r.height && r.left < fr.right && r.right > fr.left && r.top < fr.bottom && r.bottom > fr.top) tapados.push(selector(e) + ' "' + e.textContent.trim().slice(0, 25) + '"');
			});
			m.flotantesTapan = tapados.slice(0, 4);
			w.scrollTo(0, 0);
		}
		// menu desplegable de productos abierto
		var dd = d.querySelector('nav .dropdown');
		if (dd) {
			dd.classList.add('open');
			var mr = dd.querySelector('.dropdown-menu').getBoundingClientRect();
			m.menuAbierto = { izq: Math.round(mr.left), der: Math.round(mr.right), alto: Math.round(mr.height), abajo: Math.round(mr.bottom), entra: mr.left >= 0 && mr.right <= W && mr.bottom <= H };
			dd.classList.remove('open');
		}
		// tipografia del cuerpo y largo de linea
		var ps = [].filter.call(d.querySelectorAll('main p, section p, .producto-info p, .texto-inferior, .info-side p, p'), function (p) { return p.textContent.trim().length > 60 && p.getBoundingClientRect().width > 0; });
		if (ps.length) {
			var tam = ps.map(function (p) { return parseFloat(w.getComputedStyle(p).fontSize); }).sort(function (a, b) { return a - b; });
			m.textoPx = tam[Math.floor(tam.length / 2)];
			var anchos = ps.map(function (p) { var cs = w.getComputedStyle(p); return p.getBoundingClientRect().width / (parseFloat(cs.fontSize) * 0.5); });
			m.caracteresPorLinea = Math.round(Math.max.apply(null, anchos));
		}
		m.altoPagina = d.documentElement.scrollHeight;
		return m;
	}

	window.wtMedir = async function (paginas, tamanos, simultaneos) {
		var tareas = [];
		paginas.forEach(function (p) { tamanos.forEach(function (t) { tareas.push([p, t[0], t[1]]); }); });
		var salida = [], i = 0;
		async function obrero() {
			while (i < tareas.length) {
				var t = tareas[i++];
				var r = await new Promise(function (ok) {
					var f = document.createElement('iframe');
					f.style.cssText = 'position:absolute;left:-10000px;top:0;border:0;width:' + t[1] + 'px;height:' + t[2] + 'px';
					f.src = t[0]; document.body.appendChild(f);
					var t0 = Date.now();
					(function esperar() {
						if (!listoParaMedir(f) && Date.now() - t0 < 15000) return setTimeout(esperar, 150);
						try {
							var st = f.contentDocument.createElement('style');
							st.textContent = 'html{scrollbar-width:none}html::-webkit-scrollbar{width:0;height:0}';
							f.contentDocument.head.appendChild(st);
						} catch (e) {}
						setTimeout(function () {
							var m;
							try { m = medirDoc(f.contentWindow, f.contentDocument, t[1], t[2]); } catch (e) { m = { error: String(e) }; }
							m.pagina = decodeURIComponent(t[0]);
							f.remove(); ok(m);
						}, 1800);
					})();
				});
				salida.push(r);
			}
		}
		var obs = [];
		for (var k = 0; k < (simultaneos || 6); k++) obs.push(obrero());
		await Promise.all(obs);
		return salida;
	};

	/* Firma del layout: posicion y tamano de cada elemento visible. Sirve para
	 * comprobar que un cambio pensado para celular NO movio nada en escritorio:
	 * se toma la firma antes, se aplica el cambio, se toma otra y se comparan. */
	function firmaDoc(w, d) {
		var out = {}, cuenta = {};
		[].forEach.call(d.body.querySelectorAll('*'), function (el) {
			if (/^(SCRIPT|STYLE|NOSCRIPT|IFRAME)$/.test(el.tagName)) return;
			var r = el.getBoundingClientRect();
			if (r.width < 1 || r.height < 1) return;
			var s = selector(el);
			cuenta[s] = (cuenta[s] || 0) + 1;
			out[s + '#' + cuenta[s]] = [Math.round(r.left), Math.round(r.top + w.scrollY), Math.round(r.width), Math.round(r.height)].join(',');
		});
		return out;
	}

	window.wtFirmas = async function (paginas, tamanos, simultaneos) {
		var tareas = [];
		paginas.forEach(function (p) { tamanos.forEach(function (t) { tareas.push([p, t[0], t[1]]); }); });
		var salida = {}, i = 0;
		async function obrero() {
			while (i < tareas.length) {
				var t = tareas[i++];
				salida[t[0] + ' @' + t[1] + 'x' + t[2]] = await new Promise(function (ok) {
					var f = document.createElement('iframe');
					f.style.cssText = 'position:absolute;left:-10000px;top:0;border:0;width:' + t[1] + 'px;height:' + t[2] + 'px';
					f.src = t[0]; document.body.appendChild(f);
					var t0 = Date.now();
					(function esperar() {
						if (!listoParaMedir(f) && Date.now() - t0 < 15000) return setTimeout(esperar, 150);
						try {
							var st = f.contentDocument.createElement('style');
							st.textContent = 'html{scrollbar-width:none}html::-webkit-scrollbar{width:0;height:0}';
							f.contentDocument.head.appendChild(st);
						} catch (e) {}
						// los sliders se mueven solos: se congela todo lo animado
						try {
							var quieto = f.contentDocument.createElement('style');
							quieto.textContent = '*,*::before,*::after{transition:none!important;animation:none!important}';
							f.contentDocument.head.appendChild(quieto);
						} catch (e) {}
						setTimeout(function () {
							var r;
							try { r = firmaDoc(f.contentWindow, f.contentDocument); } catch (e) { r = { error: String(e) }; }
							f.remove(); ok(r);
						}, 1800);
					})();
				});
			}
		}
		var obs = [];
		for (var k = 0; k < (simultaneos || 6); k++) obs.push(obrero());
		await Promise.all(obs);
		return salida;
	};

	window.wtCompararFirmas = function (antes, despues) {
		var difs = [];
		Object.keys(antes).forEach(function (clave) {
			var a = antes[clave], b = despues[clave];
			if (!b) { difs.push(clave + ': falta la medicion nueva'); return; }
			var n = 0, ej = [];
			Object.keys(a).forEach(function (k) {
				if (a[k] !== b[k]) { n++; if (ej.length < 5) ej.push(k + ' ' + a[k] + ' -> ' + (b[k] || 'NO ESTA')); }
			});
			Object.keys(b).forEach(function (k) { if (!(k in a)) { n++; if (ej.length < 5) ej.push(k + ' NUEVO ' + b[k]); } });
			if (n) difs.push(clave + ': ' + n + ' diferencias. ' + ej.join(' | '));
		});
		return difs;
	};

	window.wtEscanearDoc = escanearDoc;
	window.wtCargar = cargar;

	// resumen de una linea por pagina y ancho, para leer rapido
	window.wtResumen = function (salida) {
		var l = [];
		Object.keys(salida).forEach(function (p) {
			Object.keys(salida[p]).forEach(function (W) {
				var r = salida[p][W];
				if (r.error) { l.push(p + ' @' + W + ' ERROR ' + r.error); return; }
				var sobra = r.scrollWidth - r.ancho;
				l.push(p + ' @' + W +
					' | scroll-lateral:' + (sobra > 1 ? '+' + sobra + 'px' : 'no') +
					' | desbordes:' + r.desbordes.length +
					' | img-deformadas:' + r.imagenesDeformadas.length +
					' | img-anchas:' + r.imagenesAnchas.length +
					' | texto<12:' + r.textoChico.length +
					' | toques<32:' + r.toquesChicos);
			});
		});
		return l.join('\n');
	};
})();
