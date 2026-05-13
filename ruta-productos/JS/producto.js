/* ==========================================================================
   1. BASE DE CONOCIMIENTO (Actualizada con Catálogo y Lista de Precios Freud)
   ========================================================================== */
const baseDatosProductos = {
    // ---------------------------------------------------------
    // SIERRAS PARA MELAMINA (Ángulo Positivo / Con Incisor)
    // ---------------------------------------------------------
    "LG3D": {
        codigoBase: "LG3D", categoriaImg: "Sierras",
        titulo: "Sierra para Melamina (Ángulo Positivo - Máquinas Industriales)",
        marca: "Freud",
        caracteristicasBasicas: {
            "Marca": "Freud",
            "Material": "Carburo de tungsteno (HM) Widia",
            "Uso": "Melamina (Ángulo Positivo - Con incisor en máquinas industriales)",
            "Tipo de diente": "Trapezoidal-Plano / Positivo"
        },
        variantes: [
            { id: "LG3D 0400", nombre: "LG3D 0400 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" },
            { id: "LG3D 0600", nombre: "LG3D 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" },
            { id: "LG3D 0800", nombre: "LG3D 0800 - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" }
        ]
    },
    "SSK12": {
        codigoBase: "SSK12", categoriaImg: "Sierras",
        titulo: "Sierra para Melamina (Ángulo Positivo)",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Melamina (Máquinas Industriales)" },
        variantes: [{ id: "SSK12 001", nombre: "SSK12 001 - Consultar medidas" }]
    },

    // ---------------------------------------------------------
    // SIERRAS PARA MELAMINA (Ángulo Negativo / Sin Incisor)
    // ---------------------------------------------------------
    "LU3F": {
        codigoBase: "LU3F", categoriaImg: "Sierras",
        titulo: "Sierra para Melamina (Ángulo Negativo - Máquinas de banco)",
        marca: "Freud",
        caracteristicasBasicas: {
            "Marca": "Freud",
            "Material": "Carburo de tungsteno (HM) Widia",
            "Uso": "Aglomerado, MDF, Madera y Melamina (Sin incisor)",
            "Tipo de diente": "Ángulo Negativo"
        },
        variantes: [
            { id: "LU3F 0200", nombre: "LU3F 0200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" },
            { id: "LU3F 0300", nombre: "LU3F 0300 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" },
            { id: "LU3F 0400", nombre: "LU3F 0400 - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" }
        ]
    },
    "LU3E": {
        codigoBase: "LU3E", categoriaImg: "Sierras",
        titulo: "Sierra para Melamina (Ángulo Negativo)",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Melamina" },
        variantes: [{ id: "LU3E 0200", nombre: "LU3E 0200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }]
    },
    "FR12L": {
        codigoBase: "FR12L", categoriaImg: "Sierras",
        titulo: "Sierra para Melamina y Madera (Ángulo Negativo)",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aglomerado, MDF, Madera y Melamina" },
        variantes: [{ id: "FR12L001H", nombre: "FR12L001H - D: 185mm | B: 2.4mm | d: 20mm | Z: 60" }]
    },
    "LU3D": {
        codigoBase: "LU3D", categoriaImg: "Sierras",
        titulo: "Sierra para Melamina",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Melamina" },
        variantes: [
            { id: "LU3D 0200", nombre: "LU3D 0200 - D: 220mm | B: 3.2mm | d: 30mm | Z: 64" },
            { id: "LU3D 0600", nombre: "LU3D 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" }
        ]
    },
    "F03FS": {
        codigoBase: "F03FS", categoriaImg: "Sierras",
        titulo: "Sierra Circular Multiuso",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aglomerado, MDF, Madera y Melamina" },
        variantes: [{ id: "F03FS09801", nombre: "F03FS09801 - D: 185mm | B: 2.4mm | d: 20mm | Z: 60" }]
    },
    "LSB": {
        codigoBase: "LSB", categoriaImg: "Sierras",
        titulo: "Sierra Circular Extra Silenciosa LSB",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Placas Bilaminadas / Melamina" },
        variantes: [
            { id: "LSB25003X", nombre: "LSB25003X - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" },
            { id: "LSB30003X", nombre: "LSB30003X - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" },
            { id: "LSB35003X", nombre: "LSB35003X - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" }
        ]
    },

    // ---------------------------------------------------------
    // SIERRAS PARA MADERA
    // ---------------------------------------------------------
    "LG2A": {
        codigoBase: "LG2A", categoriaImg: "Sierras",
        titulo: "Sierra para Madera",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera maciza, blanda y dura", "Tipo de diente": "Alterno" },
        variantes: [
            { id: "LG2A 0500", nombre: "LG2A 0500 - D: 180mm | B: 3.2mm | d: 30mm | Z: 24" },
            { id: "LG2A 0800", nombre: "LG2A 0800 - D: 200mm | B: 3.2mm | d: 30mm | Z: 24" },
            { id: "LG2A 1700", nombre: "LG2A 1700 - D: 250mm | B: 3.2mm | d: 30mm | Z: 30" },
            { id: "LG2A 1900", nombre: "LG2A 1900 - D: 300mm | B: 3.2mm | d: 30mm | Z: 36" },
            { id: "LG2A 2100", nombre: "LG2A 2100 - D: 300mm | B: 3.2mm | d: 30mm | Z: 36" },
            { id: "LG2A 2800", nombre: "LG2A 2800 - D: 350mm | B: 3.5mm | d: 30mm | Z: 42" },
            { id: "LG2A 3300", nombre: "LG2A 3300 - D: 400mm | B: 4.0mm | d: 30mm | Z: 48" },
            { id: "LG2A 3500", nombre: "LG2A 3500 - D: 400mm | B: 4.0mm | d: 30mm | Z: 48" }
        ]
    },
    "LG2B": {
        codigoBase: "LG2B", categoriaImg: "Sierras",
        titulo: "Sierra para Madera",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera" },
        variantes: [
            { id: "LG2B 0800", nombre: "LG2B 0800 - D: 250mm | B: 3.2mm | d: 30mm | Z: 20" },
            { id: "LG2B 1100", nombre: "LG2B 1100 - D: 300mm | B: 3.2mm | d: 30mm | Z: 24" },
            { id: "LG2B 1300", nombre: "LG2B 1300 - D: 350mm | B: 3.5mm | d: 30mm | Z: 28" }
        ]
    },
    "LU2A": {
        codigoBase: "LU2A", categoriaImg: "Sierras",
        titulo: "Sierra para Madera Blanda y Dura",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera blanda y dura a favor/contra de la veta" },
        variantes: [
            { id: "LU2A 0500", nombre: "LU2A 0500 - D: 180mm | B: 3.2mm | d: 30mm | Z: 40" },
            { id: "LU2A 0800", nombre: "LU2A 0800 - D: 200mm | B: 3.2mm | d: 30mm | Z: 40" },
            { id: "LU2A 1600", nombre: "LU2A 1600 - D: 250mm | B: 3.2mm | d: 30mm | Z: 48" },
            { id: "LU2A 2100", nombre: "LU2A 2100 - D: 300mm | B: 3.2mm | d: 30mm | Z: 60" },
            { id: "LU2A 2500", nombre: "LU2A 2500 - D: 350mm | B: 3.5mm | d: 30mm | Z: 72" },
            { id: "LU2A 3100", nombre: "LU2A 3100 - D: 400mm | B: 4.0mm | d: 30mm | Z: 84" },
            { id: "LU2A 3300", nombre: "LU2A 3300 - D: 400mm | B: 4.0mm | d: 30mm | Z: 84" }
        ]
    },
    "LU2B": {
        codigoBase: "LU2B", categoriaImg: "Sierras",
        titulo: "Sierra para Madera",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera" },
        variantes: [
            { id: "LU2B 0200", nombre: "LU2B 0200 - D: 180mm | B: 3.2mm | d: 30mm | Z: 60" },
            { id: "LU2B 0400", nombre: "LU2B 0400 - D: 200mm | B: 3.2mm | d: 30mm | Z: 64" },
            { id: "LU2B 0700", nombre: "LU2B 0700 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" },
            { id: "LU2B 1200", nombre: "LU2B 1200 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" },
            { id: "LU2B 1600", nombre: "LU2B 1600 - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" },
            { id: "LU2B 1900", nombre: "LU2B 1900 - D: 400mm | B: 4.0mm | d: 30mm | Z: 120" },
            { id: "LU2B 2100", nombre: "LU2B 2100 - D: 500mm | B: 4.4mm | d: 30mm | Z: 120" }
        ]
    },
    "LU2C": {
        codigoBase: "LU2C", categoriaImg: "Sierras",
        titulo: "Sierra para Madera",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera" },
        variantes: [
            { id: "LU2C 0600", nombre: "LU2C 0600 - D: 200mm | B: 3.2mm | d: 30mm | Z: 64" },
            { id: "LU2C 1200", nombre: "LU2C 1200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" },
            { id: "LU2C 1500", nombre: "LU2C 1500 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" },
            { id: "LU2C 2000", nombre: "LU2C 2000 - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" }
        ]
    },
    "LU1D": {
        codigoBase: "LU1D", categoriaImg: "Sierras",
        titulo: "Sierra para Madera LU1D",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera (Multipunto)" },
        variantes: [
            { id: "LU1D 0500", nombre: "LU1D 0500 - D: 250mm | B: 3.2mm | d: 30mm | Z: 48" }
        ]
    },
    "LU1F": {
        codigoBase: "LU1F", categoriaImg: "Sierras",
        titulo: "Sierra para Madera LU1F",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera" },
        variantes: [
            { id: "LU1F 0600", nombre: "LU1F 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 60" }
        ]
    },
    "FI14M": {
        codigoBase: "FI14M", categoriaImg: "Sierras",
        titulo: "Sierra de Ranurar FI14M",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Ranurado de Madera" },
        variantes: [
            { id: "FI14M AA3", nombre: "FI14M AA3 - D: 150mm | B: 1.5mm | d: 30mm | Z: 18" },
            { id: "FI14M AE3", nombre: "FI14M AE3 - D: 150mm | B: 2.0mm | d: 30mm | Z: 18" },
            { id: "FI14M CE3", nombre: "FI14M CE3 - D: 125mm | B: 2.0mm | d: 30mm | Z: 12" }
        ]
    },
    "FR09W": {
        codigoBase: "FR09W", categoriaImg: "Sierras",
        titulo: "Sierra Fina para Madera FR09W",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera" },
        variantes: [
            { id: "FR09W003H", nombre: "FR09W003H - D: 184mm | B: 1.5mm | d: 20mm | Z: 40" },
            { id: "FR09W004H", nombre: "FR09W004H - D: 184mm | B: 1.5mm | d: 20mm | Z: 60" }
        ]
    },
    "LP40M": {
        codigoBase: "LP40M", categoriaImg: "Sierras",
        titulo: "Sierra Fina para Madera LP40M",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera" },
        variantes: [
            { id: "LP40M 016P", nombre: "LP40M 016P - D: 184mm | B: 2.4mm | d: 20mm | Z: 40" }
        ]
    },

    // ---------------------------------------------------------
    // SIERRAS PARA ALUMINIO / NO FERROSOS
    // ---------------------------------------------------------
    "LU4A": {
        codigoBase: "LU4A", categoriaImg: "Sierras",
        titulo: "Sierra para Aluminio y Plásticos",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aluminio, Plásticos y Materiales No Ferrosos" },
        variantes: [
            { id: "LU4A 0100", nombre: "LU4A 0100 - D: 250mm | B: 2.8mm | d: 30mm | Z: 80" },
            { id: "LU4A 0200", nombre: "LU4A 0200 - D: 300mm | B: 2.8mm | d: 30mm | Z: 96" },
            { id: "LU4A 0300", nombre: "LU4A 0300 - D: 350mm | B: 3.0mm | d: 30mm | Z: 108" }
        ]
    },
    "LU5B": {
        codigoBase: "LU5B", categoriaImg: "Sierras",
        titulo: "Sierra para Aluminio",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aluminio y Metales No Ferrosos" },
        variantes: [
            { id: "LU5B 0200", nombre: "LU5B 0200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" },
            { id: "LU5B 0600", nombre: "LU5B 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" },
            { id: "LU5B 1100", nombre: "LU5B 1100 - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" }
        ]
    },
    "LU5D": {
        codigoBase: "LU5D", categoriaImg: "Sierras",
        titulo: "Sierra para Aluminio",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aluminio" },
        variantes: [
            { id: "LU5D 0500", nombre: "LU5D 0500 - D: 250mm | B: 3.2mm | d: 32mm | Z: 80" },
            { id: "LU5D 1100", nombre: "LU5D 1100 - D: 300mm | B: 3.2mm | d: 32mm | Z: 96" },
            { id: "LU5D 1500", nombre: "LU5D 1500 - D: 350mm | B: 3.2mm | d: 32mm | Z: 108" },
            { id: "LU5D 1700", nombre: "LU5D 1700 - D: 400mm | B: 3.8mm | d: 32mm | Z: 120" }
        ]
    },
    "LU5E": {
        codigoBase: "LU5E", categoriaImg: "Sierras",
        titulo: "Sierra para Aluminio Gruesa",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Aluminio" },
        variantes: [
            { id: "LU5E 0100", nombre: "LU5E 0100 - D: 400mm | B: 3.8mm | d: 30mm | Z: 120" },
            { id: "LU5E 0200", nombre: "LU5E 0200 - D: 400mm | B: 3.8mm | d: 32mm | Z: 120" },
            { id: "LU5E 0400", nombre: "LU5E 0400 - D: 450mm | B: 3.8mm | d: 30mm | Z: 120" },
            { id: "LU5E 0600", nombre: "LU5E 0600 - D: 450mm | B: 3.8mm | d: 32mm | Z: 120" },
            { id: "LU5E 0800", nombre: "LU5E 0800 - D: 500mm | B: 4.0mm | d: 30mm | Z: 120" },
            { id: "LU5E 0900", nombre: "LU5E 0900 - D: 500mm | B: 4.0mm | d: 32mm | Z: 120" }
        ]
    },

    // ---------------------------------------------------------
    // SIERRAS MÚLTIPLES (LM)
    // ---------------------------------------------------------
    "LM01": {
        codigoBase: "LM01", categoriaImg: "Sierras",
        titulo: "Sierra para Múltiple LM01",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Corte Múltiple" },
        variantes: [
            { id: "LM01 3200", nombre: "LM01 3200 - D: 300mm | B: 2.2mm | d: 30mm | Z: 24" }
        ]
    },
    "LM02": {
        codigoBase: "LM02", categoriaImg: "Sierras",
        titulo: "Sierra para Múltiple LM02",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Corte Múltiple" },
        variantes: [
            { id: "LM02 3200", nombre: "LM02 3200 - D: 350mm | B: 3.2mm | d: 30mm | Z: 24" }
        ]
    },
    "LM04": {
        codigoBase: "LM04", categoriaImg: "Sierras",
        titulo: "Sierra para Múltiple LM04",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Corte Múltiple" },
        variantes: [
            { id: "LM04 3100", nombre: "LM04 3100 - D: 300mm | B: 3.2mm | d: 30mm | Z: 24" },
            { id: "LM04 3200", nombre: "LM04 3200 - D: 300mm | B: 3.2mm | d: 70mm | Z: 24" },
            { id: "LM04 3400", nombre: "LM04 3400 - D: 350mm | B: 3.5mm | d: 30mm | Z: 24" },
            { id: "LM04 3500", nombre: "LM04 3500 - D: 350mm | B: 3.5mm | d: 70mm | Z: 24" }
        ]
    },
    "LM05": {
        codigoBase: "LM05", categoriaImg: "Sierras",
        titulo: "Sierra para Múltiple LM05",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Corte Múltiple" },
        variantes: [
            { id: "LM05 3100", nombre: "LM05 3100 - D: 300mm | B: 3.2mm | d: 30mm | Z: 28" }
        ]
    },
    "LM06": {
        codigoBase: "LM06", categoriaImg: "Sierras",
        titulo: "Sierra para Múltiple con Limpiadores LM06",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Corte Múltiple" },
        variantes: [
            { id: "LM06 3100", nombre: "LM06 3100 - D: 300mm | B: 3.2mm | d: 30mm | Z: 24+4" },
            { id: "LM06 3200", nombre: "LM06 3200 - D: 300mm | B: 3.2mm | d: 70mm | Z: 24+4" },
            { id: "LM06 3400", nombre: "LM06 3400 - D: 350mm | B: 3.5mm | d: 30mm | Z: 24+4" },
            { id: "LM06 3500", nombre: "LM06 3500 - D: 350mm | B: 3.5mm | d: 70mm | Z: 24+4" }
        ]
    },
    "LM63M": {
        codigoBase: "LM63M", categoriaImg: "Sierras",
        titulo: "Sierra Múltiple LM63M",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Corte Múltiple" },
        variantes: [
            { id: "LM63M BB3", nombre: "LM63M BB3 - D: 250mm | B: 3.2mm | d: 30mm | Z: 20" },
            { id: "LM63M CC3", nombre: "LM63M CC3 - D: 300mm | B: 3.2mm | d: 30mm | Z: 24" }
        ]
    },

    // ---------------------------------------------------------
    // SIERRAS SECCIONADORAS (LSA)
    // ---------------------------------------------------------
    "LSA": {
        codigoBase: "LSA", categoriaImg: "Sierras",
        titulo: "Sierra para Seccionadora LSA",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Máquinas Seccionadoras" },
        variantes: [
            { id: "LSA 30003X", nombre: "LSA 30003X - D: 300mm | B: 4.4mm | d: 30mm | Z: 60" },
            { id: "LSA 30004X", nombre: "LSA 30004X - D: 300mm | B: 4.4mm | d: 30mm | Z: 72" },
            { id: "LSA 32003X", nombre: "LSA 32003X - D: 320mm | B: 4.4mm | d: 30mm | Z: 60" },
            { id: "LSA 32004X", nombre: "LSA 32004X - D: 320mm | B: 4.4mm | d: 30mm | Z: 72" },
            { id: "LSA 35003X", nombre: "LSA 35003X - D: 350mm | B: 4.4mm | d: 30mm | Z: 72" },
            { id: "LSA 40003X", nombre: "LSA 40003X - D: 400mm | B: 4.4mm | d: 30mm | Z: 72" }
        ]
    },

    // ---------------------------------------------------------
    // INCISORES Y TRITURADORES
    // ---------------------------------------------------------
    "LI13MD": {
        codigoBase: "LI13MD", categoriaImg: "Sierras",
        titulo: "Incisor Doble Regulable Diente Plano",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Máquinas Escuadradoras" },
        variantes: [
            { id: "LI13MD BA3", nombre: "LI13MD BA3 - D: 120mm | B: 2.8/3.6mm | d: 20mm | Z: 12+12" },
            { id: "LI13MD BB3", nombre: "LI13MD BB3 - D: 120mm | B: 2.8/3.6mm | d: 22mm | Z: 12+12" },
            { id: "LI13MD CA3", nombre: "LI13MD CA3 - D: 125mm | B: 2.8/3.6mm | d: 20mm | Z: 12+12" },
            { id: "LI13MD CB3", nombre: "LI13MD CB3 - D: 125mm | B: 2.8/3.6mm | d: 22mm | Z: 12+12" }
        ]
    },
    "LI13MS": {
        codigoBase: "LI13MS", categoriaImg: "Sierras",
        titulo: "Incisor Simple",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Máquinas Escuadradoras" },
        variantes: [
            { id: "LI13MS BA3", nombre: "LI13MS BA3 - D: 120mm | B: 2.8/3.6mm | d: 20mm | Z: 12" },
            { id: "LI13MS BB3", nombre: "LI13MS BB3 - D: 120mm | B: 2.8/3.6mm | d: 22mm | Z: 12" },
            { id: "LI13MS CA3", nombre: "LI13MS CA3 - D: 125mm | B: 2.8/3.6mm | d: 20mm | Z: 12" },
            { id: "LI13MS CB3", nombre: "LI13MS CB3 - D: 125mm | B: 2.8/3.6mm | d: 22mm | Z: 12" }
        ]
    },
    "LI25M": {
        codigoBase: "LI25M", categoriaImg: "Sierras",
        titulo: "Incisor Doble Regulable Diente Alterno",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Máquinas Seccionadoras" },
        variantes: [
            { id: "LI25M 28 BA3", nombre: "LI25M 28 BA3 - D: 120mm | B: 2.8/3.6mm | d: 20mm | Z: 12+12" },
            { id: "LI25M 28 BB3", nombre: "LI25M 28 BB3 - D: 120mm | B: 2.8/3.6mm | d: 22mm | Z: 12+12" },
            { id: "LI25M 28 CA3", nombre: "LI25M 28 CA3 - D: 125mm | B: 2.8/3.6mm | d: 20mm | Z: 12+12" },
            { id: "LI25M 28 CB3", nombre: "LI25M 28 CB3 - D: 125mm | B: 2.8/3.6mm | d: 22mm | Z: 12+12" },
            { id: "LI25M 31 CA3", nombre: "LI25M 31 CA3 - D: 125mm | B: 3.1/3.9mm | d: 20mm | Z: 12+12" },
            { id: "LI25M 43 PE3", nombre: "LI25M 43 PE3 - D: 200mm | B: 4.3/5.5mm | d: 20mm | Z: 20+20" },
            { id: "LI25M 43 VA3", nombre: "LI25M 43 VA3 - D: 215mm | B: 4.3/5.5mm | d: 50mm | Z: 24+24" }
        ]
    },
    "SCC_Freud": {
        codigoBase: "SCC_Freud", categoriaImg: "Sierras",
        titulo: "Incisor SCC",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [{ id: "SCC", nombre: "SCC - Consultar Medidas" }]
    },
    "SCC_Franzoi": {
        codigoBase: "SCC_Franzoi", categoriaImg: "Sierras",
        titulo: "Incisor SCC",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Widia" },
        variantes: [{ id: "SCC", nombre: "SCC - Consultar Medidas" }]
    },
    "TR15MS": {
        codigoBase: "TR15MS", categoriaImg: "Sierras",
        titulo: "Triturador Simple TR15MS",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [
            { id: "TR15MS BA3", nombre: "TR15MS BA3 - D: 250mm | B: 30mm | d: 60mm | Z: 24" },
            { id: "TR15MS CA3", nombre: "TR15MS CA3 - D: 300mm | B: 30mm | d: 60mm | Z: 24" }
        ]
    },
    "TR15MD": {
        codigoBase: "TR15MD", categoriaImg: "Sierras",
        titulo: "Triturador Doble TR15MD",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [
            { id: "TR15MD BA3", nombre: "TR15MD BA3 - D: 250mm | B: 30mm | d: 60mm | Z: 24" },
            { id: "TR15MD CA3", nombre: "TR15MD CA3 - D: 300mm | B: 30mm | d: 60mm | Z: 24" }
        ]
    },
    "LT18MS": {
        codigoBase: "LT18MS", categoriaImg: "Sierras",
        titulo: "Sierra Triturador Simple LT18MS",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [
            { id: "LT18MS BB3", nombre: "LT18MS BB3 - D: 250mm | B: 4.2mm | d: 130mm | Z: 72" }
        ]
    },
    "LT18MD": {
        codigoBase: "LT18MD", categoriaImg: "Sierras",
        titulo: "Sierra Triturador Doble LT18MD",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [
            { id: "LT18MD BB3", nombre: "LT18MD BB3 - D: 250mm | B: 4.2mm | d: 130mm | Z: 72" }
        ]
    },
    "LT16MS": {
        codigoBase: "LT16MS", categoriaImg: "Sierras",
        titulo: "Sierra Triturador Simple LT16MS",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [
            { id: "LT16MS AA3", nombre: "LT16MS AA3 - D: 250mm | B: 4.2mm | d: 80mm | Z: 60" }
        ]
    },
    "LT16MD": {
        codigoBase: "LT16MD", categoriaImg: "Sierras",
        titulo: "Sierra Triturador Doble LT16MD",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [
            { id: "LT16MD AA3", nombre: "LT16MD AA3 - D: 250mm | B: 4.2mm | d: 80mm | Z: 60" }
        ]
    },
    "LT14MS": {
        codigoBase: "LT14MS", categoriaImg: "Sierras",
        titulo: "Sierra Triturador Simple LT14MS",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [
            { id: "LT14MS AA3", nombre: "LT14MS AA3 - D: 250mm | B: 4.2mm | d: 60mm | Z: 48" }
        ]
    },
    "LT14MD": {
        codigoBase: "LT14MD", categoriaImg: "Sierras",
        titulo: "Sierra Triturador Doble LT14MD",
        marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia" },
        variantes: [
            { id: "LT14MD AA3", nombre: "LT14MD AA3 - D: 250mm | B: 4.2mm | d: 60mm | Z: 48" }
        ]
    },

    // ---------------------------------------------------------
    // MECHAS Y BROCAS
    // ---------------------------------------------------------
    "MPI": {
        codigoBase: "MPI", categoriaImg: "Mechas",
        titulo: "Mecha Pasante en Metal Duro (Izquierda)",
        marca: "Italiana (Nordutensili)",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Diámetro del vástago (S)": "10 mm", "Material": "Metal Duro", "Uso": "Perforaciones Pasantes" },
        variantes: [
            { id: "3mm", nombre: "Diámetro de corte: 3mm" }, { id: "4mm", nombre: "Diámetro de corte: 4mm" }, { id: "5mm", nombre: "Diámetro de corte: 5mm" },
            { id: "6mm", nombre: "Diámetro de corte: 6mm" }, { id: "7mm", nombre: "Diámetro de corte: 7mm" }, { id: "8mm", nombre: "Diámetro de corte: 8mm" },
            { id: "10mm", nombre: "Diámetro de corte: 10mm" }, { id: "12mm", nombre: "Diámetro de corte: 12mm" }, { id: "15mm", nombre: "Diámetro de corte: 15mm" }
        ]
    },
    "MPD": {
        codigoBase: "MPD", categoriaImg: "Mechas",
        titulo: "Mecha Pasante en Metal Duro (Derecha)",
        marca: "Italiana (Nordutensili)",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Diámetro del vástago (S)": "10 mm", "Material": "Metal Duro", "Uso": "Perforaciones Pasantes" },
        variantes: [
            { id: "3mm", nombre: "Diámetro de corte: 3mm" }, { id: "4mm", nombre: "Diámetro de corte: 4mm" }, { id: "5mm", nombre: "Diámetro de corte: 5mm" },
            { id: "6mm", nombre: "Diámetro de corte: 6mm" }, { id: "7mm", nombre: "Diámetro de corte: 7mm" }, { id: "8mm", nombre: "Diámetro de corte: 8mm" },
            { id: "10mm", nombre: "Diámetro de corte: 10mm" }, { id: "12mm", nombre: "Diámetro de corte: 12mm" }, { id: "15mm", nombre: "Diámetro de corte: 15mm" }
        ]
    },
    "MCI": {
        codigoBase: "MCI", categoriaImg: "Mechas",
        titulo: "Mecha Ciega en Metal Duro (Izquierda)",
        marca: "Italiana (Nordutensili)",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Diámetro del vástago (S)": "10 mm", "Material": "Metal Duro", "Uso": "Perforaciones no pasantes (Ciegas)" },
        variantes: [
            { id: "3mm", nombre: "Diámetro de corte: 3mm" }, { id: "4mm", nombre: "Diámetro de corte: 4mm" }, { id: "5mm", nombre: "Diámetro de corte: 5mm" },
            { id: "6mm", nombre: "Diámetro de corte: 6mm" }, { id: "7mm", nombre: "Diámetro de corte: 7mm" }, { id: "8mm", nombre: "Diámetro de corte: 8mm" },
            { id: "10mm", nombre: "Diámetro de corte: 10mm" }, { id: "12mm", nombre: "Diámetro de corte: 12mm" }, { id: "15mm", nombre: "Diámetro de corte: 15mm" }
        ]
    },
    "MCD": {
        codigoBase: "MCD", categoriaImg: "Mechas",
        titulo: "Mecha Ciega en Metal Duro (Derecha)",
        marca: "Italiana (Nordutensili)",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Diámetro del vástago (S)": "10 mm", "Material": "Metal Duro", "Uso": "Perforaciones no pasantes (Ciegas)" },
        variantes: [
            { id: "3mm", nombre: "Diámetro de corte: 3mm" }, { id: "4mm", nombre: "Diámetro de corte: 4mm" }, { id: "5mm", nombre: "Diámetro de corte: 5mm" },
            { id: "6mm", nombre: "Diámetro de corte: 6mm" }, { id: "7mm", nombre: "Diámetro de corte: 7mm" }, { id: "8mm", nombre: "Diámetro de corte: 8mm" },
            { id: "10mm", nombre: "Diámetro de corte: 10mm" }, { id: "12mm", nombre: "Diámetro de corte: 12mm" }, { id: "15mm", nombre: "Diámetro de corte: 15mm" }
        ]
    },
    "MBI": {
        codigoBase: "MBI", categoriaImg: "Mechas",
        titulo: "Fresa Bisagra en Widia (Izquierda)",
        marca: "Italiana (Nordutensili)",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Diámetro del vástago (S)": "10 mm", "Material": "Widia", "Uso": "Trabajos en madera (Bisagras)" },
        variantes: [
            { id: "12mm", nombre: "Diámetro: 12mm" }, { id: "15mm", nombre: "Diámetro: 15mm" }, { id: "20mm", nombre: "Diámetro: 20mm" },
            { id: "25mm", nombre: "Diámetro: 25mm" }, { id: "26mm", nombre: "Diámetro: 26mm" }, { id: "30mm", nombre: "Diámetro: 30mm" },
            { id: "35mm", nombre: "Diámetro: 35mm" }, { id: "40mm", nombre: "Diámetro: 40mm" }
        ]
    },
    "MBD": {
        codigoBase: "MBD", categoriaImg: "Mechas",
        titulo: "Fresa Bisagra en Widia (Derecha)",
        marca: "Italiana (Nordutensili)",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Diámetro del vástago (S)": "10 mm", "Material": "Widia", "Uso": "Trabajos en madera (Bisagras)" },
        variantes: [
            { id: "12mm", nombre: "Diámetro: 12mm" }, { id: "15mm", nombre: "Diámetro: 15mm" }, { id: "20mm", nombre: "Diámetro: 20mm" },
            { id: "25mm", nombre: "Diámetro: 25mm" }, { id: "26mm", nombre: "Diámetro: 26mm" }, { id: "30mm", nombre: "Diámetro: 30mm" },
            { id: "35mm", nombre: "Diámetro: 35mm" }, { id: "40mm", nombre: "Diámetro: 40mm" }
        ]
    },
    "Router_Franzoi": {
        codigoBase: "Router_Franzoi", categoriaImg: "Mechas",
        titulo: "Mecha para Router Franzoi",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Carburo de tungsteno", "Uso": "Cortes en router" },
        variantes: [{ id: "1", nombre: "Consultar modelos y medidas" }]
    },
    "PINZAER": {
        codigoBase: "PINZAER", categoriaImg: "Mechas",
        titulo: "Pinza ER para Sujeción",
        marca: "Nordutensili",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Accesorios de Sujeción" },
        variantes: [
            { id: "ER32", nombre: "Pinza ER32" },
            { id: "ER40", nombre: "Pinza ER40" }
        ]
    },
    "MAM": {
        codigoBase: "MAM", categoriaImg: "Mechas",
        titulo: "Accesorio de Sujeción MAM",
        marca: "Nordutensili",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Accesorios de Sujeción" },
        variantes: [{ id: "1", nombre: "Consultar modelos" }]
    },
    "MCAR": {
        codigoBase: "MCAR", categoriaImg: "Mechas",
        titulo: "Mecha para Avellanado MCAR",
        marca: "Nordutensili",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Avellanado" },
        variantes: [{ id: "1", nombre: "Consultar medidas" }]
    },
    "MBA": {
        codigoBase: "MBA", categoriaImg: "Mechas",
        titulo: "Mecha para Barrenos MBA",
        marca: "Nordutensili",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Barrenos" },
        variantes: [{ id: "1", nombre: "Consultar medidas" }]
    },
    "AVD": {
        codigoBase: "AVD", categoriaImg: "Mechas",
        titulo: "Mecha para Avellanadores AVD / AVI",
        marca: "Nordutensili",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Avellanadores" },
        variantes: [{ id: "1", nombre: "Consultar medidas" }]
    },
    "BRDD": {
        codigoBase: "BRDD", categoriaImg: "Mechas",
        titulo: "Mecha para Defondadoras BRDD",
        marca: "Nordutensili",
        caracteristicasBasicas: { "Marca": "Nordutensili", "Uso": "Defondadoras" },
        variantes: [{ id: "1", nombre: "Consultar medidas" }]
    },
    "MID": {
        codigoBase: "MID", categoriaImg: "Mechas",
        titulo: "Mecha para CNC MID",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "CNC" },
        variantes: [{ id: "1", nombre: "Consultar medidas" }]
    },
    "MIIR": {
        codigoBase: "MIIR", categoriaImg: "Mechas",
        titulo: "Mecha para CNC MIIR",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "CNC" },
        variantes: [{ id: "1", nombre: "Consultar medidas" }]
    },

    // ---------------------------------------------------------
    // FRESAS 
    // ---------------------------------------------------------
    "FRS": { 
        codigoBase: "FRS", categoriaImg: "Fresas",
        titulo: "Fresas Rectas HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "150 mm", "Diámetro interior (d)": "40 mm", "Cantidad de dientes (Z)": "4 o 6", "Incisores (R)": "Sin incisores", "Uso": "Ranurar, cepillar o rebajes (ángulo axial a partir de 20mm)" },
        variantes: [
            { id: "FRS0054", nombre: "Ancho de corte (B): 5 a 100 mm (Consultar medida exacta)" }
        ]
    },
    "FRI": { 
        codigoBase: "FRI", categoriaImg: "Fresas",
        titulo: "Fresas Rectas con Incisores HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "150 mm", "Diámetro interior (d)": "40 mm", "Cantidad de dientes (Z)": "4 o 6", "Incisores (R)": "2 a 6 incisores HM", "Uso": "Ranurar sin astillar" },
        variantes: [
            { id: "FRI01542", nombre: "Ancho de corte (B): 15 a 100 mm (Consultar medida exacta)" }
        ]
    },
    "FRG": { 
        codigoBase: "FRG", categoriaImg: "Fresas",
        titulo: "Fresas para Ranurar Regulables HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "160 mm", "Diámetro interior (d)": "40 mm", "Incisores (R)": "4 incisores", "Uso": "Ranuras, rebajes y espigas" },
        variantes: [
            { id: "FRG0510", nombre: "FRG0510 - B: 5 a 10 mm | Z: 2x4 | b: 5mm" },
            { id: "FRG1039", nombre: "FRG1039 - B: 10 a 39 mm | Z: 3x4 | b: 10mm" }
        ]
    },
    "CB": { 
        codigoBase: "CB", categoriaImg: "Fresas",
        titulo: "Cabezales Cepilladores HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "125 mm", "Diámetro interior (d)": "40 mm", "Uso": "Cepillar o espigar (Bajo ruido)" },
        variantes: [
            { id: "CB_Narrow", nombre: "Ancho (B): 55 a 130mm | Z: 40-100 | b: 6mm" },
            { id: "CB_Wide", nombre: "Ancho (B): 160 a 220mm | Z: 40-100 | b: 12mm" }
        ]
    },
    "FA": { 
        codigoBase: "FA", categoriaImg: "Fresas",
        titulo: "Fresas en Ángulo HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "150 mm", "Diámetro interior (d)": "40 mm", "Cantidad de dientes (Z)": "4 o 6", "Uso": "Efectuar ángulos" },
        variantes: [
            { id: "FA_Var", nombre: "Ancho de corte (B): 10 a 50 mm (Consultar medida)" }
        ]
    },
    "F04C": { 
        codigoBase: "F04C", categoriaImg: "Fresas",
        titulo: "Fresas 1/4 círculo cóncavo y convexo HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "150 mm", "Diámetro interior (d)": "40 mm", "Cantidad de dientes (Z)": "4 o 6", "Uso": "1/4 círculo formas A, B, C, D" },
        variantes: [
            { id: "1/2_3/4", nombre: "Ancho de corte (B): 1/2\" a 3/4\"" },
            { id: "3/4_1_1/4", nombre: "Ancho de corte (B): 3/4\" a 1 1/4\"" }
        ]
    },
    "F2C": { 
        codigoBase: "F2C", categoriaImg: "Fresas",
        titulo: "Fresas 1/2 círculo cóncavo y convexo HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "150 mm", "Diámetro interior (d)": "40 mm", "Cantidad de dientes (Z)": "4 o 6", "Uso": "Figuras de medio círculo cóncavo o convexo" },
        variantes: [
            { id: "v1", nombre: "Ancho de corte (B): 1/2\"" }, { id: "v2", nombre: "Ancho de corte (B): 5/8\"" },
            { id: "v3", nombre: "Ancho de corte (B): 3/4\"" }, { id: "v4", nombre: "Ancho de corte (B): 1\"" },
            { id: "v5", nombre: "Ancho de corte (B): 1 1/2\"" }, { id: "v6", nombre: "Ancho de corte (B): 2\"" }
        ]
    },
    "FZS": { 
        codigoBase: "FZS", categoriaImg: "Fresas",
        titulo: "Zócalo Simple y Contramarco HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "150 mm", "Diámetro interior (d)": "40 mm", "Cantidad de dientes (Z)": "4", "Ancho de corte (B)": "1/2\" a 3/4\"" },
        variantes: [
            { id: "FZS128", nombre: "FZS128 (Zócalo) - Combina fresa A y B" },
            { id: "FZS129", nombre: "FZS129 (Contramarco) - Combina dos fresas A" }
        ]
    },
    "FR": { 
        codigoBase: "FR", categoriaImg: "Fresas",
        titulo: "Rinconera Simple HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "150 mm", "Diámetro interior (d)": "40 mm", "Cantidad de dientes (Z)": "4 o 6", "Uso": "Efectuar rinconera modelos 1 o 2" },
        variantes: [
            { id: "FR_Var", nombre: "Ancho de corte (B): 3/4\" a 1 1/2\" (Consultar medida)" }
        ]
    },
    "JFRD": { 
        codigoBase: "JFRD", categoriaImg: "Fresas",
        titulo: "Rinconera Doble HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "160 mm", "Diámetro interior (d)": "40 mm", "Ancho de corte (B)": "1\"", "Cantidad de dientes (Z)": "2x4 y 1x10 (Sierra circular)", "Uso": "Rinconera doble modelos 1 o 2" },
        variantes: [{ id: "JFRD", nombre: "JFRD - Juego Rinconera Doble" }]
    },
    "JFF": { 
        codigoBase: "JFF", categoriaImg: "Fresas",
        titulo: "Frente Inglés HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "175 mm", "Diámetro interior (d)": "40 mm", "Cantidad de dientes (Z)": "4x4", "Uso": "Frente inglés simple y machimbrado" },
        variantes: [
            { id: "JFF101", nombre: "JFF101 - Ancho (B): 1/2\" a 1\" (Variantes A y B)" },
            { id: "JFF105", nombre: "JFF105 - Ancho (B): 1/2\" a 1\" (Variantes A y B)" }
        ]
    },
    "JFMS": { 
        codigoBase: "JFMS", categoriaImg: "Fresas",
        titulo: "Machimbre Simple HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "155 mm", "Diámetro interior (d)": "40 mm", "Uso": "Machimbre simple biselado o bajo fondo" },
        variantes: [
            { id: "JFMS1234", nombre: "B: 1/2\" a 3/4\" | Z: 5x4 y 1x16" },
            { id: "JFMS34114", nombre: "B: 3/4\" a 1 1/4\" | Z: 6x4" }
        ]
    },
    "JFMD": { 
        codigoBase: "JFMD", categoriaImg: "Fresas",
        titulo: "Machimbre Doble HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "155 mm", "Diámetro interior (d)": "40 mm", "Ancho de corte (B)": "1/2\" a 3/4\"", "Cantidad de dientes (Z)": "10x4 y 2x16", "Uso": "Machimbre doble con chanfle o bajo fondo" },
        variantes: [{ id: "JFMD1234", nombre: "JFMD1234 - Machimbre Doble HM" }]
    },
    "JFMP": { 
        codigoBase: "JFMP", categoriaImg: "Fresas",
        titulo: "Machimbre Piso Standard / Grampa HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro interior (d)": "40 mm", "Uso": "Machimbre de piso con junta abierta" },
        variantes: [
            { id: "JFMP3411", nombre: "Standard - D: 150mm | B: 3/4\" a 1 1/4\" | Z: 4x4" },
            { id: "JFMP3416", nombre: "Standard - D: 160mm | B: 5/8\" a 1\" | Z: 4x6" },
            { id: "JFMP3416G", nombre: "Para Grampa - D: 180mm | B: 5/8\" a 1\" | Z: 4x6+6" },
            { id: "JFMP34166M", nombre: "Para Grampa/Microbisel - D: 180mm | B: 5/8\" a 1\" | Z: 8x6+6" }
        ]
    },
    "JFDE": { 
        codigoBase: "JFDE", categoriaImg: "Fresas",
        titulo: "Deck Standard HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro interior (d)": "40 mm", "Ancho de corte (B)": "3/4\" a 1\"", "Uso": "Deck tradicional en machimbradora" },
        variantes: [
            { id: "JFDE4", nombre: "JFDE4 - D: 150mm | Z: 2x4" },
            { id: "JFDE6", nombre: "JFDE6 - D: 160mm | Z: 2x6" }
        ]
    },
    "JFDSG": { 
        codigoBase: "JFDSG", categoriaImg: "Fresas",
        titulo: "Deck para Grampa HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "160 mm", "Diámetro interior (d)": "40 mm", "Ancho de corte (B)": "1\"", "Uso": "Deck montaje con grampa plástica" },
        variantes: [
            { id: "JFDSG14", nombre: "JFDSG14 - Z: 4x4 y 2x8" },
            { id: "JFDSG16", nombre: "JFDSG16 - Z: 4x6 y 2x12" }
        ]
    },
    "FRP5533": { 
        codigoBase: "FRP5533", categoriaImg: "Fresas",
        titulo: "Replán de Tablero HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "200 mm", "Diámetro interior (d)": "40 mm", "Ancho de corte (B)": "55 mm", "Cantidad de dientes (Z)": "3+3 (b: 20mm)" },
        variantes: [{ id: "FRP5533", nombre: "FRP5533 - Fresa sobre madera o madera sobre fresa" }]
    },
    "JFMPV": { 
        codigoBase: "JFMPV", categoriaImg: "Fresas",
        titulo: "Moldura de Puertas y Ventanas HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "150 mm", "Diámetro interior (d)": "40 mm", "Ancho de corte (B)": "1 1/2\" a 2\"", "Cantidad de dientes (Z)": "2x4 y 1x6", "Uso": "Molduras de puertas/ventanas con ranura" },
        variantes: [{ id: "JFMPV14", nombre: "JFMPV14 - Juego 2 fresas moldura + 1 ranuradora" }]
    },
    "FCPV": { 
        codigoBase: "FCPV", categoriaImg: "Fresas",
        titulo: "Contramolduras de Puertas y Ventanas HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro interior (d)": "40 mm", "Ancho de corte (B)": "1 1/2\" a 2\"", "Uso": "Contramolduras en espigadoras/tupíes" },
        variantes: [
            { id: "FCPV41", nombre: "FCPV41 - D: 150mm | Z: 4" },
            { id: "FCPV6", nombre: "FCPV6 / 61 - D: 250mm o 320mm | Z: 6" }
        ]
    },
    "JFMPVR": { 
        codigoBase: "JFMPVR", categoriaImg: "Fresas",
        titulo: "Moldura de Puertas y Ventanas Simple HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "180 mm", "Diámetro interior (d)": "40 mm", "Ancho de corte (B)": "35 a 45 mm", "Cantidad de dientes (Z)": "1x2+2 y 2x4", "Uso": "Molduras, contramolduras y replán" },
        variantes: [{ id: "JFMPVR", nombre: "JFMPVR - 1 replán + 2 rectas" }]
    },
    "JFPMS10": { 
        codigoBase: "JFPMS10", categoriaImg: "Fresas",
        titulo: "Puerta de Muebles HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "160 mm", "Diámetro interior (d)": "40 mm", "Ancho de corte (B)": "1\"", "Cantidad de dientes (Z)": "1x4 y 1x6", "Uso": "Moldura/contramoldura/replán muebles cocina" },
        variantes: [{ id: "JFPMS10", nombre: "JFPMS10 - Fresa moldura + ranuradora" }]
    },
    "JFE": { 
        codigoBase: "JFE", categoriaImg: "Fresas",
        titulo: "Fresa para Finger HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "150 mm", "Diámetro interior (d)": "40 mm", "Uso": "Uniones finger para maderas a lo largo" },
        variantes: [
            { id: "JFE254", nombre: "JFE254 - B: 22 mm | Z: 4" },
            { id: "JFE5022", nombre: "JFE5022 - B: 45 mm | Z: 2+2" }
        ]
    },
    "JFE8": { 
        codigoBase: "JFE8", categoriaImg: "Fresas",
        titulo: "Fresa para Ensamble Cónico HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro interior (d)": "40 mm", "Uso": "Unir madera profundidades 8-12mm" },
        variantes: [
            { id: "JFE8122", nombre: "JFE8122 - D: 150mm | B: 10-45mm | Z: 4x4" },
            { id: "JFE8121", nombre: "JFE8121 - D: 160mm | B: 3.8mm | Z: 1x4" }
        ]
    },
    "JFE8Z": { 
        codigoBase: "JFE8Z", categoriaImg: "Fresas",
        titulo: "Fresa para Encastre HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro interior (d)": "40 mm", "Cantidad de dientes (Z)": "3+3", "Uso": "Ensamble 90° y 180° marcos puertas/ventanas" },
        variantes: [
            { id: "JFE8Z122", nombre: "D: 180mm | B: 19 a 40mm (Tipos A y B)" },
            { id: "JFME68", nombre: "D: 245mm | B: 22 a 68mm (Tipo B)" }
        ]
    },
    "FMR04": { 
        codigoBase: "FMR04", categoriaImg: "Fresas",
        titulo: "Fresa para Radios Múltiples HM",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "140 mm", "Diámetro interior (d)": "40 mm", "Ancho de corte (B)": "35 mm", "Cantidad de dientes (Z)": "4", "Uso": "Multi-radios 4 a 10mm" },
        variantes: [{ id: "FMR04", nombre: "FMR04 - 4 cortantes" }]
    },
    "FP402": { 
        codigoBase: "FP402", categoriaImg: "Fresas",
        titulo: "Fresa Multimoldura",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "150 mm", "Diámetro interior (d)": "40 mm", "Ancho de corte (B)": "45 mm", "Cantidad de dientes (Z)": "2", "Uso": "Infinidad de molduras sin cambiar insertos" },
        variantes: [{ id: "FP402", nombre: "FP402 - 2 cortantes" }]
    },
    "FG46S": { 
        codigoBase: "FG46S", categoriaImg: "Fresas",
        titulo: "Fresa para Finger HS",
        marca: "Franzoi / WT",
        caracteristicasBasicas: { "Diámetro exterior (D)": "160 mm", "Diámetro interior (d)": "50 mm", "Ancho de corte (B)": "28.6 mm", "Cantidad de dientes (Z)": "3+3", "Uso": "Unir madera (altas velocidades)" },
        variantes: [{ id: "FG46S CB2", nombre: "FG46S CB2 - HS" }]
    },
    "RES005L": {
        codigoBase: "RES005L", categoriaImg: "Fresas",
        titulo: "Resinol Bidón (Limpieza)",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Limpieza de herramientas" },
        variantes: [{ id: "RES005L", nombre: "Bidón 5 LTS" }]
    },
    "MEHSSAF": {
        codigoBase: "MEHSSAF", categoriaImg: "Fresas",
        titulo: "Afilado Mecha HSS",
        marca: "Servicio de Afilado",
        caracteristicasBasicas: { "Marca": "Servicio", "Uso": "Afilado" },
        variantes: [{ id: "MEHSSAF", nombre: "Consultar servicio" }]
    },
    "MEMD010AF": {
        codigoBase: "MEMD010AF", categoriaImg: "Fresas",
        titulo: "Afilado Mecha Pasante MD",
        marca: "Servicio de Afilado",
        caracteristicasBasicas: { "Marca": "Servicio", "Uso": "Afilado" },
        variantes: [{ id: "MEMD010AF", nombre: "Consultar servicio" }]
    },
    "CHC100HSSAF": {
        codigoBase: "CHC100HSSAF", categoriaImg: "Fresas",
        titulo: "Afilado x100 Cuchilla Plana HSS",
        marca: "Servicio de Afilado",
        caracteristicasBasicas: { "Marca": "Servicio", "Uso": "Afilado" },
        variantes: [{ id: "CHC100HSSAF", nombre: "Consultar servicio" }]
    },
    "INS030AF": {
        codigoBase: "INS030AF", categoriaImg: "Fresas",
        titulo: "Afilado Insertos MD",
        marca: "Servicio de Afilado",
        caracteristicasBasicas: { "Marca": "Servicio", "Uso": "Afilado" },
        variantes: [{ id: "INS030AF", nombre: "Consultar servicio" }]
    },
    "LIMMUE": {
        codigoBase: "LIMMUE", categoriaImg: "Fresas",
        titulo: "Disco Limitador Mueble Cocina",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Accesorios" },
        variantes: [{ id: "LIMMUE", nombre: "Consultar medida" }]
    },
    "JFVC": {
        codigoBase: "JFVC", categoriaImg: "Fresas",
        titulo: "Jgo. Varilla Cortina Común",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cortinas" },
        variantes: [{ id: "JFVC", nombre: "Consultar medida" }]
    },
    "JFVCS": {
        codigoBase: "JFVCS", categoriaImg: "Fresas",
        titulo: "Varilla Cortina Común Superior",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cortinas" },
        variantes: [{ id: "JFVCS", nombre: "Consultar medida" }]
    },
    "JFVCB": {
        codigoBase: "JFVCB", categoriaImg: "Fresas",
        titulo: "Jgo. Cortina Barrio",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cortinas" },
        variantes: [{ id: "JFVCB0588", nombre: "5/8" }]
    },

    // ---------------------------------------------------------
    // CUCHILLAS E INSERTOS
    // ---------------------------------------------------------
    "CHC": { 
        codigoBase: "CHC", categoriaImg: "Cuchillas",
        titulo: "Insertos de corte planas para cepillar",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cepillado" },
        variantes: [
            { id: "CHC_HSS", nombre: "HSS 18% - Medida Transversal: 30 mm o 35 mm (Largos de 100 a 1080mm)" },
            { id: "CHC_MD", nombre: "Metal Duro (MD) - Medida Transversal: 30 mm (Largos de 100 a 1080mm)" }
        ]
    },
    "CHCR": { 
        codigoBase: "CHCR", categoriaImg: "Cuchillas",
        titulo: "Insertos para cepillado de dorso ranurado",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Espesor": "4 mm", "Uso": "Industrial (Seguridad y precisión de sujeción)" },
        variantes: [
            { id: "CHCR_HSS", nombre: "HSS - Alturas/Anchos: 40mm, 50mm, 60mm (Consultar largos)" },
            { id: "CHCR_MD", nombre: "Metal Duro (MD) - Alturas/Anchos: 40mm, 50mm, 60mm (Consultar largos)" }
        ]
    },
    "CHCECH": { 
        codigoBase: "CHCECH", categoriaImg: "Cuchillas",
        titulo: "Cuchilla para Chipera",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Chiperas" },
        variantes: [{ id: "CHCECH", nombre: "Consultar medidas" }]
    },
    "CBP": {
        codigoBase: "CBP", categoriaImg: "Cuchillas",
        titulo: "Cabezal para Cuchillas Planas",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cabezales e Insertos" },
        variantes: [{ id: "CBP", nombre: "Consultar modelos" }]
    },
    "CBR": {
        codigoBase: "CBR", categoriaImg: "Cuchillas",
        titulo: "Cabezal para Cuchillas Dorso Ranurado",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cabezales e Insertos" },
        variantes: [{ id: "CBR", nombre: "Consultar modelos" }]
    },
    "CCPV": {
        codigoBase: "CCPV", categoriaImg: "Cuchillas",
        titulo: "Contramoldura N°4 con Insertos",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cabezales e Insertos" },
        variantes: [{ id: "CCPV14", nombre: "CCPV14" }]
    },
    "IWA": {
        codigoBase: "IWA", categoriaImg: "Cuchillas",
        titulo: "Inserto para Moldura",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cabezales e Insertos" },
        variantes: [{ id: "IWA7488", nombre: "Mod. A 25x25x2" }]
    },
    "CA1": {
        codigoBase: "CA1", categoriaImg: "Cuchillas",
        titulo: "Punta Recta con Inserto WT",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Cabezales e Insertos" },
        variantes: [{ id: "CA18501", nombre: "Consultar modelos" }]
    },

    // ---------------------------------------------------------
    // HERRAMIENTAS PCD DIAMANTE
    // ---------------------------------------------------------
    "SCCD": {
        codigoBase: "SCCD", categoriaImg: "Diamante",
        titulo: "Incisor de Diamante PCD",
        marca: "Schiavon",
        caracteristicasBasicas: { "Marca": "Schiavon", "Material": "Diamante PCD", "Uso": "Corte de materiales abrasivos" },
        variantes: [{ id: "SCCD150", nombre: "Diámetro: 125mm" }]
    },
    "SCID": {
        codigoBase: "SCID", categoriaImg: "Diamante",
        titulo: "Incisor de Diamante PCD",
        marca: "Schiavon",
        caracteristicasBasicas: { "Marca": "Schiavon", "Material": "Diamante PCD", "Uso": "Corte de materiales abrasivos" },
        variantes: [{ id: "SCID150", nombre: "Diámetro: 150-200mm" }]
    },
    "SCED": {
        codigoBase: "SCED", categoriaImg: "Diamante",
        titulo: "Sierra de Diamante PCD",
        marca: "Schiavon",
        caracteristicasBasicas: { "Marca": "Schiavon", "Material": "Diamante PCD", "Uso": "Corte de materiales abrasivos" },
        variantes: [
            { id: "SCED300", nombre: "Diámetro: 300mm" },
            { id: "SCED350", nombre: "Diámetro: 350mm" }
        ]
    },
    "SCSD": {
        codigoBase: "SCSD", categoriaImg: "Diamante",
        titulo: "Sierra de Diamante PCD",
        marca: "Schiavon",
        caracteristicasBasicas: { "Marca": "Schiavon", "Material": "Diamante PCD", "Uso": "Corte de materiales abrasivos" },
        variantes: [{ id: "SCSD350", nombre: "Diámetro: 350mm" }]
    },
    "MBDD": {
        codigoBase: "MBDD", categoriaImg: "Diamante",
        titulo: "Mecha de Diamante PCD",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Diamante PCD", "Uso": "Perforaciones" },
        variantes: [{ id: "MBDD", nombre: "Diámetro: 35mm" }]
    },
    "MBID": {
        codigoBase: "MBID", categoriaImg: "Diamante",
        titulo: "Mecha de Diamante PCD",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Diamante PCD", "Uso": "Perforaciones" },
        variantes: [{ id: "MBID", nombre: "Diámetro: 35mm" }]
    },
    "MCED": {
        codigoBase: "MCED", categoriaImg: "Diamante",
        titulo: "Mecha de Diamante PCD",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Diamante PCD", "Uso": "Perforaciones" },
        variantes: [{ id: "MCED", nombre: "Consultar medidas" }]
    },
    "MDD": {
        codigoBase: "MDD", categoriaImg: "Diamante",
        titulo: "Mecha de Diamante PCD",
        marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Material": "Diamante PCD", "Uso": "Perforaciones" },
        variantes: [{ id: "MDD", nombre: "Consultar medidas" }]
    }
};

/* ==========================================================================
   2. LÓGICA DE INTERFAZ Y RENDERIZADO INTELIGENTE
   ========================================================================== */

let productoActualInfo = null;
let codigoReal = "";

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Deducir qué producto es leyendo la URL
    let ruta = window.location.pathname;
    let nombreArchivo = ruta.split('/').pop();
    codigoReal = decodeURIComponent(nombreArchivo.replace('.html', '').trim());
    
    // 2. Buscar coincidencias en la Base de Conocimiento
    let keys = Object.keys(baseDatosProductos).sort((a, b) => b.length - a.length);
    for (let key of keys) {
        if (codigoReal.startsWith(key) || codigoReal.includes(key)) {
            productoActualInfo = baseDatosProductos[key];
            break;
        }
    }
    
    // 3. Pintar todos los datos (Imágenes, Textos, Selectores)
    cargarEstructuraProducto(productoActualInfo);

    // 4. Activar el botón de WhatsApp
    const btnWhatsapp = document.getElementById("btn-whatsapp");
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", function(e) {
            e.preventDefault();
            generarEnlaceWhatsApp();
        });
    }
});

function cargarEstructuraProducto(info) {
    // Si no lo encontramos en la BD, armamos un genérico de respaldo
    if(!info) {
        info = {
            codigoBase: "Generico", categoriaImg: "Sierras",
            titulo: "Herramienta " + codigoReal, marca: "Consultar",
            caracteristicasBasicas: { "Marca": "Consultar" },
            variantes: [{ nombre: "Consultar especificaciones" }]
        };
    }

    // A. SETEAR TEXTOS
    const tituloDOM = document.getElementById("producto-titulo");
    const marcaDOM = document.querySelector(".producto-info .marca");
    if (tituloDOM) tituloDOM.innerText = info.titulo;
    if (marcaDOM) marcaDOM.innerText = `Marca: ${info.marca}`;

    // B. LLENAR SELECTOR
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

    // C. INYECTAR GALERÍA DE IMÁGENES Y ACTIVAR ZOOM
    const contenedorImagen = document.querySelector(".producto-imagen");
    if (contenedorImagen) {
        // Armamos la ruta dinámica: imagenes/herramientas/Sierras/LG3D/
        let basePath = `../../../imagenes/herramientas/${info.categoriaImg}/${info.codigoBase}/`;
        
        let galeriaHTML = `
            <div id="zoom-container" style="overflow: hidden; position: relative; cursor: zoom-in; display: flex; justify-content: center; align-items: center; width: 100%; height: 350px; background: #fff; border-radius: 8px; border: 1px solid #eee;">
                <img id="main-image" src="${basePath}1.jpg" alt="${info.titulo}" style="transition: transform 0.1s ease; max-width: 100%; max-height: 100%; object-fit: contain;" onerror="this.src='../../../imagenes/logos/WoodTools.png'; this.onerror=null;">
            </div>
            <div class="galeria-miniaturas" style="display: flex; gap: 10px; margin-top: 15px; justify-content: center;">
        `;
        
        // El script intenta cargar las fotos 1.jpg, 2.jpg, 3.jpg, 4.jpg. 
        // Si no existen en tu carpeta, el evento "onerror" las oculta mágicamente para que no se vea el error.
        for(let i=1; i<=4; i++) {
            galeriaHTML += `<img src="${basePath}${i}.jpg" class="mini-img" style="width: 60px; height: 60px; object-fit: cover; border: 2px solid ${i===1?'#a41e22':'#ccc'}; border-radius: 4px; cursor: pointer;" onclick="cambiarImagen(this)" onerror="this.style.display='none'">`;
        }
        
        galeriaHTML += `</div>`;
        contenedorImagen.innerHTML = galeriaHTML;

        // Una vez creada la galería, prendemos el motor del Zoom
        activarZoom();
    }

    // D. RELLENAR TABLA
    const filas = document.querySelectorAll(".tabla-caracteristicas tr");
    filas.forEach(fila => {
        const th = fila.querySelector(".caracteristica-label");
        const td = fila.querySelector(".caracteristica-value");
        if (th && td) {
            const etiqueta = th.innerText.trim();
            if (etiqueta === "Código de artículo") {
                td.innerText = codigoReal;
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

// Lógica de Zoom de Mercado Libre
function activarZoom() {
    const contenedorZoom = document.getElementById("zoom-container");
    const imagenPrincipal = document.getElementById("main-image");

    if (contenedorZoom && imagenPrincipal) {
        contenedorZoom.addEventListener("mousemove", function(e) {
            const rect = contenedorZoom.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            imagenPrincipal.style.transformOrigin = `${x}% ${y}%`;
            imagenPrincipal.style.transform = "scale(2.5)";
        });

        contenedorZoom.addEventListener("mouseleave", function() {
            imagenPrincipal.style.transformOrigin = "center center";
            imagenPrincipal.style.transform = "scale(1)";
        });
    }
}

// Click en miniatura
window.cambiarImagen = function(elemento) {
    const imagenPrincipal = document.getElementById("main-image");
    if (imagenPrincipal && elemento.src) {
        imagenPrincipal.src = elemento.src;
        document.querySelectorAll(".mini-img").forEach(img => {
            img.style.borderColor = "#ccc";
        });
        elemento.style.borderColor = "#a41e22";
    }
};

// Generar WhatsApp
function generarEnlaceWhatsApp() {
    const selector = document.getElementById("variante-selector");
    let nombreProducto = productoActualInfo ? productoActualInfo.titulo : "Herramienta";
    let varianteSeleccionada = selector ? selector.value : "";

    if (selector && !selector.value) {
        alert("Por favor, elegí una medida o variante antes de consultar.");
        return;
    }

    const mensaje = `Hola! Consulto por ${nombreProducto} (Código: ${codigoReal}). Me interesa la variante: ${varianteSeleccionada}. ¿Me podrían pasar precio y stock?`;
    window.open(`https://wa.me/5491134609057?text=${encodeURIComponent(mensaje)}`, "_blank");
}