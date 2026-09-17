/* Enlaza la hoja responsive comun y el arreglo del menu en todo el sitio.
 *
 * En cada pagina del sitio (no Prueba2, prueba, tienda, _tools ni _admin):
 *   - <link rel="stylesheet" href=".../responsive.css?v=N"> como ULTIMA hoja
 *     enlazada del <head> (tiene que ganarle a las otras tres hojas que
 *     repiten la cabecera y el pie; ver el comentario de responsive.css).
 *   - <script src=".../menu.js?v=N" defer></script> antes de </body>.
 * En los 7 listados con filtros, ademas:
 *   - <script>document.documentElement.classList.add('js')</script> en el
 *     <head>: los filtros se pliegan en celular SOLO si hay JavaScript (si no,
 *     no habria forma de abrirlos). Va en el <head> para que no se vean un
 *     instante abiertos y despues se cierren.
 *   - el boton "Filtrar" despues del titulo del panel de filtros.
 * Y sube el ?v= de las hojas y scripts que cambiaron, para que los
 * navegadores no sigan usando la version vieja guardada.
 *
 * Es idempotente: si algo ya esta, no lo repite.
 *
 * Uso:  node enlazar-responsive.js             (simulacro, no escribe)
 *       node enlazar-responsive.js --escribir
 */

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..', '..');
const ESCRIBIR = process.argv.includes('--escribir');
const V_RESPONSIVE = 2;
const V_MENU = 2;

// archivo que cambio -> [version vieja, version nueva]
// (historial: 1a pasada lista 12->13, filtros 19->20, producto-detalle 10->11,
//  producto.js 17->18; correccion tras la revision producto.js 18->19;
//  alta mecha Practiwall + Plegado (sub-rubro "Otras") producto.js 19->20,
//  filtros.js 20->21)
const VERSIONES = {
	'producto.js': [19, 20],
	'filtros.js': [20, 21]
};

const EXCLUIR = new Set(['Prueba2', 'prueba', 'tienda', '_tools', '_admin', '.git', '.claude', 'node_modules', 'imagenes']);

const BOTON_FILTRAR = '<button type="button" class="filtros-toggle" aria-expanded="false">Filtrar</button>';
const MARCA_JS = "<script>document.documentElement.classList.add('js')</script>";

const paginas = [];
(function rec(dir) {
	for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
		if (e.isDirectory()) { if (!EXCLUIR.has(e.name)) rec(path.join(dir, e.name)); }
		else if (e.name.endsWith('.html')) paginas.push(path.join(dir, e.name));
	}
})(RAIZ);

const cuenta = { paginas: 0, css: 0, menu: 0, marcaJs: 0, boton: 0, versiones: 0, sinHead: [], redirecciones: 0 };

paginas.forEach(function (abs) {
	const rel = path.relative(RAIZ, abs).split(path.sep).join('/');
	let h = fs.readFileSync(abs, 'utf8');
	const antes = h;

	// la de ruta-contactanos/HTML/index.html solo redirige a la home
	if (/http-equiv="refresh"/i.test(h) && !/<header/i.test(h)) { cuenta.redirecciones++; return; }

	const prefijo = '../'.repeat(rel.split('/').length - 1);

	// 1. hoja responsive como ultima hoja enlazada del <head>
	if (h.indexOf('responsive.css') < 0) {
		const head = h.slice(0, h.search(/<\/head>/i));
		const links = [...head.matchAll(/<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi)];
		if (!links.length) { cuenta.sinHead.push(rel); }
		else {
			const ult = links[links.length - 1];
			const fin = ult.index + ult[0].length;
			const sangria = (head.slice(0, ult.index).match(/[ \t]*$/) || [''])[0];
			h = h.slice(0, fin) + '\n' + sangria + '<link rel="stylesheet" href="' + prefijo + 'responsive.css?v=' + V_RESPONSIVE + '">' + h.slice(fin);
			cuenta.css++;
		}
	}

	// 2. menu.js antes de </body>
	if (h.indexOf('menu.js') < 0) {
		const i = h.search(/<\/body>/i);
		if (i >= 0) {
			h = h.slice(0, i) + '    <script src="' + prefijo + 'menu.js?v=' + V_MENU + '" defer></script>\n' + h.slice(i);
			cuenta.menu++;
		}
	}

	// 3. listados con filtros
	if (/class="filters-sidebar"/.test(h)) {
		if (h.indexOf(MARCA_JS) < 0) {
			h = h.replace(/(<head[^>]*>)/i, '$1\n    ' + MARCA_JS);
			cuenta.marcaJs++;
		}
		if (h.indexOf('filtros-toggle') < 0) {
			h = h.replace(/(<aside class="filters-sidebar">\s*<h2>[\s\S]*?<\/h2>)/, function (m) { return m + '\n                ' + BOTON_FILTRAR; });
			if (h.indexOf('filtros-toggle') >= 0) cuenta.boton++;
		}
	}

	// 4. responsive.css y menu.js siempre a la version actual
	h = h.replace(/(responsive\.css)\?v=\d+/g, function (m, a) {
		const n = a + '?v=' + V_RESPONSIVE; if (n !== m) cuenta.versiones++; return n;
	});
	h = h.replace(/(menu\.js)\?v=\d+/g, function (m, a) {
		const n = a + '?v=' + V_MENU; if (n !== m) cuenta.versiones++; return n;
	});

	// 5. versiones de lo que cambio
	Object.keys(VERSIONES).forEach(function (archivo) {
		const [vieja, nueva] = VERSIONES[archivo];
		const re = new RegExp('(/' + archivo.replace('.', '\\.') + ')\\?v=' + vieja + '(["\'])', 'g');
		h = h.replace(re, function (m, a, q) { cuenta.versiones++; return a + '?v=' + nueva + q; });
	});

	if (h !== antes) {
		cuenta.paginas++;
		if (ESCRIBIR) fs.writeFileSync(abs, h);
	}
});

console.log(ESCRIBIR ? '=== ESCRITO ===' : '=== SIMULACRO (no se escribio nada) ===');
console.log('paginas encontradas         : ' + paginas.length);
console.log('redirecciones salteadas     : ' + cuenta.redirecciones);
console.log('paginas modificadas         : ' + cuenta.paginas);
console.log('responsive.css enlazada     : ' + cuenta.css);
console.log('menu.js enlazado            : ' + cuenta.menu);
console.log('marca .js en listados       : ' + cuenta.marcaJs);
console.log('boton Filtrar en listados   : ' + cuenta.boton);
console.log('versiones subidas (?v=)     : ' + cuenta.versiones);
if (cuenta.sinHead.length) console.log('SIN <link> de hoja (revisar): ' + cuenta.sinHead.join(', '));
