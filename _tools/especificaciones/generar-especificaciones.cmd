@echo off
rem Regenera ruta-productos/JS/especificaciones.json desde datos-tecnicos.xlsx.
rem Corre esto cada vez que reemplaces el Excel por una lista nueva.
setlocal
cd /d "%~dp0"
where py >/dev/null 2>/dev/null && ( py -3 generar-especificaciones.py & goto fin )
python generar-especificaciones.py
:fin
echo.
pause
