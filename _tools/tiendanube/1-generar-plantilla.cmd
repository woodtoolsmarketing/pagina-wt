@echo off
rem Genera stock-plantilla.xlsx con TODOS los productos (SKU + nombre + stock actual).
rem Completá la columna "Stock" y despues usá 2-simular.cmd / 3-aplicar.cmd.
setlocal
cd /d "%~dp0"
where py >nul 2>nul && ( py -3 actualizar-stock.py --plantilla & goto fin )
python actualizar-stock.py --plantilla
:fin
echo.
pause
