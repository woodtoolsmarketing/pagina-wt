/* Canjea el "code" de autorización por el access_token de la API de Tienda Nube.
 * Es el ÚLTIMO paso del alta del token (ver stock.md > "Regla automática").
 *
 * USO:
 *   node obtener-token.js <client_id> <client_secret> <code>
 *
 * Imprime el access_token y el user_id (= store_id). Pegá el access_token en
 * api-config.json. El token de Tienda Nube NO vence.
 */
'use strict';
const [, , clientId, clientSecret, code] = process.argv;
if (!clientId || !clientSecret || !code) {
  console.error('Uso: node obtener-token.js <client_id> <client_secret> <code>');
  process.exit(1);
}
(async () => {
  const res = await fetch('https://www.tiendanube.com/apps/authorize/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      code: code
    })
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    console.error('No se pudo obtener el token:', res.status, JSON.stringify(data));
    process.exit(1);
  }
  console.log('=====================================================');
  console.log(' access_token : ' + data.access_token);
  console.log(' user_id      : ' + data.user_id + '   (= store_id)');
  console.log(' scope        : ' + data.scope);
  console.log('=====================================================');
  console.log(' Pegá el access_token en _tools/tiendanube/api-config.json');
})().catch(e => { console.error('FALLÓ:', e.message); process.exit(1); });
