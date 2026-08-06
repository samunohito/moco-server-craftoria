@ECHO OFF
SETLOCAL
CD "%~dp0"
java -version 2>&1 || GOTO JAVAERROR
IF NOT EXIST "%cd%\serverstarter-2.4.1.jar" (
  %SYSTEMROOT%\SYSTEM32\bitsadmin.exe /rawreturn /nowrap /transfer starter /dynamic /download /priority foreground https://github.com/TeamAOF/ServerStarter/releases/download/v2.4.1/serverstarter-2.4.1.jar "%cd%\serverstarter-2.4.1.jar"
)
java -jar serverstarter-2.4.1.jar
GOTO EOF
:JAVAERROR
ECHO ERROR: Java 21 or 25 was not found in PATH.
:EOF
pause
