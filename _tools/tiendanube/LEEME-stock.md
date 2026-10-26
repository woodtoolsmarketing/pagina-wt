# Actualizar stock de Tienda Nube desde un Excel

Herramienta para cargar/actualizar el **stock** de los productos de Tienda Nube a
partir de una planilla, y **publicar** automáticamente los que queden con stock > 0.

## Cómo se usa (flujo recomendado)

1. **`1-generar-plantilla.cmd`** → crea `stock-plantilla.xlsx` con TODOS los productos
   (columna SKU + nombre + stock actual). *Opcional*: podés usar tu propio Excel en vez de esto.
2. Abrí la planilla y completá la columna **Stock** con las cantidades reales
   (dejá en 0 los que no tenés). Guardá.
3. **`2-simular.cmd`** → muestra qué cambiaría, **sin escribir nada**. Revisá que esté bien.
4. **`3-aplicar.cmd`** → aplica: actualiza el stock en la tienda y **publica los que queden con stock > 0**.

> Podés **arrastrar tu propio Excel/CSV** encima de `2-simular.cmd` o `3-aplicar.cmd`
> en vez de usar la plantilla.

## Qué columnas necesita el archivo

Solo dos (detecta el nombre solo, sin importar acentos/mayúsculas):

- **SKU** → acepta: `SKU`, `Código`, `Cod`, `Modelo`, `Referencia`, `Identificador`.
- **Stock** → acepta: `Stock`, `Cantidad`, `Existencias`, `Stock Actual`, `Disponible`, `Unidades`.

El resto de las columnas se ignoran. El match con la tienda es **por SKU**
(los SKU que no existan en la tienda se listan aparte, no rompen nada).

## Opciones (línea de comando)

```
py -3 actualizar-stock.py "archivo.xlsx"                      simulación
py -3 actualizar-stock.py "archivo.xlsx" --aplicar            aplica (stock + publica con stock>0)
py -3 actualizar-stock.py "archivo.xlsx" --aplicar --sin-publicar        solo stock, no publica
py -3 actualizar-stock.py "archivo.xlsx" --aplicar --ocultar-sin-stock   además oculta los que quedan en 0
py -3 actualizar-stock.py --plantilla                        regenera stock-plantilla.xlsx
```

## Notas

- **Sin `--aplicar` nunca escribe nada** (simulación). Es la forma segura de revisar.
- Publica solo los que quedan con **stock > 0**; a los demás no los toca (salvo `--ocultar-sin-stock`).
- Usa la API de Tienda Nube con el token de `api-config.json` (ya configurado).
- Ojo con la **moneda**: los precios de la tienda están en USD. Antes de publicar en masa,
  conviene confirmar que se muestran bien a los clientes.
