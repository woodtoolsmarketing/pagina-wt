@echo off
rem APLICA de verdad: actualiza el stock en Tienda Nube y publica los que queden con stock > 0.
rem Doble clic = usa stock-plantilla.xlsx.  O arrastra tu Excel/CSV sobre este .cmd.
rem (Para NO publicar, agregá  --sin-publicar  al final de la linea de abajo.)
setlocal
cd /d "%~dp0"
set "FILE=%~1"
if "%FILE%"=="" set "FILE=stock-plantilla.xlsx"
echo Vas a ESCRIBIR en la tienda (stock + publicar). Ctrl+C para cancelar.
pause
where py >nul 2>nul && ( py -3 actualizar-stock.py "%FILE%" --aplicar & goto fin )
python actualizar-stock.py "%FILE%" --aplicar
:fin
echo.
pause
