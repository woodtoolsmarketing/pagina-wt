@echo off
chcp 65001 >nul
title Marcar todo como subido - WoodTools
cd /d "%~dp0"
echo Esto marca TODOS los archivos como "ya subidos" SIN subir nada.
echo.
echo Usalo UNA vez si ya hiciste una subida completa con FileZilla:
echo asi, de ahora en mas, "Subir cambios" enviara solo lo que edites.
echo.
node subir.js --marcar
echo.
pause
