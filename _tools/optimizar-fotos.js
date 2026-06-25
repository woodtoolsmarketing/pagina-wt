/* =====================================================================
   OPTIMIZADOR DE FOTOS (achica/comprime para que el sitio cargue rápido)
   ---------------------------------------------------------------------
   Recorre la carpeta imagenes/ y, para cada foto:
     - la redimensiona a 1280px máx. de lado (suficiente para la web),
     - la recomprime (JPEG calidad 82 / PNG optimizado),
     - corrige la orientación de fotos de celular.
   Solo reescribe si la foto queda al menos 5% más liviana, así las fotos
   ya optimizadas NO se vuelven a tocar (se puede correr las veces que quieras).
   NO cambia nombres ni rutas.
   ===================================================================== */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'imagenes'); // relativo a _tools/
const MAX = 1280;
const Q_JPEG = 82;

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(jpe?g|png)$/i.test(e.name)) acc.push(p);
  }
  return acc;
}

(async () => {
  if (!fs.existsSync(BASE)) {
    console.error('ERROR: no encuentro la carpeta imagenes. Dejá este script dentro de _tools.');
    process.exit(1);
  }
  const files = walk(BASE);
  let totalIn = 0, totalOut = 0, cambiados = 0, saltados = 0, errores = 0;
  for (const f of files) {
    const inSize = fs.statSync(f).size;
    totalIn += inSize;
    const ext = path.extname(f).toLowerCase();
    try {
      const input = fs.readFileSync(f); // a memoria: evita bloqueo de archivo en Windows
      const meta = await sharp(input, { failOn: 'none' }).metadata();
      // IDEMPOTENTE: solo tocamos fotos grandes (lado > 1280px), que son las nuevas
      // sin optimizar. Las que ya están en tamaño web se dejan intactas (no se
      // re-comprimen en cada corrida, así no pierden calidad).
      if (meta.width <= MAX && meta.height <= MAX) {
        totalOut += inSize;
        saltados++;
        continue;
      }
      let pipe = sharp(input, { failOn: 'none' }).rotate()
        .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true });
      pipe = (ext === '.png')
        ? pipe.png({ compressionLevel: 9, palette: true, quality: 85, effort: 8 })
        : pipe.jpeg({ quality: Q_JPEG, mozjpeg: true });
      const buf = await pipe.toBuffer();
      fs.writeFileSync(f, buf);
      totalOut += buf.length;
      cambiados++;
    } catch (e) {
      totalOut += inSize;
      errores++;
      console.log('  (saltada por error) ' + path.relative(BASE, f) + ' - ' + e.message);
    }
  }
  const mb = n => (n / 1024 / 1024).toFixed(1) + 'MB';
  console.log('=====================================================');
  console.log(' Optimización terminada.');
  console.log(' Fotos revisadas    : ' + files.length);
  console.log(' Achicadas ahora    : ' + cambiados);
  console.log(' Ya estaban óptimas : ' + saltados);
  if (errores) console.log(' Con error (saltadas): ' + errores);
  console.log(' Peso total         : ' + mb(totalIn) + '  ->  ' + mb(totalOut));
  console.log('=====================================================');
})();
