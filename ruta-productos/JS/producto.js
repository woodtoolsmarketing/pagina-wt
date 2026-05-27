/* ==========================================================================
   1. BASE DE CONOCIMIENTO (Sierras, Fresas Puras, Mechas, Diamante y Cuchillas)
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
    // FRESAS ESTÁNDAR (PURAS)
    // ---------------------------------------------------------
    "FRS": {
        codigoBase: "FRS", categoriaImg: "Fresas", carpetaImg: "Recta",
        titulo: "Fresas Rectas HM", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Ranurar y rebajes", "Material": "HM" },
        variantes: [
            { id: "FRS0054", nombre: "FRS0054 - FRESA RECTA DE #5mm Z:4" },
            { id: "FRS0104", nombre: "FRS0104 - FRESA RECTA DE #10mm Z:4" },
            { id: "FRS0106", nombre: "FRS0106 - FRESA RECTA DE #10mm Z:6" },
            { id: "FRS0154", nombre: "FRS0154 - FRESA RECTA DE #15mm Z:4" },
            { id: "FRS0204", nombre: "FRS0204 - FRESA RECTA DE #20mm Z:4 | Axial" },
            { id: "FRS0304", nombre: "FRS0304 - FRESA RECTA DE #30mm Z:4 | Axial" },
            { id: "FRS0404", nombre: "FRS0404 - FRESA RECTA DE #40mm Z:4 | Axial" },
            { id: "FRS0504", nombre: "FRS0504 - FRESA RECTA DE #50mm Z:4 | Axial" },
            { id: "FRS0804", nombre: "FRS0804 - FRESA RECTA DE #80mm Z:4 | Axial" },
            { id: "FRS1006", nombre: "FRS1006 - FRESA RECTA DE 100mm Z:6 | Axial" }
        ]
    },
    "FRI": {
        codigoBase: "FRI", categoriaImg: "Fresas", carpetaImg: "Recta",
        titulo: "Fresas Rectas con Incisores HM", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Ranurar sin astillar", "Material": "HM" },
        variantes: [
            { id: "FRI01542", nombre: "FRI01542 - FR.RECTA C/INCISOR #15mm Z:4+2" },
            { id: "FRI01544", nombre: "FRI01544 - FR.RECTA C/INCISOR #15mm Z:4+4" },
            { id: "FRI01566", nombre: "FRI01566 - FR.RECTA C/INCISOR #15mm Z:6+6" },
            { id: "FRI02042", nombre: "FRI02042 - FR.RECTA C/INCISOR #20mm Z:4+2" },
            { id: "FRI02066", nombre: "FRI02066 - FR.RECTA C/INCISOR #20mm Z:6+6" },
            { id: "FRI03044", nombre: "FRI03044 - FR.RECTA C/INCISOR #30mm Z:4+4" },
            { id: "FRI04066", nombre: "FRI04066 - FR.RECTA C/INCISOR #40mm Z:6+6" },
            { id: "FRI05044", nombre: "FRI05044 - FR.RECTA C/INCISOR #50mm Z:4+4" },
            { id: "FRI10066", nombre: "FRI10066 - FR.RECTA C/INCISOR 100mm Z:6+6" }
        ]
    },
    "F1M": {
        codigoBase: "F1M", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Fresas para Machimbre 1", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Despiece de Machimbre" },
        variantes: [
            { id: "F1M01", nombre: "F1M01 - FR. MACHO | 1/2´ A 3/4´ Z=4" },
            { id: "F1M03", nombre: "F1M03 - FR. RECTA PARA HEMBRA | 1/2´ A 3/4´ Z=4" },
            { id: "F1M04", nombre: "F1M04 - JGO.S.C. REG.HEMBRA | 1/2´ A 3/4´ Z=16" },
            { id: "F1M08", nombre: "F1M08 - FR. CHANFLE 23º | 1/2´ A 3/4´ Z=4" },
            { id: "F1M09", nombre: "F1M09 - FR. CHANFLE 45º | 1/2´ A 3/4´ Z=4" },
            { id: "F1M10", nombre: "F1M10 - Jgo. Reg. Hembra Mach. Piso | D=180/200 d=30 Z=24+6+6" },
            { id: "F1M12", nombre: "F1M12 - FR. BAJOFONDO C/S BISEL | 1/2´ A 3/4´ Z=4 L=10mm" },
            { id: "F1M13", nombre: "F1M13 - FR. BAJOFONDO C/S BISEL | 1/2´ A 3/4´ Z=4 L=15mm" }
        ]
    },
    "F2C": {
        codigoBase: "F2C", categoriaImg: "Fresas", carpetaImg: "Cepillado",
        titulo: "Fresas de Medio Círculo", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Moldura de Medio Círculo" },
        variantes: [
            { id: "F2C014", nombre: "F2C014 - FR. 1/2 CIRCULO DE 1/2 Z=4" },
            { id: "F2C016", nombre: "F2C016 - FR. 1/2 CIRCULO DE 1/2 Z=6" },
            { id: "F2C054", nombre: "F2C054 - FR. 1/2 CIRCULO DE 5/8 Z=4" },
            { id: "F2C056", nombre: "F2C056 - FR. 1/2 CIRCULO DE 5/8 Z=6" },
            { id: "F2C104", nombre: "F2C104 - FR. 1/2 CIRCULO DE 3/4 Z=4" },
            { id: "F2C106", nombre: "F2C106 - FR. 1/2 CIRCULO DE 3/4 Z=6" },
            { id: "F2C154", nombre: "F2C154 - FR. 1/2 CIRCULO DE 1 Z=4" },
            { id: "F2C156", nombre: "F2C156 - FR. 1/2 CIRCULO DE 1 Z=6" },
            { id: "F2C204", nombre: "F2C204 - FR. 1/2 CIRCULO DE 1 1/2 Z=4" },
            { id: "F2C206", nombre: "F2C206 - FR. 1/2 CIRCULO DE 1 1/2 Z=6" },
            { id: "F2C254", nombre: "F2C254 - FR. 1/2 CIRCULO DE 2 Z=4" },
            { id: "F2C256", nombre: "F2C256 - FR. 1/2 CIRCULO DE 2 Z=6" }
        ]
    },
    "FA": {
        codigoBase: "FA", categoriaImg: "Fresas", carpetaImg: "Recta",
        titulo: "Fresas de Ángulo 25° a 45°", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Ángulo" },
        variantes: [
            { id: "FA104", nombre: "FA104 - FR. ANGULO 25° A 45° 10mm Z:4" },
            { id: "FA106", nombre: "FA106 - FR. ANGULO 25° A 45° 10mm Z:6" },
            { id: "FA154", nombre: "FA154 - FR. ANGULO 25° A 45° 15mm Z:4" },
            { id: "FA156", nombre: "FA156 - FR. ANGULO 25° A 45° 15mm Z:6" },
            { id: "FA204", nombre: "FA204 - FR. ANGULO 25° A 45° 20mm Z:4" },
            { id: "FA206", nombre: "FA206 - FR. ANGULO 25° A 45° 20mm Z:6" },
            { id: "FA254", nombre: "FA254 - FR. ANGULO 25° A 45° 25mm Z:4" },
            { id: "FA256", nombre: "FA256 - FR. ANGULO 25° A 45° 25mm Z:6" },
            { id: "FA304", nombre: "FA304 - FR. ANGULO 25° A 45° 30mm Z:4" },
            { id: "FA306", nombre: "FA306 - FR. ANGULO 25° A 45° 30mm Z:6" },
            { id: "FA354", nombre: "FA354 - FR. ANGULO 25° A 45° 35mm Z:4" },
            { id: "FA356", nombre: "FA356 - FR. ANGULO 25° A 45° 35mm Z:6" },
            { id: "FA404", nombre: "FA404 - FR. ANGULO 25° A 45° 40mm Z:4" },
            { id: "FA406", nombre: "FA406 - FR. ANGULO 25° A 45° 40mm Z:6" },
            { id: "FA454", nombre: "FA454 - FR. ANGULO 25° A 45° 45mm Z:4" },
            { id: "FA456", nombre: "FA456 - FR. ANGULO 25° A 45° 45mm Z:6" },
            { id: "FA504", nombre: "FA504 - FR. ANGULO 25° A 45° 50mm Z:4" },
            { id: "FA506", nombre: "FA506 - FR. ANGULO 25° A 45° 50mm Z:6" }
        ]
    },

    // ---------------------------------------------------------
    // MECHAS Y BROCAS
    // ---------------------------------------------------------
    "MPD": { codigoBase: "MPD", categoriaImg: "Mechas", carpetaImg: "Familias MPD  MPI", titulo: "Mecha Pasante (Derecha)", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Pasantes" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MPI": { codigoBase: "MPI", categoriaImg: "Mechas", carpetaImg: "Familias MPD  MPI", titulo: "Mecha Pasante (Izquierda)", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Pasantes" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MCD-MCI3": { codigoBase: "MCD-MCI3", categoriaImg: "Mechas", carpetaImg: "Familias MCD  MCI 3", titulo: "Mecha Ciega MCD-MCI", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Ciegas" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MCD-MCI2": { codigoBase: "MCD-MCI2", categoriaImg: "Mechas", carpetaImg: "Familias MCD  MCI 2", titulo: "Mecha Ciega MCD-MCI", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Ciegas" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MCD-MCI": { codigoBase: "MCD-MCI", categoriaImg: "Mechas", carpetaImg: "Familias MCD  MCI", titulo: "Mecha Ciega MCD-MCI", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Ciegas" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MCD": { codigoBase: "MCD", categoriaImg: "Mechas", carpetaImg: "Familias MCD  MCI", titulo: "Mecha Ciega (Derecha)", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Ciegas" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MCI": { codigoBase: "MCI", categoriaImg: "Mechas", carpetaImg: "Familias MCD  MCI", titulo: "Mecha Ciega (Izquierda)", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Ciegas" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MBI": { codigoBase: "MBI", categoriaImg: "Mechas", carpetaImg: "bisagra", titulo: "Fresa Bisagra (Izquierda)", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Widia", "Uso": "Bisagras" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MBD": { codigoBase: "MBD", categoriaImg: "Mechas", carpetaImg: "bisagra", titulo: "Fresa Bisagra (Derecha)", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Widia", "Uso": "Bisagras" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "BRDD": { codigoBase: "BRDD", categoriaImg: "Mechas", carpetaImg: "Ciega", titulo: "Broca para Defondadora", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Defondado" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MIDN": { codigoBase: "MIDN", categoriaImg: "Mechas", carpetaImg: "Familia MIDN", titulo: "Mecha Integral MIDN", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Metal Duro Integral", "Uso": "Mecanizado CNC" }, variantes: [{ id: "1", nombre: "Consultar especificaciones" }] },
    "MID": { codigoBase: "MID", categoriaImg: "Mechas", carpetaImg: "Familia MID", titulo: "Mecha Integral MID", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Metal Duro Integral", "Uso": "Mecanizado CNC" }, variantes: [{ id: "1", nombre: "Consultar especificaciones" }] },
    "MIIR": { codigoBase: "MIIR", categoriaImg: "Mechas", carpetaImg: "integral", titulo: "Mecha Integral Recta p/ CNC", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Metal Duro Integral", "Uso": "Mecanizado CNC" }, variantes: [{ id: "1", nombre: "Consultar especificaciones" }] },
    "MI": { codigoBase: "MI", categoriaImg: "Mechas", carpetaImg: "Familia MI", titulo: "Mecha Integral MI", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Metal Duro Integral", "Uso": "Mecanizado CNC" }, variantes: [{ id: "1", nombre: "Consultar especificaciones" }] },
    "MAM-PINZA": { codigoBase: "MAM-PINZA", categoriaImg: "Mechas", carpetaImg: "Familias MAM  PINZA/mandril para máquina", titulo: "Mandril Adaptador / Pinza", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Sujeción de herramientas" }, variantes: [{ id: "1", nombre: "Consultar modelo" }] },
    "MAM": { codigoBase: "MAM", categoriaImg: "Mechas", carpetaImg: "Familias MAM  PINZA/mandril para máquina", titulo: "Mandril Adaptador", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Sujeción de herramientas" }, variantes: [{ id: "1", nombre: "Consultar modelo" }] },
    "PINZAER": { codigoBase: "PINZAER", categoriaImg: "Mechas", carpetaImg: "Familias MAM  PINZA/mandril para máquina", titulo: "Pinza ER para Sujeción", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Sujeción en Mandriles" }, variantes: [{ id: "1", nombre: "Consultar ER32 / ER40" }] },
    "MCAR": { codigoBase: "MCAR", categoriaImg: "Mechas", carpetaImg: "Ciega", titulo: "Mecha Ciega con Avellanador", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforado y avellanado simultáneo" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MBA": { codigoBase: "MBA", categoriaImg: "Mechas", carpetaImg: "Familia MBA", titulo: "Mecha para Barrenos MBA", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Barrenado" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MB": { codigoBase: "MB", categoriaImg: "Mechas", carpetaImg: "Familia MB", titulo: "Mecha para Bisagras MB", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Bisagras" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "AVD": { codigoBase: "AVD", categoriaImg: "Mechas", carpetaImg: "Ciega", titulo: "Avellanador", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Avellanado" }, variantes: [{ id: "1", nombre: "Consultar modelos (AVD / AVI)" }] },
    "Router_Franzoi": { codigoBase: "Router_Franzoi", categoriaImg: "Mechas", carpetaImg: "compresión", titulo: "Mecha para Router CNC", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Mecanizado Router CNC" }, variantes: [{ id: "1", nombre: "Consultar especificaciones" }] },

    "F04C014": {
        codigoBase: "F04C014", categoriaImg: "Fresas", carpetaImg: "F04C014",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "F04C014", nombre: "F04C014 - Consultar medidas" }]
    },
    "F04C016": {
        codigoBase: "F04C016", categoriaImg: "Fresas", carpetaImg: "F04C016",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "F04C016", nombre: "F04C016 - Consultar medidas" }]
    },
    "F04C054": {
        codigoBase: "F04C054", categoriaImg: "Fresas", carpetaImg: "F04C054",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "F04C054", nombre: "F04C054 - Consultar medidas" }]
    },
    "F04C056": {
        codigoBase: "F04C056", categoriaImg: "Fresas", carpetaImg: "F04C056",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "F04C056", nombre: "F04C056 - Consultar medidas" }]
    },
    "F1M01": {
        codigoBase: "F1M01", categoriaImg: "Fresas", carpetaImg: "F1M01",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "F1M01", nombre: "F1M01 - Consultar medidas" }]
    },
    "F1M03": {
        codigoBase: "F1M03", categoriaImg: "Fresas", carpetaImg: "F1M03",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "F1M03", nombre: "F1M03 - Consultar medidas" }]
    },
    "FP2226": {
        codigoBase: "FP2226", categoriaImg: "Fresas", carpetaImg: "FP2226",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "FP2226", nombre: "FP2226 - Consultar medidas" }]
    },
    "FP402": {
        codigoBase: "FP402", categoriaImg: "Fresas", carpetaImg: "FP402",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "FP402", nombre: "FP402 - Consultar medidas" }]
    },
    "FRG0510": {
        codigoBase: "FRG0510", categoriaImg: "Fresas", carpetaImg: "FRG0510",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "FRG0510", nombre: "FRG0510 - Consultar medidas" }]
    },
    "FRG1039": {
        codigoBase: "FRG1039", categoriaImg: "Fresas", carpetaImg: "FRG1039",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "FRG1039", nombre: "FRG1039 - Consultar medidas" }]
    },
    "FRI01566": {
        codigoBase: "FRI01566", categoriaImg: "Fresas", carpetaImg: "FRI01566",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "FRI01566", nombre: "FRI01566 - Consultar medidas" }]
    },
    "FRP5533": {
        codigoBase: "FRP5533", categoriaImg: "Fresas", carpetaImg: "FRP5533",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "FRP5533", nombre: "FRP5533 - Consultar medidas" }]
    },
    "FRS0606": {
        codigoBase: "FRS0606", categoriaImg: "Fresas", carpetaImg: "FRS0606",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "FRS0606", nombre: "FRS0606 - Consultar medidas" }]
    },
    "FRS0704": {
        codigoBase: "FRS0704", categoriaImg: "Fresas", carpetaImg: "FRS0704",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "FRS0704", nombre: "FRS0704 - Consultar medidas" }]
    },
    "JFDE4": {
        codigoBase: "JFDE4", categoriaImg: "Fresas", carpetaImg: "JFDE4",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "JFDE4", nombre: "JFDE4 - Consultar medidas" }]
    },
    "JFE254": {
        codigoBase: "JFE254", categoriaImg: "Fresas", carpetaImg: "JFE254",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "JFE254", nombre: "JFE254 - Consultar medidas" }]
    },
    "JFE5022": {
        codigoBase: "JFE5022", categoriaImg: "Fresas", carpetaImg: "JFE5022",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "JFE5022", nombre: "JFE5022 - Consultar medidas" }]
    },
    "JFE8Z124": {
        codigoBase: "JFE8Z124", categoriaImg: "Fresas", carpetaImg: "JFE8Z124",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "JFE8Z124", nombre: "JFE8Z124 - Consultar medidas" }]
    },
    "JFMPV14": {
        codigoBase: "JFMPV14", categoriaImg: "Fresas", carpetaImg: "JFMPV14",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "JFMPV14", nombre: "JFMPV14 - Consultar medidas" }]
    },
    "JFPMS10": {
        codigoBase: "JFPMS10", categoriaImg: "Fresas", carpetaImg: "JFPMS10",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "JFPMS10", nombre: "JFPMS10 - Consultar medidas" }]
    },
    "LIMMUE": {
        codigoBase: "LIMMUE", categoriaImg: "Fresas", carpetaImg: "LIMMUE",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "LIMMUE", nombre: "LIMMUE - Consultar medidas" }]
    },

    "FMR04": {
        codigoBase: "FMR04", categoriaImg: "Fresas", carpetaImg: "FMR04",
        titulo: "Fresa Multi-perfil FMR04", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "FMR04", nombre: "FMR04 - Consultar medidas" }]
    },
    "CB13006100": {
        codigoBase: "CB13006100", categoriaImg: "Fresas", carpetaImg: "CB13006100",
        titulo: "Fresa Recta Helicoidal CB13006100", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Ranurar y rebajes", "Material": "Metal Duro" },
        variantes: [{ id: "CB13006100", nombre: "CB13006100 - Consultar medidas" }]
    },
    "CB0750660": {
        codigoBase: "CB0750660", categoriaImg: "Fresas", carpetaImg: "CB0750660",
        titulo: "Fresa Recta Helicoidal CB0750660", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Ranurar y rebajes", "Material": "Metal Duro" },
        variantes: [{ id: "CB0750660", nombre: "CB0750660 - Consultar medidas" }]
    },

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
        titulo: "Mecha de Diamante para Bisagra", marca: "Franzoi", 
        caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Diamante PCD", "Uso": "Bisagras" }, 
        variantes: [
            { id: "MBDD3557", nombre: "MBDD3557 - D: 35mm | L: 57.5mm" },
            { id: "MBID3557", nombre: "MBID3557 - D: 35mm | L: 57mm" }
        ] 
    },
    "MDD": { 
        codigoBase: "MDD", categoriaImg: "Diamante", carpetaImg: "Mechas diamante", 
        titulo: "Mecha Diamante Forante HM", marca: "Franzoi", 
        caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Diamante PCD / HM", "Uso": "Perforaciones" }, 
        variantes: [
            { id: "MDD1225H", nombre: "MDD1225H - D: 12mm | L: 25mm | H: 2.5" },
            { id: "MDD1643H", nombre: "MDD1643H - D: 16mm | L: 43mm | H: 2.5" }
        ] 
    },

    // ---------------------------------------------------------
    // CUCHILLAS
    // ---------------------------------------------------------
    "CHC_HSS": { codigoBase: "CHC_HSS", categoriaImg: "Cuchillas", carpetaImg: "CHC_HSS", titulo: "Cuchilla Plana HSS CHC", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Material": "HSS (Acero Súper Rápido)", "Uso": "Maderas blandas y semi-duras", "Formato": "Plana" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "CHC_MD": { codigoBase: "CHC_MD", categoriaImg: "Cuchillas", carpetaImg: "CHC_MD", titulo: "Cuchilla Plana Widia CHC", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Metal Duro (Widia)", "Uso": "Maderas duras y abrasivas", "Formato": "Plana" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "CHCR_HSS": { codigoBase: "CHCR_HSS", categoriaImg: "Cuchillas", carpetaImg: "CHCR_HSS", titulo: "Cuchilla Dorso Ranurado HSS CHCR", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Material": "HSS (Acero Súper Rápido)", "Uso": "Maderas blandas y semi-duras", "Formato": "Dorso Ranurado" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "CHCR_MD": { codigoBase: "CHCR_MD", categoriaImg: "Cuchillas", carpetaImg: "CHCR_MD", titulo: "Cuchilla Dorso Ranurado Widia CHCR", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Metal Duro (Widia)", "Uso": "Maderas duras y abrasivas", "Formato": "Dorso Ranurado" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "CHCECH": { codigoBase: "CHCECH", categoriaImg: "Cuchillas", carpetaImg: "CHC_ECH", titulo: "Cuchilla para Chipera CHCECH", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Acero Especial", "Uso": "Chiperas / Triturado", "Formato": "Chipera" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "CBP": { codigoBase: "CBP", categoriaImg: "Cuchillas", carpetaImg: "CBP", titulo: "Cuchilla para Cabezal CBP", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cabezales" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "CBR": { codigoBase: "CBR", categoriaImg: "Cuchillas", carpetaImg: "CBR", titulo: "Cuchilla para Cabezal CBR", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cabezales" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "CBRH": { codigoBase: "CBRH", categoriaImg: "Cuchillas", carpetaImg: "CBRH", titulo: "Cuchilla para Cabezal CBRH", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cabezales" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] }
};

/* ==========================================================================
   2. LÓGICA DE INTERFAZ Y RENDERIZADO INTELIGENTE
   ========================================================================== */

let productoActualInfo = null;
let codigoReal = "";

document.addEventListener("DOMContentLoaded", function() {
    
    let ruta = window.location.pathname;
    let nombreArchivo = ruta.split('/').pop();
    let codigoLimpio = decodeURIComponent(nombreArchivo.replace('.html', '').trim());
    
    codigoReal = codigoLimpio; 

    let keys = Object.keys(baseDatosProductos).sort((a, b) => b.length - a.length);
    for (let key of keys) {
        if (codigoReal.startsWith(key) || codigoReal.includes(key)) {
            productoActualInfo = baseDatosProductos[key];
            break;
        }
    }
    
    cargarEstructuraProducto(productoActualInfo);

    const btnWhatsapp = document.getElementById("btn-whatsapp");
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", function(e) {
            e.preventDefault();
            generarEnlaceWhatsApp();
        });
    }
});

function cargarEstructuraProducto(info) {
    if(!info) {
        info = {
            codigoBase: "Generico", categoriaImg: "Generico", carpetaImg: "Generico",
            titulo: "Herramienta", marca: "Consultar",
            caracteristicasBasicas: { "Marca": "Consultar" },
            variantes: [{ nombre: "Consultar especificaciones" }]
        };
    }

    const tituloDOM = document.getElementById("producto-titulo");
    const marcaDOM = document.querySelector(".producto-info .marca");
    
    if (tituloDOM) {
        let tituloLimpio = info.titulo.split('(')[0].trim();
        tituloDOM.innerText = `${tituloLimpio} ${codigoReal}`;
    }
    if (marcaDOM) marcaDOM.innerText = `Marca: ${info.marca}`;

    const selector = document.getElementById("variante-selector");
    if (selector) {
        selector.innerHTML = ""; 
        if (info.variantes.length === 1) {
            selector.innerHTML = `<option value="${info.variantes[0].nombre}" selected>${info.variantes[0].nombre}</option>`;
        } else {
            selector.innerHTML = `<option value="" disabled selected>-- Elegí una medida / opción --</option>`;
            info.variantes.forEach(v => {
                selector.innerHTML += `<option value="${v.nombre}">${v.nombre}</option>`;
            });
        }
    }

    const contenedorImagen = document.querySelector(".producto-imagen");
    if (contenedorImagen) {
        const defaultLogo = "../../../imagenes/logos/WoodTools.png";
        let basePath = `../../../imagenes/herramientas/${info.categoriaImg}/${info.carpetaImg}/`;
        let galeriaHTML = `<div class="galeria-miniaturas">`;
        
        const combinacionesSeguras = [
            "1.jpg", "1 (1).jpg", "1%20(1).jpg", "1.jpeg", "1 (2).jpg", "1%20(2).jpg", "1 (3).jpg", "1%20(3).jpg", "1.png", "Incisor.png",
            "2.jpg", "2 (1).jpg", "2%20(1).jpg", "2.jpeg", "2 (2).jpg", "2%20(2).jpg", "2.png",
            "3.jpg", "3 (1).jpg", "3%20(1).jpg", "3.jpeg", "3 (2).jpg", "3%20(2).jpg", "3.png",
            "4.jpg", "4 (1).jpg", "4%20(1).jpg", "4.jpeg", "4 (2).jpg", "4%20(2).jpg", "4.png",
            "5.jpg", "5 (1).jpg", "5%20(1).jpg", "5.jpeg", "5 (2).jpg", "5%20(2).jpg", "5.png",
            "6.jpg", "6 (1).jpg", "6%20(1).jpg", "6.jpeg", "6 (2).jpg", "6%20(2).jpg", "6.png",
            "7.jpg", "7 (1).jpg", "7%20(1).jpg", "7.jpeg", "7 (2).jpg", "7%20(2).jpg", "7.png",
            "8.jpg", "8 (1).jpg", "8%20(1).jpg", "8.jpeg", "8 (2).jpg", "8%20(2).jpg", "8.png",
            "9.jpg", "9 (1).jpg", "9%20(1).jpg", "9.jpeg", "9 (2).jpg", "9%20(2).jpg", "9.png",
            "10.jpg", "10 (1).jpg", "10%20(1).jpg", "10.jpeg", "10 (2).jpg", "10%20(2).jpg", "10.png"
        ];

        combinacionesSeguras.forEach(nombreFotoSeguro => {
            let rutaSegura = `${basePath}${nombreFotoSeguro}`;
            galeriaHTML += `<img src="${rutaSegura}" class="mini-img" 
                onload="window.setMainImage(this)" 
                onerror="this.style.display='none'; this.classList.remove('mini-img');" 
                onclick="cambiarImagen(this)">`;
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
    let nombreProducto = `${nombreLimpio} ${codigoReal}`;
    let varianteSeleccionada = selector ? selector.value : "";

    if (selector && !selector.value) {
        alert("Por favor, elegí una medida o variante antes de consultar.");
        return;
    }

    const mensaje = `Hola! Consulto por ${nombreProducto}. Me interesa la variante: ${varianteSeleccionada}. ¿Me podrían pasar precio y stock?`;
    window.open(`https://wa.me/5491134609057?text=${encodeURIComponent(mensaje)}`, "_blank");
}