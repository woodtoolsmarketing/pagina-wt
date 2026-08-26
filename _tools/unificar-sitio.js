/* Unifica el sitio con la Tienda Nube:
   1) mismo pie en las 184 paginas (barra de contacto + redes + copyright)
   2) el boton "COMPRA AHORA" apunta a la tienda propia
   3) agrega el CSS del pie a las hojas que no lo tienen
   Uso:  node unificar-sitio.js         (simulacro)
         node unificar-sitio.js --escribir  */

const fs = require('fs');
const path = require('path');

const R = 'C:/Users/WoodTools-02/Desktop/vscode/pagina-wt';
const ESCRIBIR = process.argv.includes('--escribir');
const TIENDA = 'https://tiendadewoodtoolssrl.mitiendanube.com/';
const ANIO = '2026';

const PIE = `<footer class="footer-wt">
        <div class="footer-contact-bar">
            <p>Cabildo 61 - CP (1870) - Avellaneda - Buenos Aires - Argentina | +54 (11) 4218-1700 &oacute; +54 (11) 4218-1701 | ventas@woodtools.com.ar</p>
        </div>
        <div class="footer-bottom">
            <div class="footer-social">
                <a href="https://www.facebook.com/woodtoolsargentina" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.youtube.com/channel/UCsUxQWm2n8BMEhVQsOP_ydw" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.instagram.com/woodtoolssrl/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <p>&copy; ${ANIO} WoodTools S.R.L. - WoodTools Marketing</p>
        </div>
    </footer>`;

const CSS_PIE = `

/* ==========================================================
   PIE UNIFICADO
   El mismo pie en las 184 paginas del sitio y en la Tienda Nube:
   barra de contacto oscura + redes + copyright.
   footer.footer-wt anula la regla "footer {}" de esta misma hoja,
   que pintaba el pie de una sola pieza y peleaba con los tres niveles.
   ========================================================== */
footer.footer-wt {
    background: none;
    color: inherit;
    padding: 0;
    border-top: none;
    text-align: center;
    font-size: inherit;
}

.footer-contact-bar {
    background-color: #383c40;
    color: #ffffff;
    padding: 20px 10px;
    text-align: center;
    font-size: 14px;
}

.footer-bottom {
    background-color: #ffffff;
    padding: 30px 10px;
    text-align: center;
    border-top: 1px solid #eee;
}

.footer-social { margin-bottom: 15px; }

.footer-social a {
    color: #333;
    font-size: 26px;
    margin: 0 12px;
    text-decoration: none;
    transition: color .3s;
}

.footer-social a:hover { color: #a41e22; }

.footer-bottom p {
    color: #666;
    font-size: 13px;
    font-weight: 500;
}
`;

const HOJAS = ['styles.css', 'ruta-productos/styles_producto_gral.css', 'ruta-productos/CSS/styles.css'];

// ---------- 1. CSS ----------
const cssTocadas = [];
HOJAS.forEach(function (h) {
	const p = path.join(R, h);
	let c = fs.readFileSync(p, 'utf8');
	if (c.indexOf('footer.footer-wt') >= 0) { cssTocadas.push(h + '  (ya lo tenia)'); return; }
	// en ruta-productos/CSS/styles.css las clases ya existen: solo hace falta el neutralizador
	const bloque = (h === 'ruta-productos/CSS/styles.css')
		? '\n\nfooter.footer-wt {\n    background: none;\n    color: inherit;\n    padding: 0;\n    border-top: none;\n}\n\n.footer-social a:hover { color: #a41e22; }\n'
		: CSS_PIE;
	if (ESCRIBIR) fs.writeFileSync(p, c + bloque);
	cssTocadas.push(h + '  (+' + bloque.length + ' bytes)');
});

// ---------- 2. HTML ----------
const pags = [];
(function rec(d) {
	for (const e of fs.readdirSync(d, { withFileTypes: true })) {
		if (e.isDirectory()) {
			if (['_tools', '_admin', '.git', 'node_modules', '.claude', 'imagenes'].includes(e.name)) continue;
			rec(path.join(d, e.name));
		} else if (e.name.endsWith('.html')) pags.push(path.join(d, e.name));
	}
})(R);

let nPie = 0, nShop = 0, nSinPie = 0, nRedir = 0;
const shopAntes = {};

pags.forEach(function (p) {
	let h = fs.readFileSync(p, 'utf8');
	if (/http-equiv="refresh"/i.test(h)) { nRedir++; return; }
	const orig = h;

	// pie
	if (/<footer[^>]*>[\s\S]*?<\/footer>/.test(h)) {
		h = h.replace(/<footer[^>]*>[\s\S]*?<\/footer>/, PIE);
		nPie++;
	} else nSinPie++;

	// boton de compra -> la tienda propia
	h = h.replace(/<a\b([^>]*\bclass="btn-shop"[^>]*)>/g, function (tag, attrs) {
		const m = attrs.match(/href="([^"]*)"/);
		if (m) { shopAntes[m[1]] = (shopAntes[m[1]] || 0) + 1; if (m[1] === TIENDA) return tag; }
		nShop++;
		return '<a' + (m ? attrs.replace(/href="[^"]*"/, 'href="' + TIENDA + '"') : ' href="' + TIENDA + '"' + attrs) + '>';
	});

	if (h !== orig && ESCRIBIR) fs.writeFileSync(p, h);
});

console.log(ESCRIBIR ? '=== ESCRITO ===' : '=== SIMULACRO (nada modificado) ===');
console.log('');
console.log('hojas de estilo:');
cssTocadas.forEach(function (x) { console.log('   ' + x); });
console.log('');
console.log('paginas analizadas   : ' + pags.length + '  (redirecciones salteadas: ' + nRedir + ')');
console.log('pies reemplazados    : ' + nPie);
console.log('paginas sin <footer> : ' + nSinPie);
console.log('botones repuntados   : ' + nShop);
console.log('');
console.log('destinos que tenia COMPRA AHORA:');
Object.entries(shopAntes).forEach(function (e) { console.log('   ' + e[1] + ' -> ' + e[0]); });
