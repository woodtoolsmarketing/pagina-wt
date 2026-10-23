document.addEventListener("DOMContentLoaded", function() {
    // =====================================================================
    // DETECTAR SELECTORES DINÁMICAMENTE
    // =====================================================================
    const gridContainer = document.getElementById('ml-grid') || 
                          document.getElementById('contenedor-productos');
    
    const filterButtons = document.querySelectorAll('.filter-btn:not(#btn-limpiar)');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const noResultsDiv = document.getElementById('ml-no-data');
    
    // Si no encontramos el contenedor, salir
    if (!gridContainer) return;
    
    const productos = gridContainer.querySelectorAll('.product-card');

    // =====================================================================
    // 0. OCULTAR PUBLICACIONES SIN FOTOS
    //    Una card se esconde del público si su carpeta de producto no tiene
    //    ninguna foto en el manifiesto (ni portada ni galería). Cuando se
    //    suban fotos y se regenere el manifiesto, la card reaparece sola.
    // =====================================================================
    function claveCarpeta(src) {
        const m = (src || '').match(/herramientas\/(.+)$/);
        if (!m) return null;
        const partes = m[1].split('/');
        if (partes.length >= 3) {
            partes.pop();                    // sacar el nombre de archivo
            return decodeURIComponent(partes.join('/'));
        }
        // Imagen de portada suelta (Categoria/Nombre.ext): si al lado hay una
        // carpeta de producto con el mismo nombre (Categoria/Nombre), esa es su
        // galería, así que la card cuenta como "con fotos". Ej: Mechas/Practiwall.png
        // -> Mechas/Practiwall. Si esa carpeta no existe en el manifiesto (ej. el
        // placeholder Cabezales/simple.png), sigue quedando como sin fotos.
        if (partes.length === 2) {
            return decodeURIComponent(partes[0] + '/' + partes[1].replace(/\.[^./]+$/, ''));
        }
        return null;
    }
    fetch('../../imagenes/herramientas/galeria-manifest.json', { cache: 'no-cache' })
        .then(r => r.json())
        .then(manifest => {
            // Si el índice llegó vacío o truncado (por ejemplo, una subida por FTP
            // cortada a la mitad), NO escondemos nada: preferimos mostrar de más antes
            // que dejar la grilla en blanco. Misma guarda que usa producto.js.
            if (!manifest || Object.keys(manifest).length === 0) return;
            productos.forEach(producto => {
                const img = producto.querySelector('img');
                const key = img ? claveCarpeta(img.getAttribute('src')) : null;
                const tieneFotos = key && manifest[key] && manifest[key].length > 0;
                if (!tieneFotos) producto.dataset.sinFoto = '1';
            });
            depurarFiltrosVacios();
            aplicarFiltros();
        })
        .catch(() => {}); // si no se puede leer el manifiesto, no escondemos nada

    // =====================================================================
    // MÁQUINA DE DESTINO (punto 7): resuelve la máquina a partir del código.
    // (Misma lógica embebida en producto.js para la ficha de características.)
    // =====================================================================
    function maquinaDeProducto(codigo, categoria) {
        const c = (codigo || '').toUpperCase().replace(/\s+/g, '');
        if (categoria === 'Diamante') {
            return /^MB|^MD/.test(c) ? 'Centro de perforado' : 'Escuadradora, mesa de banco o seccionadora horizontal';
        }
        const reglas = [
            [/^F04C/, 'Tupí, machimbradora o moldurera'],
            [/^F107M/, 'Tupí, machimbradora o moldurera'],
            [/^FI14M|^F114M/, 'Tupí, machimbradora o moldurera'],
            [/^FR09W/, 'Escuadradora, mesa de banco o seccionadora horizontal'],
            [/^FR14W/, 'Ingletadora o máquina de mano'],
            [/^F2C/, 'Tupí, machimbradora o moldurera'],
            [/^F1M|^F2M/, 'Machimbradora'],
            [/^FCPV/, 'Machimbradora o moldurera'],
            [/^FCT/, 'Machimbradora o moldurera'],
            [/^FA/, 'Machimbradora o moldurera'],
            [/^FG46S/, 'Tupí'],
            [/^FMES|^FME/, 'Tupí'],
            [/^FMR/, 'Tupí'],
            [/^FRP/, 'Tupí, machimbradora o moldurera'],   // fresa de replán de tablero
            [/^FPP/, 'CNC o nesting'],                     // punta de plegado (mecha)
            [/^FP/, 'Tupí'],
            [/^FR12/, 'Ingletadora o máquina de mano'],
            [/^FRG|^FRINR|^FRIR|^FRPI|^FRI|^FRS/, 'Tupí'],
            [/^FZS/, 'Machimbradora o moldurera'],
            [/^FR/, 'Machimbradora o moldurera'],
            [/^GL/, 'Escuadradora'],
            [/^CB/, 'Cepilladora, moldurera o machimbradora'],
            [/^JFRA/, 'Machimbradora o moldurera'],        // JFRA1 revestimiento alistonado
            [/^JCMPVI|^JFC|^JFD|^JFE|^JFF|^JFM|^JFP|^JFQ|^JFR|^JFT|^JFV|^JF/, 'Tupí, machimbradora o moldurera'],
            [/^LCL3M|^LM0|^LM50M|^LM63M|^SCC|^SCE|^SCI|^SC_|^SC/, 'Máquina múltiple'],
            [/^LG2A|^LG2B|^LG3D|^LU1|^LU2|^LU3|^LU4|^LU5|^SSK|^F03FS/, 'Escuadradora, mesa de banco o seccionadora horizontal'],
            [/^LSA|^LSB/, 'Seccionadora'],
            [/^LP/, 'Ingletadora o máquina de mano'],
            [/^LT|^TR15M/, 'Trituradora'],
            [/^LI13|^LI16|^LI25/, 'Escuadradora o seccionadora'],
            [/^MBAD|^MBA/, 'Barreno'],
            [/^MBD|^MBI|^MB|^MCAR|^MCD|^MCI|^MC1|^MPD|^MPI|^MP1|^AVD|^AVI|^BRDD/, 'Centro de perforado o agujereadora múltiple'],
            [/^MIDN|^MIDR|^MID|^MIIR|^MI|^PRACTIWALL|^MAM|^PINZA|^ROUTER/, 'Pantógrafo o nesting'],
            [/^T102M|^T192M|^T194M|^T198M|^TM06M|^TD|^TP|^TW|^TF/, 'Machimbradora, moldurera o cepilladora'],
        ];
        for (const [re, maq] of reglas) if (re.test(c)) return maq;
        switch (categoria) {
            case 'Sierras': return 'Escuadradora, mesa de banco o seccionadora horizontal';
            case 'Fresas': return 'Tupí';
            case 'Mechas': return 'Centro de perforado o agujereadora múltiple';
            case 'Cabezales': return 'Machimbradora, moldurera o cepilladora';
            case 'Cuchillas': return 'Cepilladora, moldurera o machimbradora';
            default: return null;
        }
    }
    function maquinaKeywords(str) {
        const s = (str || '').toLowerCase();
        const map = [
            ['tupi', /tup[ií]/], ['machimbradora', /machimbrad/], ['moldurera', /moldurer/],
            ['cepilladora', /cepillad/], ['escuadradora', /escuadrad/], ['seccionadora', /seccionad/],
            ['multiple', /máquina múltiple/], ['trituradora', /triturad/], ['barreno', /barreno/],
            ['perforado', /perforad|agujeread/], ['nesting', /nesting|pantógraf|pantograf|cnc/],
            ['ingletadora', /ingletadora|mano/]
        ];
        return map.filter(function (p) { return p[1].test(s); }).map(function (p) { return p[0]; });
    }
    const mapaCarpetaCategoria = { SC: 'Sierras', FR: 'Fresas', MCH: 'Mechas', CH: 'Cuchillas', CBZ: 'Cabezales', DM: 'Diamante' };

    // Máquinas que corresponden a cada categoría de herramienta (su "familia"). En el
    // filtro de una sección (grid de una sola categoría) solo se muestran estas máquinas;
    // así no aparece una máquina de otra familia por un producto suelto (ej. FI14M, una
    // sierra de ranurar, técnicamente va en tupí, pero en la sección Sierras NO se
    // muestra "tupí"). En "productos.html" (todas las categorías juntas) no se restringe.
    const maquinasPorCategoria = {
        Sierras:   ['escuadradora', 'seccionadora', 'multiple', 'trituradora', 'ingletadora'],
        Fresas:    ['tupi', 'machimbradora', 'moldurera', 'cepilladora'],
        Cuchillas: ['cepilladora', 'moldurera', 'machimbradora'],
        Cabezales: ['machimbradora', 'moldurera', 'cepilladora', 'tupi'],
        Mechas:    ['perforado', 'nesting', 'barreno'],
        Diamante:  ['perforado', 'escuadradora', 'seccionadora']
    };

    // =====================================================================
    // 1. PARCHE DE CATEGORÍAS (Sierras, Fresas, Mechas, Cuchillas y Diamante)
    // =====================================================================
    const codigosMelamina = ["LU2C", "LU3D", "LU3E", "LU3F", "LSB", "FR12L", "LG3D", "SSK12", "F03FS"];
    const codigosMadera = ["LU1F", "LU1D"]; 

    productos.forEach(producto => {
        // Misma razon que en textoDeProducto: si la tarjeta apunta a la tienda,
        // la ruta original con el codigo esta en data-ficha.
        const enlace = producto.getAttribute('data-ficha') || producto.getAttribute('href') || "";
        
        // --- SIERRAS ---
        if (codigosMadera.some(codigo => enlace.includes(codigo))) {
            producto.setAttribute('data-categoria', 'madera');
        } 
        else if (codigosMelamina.some(codigo => enlace.includes(codigo))) {
            if (producto.getAttribute('data-categoria') !== 'incisor') {
                producto.setAttribute('data-categoria', 'melamina');
                // Subdivisión por ángulo de ataque: LU3F y FR12L = ángulo negativo; el resto = positivo.
                const negativo = enlace.includes('LU3F') || enlace.includes('FR12L');
                producto.setAttribute('data-subcat', negativo ? 'negativo' : 'positivo');
            }
        }

        // --- FRESAS (clasificación por familia de código) ---
        // Sólo aplica a las páginas de fresas (enlaces dentro de /FR/).
        // tipo:    canales | cepillado | moldura
        // subtipo: individual | combo   (sólo para las de moldura)
        // Reglas generales:
        //   CB*  -> cepillado (todas las que inician con CB)
        //   FR*  -> canales / rectas (todas las que inician con FR:
        //           FRS, FRI, FRG, FR rinconera, FRP replán, etc.)
        //   resto -> moldura (con subtipo individual/combo; el orden de
        //           las reglas IMPORTA: códigos largos primero para que,
        //           por ejemplo, JFMP3416G no sea capturado por JFMP).
        if (enlace.includes("FR/")) {
            // Tomamos el nombre de archivo (código) que va después de "FR/"
            const mFR = enlace.match(/FR\/([^\/]+?)\.html/i);
            const codigoFresa = mFR ? mFR[1].toUpperCase() : "";

            // Clasificación por familia de código. El ORDEN importa: los códigos
            // más específicos van primero para que, por ejemplo, FRP5533 (aberturas)
            // y FR104 (moldura) NO sean capturados por la regla general "FR" (canales).
            const reglasFresas = [
                // --- CEPILLADO (helicoidales): inician con CB ---
                ["CB",       "cepillado"],
                // --- REVESTIMIENTO ---
                ["JFFI",     "revestimiento"],   // JFFI01
                ["JFRA",     "revestimiento"],   // JFRA1
                // --- ABERTURAS ---
                ["JFMPV14",  "aberturas"],        // JFMPV14
                ["FRP",      "aberturas"],         // FRP5533
                // --- MOLDURA ---
                ["FR104",    "moldura"],
                ["F2C",      "moldura"],
                ["JFPMS",    "moldura"],
                ["F04C",     "moldura"],
                // --- MULTIMOLDURA ---
                ["FMR",      "multimoldura"],   // FMR04 (multirradio)
                ["FP",       "multimoldura"],   // FP402 (multimoldura) + FP2226/FP2286/... (palos de escoba)
                // --- ENCASTRE / FINGER JOINT ---
                ["JFE8Z",    "encastre"],
                ["JFE81",    "encastre"],          // incluye JFE8122
                ["JFE254",   "encastre"],
                ["JFE5022",  "encastre"],
                // --- MACHIMBRE Y PISO ---
                ["JFMD",     "machimbre"],
                ["JFMS",     "machimbre"],
                ["JFDSG",    "machimbre"],
                // (Multimoldura: sin códigos asignados por ahora)
                // --- REALIZAR CANALES (rectas): resto de códigos que inician con FR ---
                ["FR",       "canales"]
                // SIN catch-all: las fresas que no matchean ninguna regla quedan
                // SIN tipo (no aparecen en ningún filtro de tipo, solo en "todos").
                // Así "moldura" contiene EXACTAMENTE los códigos indicados.
            ];

            for (const [pref, tipo] of reglasFresas) {
                if (codigoFresa.startsWith(pref)) {
                    producto.setAttribute('data-tipo', tipo);
                    break;
                }
            }
        }

        // --- MECHAS Y BROCAS ---
        if (enlace.includes("MCH/MPD") || enlace.includes("MCH/MPI")) {
            producto.setAttribute('data-categoria', '300'); 
        } else if (enlace.includes("MCH/MCD") || enlace.includes("MCH/MCI")) {
            producto.setAttribute('data-categoria', '301'); 
        } else if (enlace.includes("MCH/BRDD")) {
            producto.setAttribute('data-categoria', '302'); 
        } else if (enlace.includes("MCH/MIDN")) {
            // Mechas de compresión (nesting): MIDN. Va ANTES que MID porque "MID"
            // también matchea "MIDN". (Sin barra inicial: los href son relativos.)
            producto.setAttribute('data-categoria', '310');
        } else if (enlace.includes("MCH/MID") || enlace.includes("MCH/MIIR") || enlace.includes("MCH/MI.")) {
            producto.setAttribute('data-categoria', '303');
        } else if (enlace.includes("MCH/MBD") || enlace.includes("MCH/MBI") || enlace.includes("MCH/MB.")) {
            producto.setAttribute('data-categoria', '304'); 
        } else if (enlace.includes("MCH/MAM") || enlace.includes("MCH/PINZAER")) {
            producto.setAttribute('data-categoria', '305'); 
        } else if (enlace.includes("MCH/MCAR")) {
            producto.setAttribute('data-categoria', '306'); 
        } else if (enlace.includes("MCH/MBA")) {
            producto.setAttribute('data-categoria', '307'); 
        } else if (enlace.includes("MCH/AVD")) {
            producto.setAttribute('data-categoria', '308'); 
        } else if (enlace.includes("MCH/Router_Franzoi")) {
            producto.setAttribute('data-categoria', '309');
        } else if (enlace.includes("MCH/PRACTIWALL") || enlace.includes("MCH/PLEGADO") ||
                   enlace.includes("MCH/FRPDIBUJO") || enlace.includes("MCH/FRINR0804")) {
            producto.setAttribute('data-categoria', '311'); // Otras
        }

        // --- CUCHILLAS ---
        if (enlace.includes("/CH/CHC_HSS") || enlace.includes("/CH/CHC_MD")) {
            producto.setAttribute('data-formato', 'planas');
        } else if (enlace.includes("/CH/CHCR_HSS") || enlace.includes("/CH/CHCR_MD")) {
            producto.setAttribute('data-formato', 'dr');
        } else if (enlace.includes("/CH/CHCECH")) {
            producto.setAttribute('data-formato', 'chipera');
        } else if (enlace.includes("/CH/CBP") || enlace.includes("/CH/CBR")) {
            producto.setAttribute('data-formato', 'cabezales');
        }
        
        if (enlace.includes("_HSS")) {
            producto.setAttribute('data-material', 'hss');
        } else if (enlace.includes("_MD")) {
            producto.setAttribute('data-material', 'widia');
        } else if (enlace.includes("CHCECH") || enlace.includes("CBP") || enlace.includes("CBR")) {
            producto.setAttribute('data-material', 'otros');
        }

        // --- DIAMANTE ---
        if (enlace.includes("/DM/SCED")) {
            producto.setAttribute('data-categoria', 'sierra');
            producto.setAttribute('data-marca', 'schiavon');
        } else if (enlace.includes("/DM/SCCD") || enlace.includes("/DM/SCID")) {
            producto.setAttribute('data-categoria', 'incisor');
            producto.setAttribute('data-marca', 'schiavon');
        } else if (enlace.includes("/DM/MBDD") || enlace.includes("/DM/MDD") || enlace.includes("/DM/MCED")) {
            producto.setAttribute('data-categoria', 'mecha');
            producto.setAttribute('data-marca', 'franzoi');
        }

        // --- MÁQUINA DE DESTINO (para el filtro de la página de productos) ---
        const mMaq = enlace.match(/([A-Za-z]+)\/([^\/]+?)\.html/);
        if (mMaq) {
            const catMaq = mapaCarpetaCategoria[mMaq[1].toUpperCase()] || '';
            let codMaq = mMaq[2]; try { codMaq = decodeURIComponent(codMaq); } catch (e) {}
            const kws = maquinaKeywords(maquinaDeProducto(codMaq, catMaq));
            if (kws.length) producto.setAttribute('data-maquina', kws.join(' '));
        }
    });

    // =====================================================================
    // 2. ALIAS DE FILTROS (un valor en URL/botón puede equivaler a varios data-*)
    //    Esto resuelve el caso de la página Diamante.html, donde la URL trae
    //    ?categoria=discos  -> debe mostrar productos con data-categoria
    //    "sierra" Y "incisor" a la vez. Y ?categoria=mechas -> "mecha".
    //    Si más adelante querés agregar otros alias, simplemente sumás acá.
    // =====================================================================
    const aliasFiltros = {
        categoria: {
            discos: ['sierra', 'incisor'],
            mechas: ['mecha']
        }
    };

    function resolverAlias(tipoFiltro, valor) {
        if (aliasFiltros[tipoFiltro] && aliasFiltros[tipoFiltro][valor]) {
            return aliasFiltros[tipoFiltro][valor]; // array
        }
        return valor; // string (comportamiento original)
    }

    // =====================================================================
    // 3. ESTADO DE LOS FILTROS
    // =====================================================================
    let filtrosActivos = {
        categoria: 'todos',
        marca: 'todos',
        tipo: 'todos',
        subtipo: 'todos',
        subcat: 'todos',
        formato: 'todos',
        material: 'todos',
        maquina: 'todos'
    };

    // Memoria del último filtro elegido en esta página. Sirve para que al entrar
    // a una herramienta y volver atrás, se conserve lo último que eligió el
    // usuario (incluida la "limpieza" de filtros) en vez de re-aplicar la URL.
    const CLAVE_ESTADO = 'wt-filtros:' + window.location.pathname;
    function guardarEstado() {
        try {
            sessionStorage.setItem(CLAVE_ESTADO, JSON.stringify({
                filtros: filtrosActivos,
                busqueda: typeof textoBusqueda === 'string' ? textoBusqueda : ''
            }));
        } catch (e) {}
    }

    // =====================================================================
    // 3b. BUSCADOR POR CÓDIGO O NOMBRE (input #buscador-productos)
    //     Filtra las tarjetas por el texto del título y por el código del
    //     producto (nombre del archivo .html del enlace). Convive con los
    //     filtros de categoría/marca: ambos se aplican a la vez.
    // =====================================================================
    const inputBusqueda = document.getElementById('buscador-productos');
    let textoBusqueda = '';

    // Normaliza para buscar: minusculas y SIN acentos (asi "moldura"/"maquina"
    // matchean aunque se escriba con o sin tilde).
    function normalizarBusqueda(s) {
        return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    }

    function textoDeProducto(producto) {
        const tituloEl = producto.querySelector('.product-title');
        // textContent (no innerText): devuelve el texto aunque la tarjeta este
        // oculta (display:none). Con innerText, una card ya filtrada devolvia ''
        // y dejaba de matchear por nombre en busquedas encadenadas.
        const titulo = tituloEl ? tituloEl.textContent : '';
        // El codigo sale de la ruta de la ficha. Si la tarjeta fue reapuntada a
        // Tienda Nube, esa ruta quedo guardada en data-ficha y el href ya no la
        // tiene: sin esto, buscar por codigo (LG3D, TM06M...) no encuentra nada.
        const ruta = producto.getAttribute('data-ficha') || producto.getAttribute('href') || '';
        let codigo = ruta.split('/').pop().replace('.html', '');
        try { codigo = decodeURIComponent(codigo); } catch (e) {}
        return normalizarBusqueda(titulo + ' ' + codigo);
    }

    // =====================================================================
    // 3c. BOTÓN "FILTRAR" (celular y tablet vertical)
    //     Hasta 768px el panel de filtros va plegado (lista-productos.css) y
    //     este botón lo abre y lo cierra. Muestra cuántos filtros hay activos
    //     para que se note que la grilla está filtrada aunque el panel esté
    //     cerrado. El plegado es solo por clase y en CSS: si se gira el
    //     teléfono o se agranda la ventana, en escritorio el panel se ve igual.
    // =====================================================================
    const btnFiltrar = document.querySelector('.filtros-toggle');
    const panelFiltros = document.querySelector('.filters-sidebar');

    if (btnFiltrar && panelFiltros) {
        btnFiltrar.addEventListener('click', function() {
            const abierto = panelFiltros.classList.toggle('abierto');
            btnFiltrar.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        });
    }

    function actualizarBotonFiltrar() {
        if (!btnFiltrar) return;
        // subtipo y subcat son el submenú de un filtro que ya cuenta
        const n = Object.keys(filtrosActivos).filter(k =>
            k !== 'subtipo' && k !== 'subcat' && filtrosActivos[k] && filtrosActivos[k] !== 'todos'
        ).length;
        btnFiltrar.textContent = n ? 'Filtrar (' + n + ')' : 'Filtrar';
        btnFiltrar.classList.toggle('con-filtros', n > 0);
    }

    // =====================================================================
    // 4. LÓGICA PRINCIPAL DE FILTRADO
    //    Soporta tanto strings (lógica original) como arrays (alias).
    // =====================================================================
    let _reFiltrandoMaq = false;   // guarda anti-recursión al soltar la máquina activa
    function aplicarFiltros() {
        let productosVisibles = 0;

        productos.forEach(producto => {
            // Publicaciones sin fotos: escondidas siempre, sin importar los filtros.
            if (producto.dataset.sinFoto === '1') { producto.style.display = 'none'; return; }

            const atributos = {
                categoria: producto.getAttribute('data-categoria'),
                marca: producto.getAttribute('data-marca'),
                tipo: producto.getAttribute('data-tipo'),
                subtipo: producto.getAttribute('data-subtipo'),
                subcat: producto.getAttribute('data-subcat'),
                formato: producto.getAttribute('data-formato'),
                material: producto.getAttribute('data-material'),
                maquina: producto.getAttribute('data-maquina')
            };

            let mostrar = true;

            // --- Buscador: si hay texto, el producto debe contenerlo ---
            if (textoBusqueda && !textoDeProducto(producto).includes(textoBusqueda)) {
                mostrar = false;
            }

            if (mostrar) for (const [filtro, valor] of Object.entries(filtrosActivos)) {
                if (valor !== 'todos') {
                    const valorProducto = atributos[filtro];

                    if (filtro === 'maquina') {
                        // La máquina es multivalor (data-maquina con varias keywords):
                        // el producto pasa si su lista incluye la máquina elegida.
                        const toks = (valorProducto || '').split(/\s+/);
                        if (!toks.includes(valor)) { mostrar = false; break; }
                    } else if (Array.isArray(valor)) {
                        // Caso alias: el producto debe coincidir con alguno de los valores
                        if (!valorProducto || !valor.some(v => v.toLowerCase() === valorProducto.toLowerCase())) {
                            mostrar = false;
                            break;
                        }
                    } else {
                        // Caso original: comparación directa
                        if (!valorProducto || valorProducto.toLowerCase() !== valor.toLowerCase()) {
                            mostrar = false;
                            break;
                        }
                    }
                }
            }

            if (mostrar) {
                producto.style.display = 'flex';
                productosVisibles++;
            } else {
                producto.style.display = 'none';
            }
        });

        if (noResultsDiv) {
            if (productosVisibles === 0) {
                noResultsDiv.style.display = 'flex';
            } else {
                noResultsDiv.style.display = 'none';
            }
        }

        // Acota el filtro de máquina según los otros filtros activos. Si su opción activa
        // desapareció, la suelta y re-filtra una sola vez (guarda anti-recursión).
        const soltoMaq = actualizarMaquinasContextual();
        if (soltoMaq && !_reFiltrandoMaq) {
            _reFiltrandoMaq = true;
            aplicarFiltros();
            _reFiltrandoMaq = false;
            return;
        }

        actualizarBotonFiltrar();
    }

    // Oculta CUALQUIER opción de filtro que no tenga ningún producto visible en
    // esta página (categorías vacías, marcas sin productos, máquinas que nadie usa,
    // etc.). Si un grupo entero queda sin opciones, se esconde el grupo.
    // Cuando más adelante se sumen productos/fotos, las opciones reaparecen solas.
    function depurarFiltrosVacios() {
        const botones = Array.from(document.querySelectorAll('.filter-btn[data-filter-type][data-filter-value]'));
        if (!botones.length) return;

        // Valores realmente presentes entre los productos que SÍ se muestran.
        const presentes = {};
        productos.forEach(p => {
            if (p.dataset.sinFoto === '1') return;   // lo escondido no cuenta
            Object.keys(filtrosActivos).forEach(tipo => {
                const val = p.getAttribute('data-' + tipo);
                if (!val) return;
                if (!presentes[tipo]) presentes[tipo] = new Set();
                // "maquina" es multivalor (varias keywords separadas por espacio)
                if (tipo === 'maquina') val.split(/\s+/).forEach(k => { if (k) presentes[tipo].add(k.toLowerCase()); });
                else presentes[tipo].add(val.toLowerCase());
            });
        });

        botones.forEach(b => {
            const tipo = b.getAttribute('data-filter-type');
            // El filtro de máquina lo maneja actualizarMaquinasContextual() (whitelist por
            // sección, y se acota al filtrar por categoría/marca/búsqueda). Acá no se toca.
            if (tipo === 'maquina') return;
            const valor = (b.getAttribute('data-filter-value') || '').toLowerCase();
            // Los alias (ej. "discos" = sierra+incisor) se dan por válidos.
            const esAlias = !!(aliasFiltros[tipo] && aliasFiltros[tipo][valor]);
            const hay = esAlias || !!(presentes[tipo] && presentes[tipo].has(valor));
            const item = b.closest('li') || b;
            item.style.display = hay ? '' : 'none';
            // Si el filtro activo apuntaba a algo que ya no existe, lo soltamos.
            if (!hay && b.classList.contains('activo')) {
                b.classList.remove('activo');
                filtrosActivos[tipo] = 'todos';
            }
        });

        // Esconder los grupos que quedaron sin ninguna opción visible
        // (nunca los que contienen el botón "Limpiar Filtros").
        document.querySelectorAll('.filter-group').forEach(grupo => {
            if (grupo.querySelector('#btn-limpiar')) return;
            // El grupo de máquina lo maneja actualizarMaquinasContextual().
            if (grupo.querySelector('.filter-btn[data-filter-type="maquina"]')) return;
            const opciones = grupo.querySelectorAll('.filter-btn[data-filter-type][data-filter-value]');
            if (!opciones.length) return;
            const algunaVisible = Array.from(opciones).some(b => {
                const item = b.closest('li') || b;
                return item.style.display !== 'none';
            });
            grupo.style.display = algunaVisible ? '' : 'none';
        });
    }

    // Actualiza el filtro "Para tipos de máquina" según los OTROS filtros activos
    // (categoría, marca, subcat, búsqueda, etc.):
    //  - Sin filtros que acoten: muestra TODAS las máquinas de la familia de la sección
    //    (whitelist), aunque alguna no tenga producto visible (ej. "Tupí" en Cabezales).
    //  - Con algún filtro/búsqueda activo: esconde las máquinas que no tienen ningún
    //    producto dentro de ese subconjunto. En "productos.html" (varias categorías) no
    //    hay whitelist: la base es "máquinas presentes en toda la página".
    // Devuelve true si tuvo que soltar la máquina activa (para re-filtrar una vez).
    function actualizarMaquinasContextual() {
        const botonesMaq = Array.from(document.querySelectorAll('.filter-btn[data-filter-type="maquina"][data-filter-value]'));
        if (!botonesMaq.length) return false;

        // Categoría(s) de la sección (por la carpeta del href) + máquinas presentes en toda la página.
        const cats = new Set();
        const presentesTodas = new Set();
        productos.forEach(p => {
            if (p.dataset.sinFoto === '1') return;
            const folder = (p.getAttribute('href') || '').split('/')[0];
            if (mapaCarpetaCategoria[folder]) cats.add(mapaCarpetaCategoria[folder]);
            const m = p.getAttribute('data-maquina');
            if (m) m.split(/\s+/).forEach(k => { if (k) presentesTodas.add(k.toLowerCase()); });
        });
        const restringir = cats.size === 1;
        const permitidas = restringir ? new Set(maquinasPorCategoria[[...cats][0]] || []) : null;

        // ¿Hay algún filtro que acote (que no sea el de máquina) o texto de búsqueda?
        const acota = !!textoBusqueda || Object.keys(filtrosActivos).some(k =>
            k !== 'maquina' && filtrosActivos[k] && filtrosActivos[k] !== 'todos');

        // Máquinas con al menos un producto que pasa los OTROS filtros (+ búsqueda).
        const disponibles = new Set();
        if (acota) {
            productos.forEach(p => {
                if (p.dataset.sinFoto === '1') return;
                if (textoBusqueda && !textoDeProducto(p).includes(textoBusqueda)) return;
                for (const [f, v] of Object.entries(filtrosActivos)) {
                    if (f === 'maquina' || !v || v === 'todos') continue;
                    const vp = p.getAttribute('data-' + f);
                    if (Array.isArray(v)) { if (!vp || !v.some(x => x.toLowerCase() === vp.toLowerCase())) return; }
                    else { if (!vp || vp.toLowerCase() !== ('' + v).toLowerCase()) return; }
                }
                const m = p.getAttribute('data-maquina');
                if (m) m.split(/\s+/).forEach(k => { if (k) disponibles.add(k.toLowerCase()); });
            });
        }

        let soltoActiva = false;
        botonesMaq.forEach(b => {
            const V = (b.getAttribute('data-filter-value') || '').toLowerCase();
            const base = restringir ? !!(permitidas && permitidas.has(V)) : presentesTodas.has(V);
            const mostrar = base && (!acota || disponibles.has(V));
            const item = b.closest('li') || b;
            item.style.display = mostrar ? '' : 'none';
            if (!mostrar && b.classList.contains('activo')) {
                b.classList.remove('activo');
                filtrosActivos['maquina'] = 'todos';
                soltoActiva = true;
            }
        });

        // Esconder el grupo de máquina si no quedó ninguna opción visible.
        const grupoMaq = botonesMaq[0].closest('.filter-group');
        if (grupoMaq && !grupoMaq.querySelector('#btn-limpiar')) {
            const algunaVisible = botonesMaq.some(b => (b.closest('li') || b).style.display !== 'none');
            grupoMaq.style.display = algunaVisible ? '' : 'none';
        }
        return soltoActiva;
    }

    // Muestra/oculta los submenús contextuales según el filtro padre activo.
    function actualizarSubmenus() {
        const subMol = document.getElementById('submenu-moldura');
        if (subMol) subMol.style.display = (filtrosActivos.tipo === 'moldura') ? 'block' : 'none';
        const subMel = document.getElementById('submenu-melamina');
        if (subMel) subMel.style.display = (filtrosActivos.categoria === 'melamina') ? 'block' : 'none';
    }

    // --- Conexión del buscador (si la página tiene el input) ---
    if (inputBusqueda) {
        inputBusqueda.addEventListener('input', function() {
            textoBusqueda = normalizarBusqueda(this.value.trim());
            aplicarFiltros();
            guardarEstado();
        });
    }

    // =====================================================================
    // 5. LECTURA DE FILTROS DESDE LA URL
    //    Ahora si el valor de la URL tiene un alias definido, se aplica
    //    el array correspondiente. Si no, se comporta como antes.
    // =====================================================================
    const urlParams = new URLSearchParams(window.location.search);

    // Si el usuario VUELVE atrás (por ej. desde la ficha de una herramienta),
    // restauramos el último filtro que había elegido en vez de re-aplicar la URL.
    let estadoRestaurado = false;
    try {
        const nav = performance.getEntriesByType('navigation')[0];
        if (nav && nav.type === 'back_forward') {
            const g = JSON.parse(sessionStorage.getItem(CLAVE_ESTADO) || 'null');
            if (g && g.filtros) {
                // Se completa con los valores por defecto: un estado guardado
                // por una version anterior puede no traer todas las claves.
                filtrosActivos = Object.assign({
                    categoria: 'todos', marca: 'todos', tipo: 'todos', subtipo: 'todos',
                    subcat: 'todos', formato: 'todos', material: 'todos', maquina: 'todos'
                }, g.filtros);
                textoBusqueda = g.busqueda || '';
                if (inputBusqueda) inputBusqueda.value = textoBusqueda;
                Object.keys(filtrosActivos).forEach(tipo => {
                    const val = filtrosActivos[tipo];
                    if (val === 'todos') return;
                    (Array.isArray(val) ? val : [val]).forEach(v => {
                        const b = document.querySelector('.filter-btn[data-filter-type="' + tipo + '"][data-filter-value="' + v + '"]');
                        if (b) b.classList.add('activo');
                    });
                });
                estadoRestaurado = true;
            }
        }
    } catch (e) {}

    if (!estadoRestaurado) urlParams.forEach((valorUrl, tipoFiltroUrl) => {
        if (filtrosActivos[tipoFiltroUrl] !== undefined) {
            filtrosActivos[tipoFiltroUrl] = resolverAlias(tipoFiltroUrl, valorUrl);
            
            // Si el valor tiene alias (array), intentamos marcar un botón cuyo
            // data-filter-value coincida con el alias (ej: "discos"). Si no
            // existe ese botón, marcamos los botones de cada valor real.
            const valorResuelto = filtrosActivos[tipoFiltroUrl];

            if (Array.isArray(valorResuelto)) {
                let botonAlias = document.querySelector(`.filter-btn[data-filter-type="${tipoFiltroUrl}"][data-filter-value="${valorUrl}"]`);
                if (botonAlias) {
                    botonAlias.classList.add('activo');
                } else {
                    valorResuelto.forEach(v => {
                        const b = document.querySelector(`.filter-btn[data-filter-type="${tipoFiltroUrl}"][data-filter-value="${v}"]`);
                        if (b) b.classList.add('activo');
                    });
                }
            } else {
                const botonCorrespondiente = document.querySelector(`.filter-btn[data-filter-type="${tipoFiltroUrl}"][data-filter-value="${valorUrl}"]`);
                if (botonCorrespondiente) {
                    botonCorrespondiente.classList.add('activo');
                }
            }
        }
    });

    // Búsqueda desde la lupa del header: viene como ?q=texto en la URL.
    const qParam = urlParams.get('q');
    if (!estadoRestaurado && qParam && inputBusqueda) {
        inputBusqueda.value = qParam;
        textoBusqueda = normalizarBusqueda(qParam.trim());
    }

    // =====================================================================
    // 6. EVENTOS: Clics en los botones del menú lateral
    //    También respetan alias si el botón tiene como data-filter-value
    //    una clave de alias (ej. "discos").
    // =====================================================================
    filterButtons.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault(); 

            const tipoFiltro = this.getAttribute('data-filter-type'); 
            const valorFiltro = this.getAttribute('data-filter-value'); 

            if (this.classList.contains('activo')) {
                this.classList.remove('activo');
                filtrosActivos[tipoFiltro] = 'todos';
            } else {
                document.querySelectorAll(`.filter-btn[data-filter-type="${tipoFiltro}"]`).forEach(btn => {
                    btn.classList.remove('activo');
                });
                this.classList.add('activo');
                filtrosActivos[tipoFiltro] = resolverAlias(tipoFiltro, valorFiltro);
            }

            // --- Submenús contextuales (Moldura en fresas / Ángulo en melamina) ---
            // Si el filtro padre deja de estar seleccionado, limpiamos su sub-filtro
            // para no dejar un filtro colgado.
            if (tipoFiltro === 'tipo' && filtrosActivos.tipo !== 'moldura') {
                filtrosActivos.subtipo = 'todos';
                document.querySelectorAll('.filter-btn[data-filter-type="subtipo"]').forEach(btn => btn.classList.remove('activo'));
            }
            if (tipoFiltro === 'categoria' && filtrosActivos.categoria !== 'melamina') {
                filtrosActivos.subcat = 'todos';
                document.querySelectorAll('.filter-btn[data-filter-type="subcat"]').forEach(btn => btn.classList.remove('activo'));
            }
            actualizarSubmenus();

            aplicarFiltros();
            guardarEstado();
        });
    });

    // =====================================================================
    // 7. BOTÓN: Limpiar Filtros
    // =====================================================================
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function(e) {
            e.preventDefault();
            
            // "maquina" tiene que estar: sin esa clave, al volver atras
            // depurarFiltrosVacios() no la recorria y escondia el grupo
            // MÁQUINAS entero.
            filtrosActivos = {
                categoria: 'todos',
                marca: 'todos',
                tipo: 'todos',
                subtipo: 'todos',
                subcat: 'todos',
                formato: 'todos',
                material: 'todos',
                maquina: 'todos'
            };

            filterButtons.forEach(btn => btn.classList.remove('activo'));
            actualizarSubmenus();
            // Limpiar también el buscador
            if (inputBusqueda) { inputBusqueda.value = ''; textoBusqueda = ''; }
            window.history.replaceState({}, document.title, window.location.pathname);
            aplicarFiltros();
            guardarEstado();
        });
    }

    // =====================================================================
    // 8. INICIAR: Forzamos la ejecución apenas carga la página
    // =====================================================================
    // Si al cargar (por URL) hay un filtro con submenú (moldura o melamina), lo mostramos.
    actualizarSubmenus();
    depurarFiltrosVacios();
    aplicarFiltros();
});