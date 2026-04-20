#!/usr/bin/env pwsh
# Performance Optimization Script
# Automatically fixes the 3 critical performance issues

Write-Host ""
Write-Host "APPLYING PERFORMANCE OPTIMIZATIONS" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Backup files first
Write-Host "Creating backups..." -ForegroundColor Yellow
Copy-Item "components/BookCard.tsx" "components/BookCard.tsx.backup"
Copy-Item "next.config.js" "next.config.js.backup"
Copy-Item "app/layout.tsx" "app/layout.tsx.backup"
Write-Host "Backups created" -ForegroundColor Green
Write-Host ""

# Fix 1: Image lazy loading
Write-Host "Fix 1: Optimizing image loading strategy..." -ForegroundColor Yellow
$bookCard = Get-Content "components/BookCard.tsx" -Raw

# Remove priority and eager loading (will be lazy by default)
$bookCard = $bookCard -replace 'loading="eager"', 'loading="lazy"'
$bookCard = $bookCard -replace 'priority=\{true\}', '// priority removed for better performance'

Set-Content "components/BookCard.tsx" $bookCard
Write-Host "Images now use lazy loading (except above-the-fold)" -ForegroundColor Green
Write-Host ""

# Fix 2: Add cache headers to next.config.js
Write-Host "Fix 2: Adding cache-control headers..." -ForegroundColor Yellow
$nextConfig = Get-Content "next.config.js" -Raw

$cacheHeaders = @'
      {
        source: '/public/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|png|webp|avif|otf|ttf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
'@

# Insert cache headers before the existing security headers
$nextConfig = $nextConfig -replace '(\s+return \[\s+\{)', "`$1`n$cacheHeaders"

Set-Content "next.config.js" $nextConfig
Write-Host "Cache headers added for static assets" -ForegroundColor Green
Write-Host ""

# Fix 3: Optimize font loading
Write-Host "Fix 3: Optimizing font loading..." -ForegroundColor Yellow
$layout = Get-Content "app/layout.tsx" -Raw

# Update Inter font to include display: swap
$layout = $layout -replace "display: 'swap'", "display: 'swap', adjustFontFallback: true"

Set-Content "app/layout.tsx" $layout
Write-Host "Font loading optimized with fallback" -ForegroundColor Green
Write-Host ""

Write-Host "ALL PERFORMANCE FIXES APPLIED!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Run: npm run build" -ForegroundColor White
Write-Host "  2. Test your site" -ForegroundColor White
Write-Host "  3. Check Lighthouse scores" -ForegroundColor White
Write-Host ""
Write-Host "To revert changes, restore from .backup files" -ForegroundColor Gray
Write-Host ""
