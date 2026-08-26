/* Reapunta las tarjetas del listado del sitio hacia la ficha del producto en
 * Tienda Nube, respetando el alcance acordado:
 *   - todo lo que esta en el catalogo de la tienda  -> ficha de Tienda Nube
 *   - las fresas que NO son rectas                  -> se quedan en el sitio
 *
 * El filtrado (filtros.js) no se toca: sigue funcionando igual sobre las mismas
 * tarjetas, con los mismos data-categoria / data-marca / data-tipo. Lo unico que
 * cambia es el destino del click.
 *
 * IMPORTANTE - NO CORRER ESTO HASTA QUE EL CATALOGO ESTE IMPORTADO.
 * Las URLs apuntan a /productos/<identificador>/, y esos identificadores recien
 * existen despues de importar el CSV. Si se corre antes, el sitio queda con
 * decenas de enlaces rotos.
 *
 * Uso:  node enlazar-a-tiendanube.js              (simulacro)
 *       node enlazar-a-tiendanube.js --escribir
 *       node enlazar-a-tiendanube.js --revertir   (vuelve a las fichas del sitio)
 */

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const CSV = path.join(__dirname, 'tiendanube-productos-con-precios.csv');
const TIENDA = 'https://tiendadewoodtoolssrl.mitiendanube.com/productos/';
const ESCRIBIR = process.argv.includes('--escribir');
const REVERTIR = process.argv.includes('--revertir');

// Carpeta del sitio -> familia con la que arranca el identificador del CSV
const FAMILIA = { SC: 'sierras', FR: 'fresas', CH: 'cuchillas', MCH: 'mechas', DM: 'diamante', CBZ: 'cabezales' };

// Paginas de listado que tienen tarjetas
const LISTADOS = [
	'ruta-productos/HTML/productos.html',
	'ruta-productos/HTML/Sierras.html',
	'ruta-productos/HTML/Cuchillas.html',
	'ruta-productos/HTML/mechas.html',
	'ruta-productos/HTML/Diamante.html',
	'ruta-productos/HTML/Fresas.html',
	'ruta-productos/HTML/Cabezales.html'
];

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

// --- indice del catalogo de la tienda ---
const crudo = fs.readFileSync(CSV, 'utf8').replace(/^﻿/, '');
const filas = crudo.split(/\r?\n/).filter(Boolean);
const cab = parseLinea(filas[0]);
const iU = cab.indexOf('Identificador de URL');
const iV = cab.indexOf('Valor de propiedad 1');

const identificadores = new Set();
const porCodigo = {};                       // codigo de variante -> identificador
const norm = s => String(s).toUpperCase().replace(/[\s_\-]/g, '');

for (let i = 1; i < filas.length; i++) {
	const f = parseLinea(filas[i]);
	if (!f[iU]) continue;
	identificadores.add(f[iU]);
	if (f[iV]) porCodigo[norm(f[iV])] = f[iU];
}

// --- resolver una tarjeta -> identificador de la tienda ---
function resolver(href) {
	const partes = href.split('/');
	if (partes.length < 2) return null;
	const fam = FAMILIA[partes[0]];
	if (!fam) return null;
	const codigo = partes[partes.length - 1].replace(/\.html$/i, '');

	// 1) construccion directa: CH/CHC_HSS.html -> cuchillas-chc-hss
	const directo = fam + '-' + codigo.toLowerCase().replace(/[\s_]+/g, '-');
	if (identificadores.has(directo)) return directo;

	// 2) prefijo: CBZ/TM06M AB3.html -> cabezales-tm06m
	const base = codigo.split(/[\s_]/)[0].toLowerCase();
	if (identificadores.has(fam + '-' + base)) return fam + '-' + base;

	// 3) por codigo de variante: la tarjeta puede llamarse como una de las medidas
	const porVar = porCodigo[norm(codigo)];
	if (porVar) return porVar;
	const k = Object.keys(porCodigo).find(c => c.startsWith(norm(codigo)));
	return k ? porCodigo[k] : null;
}

// --- recorrer los listados ---
let tocados = 0, aTienda = 0, seQuedan = 0, revertidos = 0;
const quedanEnSitio = [];

LISTADOS.forEach(function (rel) {
	const p = path.join(RAIZ, rel);
	if (!fs.existsSync(p)) return;
	let h = fs.readFileSync(p, 'utf8');
	const antes = h;

	if (REVERTIR) {
		h = h.replace(/<a href="[^"]*" class="product-card"([^>]*?) data-ficha="([^"]+)"/g,
			function (m, attrs, ficha) { revertidos++; return '<a href="' + ficha + '" class="product-card"' + attrs; });
	} else {
		h = h.replace(/<a href="([^"]+)" class="product-card"([^>]*)>/g, function (m, href, attrs) {
			if (/^https?:/i.test(href)) return m;               // ya apunta afuera
			const id = resolver(href);
			if (!id) { seQuedan++; quedanEnSitio.push(rel.split('/').pop() + ' :: ' + href); return m; }
			aTienda++;
			// data-ficha guarda la ruta original para poder revertir
			return '<a href="' + TIENDA + id + '/" class="product-card"' + attrs + ' data-ficha="' + href + '">';
		});
	}

	if (h !== antes) { tocados++; if (ESCRIBIR) fs.writeFileSync(p, h); }
});

console.log(ESCRIBIR ? '=== ESCRITO ===' : '=== SIMULACRO (no modifique nada) ===');
console.log('');
if (REVERTIR) {
	console.log('tarjetas devueltas al sitio: ' + revertidos);
} else {
	console.log('productos en el catalogo de la tienda : ' + identificadores.size);
	console.log('archivos de listado tocados           : ' + tocados);
	console.log('tarjetas que pasan a Tienda Nube      : ' + aTienda);
	console.log('tarjetas que se quedan en el sitio    : ' + seQuedan);
	console.log('');
	console.log('se quedan en el sitio (fresas no rectas y sueltos):');
	quedanEnSitio.forEach(function (x) { console.log('   ' + x); });
}
