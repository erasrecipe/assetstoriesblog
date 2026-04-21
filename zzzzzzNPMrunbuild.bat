@echo off
echo ========================================
echo   CALCULATOR WEBSITE - ROVO DEV
echo   Starting Rovo Chat Assistant...
echo ========================================
echo.

cd /d "%~dp0"

echo Starting Rovo Dev CLI...
echo.
echo Rovo Chat will help you with:
echo - Building new calculators
echo - Fixing errors
echo - Managing batches
echo - Research and optimization
echo ========================================
echo.

call npm run build

pause
