@echo off
chcp 65001 >nul
title Optimizar y preparar fotos - WoodTools
cd /d "%~dp0"

echo ============================================================
echo  OPTIMIZAR Y PREPARAR FOTOS
echo ============================================================
echo.

REM --- Instala la herramienta de imagenes la primera vez (necesita internet) ---
if not exist "node_modules\sharp\" (
  echo Instalando la herramienta de imagenes por unica vez...
  echo Esto puede tardar ^~1 minuto y necesita conexion a internet.
  echo.
  call npm install
  echo.
  if not exist "node_modules\sharp\" (
    echo No se pudo instalar la herramienta. Verifica internet y que Node este instalado.
    echo.
    pause
    exit /b 1
  )
)

REM --- 1) Achicar/comprimir las fotos pesadas ---
echo Paso 1 de 2: optimizando fotos...
node optimizar-fotos.js
echo.

REM --- 2) Regenerar el indice de la galeria ---
echo Paso 2 de 2: regenerando el indice de fotos...
node generar-manifest.js
echo.

echo ============================================================
echo  LISTO. Ahora subi por FTP al servidor:
echo    - las carpetas de fotos nuevas, y
echo    - imagenes\herramientas\galeria-manifest.json
echo ============================================================
echo.
echo Podes cerrar esta ventana.
pause >nul
