@echo off
setlocal
set "INSTALLER=%~dp0.installer\install.ps1"

where pwsh.exe >nul 2>nul
if %ERRORLEVEL% EQU 0 (
  pwsh.exe -NoProfile -ExecutionPolicy Bypass -File "%INSTALLER%" %*
) else (
  powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%INSTALLER%" %*
)

set "RESULT=%ERRORLEVEL%"
if not "%RESULT%"=="0" echo Installation failed with exit code %RESULT%.
if "%~1"=="" pause
exit /b %RESULT%
