@echo off
chcp 65001 >nul
title Regenerar fotos de la galeria - WoodTools
cd /d "%~dp0"
echo Regenerando el indice de fotos...
echo.
node generar-manifest.js
if errorlevel 1 (
  echo.
  echo *** Hubo un problema. Verifica que Node este instalado ^(node -v^). ***
  echo.
  pause
  exit /b 1
)
echo.
echo Ahora hace doble clic en  Subir-cambios-al-servidor.bat  para publicarlo.
echo.
echo Podes cerrar esta ventana.
pause >nul
