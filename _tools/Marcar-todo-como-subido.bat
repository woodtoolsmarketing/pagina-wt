@echo off
chcp 65001 >nul
title Marcar todo como subido - WoodTools
cd /d "%~dp0"
echo ============================================================
echo  MARCAR TODO COMO SUBIDO  (NO sube nada)
echo ============================================================
echo.
echo Esto marca TODOS los archivos como "ya subidos" SIN subir nada.
echo.
echo Usalo UNA sola vez, si ya hiciste una subida completa con FileZilla:
echo asi, de ahora en mas, "Subir cambios" enviara solo lo que edites.
echo.
echo *** OJO: si tenias cambios sin subir, quedan marcados como subidos
echo     y NO se van a enviar nunca. Si lo que queres es publicar,
echo     cerra esta ventana y usa  Subir-cambios-al-servidor.bat  ***
echo.
set RESP=
set /p RESP=Escribi  SI  y Enter para continuar (cualquier otra cosa cancela): 
if /i not "%RESP%"=="SI" (
  echo.
  echo Cancelado. No se toco nada.
  echo.
  pause
  exit /b 0
)
echo.
node subir.js --marcar
if errorlevel 1 (
  echo.
  echo *** No se pudo marcar. Verifica que Node este instalado ^(node -v^). ***
)
echo.
pause
