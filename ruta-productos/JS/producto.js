/* ==========================================================================
   1. BASE DE CONOCIMIENTO (Con Mapeo Directo a tus Carpetas de Imágenes)
   ========================================================================== */
const baseDatosProductos = {
    // ---------------------------------------------------------
    // SIERRAS
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
    "TR15MS": {
        codigoBase: "TR15MS", categoriaImg: "Sierras", carpetaImg: "TR15MS",
        titulo: "Triturador Simple", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [{ id: "TR15MS CA3", nombre: "D: 300mm | B: 30mm" }]
    },
    "TR15MD": {
        codigoBase: "TR15MD", categoriaImg: "Sierras", carpetaImg: "TR15MS", // Reutiliza carpeta de imágenes
        titulo: "Triturador Doble", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [{ id: "TR15MD CA3", nombre: "D: 300mm | B: 30mm" }]
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
        titulo: "Sierra Franzoi SC", marca: "Franzoi", 
        caracteristicasBasicas: { "Material": "Metal Duro", "Uso": "Madera y Múltiple" }, 
        variantes: [{ id: "1", nombre: "Consultar Medidas" }] 
    },

    // ---------------------------------------------------------
    // MECHAS Y BROCAS
    // ---------------------------------------------------------
    "MPI": { codigoBase: "MPI", categoriaImg: "Mechas", carpetaImg: "Pasante", titulo: "Mecha Pasante (Izquierda)", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Pasantes" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MPD": { codigoBase: "MPD", categoriaImg: "Mechas", carpetaImg: "Pasante", titulo: "Mecha Pasante (Derecha)", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Pasantes" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MCI": { codigoBase: "MCI", categoriaImg: "Mechas", carpetaImg: "Ciega", titulo: "Mecha Ciega (Izquierda)", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Ciegas" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MCD": { codigoBase: "MCD", categoriaImg: "Mechas", carpetaImg: "Ciega", titulo: "Mecha Ciega (Derecha)", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Metal Duro", "Uso": "Perforaciones Ciegas" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MBI": { codigoBase: "MBI", categoriaImg: "Mechas", carpetaImg: "bisagra", titulo: "Fresa Bisagra (Izquierda)", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Widia", "Uso": "Bisagras" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },
    "MBD": { codigoBase: "MBD", categoriaImg: "Mechas", carpetaImg: "bisagra", titulo: "Fresa Bisagra (Derecha)", marca: "Nordutensili", caracteristicasBasicas: { "Marca": "Nordutensili", "Material": "Widia", "Uso": "Bisagras" }, variantes: [{ id: "1", nombre: "Consultar medidas" }] },

    // ---------------------------------------------------------
    // FRESAS Y CUCHILLAS
    // ---------------------------------------------------------
    "FRS": { codigoBase: "FRS", categoriaImg: "Fresas", carpetaImg: "Recta", titulo: "Fresas Rectas HM", marca: "Franzoi / WT", caracteristicasBasicas: { "Marca": "Franzoi / WT", "Uso": "Ranurar y rebajes" }, variantes: [ { id: "1", nombre: "Consultar medida exacta" } ] },
    "FRI": { codigoBase: "FRI", categoriaImg: "Fresas", carpetaImg: "Recta", titulo: "Fresas Rectas con Incisores HM", marca: "Franzoi / WT", caracteristicasBasicas: { "Marca": "Franzoi / WT", "Uso": "Ranurar sin astillar" }, variantes: [ { id: "1", nombre: "Consultar medida exacta" } ] },
    "CHC": { codigoBase: "CHC", categoriaImg: "Cuchillas", carpetaImg: "plana", titulo: "Insertos de corte planas", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cepillado" }, variantes: [ { id: "1", nombre: "HSS o MD - Consultar largos" } ] },
    "CHCR": { codigoBase: "CHCR", categoriaImg: "Cuchillas", carpetaImg: "dorso ranurado", titulo: "Insertos de dorso ranurado", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Industrial" }, variantes: [ { id: "1", nombre: "Consultar anchos y largos" } ] },

    // ---------------------------------------------------------
    // HERRAMIENTAS PCD DIAMANTE
    // ---------------------------------------------------------
    "SCCD": { codigoBase: "SCCD", categoriaImg: "Diamante", carpetaImg: "Sierra Circular", titulo: "Incisor de Diamante PCD", marca: "Schiavon", caracteristicasBasicas: { "Marca": "Schiavon", "Material": "Diamante PCD" }, variantes: [{ id: "1", nombre: "Consultar Medida" }] },
    "SCID": { codigoBase: "SCID", categoriaImg: "Diamante", carpetaImg: "Sierra Circular", titulo: "Incisor de Diamante PCD", marca: "Schiavon", caracteristicasBasicas: { "Marca": "Schiavon", "Material": "Diamante PCD" }, variantes: [{ id: "1", nombre: "Consultar Medida" }] },
    "SCED": { codigoBase: "SCED", categoriaImg: "Diamante", carpetaImg: "Sierra Circular", titulo: "Sierra de Diamante PCD", marca: "Schiavon", caracteristicasBasicas: { "Marca": "Schiavon", "Material": "Diamante PCD" }, variantes: [{ id: "1", nombre: "Consultar Medida" }] },
    "MBDD": { codigoBase: "MBDD", categoriaImg: "Diamante", carpetaImg: "Mecha", titulo: "Mecha de Diamante PCD", marca: "Franzoi", caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Diamante PCD" }, variantes: [{ id: "1", nombre: "Consultar Medidas" }] }
};

/* ==========================================================================
   2. LÓGICA DE INTERFAZ Y RENDERIZADO INTELIGENTE
   ========================================================================== */

let productoActualInfo = null;
let codigoReal = "";

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Obtener código de la URL
    let ruta = window.location.pathname;
    let nombreArchivo = ruta.split('/').pop();
    let codigoLimpio = decodeURIComponent(nombreArchivo.replace('.html', '').trim());
    
    codigoReal = codigoLimpio; 

    // Buscar coincidencias
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

    // A. TÍTULO CON FORMATO
    const tituloDOM = document.getElementById("producto-titulo");
    const marcaDOM = document.querySelector(".producto-info .marca");
    
    if (tituloDOM) {
        let tituloLimpio = info.titulo.split('(')[0].trim();
        tituloDOM.innerText = `${tituloLimpio} ${codigoReal}`;
    }
    if (marcaDOM) marcaDOM.innerText = `Marca: ${info.marca}`;

    // B. SELECTOR
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

    // C. INYECTAR GALERÍA A PRUEBA DE FALLOS CON LOGO WOODTOOLS COMO FALLBACK
    const contenedorImagen = document.querySelector(".producto-imagen");
    if (contenedorImagen) {
        // Enlace base a la imagen por defecto
        const defaultLogo = "../../../imagenes/logos/WoodTools.png";
        
        let basePath = `../../../imagenes/herramientas/${info.categoriaImg}/${info.carpetaImg}/`;
        
        let galeriaHTML = `<div class="galeria-miniaturas">`;
        
        // Array masivo de combinaciones de fotos
        const combinaciones = [
            "1.jpg", "1 (1).jpg", "1.jpeg", "1 (2).jpg", "1.png", "Incisor.png",
            "2.jpg", "2.jpeg", "2 (1).jpg", "2 (2).jpg", "2.png",
            "3.jpg", "3.jpeg", "3 (1).jpg", "3 (2).jpg", "3.png",
            "4.jpg", "4.jpeg", "4 (1).jpg", "4 (2).jpg", "4.png",
            "5.jpg", "5 (1).jpg", "5.jpeg", "5 (2).jpg", "5.png",
            "6.jpg", "6.jpeg", "6 (1).jpg", "6 (2).jpg", "6.png"
        ];

        combinaciones.forEach(nombreFoto => {
            let rutaSegura = `${basePath}${nombreFoto}`.replace(/ /g, "%20");
            
            // Onload: Si es la primera que carga bien (el main image sigue con el logo), se asigna a la principal.
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

        // Retrasamos un poco el zoom para dar tiempo a que carguen las fotos reales
        setTimeout(activarZoom, 200);
    }

    // D. RELLENAR TABLA SIN EL CÓDIGO
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

// Función helper: la primera foto real en cargar pasa a ser la foto grande
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
            // Solo hace zoom si la imagen NO ES el logo de WoodTools
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