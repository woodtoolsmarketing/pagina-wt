#!/bin/bash

# ============================================================================

#  WoodTools - Generador de páginas de producto nuevas (catálogo pág. 5-14)

# ----------------------------------------------------------------------------

#  CÓMO USARLO:

#  1) Abrí Git Bash en la RAÍZ de tu proyecto (donde está la carpeta

#     "ruta-productos"). Para confirmar que estás bien parado, ejecutá:

#         ls ruta-productos/HTML/FR

#     Tenés que ver tus páginas actuales (CB0750660.html, FRS0104.html, etc.)

#  2) Copiá este archivo a esa misma carpeta raíz con el nombre:

#         generar-fresas-nuevas.sh

#  3) Ejecutalo:

#         bash generar-fresas-nuevas.sh

#  4) Revisá y subí los cambios:

#         git status

#         git commit -m "Agrego 15 fresas nuevas del catalogo (pag. 5-14)"

#         git push

# ============================================================================



set -e  # cortar si hay un error



DEST="ruta-productos/HTML/FR"



# Verificación de que estamos en el lugar correcto

if [ ! -d "$DEST" ]; then

  echo "ERROR: no encuentro la carpeta $DEST"

  echo "Asegurate de ejecutar este script desde la raíz del proyecto"

  echo "(la carpeta que contiene 'ruta-productos')."

  exit 1

fi



# Función que escribe una página de producto con el formato estándar FR.

# Parámetros: 1=código  2=título  3=familia  4=categoría(filtro)

crear_pagina () {

  CODE="$1"; TITULO="$2"; FAMILIA="$3"; CATEGORIA="$4"

  cat > "$DEST/$CODE.html" << EOF

<!DOCTYPE html>

<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>$TITULO $CODE - Franzoi | WoodTools</title>

    <link rel="stylesheet" href="../../../styles.css">

    <link rel="stylesheet" href="../../CSS/styles.css">

    <link rel="stylesheet" href="../../CSS/producto-detalle.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

</head>

<body>

    <header>

        <style>

            .header-actions .social-icons a i.color-fb { color: #1877f2; transition: transform 0.2s ease; }

            .header-actions .social-icons a i.color-yt { color: #ff0000; transition: transform 0.2s ease; }

            .header-actions .social-icons a i.color-ig { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block; transition: transform 0.2s ease; }

            .header-actions .social-icons a:hover i { transform: scale(1.15); }

        </style>

        <div class="header-container">

            <div class="logo">

                <a href="../../../index.html">

                    <img src="../../../imagenes/logos/WoodTools.png" alt="WoodTools S.R.L.">

                </a>

            </div>

            <nav>

                <ul>

                    <li><a href="../../../index.html">INICIO</a></li>

                    <li class="dropdown">

                        <a href="#">PRODUCTOS <i class="fa-solid fa-caret-down"></i></a>

                        <ul class="dropdown-menu">

                            <li><a href="../../Sierras.html">Sierras circulares</a></li>

                            <li><a href="../../fresas.html">Fresas</a></li>

                            <li><a href="../../Cuchillas.html">Cuchillas</a></li>

                            <li><a href="../../mechas.html">Mechas y Brocas</a></li>

                            <li><a href="../../Diamante.html">Herramientas de Diamante</a></li>

                            <li><a href="../../Cabezales.html">Cabezales</a></li>

                        </ul>

                    </li>

                    <li><a href="../../../ruta-contactanos/HTML/Quienes-somos.html">NOSOTROS</a></li>

                    <li><a href="../../../ruta-contactanos/HTML/Service.html">SERVICE</a></li>

                    <li class="dropdown">

                        <a href="#">CONTACTANOS <i class="fa-solid fa-caret-down"></i></a>

                        <ul class="dropdown-menu">

                            <li><a href="https://wa.me/5491134609057" target="_blank">Ventas WhatsApp</a></li>

                            <li><a href="../../../ruta-contactanos/HTML/formulario-mail.html" target="_blank">Vía Email</a></li>

                            <li><a href="../../../ruta-contactanos/HTML/casa-central.html">Ubicación de Casa Central</a></li>

                        </ul>

                    </li>

                </ul>

            </nav>

            <div class="header-actions">

                <a href="https://www.mercadolibre.com.ar/pagina/woodtools#from=share_eshop" target="_blank" class="btn-shop">SHOP NOW</a>

                <div class="social-icons">

                    <a href="https://www.facebook.com/woodtoolsargentina" target="_blank"><i class="fa-brands fa-facebook-f color-fb"></i></a>

                    <a href="https://www.youtube.com/channel/UCsUxQWm2n8BMEhVQsOP_ydw" target="_blank"><i class="fa-brands fa-youtube color-yt"></i></a>

                    <a href="https://www.instagram.com/woodtoolssrl/" target="_blank"><i class="fa-brands fa-instagram color-ig"></i></a>

                </div>

            </div>

        </div>

    </header>

    

    <main class="producto-container">

        <div class="producto-imagen">

            </div>

        <div class="producto-info">

            <p class="marca">Familia: $FAMILIA</p>

            <h1 id="producto-titulo" class="producto-titulo">$TITULO</h1>

            

            <div class="selector-modelo">

                <label>Seleccioná la Variante ($FAMILIA):</label>

                <select id="variante-selector" data-categoria="$CATEGORIA">

                    <option value="" disabled selected>Cargando medidas...</option>

                </select>

            </div>

            

            <a href="#" id="btn-whatsapp" class="btn-comprar">

                <img src="../../../imagenes/logos/Whatsapp.png" alt="WhatsApp"> Consultar Precio y Stock

            </a>



            <div class="caracteristicas-principales">

                <h2>Características principales</h2>

                <table class="tabla-caracteristicas">

                    <tr><th class="caracteristica-label">Marca</th><td class="caracteristica-value">Franzoi</td></tr>

                    <tr><th class="caracteristica-label">Familia de código</th><td class="caracteristica-value">$FAMILIA</td></tr>

                    <tr><th class="caracteristica-label">Categoría</th><td class="caracteristica-value" style="text-transform: capitalize;">$CATEGORIA</td></tr>

                    <tr><th class="caracteristica-label">Material</th><td class="caracteristica-value">Widia (Metal Duro)</td></tr>

                    <tr><th class="caracteristica-label">Uso</th><td class="caracteristica-value">Industrial / Madera</td></tr>

                </table>

            </div>

        </div>

    </main>



    <section id="marcas">

        <img src="../../../imagenes/marcas/Ilma.jpeg" alt="Ilma">

        <img src="../../../imagenes/marcas/Schiavon.jpeg" alt="Schiavon">

        <img src="../../../imagenes/marcas/Freud.jpeg" alt="Freud">

        <img src="../../../imagenes/marcas/Franzoi.jpeg" alt="Franzoi">

        <img src="../../../imagenes/marcas/Nordutensili.jpeg" alt="Nordutensili">

    </section>



    <footer>

        <div class="footer-contact-bar">

            <p>Cabildo 61 - CP (1870) - Avellaneda - Buenos Aires - Argentina | +54 (11) 4218-1700 ó +54 (11) 4218-1701</p>

        </div>

    </footer>

    

    <script src="../../JS/producto.js?v=6"></script>

</body>

</html>

EOF

  echo "  creado: $DEST/$CODE.html"

}



echo "Generando páginas nuevas en $DEST ..."



#               código        título exacto del catálogo                    familia       categoría

crear_pagina "FA104"      "Fresas en ángulo HM"                          "FA"          "moldura"

crear_pagina "F2C014"     "Fresas 1/2 círculo cóncavo y convexo HM"      "F2C"         "moldura"

crear_pagina "FZS128"     "Zócalo Simple y Contramarco HM"               "FZS"         "moldura"

crear_pagina "FR104"      "Rinconera Simple HM"                          "FR"          "moldura"

crear_pagina "JFRD"       "Rinconera Doble HM"                           "JFRD"        "moldura"

crear_pagina "JFFI01"     "Frente Inglés HM"                             "JFFI"        "encastre"

crear_pagina "JFMS1234"   "Machimbre Simple HM"                          "JFMS"        "encastre"

crear_pagina "JFMD1234"   "Machimbre Doble HM"                           "JFMD"        "encastre"

crear_pagina "JFMP3411"   "Machimbre Piso Standard"                      "JFMP"        "encastre"

crear_pagina "JFMP3416G"  "Machimbre Piso para Grampa"                   "JFMP3416G"   "encastre"

crear_pagina "JFMP34166M" "Machimbre Piso para Grampa y Microbisel"      "JFMP34166M"  "encastre"

crear_pagina "JFDSG14"    "Deck para Grampa HM"                          "JFDSG"       "encastre"

crear_pagina "JFMPVR"     "Moldura de Puertas y Ventanas Simple HM"      "JFMPVR"      "moldura"

crear_pagina "JFE8122"    "Fresa para Ensamble Cónico HM"                "JFE81"       "encastre"

crear_pagina "JFME68"     "Fresa para Encastre HM"                       "JFME68"      "encastre"



echo ""

echo "Listo. Se generaron 15 páginas."

echo "Agregando los archivos nuevos a Git ..."

git add "$DEST"/FA104.html "$DEST"/F2C014.html "$DEST"/FZS128.html "$DEST"/FR104.html \

        "$DEST"/JFRD.html "$DEST"/JFFI01.html "$DEST"/JFMS1234.html "$DEST"/JFMD1234.html \

        "$DEST"/JFMP3411.html "$DEST"/JFMP3416G.html "$DEST"/JFMP34166M.html \

        "$DEST"/JFDSG14.html "$DEST"/JFMPVR.html "$DEST"/JFE8122.html "$DEST"/JFME68.html



echo ""

echo "Hecho. Ahora revisá con:   git status"

echo "Y cuando estés conforme:   git commit -m \"Agrego 15 fresas nuevas del catalogo\" && git push"