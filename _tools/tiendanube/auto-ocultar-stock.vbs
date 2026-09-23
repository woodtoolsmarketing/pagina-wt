' Lanza auto-ocultar-stock.cmd de forma OCULTA (sin ventana de consola).
' Lo usa la tarea programada de Windows para que no aparezca un cartel negro
' cada vez que corre. El "0" es "ventana oculta"; el "False" = no esperar.
Dim carpeta
carpeta = Left(WScript.ScriptFullName, InStrRev(WScript.ScriptFullName, "\"))
CreateObject("WScript.Shell").Run """" & carpeta & "auto-ocultar-stock.cmd""", 0, False
