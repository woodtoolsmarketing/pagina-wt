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
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Carburo de tungsteno (HM) Widia", "Uso": "Melamina (Ángulo Positivo - Máquinas Industriales)", "Tipo de diente": "Trapezoidal-Plano / Positivo" },
        variantes: [ { id: "LG3D 0400", nombre: "LG3D 0400 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LG3D 0600", nombre: "LG3D 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" }, { id: "LG3D 0800", nombre: "LG3D 0800 - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" } ]
    },
    "SSK12": {
        codigoBase: "SSK12", categoriaImg: "Sierras", carpetaImg: "SSK12",
        titulo: "Sierra para Melamina", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Melamina (Máquinas Industriales)" },
        variantes: [{ id: "SSK12 001", nombre: "SSK12 001 - Consultar medidas" }]
    },
    "LU3F": {
        codigoBase: "LU3F", categoriaImg: "Sierras", carpetaImg: "LU3F 0200",
        titulo: "Sierra para Melamina", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aglomerado, MDF, Madera y Melamina", "Tipo de diente": "Ángulo Negativo" },
        variantes: [ { id: "LU3F 0200", nombre: "LU3F 0200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LU3F 0300", nombre: "LU3F 0300 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" }, { id: "LU3F 0400", nombre: "LU3F 0400 - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" } ]
    },
    "LU3E": {
        codigoBase: "LU3E", categoriaImg: "Sierras", carpetaImg: "LU3E 0200",
        titulo: "Sierra para Melamina", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Melamina" },
        variantes: [{ id: "LU3E 0200", nombre: "LU3E 0200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }]
    },
    "FR12L": {
        codigoBase: "FR12L", categoriaImg: "Sierras", carpetaImg: "FR12L",
        titulo: "Sierra para Melamina y Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aglomerado, MDF, Madera y Melamina" },
        variantes: [{ id: "FR12L001H", nombre: "FR12L001H - D: 185mm | B: 2.4mm | d: 20mm | Z: 60" }]
    },
    "LU3D": {
        codigoBase: "LU3D", categoriaImg: "Sierras", carpetaImg: "LU3D 0200",
        titulo: "Sierra para Melamina", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Melamina" },
        variantes: [ { id: "LU3D 0200", nombre: "LU3D 0200 - D: 220mm | B: 3.2mm | d: 30mm | Z: 64" }, { id: "LU3D 0600", nombre: "LU3D 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" } ]
    },
    "F03FS": {
        codigoBase: "F03FS", categoriaImg: "Sierras", carpetaImg: "F03FS",
        titulo: "Sierra Circular Multiuso", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aglomerado, MDF, Madera y Melamina" },
        variantes: [{ id: "F03FS09801", nombre: "F03FS09801 - D: 185mm | B: 2.4mm | d: 20mm | Z: 60" }]
    },
    "LSB": {
        codigoBase: "LSB", categoriaImg: "Sierras", carpetaImg: "LSB25003X",
        titulo: "Sierra Circular Extra Silenciosa", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Placas Bilaminadas / Melamina" },
        variantes: [ { id: "LSB25003X", nombre: "LSB25003X - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LSB30003X", nombre: "LSB30003X - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" }, { id: "LSB35003X", nombre: "LSB35003X - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" } ]
    },
    "LG2A": {
        codigoBase: "LG2A", categoriaImg: "Sierras", carpetaImg: "LG2A",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera maciza, blanda y dura", "Tipo de diente": "Alterno" },
        variantes: [ { id: "LG2A 1700", nombre: "LG2A 1700 - D: 250mm | B: 3.2mm | d: 30mm | Z: 30" }, { id: "LG2A 2100", nombre: "LG2A 2100 - D: 300mm | B: 3.2mm | d: 30mm | Z: 36" }, { id: "LG2A 2800", nombre: "LG2A 2800 - D: 350mm | B: 3.5mm | d: 30mm | Z: 42" } ]
    },
    "LG2B": {
        codigoBase: "LG2B", categoriaImg: "Sierras", carpetaImg: "LG2B",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera" },
        variantes: [ { id: "LG2B 0800", nombre: "LG2B 0800 - D: 250mm | B: 3.2mm | d: 30mm | Z: 20" }, { id: "LG2B 1100", nombre: "LG2B 1100 - D: 300mm | B: 3.2mm | d: 30mm | Z: 24" } ]
    },
    "LU2A": {
        codigoBase: "LU2A", categoriaImg: "Sierras", carpetaImg: "LU2A",
        titulo: "Sierra para Madera Blanda y Dura", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera blanda y dura a favor/contra de la veta" },
        variantes: [ { id: "LU2A 1600", nombre: "LU2A 1600 - D: 250mm | B: 3.2mm | d: 30mm | Z: 48" }, { id: "LU2A 2100", nombre: "LU2A 2100 - D: 300mm | B: 3.2mm | d: 30mm | Z: 60" } ]
    },
    "LU2B": {
        codigoBase: "LU2B", categoriaImg: "Sierras", carpetaImg: "LU2B 2100",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera" },
        variantes: [ { id: "LU2B 0700", nombre: "LU2B 0700 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LU2B 1200", nombre: "LU2B 1200 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" } ]
    },
    "LU2C": {
        codigoBase: "LU2C", categoriaImg: "Sierras", carpetaImg: "LU2C 1200",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera" },
        variantes: [ { id: "LU2C 1200", nombre: "LU2C 1200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LU2C 1500", nombre: "LU2C 1500 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" } ]
    },
    "LU1D": {
        codigoBase: "LU1D", categoriaImg: "Sierras", carpetaImg: "LU1D",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera (Multipunto)" },
        variantes: [ { id: "LU1D 0500", nombre: "LU1D 0500 - D: 250mm | B: 3.2mm | d: 30mm | Z: 48" } ]
    },
    "LU1F": {
        codigoBase: "LU1F", categoriaImg: "Sierras", carpetaImg: "LU1F",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera" },
        variantes: [ { id: "LU1F 0600", nombre: "LU1F 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 60" } ]
    },
    "FI14M": {
        codigoBase: "FI14M", categoriaImg: "Sierras", carpetaImg: "FI14M AA3",
        titulo: "Sierra de Ranurar", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Ranurado de Madera" },
        variantes: [ { id: "FI14M AA3", nombre: "FI14M AA3 - D: 150mm | B: 1.5mm | d: 30mm | Z: 18" }, { id: "FI14M AE3", nombre: "FI14M AE3 - D: 150mm | B: 2.0mm | d: 30mm | Z: 18" } ]
    },
    "FR09W": {
        codigoBase: "FR09W", categoriaImg: "Sierras", carpetaImg: "FR09W003H",
        titulo: "Sierra Fina para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera" },
        variantes: [ { id: "FR09W003H", nombre: "FR09W003H - D: 184mm | B: 1.5mm | d: 20mm | Z: 40" } ]
    },
    "LP40M": {
        codigoBase: "LP40M", categoriaImg: "Sierras", carpetaImg: "LP40M 016P",
        titulo: "Sierra Fina para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera" },
        variantes: [ { id: "LP40M 016P", nombre: "LP40M 016P - D: 184mm | B: 2.4mm | d: 20mm | Z: 40" } ]
    },
    "LU4A": {
        codigoBase: "LU4A", categoriaImg: "Sierras", carpetaImg: "LU4A 0100",
        titulo: "Sierra para Aluminio y Plásticos", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aluminio y Plásticos" },
        variantes: [ { id: "LU4A 0100", nombre: "LU4A 0100 - D: 250mm | B: 2.8mm | d: 30mm | Z: 80" }, { id: "LU4A 0200", nombre: "LU4A 0200 - D: 300mm | B: 2.8mm | d: 30mm | Z: 96" } ]
    },
    "LU5B": {
        codigoBase: "LU5B", categoriaImg: "Sierras", carpetaImg: "LU5B",
        titulo: "Sierra para Aluminio", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aluminio y Metales No Ferrosos" },
        variantes: [ { id: "LU5B 0200", nombre: "LU5B 0200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LU5B 0600", nombre: "LU5B 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" } ]
    },
    "LU5D": {
        codigoBase: "LU5D", categoriaImg: "Sierras", carpetaImg: "LU5D",
        titulo: "Sierra para Aluminio", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aluminio" },
        variantes: [ { id: "LU5D 0500", nombre: "LU5D 0500 - D: 250mm | B: 3.2mm | d: 32mm | Z: 80" }, { id: "LU5D 1100", nombre: "LU5D 1100 - D: 300mm | B: 3.2mm | d: 32mm | Z: 96" } ]
    },
    "LU5E": {
        codigoBase: "LU5E", categoriaImg: "Sierras", carpetaImg: "LU5E",
        titulo: "Sierra para Aluminio Gruesa", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aluminio" },
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
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [{ id: "TR15MD CA3", nombre: "D: 300mm | B: 30mm" }]
    },
    "TR15MS": {
        codigoBase: "TR15MS", categoriaImg: "Sierras", carpetaImg: "TR15MS",
        titulo: "Triturador Simple", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [{ id: "TR15MS CA3", nombre: "D: 300mm | B: 30mm" }]
    },
    "LT14": {
        codigoBase: "LT14", categoriaImg: "Sierras", carpetaImg: "TR15MS",
        titulo: "Sierra Trituradora LT14", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Triturador" },
        variantes: [{ id: "1", nombre: "Consultar Giro (MD/MS)" }]
    },
    "LT16": {
        codigoBase: "LT16", categoriaImg: "Sierras", carpetaImg: "TR15MS",
        titulo: "Sierra Trituradora LT16", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Triturador" },
        variantes: [{ id: "1", nombre: "Consultar Giro (MD/MS)" }]
    },
    "LT18": {
        codigoBase: "LT18", categoriaImg: "Sierras", carpetaImg: "TR15MS",
        titulo: "Sierra Trituradora LT18", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Triturador" },
        variantes: [{ id: "1", nombre: "Consultar Giro (MD/MS)" }]
    },
    "SCC_Freud": {
        codigoBase: "SCC_Freud", categoriaImg: "Sierras", carpetaImg: "Incisor",
        titulo: "Incisor SCC Freud", marca: "Freud",
        caracteristicasBasicas: { "Material": "Widia", "Uso": "Incisor" },
        variantes: [{ id: "1", nombre: "Consultar Medidas" }]
    },
    "SCC_Franzoi": {
        codigoBase: "SCC_Franzoi", categoriaImg: "Sierras", carpetaImg: "Incisor Santi",
        titulo: "Incisor SCC Franzoi", marca: "Franzoi",
        caracteristicasBasicas: { "Material": "Widia", "Uso": "Incisor" },
        variantes: [{ id: "1", nombre: "Consultar Medidas" }]
    },
    "SC_Franzoi": {
        codigoBase: "SC_Franzoi", categoriaImg: "Sierras", carpetaImg: "Sierra con racadores Franzoi",
        titulo: "Sierra Múltiple SC", marca: "Franzoi",
        caracteristicasBasicas: { "Material": "Metal Duro", "Uso": "Madera (Múltiples)" },
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
        codigoBase: "FRS", categoriaImg: "Fresas", carpetaImg: "Recta",
        titulo: "Fresa Recta HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Ranurar y rebajes", "Material": "Widia (Metal Duro)" },
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
        codigoBase: "FRI", categoriaImg: "Fresas", carpetaImg: "Recta",
        titulo: "Fresa Recta con Incisores HM", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Ranurar sin astillar", "Material": "Widia (Metal Duro)" },
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
        codigoBase: "F2C", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Fresa de Medio Círculo", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Moldura de Medio Círculo", "Material": "Widia (Metal Duro)" },
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
        codigoBase: "F04C", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Fresa 1/4 Círculo", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Moldura 1/4 Círculo", "Material": "Widia (Metal Duro)" },
        variantes: [
            { id: "F04C014", nombre: "F04C014 - 1/4 CIRCULO 1/2 A 3/4 Z:4" },
            { id: "F04C016", nombre: "F04C016 - 1/4 CIRCULO 1/2 A 3/4 Z:6" },
            { id: "F04C054", nombre: "F04C054 - 1/4 CIRCULO 3/4 A 1 1/4 Z:4" },
            { id: "F04C056", nombre: "F04C056 - 1/4 CIRCULO 3/4 A 1 1/4 Z:6" }
        ]
    },

    // --- Sub-rubro 011: Fresas Rinconeras ---
    "FR": {
        codigoBase: "FR", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Fresa Rinconera", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Rinconera / Moldura", "Material": "Widia (Metal Duro)" },
        variantes: [
            { id: "FR014", nombre: "FR014 - RINCONERA DE 3/4 Z:4" },
            { id: "FR016", nombre: "FR016 - RINCONERA DE 3/4 Z:6" },
            { id: "FR054", nombre: "FR054 - RINCONERA DE 1' Z:4" },
            { id: "FR056", nombre: "FR056 - RINCONERA DE 1' Z:6" },
            { id: "FR104", nombre: "FR104 - RINCONERA DE 1 1/4 Z:4" },
            { id: "FR106", nombre: "FR106 - RINCONERA DE 1 1/4 Z:6" },
            { id: "FR154", nombre: "FR154 - RINCONERA DE 1 1/2 Z:4" },
            { id: "FR156", nombre: "FR156 - RINCONERA DE 1 1/2 Z:6" }
        ]
    },

    // --- Sub-rubro 014: Fresas de Ángulo ---
    "FA": {
        codigoBase: "FA", categoriaImg: "Fresas", carpetaImg: "Recta",
        titulo: "Fresa de Ángulo 25° a 45°", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Ángulo / Chanfle", "Material": "Widia (Metal Duro)" },
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
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Moldura Prof. 10mm", "Material": "Widia (Metal Duro)" },
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
        codigoBase: "FRG", categoriaImg: "Fresas", carpetaImg: "Recta",
        titulo: "Fresa / Juego Regulable", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Ranurado Regulable", "Material": "Widia (Metal Duro)" },
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
        codigoBase: "FP", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Fresa Palos de Escoba / Multimoldura", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Palos de escoba / Perfilado", "Material": "Widia (Metal Duro)" },
        variantes: [
            { id: "FP2226", nombre: "FP2226 - 2 PALOS ESCOBA D=22.5 #60 Z=6" },
            { id: "FP2286", nombre: "FP2286 - 2 PALOS ESCOBA D=28 #75 Z=6" },
            { id: "FP3226", nombre: "FP3226 - 3 PALOS ESCOBA D=22.5 #88 Z=6" },
            { id: "FP3286", nombre: "FP3286 - 3 PALOS ESCOBA D=28 #100 Z=6" },
            { id: "FP4226", nombre: "FP4226 - 4 PALOS ESCOBA D=22.5 #115 Z=6" },
            { id: "FP402", nombre: "FP402 - MULTIMOLDURAS D=150 d=40 #45 Z=2" }
        ]
    },

    // --- Sub-rubro 009: Despiece de Machimbre (F1M) ---
    "F1M": {
        codigoBase: "F1M", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Fresa Despiece de Machimbre (1/2 a 3/4)", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Despiece de Machimbre", "Material": "Widia (Metal Duro)" },
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
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Despiece de Machimbre", "Material": "Widia (Metal Duro)" },
        variantes: [
            { id: "F2M01", nombre: "F2M01 - FR. MACHO 3/4 A 1 1/4 Z=4" },
            { id: "F2M03", nombre: "F2M03 - FR. HEMBRA 3/4 A 1 1/4 Z=4" },
            { id: "F2M09", nombre: "F2M09 - CHANFLE 23° 3/4 A 1 1/4 Z=4" },
            { id: "F2M10", nombre: "F2M10 - CHANFLE 45° 3/4 A 1 1/4 Z=4" }
        ]
    },

    // --- Sub-rubro 008: Fresas de Ensamble (JFE) ---
    "JFE": {
        codigoBase: "JFE", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Juego de Fresas de Ensamble", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Ensamble / Encastre", "Material": "Widia (Metal Duro)" },
        variantes: [
            { id: "JFE254", nombre: "JFE254 - ENSAMBLE #23 P=7 H t=3.5" },
            { id: "JFE5022", nombre: "JFE5022 - ENSAMBLE D=150 d=40 #46mm Z=4 P=5" },
            { id: "JFE8122", nombre: "JFE8122 - ENSAMBLE FINGER A 180° D=150 d=40 Z=4" },
            { id: "JFE8Z122", nombre: "JFE8Z122 - ENSAMBLE 90° y 180° 'A' D=180 #19 a 47 Z=3" },
            { id: "JFE8Z124", nombre: "JFE8Z124 - ENSAMBLE 90° y 180° 'B' D=180 19-47 Z=3" },
            { id: "JFE8Z34", nombre: "JFE8Z34 - ENSAMBLE 90° y 180° 'A' D=150 12 a 22" }
        ]
    },

    // --- Sub-rubro 012: Moldura Puertas y Ventanas (JFMPV) ---
    "JFMPV": {
        codigoBase: "JFMPV", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Juego Moldura Puertas y Ventanas", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Aberturas", "Material": "Widia (Metal Duro)" },
        variantes: [
            { id: "JFMPV14", nombre: "JFMPV14 - MOLD. PTAS. VNA. 3 FRESAS Z:14 35 a 44mm" },
            { id: "JFMPVR", nombre: "JFMPVR - Mold. Contramol. Replan 3Fr. D=180 #35-44 Z=2+2" }
        ]
    },

    // --- Sub-rubro 012: Puerta Mueble de Cocina (JFPMS) ---
    "JFPMS": {
        codigoBase: "JFPMS", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Juego Puerta Mueble de Cocina", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Muebles / Cocinas", "Material": "Widia (Metal Duro)" },
        variantes: [
            { id: "JFPMS10", nombre: "JFPMS10 - PTA. MUEBLE COCINA Y=160 Z=4+6" }
        ]
    },

    // --- Sub-rubro 010: Deck para Machimbre (JFDE / JFDR) ---
    "JFD": {
        codigoBase: "JFD", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Juego Fresas Deck", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Deck / Machimbre", "Material": "Widia (Metal Duro)" },
        variantes: [
            { id: "JFDE4", nombre: "JFDE4 - 2 FR. DECK ESTANDAR #33mm D=150 Z=4" },
            { id: "JFDR4", nombre: "JFDR4 - 2 FR. DECK REGULABLE #10 A 25mm D=150 Z=4" },
            { id: "JFDSG16", nombre: "JFDSG16 - DECK HEMBRA y SC GRAMPA #22mm D=160 Z=6+2x12" }
        ]
    },

    // --- Sub-rubro 011: Limitador Mueble (LIMMUE) ---
    "LIMMUE": {
        codigoBase: "LIMMUE", categoriaImg: "Fresas", carpetaImg: "LIMMUE",
        titulo: "Disco Limitador Mueble Cocina", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Limitador", "Material": "Widia (Metal Duro)" },
        variantes: [
            { id: "LIMMUE", nombre: "LIMMUE - DISCO LIMITADOR MUEBLE COCINA Yext=136" }
        ]
    },

    // --- Sub-rubro 013: Multirradio (FMR) ---
    "FMR": {
        codigoBase: "FMR", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Fresa Multirradio", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Moldura Multirradio", "Material": "Widia (Metal Duro)" },
        variantes: [
            { id: "FMR04", nombre: "FMR04 - MULTIRRADIO D=160 d=40 #55 Z=4" }
        ]
    },

    // --- Sub-rubro 013: Replan Tablero (FRP) ---
    "FRP": {
        codigoBase: "FRP", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Fresa Replan Tablero", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Replan Tablero", "Material": "Widia (Metal Duro)" },
        variantes: [
            { id: "FRP5533", nombre: "FRP5533 - REPLAN TABLERO 55mm Y=200 #55 Z=3+3" }
        ]
    },

    // --- Sub-rubro 018: Cabezales Cepilladores (CB) ---
    "CB": {
        codigoBase: "CB", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Cabezal Cepillador Helicoidal", marca: "WoodTools",
        caracteristicasBasicas: { "Marca": "WoodTools", "Uso": "Cepillado Industrial", "Material": "Widia (Metal Duro)" },
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

    // ---------------------------------------------------------
    // MECHAS Y BROCAS
    // ---------------------------------------------------------
    "MPD": { 
        codigoBase: "MPD", categoriaImg: "Mechas", carpetaImg: "Familias MPD  MPI", 
        titulo: "Mecha Pasante (Derecha)", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Pasantes" }, 
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
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Pasantes" }, 
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
    "MCD-MCI": { codigoBase: "MCD-MCI", categoriaImg: "Mechas", carpetaImg: "Familias MCD  MCI", titulo: "Mecha Ciega MCD-MCI", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Ciegas" }, 
        variantes: [
            { id: "MCD03", nombre: "MCD03 - Y=3mm" }, { id: "MCD04", nombre: "MCD04 - Y=4mm L=57.5 CABO=10x20" }, { id: "MCD0470", nombre: "MCD0470 - Y=4mm L=70mm CABO=10x20" }, { id: "MCD05", nombre: "MCD05 - Y=5mm L=57.5 CABO=10x20" }, { id: "MCD0570", nombre: "MCD0570 - Y=5mm L=70mm CABO=10x20" }, { id: "MCD06", nombre: "MCD06 - Y=6mm L=57.5 CABO=10x20" }, { id: "MCD0670", nombre: "MCD0670 - Y=6mm L=70mm CABO=10x20" }, { id: "MCD0770", nombre: "MCD0770 - Y=7mm LT=70 CABO=10x20" }, { id: "MCD08", nombre: "MCD08 - Y=8mm L=57.5 CABO=10x20" }, { id: "MCD0870", nombre: "MCD0870 - Y=8mm L=70 CABO=10x20" }, { id: "MCD10", nombre: "MCD10 - Y=10mm L=57.5 CABO=10x20" }, { id: "MCD1070", nombre: "MCD1070 - Y=10mm L=70mm CABO=10x20" }, { id: "MCD12", nombre: "MCD12 - Y=12mm L=57.5 CABO=10x20" }, { id: "MCD1270", nombre: "MCD1270 - Y=12mm L=70mm CABO=10x20" }, { id: "MCD1470", nombre: "MCD1470 - Y=14mm L=70mm CABO=10x20" }, { id: "MCD15", nombre: "MCD15 - Y=15mm L=57.5 CABO=10x20" }, { id: "MCD1570", nombre: "MCD1570 - Y=15mm L=70mm CABO=10x20" }, { id: "MCDL05", nombre: "MCDL05 - Y=5 LU=27 LT=57.5 CABO=10x30" }, { id: "MCDL0570", nombre: "MCDL0570 - Y=5 LT=70" }, { id: "MCDL08", nombre: "MCDL08 - Y=8 LU=27 LT=57.5 CABO=10x30" }, { id: "MCDL0870", nombre: "MCDL0870 - Y=8 LT=70" }, { id: "MCDR0570", nombre: "MCDR0570 - Cyflex Skipper Y=5mm LU=45 LT=80" }, { id: "MCDR0670", nombre: "MCDR0670 - Cyflex Skipper Y=6mm LU=45 LT=80" }, { id: "MCDR0870", nombre: "MCDR0870 - Cyflex Skipper Y=8mm LU=45 LT=80" }, { id: "MCE", nombre: "MCE - MECHA ESPECIAL" },
            { id: "MCI03", nombre: "MCI03 - Y=3mm" }, { id: "MCI04", nombre: "MCI04 - Y=4mm L=57.5 CABO=10x20" }, { id: "MCI0470", nombre: "MCI0470 - Y=4mm L=70mm CABO=10x20" }, { id: "MCI05", nombre: "MCI05 - Y=5mm L=57.5mm CABO=10x20" }, { id: "MCI0570", nombre: "MCI0570 - Y=5mm L=70mm CABO=10x20" }, { id: "MCI06", nombre: "MCI06 - Y=6mm L=57.5 CABO=10x20" }, { id: "MCI0670", nombre: "MCI0670 - Y=6mm L=70mm CABO=10x20" }, { id: "MCI0770", nombre: "MCI0770 - Y=7mm LT=70 CABO=10x20" }, { id: "MCI08", nombre: "MCI08 - Y=8mm L=57.5 CABO=10x20" }, { id: "MCI0870", nombre: "MCI0870 - Y=8mm L=70 CABO=10x20" }, { id: "MCI10", nombre: "MCI10 - Y=10mm L=57.5 CABO=10x20" }, { id: "MCI1070", nombre: "MCI1070 - Y=10mm L=70mm CABO=10x20" }, { id: "MCI12", nombre: "MCI12 - Y=12mm L=57.5 CABO=10x20" }, { id: "MCI1270", nombre: "MCI1270 - Y=12mm L=70mm CABO=10x20" }, { id: "MCI1470", nombre: "MCI1470 - Y=14mm L=70mm CABO=10x20" }, { id: "MCI15", nombre: "MCI15 - Y=15mm L=57.5 CABO=10x20" }, { id: "MCI1570", nombre: "MCI1570 - Y=15mm L=70mm CABO=10x20" }, { id: "MCIL05", nombre: "MCIL05 - Y=5 LU=27 LT=57.5 CABO=10x30" }, { id: "MCIL0570", nombre: "MCIL0570 - Y=5 LT=70" }, { id: "MCIL08", nombre: "MCIL08 - Y=8 LU=27 LT=57.5 CABO=10x30" }, { id: "MCIL0870", nombre: "MCIL0870 - Y=8 LT=70" }, { id: "MCIR0570", nombre: "MCIR0570 - Cyflex Skipper Y=5mm LU=45 LT=80" }, { id: "MCIR0670", nombre: "MCIR0670 - Cyflex Skipper Y=6mm LU=45 LT=80" }, { id: "MCIR0870", nombre: "MCIR0870 - Cyflex Skipper Y=8mm LU=45 LT=80" }
        ] 
    },
    "MCD": { 
        codigoBase: "MCD", categoriaImg: "Mechas", carpetaImg: "Familias MCD  MCI", 
        titulo: "Mecha Ciega (Derecha)", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Ciegas" }, 
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
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Ciegas" }, 
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
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Widia", "Uso": "Bisagras" }, 
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
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Widia", "Uso": "Bisagras" }, 
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
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Defondado" }, 
        variantes: [{ id: "BRDD52", nombre: "BRDD52 - L=52mm Z=2 Ycabo=10mm" }] 
    },
    "MIDN": { 
        codigoBase: "MIDN", categoriaImg: "Mechas", carpetaImg: "Familia MIDN", 
        titulo: "Mecha Integral MIDN", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro Integral", "Uso": "Mecanizado CNC" }, 
        variantes: [
            { id: "MIDN0822", nombre: "MIDN0822 - D=8 Z=2+2 LU=22 Compresion" },
            { id: "MIDN1022", nombre: "MIDN1022 - D=10 Z=2+2 LU=22 Compresion" }
        ] 
    },
    "MID": { 
        codigoBase: "MID", categoriaImg: "Mechas", carpetaImg: "Familia MID", 
        titulo: "Mecha Integral MID", marca: "Nordutensili", 
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro Integral", "Uso": "Mecanizado CNC" }, 
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
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro Integral", "Uso": "Mecanizado CNC" }, 
        variantes: [
            { id: "MIIR01042", nombre: "MIIR01042 - ROMPEVIRUTA Y=10 Z=3 LU=42" },
            { id: "MIIR01242", nombre: "MIIR01242 - ROMPEVIRUTA Y=12 Z=3 LU=42" },
            { id: "MIIR01642", nombre: "MIIR01642 - ROMPEVIRUTA Y=16 LU=42 Z=3" }
        ] 
    },
    // Agrupación general para la página "MI" genérica
    "MI": { codigoBase: "MI", categoriaImg: "Mechas", carpetaImg: "Familia MI", titulo: "Mecha Integral MI", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro Integral", "Uso": "Mecanizado CNC" }, 
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
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforado y avellanado simultáneo" }, 
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
        titulo: "Mecha de Diamante para Bisagra", marca: "Nordutensili",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Diamante PCD", "Uso": "Bisagras" },
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
        titulo: "Cuchilla Plana Widia CHC", marca: "Ilma", 
        caracteristicasBasicas: { "Marca": "Ilma", "Material": "Metal Duro (Widia)", "Uso": "Maderas duras y abrasivas", "Formato": "Plana" }, 
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
        titulo: "Cuchilla Dorso Ranurado Widia CHCR", marca: "Ilma", 
        caracteristicasBasicas: { "Marca": "Ilma", "Material": "Metal Duro (Widia)", "Uso": "Maderas duras y abrasivas", "Formato": "Dorso Ranurado" }, 
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
    }
};

/* ==========================================================================
   2. LÓGICA DE INTERFAZ Y RENDERIZADO INTELIGENTE
   ========================================================================== */

let productoActualInfo = null;
let codigoReal = "";

/**
 * Detecta la familia a la que pertenece un código de archivo.
 * Estrategia (en orden):
 * 1. Match EXACTO con una clave (la clave ES el código completo).
 * 2. Match por PREFIJO: la clave más larga con la que el código EMPIEZA.
 * Se ordena por longitud DESC para que, por ejemplo, "FMES..." gane sobre
 * "FMR"/"FA" y "FRI"/"FRS"/"FRG"/"FRP" ganen sobre "FR0", etc.
 * Se usa startsWith (NO includes) para evitar falsos positivos.
 */
function detectarFamilia(codigo) {
    const keys = Object.keys(baseDatosProductos).sort((a, b) => b.length - a.length);

    // 1) Match exacto
    for (let key of keys) {
        if (codigo === key) return baseDatosProductos[key];
    }
    // 2) Match por prefijo (la clave más larga que el código empiece con ella)
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

    const btnWhatsapp = document.getElementById("btn-whatsapp");
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", function(e) {
            e.preventDefault();
            generarEnlaceWhatsApp();
        });
    }
});

function renderizarGaleria(codigoActivo, info) {
    const contenedorImagen = document.querySelector(".producto-imagen");
    if (!contenedorImagen) return;

    const defaultLogo = "../../../imagenes/logos/WoodTools.png";
    let carpetaBase = info.carpetaImg;

    // Lógica específica para MCD/MCI 03 y 15 solicitada (Actualiza la carpeta de imágenes)
    if (codigoActivo && (codigoActivo.startsWith("MCD03") || codigoActivo.startsWith("MCI03"))) {
        carpetaBase = "Familias MCD  MCI 3";
    } else if (codigoActivo && (codigoActivo.startsWith("MCD15") || codigoActivo.startsWith("MCI15"))) {
        carpetaBase = "Familias MCD  MCI 2";
    }

    let carpetasImg = [carpetaBase];
    // Si no estamos en la vista de familia genérica, o si seleccionaron una variante específica,
    // buscamos también la carpeta de esa variante.
    if (codigoActivo && codigoActivo !== info.codigoBase) {
        carpetasImg = [codigoActivo, carpetaBase];
    }

    let galeriaHTML = `<div class="galeria-miniaturas">`;

    const combinacionesSeguras = [
        "1.jpg", "1 (1).jpg", "1%20(1).jpg", "1.jpeg", "1 (2).jpg", "1%20(2).jpg", "1 (3).jpg", "1%20(3).jpg", "1.png", "Incisor.png",
        "2.jpg", "2 (1).jpg", "2%20(1).jpg", "2.jpeg", "2 (2).jpg", "2%20(2).jpg", "2.png",
        "3.jpg", "3 (1).jpg", "3%20(1).jpg", "3.jpeg", "3 (2).jpg", "3%20(2).jpg", "3.png", "3(.jpeg",
        "4.jpg", "4 (1).jpg", "4%20(1).jpg", "4.jpeg", "4 (2).jpg", "4%20(2).jpg", "4.png",
        "5.jpg", "5 (1).jpg", "5%20(1).jpg", "5.jpeg", "5 (2).jpg", "5%20(2).jpg", "5.png",
        "6.jpg", "6 (1).jpg", "6%20(1).jpg", "6.jpeg", "6 (2).jpg", "6%20(2).jpg", "6.png",
        "7.jpg", "7 (1).jpg", "7%20(1).jpg", "7.jpeg", "7 (2).jpg", "7%20(2).jpg", "7.png",
        "8.jpg", "8 (1).jpg", "8%20(1).jpg", "8.jpeg", "8 (2).jpg", "8%20(2).jpg", "8.png",
        "9.jpg", "9 (1).jpg", "9%20(1).jpg", "9.jpeg", "9 (2).jpg", "9%20(2).jpg", "9.png",
        "10.jpg", "10 (1).jpg", "10%20(1).jpg", "10.jpeg", "10 (2).jpg", "10%20(2).jpg", "10.png"
    ];

    carpetasImg.forEach(carpeta => {
        let basePath = `../../../imagenes/herramientas/${info.categoriaImg}/${carpeta}/`;
        combinacionesSeguras.forEach(nombreFotoSeguro => {
            let rutaSegura = `${basePath}${nombreFotoSeguro}`;
            galeriaHTML += `<img src="${rutaSegura}" class="mini-img"
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

    if (tituloDOM) {
        let tituloLimpio = info.titulo.split('(')[0].trim();
        if (codigoReal && codigoReal !== info.codigoBase) {
            tituloDOM.innerText = `${tituloLimpio} ${codigoReal}`;
        } else {
            tituloDOM.innerText = tituloLimpio;
        }
    }
    if (marcaDOM) marcaDOM.innerText = `Marca: ${info.marca}`;

    const selector = document.getElementById("variante-selector");
    if (selector) {
        selector.innerHTML = "";

        let indicePreseleccion = -1;
        if (info.variantes && info.variantes.length > 0) {
            indicePreseleccion = info.variantes.findIndex(v => v.id === codigoReal);
        }

        if (info.variantes.length === 1) {
            selector.innerHTML = `<option value="${info.variantes[0].id}" data-nombre="${info.variantes[0].nombre}" selected>${info.variantes[0].nombre}</option>`;
        } else {
            if (indicePreseleccion === -1) {
                selector.innerHTML = `<option value="${info.codigoBase}" disabled selected>-- Elegí una medida / opción --</option>`;
            }
            info.variantes.forEach((v, i) => {
                let seleccion = (i === indicePreseleccion) ? "selected" : "";
                selector.innerHTML += `<option value="${v.id}" data-nombre="${v.nombre}" ${seleccion}>${v.nombre}</option>`;
            });
        }

        // Listener para que al seleccionar una medida, se actualicen las fotos en tiempo real.
        selector.onchange = function() {
            renderizarGaleria(this.value, info);
        };
    }

    // Renderizamos la galería con la medida precargada
    renderizarGaleria(codigoReal, info);

    const filas = document.querySelectorAll(".tabla-caracteristicas tr");
    filas.forEach(fila => {
        const th = fila.querySelector(".caracteristica-label");
        const td = fila.querySelector(".caracteristica-value");
        if (th && td) {
            const etiqueta = th.innerText.trim();
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

function generarEnlaceWhatsApp() {
    const selector = document.getElementById("variante-selector");
    let nombreLimpio = productoActualInfo ? productoActualInfo.titulo.split('(')[0].trim() : "Herramienta";
    let nombreProducto = (codigoReal && productoActualInfo && codigoReal !== productoActualInfo.codigoBase)
        ? `${nombreLimpio} ${codigoReal}`
        : nombreLimpio;
    
    let varianteSeleccionada = "";
    if (selector && selector.selectedIndex >= 0) {
         let option = selector.options[selector.selectedIndex];
         if(!option.disabled) {
             varianteSeleccionada = option.getAttribute("data-nombre") || option.text;
         }
    }

    if (selector && !varianteSeleccionada) {
        alert("Por favor, elegí una medida o variante antes de consultar.");
        return;
    }

    const mensaje = `Hola! Consulto por ${nombreProducto}. Me interesa la variante: ${varianteSeleccionada}. ¿Me podrían pasar precio y stock?`;
    window.open(`https://wa.me/5491134609057?text=${encodeURIComponent(mensaje)}`, "_blank");
}