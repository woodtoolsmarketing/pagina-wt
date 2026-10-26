@echo off
rem SIMULACION: muestra que cambiaria, SIN escribir nada en la tienda.
rem Doble clic = usa stock-plantilla.xlsx.  O arrastra tu Excel/CSV sobre este .cmd.
setlocal
cd /d "%~dp0"
set "FILE=%~1"
if "%FILE%"=="" set "FILE=stock-plantilla.xlsx"
where py >nul 2>nul && ( py -3 actualizar-stock.py "%FILE%" & goto fin )
python actualizar-stock.py "%FILE%"
:fin
echo.
pause
