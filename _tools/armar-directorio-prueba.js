/* Copia la version "ligada a Tienda Nube" a un directorio aparte (/prueba/),
 * para poder seguir probandola sin que afecte al sitio publico.
 *
 * Que copia: solo las paginas de listado y sus hojas de estilo. Las imagenes NO
 * se duplican: las referencias relativas se reescriben a absolutas contra
 * www.woodtools.com.ar, asi el directorio queda liviano y siempre ve las fotos
 * actualizadas del sitio real.
 *
 * Uso:  node armar-directorio-prueba.js            (simulacro)
 *       node armar-directorio-prueba.js --escribir
 */

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const DESTINO = path.join(RAIZ, 'prueba');
const BASE = 'https://www.woodtools.com.ar/';
const ESCRIBIR = process.argv.includes('--escribir');

// archivo de origen -> ruta dentro de /prueba/
const COPIAR = [
	'ruta-productos/HTML/productos.html',
	'ruta-productos/HTML/Sierras.html',
	'ruta-productos/HTML/Cuchillas.html',
	'ruta-productos/HTML/mechas.html',
	'ruta-productos/HTML/Diamante.html',
	'ruta-productos/HTML/Fresas.html',
	'ruta-productos/HTML/Cabezales.html',
	'ruta-productos/CSS/lista-productos.css',
	'ruta-productos/CSS/styles.css',
	'styles.css'
];

// Resuelve una ruta relativa contra la ubicacion del archivo y la vuelve absoluta.
function absolutizar(html, relDelArchivo) {
	const dir = path.posix.dirname(relDelArchivo);
	return html.replace(/(\s(?:href|src)=")([^"]+)(")/g, function (m, a, url, c) {
		if (/^(https?:|\/\/|data:|mailto:|tel:|#)/i.test(url)) return m;
		const limpio = url.split('?')[0].split('#')[0];
		const abs = path.posix.normalize(path.posix.join(dir, limpio));
		// Las hojas de estilo propias se sirven desde /prueba/, no desde el sitio
		if (/lista-productos\.css|ruta-productos\/CSS\/styles\.css|^styles\.css$/.test(abs)) return m;
		const query = url.slice(limpio.length);
		return a + BASE + abs + query + c;
	});
}

const AVISO = `<div style="background:#a41e22;color:#fff;padding:10px 16px;text-align:center;font-family:'Segoe UI',Tahoma,sans-serif;font-size:14px;font-weight:600;position:sticky;top:0;z-index:99999">
DIRECTORIO DE PRUEBA &mdash; version enlazada a Tienda Nube. El sitio publico es <a href="https://www.woodtools.com.ar/" style="color:#fff;text-decoration:underline">woodtools.com.ar</a>
</div>`;

let n = 0;
const hechos = [];

COPIAR.forEach(function (rel) {
	const origen = path.join(RAIZ, rel);
	if (!fs.existsSync(origen)) { hechos.push(rel + '  (no existe)'); return; }
	let contenido = fs.readFileSync(origen, 'utf8');

	if (rel.endsWith('.html')) {
		contenido = absolutizar(contenido, rel);
		// que no lo indexe Google: es un entorno de prueba
		contenido = contenido.replace(/<head>/i, '<head>\n    <meta name="robots" content="noindex, nofollow">');
		contenido = contenido.replace(/<body([^>]*)>/i, '<body$1>\n' + AVISO);
	}

	const destino = path.join(DESTINO, rel);
	if (ESCRIBIR) {
		fs.mkdirSync(path.dirname(destino), { recursive: true });
		fs.writeFileSync(destino, contenido);
	}
	n++;
	hechos.push(rel + '  ->  prueba/' + rel + '   (' + contenido.length + ' bytes)');
});

console.log(ESCRIBIR ? '=== ESCRITO ===' : '=== SIMULACRO ===');
console.log('');
console.log('archivos: ' + n);
hechos.forEach(function (x) { console.log('   ' + x); });
console.log('');
console.log('queda accesible en: ' + BASE + 'prueba/ruta-productos/HTML/productos.html');
