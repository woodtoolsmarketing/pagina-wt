/* Tarjeta de perfil que se despliega al pasar el mouse sobre cada icono social
   (Facebook / YouTube / Instagram) del header. Inyecta su propio CSS y las
   tarjetas en runtime, para no duplicar estilos ni tocar el HTML de cada pagina.
   Solo-hover: en tactil (sin mouse) no aparece y el toque abre el perfil normal. */
(function () {
  var css = ''
    + '.social-icons a { position: relative; }'
    + '.social-card { position:absolute; top:calc(100% + 12px); right:-8px; width:185px; box-sizing:border-box;'
    + '  padding:13px 14px 14px; border-radius:12px; color:#fff; display:flex; flex-direction:column; align-items:center;'
    + '  gap:9px; box-shadow:0 12px 28px rgba(0,0,0,.30); opacity:0; visibility:hidden; pointer-events:none;'
    + '  transform:translateY(-8px) scale(.95); transform-origin:top right;'
    + '  transition:opacity .22s ease, transform .22s ease, visibility .22s; z-index:3000; line-height:1.25; }'
    + '.social-card::after { content:""; position:absolute; left:0; right:0; bottom:100%; height:14px; }'   /* puente invisible para el hover */
    + '.social-card::before { content:""; position:absolute; bottom:100%; right:18px; border:8px solid transparent; border-bottom-color:inherit; }'
    + '.social-card .sc-name { font-weight:700; font-size:14px; text-align:center; color:#fff; }'
    + '.social-card .sc-btn { background:rgba(255,255,255,.22); padding:6px 16px; border-radius:7px; font-weight:600; font-size:12px; white-space:nowrap; color:#fff; }'
    + '.social-card-fb { background:#1877F2; border-color:#1877F2; }'
    + '.social-card-yt { background:#FF0000; border-color:#FF0000; }'
    + '.social-card-ig { background:linear-gradient(45deg,#f58529,#dd2a7b,#8134af,#515bd4); border-color:#dd2a7b; }'
    + '@media (hover:hover) and (pointer:fine) { .social-icons a:hover .social-card { opacity:1; visibility:visible; transform:translateY(0) scale(1); pointer-events:auto; } }';

  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var data = [
    { m: 'facebook.com',  cls: 'social-card-fb', name: 'WoodTools Argentina' },
    { m: 'youtube.com',   cls: 'social-card-yt', name: 'Wood Tools SRL' },
    { m: 'instagram.com', cls: 'social-card-ig', name: '@woodtoolssrl' }
  ];

  function build() {
    var links = document.querySelectorAll('.social-icons a');
    for (var j = 0; j < links.length; j++) {
      var a = links[j];
      if (a.querySelector('.social-card')) continue;
      var href = a.getAttribute('href') || '';
      for (var i = 0; i < data.length; i++) {
        if (href.indexOf(data[i].m) !== -1) {
          var card = document.createElement('span');
          card.className = 'social-card ' + data[i].cls;
          card.innerHTML = '<span class="sc-name">' + data[i].name + '</span><span class="sc-btn">Visitar perfil</span>';
          a.appendChild(card);
          break;
        }
      }
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
