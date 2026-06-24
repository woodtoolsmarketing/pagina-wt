/* =====================================================================
   GENERADOR DEL MANIFIESTO DE FOTOS (galeria-manifest.json)
   ---------------------------------------------------------------------
   Recorre imagenes/herramientas/ y arma la lista REAL de fotos de cada
   carpeta. La galería de cada producto usa este índice para pedir SOLO
   las fotos que existen (rápido, sin errores 404).

   CUÁNDO CORRERLO: cada vez que AGREGUES, SAQUES o RENOMBRES fotos.
   CÓMO: doble clic en "Regenerar-fotos-galeria.bat" (o: node generar-manifest.js)
   DESPUÉS: subí por FTP el archivo imagenes/herramientas/galeria-manifest.json
   ===================================================================== */
const fs = require('fs');
const path = require('path');

// Base = <proyecto>/imagenes/herramientas  (relativo a este script en _tools/)
const BASE = path.join(__dirname, '..', 'imagenes', 'herramientas');
const SALIDA = path.join(BASE, 'galeria-manifest.json');
const esImagen = n => /\.(jpe?g|png)$/i.test(n);

// Orden: por número inicial (1,2,3...), con "1 (1)" antes que "1.", luego alfabético.
function ordenar(arr) {
  return arr.sort((a, b) => {
    const na = parseInt((a.match(/^(\d+)/) || [])[1] || '9999', 10);
    const nb = parseInt((b.match(/^(\d+)/) || [])[1] || '9999', 10);
    if (na !== nb) return na - nb;
    return a.localeCompare(b);
  });
}

const manifest = {};
function recorrer(dir) {
  const entradas = fs.readdirSync(dir, { withFileTypes: true });
  const imgs = entradas.filter(e => e.isFile() && esImagen(e.name)).map(e => e.name);
  if (imgs.length) {
    const clave = path.relative(BASE, dir).replace(/\\/g, '/');
    manifest[clave] = ordenar(imgs);
  }
  for (const e of entradas) if (e.isDirectory()) recorrer(path.join(dir, e.name));
}

try {
  if (!fs.existsSync(BASE)) {
    console.error('ERROR: no encuentro la carpeta imagenes/herramientas.');
    console.error('Este script debe quedar dentro de la carpeta _tools del proyecto.');
    process.exit(1);
  }
  recorrer(BASE);
  fs.writeFileSync(SALIDA, JSON.stringify(manifest));
  const carpetas = Object.keys(manifest).length;
  const fotos = Object.values(manifest).reduce((s, a) => s + a.length, 0);
  console.log('=====================================================');
  console.log(' Manifiesto regenerado correctamente.');
  console.log(' Carpetas con fotos : ' + carpetas);
  console.log(' Fotos en total     : ' + fotos);
  console.log(' Archivo            : imagenes/herramientas/galeria-manifest.json');
  console.log('=====================================================');
  console.log(' ACORDATE de subir ese archivo por FTP al servidor.');
  console.log('=====================================================');
} catch (e) {
  console.error('ERROR al generar el manifiesto:', e.message);
  process.exit(1);
}
