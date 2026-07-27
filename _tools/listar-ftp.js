/* SOLO LECTURA: lista la estructura del FTP para confirmar dónde está el web
   root (WordPress) antes de migrar. No sube, no borra, no modifica nada. */
const ftp = require('basic-ftp');
const cfg = require('./ftp-config.json');

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

    await listar(client, '/');
    await listar(client, '/prueba1');
    await listar(client, '/prueba1/pagina-wt');
    // por si el web root fuera público bajo public_html/htdocs/www
    const raiz = await client.list('/').then(l => l.map(i => i.name)).catch(() => []);
    for (const cand of ['public_html', 'htdocs', 'www', 'httpdocs', 'web']) {
      if (raiz.includes(cand)) await listar(client, '/' + cand);
    }
  } catch (e) {
    console.log('ERROR de conexión: ' + e.message);
  } finally {
    client.close();
  }
})();
