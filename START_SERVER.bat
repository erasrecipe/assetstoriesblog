@echo off
echo ========================================
echo   FILES SWAP - PDF CONVERTER
echo   Starting Development Server...
echo ========================================
echo.

cd /d "%~dp0"

echo Starting server on http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev

pause
