/* Rellena la columna Precio del CSV de Tienda Nube con precios INVENTADOS.
 *
 * PARA QUE SIRVE: poder cargar el catalogo completo y ver la tienda funcionando
 * de punta a punta antes de tener la lista de precios real.
 *
 * NO SON PRECIOS REALES. Hay que reemplazarlos antes de abrir la tienda.
 *
 * Como los arma: un rango por familia (un cabezal no puede salir lo mismo que
 * una mecha) y adentro del rango escala por medida cuando el codigo la trae.
 * Es determinista: el mismo codigo da siempre el mismo precio, asi que se puede
 * volver a correr sin que salten los numeros.
 *
 * Uso:  node poner-precios-inventados.js          (simulacro)
 *       node poner-precios-inventados.js --escribir
 */

const fs = require('fs');
const path = require('path');

const ENTRADA = path.join(__dirname, 'tiendanube-productos.csv');
const SALIDA = path.join(__dirname, 'tiendanube-productos-con-precios.csv');
const ESCRIBIR = process.argv.includes('--escribir');

// Rango de precio por familia, en pesos. Ordenes de magnitud plausibles para
// herramienta industrial importada; la forma de la lista es lo que importa.
const RANGOS = {
	'Mechas':    [14000, 48000],
	'Sierras':   [55000, 380000],
	'Fresas':    [18000, 95000],
	'Cuchillas': [22000, 130000],
	'Cabezales': [380000, 1600000],
	'Diamante':  [140000, 950000]
};
const POR_DEFECTO = [20000, 120000];

// --- CSV minimo, respetando comillas ---
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
function armarLinea(campos) {
	return campos.map(function (c) {
		return /[",\n]/.test(c) ? '"' + c.replace(/"/g, '""') + '"' : c;
	}).join(',');
}

// Hash estable: mismo texto -> mismo numero.
function hash(s) {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
	return Math.abs(h);
}

// Si el codigo trae una medida (250mm, 6x6mm, 0400...), se usa para ubicar el
// precio dentro del rango: mas grande, mas caro. Si no, cae el hash.
function posicionEnRango(valor, texto) {
	const m = (valor + ' ' + texto).match(/(\d{2,4})\s*mm|\bD\s*(\d{2,4})\b|\b(\d{3,4})\b/i);
	if (m) {
		const n = parseInt(m[1] || m[2] || m[3], 10);
		// El divisor cubre todo el rango util (hasta 1200). Con uno mas chico,
		// dos medidas distintas -por ejemplo LG3D 0600 y 0800- se clavaban las
		// dos en el techo y salian al mismo precio.
		if (n >= 30 && n <= 1200) return Math.min(1, Math.max(0, (n - 30) / 1170));
	}
	return (hash(valor) % 1000) / 1000;
}

function precio(categoria, valorVariante, nombre) {
	const fam = (categoria || '').split('>')[0].trim() || (nombre || '');
	let rango = POR_DEFECTO;
	for (const k in RANGOS) if (fam.indexOf(k) >= 0 || (nombre || '').indexOf(k) >= 0) { rango = RANGOS[k]; break; }
	const t = posicionEnRango(valorVariante || '', nombre || '');
	const bruto = rango[0] + t * (rango[1] - rango[0]);
	// redondeo comercial: a la centena mas cercana
	return Math.round(bruto / 100) * 100;
}

// --- proceso ---
const crudo = fs.readFileSync(ENTRADA, 'utf8');
const bom = crudo.charCodeAt(0) === 0xFEFF;
const texto = bom ? crudo.slice(1) : crudo;
const lineas = texto.split(/\r?\n/);
const cab = parseLinea(lineas[0]);

const iPrecio = cab.indexOf('Precio');
const iCat = cab.indexOf('Categorías');
const iNom = cab.indexOf('Nombre');
const iVal = cab.indexOf('Valor de propiedad 1');
if (iPrecio < 0) { console.error('No encuentro la columna Precio'); process.exit(1); }

let nombreActual = '', catActual = '';
let puestos = 0, yaTenian = 0;
const muestras = [];
const porFamilia = {};

const salida = [lineas[0]];
for (let i = 1; i < lineas.length; i++) {
	if (!lineas[i].trim()) { salida.push(lineas[i]); continue; }
	const f = parseLinea(lineas[i]);

	// El CSV repite el producto solo en su primera fila; las variantes siguientes
	// vienen con Nombre y Categorias vacios. Hay que arrastrarlos.
	if (f[iNom] && f[iNom].trim()) nombreActual = f[iNom].trim();
	if (f[iCat] && f[iCat].trim()) catActual = f[iCat].trim();

	if ((f[iPrecio] || '').trim() === '') {
		const p = precio(catActual, f[iVal], nombreActual);
		f[iPrecio] = String(p);
		puestos++;
		const fam = catActual.split('>')[0].trim() || '(sin categoria)';
		porFamilia[fam] = porFamilia[fam] || { n: 0, min: Infinity, max: -Infinity };
		porFamilia[fam].n++;
		porFamilia[fam].min = Math.min(porFamilia[fam].min, p);
		porFamilia[fam].max = Math.max(porFamilia[fam].max, p);
		if (muestras.length < 12) muestras.push((nombreActual + ' ' + (f[iVal] || '')).slice(0, 48).padEnd(50) + '$ ' + p.toLocaleString('es-AR'));
	} else yaTenian++;

	salida.push(armarLinea(f));
}

const contenido = (bom ? '﻿' : '') + salida.join('\r\n');
if (ESCRIBIR) fs.writeFileSync(SALIDA, contenido);

console.log(ESCRIBIR ? '=== ESCRITO: ' + path.basename(SALIDA) + ' ===' : '=== SIMULACRO (no escribi nada) ===');
console.log('');
console.log('variantes con precio puesto : ' + puestos);
console.log('variantes que ya tenian     : ' + yaTenian);
console.log('');
console.log('rango por familia:');
Object.entries(porFamilia).sort().forEach(function (e) {
	console.log('   ' + e[0].padEnd(14) + e[1].n.toString().padStart(4) + ' variantes   $ ' +
		e[1].min.toLocaleString('es-AR') + '  a  $ ' + e[1].max.toLocaleString('es-AR'));
});
console.log('');
console.log('muestra:');
muestras.forEach(function (m) { console.log('   ' + m); });
