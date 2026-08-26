/* SOLO LECTURA: lista qué hay en tu FTP, para confirmar cuál es la carpeta del
   sitio (la que va en "remoteDir"). No sube, no borra, no modifica nada.

   Uso:  node listar-ftp.js            -> lista "/" y tu remoteDir
         node listar-ftp.js /carpeta   -> lista además esa carpeta            */
let ftp, cfg;
try { ftp = require('basic-ftp'); }
catch {
  console.log('Falta la herramienta de FTP. Ejecutá una vez en esta carpeta:  npm install');
  process.exit(1);
}
try { cfg = require('./ftp-config.json'); }
catch {
  console.log('No encuentro _tools/ftp-config.json (o está mal escrito).');
  console.log('Copiá "ftp-config.example.json" como "ftp-config.json" y completá tus datos de FTP.');
  process.exit(1);
}
if (!cfg.host || cfg.host === 'ftp.tudominio.com' || !cfg.user) {
  console.log('Completá tus datos reales en _tools/ftp-config.json (host, user, password, remoteDir).');
  process.exit(1);
}

const MARCADORES_WP = ['index.php', 'wp-config.php', 'wp-content', 'wp-admin', 'wp-includes', 'wp-login.php', '.htaccess', 'sitemap.xml', 'xmlrpc.php'];

function fmt(item) {
  const tipo = item.isDirectory ? 'DIR ' : (item.isSymbolicLink ? 'LNK ' : 'file');
  const size = item.isDirectory ? '' : ('  ' + item.size + 'b');
  return '   [' + tipo + '] ' + item.name + size;
}

async function listar(client, dir) {
  try {
    const items = await client.list(dir);
    console.log('\n=== ' + dir + '  (' + items.length + ' items) ===');
    const nombres = items.map(i => i.name);
    for (const it of items.slice(0, 60)) console.log(fmt(it));
    if (items.length > 60) console.log('   ... (' + (items.length - 60) + ' más)');
    const wp = MARCADORES_WP.filter(m => nombres.includes(m));
    if (wp.length) console.log('   >> marcadores WordPress/web-root: ' + wp.join(', '));
    return nombres;
  } catch (e) {
    console.log('\n=== ' + dir + ' === (no accesible: ' + e.message + ')');
    return [];
  }
}

(async () => {
  const client = new ftp.Client(30000);
  client.ftp.verbose = false;
  try {
    await client.access({
      host: cfg.host, port: cfg.port || 21, user: cfg.user, password: cfg.password,
      secure: cfg.secure === true,
      secureOptions: cfg.secure === true ? { rejectUnauthorized: false } : undefined
    });
    console.log('Conectado a ' + cfg.host + ' como ' + cfg.user);
    const pwd = await client.pwd();
    console.log('Directorio home del FTP (pwd): ' + pwd);

    const raiz = await listar(client, '/');
    // La carpeta que tenés configurada como sitio, si no es la raíz
    const remoto = (cfg.remoteDir || '/').replace(/\\/g, '/');
    if (remoto !== '/' && remoto !== '') await listar(client, remoto);
    // Una carpeta puntual, si la pasaste por parámetro
    if (process.argv[2]) await listar(client, process.argv[2]);
    // Candidatas habituales de web root, por si remoteDir todavía no está bien puesto
    for (const cand of ['public_html', 'htdocs', 'www', 'httpdocs', 'web']) {
      if (raiz.includes(cand) && '/' + cand !== remoto) await listar(client, '/' + cand);
    }
  } catch (e) {
    console.log('ERROR de conexión: ' + e.message);
    console.log('Revisá host/usuario/contraseña/puerto y si tu hosting usa "FTP con TLS" (secure: true).');
    process.exitCode = 1;
  } finally {
    client.close();
  }
})();
