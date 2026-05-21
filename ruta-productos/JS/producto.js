/* ==========================================
    1. BASE DE CONOCIMIENTO (Sierras, Fresas Puras y Mechas)
   ========================================== */
const baseDatosProductos = {
    // ---------------------------------------------------------
    // SIERRAS Y TRTITURADOS
    // ---------------------------------------------------------
    "LG3D": {
        codigoBase: "LG3D", categoriaImg: "Sierras", carpetaImg: "LG3D",
        titulo: "Sierra para Melamina", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Carburo de tungsteno (HM) Widia", "Uso": "Melamina (ángulo Positivo - máquinas Industriales)", "Tipo de diente": "Trapezoidal-Plano / Positivo" },
        variantes: [ { id: "LG3D 0400", nombre: "LG3D 0400 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LG3D 0600", nombre: "LG3D 0600 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" }, { id: "LG3D 0800", nombre: "LG3D 0800 - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" } ]
    },
    "SSK12": {
        codigoBase: "SSK12", categoriaImg: "Sierras", carpetaImg: "SSK12",
        titulo: "Sierra para Melamina", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Melamina (máquinas Industriales)" },
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
        codigoBase: "LSB", categoriaImg: "Sierras", carpetaImg: "LSB2500 3X",
        titulo: "Sierra Circular Extra Silenciosa", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Placas Laminadas / Melamina" },
        variantes: [ { id: "LSB2500 3X", nombre: "LSB2500 3X - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LSB3000 3X", nombre: "LSB3000 3X - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" }, { id: "LSB3500 3X", nombre: "LSB3500 3X - D: 350mm | B: 3.5mm | d: 30mm | Z: 108" } ]
    },
    "LG2A": {
        codigoBase: "LG2A", categoriaImg: "Sierras", carpetaImg: "LG2A",
        titulo: "Sierra para Madera", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera maciza, blanca y dura", "Tipo de diente": "Alterno" },
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
        titulo: "Sierra para Madera Blanca y Dura", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Madera blanca y dura a favor/contra de la veta" },
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
        variantes: [ { id: "LP40M 016P", nombre: "LP40M 016P - D: 216mm | B: 1.2mm | d: 30mm | Z: 54" } ]
    },
    "LU4D": {
        codigoBase: "LU4D", categoriaImg: "Sierras", carpetaImg: "LU4D 0200",
        titulo: "Sierra Polivalente de Calidad Superior", marca: "Freud",
        caracteristicasBasicas: { "Marca": "Freud", "Material": "Widia", "Uso": "Multipropósito - Madera, Melamina y Aglomerado" },
        variantes: [ { id: "LU4D 0200", nombre: "LU4D 0200 - D: 250mm | B: 3.2mm | d: 30mm | Z: 80" }, { id: "LU4D 0300", nombre: "LU4D 0300 - D: 300mm | B: 3.2mm | d: 30mm | Z: 96" } ]
    },

    // ---------------------------------------------------------
    // FRESAS
    // ---------------------------------------------------------
    "F04C014": {
        codigoBase: "F04C014", categoriaImg: "Fresas", carpetaImg: "F04C014",
        titulo: "Fresa 1/4 Círculo", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Perfilado y Molduras", "Material": "Metal Duro" },
        variantes: [{ id: "F04C014", nombre: "F04C014 - Consultar medidas" }]
    },
    "F04C016": {
        codigoBase: "F04C016", categoriaImg: "Fresas", carpetaImg: "F04C014",
        titulo: "Fresa 1/4 Círculo", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Perfilado y Molduras", "Material": "Metal Duro" },
        variantes: [{ id: "F04C016", nombre: "F04C016 - Consultar medidas" }]
    },
    "F04C054": {
        codigoBase: "F04C054", categoriaImg: "Fresas", carpetaImg: "F04C014",
        titulo: "Fresa 1/4 Círculo", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Perfilado y Molduras", "Material": "Metal Duro" },
        variantes: [{ id: "F04C054", nombre: "F04C054 - Consultar medidas" }]
    },
    "F04C056": {
        codigoBase: "F04C056", categoriaImg: "Fresas", carpetaImg: "F04C014",
        titulo: "Fresa 1/4 Círculo", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Perfilado y Molduras", "Material": "Metal Duro" },
        variantes: [{ id: "F04C056", nombre: "F04C056 - Consultar medidas" }]
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
        titulo: "Fresa Regulable", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Juegos Regulables", "Material": "Metal Duro" },
        variantes: [{ id: "FRG0510", nombre: "FRG0510 - Consultar medidas" }]
    },
    "FRG1039": {
        codigoBase: "FRG1039", categoriaImg: "Fresas", carpetaImg: "FRG1039",
        titulo: "Fresa Regulable", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Juegos Regulables", "Material": "Metal Duro" },
        variantes: [{ id: "FRG1039", nombre: "FRG1039 - Consultar medidas" }]
    },
    "FRI01566": {
        codigoBase: "FRI01566", categoriaImg: "Fresas", carpetaImg: "FRI01566",
        titulo: "Fresa Helicoidal", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Rectas y Desbaste", "Material": "Metal Duro" },
        variantes: [{ id: "FRI01566", nombre: "FRI01566 - Consultar medidas" }]
    },
    "FRP5533": {
        codigoBase: "FRP5533", categoriaImg: "Fresas", carpetaImg: "FRP5533",
        titulo: "Fresa de Perfilado", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Perfilado y Molduras", "Material": "Metal Duro" },
        variantes: [{ id: "FRP5533", nombre: "FRP5533 - Consultar medidas" }]
    },
    "FRS0606": {
        codigoBase: "FRS0606", categoriaImg: "Fresas", carpetaImg: "FRS0606",
        titulo: "Fresa Recta", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Rectas y Desbaste", "Material": "Metal Duro" },
        variantes: [{ id: "FRS0606", nombre: "FRS0606 - Consultar medidas" }]
    },
    "FRS0704": {
        codigoBase: "FRS0704", categoriaImg: "Fresas", carpetaImg: "FRS0704",
        titulo: "Fresa Recta", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Rectas y Desbaste", "Material": "Metal Duro" },
        variantes: [{ id: "FRS0704", nombre: "FRS0704 - Consultar medidas" }]
    },
    "JFDE4": {
        codigoBase: "JFDE4", categoriaImg: "Fresas", carpetaImg: "JFDE4",
        titulo: "Juego de Fresas", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Sistemas de Encastre", "Material": "Metal Duro" },
        variantes: [{ id: "JFDE4", nombre: "JFDE4 - Consultar medidas" }]
    },
    "JFE254": {
        codigoBase: "JFE254", categoriaImg: "Fresas", carpetaImg: "JFE254",
        titulo: "Juego de Fresas", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Sistemas de Encastre", "Material": "Metal Duro" },
        variantes: [{ id: "JFE254", nombre: "JFE254 - Consultar medidas" }]
    },
    "JFE5022": {
        codigoBase: "JFE5022", categoriaImg: "Fresas", carpetaImg: "JFE5022",
        titulo: "Juego de Fresas", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Juegos Regulables", "Material": "Metal Duro" },
        variantes: [{ id: "JFE5022", nombre: "JFE5022 - Consultar medidas" }]
    },
    "JFE8Z124": {
        codigoBase: "JFE8Z124", categoriaImg: "Fresas", carpetaImg: "JFE8Z124",
        titulo: "Juego de Fresas", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Sistemas de Encastre", "Material": "Metal Duro" },
        variantes: [{ id: "JFE8Z124", nombre: "JFE8Z124 - Consultar medidas" }]
    },
    "JFMPV14": {
        codigoBase: "JFMPV14", categoriaImg: "Fresas", carpetaImg: "JFMPV14",
        titulo: "Juego de Fresas", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Perfilado y Molduras", "Material": "Metal Duro" },
        variantes: [{ id: "JFMPV14", nombre: "JFMPV14 - Consultar medidas" }]
    },
    "JFPMS10": {
        codigoBase: "JFPMS10", categoriaImg: "Fresas", carpetaImg: "JFPMS10",
        titulo: "Juego de Fresas", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Juegos Regulables", "Material": "Metal Duro" },
        variantes: [{ id: "JFPMS10", nombre: "JFPMS10 - Consultar medidas" }]
    },
    "LIMMUE": {
        codigoBase: "LIMMUE", categoriaImg: "Fresas", carpetaImg: "JFPMS10LIMMUE",
        titulo: "Fresa Especial", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Perfilado y Molduras", "Material": "Metal Duro" },
        variantes: [{ id: "LIMMUE", nombre: "LIMMUE - Consultar medidas" }]
    },
    "CB0750660": {
        codigoBase: "CB0750660", categoriaImg: "Fresas", carpetaImg: "CB0750660",
        titulo: "Fresa Schiavon", marca: "Schiavon",
        caracteristicasBasicas: { "Marca": "Schiavon", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "CB0750660", nombre: "CB0750660 - Consultar medidas" }]
    },
    "CB13006100": {
        codigoBase: "CB13006100", categoriaImg: "Fresas", carpetaImg: "CB13006100",
        titulo: "Fresa Schiavon", marca: "Schiavon",
        caracteristicasBasicas: { "Marca": "Schiavon", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "CB13006100", nombre: "CB13006100 - Consultar medidas" }]
    },
    "FMR04": {
        codigoBase: "FMR04", categoriaImg: "Fresas", carpetaImg: "FMR04",
        titulo: "Fresa", marca: "Franzoi",
        caracteristicasBasicas: { "Marca": "Franzoi", "Uso": "Fresas para madera", "Material": "Metal Duro" },
        variantes: [{ id: "FMR04", nombre: "FMR04 - Consultar medidas" }]
    },

    // ---------------------------------------------------------
    // HERRAMIENTAS PCD DIAMANTE
    // ---------------------------------------------------------
};

// ===========================================
// 2. FUNCIÓN PRINCIPAL DE CARGA
// ===========================================
function obtenerCodigoProducto() {
    const url = window.location.pathname;
    const partes = url.split('/');
    const nombreArchivo = partes[partes.length - 1];
    return nombreArchivo.replace('.html', '');
}

function cargarEstructuraProducto(info) {
    const codigoProducto = obtenerCodigoProducto();
    
    if (!info || !info.variantes || info.variantes.length === 0) {
        console.error("Información del producto no válida");
        return;
    }

    const variante = info.variantes[0];
    const carpetaImagenes = `../../imagenes/herramientas/${info.categoriaImg}/${info.carpetaImg}/`;

    document.title = `${variante.nombre} | ${info.marca} | WoodTools`;

    const tituloElement = document.getElementById('producto-titulo');
    if (tituloElement) {
        tituloElement.textContent = `Herramienta ${codigoProducto}`;
    }

    const marcaElement = document.querySelector('.marca');
    if (marcaElement) {
        marcaElement.textContent = `Marca: ${info.marca}`;
    }

    const selectorVariante = document.getElementById('variante-selector');
    if (selectorVariante) {
        selectorVariante.innerHTML = '';
        info.variantes.forEach(v => {
            const option = document.createElement('option');
            option.value = v.id;
            option.textContent = v.nombre;
            selectorVariante.appendChild(option);
        });
        selectorVariante.value = variante.id;
    }

    const caractElements = document.querySelectorAll('.tabla-caracteristicas td.caracteristica-value');
    if (caractElements.length >= 4) {
        caractElements[0].textContent = info.caracteristicasBasicas["Marca"] || "";
        caractElements[1].textContent = info.caracteristicasBasicas["Material"] || "";
        caractElements[2].textContent = info.caracteristicasBasicas["Uso"] || "";
        caractElements[3].textContent = info.caracteristicasBasicas["Tipo de diente"] || "";
    }

    cargarImagenesProducto(carpetaImagenes);
}

function cargarImagenesProducto(carpetaImagenes) {
    const contenedorImagenes = document.querySelector('.producto-imagen');
    
    if (!contenedorImagenes) {
        console.error("Contenedor de imágenes no encontrado");
        return;
    }

    contenedorImagenes.innerHTML = '';

    for (let i = 1; i <= 20; i++) {
        const extensiones = ['jpeg', 'jpg', 'png', 'gif'];
        let imagenEncontrada = false;

        extensiones.forEach(ext => {
            const nomImg = `${i}.${ext}`;
            const imgElement = document.createElement('img');
            imgElement.src = `${carpetaImagenes}${nomImg}`;
            imgElement.alt = `Imagen ${i}`;
            imgElement.style.cursor = 'pointer';
            imgElement.onclick = function() {
                setMainImage(this);
            };

            imgElement.onerror = function() {
                if (!imagenEncontrada) {
                    imgElement.remove();
                }
            };

            imgElement.onload = function() {
                imagenEncontrada = true;
            };

            contenedorImagenes.appendChild(imgElement);
        });

        if (!imagenEncontrada) break;
    }

    if (contenedorImagenes.children.length > 0) {
        setMainImage(contenedorImagenes.children[0]);
    }
}

window.setMainImage = function(elemento) {
    const imagenes = document.querySelectorAll('.producto-imagen img');
    imagenes.forEach(img => img.style.border = 'none');
    elemento.style.border = '3px solid #a41e22';
};

function activarZoom() {
    const imagenPrincipal = document.querySelector('.producto-imagen img');
    
    if (imagenPrincipal) {
        imagenPrincipal.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            this.style.transformOrigin = `${x}% ${y}%`;
            this.style.transform = 'scale(1.5)';
            this.style.transition = 'none';
        });

        imagenPrincipal.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease';
        });
    }
}

window.cambiarImagen = function(elemento) {
    setMainImage(elemento);
};

function generarEnlaceWhatsApp() {
    const codigoProducto = obtenerCodigoProducto();
    const enlaceWhatsApp = document.getElementById('btn-whatsapp');
    
    if (enlaceWhatsApp) {
        const mensaje = `Consulta sobre el producto: ${codigoProducto}`;
        const numeroWhatsApp = '5491134609057';
        enlaceWhatsApp.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const codigoProducto = obtenerCodigoProducto();
    
    if (baseDatosProductos[codigoProducto]) {
        const infoProducto = baseDatosProductos[codigoProducto];
        cargarEstructuraProducto(infoProducto);
        generarEnlaceWhatsApp();
        activarZoom();
    } else {
        console.error(`Producto ${codigoProducto} no encontrado en la base de datos`);
    }
});
