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
echo     http://127.0.0.1:8765/panel.html
echo.
echo Deja esta ventana abierta mientras usas el panel.
echo Cerrala cuando termines para apagarlo.
echo.
node servidor.js
echo.
echo El panel se apago. Si nunca llego a abrir, verifica que Node
echo este instalado ^(node -v^).
pause
