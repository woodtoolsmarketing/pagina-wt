/* Mini-servidor local (sin dependencias) solo para abrir el panel en el navegador.
   La API de edición de archivos del navegador necesita "localhost" para funcionar;
   por eso no alcanza con abrir el .html directo. Este server sirve SOLO la carpeta
   _admin y abre el panel en Edge/Chrome. No expone nada a internet. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const DIR = __dirname;
const PORT = 8765;
const MIME = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css',
  '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml' };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent((req.url || '/').split('?')[0]);
  if (p === '/') p = '/panel.html';
  const fp = path.join(DIR, p);
  if (!fp.startsWith(DIR)) { res.writeHead(403); res.end('No permitido'); return; }
  fs.readFile(fp, (e, data) => {
    if (e) { res.writeHead(404); res.end('No encontrado'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(fp).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
});

const URL = 'http://localhost:' + PORT + '/panel.html';
server.listen(PORT, () => {
  console.log('==============================================');
  console.log(' Panel abierto en: ' + URL);
  console.log(' (Dejá esta ventana abierta. Cerrala para apagar el panel.)');
  console.log('==============================================');
  // Abrir en Edge; si no está, Chrome; si no, el navegador por defecto.
  exec('start msedge "' + URL + '"', e1 => {
    if (e1) exec('start chrome "' + URL + '"', e2 => {
      if (e2) exec('start "" "' + URL + '"');
    });
  });
});
server.on('error', err => {
  if (err.code === 'EADDRINUSE') console.log('El panel ya estaba abierto. Entrá a: ' + URL);
  else console.log('Error: ' + err.message);
});
