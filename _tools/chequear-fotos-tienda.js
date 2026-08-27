/* Dice que productos de la tienda YA tienen foto propia y cuales no.
 *
 * La señal buena es og:image de la ficha: si el producto no tiene foto,
 * Tienda Nube pone ahi el placeholder "no-photo-*.webp".
 *
 * OJO con dos señales que NO sirven y me hicieron dar un diagnostico
 * equivocado:
 *   - buscar "no-photo" en todo el HTML: la palabra aparece 125 veces en
 *     cualquier ficha, tenga foto o no.
 *   - mirar el DOM en el navegador: el script del sello reescribe los
 *     placeholders, asi que siempre parece que hay foto.
 *
 * Uso:  node chequear-fotos-tienda.js
 * Salida: _tools/.fotos-faltantes.json  (lo consume la carga de fotos)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const TIENDA = 'tiendadewoodtoolssrl.mitiendanube.com';
const PENDIENTES = path.join(__dirname, '.fotos-pendientes.json');
const SALIDA = path.join(__dirname, '.fotos-faltantes.json');
const CONCURRENCIA = 6;

const lista = JSON.parse(fs.readFileSync(PENDIENTES, 'utf8'));

function estado(x) {
	return new Promise(function (ok) {
		const req = https.get({
			host: TIENDA, path: '/productos/' + x.h + '/',
			headers: { 'User-Agent': 'Mozilla/5.0 (chequeo interno WoodTools)' }
		}, function (r) {
			let d = '';
			r.on('data', function (c) { d += c; });
			r.on('end', function () {
				const og = (d.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/) || [])[1] || '';
				ok(Object.assign({}, x, { tiene: og ? !/no-photo/.test(og) : null, og: og.split('/').pop() }));
			});
		});
		req.on('error', function () { ok(Object.assign({}, x, { tiene: null })); });
		req.setTimeout(20000, function () { req.destroy(); ok(Object.assign({}, x, { tiene: null })); });
	});
}

(async function () {
	const out = [];
	for (let i = 0; i < lista.length; i += CONCURRENCIA) {
		out.push(...await Promise.all(lista.slice(i, i + CONCURRENCIA).map(estado)));
		process.stdout.write('\r  ' + out.length + '/' + lista.length + '   ');
	}
	console.log('');

	const con = out.filter(x => x.tiene === true);
	const sin = out.filter(x => x.tiene === false);
	const err = out.filter(x => x.tiene === null);

	fs.writeFileSync(SALIDA, JSON.stringify(sin, null, 1));

	console.log('');
	console.log('YA tienen foto propia : ' + con.length);
	console.log('FALTAN                : ' + sin.length);
	console.log('no se pudo consultar  : ' + err.length);
	if (sin.length) {
		console.log('');
		console.log('pendientes (id | handle | foto):');
		sin.forEach(function (x) { console.log('   ' + x.id + ' | ' + x.h.padEnd(20) + ' | ' + x.foto); });
	}
})();
