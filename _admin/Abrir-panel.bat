@echo off
chcp 65001 >nul
title Panel de productos - WoodTools (interno)
cd /d "%~dp0"
echo ============================================================
echo  PANEL DE PRODUCTOS (uso interno)
echo ============================================================
echo.
echo Se abrira solo en el navegador (Edge o Chrome).
echo Si no abre, copia esta direccion en Chrome o Edge:
echo     http://localhost:8765/panel.html
echo.
echo Deja esta ventana abierta mientras usas el panel.
echo Cerrala cuando termines para apagarlo.
echo.
node servidor.js
echo.
echo (Si aparecio un error, verifica que Node este instalado: node -v)
pause
