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
  call npm install basic-ftp
  echo.
)

node subir.js
echo.
echo Podes cerrar esta ventana.
pause
