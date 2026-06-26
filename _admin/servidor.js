/* Mini-servidor local (sin dependencias) solo para abrir el panel en el navegador.
   La API de edición de archivos del navegador necesita "localhost" para funcionar;
   por eso no alcanza con abrir el .html directo. Este server sirve SOLO la carpeta
   _admin y abre el panel en Edge/Chrome. No expone nada a internet. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec, spawn } = require('child_process');

const DIR = __dirname;
const TOOLS = path.join(DIR, '..', '_tools');   // donde viven subir.js / generar-manifest.js
const PORT = 8765;
const MIME = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css',
  '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml' };

// Corre un script de _tools y va enviando su salida en vivo al navegador.
function correrScript(args, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
  let proc;
  try { proc = spawn('node', args, { cwd: TOOLS }); }
  catch (e) { res.end('[ERROR] ' + e.message + '\n'); return; }
  proc.stdout.on('data', d => res.write(d));
  proc.stderr.on('data', d => res.write(d));
  proc.on('close', code => res.end('\n[FIN] (código ' + code + ')\n'));
  proc.on('error', e => res.end('\n[ERROR] ' + e.message + '\n'));
}

const server = http.createServer((req, res) => {
  const ruta = (req.url || '/').split('?')[0];
  // --- Acciones (las dispara el botón del panel) ---
  if (ruta === '/api/subir')      return correrScript(['subir.js'], res);
  if (ruta === '/api/subir-dry')  return correrScript(['subir.js', '--dry'], res);
  if (ruta === '/api/manifest')   return correrScript(['generar-manifest.js'], res);

  let p = decodeURIComponent(ruta);
  if (p === '/') p = '/panel.html';
  const fp = path.join(DIR, p);
  if (!fp.startsWith(DIR)) { res.writeHead(403); res.end('No permitido'); return; }
  fs.readFile(fp, (e, data) => {
    if (e) { res.writeHead(404); res.end('No encontrado'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(fp).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
});

const URL = 'http://127.0.0.1:' + PORT + '/panel.html';
server.listen(PORT, '127.0.0.1', () => {   // solo accesible desde tu PC
  console.log('==============================================');
  console.log(' Panel abierto en: ' + URL);
  console.log(' (Dejá esta ventana abierta. Cerrala para apagar el panel.)');
  console.log('==============================================');
  // Abrir en Edge; si no está, Chrome; si no, el navegador por defecto.
  if (!process.argv.includes('--no-open')) {
    exec('start msedge "' + URL + '"', e1 => {
      if (e1) exec('start chrome "' + URL + '"', e2 => {
        if (e2) exec('start "" "' + URL + '"');
      });
    });
  }
});
server.on('error', err => {
  if (err.code === 'EADDRINUSE') console.log('El panel ya estaba abierto. Entrá a: ' + URL);
  else console.log('Error: ' + err.message);
});
