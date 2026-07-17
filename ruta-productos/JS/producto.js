/* ==========================================================================
   1. BASE DE CONOCIMIENTO (Sierras, Fresas, Mechas, Diamante y Cuchillas)
   --------------------------------------------------------------------------
   IMPORTANTE SOBRE EL MATCHING (leer antes de editar):
   - Cada producto se agrupa por FAMILIA usando el prefijo del código.
   - Una página individual (ej. FRS0704.html) detecta su familia (FRS) y,
     dentro de las variantes de esa familia, PRESELECCIONA la medida cuyo
     id coincide con el código del archivo.
   - Por eso las claves de familia NO deben solaparse de forma ambigua:
     el loop de detección ordena por longitud DESC y exige que el código
     EMPIECE con la clave (startsWith), no "includes", para evitar falsos
     positivos (ver sección 2).
   ========================================================================== */
const baseDatosProductos = {
    // ---------------------------------------------------------
    // SIERRAS Y TRITURADORES
    // ---------------------------------------------------------
    "LG3D": {
        codigoBase: "LG3D", categoriaImg: "Sierras", carpetaImg: "LG3D",
        titulo: "Sierra para Melamina", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Melamina (Ángulo Positivo - Máquinas Industriales)", "Tipo de diente": "Trapezoidal-Plano / Positivo" },
        variantes: [ { id: "LG3D 0400", nombre: "LG3D 0400 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LG3D 0600", nombre: "LG3D 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" }, { id: "LG3D 0800", nombre: "LG3D 0800 - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" } ]
    },
    "SSK12": {
        codigoBase: "SSK12", categoriaImg: "Sierras", carpetaImg: "SSK12",
        titulo: "Sierra para Melamina", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Melamina (Máquinas Industriales)" },
        variantes: [{ id: "SSK12 001", nombre: "SSK12 001 - Consultar medidas" }]
    },
    "LU3F": {
        codigoBase: "LU3F", categoriaImg: "Sierras", carpetaImg: "LU3F 0200",
        titulo: "Sierra para Melamina", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Aglomerado, MDF, Madera y Melamina", "Tipo de diente": "Ángulo Negativo" },
        variantes: [ { id: "LU3F 0200", nombre: "LU3F 0200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LU3F 0300", nombre: "LU3F 0300 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" }, { id: "LU3F 0400", nombre: "LU3F 0400 - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" } ]
    },
    "LU3E": {
        codigoBase: "LU3E", categoriaImg: "Sierras", carpetaImg: "LU3E 0200",
        titulo: "Sierra para Melamina", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Melamina" },
        variantes: [{ id: "LU3E 0200", nombre: "LU3E 0200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }]
    },
    "FR12L": {
        codigoBase: "FR12L", categoriaImg: "Sierras", carpetaImg: "FR12L",
        titulo: "Sierra para Melamina y Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Aglomerado, MDF, Madera y Melamina" },
        variantes: [{ id: "FR12L001H", nombre: "FR12L001H - D: 185mm | B: 2.4mm | d: 20mm | Z: 60" }]
    },
    "LU3D": {
        codigoBase: "LU3D", categoriaImg: "Sierras", carpetaImg: "LU3D 0200",
        titulo: "Sierra para Melamina", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Melamina" },
        variantes: [ { id: "LU3D 0200", nombre: "LU3D 0200 - D: 220mm | B: 3.2mm | d: 30mm | Z: 64" }, { id: "LU3D 0600", nombre: "LU3D 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" } ]
    },
    "F03FS": {
        codigoBase: "F03FS", categoriaImg: "Sierras", carpetaImg: "F03FS",
        titulo: "Sierra Circular Multiuso", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Aglomerado, MDF, Madera y Melamina" },
        variantes: [{ id: "F03FS09801", nombre: "F03FS09801 - D: 185mm | B: 2.4mm | d: 20mm | Z: 60" }]
    },
    "LSB": {
        codigoBase: "LSB", categoriaImg: "Sierras", carpetaImg: "LSB25003X",
        titulo: "Sierra Circular Extra Silenciosa", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Placas Bilaminadas / Melamina" },
        variantes: [ { id: "LSB25003X", nombre: "LSB25003X - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LSB30003X", nombre: "LSB30003X - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" }, { id: "LSB35003X", nombre: "LSB35003X - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" } ]
    },
    "LG2A": {
        codigoBase: "LG2A", categoriaImg: "Sierras", carpetaImg: "LG2A",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Madera maciza, blanda y dura", "Tipo de diente": "Alterno" },
        variantes: [ { id: "LG2A 1700", nombre: "LG2A 1700 - D: 250mm | B: 3.2mm | d: 30mm | Z: 30" }, { id: "LG2A 2100", nombre: "LG2A 2100 - D: 300mm | B: 3.2mm | d: 30mm | Z: 36" }, { id: "LG2A 2800", nombre: "LG2A 2800 - D: 350mm | B: 3.5mm | d: 30mm | Z: 42" } ]
    },
    "LG2B": {
        codigoBase: "LG2B", categoriaImg: "Sierras", carpetaImg: "LG2B",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Madera" },
        variantes: [ { id: "LG2B 0800", nombre: "LG2B 0800 - D: 250mm | B: 3.2mm | d: 30mm | Z: 20" }, { id: "LG2B 1100", nombre: "LG2B 1100 - D: 300mm | B: 3.2mm | d: 30mm | Z: 24" } ]
    },
    "LU2A": {
        codigoBase: "LU2A", categoriaImg: "Sierras", carpetaImg: "LU2A",
        titulo: "Sierra para Madera Blanda y Dura", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Madera blanda y dura a favor/contra de la veta" },
        variantes: [ { id: "LU2A 1600", nombre: "LU2A 1600 - D: 250mm | B: 3.2mm | d: 30mm | Z: 48" }, { id: "LU2A 2100", nombre: "LU2A 2100 - D: 300mm | B: 3.2mm | d: 30mm | Z: 60" } ]
    },
    "LU2B": {
        codigoBase: "LU2B", categoriaImg: "Sierras", carpetaImg: "LU2B 2100",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Madera" },
        variantes: [ { id: "LU2B 0700", nombre: "LU2B 0700 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LU2B 1200", nombre: "LU2B 1200 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" } ]
    },
    "LU2C": {
        codigoBase: "LU2C", categoriaImg: "Sierras", carpetaImg: "LU2C 1200",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Madera" },
        variantes: [ { id: "LU2C 1200", nombre: "LU2C 1200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LU2C 1500", nombre: "LU2C 1500 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" } ]
    },
    "LU1D": {
        codigoBase: "LU1D", categoriaImg: "Sierras", carpetaImg: "LU1D",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Madera (Multipunto)" },
        variantes: [ { id: "LU1D 0500", nombre: "LU1D 0500 - D: 250mm | B: 3.2mm | d: 30mm | Z: 48" } ]
    },
    "LU1F": {
        codigoBase: "LU1F", categoriaImg: "Sierras", carpetaImg: "LU1F",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Madera" },
        variantes: [ { id: "LU1F 0600", nombre: "LU1F 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 60" } ]
    },
    "FI14M": {
        codigoBase: "FI14M", categoriaImg: "Sierras", carpetaImg: "FI14M AA3",
        titulo: "Sierra de Ranurar", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Ranurado de Madera" },
        variantes: [ { id: "FI14M AA3", nombre: "FI14M AA3 - D: 150mm | B: 1.5mm | d: 30mm | Z: 18" }, { id: "FI14M AE3", nombre: "FI14M AE3 - D: 150mm | B: 2.0mm | d: 30mm | Z: 18" } ]
    },
    "FR09W": {
        codigoBase: "FR09W", categoriaImg: "Sierras", carpetaImg: "FR09W003H",
        titulo: "Sierra Fina para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Madera" },
        variantes: [ { id: "FR09W003H", nombre: "FR09W003H - D: 184mm | B: 1.5mm | d: 20mm | Z: 40" } ]
    },
    "LP40M": {
        codigoBase: "LP40M", categoriaImg: "Sierras", carpetaImg: "LP40M 016P",
        titulo: "Sierra Fina para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Madera" },
        variantes: [ { id: "LP40M 016P", nombre: "LP40M 016P - D: 184mm | B: 2.4mm | d: 20mm | Z: 40" } ]
    },
    "LU4A": {
        codigoBase: "LU4A", categoriaImg: "Sierras", carpetaImg: "LU4A 0100",
        titulo: "Sierra para Aluminio y Plásticos", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Aluminio y Plásticos" },
        variantes: [ { id: "LU4A 0100", nombre: "LU4A 0100 - D: 250mm | B: 2.8mm | d: 30mm | Z: 80" }, { id: "LU4A 0200", nombre: "LU4A 0200 - D: 300mm | B: 2.8mm | d: 30mm | Z: 96" } ]
    },
    "LU5B": {
        codigoBase: "LU5B", categoriaImg: "Sierras", carpetaImg: "LU5B",
        titulo: "Sierra para Aluminio", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Aluminio y Metales No Ferrosos" },
        variantes: [ { id: "LU5B 0200", nombre: "LU5B 0200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LU5B 0600", nombre: "LU5B 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" } ]
    },
    "LU5D": {
        codigoBase: "LU5D", categoriaImg: "Sierras", carpetaImg: "LU5D",
        titulo: "Sierra para Aluminio", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Aluminio" },
        variantes: [ { id: "LU5D 0500", nombre: "LU5D 0500 - D: 250mm | B: 3.2mm | d: 32mm | Z: 80" }, { id: "LU5D 1100", nombre: "LU5D 1100 - D: 300mm | B: 3.2mm | d: 32mm | Z: 96" } ]
    },
    "LU5E": {
        codigoBase: "LU5E", categoriaImg: "Sierras", carpetaImg: "LU5E",
        titulo: "Sierra para Aluminio Gruesa", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Aluminio" },
        variantes: [ { id: "LU5E 0100", nombre: "LU5E 0100 - D: 400mm | B: 3.8mm | d: 30mm | Z: 120" }, { id: "LU5E 0200", nombre: "LU5E 0200 - D: 400mm | B: 3.8mm | d: 32mm | Z: 120" } ]
    },
    "LM01": {
        codigoBase: "LM01", categoriaImg: "Sierras", carpetaImg: "LM01",
        titulo: "Sierra Múltiple", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Uso": "Corte Múltiple" },
        variantes: [{ id: "LM01 3200", nombre: "LM01 3200 - D: 300mm" }]
    },
    "LM02": {
        codigoBase: "LM02", categoriaImg: "Sierras", carpetaImg: "LM02",
        titulo: "Sierra Múltiple", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Uso": "Corte Múltiple" },
        variantes: [{ id: "LM02 3200", nombre: "LM02 3200 - D: 350mm" }]
    },
    "LM04": {
        codigoBase: "LM04", categoriaImg: "Sierras", carpetaImg: "LM04",
        titulo: "Sierra Múltiple", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Uso": "Corte Múltiple" },
        variantes: [{ id: "LM04 3100", nombre: "LM04 3100 - D: 300mm" }]
    },
    "LM05": {
        codigoBase: "LM05", categoriaImg: "Sierras", carpetaImg: "LM05",
        titulo: "Sierra Múltiple", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Uso": "Corte Múltiple" },
        variantes: [{ id: "LM05 3100", nombre: "LM05 3100 - D: 300mm" }]
    },
    "LM06": {
        codigoBase: "LM06", categoriaImg: "Sierras", carpetaImg: "LM06",
        titulo: "Sierra Múltiple con Limpiadores", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Uso": "Corte Múltiple" },
        variantes: [{ id: "LM06 3100", nombre: "LM06 3100 - D: 300mm" }]
    },
    "LM63M": {
        codigoBase: "LM63M", categoriaImg: "Sierras", carpetaImg: "LM63M",
        titulo: "Sierra Múltiple", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Uso": "Corte Múltiple" },
        variantes: [{ id: "LM63M CC3", nombre: "LM63M CC3 - D: 300mm" }]
    },
    "LSA": {
        codigoBase: "LSA", categoriaImg: "Sierras", carpetaImg: "Sierra para seccionadora Franzoi",
        titulo: "Sierra para Seccionadora", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Uso": "Máquinas Seccionadoras" },
        variantes: [{ id: "LSA 30003X", nombre: "LSA 30003X - D: 300mm" }, { id: "LSA 35003X", nombre: "LSA 35003X - D: 350mm" }]
    },
    "LI13MD": {
        codigoBase: "LI13MD", categoriaImg: "Sierras", carpetaImg: "LI13MDAA3",
        titulo: "Incisor Doble Regulable Diente Plano", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Uso": "Máquinas Escuadradoras" },
        variantes: [{ id: "LI13MD BA3", nombre: "LI13MD BA3 - D: 120mm" }, { id: "LI13MD CA3", nombre: "LI13MD CA3 - D: 125mm" }]
    },
    "LI13MS": {
        codigoBase: "LI13MS", categoriaImg: "Sierras", carpetaImg: "LI13MSAA3",
        titulo: "Incisor Simple", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Uso": "Máquinas Escuadradoras" },
        variantes: [{ id: "LI13MS BA3", nombre: "LI13MS BA3 - D: 120mm" }, { id: "LI13MS CA3", nombre: "LI13MS CA3 - D: 125mm" }]
    },
    "LI16M": {
        codigoBase: "LI16M", categoriaImg: "Sierras", carpetaImg: "LI16MAA3",
        titulo: "Incisor Cónico", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Uso": "Escuadradoras y Seccionadoras" },
        variantes: [{ id: "LI16M AA3", nombre: "LI16M AA3 - D: 100mm" }, { id: "LI16M BA3", nombre: "LI16M BA3 - D: 120mm" }]
    },
    "LI25M": {
        codigoBase: "LI25M", categoriaImg: "Sierras", carpetaImg: "LI25M31BA3",
        titulo: "Incisor Doble Regulable Diente Alterno", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Uso": "Máquinas Seccionadoras" },
        variantes: [{ id: "LI25M 28 BA3", nombre: "LI25M 28 BA3 - D: 120mm" }, { id: "LI25M 31 CA3", nombre: "LI25M 31 CA3 - D: 125mm" }]
    },
    "TR15MD": {
        codigoBase: "TR15MD", categoriaImg: "Sierras", carpetaImg: "TR15MS",
        titulo: "Triturador Doble", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro" },
        variantes: [{ id: "TR15MD CA3", nombre: "D: 300mm | B: 30mm" }]
    },
    "TR15MS": {
        codigoBase: "TR15MS", categoriaImg: "Sierras", carpetaImg: "TR15MS",
        titulo: "Triturador Simple", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro" },
        variantes: [{ id: "TR15MS CA3", nombre: "D: 300mm | B: 30mm" }]
    },
    // Familia LT (Sierras Trituradoras): LT14 / LT16 / LT18 en giro
    // derecho (MD) e izquierdo (MS). Antes eran 3 familias separadas;
    // ahora una sola con sus 6 modelos como variantes. Comparten la
    // carpeta de fotos "TR15MS".
    "LT": {
        codigoBase: "LT", categoriaImg: "Sierras", carpetaImg: "TR15MS",
        titulo: "Sierra Trituradora", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Triturador" },
        variantes: [
            { id: "LT14MD", nombre: "LT14MD - Trituradora LT14 Giro Derecho (MD)" },
            { id: "LT14MS", nombre: "LT14MS - Trituradora LT14 Giro Izquierdo (MS)" },
            { id: "LT16MD", nombre: "LT16MD - Trituradora LT16 Giro Derecho (MD)" },
            { id: "LT16MS", nombre: "LT16MS - Trituradora LT16 Giro Izquierdo (MS)" },
            { id: "LT18MD", nombre: "LT18MD - Trituradora LT18 Giro Derecho (MD)" },
            { id: "LT18MS", nombre: "LT18MS - Trituradora LT18 Giro Izquierdo (MS)" }
        ]
    },
    "SCC_Freud": {
        codigoBase: "SCC_Freud", categoriaImg: "Sierras", carpetaImg: "Incisor",
        titulo: "Incisor SCC Freud", marca: "Freud",
        caracteristicasBasicas: { "Material": "Metal duro", "Uso": "Incisor" },
        variantes: [{ id: "1", nombre: "Consultar Medidas" }]
    },
    "SCC_Franzoi": {
        codigoBase: "SCC_Franzoi", categoriaImg: "Sierras", carpetaImg: "Incisor Santi",
        titulo: "Incisor SCC Franzoi", marca: "Franzoi",
        caracteristicasBasicas: { "Material": "Metal duro", "Uso": "Incisor" },
        variantes: [{ id: "1", nombre: "Consultar Medidas" }]
    },
    "SC_Franzoi": {
        codigoBase: "SC_Franzoi", categoriaImg: "Sierras", carpetaImg: "Sierra con racadores Franzoi",
        titulo: "Sierras para múltiple", marca: "Franzoi",
        caracteristicasBasicas: { "Material": "Metal duro", "Uso": "Madera (Múltiples)" },
        variantes: [
            { id: "SC2504144F", nombre: "SC2504144F - D: 250mm | B: 4.0mm | Z: 14+4" },
            { id: "SC25042144F", nombre: "SC25042144F - D: 250mm | B: 4.2mm | Z: 14+4" },
            { id: "SC3004164F", nombre: "SC3004164F - D: 300mm | B: 4.0mm | d: 30mm | Z: 16+4" },
            { id: "SC30042164F", nombre: "SC30042164F - D: 300mm | B: 4.2mm | Z: 16+4" },
            { id: "SC35045184F", nombre: "SC35045184F - D: 350mm | B: 4.5mm | Z: 18+4" },
            { id: "SC35045244F", nombre: "SC35045244F - D: 350mm | B: 4.5mm | Z: 24+4" },
            { id: "SC60055244F", nombre: "SC60055244F - D: 600mm | B: 5.5mm | d: 30mm | Z: 24+4" }
        ]
    },

    // ---------------------------------------------------------
    // FRESAS  -  AGRUPADAS POR FAMILIA (prefijo del código)
    // ---------------------------------------------------------

    // --- Sub-rubro 016: Fresas Rectas Simples ---
    "FRS": {
        codigoBase: "FRS", categoriaImg: "Fresas", carpetaImg: "FRS0606",
        titulo: "Fresas Rectas HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Ranurar, cepillar o realizar rebajes", "Material": "Metal duro" },
        variantes: [
            { id: "FRS0054", nombre: "FRS0054 - RECTA #5mm Z:4" },
            { id: "FRS0056", nombre: "FRS0056 - RECTA #5mm Z:6" },
            { id: "FRS0064", nombre: "FRS0064 - RECTA #6mm Z:4" },
            { id: "FRS0066", nombre: "FRS0066 - RECTA #6mm Z:6" },
            { id: "FRS0074", nombre: "FRS0074 - RECTA #7mm Z:4" },
            { id: "FRS0076", nombre: "FRS0076 - RECTA #7mm Z:6" },
            { id: "FRS0084", nombre: "FRS0084 - RECTA #8mm Z:4" },
            { id: "FRS0086", nombre: "FRS0086 - RECTA #8mm Z:6" },
            { id: "FRS0094", nombre: "FRS0094 - RECTA #9mm Z:4" },
            { id: "FRS0096", nombre: "FRS0096 - RECTA #9mm Z:6" },
            { id: "FRS0104", nombre: "FRS0104 - RECTA #10mm Z:4" },
            { id: "FRS0106", nombre: "FRS0106 - RECTA #10mm Z:6" },
            { id: "FRS0114", nombre: "FRS0114 - RECTA #11mm Z:4" },
            { id: "FRS0116", nombre: "FRS0116 - RECTA #11mm Z:6" },
            { id: "FRS0124", nombre: "FRS0124 - RECTA #12mm Z:4" },
            { id: "FRS0126", nombre: "FRS0126 - RECTA #12mm Z:6" },
            { id: "FRS0134", nombre: "FRS0134 - RECTA #13mm Z:4" },
            { id: "FRS0136", nombre: "FRS0136 - RECTA #13mm Z:6" },
            { id: "FRS0144", nombre: "FRS0144 - RECTA #14mm Z:4" },
            { id: "FRS0146", nombre: "FRS0146 - RECTA #14mm Z:6" },
            { id: "FRS0154", nombre: "FRS0154 - RECTA #15mm Z:4" },
            { id: "FRS0156", nombre: "FRS0156 - RECTA #15mm Z:6" },
            { id: "FRS0164", nombre: "FRS0164 - RECTA #16mm Z:4" },
            { id: "FRS0166", nombre: "FRS0166 - RECTA #16mm Z:6" },
            { id: "FRS0174", nombre: "FRS0174 - RECTA #17mm Z:4" },
            { id: "FRS0176", nombre: "FRS0176 - RECTA #17mm Z:6" },
            { id: "FRS0184", nombre: "FRS0184 - RECTA #18mm Z:4" },
            { id: "FRS0186", nombre: "FRS0186 - RECTA #18mm Z:6" },
            { id: "FRS0194", nombre: "FRS0194 - RECTA #19mm Z:4" },
            { id: "FRS0196", nombre: "FRS0196 - RECTA #19mm Z:6" },
            { id: "FRS0204", nombre: "FRS0204 - RECTA #20mm Z:4 Axial" },
            { id: "FRS0206", nombre: "FRS0206 - RECTA #20mm Z:6 Axial" },
            { id: "FRS0254", nombre: "FRS0254 - RECTA #25mm Z:4 Axial" },
            { id: "FRS0256", nombre: "FRS0256 - RECTA #25mm Z:6 Axial" },
            { id: "FRS0304", nombre: "FRS0304 - RECTA #30mm Z:4 Axial" },
            { id: "FRS0306", nombre: "FRS0306 - RECTA #30mm Z:6 Axial" },
            { id: "FRS0354", nombre: "FRS0354 - RECTA #35mm Z:4 Axial" },
            { id: "FRS0356", nombre: "FRS0356 - RECTA #35mm Z:6 Axial" },
            { id: "FRS0404", nombre: "FRS0404 - RECTA #40mm Z:4 Axial" },
            { id: "FRS0406", nombre: "FRS0406 - RECTA #40mm Z:6 Axial" },
            { id: "FRS0454", nombre: "FRS0454 - RECTA #45mm Z:4 Axial" },
            { id: "FRS0456", nombre: "FRS0456 - RECTA #45mm Z:6 Axial" },
            { id: "FRS0504", nombre: "FRS0504 - RECTA #50mm Z:4 Axial" },
            { id: "FRS0506", nombre: "FRS0506 - RECTA #50mm Z:6 Axial" },
            { id: "FRS0604", nombre: "FRS0604 - RECTA #60mm Z:4 Axial" },
            { id: "FRS0606", nombre: "FRS0606 - RECTA #60mm Z:6 Axial" },
            { id: "FRS0704", nombre: "FRS0704 - RECTA #70mm Z:4 Axial" },
            { id: "FRS0706", nombre: "FRS0706 - RECTA #70mm Z:6 Axial" },
            { id: "FRS0804", nombre: "FRS0804 - RECTA #80mm Z:4 Axial" },
            { id: "FRS0806", nombre: "FRS0806 - RECTA #80mm Z:6 Axial" },
            { id: "FRS0904", nombre: "FRS0904 - RECTA #90mm Z:4 Axial" },
            { id: "FRS0906", nombre: "FRS0906 - RECTA #90mm Z:6 Axial" },
            { id: "FRS1004", nombre: "FRS1004 - RECTA 100mm Z:4 Axial" },
            { id: "FRS1006", nombre: "FRS1006 - RECTA 100mm Z:6 Axial" }
        ]
    },

    // --- Sub-rubro 017: Fresas Rectas con Incisores ---
    "FRI": {
        codigoBase: "FRI", categoriaImg: "Fresas", carpetaImg: "FRI01566",
        titulo: "Fresas Rectas con Incisores HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Ranurar sin astillar", "Material": "Metal duro" },
        variantes: [
            { id: "FRI01542", nombre: "FRI01542 - C/INCISOR #15mm Z:4+2" },
            { id: "FRI01544", nombre: "FRI01544 - C/INCISOR #15mm Z:4+4" },
            { id: "FRI01563", nombre: "FRI01563 - C/INCISOR #15mm Z:6+3" },
            { id: "FRI01566", nombre: "FRI01566 - C/INCISOR #15mm Z:6+6" },
            { id: "FRI02042", nombre: "FRI02042 - C/INCISOR #20mm Z:4+2" },
            { id: "FRI02044", nombre: "FRI02044 - C/INCISOR #20mm Z:4+4" },
            { id: "FRI02063", nombre: "FRI02063 - C/INCISOR #20mm Z:6+3" },
            { id: "FRI02066", nombre: "FRI02066 - C/INCISOR #20mm Z:6+6" },
            { id: "FRI02542", nombre: "FRI02542 - C/INCISOR #25mm Z:4+2" },
            { id: "FRI02544", nombre: "FRI02544 - C/INCISOR #25mm Z:4+4" },
            { id: "FRI02563", nombre: "FRI02563 - C/INCISOR #25mm Z:6+3" },
            { id: "FRI02566", nombre: "FRI02566 - C/INCISOR #25mm Z:6+6" },
            { id: "FRI03042", nombre: "FRI03042 - C/INCISOR #30mm Z:4+2" },
            { id: "FRI03044", nombre: "FRI03044 - C/INCISOR #30mm Z:4+4" },
            { id: "FRI03063", nombre: "FRI03063 - C/INCISOR #30mm Z:6+3" },
            { id: "FRI03066", nombre: "FRI03066 - C/INCISOR #30mm Z:6+6" },
            { id: "FRI03542", nombre: "FRI03542 - C/INCISOR #35mm Z:4+2" },
            { id: "FRI03544", nombre: "FRI03544 - C/INCISOR #35mm Z:4+4" },
            { id: "FRI03563", nombre: "FRI03563 - C/INCISOR #35mm Z:6+3" },
            { id: "FRI03566", nombre: "FRI03566 - C/INCISOR #35mm Z:6+6" },
            { id: "FRI04042", nombre: "FRI04042 - C/INCISOR #40mm Z:4+2" },
            { id: "FRI04044", nombre: "FRI04044 - C/INCISOR #40mm Z:4+4" },
            { id: "FRI04063", nombre: "FRI04063 - C/INCISOR #40mm Z:6+3" },
            { id: "FRI04066", nombre: "FRI04066 - C/INCISOR #40mm Z:6+6" },
            { id: "FRI04542", nombre: "FRI04542 - C/INCISOR #45mm Z:4+2" },
            { id: "FRI04544", nombre: "FRI04544 - C/INCISOR #45mm Z:4+4" },
            { id: "FRI04563", nombre: "FRI04563 - C/INCISOR #45mm Z:6+3" },
            { id: "FRI04566", nombre: "FRI04566 - C/INCISOR #45mm Z:6+6" },
            { id: "FRI05042", nombre: "FRI05042 - C/INCISOR #50mm Z:4+2" },
            { id: "FRI05044", nombre: "FRI05044 - C/INCISOR #50mm Z:4+4" },
            { id: "FRI05063", nombre: "FRI05063 - C/INCISOR #50mm Z:6+3" },
            { id: "FRI05066", nombre: "FRI05066 - C/INCISOR #50mm Z:6+6" },
            { id: "FRI06042", nombre: "FRI06042 - C/INCISOR #60mm Z:4+2" },
            { id: "FRI06044", nombre: "FRI06044 - C/INCISOR #60mm Z:4+4" },
            { id: "FRI06063", nombre: "FRI06063 - C/INCISOR #60mm Z:6+3" },
            { id: "FRI06066", nombre: "FRI06066 - C/INCISOR #60mm Z:6+6" },
            { id: "FRI07042", nombre: "FRI07042 - C/INCISOR #70mm Z:4+2" },
            { id: "FRI07063", nombre: "FRI07063 - C/INCISOR #70mm Z:6+3" },
            { id: "FRI08042", nombre: "FRI08042 - C/INCISOR #80mm Z:4+2" },
            { id: "FRI08063", nombre: "FRI08063 - C/INCISOR #80mm Z:6+3" },
            { id: "FRI09042", nombre: "FRI09042 - C/INCISOR #90mm Z:4+2" },
            { id: "FRI09044", nombre: "FRI09044 - C/INCISOR #90mm Z:4+4" },
            { id: "FRI09063", nombre: "FRI09063 - C/INCISOR #90mm Z:6+3" },
            { id: "FRI09066", nombre: "FRI09066 - C/INCISOR #90mm Z:6+6" },
            { id: "FRI10042", nombre: "FRI10042 - C/INCISOR 100mm Z:4+2" },
            { id: "FRI10044", nombre: "FRI10044 - C/INCISOR 100mm Z:4+4" },
            { id: "FRI10063", nombre: "FRI10063 - C/INCISOR 100mm Z:6+3" },
            { id: "FRI10066", nombre: "FRI10066 - C/INCISOR 100mm Z:6+6" }
        ]
    },

    // --- Sub-rubro 011: Fresas 1/2 Círculo (Molduras) ---
    "F2C": {
        codigoBase: "F2C", categoriaImg: "Fresas", carpetaImg: "F2C014",
        titulo: "Fresas 1/2 círculo cóncavo y convexo HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "1/2 círculo cóncavo o convexo", "Material": "Metal duro" },
        variantes: [
            { id: "F2C014", nombre: "F2C014 - 1/2 CIRCULO DE 1/2 Z:4" },
            { id: "F2C016", nombre: "F2C016 - 1/2 CIRCULO DE 1/2 Z:6" },
            { id: "F2C054", nombre: "F2C054 - 1/2 CIRCULO DE 5/8 Z:4" },
            { id: "F2C056", nombre: "F2C056 - 1/2 CIRCULO DE 5/8 Z:6" },
            { id: "F2C104", nombre: "F2C104 - 1/2 CIRCULO DE 3/4 Z:4" },
            { id: "F2C106", nombre: "F2C106 - 1/2 CIRCULO DE 3/4 Z:6" },
            { id: "F2C154", nombre: "F2C154 - 1/2 CIRCULO DE 1 Z:4" },
            { id: "F2C156", nombre: "F2C156 - 1/2 CIRCULO DE 1 Z:6" },
            { id: "F2C204", nombre: "F2C204 - 1/2 CIRCULO DE 1 1/2 Z:4" },
            { id: "F2C206", nombre: "F2C206 - 1/2 CIRCULO DE 1 1/2 Z:6" },
            { id: "F2C254", nombre: "F2C254 - 1/2 CIRCULO DE 2 Z:4" },
            { id: "F2C256", nombre: "F2C256 - 1/2 CIRCULO DE 2 Z:6" }
        ]
    },

    // --- Sub-rubro 011: Fresas 1/4 Círculo ---
    "F04C": {
        codigoBase: "F04C", categoriaImg: "Fresas", carpetaImg: "F04C014",
        titulo: "Fresas 1/4 círculo cóncavo y convexo HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "1/4 círculo cóncavo o convexo", "Material": "Metal duro" },
        variantes: [
            { id: "F04C014", nombre: "F04C014 - 1/4 CIRCULO 1/2 A 3/4 Z:4" },
            { id: "F04C016", nombre: "F04C016 - 1/4 CIRCULO 1/2 A 3/4 Z:6" },
            { id: "F04C054", nombre: "F04C054 - 1/4 CIRCULO 3/4 A 1 1/4 Z:4" },
            { id: "F04C056", nombre: "F04C056 - 1/4 CIRCULO 3/4 A 1 1/4 Z:6" }
        ]
    },

    // --- Rinconera Simple HM (catálogo pág. 5) ---
    "FR": {
        codigoBase: "FR", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Rinconera Simple HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Rinconera según modelos 1 ó 2", "Material": "Metal duro" },
        variantes: [
            { id: "FR104", nombre: "FR104 - RINCONERA DE 3/4 Z:4" },
            { id: "FR106", nombre: "FR106 - RINCONERA DE 3/4 Z:6" },
            { id: "FR154", nombre: "FR154 - RINCONERA 1 1/2 Z:4" },
            { id: "FR156", nombre: "FR156 - RINCONERA 1 1/2 Z:6" }
        ]
    },

    // --- Fresas en ángulo HM (catálogo pág. 4) ---
    "FA": {
        codigoBase: "FA", categoriaImg: "Fresas", carpetaImg: "FA104",
        titulo: "Fresas en ángulo HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Efectuar ángulos (α)", "Material": "Metal duro" },
        variantes: [
            { id: "FA104", nombre: "FA104 - ANGULO 25°A 45° 10mm Z:4" },
            { id: "FA106", nombre: "FA106 - ANGULO 25°A 45° 10mm Z:6" },
            { id: "FA154", nombre: "FA154 - ANGULO 25°A 45° 15mm Z:4" },
            { id: "FA156", nombre: "FA156 - ANGULO 25°A 45° 15mm Z:6" },
            { id: "FA204", nombre: "FA204 - ANGULO 25°A 45° 20mm Z:4" },
            { id: "FA206", nombre: "FA206 - ANGULO 25°A 45° 20mm Z:6" },
            { id: "FA254", nombre: "FA254 - ANGULO 25°A 45° 25mm Z:4" },
            { id: "FA256", nombre: "FA256 - ANGULO 25°A 45° 25mm Z:6" },
            { id: "FA304", nombre: "FA304 - ANGULO 25°A 45° 30mm Z:4" },
            { id: "FA306", nombre: "FA306 - ANGULO 25°A 45° 30mm Z:6" },
            { id: "FA354", nombre: "FA354 - ANGULO 25°A 45° 35mm Z:4" },
            { id: "FA356", nombre: "FA356 - ANGULO 25°A 45° 35mm Z:6" },
            { id: "FA404", nombre: "FA404 - ANGULO 25°A 45° 40mm Z:4" },
            { id: "FA406", nombre: "FA406 - ANGULO 25°A 45° 40mm Z:6" },
            { id: "FA454", nombre: "FA454 - ANGULO 25°A 45° 45mm Z:4" },
            { id: "FA456", nombre: "FA456 - ANGULO 25°A 45° 45mm Z:6" },
            { id: "FA504", nombre: "FA504 - ANGULO 25°A 45° 50mm Z:4" },
            { id: "FA506", nombre: "FA506 - ANGULO 25°A 45° 50mm Z:6" }
        ]
    },

    // --- Sub-rubro 013: Fresas Moldura Perf. Combinados (FMES) ---
    "FMES": {
        codigoBase: "FMES", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Fresa Moldura Perfiles Combinados", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Moldura Prof. 10mm", "Material": "Metal duro" },
        variantes: [
            { id: "FMES104", nombre: "FMES104 - MOLDURA 10mm Z:4" },
            { id: "FMES106", nombre: "FMES106 - MOLDURA 10mm Z:6" },
            { id: "FMES154", nombre: "FMES154 - MOLDURA 15mm Z:4" },
            { id: "FMES156", nombre: "FMES156 - MOLDURA 15mm Z:6" },
            { id: "FMES204", nombre: "FMES204 - MOLDURA 20mm Z:4" },
            { id: "FMES206", nombre: "FMES206 - MOLDURA 20mm Z:6" },
            { id: "FMES254", nombre: "FMES254 - MOLDURA 25mm Z:4" },
            { id: "FMES256", nombre: "FMES256 - MOLDURA 25mm Z:6" },
            { id: "FMES304", nombre: "FMES304 - MOLDURA 30mm Z:4" },
            { id: "FMES306", nombre: "FMES306 - MOLDURA 30mm Z:6" },
            { id: "FMES354", nombre: "FMES354 - MOLDURA 35mm Z:4" },
            { id: "FMES356", nombre: "FMES356 - MOLDURA 35mm Z:6" },
            { id: "FMES404", nombre: "FMES404 - MOLDURA 40mm Z:4" },
            { id: "FMES406", nombre: "FMES406 - MOLDURA 40mm Z:6" },
            { id: "FMES454", nombre: "FMES454 - MOLDURA 45mm Z:4" },
            { id: "FMES456", nombre: "FMES456 - MOLDURA 45mm Z:6" },
            { id: "FMES504", nombre: "FMES504 - MOLDURA 50mm Z:4" },
            { id: "FMES506", nombre: "FMES506 - MOLDURA 50mm Z:6" },
            { id: "FMES554", nombre: "FMES554 - MOLDURA 55mm Z:4" },
            { id: "FMES556", nombre: "FMES556 - MOLDURA 55mm Z:6" },
            { id: "FMES604", nombre: "FMES604 - MOLDURA 60mm Z:4" },
            { id: "FMES606", nombre: "FMES606 - MOLDURA 60mm Z:6" },
            { id: "FMES654", nombre: "FMES654 - MOLDURA 65mm Z:4" },
            { id: "FMES656", nombre: "FMES656 - MOLDURA 65mm Z:6" },
            { id: "FMES704", nombre: "FMES704 - MOLDURA 70mm Z:4" },
            { id: "FMES706", nombre: "FMES706 - MOLDURA 70mm Z:6" },
            { id: "FMES754", nombre: "FMES754 - MOLDURA 75mm Z:4" },
            { id: "FMES756", nombre: "FMES756 - MOLDURA 75mm Z:6" },
            { id: "FMES804", nombre: "FMES804 - MOLDURA 80mm Z:4" },
            { id: "FMES806", nombre: "FMES806 - MOLDURA 80mm Z:6" },
            { id: "FMES854", nombre: "FMES854 - MOLDURA 85mm Z:4" },
            { id: "FMES856", nombre: "FMES856 - MOLDURA 85mm Z:6" },
            { id: "FMES904", nombre: "FMES904 - MOLDURA 90mm Z:4" },
            { id: "FMES906", nombre: "FMES906 - MOLDURA 90mm Z:6" },
            { id: "FMES954", nombre: "FMES954 - MOLDURA 95mm Z:4" },
            { id: "FMES956", nombre: "FMES956 - MOLDURA 95mm Z:6" }
        ]
    },

    // --- Sub-rubro 015: Fresas Regulables (suplementos) ---
    "FRG": {
        codigoBase: "FRG", categoriaImg: "Fresas", carpetaImg: "FRG0510",
        titulo: "Fresas para Ranurar Regulables HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Ranuras, rebajes y espigas", "Material": "Metal duro" },
        variantes: [
            { id: "FRG010", nombre: "FRG010 - SUPL. P/REGULABLE #10mm Z=4" },
            { id: "FRG020", nombre: "FRG020 - SUPLEMENTO P/REG. #20 Z=4" },
            { id: "FRG030", nombre: "FRG030 - SUPLEMENTO P/REG. #30 Z=4" },
            { id: "FRG0510", nombre: "FRG0510 - JGO. REGULABLE 5 A 10mm Z=4+4" },
            { id: "FRG1039", nombre: "FRG1039 - REGULABLE 10 A 39mm Z=8+4" }
        ]
    },

    // --- Sub-rubro 011: Fresas Palos de Escoba (FP) ---
    "FP": {
        codigoBase: "FP", categoriaImg: "Fresas", carpetaImg: "FP2226",
        titulo: "Fresa Palos de Escoba / Multimoldura", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Palos de escoba / Perfilado", "Material": "Metal duro" },
        variantes: [
            { id: "FP2226", nombre: "FP2226 - 2 PALOS ESCOBA D=22.5 #60 Z=6" },
            { id: "FP2286", nombre: "FP2286 - 2 PALOS ESCOBA D=28 #75 Z=6" },
            { id: "FP3226", nombre: "FP3226 - 3 PALOS ESCOBA D=22.5 #88 Z=6" },
            { id: "FP3286", nombre: "FP3286 - 3 PALOS ESCOBA D=28 #100 Z=6" },
            { id: "FP4226", nombre: "FP4226 - 4 PALOS ESCOBA D=22.5 #115 Z=6" }
        ]
    },

    // --- Sub-rubro 009: Despiece de Machimbre (F1M) ---
    "F1M": {
        codigoBase: "F1M", categoriaImg: "Fresas", carpetaImg: "F1M0",
        titulo: "Fresa Despiece de Machimbre (1/2 a 3/4)", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Despiece de Machimbre", "Material": "Metal duro" },
        variantes: [
            { id: "F1M01", nombre: "F1M01 - FR. MACHO 1/2 A 3/4 Z=4" },
            { id: "F1M03", nombre: "F1M03 - RECTA PARA HEMBRA 1/2 A 3/4 Z=4" },
            { id: "F1M04", nombre: "F1M04 - JGO.S.C. REG. HEMBRA 1/2 A 3/4 Z=16" },
            { id: "F1M08", nombre: "F1M08 - CHANFLE 23° 1/2 A 3/4 Z=4" },
            { id: "F1M09", nombre: "F1M09 - CHANFLE 45° 1/2 A 3/4 Z=4" },
            { id: "F1M10", nombre: "F1M10 - JGO. REG. HEMBRA MACH. PISO D=180/200 Z=24+6+6" },
            { id: "F1M12", nombre: "F1M12 - BAJOFONDO C/S BISEL 1/2 A 3/4 Z=4 L=10mm" },
            { id: "F1M13", nombre: "F1M13 - BAJOFONDO C/S BISEL 1/2 A 3/4 Z=4 L=15mm" }
        ]
    },

    // --- Sub-rubro 009: Despiece de Machimbre (F2M, 3/4 a 1 1/4) ---
    "F2M": {
        codigoBase: "F2M", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Fresa Despiece de Machimbre (3/4 a 1 1/4)", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Despiece de Machimbre", "Material": "Metal duro" },
        variantes: [
            { id: "F2M01", nombre: "F2M01 - FR. MACHO 3/4 A 1 1/4 Z=4" },
            { id: "F2M03", nombre: "F2M03 - FR. HEMBRA 3/4 A 1 1/4 Z=4" },
            { id: "F2M09", nombre: "F2M09 - CHANFLE 23° 3/4 A 1 1/4 Z=4" },
            { id: "F2M10", nombre: "F2M10 - CHANFLE 45° 3/4 A 1 1/4 Z=4" }
        ]
    },

    // --- Fresa para Finger HM (catálogo pág. 11) ---
    "JFE254": {
        codigoBase: "JFE254", categoriaImg: "Fresas", carpetaImg: "JFE254",
        titulo: "Fresa para Finger HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Finger en maderas de hasta 22 mm (tupí / moldureras)", "Material": "Metal duro" },
        variantes: [
            { id: "JFE254", nombre: "JFE254 - D=150 B=22 d=40 Z=4" }
        ]
    },
    "JFE5022": {
        codigoBase: "JFE5022", categoriaImg: "Fresas", carpetaImg: "JFE5022",
        titulo: "Fresa para Finger HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Finger en maderas de hasta 45 mm (tupí / moldureras)", "Material": "Metal duro" },
        variantes: [
            { id: "JFE5022", nombre: "JFE5022 - D=150 B=45 d=40 Z=2+2" }
        ]
    },
    // --- Fresa para Ensamble Cónico HM (catálogo pág. 11) ---
    "JFE81": {
        codigoBase: "JFE81", categoriaImg: "Fresas", carpetaImg: "JFE81",
        titulo: "Fresa para Ensamble Cónico HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Unir madera. Profundidades: 10-11, 8-9 y 12 mm", "Material": "Metal duro" },
        variantes: [
            { id: "JFE8122", nombre: "JFE8122 - D=150 B=10-45 d=40 Z=4x4" },
            { id: "JFE8121", nombre: "JFE8121 - D=160 B=3,8 d=40 Z=1x4" }
        ]
    },
    // --- Fresa para Encastre HM (catálogo pág. 12) ---
    "JFE8Z": {
        codigoBase: "JFE8Z", categoriaImg: "Fresas", carpetaImg: "JFE8Z124",
        titulo: "Fresa para Encastre HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Ensamble a 90° y 180° (unión de marcos en puertas y ventanas)", "Material": "Metal duro" },
        variantes: [
            { id: "JFE8Z122", nombre: "JFE8Z122 - D=180 B=19-40 d=40 Z=3+3 (A)" },
            { id: "JFE8Z124", nombre: "JFE8Z124 - D=180 B=19-40 d=40 Z=3+3 (B)" }
        ]
    },
    "JFME68": {
        codigoBase: "JFME68", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Fresa para Encastre HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Ensamble a 90° y 180° (unión de marcos en puertas y ventanas)", "Material": "Metal duro" },
        variantes: [
            { id: "JFME68", nombre: "JFME68 - D=245 B=22-68 d=40 Z=3+3 (B)" }
        ]
    },
    // --- Otros juegos de ensamble (no listados individualmente en pág. 5-14) ---
    "JFE": {
        codigoBase: "JFE", categoriaImg: "Fresas", carpetaImg: "JFE",
        titulo: "Juego de Fresas de Ensamble", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Ensamble / Encastre", "Material": "Metal duro" },
        variantes: [
            { id: "JFE8Z34", nombre: "JFE8Z34 - ENSAMBLE 90° y 180° 'A' D=150 12 a 22" }
        ]
    },

    // --- Sub-rubro 012: Moldura Puertas y Ventanas (JFMPV) ---
    "JFMPV": {
        codigoBase: "JFMPV", categoriaImg: "Fresas", carpetaImg: "JFMPV14",
        titulo: "Moldura de Puertas y Ventanas HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Molduras de puertas y ventanas con ranura para tableros o vidrios", "Material": "Metal duro" },
        variantes: [
            { id: "JFMPV14", nombre: "JFMPV14 - D=150 B=1 1/2 a 2\" d=40 Z=2x4 y 1x6" }
        ]
    },

    // --- Sub-rubro 012: Puerta Mueble de Cocina (JFPMS) ---
    "JFPMS": {
        codigoBase: "JFPMS", categoriaImg: "Fresas", carpetaImg: "JFPMS10",
        titulo: "Puerta de Muebles HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Moldura, contramoldura y replan de puertas de muebles de cocina y vanitorís", "Material": "Metal duro" },
        variantes: [
            { id: "JFPMS10", nombre: "JFPMS10 - D=160 B=1\" d=40 Z=1x4 y 1x6" }
        ]
    },

    // --- Deck Standard HM (catálogo pág. 8) ---
    "JFDE": {
        codigoBase: "JFDE", categoriaImg: "Fresas", carpetaImg: "JFDE4",
        titulo: "Deck Standard HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Deck tradicional en machimbradora (regulable según espesor)", "Material": "Metal duro" },
        variantes: [
            { id: "JFDE4", nombre: "JFDE4 - D=150 B=3/4 a 1\" d=40 Z=2x4" },
            { id: "JFDE6", nombre: "JFDE6 - D=160 B=3/4 a 1\" d=40 Z=2x6" }
        ]
    },
    // --- Deck para Grampa HM (catálogo pág. 8) ---
    "JFDSG": {
        codigoBase: "JFDSG", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Deck para Grampa HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Deck para montaje con grampa plástica (machimbradora)", "Material": "Metal duro" },
        variantes: [
            { id: "JFDSG14", nombre: "JFDSG14 - D=160 B=1\" d=40 Z=4x4 y 2x8" },
            { id: "JFDSG16", nombre: "JFDSG16 - D=160 B=1\" d=40 Z=4x6 y 2x12" }
        ]
    },
    // --- Deck regulable (no listado individualmente en pág. 5-14) ---
    "JFDR": {
        codigoBase: "JFDR", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Juego de Fresas Deck Regulable", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Deck regulable", "Material": "Metal duro" },
        variantes: [
            { id: "JFDR4", nombre: "JFDR4 - 2 FR. DECK REGULABLE #10 A 25mm D=150 Z=4" }
        ]
    },

    // --- Sub-rubro 011: Limitador Mueble (LIMMUE) ---
    "LIMMUE": {
        codigoBase: "LIMMUE", categoriaImg: "Fresas", carpetaImg: "LIMMUE",
        titulo: "Disco Limitador Mueble Cocina", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Limitador", "Material": "Metal duro" },
        variantes: [
            { id: "LIMMUE", nombre: "LIMMUE - DISCO LIMITADOR MUEBLE COCINA Yext=136" }
        ]
    },

    // --- Fresa para Radios Múltiples HM (catálogo pág. 12) ---
    "FMR": {
        codigoBase: "FMR", categoriaImg: "Fresas", carpetaImg: "FMR04",
        titulo: "Fresa para Radios Múltiples HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Realizar Multi-Radios de 4 a 10 mm", "Material": "Metal duro" },
        variantes: [
            { id: "FMR04", nombre: "FMR04 - D=140 B=35 d=40 Z=4" }
        ]
    },

    // --- Sub-rubro 013: Replan Tablero (FRP) ---
    "FRP": {
        codigoBase: "FRP", categoriaImg: "Fresas", carpetaImg: "FRP5533",
        titulo: "Replán de Tablero HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Replán de Tablero (fresa sobre madera / madera sobre fresa)", "Material": "Metal duro" },
        variantes: [
            { id: "FRP5533", nombre: "FRP5533 - D=200 B=55 d=40 Z=3+3 b=20" }
        ]
    },

    // --- Sub-rubro 018: Cabezales Cepilladores (CB) ---
    "CB": {
        codigoBase: "CB", categoriaImg: "Fresas", carpetaImg: "CB0750660",
        titulo: "Cabezales Cepilladores HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Cepillar o espigar (bajo ruido)", "Material": "Metal duro" },
        variantes: [
            { id: "CB0500640", nombre: "CB0500640 - Y=125 #50(6) Z=36 3 ENTRADAS" },
            { id: "CB0750660", nombre: "CB0750660 - Y=125 #75(6) Z=54 3 ENTRADAS" },
            { id: "CB1000680", nombre: "CB1000680 - Y=126 #100(6) Z=76 3 ENTRADAS" },
            { id: "CB13006100", nombre: "CB13006100 - Y=125 #130(6) Z=96" },
            { id: "CB1601272", nombre: "CB1601272 - Y=125 #160(12) Z=68" },
            { id: "CB1801280", nombre: "CB1801280 - Y=125 #180(12) Z=76 3 ENTRADAS" },
            { id: "CB2001286", nombre: "CB2001286 - Y=125 #200(12) Z=86" },
            { id: "CB22012100", nombre: "CB22012100 - #220(12) Z=96" }
        ]
    },

    // --- Zócalo Simple y Contramarco HM (catálogo pág. 5) ---
    "FZS": {
        codigoBase: "FZS", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Zócalo Simple y Contramarco HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Efectuar zócalos y contramarcos", "Material": "Metal duro" },
        variantes: [
            { id: "FZS128", nombre: "FZS128 - D=150 B=1/2-3/4\" d=40 Z=4 (A y B)" },
            { id: "FZS129", nombre: "FZS129 - D=150 B=1/2-3/4\" d=40 Z=4 (A y A)" }
        ]
    },
    // --- Rinconera Doble HM (catálogo pág. 6) ---
    "JFRD": {
        codigoBase: "JFRD", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Rinconera Doble HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Efectuar Rinconera Doble (modelos 1 ó 2)", "Material": "Metal duro" },
        variantes: [
            { id: "JFRD", nombre: "JFRD - D=160 B=1\" d=40 Z=2x4 y 1x10" }
        ]
    },
    // --- Frente Inglés HM (catálogo pág. 6) ---
    "JFFI": {
        codigoBase: "JFFI", categoriaImg: "Fresas", carpetaImg: "JFFI01",
        titulo: "Frente Inglés HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Frente Inglés Simple y Machimbrado", "Material": "Metal duro" },
        variantes: [
            { id: "JFFI01", nombre: "JFFI01 - D=175 B=1/2-1\" d=40 Z=4x4 (A)" },
            { id: "JFFI05", nombre: "JFFI05 - D=175 B=1/2-1\" d=40 Z=4x4 (B)" }
        ]
    },
    // --- Machimbre Simple HM (catálogo pág. 6) ---
    "JFMS": {
        codigoBase: "JFMS", categoriaImg: "Fresas", carpetaImg: "JFMS1234",
        titulo: "Machimbre Simple HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Machimbre Simple Biselado o Bajo Fondo", "Material": "Metal duro" },
        variantes: [
            { id: "JFMS1234", nombre: "JFMS1234 - D=155 B=1/2-3/4\" d=40 Z=5x4 y 1x16" },
            { id: "JFMS34114", nombre: "JFMS34114 - D=155 B=3/4-1 1/4\" d=40 Z=6x4" }
        ]
    },
    // --- Machimbre Doble HM (catálogo pág. 7) ---
    "JFMD": {
        codigoBase: "JFMD", categoriaImg: "Fresas", carpetaImg: "JFMD1234",
        titulo: "Machimbre Doble HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Machimbre Doble con Chanfle o Bajo Fondo", "Material": "Metal duro" },
        variantes: [
            { id: "JFMD1234", nombre: "JFMD1234 - D=155 B=1/2-3/4\" d=40 Z=10x4 y 2x16" }
        ]
    },
    // --- Machimbre Piso para Grampa y Microbisel (catálogo pág. 8) ---
    "JFMP34166M": {
        codigoBase: "JFMP34166M", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Machimbre Piso para Grampa y Microbisel", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Machimbre de piso con junta abierta, microbisel y aristas redondeadas para grampa de sujeción", "Material": "Metal duro" },
        variantes: [
            { id: "JFMP34166M", nombre: "JFMP34166M - D=180 B=5/8-1\" d=40 Z=8x6+6" }
        ]
    },
    // --- Machimbre Piso para Grampa (catálogo pág. 7) ---
    "JFMP3416G": {
        codigoBase: "JFMP3416G", categoriaImg: "Fresas", carpetaImg: "JFMP3416G",
        titulo: "Machimbre Piso para Grampa", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Machimbre de piso con junta abierta e incisión para grampa de sujeción", "Material": "Metal duro" },
        variantes: [
            { id: "JFMP3416G", nombre: "JFMP3416G - D=180 B=5/8-1\" d=40 Z=4x6+6" }
        ]
    },
    // --- Machimbre Piso Standard (catálogo pág. 7) ---
    "JFMP": {
        codigoBase: "JFMP", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Machimbre Piso Standard", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Machimbre de piso con junta abierta (macho y hembra redondeados)", "Material": "Metal duro" },
        variantes: [
            { id: "JFMP3411", nombre: "JFMP3411 - D=150 B=3/4-1 1/4\" d=40 Z=4x4" },
            { id: "JFMP3416", nombre: "JFMP3416 - D=160 B=5/8-1\" d=40 Z=4x6" }
        ]
    },
    // --- Contramolduras de Puertas y Ventanas HM (catálogo pág. 9) ---
    "FCPV": {
        codigoBase: "FCPV", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Contramolduras de Puertas y Ventanas HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Contramolduras en Espigadoras o Tupíes", "Material": "Metal duro" },
        variantes: [
            { id: "FCPV41", nombre: "FCPV41 - D=150 B=1 1/2 a 2\" d=40 Z=4" },
            { id: "FCPV6", nombre: "FCPV6 - D=250 B=1 1/2 a 2\" d=40 Z=6" },
            { id: "FCPV61", nombre: "FCPV61 - D=320 B=1 1/2 a 2\" d=40 Z=6" }
        ]
    },
    // --- Moldura de Puertas y Ventanas Simple HM (catálogo pág. 10) ---
    "JFMPVR": {
        codigoBase: "JFMPVR", categoriaImg: "Fresas", carpetaImg: "JFMPVR",
        titulo: "Moldura de Puertas y Ventanas Simple HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Molduras, contramolduras y replan (1 fresa tipo replán y 2 fresas rectas)", "Material": "Metal duro" },
        variantes: [
            { id: "JFMPVR", nombre: "JFMPVR - D=180 B=35-45 d=40 Z=1x2+2 y 2x4" }
        ]
    },
    // --- Fresa Multimoldura (catálogo pág. 12) ---
    "FP402": {
        codigoBase: "FP402", categoriaImg: "Fresas", carpetaImg: "FP402",
        titulo: "Fresa Multimoldura", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Distintos tipos de molduras sin cambiar insertos (subiendo/bajando el eje del tupí)", "Material": "Metal duro" },
        variantes: [
            { id: "FP402", nombre: "FP402 - D=150 B=45 d=40 Z=2" }
        ]
    },

    // ---------------------------------------------------------
    // MECHAS Y BROCAS
    // ---------------------------------------------------------
    "MPD": { 
        codigoBase: "MPD", categoriaImg: "Mechas", carpetaImg: "Familias MPD  MPI", 
        titulo: "Mecha Pasante (Derecha)", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro", "Uso": "Perforaciones Pasantes" }, 
        variantes: [
            { id: "MPD04", nombre: "MPD04 - Y=4mm L=58mm CABO=10x20" },
            { id: "MPD0470", nombre: "MPD0470 - Y=4mm L=70mm CABO=10x20" },
            { id: "MPD05", nombre: "MPD05 - Y=5mm L=57.5 CABO=10x20" },
            { id: "MPD0570", nombre: "MPD0570 - Y=5mm L=70 CABO=10x20" },
            { id: "MPD0670", nombre: "MPD0670 - Y=6mm L=70mm CABO=10x20" },
            { id: "MPD0770", nombre: "MPD0770 - Y=7mm L=70mm CABO=10x20" },
            { id: "MPD08", nombre: "MPD08 - Y=8mm L=57.5 CABO=10x20" },
            { id: "MPD0870", nombre: "MPD0870 - Y=8mm L=70mm CABO=10x20" },
            { id: "MPD10", nombre: "MPD10 - Y=10mm L=57.5 CABO=10x20" },
            { id: "MPD1070", nombre: "MPD1070 - Y=10mm L=70mm CABO=10x20" },
            { id: "MPD12", nombre: "MPD12 - Y=12mm L=57.5 CABO=10x20" },
            { id: "MPD1270", nombre: "MPD1270 - Y=12mm L=70mm CABO=10x20" },
            { id: "MPDL05", nombre: "MPDL05 - Y=5 LU=27 LT=57.5 CABO=10x30" },
            { id: "MPDL0570", nombre: "MPDL0570 - Y=5 LT=70" },
            { id: "MPDL08", nombre: "MPDL08 - Y=8 LU=27 LT=57.5 CABO=10x30" },
            { id: "MPDL0870", nombre: "MPDL0870 - Y=8 LT=70" }
        ] 
    },
    "MPI": { 
        codigoBase: "MPI", categoriaImg: "Mechas", carpetaImg: "Familias MPD  MPI", 
        titulo: "Mecha Pasante (Izquierda)", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro", "Uso": "Perforaciones Pasantes" }, 
        variantes: [
            { id: "MPI04", nombre: "MPI04 - Y=4mm L=58mm CABO=10x20" },
            { id: "MPI0470", nombre: "MPI0470 - Y=4mm L=70mm CABO=10x20" },
            { id: "MPI05", nombre: "MPI05 - Y=5mm L=57.5 CABO=10x20" },
            { id: "MPI0570", nombre: "MPI0570 - Y=5mm L=70 CABO=10x20" },
            { id: "MPI0670", nombre: "MPI0670 - Y=6mm LT=70 CABO=10x20" },
            { id: "MPI0770", nombre: "MPI0770 - Y=7mm L=70mm CABO=10x20" },
            { id: "MPI08", nombre: "MPI08 - Y=8mm L=57.5 CABO=10x20" },
            { id: "MPI0870", nombre: "MPI0870 - Y=8mm L=70mm CABO=10x20" },
            { id: "MPI10", nombre: "MPI10 - Y=10mm L=57.5 CABO=10x20" },
            { id: "MPI1070", nombre: "MPI1070 - Y=10mm L=70mm CABO=10x20" },
            { id: "MPI12", nombre: "MPI12 - Y=12mm L=57.5 CABO=10x20" },
            { id: "MPI1270", nombre: "MPI1270 - Y=12mm L=70mm CABO=10x20" },
            { id: "MPIL05", nombre: "MPIL05 - Y=5 LU=27 LT=57.5 CABO=10x30" },
            { id: "MPIL0570", nombre: "MPIL0570 - Y=5 LT=70" },
            { id: "MPIL08", nombre: "MPIL08 - Y=8 LU=27 LT=57.5 CABO=10x30" },
            { id: "MPIL0870", nombre: "MPIL0870 - Y=8 LT=70" }
        ] 
    },
    // Agrupación general para la página "MCD-MCI" genérica
    "MCD-MCI": { codigoBase: "MCD-MCI", categoriaImg: "Mechas", carpetaImg: "Familias MCD  MCI", titulo: "Mecha Ciega MCD-MCI", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro", "Uso": "Perforaciones Ciegas" }, 
        variantes: [
            { id: "MCD03", nombre: "MCD03 - Y=3mm" }, { id: "MCD04", nombre: "MCD04 - Y=4mm L=57.5 CABO=10x20" }, { id: "MCD0470", nombre: "MCD0470 - Y=4mm L=70mm CABO=10x20" }, { id: "MCD05", nombre: "MCD05 - Y=5mm L=57.5 CABO=10x20" }, { id: "MCD0570", nombre: "MCD0570 - Y=5mm L=70mm CABO=10x20" }, { id: "MCD06", nombre: "MCD06 - Y=6mm L=57.5 CABO=10x20" }, { id: "MCD0670", nombre: "MCD0670 - Y=6mm L=70mm CABO=10x20" }, { id: "MCD0770", nombre: "MCD0770 - Y=7mm LT=70 CABO=10x20" }, { id: "MCD08", nombre: "MCD08 - Y=8mm L=57.5 CABO=10x20" }, { id: "MCD0870", nombre: "MCD0870 - Y=8mm L=70 CABO=10x20" }, { id: "MCD10", nombre: "MCD10 - Y=10mm L=57.5 CABO=10x20" }, { id: "MCD1070", nombre: "MCD1070 - Y=10mm L=70mm CABO=10x20" }, { id: "MCD12", nombre: "MCD12 - Y=12mm L=57.5 CABO=10x20" }, { id: "MCD1270", nombre: "MCD1270 - Y=12mm L=70mm CABO=10x20" }, { id: "MCD1470", nombre: "MCD1470 - Y=14mm L=70mm CABO=10x20" }, { id: "MCD15", nombre: "MCD15 - Y=15mm L=57.5 CABO=10x20" }, { id: "MCD1570", nombre: "MCD1570 - Y=15mm L=70mm CABO=10x20" }, { id: "MCDL05", nombre: "MCDL05 - Y=5 LU=27 LT=57.5 CABO=10x30" }, { id: "MCDL0570", nombre: "MCDL0570 - Y=5 LT=70" }, { id: "MCDL08", nombre: "MCDL08 - Y=8 LU=27 LT=57.5 CABO=10x30" }, { id: "MCDL0870", nombre: "MCDL0870 - Y=8 LT=70" }, { id: "MCDR0570", nombre: "MCDR0570 - Cyflex Skipper Y=5mm LU=45 LT=80" }, { id: "MCDR0670", nombre: "MCDR0670 - Cyflex Skipper Y=6mm LU=45 LT=80" }, { id: "MCDR0870", nombre: "MCDR0870 - Cyflex Skipper Y=8mm LU=45 LT=80" }, { id: "MCE", nombre: "MCE - MECHA ESPECIAL" },
            { id: "MCI03", nombre: "MCI03 - Y=3mm" }, { id: "MCI04", nombre: "MCI04 - Y=4mm L=57.5 CABO=10x20" }, { id: "MCI0470", nombre: "MCI0470 - Y=4mm L=70mm CABO=10x20" }, { id: "MCI05", nombre: "MCI05 - Y=5mm L=57.5mm CABO=10x20" }, { id: "MCI0570", nombre: "MCI0570 - Y=5mm L=70mm CABO=10x20" }, { id: "MCI06", nombre: "MCI06 - Y=6mm L=57.5 CABO=10x20" }, { id: "MCI0670", nombre: "MCI0670 - Y=6mm L=70mm CABO=10x20" }, { id: "MCI0770", nombre: "MCI0770 - Y=7mm LT=70 CABO=10x20" }, { id: "MCI08", nombre: "MCI08 - Y=8mm L=57.5 CABO=10x20" }, { id: "MCI0870", nombre: "MCI0870 - Y=8mm L=70 CABO=10x20" }, { id: "MCI10", nombre: "MCI10 - Y=10mm L=57.5 CABO=10x20" }, { id: "MCI1070", nombre: "MCI1070 - Y=10mm L=70mm CABO=10x20" }, { id: "MCI12", nombre: "MCI12 - Y=12mm L=57.5 CABO=10x20" }, { id: "MCI1270", nombre: "MCI1270 - Y=12mm L=70mm CABO=10x20" }, { id: "MCI1470", nombre: "MCI1470 - Y=14mm L=70mm CABO=10x20" }, { id: "MCI15", nombre: "MCI15 - Y=15mm L=57.5 CABO=10x20" }, { id: "MCI1570", nombre: "MCI1570 - Y=15mm L=70mm CABO=10x20" }, { id: "MCIL05", nombre: "MCIL05 - Y=5 LU=27 LT=57.5 CABO=10x30" }, { id: "MCIL0570", nombre: "MCIL0570 - Y=5 LT=70" }, { id: "MCIL08", nombre: "MCIL08 - Y=8 LU=27 LT=57.5 CABO=10x30" }, { id: "MCIL0870", nombre: "MCIL0870 - Y=8 LT=70" }, { id: "MCIR0570", nombre: "MCIR0570 - Cyflex Skipper Y=5mm LU=45 LT=80" }, { id: "MCIR0670", nombre: "MCIR0670 - Cyflex Skipper Y=6mm LU=45 LT=80" }, { id: "MCIR0870", nombre: "MCIR0870 - Cyflex Skipper Y=8mm LU=45 LT=80" }
        ] 
    },
    "MCD": { 
        codigoBase: "MCD", categoriaImg: "Mechas", carpetaImg: "Familias MCD  MCI", 
        titulo: "Mecha Ciega (Derecha)", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro", "Uso": "Perforaciones Ciegas" }, 
        variantes: [
            { id: "MCD03", nombre: "MCD03 - Y=3mm" },
            { id: "MCD04", nombre: "MCD04 - Y=4mm L=57.5 CABO=10x20" },
            { id: "MCD0470", nombre: "MCD0470 - Y=4mm L=70mm CABO=10x20" },
            { id: "MCD05", nombre: "MCD05 - Y=5mm L=57.5 CABO=10x20" },
            { id: "MCD0570", nombre: "MCD0570 - Y=5mm L=70mm CABO=10x20" },
            { id: "MCD06", nombre: "MCD06 - Y=6mm L=57.5 CABO=10x20" },
            { id: "MCD0670", nombre: "MCD0670 - Y=6mm L=70mm CABO=10x20" },
            { id: "MCD0770", nombre: "MCD0770 - Y=7mm LT=70 CABO=10x20" },
            { id: "MCD08", nombre: "MCD08 - Y=8mm L=57.5 CABO=10x20" },
            { id: "MCD0870", nombre: "MCD0870 - Y=8mm L=70 CABO=10x20" },
            { id: "MCD10", nombre: "MCD10 - Y=10mm L=57.5 CABO=10x20" },
            { id: "MCD1070", nombre: "MCD1070 - Y=10mm L=70mm CABO=10x20" },
            { id: "MCD12", nombre: "MCD12 - Y=12mm L=57.5 CABO=10x20" },
            { id: "MCD1270", nombre: "MCD1270 - Y=12mm L=70mm CABO=10x20" },
            { id: "MCD1470", nombre: "MCD1470 - Y=14mm L=70mm CABO=10x20" },
            { id: "MCD15", nombre: "MCD15 - Y=15mm L=57.5 CABO=10x20" },
            { id: "MCD1570", nombre: "MCD1570 - Y=15mm L=70mm CABO=10x20" },
            { id: "MCDL05", nombre: "MCDL05 - Y=5 LU=27 LT=57.5 CABO=10x30" },
            { id: "MCDL0570", nombre: "MCDL0570 - Y=5 LT=70" },
            { id: "MCDL08", nombre: "MCDL08 - Y=8 LU=27 LT=57.5 CABO=10x30" },
            { id: "MCDL0870", nombre: "MCDL0870 - Y=8 LT=70" },
            { id: "MCDR0570", nombre: "MCDR0570 - Cyflex Skipper Y=5mm LU=45 LT=80" },
            { id: "MCDR0670", nombre: "MCDR0670 - Cyflex Skipper Y=6mm LU=45 LT=80" },
            { id: "MCDR0870", nombre: "MCDR0870 - Cyflex Skipper Y=8mm LU=45 LT=80" },
            { id: "MCE", nombre: "MCE - MECHA ESPECIAL" }
        ] 
    },
    "MCI": { 
        codigoBase: "MCI", categoriaImg: "Mechas", carpetaImg: "Familias MCD  MCI", 
        titulo: "Mecha Ciega (Izquierda)", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro", "Uso": "Perforaciones Ciegas" }, 
        variantes: [
            { id: "MCI03", nombre: "MCI03 - Y=3mm" },
            { id: "MCI04", nombre: "MCI04 - Y=4mm L=57.5 CABO=10x20" },
            { id: "MCI0470", nombre: "MCI0470 - Y=4mm L=70mm CABO=10x20" },
            { id: "MCI05", nombre: "MCI05 - Y=5mm L=57.5mm CABO=10x20" },
            { id: "MCI0570", nombre: "MCI0570 - Y=5mm L=70mm CABO=10x20" },
            { id: "MCI06", nombre: "MCI06 - Y=6mm L=57.5 CABO=10x20" },
            { id: "MCI0670", nombre: "MCI0670 - Y=6mm L=70mm CABO=10x20" },
            { id: "MCI0770", nombre: "MCI0770 - Y=7mm LT=70 CABO=10x20" },
            { id: "MCI08", nombre: "MCI08 - Y=8mm L=57.5 CABO=10x20" },
            { id: "MCI0870", nombre: "MCI0870 - Y=8mm L=70 CABO=10x20" },
            { id: "MCI10", nombre: "MCI10 - Y=10mm L=57.5 CABO=10x20" },
            { id: "MCI1070", nombre: "MCI1070 - Y=10mm L=70mm CABO=10x20" },
            { id: "MCI12", nombre: "MCI12 - Y=12mm L=57.5 CABO=10x20" },
            { id: "MCI1270", nombre: "MCI1270 - Y=12mm L=70mm CABO=10x20" },
            { id: "MCI1470", nombre: "MCI1470 - Y=14mm L=70mm CABO=10x20" },
            { id: "MCI15", nombre: "MCI15 - Y=15mm L=57.5 CABO=10x20" },
            { id: "MCI1570", nombre: "MCI1570 - Y=15mm L=70mm CABO=10x20" },
            { id: "MCIL05", nombre: "MCIL05 - Y=5 LU=27 LT=57.5 CABO=10x30" },
            { id: "MCIL0570", nombre: "MCIL0570 - Y=5 LT=70" },
            { id: "MCIL08", nombre: "MCIL08 - Y=8 LU=27 LT=57.5 CABO=10x30" },
            { id: "MCIL0870", nombre: "MCIL0870 - Y=8 LT=70" },
            { id: "MCIR0570", nombre: "MCIR0570 - Cyflex Skipper Y=5mm LU=45 LT=80" },
            { id: "MCIR0670", nombre: "MCIR0670 - Cyflex Skipper Y=6mm LU=45 LT=80" },
            { id: "MCIR0870", nombre: "MCIR0870 - Cyflex Skipper Y=8mm LU=45 LT=80" }
        ] 
    },
    "FPP": { 
        codigoBase: "FPP", categoriaImg: "Mechas", carpetaImg: "bisagra", 
        titulo: "Punta Plegado Bisagra", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Bisagras / Plegado" }, 
        variantes: [{ id: "FPP452", nombre: "FPP452 - Punta Plegado D=45 Lu=19 Z=2" }] 
    },
    "PRACTIWALL": { 
        codigoBase: "PRACTIWALL", categoriaImg: "Mechas", carpetaImg: "bisagra", 
        titulo: "Mecha Bisagra Practiwall", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Bisagras" }, 
        variantes: [{ id: "PRACTIWALL", nombre: "PRACTIWALL - D=35 Cabo 12x45 LT=65 Z=2" }] 
    },
    "MBI": { 
        codigoBase: "MBI", categoriaImg: "Mechas", carpetaImg: "bisagra", 
        titulo: "Fresa Bisagra (Izquierda)", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro", "Uso": "Bisagras" }, 
        variantes: [
            { id: "MBI12", nombre: "MBI12 - Y=12 L=57.5 CABO=10x20" },
            { id: "MBI15", nombre: "MBI15 - Y=15 L=57.5 CABO=10x20" },
            { id: "MBI1570", nombre: "MBI1570 - Y=15 L=70 CABO=10x26" },
            { id: "MBI20", nombre: "MBI20 - Y=20 L=57.5 CABO=10x20" },
            { id: "MBI2070", nombre: "MBI2070 - Y=20 L=70 CABO=10x20" },
            { id: "MBI25", nombre: "MBI25 - Y=25 L=57.5 CABO=10x26" },
            { id: "MBI26", nombre: "MBI26 - Y=26 L=57.5 CABO=10x20" },
            { id: "MBI2670", nombre: "MBI2670 - Y=26 L=70 CABO=10x26" },
            { id: "MBI30", nombre: "MBI30 - Y=30 L=57.5 CABO=10x20" },
            { id: "MBI3070", nombre: "MBI3070 - Y=30 L=70 CABO=10x26" },
            { id: "MBI35", nombre: "MBI35 - Y=35 L=57.5 CABO=10x26" },
            { id: "MBI3570", nombre: "MBI3570 - Y=35 L=70 CABO=10x26" }
        ] 
    },
    "MBD": { 
        codigoBase: "MBD", categoriaImg: "Mechas", carpetaImg: "bisagra", 
        titulo: "Fresa Bisagra (Derecha)", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro", "Uso": "Bisagras" }, 
        variantes: [
            { id: "MBD12", nombre: "MBD12 - Y=12 L=57.5 CABO=10x20" },
            { id: "MBD15", nombre: "MBD15 - Y=15 L=57.5 CABO=10x20" },
            { id: "MBD1570", nombre: "MBD1570 - Y=15 L=70 CABO=10x26" },
            { id: "MBD20", nombre: "MBD20 - Y=20 L=57.5 CABO=10x20" },
            { id: "MBD2070", nombre: "MBD2070 - Y=20 L=70 CABO=10x20" },
            { id: "MBD25", nombre: "MBD25 - Y=25 L=57.5 CABO=10x26" },
            { id: "MBD26", nombre: "MBD26 - Y=26 L=57.5 CABO=10x20" },
            { id: "MBD2670", nombre: "MBD2670 - Y=26 L=70 CABO=10x26" },
            { id: "MBD30", nombre: "MBD30 - Y=30 L=57.5 CABO=10x20" },
            { id: "MBD3070", nombre: "MBD3070 - Y=30 L=70 CABO=10x26" },
            { id: "MBD35", nombre: "MBD35 - Y=35 L=57.5 CABO=10x26" },
            { id: "MBD3570", nombre: "MBD3570 - Y=35 L=70 CABO=10x26" },
            { id: "MBD40", nombre: "MBD40 - D=40 L=57.5 CABO=10X20" }
        ] 
    },
    // Agrupación general para la página "MB" genérica
    "MB": { codigoBase: "MB", categoriaImg: "Mechas", carpetaImg: "Familia MB", titulo: "Mecha para Bisagras MB", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Bisagras" }, 
        variantes: [
            { id: "MBD12", nombre: "MBD12 - Y=12 L=57.5 CABO=10x20" }, { id: "MBD15", nombre: "MBD15 - Y=15 L=57.5 CABO=10x20" }, { id: "MBD1570", nombre: "MBD1570 - Y=15 L=70 CABO=10x26" }, { id: "MBD20", nombre: "MBD20 - Y=20 L=57.5 CABO=10x20" }, { id: "MBD2070", nombre: "MBD2070 - Y=20 L=70 CABO=10x20" }, { id: "MBD25", nombre: "MBD25 - Y=25 L=57.5 CABO=10x26" }, { id: "MBD26", nombre: "MBD26 - Y=26 L=57.5 CABO=10x20" }, { id: "MBD2670", nombre: "MBD2670 - Y=26 L=70 CABO=10x26" }, { id: "MBD30", nombre: "MBD30 - Y=30 L=57.5 CABO=10x20" }, { id: "MBD3070", nombre: "MBD3070 - Y=30 L=70 CABO=10x26" }, { id: "MBD35", nombre: "MBD35 - Y=35 L=57.5 CABO=10x26" }, { id: "MBD3570", nombre: "MBD3570 - Y=35 L=70 CABO=10x26" }, { id: "MBD40", nombre: "MBD40 - D=40 L=57.5 CABO=10X20" },
            { id: "MBI12", nombre: "MBI12 - Y=12 L=57.5 CABO=10x20" }, { id: "MBI15", nombre: "MBI15 - Y=15 L=57.5 CABO=10x20" }, { id: "MBI1570", nombre: "MBI1570 - Y=15 L=70 CABO=10x26" }, { id: "MBI20", nombre: "MBI20 - Y=20 L=57.5 CABO=10x20" }, { id: "MBI2070", nombre: "MBI2070 - Y=20 L=70 CABO=10x20" }, { id: "MBI25", nombre: "MBI25 - Y=25 L=57.5 CABO=10x26" }, { id: "MBI26", nombre: "MBI26 - Y=26 L=57.5 CABO=10x20" }, { id: "MBI2670", nombre: "MBI2670 - Y=26 L=70 CABO=10x26" }, { id: "MBI30", nombre: "MBI30 - Y=30 L=57.5 CABO=10x20" }, { id: "MBI3070", nombre: "MBI3070 - Y=30 L=70 CABO=10x26" }, { id: "MBI35", nombre: "MBI35 - Y=35 L=57.5 CABO=10x26" }, { id: "MBI3570", nombre: "MBI3570 - Y=35 L=70 CABO=10x26" }
        ] 
    },
    "BRDD": { 
        codigoBase: "BRDD", categoriaImg: "Mechas", carpetaImg: "Ciega", 
        titulo: "Broca para Defondadora", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro", "Uso": "Defondado" }, 
        variantes: [{ id: "BRDD52", nombre: "BRDD52 - L=52mm Z=2 Ycabo=10mm" }] 
    },
    "MIDN": { 
        codigoBase: "MIDN", categoriaImg: "Mechas", carpetaImg: "Familia MIDN", 
        titulo: "Mecha Integral MIDN", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro Integral", "Uso": "Mecanizado CNC" }, 
        variantes: [
            { id: "MIDN0822", nombre: "MIDN0822 - D=8 Z=2+2 LU=22 Compresion" },
            { id: "MIDN1022", nombre: "MIDN1022 - D=10 Z=2+2 LU=22 Compresion" }
        ] 
    },
    "MID": { 
        codigoBase: "MID", categoriaImg: "Mechas", carpetaImg: "Familia MID", 
        titulo: "Mecha Integral MID", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro Integral", "Uso": "Mecanizado CNC" }, 
        variantes: [
            { id: "MID00412", nombre: "MID00412 - D=4 Z=2 LU=12" },
            { id: "MID00627", nombre: "MID00627 - D=6 Z=2 LU=27" },
            { id: "MID00832", nombre: "MID00832 - D=8 Z=3 LU=32 LT=70" },
            { id: "MID01042", nombre: "MID01042 - Y=10 Z=3 LU=42 LT=100" },
            { id: "MID01242", nombre: "MID01242 - Y=12 Z=3 LU=42" },
            { id: "MID016100", nombre: "MID016100 - Y=16 LU=100 LT=155 Z=3" },
            { id: "MID01642", nombre: "MID01642 - Y=16 LU=42 Z=3" },
            { id: "MID01652", nombre: "MID01652 - Y=16 LU=52 Z=3" },
            { id: "MID01852", nombre: "MID01852 - Y=18 LU=52 Z=3" },
            { id: "MID02052", nombre: "MID02052 - Y=20 LU=52 Z=3" },
            { id: "MIDR01242", nombre: "MIDR01242 - ROMPEVIRUTA Y=12 Z=3 LU=42" },
            { id: "MIDR01642", nombre: "MIDR01642 - ROMPEVIRUTA Y=16 LU=42 Z=3" },
            { id: "MIDR01652", nombre: "MIDR01652 - ROMPEVIRUTA Y=16 LU=52 Z=3" },
            { id: "MIDR01852", nombre: "MIDR01852 - ROMPEVIRUTA Y=18 LU=52 Z=3" },
            { id: "MIDR02053", nombre: "MIDR02053 - ROMPEVIRUTA Y=20 LT=100 LU=53" }
        ] 
    },
    "MIIR": { 
        codigoBase: "MIIR", categoriaImg: "Mechas", carpetaImg: "integral", 
        titulo: "Mecha Integral Recta p/ CNC", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro Integral", "Uso": "Mecanizado CNC" }, 
        variantes: [
            { id: "MIIR01042", nombre: "MIIR01042 - ROMPEVIRUTA Y=10 Z=3 LU=42" },
            { id: "MIIR01242", nombre: "MIIR01242 - ROMPEVIRUTA Y=12 Z=3 LU=42" },
            { id: "MIIR01642", nombre: "MIIR01642 - ROMPEVIRUTA Y=16 LU=42 Z=3" }
        ] 
    },
    // Agrupación general para la página "MI" genérica
    "MI": { codigoBase: "MI", categoriaImg: "Mechas", carpetaImg: "Familia MI", titulo: "Mecha Integral MI", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro Integral", "Uso": "Mecanizado CNC" }, 
        variantes: [
            { id: "MID00412", nombre: "MID00412 - D=4 Z=2 LU=12" }, { id: "MID00627", nombre: "MID00627 - D=6 Z=2 LU=27" }, { id: "MID00832", nombre: "MID00832 - D=8 Z=3 LU=32 LT=70" }, { id: "MID01042", nombre: "MID01042 - Y=10 Z=3 LU=42 LT=100" }, { id: "MID01242", nombre: "MID01242 - Y=12 Z=3 LU=42" }, { id: "MID016100", nombre: "MID016100 - Y=16 LU=100 LT=155 Z=3" }, { id: "MID01642", nombre: "MID01642 - Y=16 LU=42 Z=3" }, { id: "MID01652", nombre: "MID01652 - Y=16 LU=52 Z=3" }, { id: "MID01852", nombre: "MID01852 - Y=18 LU=52 Z=3" }, { id: "MID02052", nombre: "MID02052 - Y=20 LU=52 Z=3" }, { id: "MIDR01242", nombre: "MIDR01242 - ROMPEVIRUTA Y=12 Z=3 LU=42" }, { id: "MIDR01642", nombre: "MIDR01642 - ROMPEVIRUTA Y=16 LU=42 Z=3" }, { id: "MIDR01652", nombre: "MIDR01652 - ROMPEVIRUTA Y=16 LU=52 Z=3" }, { id: "MIDR01852", nombre: "MIDR01852 - ROMPEVIRUTA Y=18 LU=52 Z=3" }, { id: "MIDR02053", nombre: "MIDR02053 - ROMPEVIRUTA Y=20 LT=100 LU=53" },
            { id: "MIDN0822", nombre: "MIDN0822 - D=8 Z=2+2 LU=22 Compresion" }, { id: "MIDN1022", nombre: "MIDN1022 - D=10 Z=2+2 LU=22 Compresion" },
            { id: "MIIR01042", nombre: "MIIR01042 - ROMPEVIRUTA Y=10 Z=3 LU=42" }, { id: "MIIR01242", nombre: "MIIR01242 - ROMPEVIRUTA Y=12 Z=3 LU=42" }, { id: "MIIR01642", nombre: "MIIR01642 - ROMPEVIRUTA Y=16 LU=42 Z=3" }
        ] 
    },
    // Agrupación general para la página "MAM-PINZA" genérica
    "MAM-PINZA": { codigoBase: "MAM-PINZA", categoriaImg: "Mechas", carpetaImg: "Familias MAM  PINZA/mandril para máquina", titulo: "Mandril Adaptador / Pinza", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Sujeción de herramientas" }, 
        variantes: [
            { id: "MAM35", nombre: "MAM35 - D=10 d=3 Lu=10mm" }, { id: "MAM40", nombre: "MAM40 - Y=20x10 L=40" }, { id: "MAM42", nombre: "MAM42 - Y=18x10 L=42" }, { id: "MAM43", nombre: "MAM43 - Y=20x10 L=43" }, { id: "MAMD010", nombre: "MAMD010 - DER Y=10 CABO RECTO" }, { id: "MAMDC010", nombre: "MAMDC010 - DER CABO CONICO Y=10" }, { id: "MAMHSK32", nombre: "MAMHSK32 - HSK63F para Pinza ER32" }, { id: "MAMI010", nombre: "MAMI010 - IZQ Y=10 CABO RECTO" }, { id: "MAMIC010", nombre: "MAMIC010 - IZQ CABO CONICO Y=10" },
            { id: "PINZADIN638", nombre: "PINZADIN638 - ORT25A DIN6388 D=35.5 T=52" }, { id: "PINZAER3204", nombre: "PINZAER3204 - D=33 LT=40 d=4" }, { id: "PINZAER3206", nombre: "PINZAER3206 - D=33 LT=40 d=10" }, { id: "PINZAER3208", nombre: "PINZAER3208 - D=33 LT=40 d=8" }, { id: "PINZAER3210", nombre: "PINZAER3210 - D=33 LT=40 d=10" }, { id: "PINZAER3212", nombre: "PINZAER3212 - D=33 LT=40 d=12" }, { id: "PINZAER3216", nombre: "PINZAER3216 - D=33 LT=40 d=16" }, { id: "PINZAER3218", nombre: "PINZAER3218 - D=33 LT=40 d=18" }, { id: "PINZAER3220", nombre: "PINZAER3220 - D=33 LT=40 d=20" }, { id: "PINZAER4012", nombre: "PINZAER4012 - D=41 LT=46 d=12" }, { id: "PINZAER4016", nombre: "PINZAER4016 - D=41 LT=46 d=16" }, { id: "PINZAER4018", nombre: "PINZAER4018 - D=41 LT=46 d=18" }, { id: "PINZAER4020", nombre: "PINZAER4020 - D=41 LT=46 d=20" }
        ] 
    },
    "MAM": { 
        codigoBase: "MAM", categoriaImg: "Mechas", carpetaImg: "Familias MAM  PINZA/mandril para máquina", 
        titulo: "Mandril Adaptador", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Sujeción de herramientas" }, 
        variantes: [
            { id: "MAM35", nombre: "MAM35 - D=10 d=3 Lu=10mm" },
            { id: "MAM40", nombre: "MAM40 - Y=20x10 L=40" },
            { id: "MAM42", nombre: "MAM42 - Y=18x10 L=42" },
            { id: "MAM43", nombre: "MAM43 - Y=20x10 L=43" },
            { id: "MAMD010", nombre: "MAMD010 - DER Y=10 CABO RECTO" },
            { id: "MAMDC010", nombre: "MAMDC010 - DER CABO CONICO Y=10" },
            { id: "MAMHSK32", nombre: "MAMHSK32 - HSK63F para Pinza ER32" },
            { id: "MAMI010", nombre: "MAMI010 - IZQ Y=10 CABO RECTO" },
            { id: "MAMIC010", nombre: "MAMIC010 - IZQ CABO CONICO Y=10" }
        ] 
    },
    "PINZAER": { 
        codigoBase: "PINZAER", categoriaImg: "Mechas", carpetaImg: "Familias MAM  PINZA/mandril para máquina", 
        titulo: "Pinza ER para Sujeción", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Sujeción en Mandriles" }, 
        variantes: [
            { id: "PINZAER3204", nombre: "PINZAER3204 - D=33 LT=40 d=4" },
            { id: "PINZAER3206", nombre: "PINZAER3206 - D=33 LT=40 d=10" },
            { id: "PINZAER3208", nombre: "PINZAER3208 - D=33 LT=40 d=8" },
            { id: "PINZAER3210", nombre: "PINZAER3210 - D=33 LT=40 d=10" },
            { id: "PINZAER3212", nombre: "PINZAER3212 - D=33 LT=40 d=12" },
            { id: "PINZAER3216", nombre: "PINZAER3216 - D=33 LT=40 d=16" },
            { id: "PINZAER3218", nombre: "PINZAER3218 - D=33 LT=40 d=18" },
            { id: "PINZAER3220", nombre: "PINZAER3220 - D=33 LT=40 d=20" },
            { id: "PINZAER4012", nombre: "PINZAER4012 - D=41 LT=46 d=12" },
            { id: "PINZAER4016", nombre: "PINZAER4016 - D=41 LT=46 d=16" },
            { id: "PINZAER4018", nombre: "PINZAER4018 - D=41 LT=46 d=18" },
            { id: "PINZAER4020", nombre: "PINZAER4020 - D=41 LT=46 d=20" }
        ] 
    },
    "PINZADIN": { 
        codigoBase: "PINZADIN", categoriaImg: "Mechas", carpetaImg: "Familias MAM  PINZA/mandril para máquina", 
        titulo: "Pinza Elastica DIN", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Sujeción en Mandriles" }, 
        variantes: [{ id: "PINZADIN638", nombre: "PINZADIN638 - ORT25A DIN6388 D=35.5 T=52" }] 
    },
    "MCAR": { 
        codigoBase: "MCAR", categoriaImg: "Mechas", carpetaImg: "Ciega", 
        titulo: "Mecha Ciega con Avellanador", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal duro", "Uso": "Perforado y avellanado simultáneo" }, 
        variantes: [
            { id: "MCARD0840", nombre: "MCARD0840 - DER M.D. L=40 Y=8mm CABO RECTO" },
            { id: "MCAR10840", nombre: "MCAR10840 - IZQ M.D. L=40 Y=8mm CABO=10x26" }
        ] 
    },
    "MBA": { 
        codigoBase: "MBA", categoriaImg: "Mechas", carpetaImg: "Familia MBA", 
        titulo: "Mecha para Barrenos MBA", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Barrenado" }, 
        variantes: [
            { id: "MBA018HSS", nombre: "MBA018HSS - Y=18mm HSS" },
            { id: "MBAD010HS", nombre: "MBAD010HS - Y=10mm HSS" },
            { id: "MBAD012HS", nombre: "MBAD012HS - D=12mm HSS" },
            { id: "MBAD014HS", nombre: "MBAD014HS - DER. D=14mm HSS" },
            { id: "MBAD020HS", nombre: "MBAD020HS - D=20mm HSS" }
        ] 
    },
    "AVD": { 
        codigoBase: "AVD", categoriaImg: "Mechas", carpetaImg: "Ciega", 
        titulo: "Avellanador Derecho", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Avellanado" }, 
        variantes: [{ id: "AVD0510", nombre: "AVD0510 - DER. REGULABLE 5-10mm" }] 
    },
    "AVI": { 
        codigoBase: "AVI", categoriaImg: "Mechas", carpetaImg: "Ciega", 
        titulo: "Avellanador Izquierdo", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Avellanado" }, 
        variantes: [{ id: "AVI0510", nombre: "AVI0510 - IZQ. REG. 5-10mm" }] 
    },
    "Router_Franzoi": { 
        codigoBase: "Router_Franzoi", categoriaImg: "Mechas", carpetaImg: "compresión", 
        titulo: "Mecha para Router CNC", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Mecanizado Router CNC" }, 
        variantes: [
            { id: "82425063521", nombre: "82425063521 - Modelo A824 Y=25 d=1/4" },
            { id: "92505063521", nombre: "92505063521 - Modelo A925 R=5 D=23 Cabo 1/4" },
            { id: "92515063521", nombre: "92515063521 - Modelo A925 R=15 Cabo 1/4" },
            { id: "92708063521", nombre: "92708063521 - Modelo A927 R=8 Cabo 1/4" },
            { id: "92906063521", nombre: "92906063521 - Modelo A929 R=6 Cabo 1/4" },
            { id: "93206063521", nombre: "93206063521 - Modelo A932 R=6 Cabo=1/4" }
        ] 
    },
    "824": { codigoBase: "Router_Franzoi", categoriaImg: "Mechas", carpetaImg: "compresión", titulo: "Mecha para Router CNC", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Mecanizado Router CNC" }, variantes: [
        { id: "82425063521", nombre: "82425063521 - Modelo A824 Y=25 d=1/4" }
    ]},
    "925": { codigoBase: "Router_Franzoi", categoriaImg: "Mechas", carpetaImg: "compresión", titulo: "Mecha para Router CNC", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Mecanizado Router CNC" }, variantes: [
        { id: "92505063521", nombre: "92505063521 - Modelo A925 R=5 D=23 Cabo 1/4" },
        { id: "92515063521", nombre: "92515063521 - Modelo A925 R=15 Cabo 1/4" }
    ]},
    "927": { codigoBase: "Router_Franzoi", categoriaImg: "Mechas", carpetaImg: "compresión", titulo: "Mecha para Router CNC", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Mecanizado Router CNC" }, variantes: [
        { id: "92708063521", nombre: "92708063521 - Modelo A927 R=8 Cabo 1/4" }
    ]},
    "929": { codigoBase: "Router_Franzoi", categoriaImg: "Mechas", carpetaImg: "compresión", titulo: "Mecha para Router CNC", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Mecanizado Router CNC" }, variantes: [
        { id: "92906063521", nombre: "92906063521 - Modelo A929 R=6 Cabo 1/4" }
    ]},
    "932": { codigoBase: "Router_Franzoi", categoriaImg: "Mechas", carpetaImg: "compresión", titulo: "Mecha para Router CNC", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Mecanizado Router CNC" }, variantes: [
        { id: "93206063521", nombre: "93206063521 - Modelo A932 R=6 Cabo=1/4" }
    ]},

    // ---------------------------------------------------------
    // HERRAMIENTAS PCD DIAMANTE
    // ---------------------------------------------------------
    "SCCD": {
        codigoBase: "SCCD", categoriaImg: "Diamante", carpetaImg: "Incisor diamante",
        titulo: "Incisor Cónico de Diamante PCD", marca: "Schiavon",
        caracteristicasBasicas: { "Marca": "Schiavon", "Material": "Diamante PCD", "Uso": "Seccionadoras y Escuadradoras" },
        variantes: [
            { id: "SCCD150322", nombre: "SCCD150322 - D: 125-200mm | B: 3.2-4.2mm | Z: 24 | H: 4" },
            { id: "SCCD150323", nombre: "SCCD150323 - D: 125-200mm | B: 3.2-4.2mm | Z: 36 | H: 4" }
        ]
    },
    "SCID": {
        codigoBase: "SCID", categoriaImg: "Diamante", carpetaImg: "Incisor diamante",
        titulo: "Incisor de Diamante PCD", marca: "Schiavon",
        caracteristicasBasicas: { "Marca": "Schiavon", "Material": "Diamante PCD", "Uso": "Incisor" },
        variantes: [{ id: "1", nombre: "Consultar Medida" }]
    },
    "SCED": {
        codigoBase: "SCED", categoriaImg: "Diamante", carpetaImg: "Sierras diamante",
        titulo: "Disco de Diamante PCD", marca: "Schiavon",
        caracteristicasBasicas: { "Marca": "Schiavon", "Material": "Diamante PCD", "Uso": "Corte de Placas y Melamina" },
        variantes: [
            { id: "SCSD350447", nombre: "SCSD350447 - D: 350mm | B: 4.4mm | Z: 72 | H: 2.5" }
        ]
    },
    "MBDD": {
        codigoBase: "MBDD", categoriaImg: "Diamante", carpetaImg: "Mechas diamante",
        titulo: "Mecha de Diamante", marca: "Nordutensili",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Diamante PCD", "Uso": "Perforaciones de precisión" },
        variantes: [
            { id: "MBDD3557", nombre: "MBDD3557 - D: 35mm | L: 57.5mm" },
            { id: "MBID3557", nombre: "MBID3557 - D: 35mm | L: 57mm" }
        ]
    },
    "MDD": {
        codigoBase: "MDD", categoriaImg: "Diamante", carpetaImg: "Mechas diamante",
        titulo: "Mecha Diamante Forante HM", marca: "Nordutensili",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Diamante PCD / HM", "Uso": "Perforaciones" },
        variantes: [
            { id: "MDD1225H", nombre: "MDD1225H - D: 12mm | L: 25mm | H: 2.5" },
            { id: "MDD1643H", nombre: "MDD1643H - D: 16mm | L: 43mm | H: 2.5" }
        ]
    },

    // ---------------------------------------------------------
    // CUCHILLAS
    // ---------------------------------------------------------
    "CHC_HSS": { 
        codigoBase: "CHC_HSS", categoriaImg: "Cuchillas", carpetaImg: "CHC_HSS", 
        titulo: "Cuchilla Plana HSS CHC", marca: "Ilma", 
        caracteristicasBasicas: { "Marca": "Ilma", "Material": "HSS (Acero Súper Rápido)", "Uso": "Maderas blandas y semi-duras", "Formato": "Plana" }, 
        variantes: [
            { id: "CHC030100HSS", nombre: "CHC030100HSS - 100x30x3" },
            { id: "CHC030120HSS", nombre: "CHC030120HSS - 120x30x3" },
            { id: "CHC030130HSS", nombre: "CHC030130HSS - 130x30x3" },
            { id: "CHC030150HSS", nombre: "CHC030150HSS - 150x30x3" },
            { id: "CHC030160HSS", nombre: "CHC030160HSS - 160x30x3" },
            { id: "CHC030180HSS", nombre: "CHC030180HSS - 180x30x3" },
            { id: "CHC030200HSS", nombre: "CHC030200HSS - 200x30x3" },
            { id: "CHC030210HSS", nombre: "CHC030210HSS - 210x30x3" },
            { id: "CHC030230HSS", nombre: "CHC030230HSS - 230x30x3" },
            { id: "CHC030240HSS", nombre: "CHC030240HSS - 240x30x3" },
            { id: "CHC030300HSS", nombre: "CHC030300HSS - 300x30x3" },
            { id: "CHC030310HSS", nombre: "CHC030310HSS - 310x30x3" },
            { id: "CHC030320HSS", nombre: "CHC030320HSS - 320x30x3" },
            { id: "CHC030330HSS", nombre: "CHC030330HSS - 330x30x3" },
            { id: "CHC030360HSS", nombre: "CHC030360HSS - 360x30x3" },
            { id: "CHC030370HSS", nombre: "CHC030370HSS - 370x30x3" },
            { id: "CHC030400HSS", nombre: "CHC030400HSS - 400x30x3" },
            { id: "CHC030410HSS", nombre: "CHC030410HSS - 410x30x3" },
            { id: "CHC030420HSS", nombre: "CHC030420HSS - 420x30x3" },
            { id: "CHC030460HSS", nombre: "CHC030460HSS - 460x30x3" },
            { id: "CHC030500HSS", nombre: "CHC030500HSS - 500x30x3" },
            { id: "CHC030510HSS", nombre: "CHC030510HSS - 510x30x3" },
            { id: "CHC030600HSS", nombre: "CHC030600HSS - 600x30x3" },
            { id: "CHC030610HSS", nombre: "CHC030610HSS - 610x30x3" },
            { id: "CHC030640HSS", nombre: "CHC030640HSS - 640x30x3" },
            { id: "CHC030810HSS", nombre: "CHC030810HSS - 810x30x3" },
            { id: "CHC031070HSS", nombre: "CHC031070HSS - 1080x30x3" },
            { id: "CHC050100HSS", nombre: "CHC050100HSS - 100x35x3" },
            { id: "CHC050130HSS", nombre: "CHC050130HSS - 130x35x3" },
            { id: "CHC050135HSS", nombre: "CHC050135HSS - 135x35x3" },
            { id: "CHC050150HSS", nombre: "CHC050150HSS - 150x35x3" },
            { id: "CHC050160HSS", nombre: "CHC050160HSS - 160x35x3" },
            { id: "CHC050170HSS", nombre: "CHC050170HSS - 170x35x3" },
            { id: "CHC050180HSS", nombre: "CHC050180HSS - 180x35x3" },
            { id: "CHC050200HSS", nombre: "CHC050200HSS - 200x35x3" },
            { id: "CHC050210HSS", nombre: "CHC050210HSS - 210x35x3" },
            { id: "CHC050230HSS", nombre: "CHC050230HSS - 230x35x3" },
            { id: "CHC050250HSS", nombre: "CHC050250HSS - 250x35x3" },
            { id: "CHC050300HSS", nombre: "CHC050300HSS - 300x35x3" },
            { id: "CHC050310HSS", nombre: "CHC050310HSS - 310x35x3" },
            { id: "CHC050320HSS", nombre: "CHC050320HSS - 320x35x3" },
            { id: "CHC050330HSS", nombre: "CHC050330HSS - 330x35x3" },
            { id: "CHC050350HSS", nombre: "CHC050350HSS - 350x35x3" },
            { id: "CHC050360HSS", nombre: "CHC050360HSS - 360x35x3" },
            { id: "CHC050400HSS", nombre: "CHC050400HSS - 400x35x3" },
            { id: "CHC050410HSS", nombre: "CHC050410HSS - 410x35x3" },
            { id: "CHC050420HSS", nombre: "CHC050420HSS - 420x35x3" },
            { id: "CHC050430HSS", nombre: "CHC050430HSS - 430x35x3" },
            { id: "CHC050450HSS", nombre: "CHC050450HSS - 450x35x3" },
            { id: "CHC050460HSS", nombre: "CHC050460HSS - 460x35x3" },
            { id: "CHC050500HSS", nombre: "CHC050500HSS - 500x35x3" },
            { id: "CHC050510HSS", nombre: "CHC050510HSS - 510x35x3" },
            { id: "CHC050520HSS", nombre: "CHC050520HSS - 520x35x3" },
            { id: "CHC050600HSS", nombre: "CHC050600HSS - 600x35x3" },
            { id: "CHC050610HSS", nombre: "CHC050610HSS - 610x35x3" },
            { id: "CHC050640HSS", nombre: "CHC050640HSS - 640x35x3" },
            { id: "CHC050700HSS", nombre: "CHC050700HSS - 700x35x3" },
            { id: "CHC050810HSS", nombre: "CHC050810HSS - 810x35x3" },
            { id: "CHC051040HSS", nombre: "CHC051040HSS - 1080x35x3" }
        ] 
    },
    "CHC_MD": { 
        codigoBase: "CHC_MD", categoriaImg: "Cuchillas", carpetaImg: "CHC_MD", 
        titulo: "Cuchilla Plana Metal duro CHC", marca: "Ilma", 
        caracteristicasBasicas: { "Marca": "Ilma", "Material": "Metal duro", "Uso": "Maderas duras y abrasivas", "Formato": "Plana" }, 
        variantes: [
            { id: "CHC03130MD", nombre: "CHC03130MD - 130x30x3" },
            { id: "CHC03150MD", nombre: "CHC03150MD - 150x30x3" },
            { id: "CHC03180MD", nombre: "CHC03180MD - 180x30x3" },
            { id: "CHC03230MD", nombre: "CHC03230MD - 230x30x3" },
            { id: "CHC03310MD", nombre: "CHC03310MD - 310x30x3" },
            { id: "CHC03410MD", nombre: "CHC03410MD - 410x30x3" },
            { id: "CHC03510MD", nombre: "CHC03510MD - 510x30X3" },
            { id: "CHC0360MD", nombre: "CHC0360MD - 360x30x3" },
            { id: "CHC03610MD", nombre: "CHC03610MD - 610x30x3" },
            { id: "CHC03630MD", nombre: "CHC03630MD - 630x30x3" }
        ] 
    },
    "CHCR_HSS": { 
        codigoBase: "CHCR_HSS", categoriaImg: "Cuchillas", carpetaImg: "CHCR_HSS", 
        titulo: "Cuchilla Dorso Ranurado HSS CHCR", marca: "Ilma", 
        caracteristicasBasicas: { "Marca": "Ilma", "Material": "HSS (Acero Súper Rápido)", "Uso": "Maderas blandas y semi-duras", "Formato": "Dorso Ranurado" }, 
        variantes: [
            { id: "CHCR0025608", nombre: "CHCR0025608 - 25x60x8" },
            { id: "CHCR0030508", nombre: "CHCR0030508 - 30x50x8" },
            { id: "CHCR0040508", nombre: "CHCR0040508 - 40x50x8" },
            { id: "CHCR0040608", nombre: "CHCR0040608 - 40x60x8" },
            { id: "CHCR0050508", nombre: "CHCR0050508 - 50x50x8" },
            { id: "CHCR0060405", nombre: "CHCR0060405 - 60x40x4" },
            { id: "CHCR0060408", nombre: "CHCR0060408 - 60x40x8" },
            { id: "CHCR0060505", nombre: "CHCR0060505 - 60x50x5" },
            { id: "CHCR0060508", nombre: "CHCR0060508 - 60x50x8" },
            { id: "CHCR0060608", nombre: "CHCR0060608 - 60x60x8" },
            { id: "CHCR0080404", nombre: "CHCR0080404 - 80x40x4" },
            { id: "CHCR0080508", nombre: "CHCR0080508 - 80x50x8" },
            { id: "CHCR0080608", nombre: "CHCR0080608 - 80x60x8" },
            { id: "CHCR0100404", nombre: "CHCR0100404 - 100x40x4" },
            { id: "CHCR0100408", nombre: "CHCR0100408 - 100x40x8" },
            { id: "CHCR0100505", nombre: "CHCR0100505 - 100x50x5" },
            { id: "CHCR0100506", nombre: "CHCR0100506 - 100x50x6" },
            { id: "CHCR0100508", nombre: "CHCR0100508 - 100x50x8" },
            { id: "CHCR0100608", nombre: "CHCR0100608 - 100x60x8" },
            { id: "CHCR0130408", nombre: "CHCR0130408 - 130x40x8" },
            { id: "CHCR0130508", nombre: "CHCR0130508 - 130x50x8" },
            { id: "CHCR0130608", nombre: "CHCR0130608 - 130x60x8" },
            { id: "CHCR0150408", nombre: "CHCR0150408 - 150x40x8" },
            { id: "CHCR0150505", nombre: "CHCR0150505 - 150x50x5" },
            { id: "CHCR0150508", nombre: "CHCR0150508 - 150x50x8" },
            { id: "CHCR0150608", nombre: "CHCR0150608 - 150x60x8" },
            { id: "CHCR0160404", nombre: "CHCR0160404 - 160x40x4" },
            { id: "CHCR0160405", nombre: "CHCR0160405 - 160x40x5" },
            { id: "CHCR0160506", nombre: "CHCR0160506 - 160x50x6" },
            { id: "CHCR0180404", nombre: "CHCR0180404 - 180x40x4" },
            { id: "CHCR0180408", nombre: "CHCR0180408 - 180x40x8" },
            { id: "CHCR0180505", nombre: "CHCR0180505 - 180x50x5" },
            { id: "CHCR0180508", nombre: "CHCR0180508 - 180x50x8" },
            { id: "CHCR0180608", nombre: "CHCR0180608 - 180x60x8" },
            { id: "CHCR0230404", nombre: "CHCR0230404 - 230x40x4" },
            { id: "CHCR0230405", nombre: "CHCR0230405 - 230x40x5" },
            { id: "CHCR0230408", nombre: "CHCR0230408 - 230x40x8" },
            { id: "CHCR0230508", nombre: "CHCR0230508 - 230x50x8" },
            { id: "CHCR0230608", nombre: "CHCR0230608 - 230x60x8" },
            { id: "CHCR0240608", nombre: "CHCR0240608 - 240x60x8" },
            { id: "CHCR0320404", nombre: "CHCR0320404 - 320x40x4" },
            { id: "CHCR0320508", nombre: "CHCR0320508 - 320x50x8" },
            { id: "CHCR0630608", nombre: "CHCR0630608 - 650x60x8" },
            { id: "CHCR0650405", nombre: "CHCR0650405 - 650x40x4" },
            { id: "CHCR0650408", nombre: "CHCR0650408 - 650x40x8" },
            { id: "CHCR0650505", nombre: "CHCR0650505 - 650x50x5" },
            { id: "CHCR0650508", nombre: "CHCR0650508 - 650x50x8" },
            { id: "CHCR0650556", nombre: "CHCR0650556 - 650x55x6" },
            { id: "CHCR0650708", nombre: "CHCR0650708 - 650x70x8" }
        ] 
    },
    "CHCR_MD": { 
        codigoBase: "CHCR_MD", categoriaImg: "Cuchillas", carpetaImg: "CHCR_MD", 
        titulo: "Cuchilla Dorso Ranurado Metal duro CHCR", marca: "Ilma", 
        caracteristicasBasicas: { "Marca": "Ilma", "Material": "Metal duro", "Uso": "Maderas duras y abrasivas", "Formato": "Dorso Ranurado" }, 
        variantes: [
            { id: "CHCR0060608M", nombre: "CHCR0060608M - 60x60x10 ALT:30mm" },
            { id: "CHCR0100608M", nombre: "CHCR0100608M - 100x60x10 ALT:30mm" },
            { id: "CHCR0130608M", nombre: "CHCR0130608M - 130x60x10 ALT:30mm" },
            { id: "CHCR0150608M", nombre: "CHCR0150608M - 150x60x10 ALT:30mm" },
            { id: "CHCR0180608M", nombre: "CHCR0180608M - 180x60x10 ALT:30mm" },
            { id: "CHCR0320608M", nombre: "CHCR0320608M - 320x60x10 ALT:30mm" },
            { id: "CHCR06504010", nombre: "CHCR06504010 - 650x40x10" },
            { id: "CHCR06505010", nombre: "CHCR06505010 - 650x50x10/25" },
            { id: "CHCR0650608M", nombre: "CHCR0650608M - 650x60x10 ALT:30mm" }
        ] 
    },
    "CHCECH": { 
        codigoBase: "CHCECH", categoriaImg: "Cuchillas", carpetaImg: "CHC_ECH", 
        titulo: "Cuchilla para Chipera CHCECH", marca: "Ilma", 
        caracteristicasBasicas: { "Marca": "Ilma", "Material": "Acero Especial", "Uso": "Chiperas / Triturado", "Formato": "Chipera" }, 
        variantes: [
            { id: "CHCECH300152", nombre: "CHCECH300152 - 300x152x20.5 4 Ranuras" },
            { id: "CHCECH530851", nombre: "CHCECH530851 - 530x85x14 Lisa 2 aguj Alinea" }
        ] 
    },
    "CBP": { 
        codigoBase: "CBP", categoriaImg: "Cuchillas", carpetaImg: "CBP", 
        titulo: "Cabezal para Cuchillas Planas CBP", marca: "Ilma", 
        caracteristicasBasicas: { "Marca": "Ilma", "Uso": "Cabezales" }, 
        variantes: [
            { id: "CBP1200804", nombre: "CBP1200804 - Y=120 d=40 B=80 Z=4" },
            { id: "CBP1201004", nombre: "CBP1201004 - Y=120 d=40 B=100 Z=4" },
            { id: "CBP1201304", nombre: "CBP1201304 - Y=120 d=40 B=130 Z=4" },
            { id: "CBP1201604", nombre: "CBP1201604 - Y=120 d=40 B=160 Z=4" },
            { id: "CBP1201804", nombre: "CBP1201804 - Y=120 d=40 B=180 Z=4" },
            { id: "CBP1202204", nombre: "CBP1202204 - Y=120 d=40 B=230 Z=4" }
        ] 
    },
    "CBRH": { 
        codigoBase: "CBRH", categoriaImg: "Cuchillas", carpetaImg: "CBRH", 
        titulo: "Cuchilla para Cabezal CBRH", marca: "Ilma", 
        caracteristicasBasicas: { "Marca": "Ilma", "Uso": "Cabezales" }, 
        variantes: [{ id: "1", nombre: "Consultar medidas" }] 
    },
    "CBR": { 
        codigoBase: "CBR", categoriaImg: "Cuchillas", carpetaImg: "CBR", 
        titulo: "Cabezal para Cuchillas Dorso Ranurado CBR", marca: "Ilma", 
        caracteristicasBasicas: { "Marca": "Ilma", "Uso": "Cabezales Dorso Ranurado" }, 
        variantes: [
            { id: "CBR1220604", nombre: "CBR1220604 - Y=122 B=60 Z=4" },
            { id: "CBR1221004", nombre: "CBR1221004 - Y=122 B=100 d=40 Z=4" },
            { id: "CBR1221304", nombre: "CBR1221304 - Y=122 B=130 Z=4" },
            { id: "CBR1221504", nombre: "CBR1221504 - Y=122 B=150 Z=4" },
            { id: "CBR1221804", nombre: "CBR1221804 - Y=122 B=180 Z=4" },
            { id: "CBR1222304", nombre: "CBR1222304 - Y=122 B=230 Z=4" },
            { id: "CBR1222404", nombre: "CBR1222404 - Y=122 B=240 Z=4" },
            { id: "PRESET", nombre: "PRESET - Alineador de Cuchillas" }
        ]
    },

    // ---------------------------------------------------------
    // CABEZALES FREUD  (categoriaImg: "Cabezales")
    //  - Cada página vive en HTML/CBZ/<código>.html y detecta su
    //    familia por prefijo (startsWith). carpetaImg apunta a la
    //    carpeta real dentro de imagenes/herramientas/Cabezales/.
    //  - Las familias agrupan por las primeras letras del código
    //    (ej. TP junta TP22M/TP23M/TP31M/TP40M/TPSCM) y los modelos
    //    se listan como variantes de una misma publicación.
    //  - Si una variante tiene carpeta propia con su código, la
    //    galería la usa primero; si no, cae en carpetaImg (familia).
    // ---------------------------------------------------------

    // --- Cepilladores ---
    "T102M": {
        codigoBase: "T102M", categoriaImg: "Cabezales", carpetaImg: "T102M",
        titulo: "Cabezal Cepillador HM", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Cepillado y aplanado de madera" },
        variantes: [
            { id: "T102M AC3", nombre: "T102M AC3 - Cepillador D=125mm" },
            { id: "T102M AF3", nombre: "T102M AF3 - Cepillador para Aplanar D=125mm" }
        ]
    },
    "T194M": {
        codigoBase: "T194M", categoriaImg: "Cabezales", carpetaImg: "T194M-BB3",
        titulo: "Cabezal Cepillador Corte Alterno HM", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Cepillado y aplanado de madera" },
        variantes: [
            { id: "T194M BB3", nombre: "T194M BB3 - Cabezal Cepillador Corte Alterno D=125mm" }
        ]
    },
    "TM06M": {
        codigoBase: "TM06M", categoriaImg: "Cabezales", carpetaImg: "TM06M",
        titulo: "Cabezal Cepillador Helicoidal HM", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Cepillado y aplanado de madera (bajo ruido)" },
        variantes: [
            { id: "TM06M AB3", nombre: "TM06M AB3 - Cepillador Helicoidal D=125mm" },
            { id: "TM06M AD3", nombre: "TM06M AD3 - Cepillador Helicoidal D=125mm" },
            { id: "TM06M AH3", nombre: "TM06M AH3 - Cepillador Helicoidal D=125mm" },
            { id: "TM06M AL3", nombre: "TM06M AL3 - Cepillador Helicoidal D=125mm" },
            { id: "TM06M CG3", nombre: "TM06M CG3 - Cepillador Helicoidal D=120mm" }
        ]
    },

    // --- Ranuradores ---
    "T198M": {
        codigoBase: "T198M", categoriaImg: "Cabezales", carpetaImg: "T198M",
        titulo: "Cabezal Ranurador HM", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Ranurado de madera" },
        variantes: [
            { id: "T198M FC3", nombre: "T198M FC3 - Cabezal Ranurador D=140mm" },
            { id: "T198M GC3", nombre: "T198M GC3 - Cabezal Ranurador D=140mm" }
        ]
    },
    "F107M": {
        codigoBase: "F107M", categoriaImg: "Cabezales", carpetaImg: "F107M",
        titulo: "Cabezal para Ranurar Regulable con Precortante", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Ranurado de madera (regulable)" },
        variantes: [
            { id: "F107M AB3", nombre: "F107M AB3 - Ranurar Regulable c/Precortante D=150mm" }
        ]
    },

    // --- Finger Joint (Juntar) ---
    "TW": {
        codigoBase: "TW", categoriaImg: "Cabezales", carpetaImg: "TW01MAB3",
        titulo: "Cabezal para Juntar (Finger Joint)", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Uniones Finger Joint" },
        variantes: [
            { id: "TW01M AB3", nombre: "TW01M AB3 - Para Juntar Perfil Intercambiable D=136mm" },
            { id: "TW20M BF3", nombre: "TW20M BF3 - Para Juntar D=140mm" }
        ]
    },
    "FG46S": {
        codigoBase: "FG46S", categoriaImg: "Cabezales", carpetaImg: "FG46S",
        titulo: "Cabezal Juntas Minizinken", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Uniones Finger Joint (minizinken)" },
        variantes: [
            { id: "FG46S CB2", nombre: "FG46S CB2 - Juntas Minizinken D=160mm" }
        ]
    },

    // --- Multiperfil ---
    "TP": {
        codigoBase: "TP", categoriaImg: "Cabezales", carpetaImg: "TP23M AB3",
        titulo: "Cabezal Multiperfil", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Multiperfil" },
        variantes: [
            { id: "TP22M AB3", nombre: "TP22M AB3 - 1/2 Círculo Exterior D=120mm" },
            { id: "TP23M AB3", nombre: "TP23M AB3 - 1/2 Círculo Exterior D=120mm" },
            { id: "TP31M AB3", nombre: "TP31M AB3 - 1/4 Círculo Ext. R8-10-12-15 D=150mm" },
            { id: "TP31M CB3", nombre: "TP31M CB3 - 1/4 Círculo Ext. R8-10-12-15-17 D=160mm" },
            { id: "TP40M AB3", nombre: "TP40M AB3 - Para Multiperfiles D=160mm" },
            { id: "TPSCM AB3", nombre: "TPSCM AB3 - Multiuso para Madera 22mm D=160mm" }
        ]
    },
    "TD": {
        codigoBase: "TD", categoriaImg: "Cabezales", carpetaImg: "TD51M",
        titulo: "Cabezal Replan para Multiperfil", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Multiperfil (replan)" },
        variantes: [
            { id: "TD21M GB3", nombre: "TD21M GB3 - Replan con 5 Perfiles D=140mm" },
            { id: "TD52M HB3", nombre: "TD52M HB3 - Replan D=200mm" }
        ]
    },
    "TF04MC": {
        codigoBase: "TF04MC", categoriaImg: "Cabezales", carpetaImg: "TF04MC",
        titulo: "Cabezal Perfil Universal Ch", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Multiperfil (perfil universal)" },
        variantes: [
            { id: "TF04MC GE3", nombre: "TF04MC GE3 - Perfil Universal Ch Intercambiable D=144mm" },
            { id: "TF04MC GH3", nombre: "TF04MC GH3 - Perfil Universal Ch Afilable D=144mm" }
        ]
    },
    "GL20701M": {
        codigoBase: "GL20701M", categoriaImg: "Cabezales", carpetaImg: "GL20701M",
        titulo: "Cabezal Multiperfil Estandar", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Metal duro", "Uso": "Multiperfil" },
        variantes: [
            { id: "GL20701M", nombre: "GL20701M - Estandar 207 x 30-34" }
        ]
    }
};

/* ==========================================================================
   2. CONFIGURACIÓN DE COTIZACIÓN POR MAIL
   ========================================================================== */
// Ruta dedicada a cotizaciones (separada del formulario de contacto general).
const ENDPOINT_COTIZACION = "https://servidor-page-wt.onrender.com/enviar-cotizacion";
const WHATSAPP_NUMERO = "5491157528428";

/* ==========================================================================
   3. LÓGICA DE INTERFAZ Y RENDERIZADO INTELIGENTE
   ========================================================================== */

let productoActualInfo = null;
let codigoReal = "";

/**
 * Detecta la familia a la que pertenece un código de archivo.
 */
function detectarFamilia(codigo) {
    const keys = Object.keys(baseDatosProductos).sort((a, b) => b.length - a.length);
    for (let key of keys) {
        if (codigo === key) return baseDatosProductos[key];
    }
    for (let key of keys) {
        if (codigo.startsWith(key)) return baseDatosProductos[key];
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function() {

    let ruta = window.location.pathname;
    let nombreArchivo = ruta.split('/').pop();
    let codigoLimpio = decodeURIComponent(nombreArchivo.replace('.html', '').trim());

    codigoReal = codigoLimpio;

    productoActualInfo = detectarFamilia(codigoReal);

    cargarEstructuraProducto(productoActualInfo);

    // Inyectamos el botón "Pedir cotización" y el modal en todas las páginas
    // de producto, sin necesidad de tocar los 47 HTML. El botón verde original
    // de WhatsApp se oculta dentro de esta función.
    inyectarBotonYModalCotizacion();
});

// Cache del manifiesto de galería (lista de fotos REALES por carpeta). Se descarga
// una sola vez por sesión y se cachea; así la galería pide únicamente las fotos que
// existen, en vez de sondear decenas de nombres inexistentes (404) en cada producto.
let _galeriaManifestPromise = null;
function cargarGaleriaManifest() {
    if (!_galeriaManifestPromise) {
        // 'no-cache' = el navegador revalida con el servidor en cada carga (304 si no
        // cambió, liviano). Así, al regenerar y subir el manifiesto, las fotos nuevas
        // aparecen sin necesidad de cambiar versiones ni tocar código.
        _galeriaManifestPromise = fetch('../../../imagenes/herramientas/galeria-manifest.json', { cache: 'no-cache' })
            .then(r => r.ok ? r.json() : {})
            .catch(() => ({}));
    }
    return _galeriaManifestPromise;
}

function renderizarGaleria(codigoActivo, info) {
    const contenedorImagen = document.querySelector(".producto-imagen");
    if (!contenedorImagen) return;

    const defaultLogo = "../../../imagenes/logos/WoodTools.png";
    let carpetaBase = info.carpetaImg;

    if (codigoActivo && (codigoActivo.startsWith("MCD03") || codigoActivo.startsWith("MCI03"))) {
        carpetaBase = "Familias MCD  MCI 3";
    } else if (codigoActivo && (codigoActivo.startsWith("MCD15") || codigoActivo.startsWith("MCI15"))) {
        carpetaBase = "Familias MCD  MCI 2";
    } else if (codigoActivo && codigoActivo.startsWith("TW20M")) {
        // Familia TW (cabezales para juntar): cada modelo tiene carpeta propia
        carpetaBase = "TW20M BF3";
    }

    let carpetasImg = [carpetaBase];
    if (codigoActivo && codigoActivo !== info.codigoBase) {
        carpetasImg = [codigoActivo, carpetaBase];
    }
    // Si el código activo coincide con la carpeta base, evitamos duplicar la galería
    carpetasImg = [...new Set(carpetasImg)];

    // Fallback: SOLO se usa si la carpeta no figura en el manifiesto (foto nueva
    // todavía no indexada, o manifiesto ausente). Set acotado de nombres comunes.
    const combinacionesSeguras = [
        "1 (1).jpg", "1 (1).png", "1.jpg", "1.jpeg", "1.png", "1 (2).jpg", "1 (3).jpg", "Incisor.png",
        "2.jpg", "2.jpeg", "2.png", "3.jpg", "3.jpeg", "3.png", "4.jpg", "4.jpeg", "4.png",
        "5.jpg", "5.jpeg", "5.png", "6.jpg", "6.jpeg", "6.png", "7.jpg", "7.jpeg", "7.png",
        "8.jpg", "8.jpeg", "8.png", "9.jpg", "9.jpeg", "9.png", "10.jpg", "10.jpeg", "10.png"
    ];

    cargarGaleriaManifest().then(manifest => {
        // Si el manifiesto cargó bien, confiamos en él: las carpetas que no figuran
        // NO existen en disco -> se saltean (cero pedidos 404). El sondeo por nombres
        // comunes solo se usa si el manifiesto no se pudo cargar (ausente/red caída).
        const manifestOk = manifest && Object.keys(manifest).length > 0;
        let galeriaHTML = `<div class="galeria-miniaturas">`;
        carpetasImg.forEach(carpeta => {
            const basePath = `../../../imagenes/herramientas/${info.categoriaImg}/${carpeta}/`;
            const key = `${info.categoriaImg}/${carpeta}`;
            const lista = manifestOk ? (manifest[key] || []) : combinacionesSeguras;
            lista.forEach(nombre => {
                galeriaHTML += `<img src="${basePath}${nombre}" class="mini-img"
                    onload="window.setMainImage(this)"
                    onerror="this.style.display='none'; this.classList.remove('mini-img');"
                    onclick="cambiarImagen(this)">`;
            });
        });
        galeriaHTML += `</div>`;
        galeriaHTML += `
            <div id="zoom-container" class="zoom-container">
                <img id="main-image" src="${defaultLogo}" alt="${info.titulo}">
            </div>
        `;
        contenedorImagen.innerHTML = galeriaHTML;
        setTimeout(activarZoom, 200);
    });
}

// Máquina de destino (punto 7): misma lógica que filtros.js. Se muestra como
// característica en la ficha de cada producto.
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
        [/^F2C/, 'Tupí, machimbradora o moldurera'],
        [/^F1M|^F2M/, 'Machimbradora'],
        [/^FCPV/, 'Machimbradora o moldurera'],
        [/^FCT/, 'Machimbradora o moldurera'],
        [/^FA/, 'Machimbradora o moldurera'],
        [/^FG46S/, 'Tupí'],
        [/^FMES|^FME/, 'Tupí'],
        [/^FMR/, 'Tupí'],
        [/^FRP|^FPP/, 'CNC o nesting'],
        [/^FP/, 'Tupí'],
        [/^FR12/, 'Ingletadora o máquina de mano'],
        [/^FRG|^FRINR|^FRIR|^FRPI|^FRI|^FRS/, 'Tupí'],
        [/^FZS/, 'Machimbradora o moldurera'],
        [/^FR/, 'Machimbradora o moldurera'],
        [/^GL/, 'Escuadradora'],
        [/^CB/, 'Cepilladora, moldurera o machimbradora'],
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
    for (const r of reglas) if (r[0].test(c)) return r[1];
    switch (categoria) {
        case 'Sierras': return 'Escuadradora, mesa de banco o seccionadora horizontal';
        case 'Fresas': return 'Tupí';
        case 'Mechas': return 'Centro de perforado o agujereadora múltiple';
        case 'Cabezales': return 'Machimbradora, moldurera o cepilladora';
        case 'Cuchillas': return 'Cepilladora, moldurera o machimbradora';
        default: return null;
    }
}

function cargarEstructuraProducto(info) {
    if(!info) {
        info = {
            codigoBase: "Generico", categoriaImg: "Generico", carpetaImg: "Generico",
            titulo: "Herramienta", marca: "Consultar",
            caracteristicasBasicas: { "Marca": "Consultar" },
            variantes: [{ id: codigoReal, nombre: "Consultar especificaciones" }]
        };
    }

    const tituloDOM = document.getElementById("producto-titulo");
    const marcaDOM = document.querySelector(".producto-info .marca");

    // Título base SIN código (el código va en el desplegable / medidas)
    let tituloBase = info.titulo.split('(')[0].trim();
    if (info.codigoBase) {
        const reCod = new RegExp('\\s+' + info.codigoBase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*$', 'i');
        tituloBase = tituloBase.replace(reCod, '').trim();
    }
    const esSierraOMecha = info.categoriaImg === "Sierras" || info.categoriaImg === "Mechas";
    // Sierras para melamina: título propio "Sierra para Melamina para [máquina] de [Ø]mm y [Z] dientes"
    const CODIGOS_MELAMINA = ["LU2C", "LU3D", "LU3E", "LU3F", "LSB", "FR12L", "LG3D", "SSK12", "F03FS"];
    const esMelamina = CODIGOS_MELAMINA.indexOf(info.codigoBase) !== -1;

    // Marca a mostrar (puntos 4 y 5): Sierras = marca real (Freud/Franzoi);
    // Cuchillas = Ilma; Diamante = sin marca; el resto = "Nordutensili" si lo es,
    // o "Genérica" en cualquier otro caso.
    let marcaFinal;
    if (info.categoriaImg === "Diamante") marcaFinal = null;
    else if (info.categoriaImg === "Sierras") marcaFinal = info.marca;
    else if (info.categoriaImg === "Cuchillas") marcaFinal = "Ilma";
    else marcaFinal = /nordutensili/i.test(info.marca || "") ? "Nordutensili" : "Genérica";

    if (marcaDOM) {
        if (marcaFinal) marcaDOM.innerText = `Marca: ${marcaFinal}`;
        else marcaDOM.style.display = "none";
    }

    // --- Extrae medidas desde el "nombre" de una variante ---
    // Formatos: "D: 250mm | B: 3.2mm | d: 30mm | Z: 80", "D=150 B=22 d=40 Z=4",
    //           "Y=4mm L=58mm", "RECTA #5mm Z:4", etc.
    function analizarMedidas(nombre) {
        const desc = nombre && nombre.includes(' - ') ? nombre.split(' - ').slice(1).join(' - ') : (nombre || '');
        const g = re => { const m = desc.match(re); return m ? m[1] : null; };
        return {
            ext:     g(/\bD\s*[:=]\s*([\d.,]+)/) || g(/\bY\s*[:=]\s*([\d.,]+)/) || g(/#\s*([\d.,]+)/),
            int:     g(/\bd\s*[:=]\s*([\d.,]+)/),
            ancho:   g(/\bB\s*[:=]\s*([\d.,]+)/),
            dientes: g(/\bZ\s*[:=]\s*([\dxX+]+)/),
            largo:   g(/\bLT\s*[:=]\s*([\d.,]+)/) || g(/\bL\s*[:=]\s*([\d.,]+)/)
        };
    }
    // Etiqueta legible para el desplegable (sin código)
    function etiquetaVariante(nombre) {
        const desc = nombre && nombre.includes(' - ') ? nombre.split(' - ').slice(1).join(' - ') : (nombre || '');
        const m = analizarMedidas(nombre);
        const partes = [];
        if (m.ext)     partes.push(`Ø ext ${m.ext}mm`);
        if (m.int)     partes.push(`Ø int ${m.int}mm`);
        if (m.ancho)   partes.push(`Ancho ${m.ancho}mm`);
        if (m.dientes) partes.push(`Z ${m.dientes}`);
        if (m.largo)   partes.push(`Largo ${m.largo}mm`);
        // Prefijo descriptivo (palabras sin dígitos ni :/=/#), ej "RECTA"
        const pref = [];
        for (const t of desc.split(/\s+/)) { if (/[:=#]/.test(t) || /\d/.test(t)) break; if (t) pref.push(t); }
        const prefTxt = pref.join(' ').trim();
        if (partes.length === 0) return desc || "Consultar especificaciones";
        return (prefTxt ? prefTxt + ' — ' : '') + partes.join(' · ');
    }

    const selector = document.getElementById("variante-selector");
    if (selector) {
        selector.innerHTML = "";

        let indicePreseleccion = -1;
        if (info.variantes && info.variantes.length > 0) {
            indicePreseleccion = info.variantes.findIndex(v => v.id === codigoReal);
        }

        if (info.variantes.length === 1) {
            const v0 = info.variantes[0];
            selector.innerHTML = `<option value="${v0.id}" data-nombre="${v0.nombre}" selected>${etiquetaVariante(v0.nombre)}</option>`;
        } else {
            if (indicePreseleccion === -1) {
                selector.innerHTML = `<option value="${info.codigoBase}" disabled selected>-- Elegí una medida / opción --</option>`;
            }
            info.variantes.forEach((v, i) => {
                let seleccion = (i === indicePreseleccion) ? "selected" : "";
                selector.innerHTML += `<option value="${v.id}" data-nombre="${v.nombre}" ${seleccion}>${etiquetaVariante(v.nombre)}</option>`;
            });
        }

        selector.onchange = function() {
            renderizarGaleria(this.value, info);
            actualizarMedidas();
        };
    }

    renderizarGaleria(codigoReal, info);

    const filas = document.querySelectorAll(".tabla-caracteristicas tr");
    filas.forEach(fila => {
        const th = fila.querySelector(".caracteristica-label");
        const td = fila.querySelector(".caracteristica-value");
        if (th && td) {
            const etiqueta = th.innerText.trim();
            if (etiqueta === "Marca") {
                if (marcaFinal) { td.innerText = marcaFinal; }
                else { fila.style.display = "none"; }
                return;
            }
            if (etiqueta === "Código de artículo") {
                fila.style.display = "none";
            } else {
                let encontrado = false;
                for (let key in info.caracteristicasBasicas) {
                    if (etiqueta.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(etiqueta.toLowerCase())) {
                        td.innerText = info.caracteristicasBasicas[key];
                        encontrado = true;
                        break;
                    }
                }
                if(!encontrado) td.innerText = "Consultar";
            }
        }
    });

    // --- Máquina de destino (punto 7): fila fija en características ---
    const maquinaProd = maquinaDeProducto(info.codigoBase, info.categoriaImg);
    const tablaMaq = document.querySelector(".tabla-caracteristicas");
    if (maquinaProd && tablaMaq && !tablaMaq.querySelector(".fila-maquina")) {
        const trMaq = document.createElement("tr");
        trMaq.className = "fila-maquina";
        trMaq.innerHTML = `<th class="caracteristica-label">Máquina</th><td class="caracteristica-value">${maquinaProd}</td>`;
        tablaMaq.appendChild(trMaq);
    }

    // Actualiza título (sierras/mechas) y filas de medidas según la variante elegida
    function actualizarMedidas() {
        const v = selector ? info.variantes.find(x => x.id === selector.value) : info.variantes[0];
        const m = analizarMedidas(v ? v.nombre : '');
        if (tituloDOM) {
            const cb = info.caracteristicasBasicas || {};
            if (info.categoriaImg === "Cuchillas" && cb["Formato"] && cb["Material"]) {
                // "Cuchilla [tipo] de [material] de [medida]"
                const tipo = cb["Formato"] === "Chipera" ? "para Chipera" : cb["Formato"];
                const matRaw = cb["Material"];
                const mat = /HSS/i.test(matRaw) ? "HSS" : (/(widia|metal duro)/i.test(matRaw) ? "Metal duro" : matRaw);
                const medida = v ? v.nombre.split(" - ").slice(1).join(" - ").trim() : "";
                tituloDOM.innerText = medida ? `Cuchilla ${tipo} de ${mat} de ${medida}` : `Cuchilla ${tipo} de ${mat}`;
            } else if (esMelamina && m.ext && m.dientes) {
                // "Sierra para Melamina para [primera máquina] de [Ø ext]mm y [Z] dientes"
                const maqMel = maquinaDeProducto(info.codigoBase, info.categoriaImg) || "";
                const primeraMaq = maqMel.split(/,| o /)[0].trim();
                tituloDOM.innerText = `Sierra para Melamina para ${primeraMaq} de ${m.ext}mm y ${m.dientes} dientes`;
            } else if (esSierraOMecha && m.ext) {
                tituloDOM.innerText = `${tituloBase} de ${m.ext}mm`;
            } else {
                tituloDOM.innerText = tituloBase;
            }
        }
        const tabla = document.querySelector(".tabla-caracteristicas");
        if (tabla) {
            tabla.querySelectorAll("tr.fila-medida").forEach(f => f.remove());
            [
                ["Ø exterior", m.ext ? m.ext + " mm" : null],
                ["Ø interior", m.int ? m.int + " mm" : null],
                ["Ancho de corte", m.ancho ? m.ancho + " mm" : null],
                ["Cantidad de dientes", m.dientes || null],
                ["Largo", m.largo ? m.largo + " mm" : null]
            ].forEach(([lbl, val]) => {
                if (!val) return;
                const tr = document.createElement("tr");
                tr.className = "fila-medida";
                tr.innerHTML = `<th class="caracteristica-label">${lbl}</th><td class="caracteristica-value">${val}</td>`;
                tabla.appendChild(tr);
            });
        }
    }
    actualizarMedidas();
}

window.setMainImage = function(elemento) {
    const mainImage = document.getElementById("main-image");
    if (mainImage && !mainImage.hasAttribute("data-loaded")) {
        mainImage.src = elemento.src;
        mainImage.setAttribute("data-loaded", "true");
        elemento.classList.add("activa");
    }
};

function activarZoom() {
    const contenedorZoom = document.getElementById("zoom-container");
    const imagenPrincipal = document.getElementById("main-image");

    if (contenedorZoom && imagenPrincipal) {
        contenedorZoom.addEventListener("mousemove", function(e) {
            if(!imagenPrincipal.src.includes('WoodTools.png')) {
                const rect = contenedorZoom.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                imagenPrincipal.style.transformOrigin = `${x}% ${y}%`;
                imagenPrincipal.style.transform = "scale(2.5)";
            }
        });

        contenedorZoom.addEventListener("mouseleave", function() {
            imagenPrincipal.style.transformOrigin = "center center";
            imagenPrincipal.style.transform = "scale(1)";
        });
    }
}

window.cambiarImagen = function(elemento) {
    const imagenPrincipal = document.getElementById("main-image");
    if (imagenPrincipal && elemento.src) {
        imagenPrincipal.src = elemento.src;
        document.querySelectorAll(".mini-img").forEach(img => img.classList.remove("activa"));
        elemento.classList.add("activa");
    }
};

/* ==========================================================================
   4. UTILIDADES DE PRODUCTO / VARIANTE SELECCIONADA
   ========================================================================== */

function obtenerNombreProducto() {
    let nombreLimpio = productoActualInfo ? productoActualInfo.titulo.split('(')[0].trim() : "Herramienta";
    return (codigoReal && productoActualInfo && codigoReal !== productoActualInfo.codigoBase)
        ? `${nombreLimpio} ${codigoReal}`
        : nombreLimpio;
}

function obtenerVarianteSeleccionada() {
    const selector = document.getElementById("variante-selector");
    if (selector && selector.selectedIndex >= 0) {
        let option = selector.options[selector.selectedIndex];
        if (!option.disabled) {
            return option.getAttribute("data-nombre") || option.text;
        }
    }
    return "";
}

/**
 * Extrae el código/modelo de la variante seleccionada. La variante viene como
 * "SC2504144F - D: 250mm | B: 4.0mm | Z: 14+4"; el modelo es lo previo al " - ".
 * Si no hay guion, usa el value del option (que es el id del modelo).
 */
function obtenerModeloSeleccionado() {
    const selector = document.getElementById("variante-selector");
    if (selector && selector.selectedIndex >= 0) {
        const option = selector.options[selector.selectedIndex];
        if (!option.disabled) {
            const texto = option.getAttribute("data-nombre") || option.text || "";
            const partes = texto.split(" - ");
            if (partes.length > 1 && partes[0].trim()) {
                return partes[0].trim();
            }
            // Sin guion: el value suele ser el id/código del modelo
            if (option.value && option.value !== "") return option.value.trim();
            return texto.trim();
        }
    }
    return "";
}

/* ==========================================================================
   5. MODAL "PEDIR COTIZACIÓN" (mail + whatsapp con datos)
   ========================================================================== */

function inyectarBotonYModalCotizacion() {
    const btnWhatsapp = document.getElementById("btn-whatsapp");

    // Ocultamos el botón verde original de WhatsApp ("Consultar Precio y Stock").
    // Queda solo "Pedir cotización" como acción principal.
    if (btnWhatsapp) {
        btnWhatsapp.style.display = "none";
    }

    // --- Botón "Pedir cotización" (acción principal de la página) ---
    if (!document.getElementById("btn-cotizar-mail")) {
        const btnMail = document.createElement("a");
        btnMail.href = "#";
        btnMail.id = "btn-cotizar-mail";
        btnMail.className = "btn-cotizar-mail";
        btnMail.innerHTML = `<i class="fa-solid fa-envelope"></i> Pedir cotización`;
        btnMail.addEventListener("click", function(e) {
            e.preventDefault();
            abrirModalCotizacion("mail");
        });

        // Lo colocamos donde estaba el botón verde; si no existiera, lo
        // agregamos al contenedor de info del producto.
        if (btnWhatsapp) {
            btnWhatsapp.insertAdjacentElement("afterend", btnMail);
        } else {
            const contenedor = document.querySelector(".producto-info") || document.body;
            contenedor.appendChild(btnMail);
        }
    }

    // --- Estilos del botón y el modal (inyectados una sola vez) ---
    if (!document.getElementById("estilos-cotizacion")) {
        const estilos = document.createElement("style");
        estilos.id = "estilos-cotizacion";
        estilos.textContent = `
            .btn-cotizar-mail {
                display: flex; align-items: center; justify-content: center; gap: 8px;
                background-color: #a41e22; color: #fff; border: none;
                padding: 13px 20px; font-size: 16px; font-weight: bold;
                border-radius: 4px; cursor: pointer; width: 100%;
                margin-top: 8px; text-decoration: none;
                transition: background 0.3s;
            }
            .btn-cotizar-mail:hover { background-color: #7d161a; }
            .btn-cotizar-mail i { font-size: 16px; }

            .wt-modal-overlay {
                position: fixed; inset: 0; background: rgba(0,0,0,0.55);
                display: none; align-items: center; justify-content: center;
                z-index: 9999; padding: 16px;
            }
            .wt-modal-overlay.activo { display: flex; }
            .wt-modal {
                background: #fff; border-radius: 8px; width: 100%; max-width: 480px;
                max-height: 90vh; overflow-y: auto; padding: 26px;
                border-top: 4px solid #a41e22; box-shadow: 0 10px 40px rgba(0,0,0,0.25);
                font-family: inherit;
            }
            .wt-modal h2 { color: #a41e22; margin: 0 0 6px; font-size: 22px; text-align: center; }
            .wt-modal .wt-sub { text-align: center; color: #666; font-size: 14px; margin: 0 0 20px; }
            .wt-modal .wt-prod {
                background: #f5f5f5; border-radius: 4px; padding: 10px 12px;
                font-size: 14px; color: #333; margin-bottom: 18px;
            }
            .wt-field { margin-bottom: 14px; }
            .wt-field label { display: block; font-weight: bold; margin-bottom: 6px; color: #333; font-size: 14px; }
            .wt-field input, .wt-field select {
                width: 100%; padding: 11px; border: 1px solid #ddd; border-radius: 4px;
                font-size: 15px; font-family: inherit; box-sizing: border-box;
            }
            .wt-field input:focus, .wt-field select:focus { outline: none; border-color: #a41e22; }
            .wt-field small { color: #888; font-size: 12px; }
            .wt-row { display: flex; gap: 10px; }
            .wt-row .wt-field { flex: 1; }
            .wt-error { color: #c0392b; font-size: 12px; margin-top: 4px; display: none; }
            .wt-error.activo { display: block; }
            .wt-acciones { display: flex; gap: 10px; margin-top: 18px; }
            .wt-btn {
                flex: 1; border: none; border-radius: 4px; padding: 13px;
                font-size: 15px; font-weight: bold; cursor: pointer; transition: opacity 0.2s;
                display: flex; align-items: center; justify-content: center; gap: 8px;
            }
            .wt-btn:disabled { opacity: 0.6; cursor: not-allowed; }
            .wt-btn-mail { background: #a41e22; color: #fff; }
            .wt-btn-mail:hover { background: #7d161a; }
            .wt-btn-wa { background: #25D366; color: #fff; }
            .wt-btn-wa:hover { background: #1da851; }
            .wt-cerrar {
                background: none; border: none; font-size: 24px; color: #999;
                cursor: pointer; float: right; line-height: 1; margin-top: -8px;
            }
            .wt-estado { text-align: center; font-weight: bold; margin-top: 14px; display: none; }
            @media (max-width: 520px) { .wt-row { flex-direction: column; gap: 0; } }
        `;
        document.head.appendChild(estilos);
    }

    // --- Estructura del modal (inyectada una sola vez) ---
    if (!document.getElementById("wt-modal-overlay")) {
        const overlay = document.createElement("div");
        overlay.id = "wt-modal-overlay";
        overlay.className = "wt-modal-overlay";
        overlay.innerHTML = `
            <div class="wt-modal" role="dialog" aria-modal="true">
                <button type="button" class="wt-cerrar" id="wt-cerrar" aria-label="Cerrar">&times;</button>
                <h2>Pedí tu cotización</h2>
                <p class="wt-sub">Completá tus datos y te respondemos a la brevedad.</p>

                <div class="wt-prod" id="wt-prod-resumen"></div>

                <div class="wt-field">
                    <label for="wt-nombre">Nombre completo *</label>
                    <input type="text" id="wt-nombre" placeholder="Ej: Juan Pérez" autocomplete="name">
                    <div class="wt-error" id="wt-err-nombre">Ingresá tu nombre completo.</div>
                </div>

                <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:14px;">Información de contacto *</label>
                <div class="wt-row">
                    <div class="wt-field">
                        <input type="tel" id="wt-telefono" inputmode="numeric" placeholder="Teléfono (solo números)" autocomplete="tel">
                        <div class="wt-error" id="wt-err-telefono">Ingresá un teléfono válido (solo números).</div>
                    </div>
                    <div class="wt-field">
                        <input type="email" id="wt-email" placeholder="correo@dominio.com" autocomplete="email">
                        <div class="wt-error" id="wt-err-email">Ingresá un email válido (debe terminar en @dominio.com).</div>
                    </div>
                </div>
                <small>Completá al menos uno de los dos.</small>

                <div class="wt-field" style="margin-top:14px;">
                    <label for="wt-es-cliente">¿Ya es cliente de WoodTools? *</label>
                    <select id="wt-es-cliente">
                        <option value="" disabled selected>-- Elegí una opción --</option>
                        <option value="si">Sí, ya soy cliente</option>
                        <option value="no">No, es mi primera consulta</option>
                    </select>
                    <div class="wt-error" id="wt-err-cliente">Indicá si ya sos cliente.</div>
                </div>

                <div class="wt-field" id="wt-campo-cuit" style="display:none;">
                    <label for="wt-cuit">DNI *</label>
                    <input type="text" id="wt-cuit" inputmode="numeric" placeholder="Ej: 30123456 (solo números)">
                    <div class="wt-error" id="wt-err-cuit">Ingresá tu DNI (7 u 8 números).</div>
                </div>

                <div class="wt-acciones">
                    <button type="button" class="wt-btn wt-btn-mail" id="wt-btn-enviar-mail">
                        <i class="fa-solid fa-envelope"></i> Enviar por mail
                    </button>
                    <button type="button" class="wt-btn wt-btn-wa" id="wt-btn-enviar-wa">
                        <i class="fa-brands fa-whatsapp"></i> Enviar por WhatsApp
                    </button>
                </div>

                <p class="wt-estado" id="wt-estado"></p>
            </div>
        `;
        document.body.appendChild(overlay);

        // --- Eventos del modal ---
        document.getElementById("wt-cerrar").addEventListener("click", cerrarModalCotizacion);
        overlay.addEventListener("click", function(e) {
            if (e.target === overlay) cerrarModalCotizacion();
        });

        // Teléfono: solo números
        document.getElementById("wt-telefono").addEventListener("input", function() {
            this.value = this.value.replace(/[^0-9]/g, "");
        });
        // CUIT: solo números
        document.getElementById("wt-cuit").addEventListener("input", function() {
            this.value = this.value.replace(/[^0-9]/g, "");
        });

        // Mostrar/ocultar campo CUIT según sea cliente o no
        document.getElementById("wt-es-cliente").addEventListener("change", function() {
            const campoCuit = document.getElementById("wt-campo-cuit");
            campoCuit.style.display = (this.value === "si") ? "block" : "none";
        });

        document.getElementById("wt-btn-enviar-mail").addEventListener("click", enviarCotizacionMail);
        document.getElementById("wt-btn-enviar-wa").addEventListener("click", enviarCotizacionWhatsApp);
    }
}

function abrirModalCotizacion(origen) {
    const overlay = document.getElementById("wt-modal-overlay");
    if (!overlay) return;

    // Validamos que haya una variante elegida antes de abrir
    const selector = document.getElementById("variante-selector");
    if (selector && !obtenerVarianteSeleccionada()) {
        alert("Por favor, elegí una medida o variante antes de continuar.");
        return;
    }

    // Resumen del producto
    const resumen = document.getElementById("wt-prod-resumen");
    const variante = obtenerVarianteSeleccionada();
    resumen.innerHTML = `<strong>Producto:</strong> ${obtenerNombreProducto()}` +
        (variante ? `<br><strong>Variante:</strong> ${variante}` : "");

    // Reiniciamos estado
    document.getElementById("wt-estado").style.display = "none";
    overlay.classList.add("activo");
}

function cerrarModalCotizacion() {
    const overlay = document.getElementById("wt-modal-overlay");
    if (overlay) overlay.classList.remove("activo");
}

/**
 * Valida los campos del modal. Devuelve un objeto con los datos si es válido,
 * o null si hay errores (mostrando los mensajes correspondientes).
 */
function validarFormularioCotizacion() {
    let ok = true;

    // Helpers para mostrar/ocultar errores
    const setError = (idError, mostrar) => {
        const el = document.getElementById(idError);
        if (el) el.classList.toggle("activo", mostrar);
    };

    const nombre = document.getElementById("wt-nombre").value.trim();
    const telefono = document.getElementById("wt-telefono").value.trim();
    const email = document.getElementById("wt-email").value.trim();
    const esCliente = document.getElementById("wt-es-cliente").value;
    const cuit = document.getElementById("wt-cuit").value.trim();

    // Nombre obligatorio
    setError("wt-err-nombre", false);
    if (nombre.length < 3) { setError("wt-err-nombre", true); ok = false; }

    // Email: debe tener formato usuario@dominio.tld válido. Vacío se permite
    // si hay teléfono; si tiene contenido, debe ser válido.
    // - Antes del @: sin espacios ni @
    // - Después del @: al menos un dominio, un punto, y un TLD de 2+ letras
    // - No permite puntos consecutivos ni punto al final
    const emailRegex = /^[^\s@]+@[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    setError("wt-err-email", false);
    const emailValido = email === "" ? true : emailRegex.test(email);
    if (!emailValido) { setError("wt-err-email", true); ok = false; }

    // Teléfono: si tiene contenido, mínimo 6 dígitos
    setError("wt-err-telefono", false);
    const telefonoValido = telefono === "" ? true : /^[0-9]{6,}$/.test(telefono);
    if (!telefonoValido) { setError("wt-err-telefono", true); ok = false; }

    // Al menos un medio de contacto válido y no vacío
    if (email === "" && telefono === "") {
        setError("wt-err-telefono", true);
        setError("wt-err-email", true);
        ok = false;
    }

    // ¿Es cliente?
    setError("wt-err-cliente", false);
    if (esCliente !== "si" && esCliente !== "no") { setError("wt-err-cliente", true); ok = false; }

    // DNI obligatorio sólo si es cliente
    setError("wt-err-cuit", false);
    if (esCliente === "si") {
        if (!/^[0-9]{7,8}$/.test(cuit)) { setError("wt-err-cuit", true); ok = false; }
    }

    if (!ok) return null;

    return {
        nombre,
        telefono,
        email,
        esCliente, // "si" | "no"
        cuit: esCliente === "si" ? cuit : "",
        producto: obtenerNombreProducto(),
        variante: obtenerVarianteSeleccionada(),
        modelo: obtenerModeloSeleccionado()
    };
}

async function enviarCotizacionMail() {
    const datos = validarFormularioCotizacion();
    if (!datos) return;

    const btn = document.getElementById("wt-btn-enviar-mail");
    const estado = document.getElementById("wt-estado");
    const textoOriginal = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Enviando...`;
    estado.style.display = "none";

    // Payload para la ruta /enviar-cotizacion (campos limpios y separados).
    const payload = {
        nombre: datos.nombre,
        email: datos.email,
        telefono: datos.telefono,
        esCliente: datos.esCliente === "si",
        cuit: datos.cuit,
        producto: datos.producto,
        variante: datos.variante,
        modelo: datos.modelo
    };

    try {
        const respuesta = await fetch(ENDPOINT_COTIZACION, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const resultado = await respuesta.json();

        if (resultado.success) {
            estado.style.display = "block";
            estado.style.color = "green";
            estado.innerText = "¡Consulta enviada! Nos pondremos en contacto a la brevedad.";
            setTimeout(cerrarModalCotizacion, 2500);
        } else {
            throw new Error("El servidor respondió con error");
        }
    } catch (error) {
        estado.style.display = "block";
        estado.style.color = "#c0392b";
        estado.innerText = "Hubo un error al enviar. Probá de nuevo o usá el botón de WhatsApp.";
    } finally {
        btn.disabled = false;
        btn.innerHTML = textoOriginal;
    }
}

function enviarCotizacionWhatsApp() {
    const datos = validarFormularioCotizacion();
    if (!datos) return;

    const mensaje = armarMensajeWhatsApp(datos);

    window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`, "_blank");
    cerrarModalCotizacion();
}

/**
 * Arma el mensaje de WhatsApp en tono natural.
 * Formato: "Hola, quiero pedir cotización de [Herramienta] [medidas], mi nombre
 * es [nombre], mi número es [tel], mi mail es [mail] y [estado cliente]."
 */
function armarMensajeWhatsApp(d) {
    // Herramienta + medidas. La variante suele venir como "CODIGO - medidas";
    // nos quedamos sólo con la parte de medidas para que la frase fluya.
    let medidas = "";
    if (d.variante) {
        const partes = d.variante.split(" - ");
        medidas = partes.length > 1 ? partes.slice(1).join(" - ").trim() : d.variante.trim();
    }
    const herramienta = medidas ? `${d.producto} (${medidas})` : d.producto;

    // Estado del cliente
    let estado;
    if (d.esCliente === "si") {
        estado = `soy cliente, mi DNI es ${d.cuit}`;
    } else {
        estado = `es mi primera consulta`;
    }

    // Armamos las partes de contacto disponibles
    let contacto = [];
    if (d.telefono) contacto.push(`mi número es ${d.telefono}`);
    if (d.email) contacto.push(`mi mail es ${d.email}`);
    const contactoTexto = contacto.length > 0 ? `, ${contacto.join(", ")}` : "";

    return `Hola, quiero pedir cotización de ${herramienta}, mi nombre es ${d.nombre}${contactoTexto} y ${estado}.`;
}