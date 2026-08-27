/* Arma una copia COMPLETA del sitio con la integracion a Tienda Nube aplicada,
 * para seguir desarrollandola sin tocar el sitio publico.
 *
 * Destino local: Prueba2/   ->  se sube al directorio /Prueba2/ del servidor.
 *
 * Que copia: todo el codigo del sitio (HTML, CSS, JS, JSON) = ~203 archivos.
 * Que NO copia: imagenes/ (62 MB, 618 archivos). Las referencias se reescriben
 * a absolutas contra www.woodtools.com.ar, asi la copia pesa poco y siempre ve
 * las fotos actualizadas del sitio real.
 *
 * Despues de copiar aplica, sobre la copia:
 *   - enlazar-a-tiendanube.js  (tarjetas -> ficha/variante de Tienda Nube)
 *   - precios-en-tarjetas.js   (precio en la tarjeta, tomado de la tienda)
 * El sitio principal no se toca en ningun momento.
 *
 * Uso:  node armar-prueba2.js
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const RAIZ = path.join(__dirname, '..');
const DESTINO = path.join(RAIZ, 'Prueba2');
const BASE = 'https://www.woodtools.com.ar/';

const SALTAR = ['imagenes', '_tools', '_admin', '.git', '.claude', 'node_modules', 'prueba', 'Prueba2', 'tienda'];
const EXT = ['.html', '.css', '.js', '.json', '.txt', '.xml'];

const AVISO = `<div style="background:#a41e22;color:#fff;padding:10px 16px;text-align:center;font-family:'Segoe UI',Tahoma,sans-serif;font-size:14px;font-weight:600;position:sticky;top:0;z-index:99999">
DIRECTORIO DE PRUEBA 2 &mdash; version con Tienda Nube. El sitio p&uacute;blico es <a href="https://www.woodtools.com.ar/" style="color:#fff;text-decoration:underline">woodtools.com.ar</a>
</div>`;

// --- 1. recolectar archivos ---
const archivos = [];
(function rec(dir) {
	for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
		if (e.isDirectory()) {
			if (SALTAR.includes(e.name)) continue;
			rec(path.join(dir, e.name));
		} else if (EXT.includes(path.extname(e.name).toLowerCase())) {
			archivos.push(path.relative(RAIZ, path.join(dir, e.name)).split(path.sep).join('/'));
		}
	}
})(RAIZ);

// --- 2. copiar reescribiendo rutas de imagenes ---
// Una referencia relativa que termina resolviendo dentro de imagenes/ se vuelve
// absoluta; el resto (CSS, JS, otras paginas) queda relativa, porque esos si se copian.
function absolutizarHtml(html, rel) {
	const dir = path.posix.dirname(rel);
	return html.replace(/(\s(?:href|src)=")([^"]+)(")/g, function (m, a, url, c) {
		if (/^(https?:|\/\/|data:|mailto:|tel:|#)/i.test(url)) return m;
		const limpio = url.split('?')[0].split('#')[0];
		const abs = path.posix.normalize(path.posix.join(dir, limpio));
		if (!abs.startsWith('imagenes/')) return m;
		return a + BASE + abs + url.slice(limpio.length) + c;
	});
}

let n = 0, htmls = 0;
archivos.forEach(function (rel) {
	let contenido = fs.readFileSync(path.join(RAIZ, rel), 'utf8');

	if (rel.endsWith('.html')) {
		contenido = absolutizarHtml(contenido, rel);
		contenido = contenido.replace(/<head>/i, '<head>\n    <meta name="robots" content="noindex, nofollow">');
		contenido = contenido.replace(/<body([^>]*)>/i, '<body$1>\n' + AVISO);
		htmls++;
	} else if (rel.endsWith('.js')) {
		// Los JS arman rutas de imagenes a mano; sin esto la galeria y el
		// manifiesto apuntarian a /Prueba2/imagenes/, que no existe.
		contenido = contenido.replace(/(\.\.\/)+imagenes\//g, BASE + 'imagenes/');
	} else if (rel.endsWith('.css')) {
		contenido = contenido.replace(/url\((['"]?)((?:\.\.\/)+imagenes\/[^)'"]+)\1\)/g,
			function (m, q, u) { return 'url(' + q + BASE + u.replace(/^(\.\.\/)+/, '') + q + ')'; });
	}

	const destino = path.join(DESTINO, rel);
	fs.mkdirSync(path.dirname(destino), { recursive: true });
	fs.writeFileSync(destino, contenido);
	n++;
});

console.log('copiados: ' + n + ' archivos  (' + htmls + ' HTML)');

// --- 3. aplicar la integracion SOBRE LA COPIA ---
function correr(script, args) {
	const salida = execFileSync(process.execPath, [path.join(__dirname, script)].concat(args), { encoding: 'utf8' });
	console.log('');
	console.log('--- ' + script + ' ---');
	salida.split('\n').filter(l => /:\s*\d+|ESCRITO/.test(l)).forEach(l => console.log('   ' + l.trim()));
}

correr('enlazar-a-tiendanube.js', ['--escribir', '--raiz=' + DESTINO]);
correr('precios-en-tarjetas.js', ['--escribir', '--raiz=' + DESTINO]);

// --- 4. control ---
const chequear = ['ruta-productos/HTML/Sierras.html', 'ruta-productos/HTML/productos.html', 'index.html'];
console.log('');
console.log('--- control sobre la copia ---');
chequear.forEach(function (rel) {
	const h = fs.readFileSync(path.join(DESTINO, rel), 'utf8');
	console.log('   ' + rel.padEnd(36) +
		' tienda:' + String((h.match(/mitiendanube\.com/g) || []).length).padStart(3) +
		'  precios:' + String((h.match(/class="product-price"/g) || []).length).padStart(3) +
		'  noindex:' + /noindex/.test(h) +
		'  aviso:' + /DIRECTORIO DE PRUEBA 2/.test(h));
});
console.log('');
console.log('listo. Falta subir la carpeta Prueba2/ al servidor.');
