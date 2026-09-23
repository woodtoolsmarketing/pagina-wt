@echo off
rem Ejecuta la regla de auto-ocultar sin stock y guarda la salida de la ultima
rem corrida en auto-ocultar-stock.log (se sobrescribe cada vez).
"C:\Program Files\nodejs\node.exe" "%~dp0auto-ocultar-stock.js" --aplicar > "%~dp0auto-ocultar-stock.log" 2>&1
