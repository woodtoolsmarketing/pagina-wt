/* Recomprime (baja peso) todas las fotos de UNA carpeta puntual, incluso si están
   por debajo de los umbrales del optimizador general.
   Uso:  node optimizar-carpeta.js "Diamante/Sierras diamante"            */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rel = process.argv[2];
if (!rel) { console.error('Falta la carpeta. Ej: node optimizar-carpeta.js "Diamante/Sierras diamante"'); process.exit(1); }
const DIR = path.join(__dirname, '..', 'imagenes', 'herramientas', rel);
const MAX = 1280, Q = 82;

(async () => {
  if (!fs.existsSync(DIR)) { console.error('No existe: ' + DIR); process.exit(1); }
  const files = fs.readdirSync(DIR).filter(f => /\.(jpe?g|png)$/i.test(f)).sort();
  let inTot = 0, outTot = 0, cambiadas = 0;
  for (const f of files) {
    const p = path.join(DIR, f);
    const inBuf = fs.readFileSync(p);
    inTot += inBuf.length;
    let out = inBuf;
    try {
      const ext = path.extname(f).toLowerCase();
      let pipe = sharp(inBuf, { failOn: 'none' }).rotate()
        .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true });
      pipe = (ext === '.png')
        ? pipe.png({ compressionLevel: 9, palette: true, quality: 85, effort: 8 })
        : pipe.jpeg({ quality: Q, mozjpeg: true });
      const rec = await pipe.toBuffer();
      if (rec.length < inBuf.length) { out = rec; cambiadas++; }
    } catch (e) { console.log('  (sin recomprimir) ' + f + ' - ' + e.message); }
    fs.writeFileSync(p, out);
    outTot += out.length;
    console.log('  ' + f.padEnd(24) + Math.round(inBuf.length / 1024) + 'KB -> ' + Math.round(out.length / 1024) + 'KB');
  }
  const kb = n => Math.round(n / 1024) + 'KB';
  console.log('\n' + rel + ': ' + cambiadas + '/' + files.length + ' achicadas');
  console.log('Peso total: ' + kb(inTot) + ' -> ' + kb(outTot) + '  (ahorro ' + Math.round((1 - outTot / inTot) * 100) + '%)');
})();
