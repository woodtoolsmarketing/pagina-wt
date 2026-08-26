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
if errorlevel 1 (
  echo.
  echo *** Hubo un problema optimizando las fotos. ***
  echo Verifica que Node este instalado ^(node -v^).
  echo.
  pause
  exit /b 1
)
echo.

REM --- 2) Regenerar el indice de la galeria ---
echo Paso 2 de 2: regenerando el indice de fotos...
node generar-manifest.js
if errorlevel 1 (
  echo.
  echo *** Hubo un problema regenerando el indice de fotos. ***
  echo Las fotos se optimizaron, pero el indice NO se actualizo.
  echo.
  pause
  exit /b 1
)
echo.

echo ============================================================
echo  LISTO.
echo  Ahora hace doble clic en  Subir-cambios-al-servidor.bat
echo  para publicar los cambios en el sitio.
echo ============================================================
echo.
echo Podes cerrar esta ventana.
pause >nul
