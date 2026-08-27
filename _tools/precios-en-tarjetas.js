/* Muestra el precio en las tarjetas del sitio, como hace la Tienda Nube.
 *
 * De donde sale el precio: variantes-tienda.json, que se cosecha de la propia
 * tienda. O sea que el sitio muestra exactamente lo mismo que va a ver el
 * cliente cuando haga clic. Si cambian los precios en la tienda, se vuelve a
 * correr cosechar-variantes.js y despues este.
 *
 *   - tarjeta de una medida  -> el precio de esa variante
 *   - tarjeta de una familia -> el menor precio de la familia, con "Desde"
 *   - tarjeta sin precio     -> queda "Ver medidas" (las fresas que no viajaron)
 *
 * OJO: hoy los precios son INVENTADOS. Esto los publica en woodtools.com.ar,
 * que es el sitio publico e indexado. Se revierte con --quitar.
 *
 * Uso:  node precios-en-tarjetas.js            (simulacro)
 *       node precios-en-tarjetas.js --escribir
 *       node precios-en-tarjetas.js --quitar   (vuelve a "Ver medidas")
 */

const fs = require('fs');
const path = require('path');

// Raiz sobre la que se trabaja. Por defecto el sitio; con --raiz=RUTA se puede
// apuntar a una copia (por ejemplo el directorio de prueba) y dejar el sitio intacto.
const _argRaiz = (process.argv.find(a => a.startsWith('--raiz=')) || '').slice(7);
const RAIZ = _argRaiz ? path.resolve(_argRaiz) : path.join(__dirname, '..');
const IDX = path.join(__dirname, 'variantes-tienda.json');
const ESCRIBIR = process.argv.includes('--escribir');
const QUITAR = process.argv.includes('--quitar');

const LISTADOS = [
	'ruta-productos/HTML/productos.html',
	'ruta-productos/HTML/Sierras.html',
	'ruta-productos/HTML/Cuchillas.html',
	'ruta-productos/HTML/mechas.html',
	'ruta-productos/HTML/Diamante.html',
	'ruta-productos/HTML/Fresas.html',
	'ruta-productos/HTML/Cabezales.html'
];

const VER_MEDIDAS = '<p style="font-size: 0.9em; color: #555; text-align: center; margin-top: 5px;">Ver medidas</p>';

const variantes = JSON.parse(fs.readFileSync(IDX, 'utf8'));

// indices auxiliares
const porVariantId = {};      // id de variante -> precio en centavos
const minPorHandle = {};      // handle -> precio mas bajo de la familia
const cuantasPorHandle = {};  // handle -> cantidad de variantes
Object.values(variantes).forEach(function (v) {
	porVariantId[v.variant] = v.precio;
	cuantasPorHandle[v.handle] = (cuantasPorHandle[v.handle] || 0) + 1;
	if (minPorHandle[v.handle] === undefined || v.precio < minPorHandle[v.handle]) {
		minPorHandle[v.handle] = v.precio;
	}
});

// price_number_raw viene en centavos: 15780000 -> $157.800,00
function formato(centavos) {
	const n = Number(centavos) / 100;
	if (!isFinite(n) || n <= 0) return null;
	return '$' + n.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

let tocados = 0, conPrecio = 0, sinPrecio = 0, quitados = 0;

LISTADOS.forEach(function (rel) {
	const p = path.join(RAIZ, rel);
	if (!fs.existsSync(p)) return;
	let h = fs.readFileSync(p, 'utf8');
	const antes = h;

	if (QUITAR) {
		h = h.replace(/<p class="product-price"[^>]*>[^<]*<\/p>/g, function () { quitados++; return VER_MEDIDAS; });
	} else {
		// Se procesa la tarjeta ENTERA, no un patron fijo de su interior: no todas
		// las tienen la misma forma. Las de Cabezales, por ejemplo, no llevan el
		// parrafo "Ver medidas" y el titulo va directo al boton; con un regex que
		// lo exigiera, esas 33 tarjetas quedaban sin precio.
		h = h.replace(/<a href="([^"]+)" class="product-card"[\s\S]*?<\/a>/g, function (tarjeta) {
			const href = (tarjeta.match(/^<a href="([^"]+)"/) || [])[1] || '';
			let cent = null, desde = false;
			const mv = href.match(/[?&]variant=(\d+)/);
			if (mv) {
				cent = porVariantId[mv[1]];
			} else {
				const mh = href.match(/\/productos\/([^/?#]+)/);
				if (mh) { cent = minPorHandle[mh[1]]; desde = (cuantasPorHandle[mh[1]] || 0) > 1; }
			}
			const txt = formato(cent);

			// limpiar lo que hubiera de una pasada anterior
			let t = tarjeta.replace(/<p class="product-price"[^>]*>[^<]*<\/p>\s*/g, '');

			if (!txt) { sinPrecio++; return t; }
			const precio = '<p class="product-price">' + (desde ? 'Desde ' : '') + txt + '</p>';
			// va despues del titulo; si la tarjeta trae "Ver medidas", lo reemplaza
			// OJO: el reemplazo va SIEMPRE como funcion. Si se pasa el precio como
			// string, "$1" dentro de "$1.262.100,00" se interpreta como referencia
			// al grupo capturado y sale el titulo duplicado y el precio cortado.
			if (/<p[^>]*>Ver medidas<\/p>/.test(t)) {
				t = t.replace(/<p[^>]*>Ver medidas<\/p>/, function () { return precio; });
			} else if (/<div class="product-title">[\s\S]*?<\/div>/.test(t)) {
				t = t.replace(/<div class="product-title">[\s\S]*?<\/div>/, function (tit) { return tit + precio; });
			} else { sinPrecio++; return t; }
			conPrecio++;
			return t;
		});
	}

	if (h !== antes) { tocados++; if (ESCRIBIR) fs.writeFileSync(p, h); }
});

console.log(ESCRIBIR ? '=== ESCRITO ===' : (QUITAR ? '=== SIMULACRO DE QUITAR ===' : '=== SIMULACRO (no modifique nada) ==='));
console.log('');
if (QUITAR) {
	console.log('precios quitados: ' + quitados);
} else {
	console.log('archivos tocados        : ' + tocados);
	console.log('tarjetas con precio     : ' + conPrecio);
	console.log('tarjetas sin precio     : ' + sinPrecio + '   (quedan con "Ver medidas")');
}
