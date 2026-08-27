/* Lee las 114 fichas de la tienda y arma el indice
 *      codigo de variante  ->  /productos/<handle>/?variant=<id>
 *
 * Sirve para que cada tarjeta del sitio (que es por MEDIDA) caiga en la
 * variante exacta del producto de Tienda Nube, y no en el producto-familia
 * con la primera medida seleccionada.
 *
 * Salida: _tools/variantes-tienda.json
 * Uso:    node cosechar-variantes.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const TIENDA = 'tiendadewoodtoolssrl.mitiendanube.com';
const CSV = path.join(__dirname, 'tiendanube-productos-con-precios.csv');
const SALIDA = path.join(__dirname, 'variantes-tienda.json');
const CONCURRENCIA = 6;

function parseLinea(l) {
	const o = []; let c = '', q = false;
	for (let i = 0; i < l.length; i++) {
		const ch = l[i];
		if (ch === '"') { if (q && l[i + 1] === '"') { c += '"'; i++; } else q = !q; }
		else if (ch === ',' && !q) { o.push(c); c = ''; }
		else c += ch;
	}
	o.push(c);
	return o;
}

// handles a consultar: los identificadores del CSV que se importaron
const crudo = fs.readFileSync(CSV, 'utf8').replace(/^﻿/, '');
const filas = crudo.split(/\r?\n/).filter(Boolean);
const cab = parseLinea(filas[0]);
const iU = cab.indexOf('Identificador de URL');
const handles = [];
for (let i = 1; i < filas.length; i++) {
	const id = parseLinea(filas[i])[iU];
	if (id && handles.indexOf(id) < 0) handles.push(id);
}

function bajar(handle) {
	return new Promise(function (ok) {
		const req = https.get({
			host: TIENDA, path: '/productos/' + handle + '/',
			headers: { 'User-Agent': 'Mozilla/5.0 (indice interno WoodTools)' }
		}, function (r) {
			let d = '';
			r.on('data', function (c) { d += c; });
			r.on('end', function () { ok({ handle: handle, code: r.statusCode, html: d }); });
		});
		req.on('error', function (e) { ok({ handle: handle, error: e.message }); });
		req.setTimeout(25000, function () { req.destroy(); ok({ handle: handle, error: 'timeout' }); });
	});
}

function sacarVariantes(html) {
	// LS.variants viene embebido en el HTML de la ficha
	const m = html.match(/LS\.variants\s*=\s*(\[[\s\S]*?\]);/) ||
	          html.match(/"variants"\s*:\s*(\[[\s\S]*?\])\s*,\s*"/);
	if (!m) return null;
	try { return JSON.parse(m[1]); } catch (e) { return null; }
}

(async function () {
	const indice = {};      // codigo normalizado -> {handle, variant, sku, precio}
	const porHandle = {};   // handle -> cantidad de variantes
	const fallos = [];
	let hechos = 0;

	const norm = s => String(s || '').toUpperCase().replace(/[\s_\-().]/g, '');

	for (let i = 0; i < handles.length; i += CONCURRENCIA) {
		const lote = handles.slice(i, i + CONCURRENCIA);
		const res = await Promise.all(lote.map(bajar));
		res.forEach(function (r) {
			hechos++;
			if (r.error || r.code !== 200) { fallos.push(r.handle + ' ' + (r.error || r.code)); return; }
			const vs = sacarVariantes(r.html);
			if (!vs || !vs.length) { fallos.push(r.handle + ' sin variantes'); return; }
			porHandle[r.handle] = vs.length;
			vs.forEach(function (v) {
				const clave = norm(v.sku || v.option0);
				if (!clave) return;
				// si dos productos comparten codigo, gana el primero (mismo criterio
				// que ya usa el CSV, donde los duplicados se desambiguaron por familia)
				if (indice[clave]) return;
				indice[clave] = {
					handle: r.handle,
					variant: v.id,
					sku: v.sku || v.option0,
					medida: v.option0,
					precio: v.price_number_raw
				};
			});
		});
		process.stdout.write('\r  consultadas ' + hechos + '/' + handles.length + '   ');
	}
	console.log('');

	fs.writeFileSync(SALIDA, JSON.stringify(indice, null, 1));
	console.log('');
	console.log('fichas consultadas : ' + handles.length);
	console.log('con variantes      : ' + Object.keys(porHandle).length);
	console.log('codigos indexados  : ' + Object.keys(indice).length);
	console.log('fallos             : ' + fallos.length);
	fallos.slice(0, 15).forEach(function (f) { console.log('   ' + f); });
	console.log('');
	console.log('archivo: ' + path.basename(SALIDA));
})();
