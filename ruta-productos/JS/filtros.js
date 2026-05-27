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
    // 1. PARCHE DE CATEGORÍAS (Sierras, Fresas, Mechas, Cuchillas y Diamante)
    // =====================================================================
    const codigosMelamina = ["LU2C", "LU3D", "LU3E", "LU3F", "LSB", "FR12L", "LG3D", "SSK12", "F03FS"];
    const codigosMadera = ["LU1F", "LU1D"]; 

    productos.forEach(producto => {
        const enlace = producto.getAttribute('href') || "";
        
        // --- SIERRAS ---
        if (codigosMadera.some(codigo => enlace.includes(codigo))) {
            producto.setAttribute('data-categoria', 'madera');
        } 
        else if (codigosMelamina.some(codigo => enlace.includes(codigo))) {
            if (producto.getAttribute('data-categoria') !== 'incisor') {
                producto.setAttribute('data-categoria', 'melamina');
            }
        }

        // --- FRESAS ---
        if (enlace.includes("/FR/FRS") || enlace.includes("/FR/FRI") || enlace.includes("/FR/FA")) {
            producto.setAttribute('data-tipo', 'rectas');
        } else if (enlace.includes("/FR/F1M") || enlace.includes("/FR/F2C") || enlace.includes("/FR/F2M")) {
            producto.setAttribute('data-tipo', 'helicoidales');
        }

        // --- MECHAS Y BROCAS ---
        if (enlace.includes("/MCH/MPD") || enlace.includes("/MCH/MPI")) {
            producto.setAttribute('data-categoria', '300'); 
        } else if (enlace.includes("/MCH/MCD") || enlace.includes("/MCH/MCI")) {
            producto.setAttribute('data-categoria', '301'); 
        } else if (enlace.includes("/MCH/BRDD")) {
            producto.setAttribute('data-categoria', '302'); 
        } else if (enlace.includes("/MCH/MID") || enlace.includes("/MCH/MIIR") || enlace.includes("/MCH/MI.") || enlace.includes("/MCH/MIDN")) {
            producto.setAttribute('data-categoria', '303'); 
        } else if (enlace.includes("/MCH/MBD") || enlace.includes("/MCH/MBI") || enlace.includes("/MCH/MB.")) {
            producto.setAttribute('data-categoria', '304'); 
        } else if (enlace.includes("/MCH/MAM") || enlace.includes("/MCH/PINZAER")) {
            producto.setAttribute('data-categoria', '305'); 
        } else if (enlace.includes("/MCH/MCAR")) {
            producto.setAttribute('data-categoria', '306'); 
        } else if (enlace.includes("/MCH/MBA")) {
            producto.setAttribute('data-categoria', '307'); 
        } else if (enlace.includes("/MCH/AVD")) {
            producto.setAttribute('data-categoria', '308'); 
        } else if (enlace.includes("/MCH/Router_Franzoi")) {
            producto.setAttribute('data-categoria', '309'); 
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
        formato: 'todos',
        material: 'todos'
    };

    // =====================================================================
    // 4. LÓGICA PRINCIPAL DE FILTRADO
    //    Soporta tanto strings (lógica original) como arrays (alias).
    // =====================================================================
    function aplicarFiltros() {
        let productosVisibles = 0;

        productos.forEach(producto => {
            const atributos = {
                categoria: producto.getAttribute('data-categoria'),
                marca: producto.getAttribute('data-marca'),
                tipo: producto.getAttribute('data-tipo'),
                formato: producto.getAttribute('data-formato'),
                material: producto.getAttribute('data-material')
            };

            let mostrar = true;

            for (const [filtro, valor] of Object.entries(filtrosActivos)) {
                if (valor !== 'todos') {
                    const valorProducto = atributos[filtro];

                    if (Array.isArray(valor)) {
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
    }

    // =====================================================================
    // 5. LECTURA DE FILTROS DESDE LA URL
    //    Ahora si el valor de la URL tiene un alias definido, se aplica
    //    el array correspondiente. Si no, se comporta como antes.
    // =====================================================================
    const urlParams = new URLSearchParams(window.location.search);
    
    urlParams.forEach((valorUrl, tipoFiltroUrl) => {
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

            aplicarFiltros();
        });
    });

    // =====================================================================
    // 7. BOTÓN: Limpiar Filtros
    // =====================================================================
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function(e) {
            e.preventDefault();
            
            filtrosActivos = { 
                categoria: 'todos', 
                marca: 'todos', 
                tipo: 'todos',
                formato: 'todos',
                material: 'todos'
            };
            
            filterButtons.forEach(btn => btn.classList.remove('activo'));
            window.history.replaceState({}, document.title, window.location.pathname);
            aplicarFiltros();
        });
    }

    // =====================================================================
    // 8. INICIAR: Forzamos la ejecución apenas carga la página
    // =====================================================================
    aplicarFiltros();
});