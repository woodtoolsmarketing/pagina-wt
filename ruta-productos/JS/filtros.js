document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn:not(#btn-limpiar)');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const productos = document.querySelectorAll('.product-card');

    // =====================================================================
    // 1. PARCHE DE CATEGORÍAS (Sierras, Fresas y Mechas intactos)
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

        // --- FRESAS (Asigna data-tipo automáticamente) ---
        if (enlace.includes("/FR/FRS") || enlace.includes("/FR/FRI") || enlace.includes("/FR/FA")) {
            producto.setAttribute('data-tipo', 'rectas');
        } else if (enlace.includes("/FR/F1M") || enlace.includes("/FR/F2C") || enlace.includes("/FR/F2M")) {
            producto.setAttribute('data-tipo', 'helicoidales');
        } else if (enlace.includes("/DM/")) {
            producto.setAttribute('data-tipo', 'diamante');
        }

        // --- MECHAS Y BROCAS (Sub-rubros numéricos) ---
        if (enlace.includes("/MCH/MPD") || enlace.includes("/MCH/MPI")) {
            producto.setAttribute('data-categoria', '300'); // Pasantes
        } else if (enlace.includes("/MCH/MCD") || enlace.includes("/MCH/MCI")) {
            producto.setAttribute('data-categoria', '301'); // Ciegas
        } else if (enlace.includes("/MCH/BRDD")) {
            producto.setAttribute('data-categoria', '302'); // Defondadora
        } else if (enlace.includes("/MCH/MID") || enlace.includes("/MCH/MIIR")) {
            producto.setAttribute('data-categoria', '303'); // Integrales Widia
        } else if (enlace.includes("/MCH/MBD") || enlace.includes("/MCH/MBI")) {
            producto.setAttribute('data-categoria', '304'); // Bisagra
        } else if (enlace.includes("/MCH/MAM") || enlace.includes("/MCH/PINZAER")) {
            producto.setAttribute('data-categoria', '305'); // Mandriles y Pinzas
        } else if (enlace.includes("/MCH/MCAR")) {
            producto.setAttribute('data-categoria', '306'); // Ciega con Avellanador
        } else if (enlace.includes("/MCH/MBA")) {
            producto.setAttribute('data-categoria', '307'); // Barreno
        } else if (enlace.includes("/MCH/AVD")) {
            producto.setAttribute('data-categoria', '308'); // Avellanadores
        } else if (enlace.includes("/MCH/Router_Franzoi")) {
            producto.setAttribute('data-categoria', '309'); // Router
        }
    });

    // =====================================================================
    // 2. ESTADO DE LOS FILTROS
    // =====================================================================
    let filtrosActivos = { categoria: 'todos', marca: 'todos', tipo: 'todos' };

    // =====================================================================
    // 3. LÓGICA PRINCIPAL DE FILTRADO
    // =====================================================================
    function aplicarFiltros() {
        productos.forEach(producto => {
            const catProd = producto.getAttribute('data-categoria') || 'todos';
            const marcaProd = producto.getAttribute('data-marca') || 'todos';
            const tipoProd = producto.getAttribute('data-tipo') || 'todos';

            const coincideCat = (filtrosActivos.categoria === 'todos' || filtrosActivos.categoria === catProd);
            const coincideMarca = (filtrosActivos.marca === 'todos' || filtrosActivos.marca === marcaProd);
            const coincideTipo = (filtrosActivos.tipo === 'todos' || filtrosActivos.tipo === tipoProd);

            if (coincideCat && coincideMarca && coincideTipo) {
                producto.style.display = 'flex'; 
            } else {
                producto.style.display = 'none';
            }
        });
    }

    // =====================================================================
    // 4. LECTURA DE FILTROS DESDE LA URL
    // =====================================================================
    const urlParams = new URLSearchParams(window.location.search);
    
    urlParams.forEach((valorUrl, tipoFiltroUrl) => {
        if (filtrosActivos[tipoFiltroUrl] !== undefined) {
            filtrosActivos[tipoFiltroUrl] = valorUrl;
            
            const botonCorrespondiente = document.querySelector(`.filter-btn[data-filter-type="${tipoFiltroUrl}"][data-filter-value="${valorUrl}"]`);
            if (botonCorrespondiente) {
                botonCorrespondiente.classList.add('activo');
            }
        }
    });

    // =====================================================================
    // 5. EVENTOS: Clics en los botones del menú lateral
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
                filtrosActivos[tipoFiltro] = valorFiltro;
            }

            aplicarFiltros();
        });
    });

    // =====================================================================
    // 6. BOTÓN: Limpiar Filtros
    // =====================================================================
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function(e) {
            e.preventDefault();
            
            filtrosActivos = { categoria: 'todos', marca: 'todos', tipo: 'todos' };
            filterButtons.forEach(btn => btn.classList.remove('activo'));
            window.history.replaceState({}, document.title, window.location.pathname);
            aplicarFiltros();
        });
    }

    // =====================================================================
    // 7. INICIAR: Forzamos la ejecución apenas carga la página
    // =====================================================================
    aplicarFiltros();
});