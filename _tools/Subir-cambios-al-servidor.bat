@echo off
chcp 65001 >nul
title Subir cambios al servidor - WoodTools
cd /d "%~dp0"
echo ============================================================
echo  SUBIR CAMBIOS AL SERVIDOR (por FTP)
echo ============================================================
echo.

if not exist "ftp-config.json" (
  echo *** FALTA configurar tus datos de FTP ***
  echo.
  echo 1^) Copia el archivo  ftp-config.example.json  y renombralo a  ftp-config.json
  echo 2^) Abrilo con el Bloc de notas y completa: host, user, password y remoteDir
  echo    ^(son los mismos datos que usas en FileZilla^).
  echo.
  pause
  exit /b 1
)

if not exist "node_modules\basic-ftp\" (
  echo Instalando la herramienta de FTP por unica vez ^(necesita internet^)...
  call npm install
  echo.
  if not exist "node_modules\basic-ftp\" (
    echo *** No se pudo instalar la herramienta de FTP. ***
    echo Verifica que tengas internet y que Node este instalado ^(node -v^).
    echo.
    pause
    exit /b 1
  )
)

node subir.js
if errorlevel 1 (
  echo.
  echo ============================================================
  echo  *** ATENCION: la subida NO termino bien. ***
  echo  Mira el mensaje de arriba. Lo que fallo se reintenta solo
  echo  la proxima vez que hagas doble clic aca.
  echo ============================================================
  echo.
  pause
  exit /b 1
)
echo.
echo Listo. Podes cerrar esta ventana.
echo.
pause
