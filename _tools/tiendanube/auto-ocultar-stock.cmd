@echo off
rem Tarea horaria (la lanza auto-ocultar-stock.vbs, oculta).
rem 1) stock-sitio.js: actualiza stock-tienda.json del sitio (tarjetas -> tienda
rem    si hay stock) y lo sube. Va PRIMERO: un producto que se agoto sale de los
rem    enlaces del sitio antes de que la regla lo oculte en la tienda.
rem 2) auto-ocultar-stock.js --aplicar: oculta lo que no tiene stock y publica lo
rem    que tiene. SOLO si el paso 1 salio bien: si fallo la API o el FTP, no se
rem    oculta nada (mejor "sin stock" en la tienda que un enlace a una pagina 404).
rem La salida completa de la ultima corrida queda en auto-ocultar-stock.log y el
rem resultado de cada corrida se agrega a stock-historial.log (no se pisa).
set "AQUI=%~dp0"
set "NODE=C:\Program Files\nodejs\node.exe"
set "LOG=%AQUI%auto-ocultar-stock.log"
set "HIST=%AQUI%stock-historial.log"

"%NODE%" "%AQUI%stock-sitio.js" > "%LOG%" 2>&1
if errorlevel 1 (
  >> "%HIST%" echo %date% %time% ERROR en stock-sitio.js: no se aplico la regla de ocultar. Ver auto-ocultar-stock.log
  exit /b 1
)
"%NODE%" "%AQUI%auto-ocultar-stock.js" --aplicar >> "%LOG%" 2>&1
if errorlevel 1 (
  >> "%HIST%" echo %date% %time% ERROR en auto-ocultar-stock.js. Ver auto-ocultar-stock.log
  exit /b 1
)
>> "%HIST%" echo %date% %time% OK
