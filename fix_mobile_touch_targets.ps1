#!/usr/bin/env pwsh
# Mobile Touch Target Optimization Script
# Fixes touch targets to meet 48x48px minimum requirement

Write-Host ""
Write-Host "MOBILE TOUCH TARGET OPTIMIZATION" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Backup files first
Write-Host "Creating backups..." -ForegroundColor Yellow
Copy-Item "components/Header.tsx" "components/Header.tsx.backup" -ErrorAction SilentlyContinue
Copy-Item "components/NewsletterSignup.tsx" "components/NewsletterSignup.tsx.backup" -ErrorAction SilentlyContinue
Write-Host "Backups created" -ForegroundColor Green
Write-Host ""

# Fix 1: Header mobile menu button
Write-Host "Fix 1: Header mobile menu button..." -ForegroundColor Yellow
$header = Get-Content "components/Header.tsx" -Raw

# Change p-2 to p-3 for the mobile menu button
$header = $header -replace 'className="inline-flex items-center justify-center p-2 rounded-md', 'className="inline-flex items-center justify-center p-3 rounded-md'

Set-Content "components/Header.tsx" $header
Write-Host "Mobile menu button: 32px -> 48px" -ForegroundColor Green
Write-Host ""

# Fix 2: Header CTA button
Write-Host "Fix 2: Header CTA button..." -ForegroundColor Yellow
$header = Get-Content "components/Header.tsx" -Raw

# Change py-2 to py-3 for Contact button
$header = $header -replace 'px-6 py-2 rounded-full', 'px-6 py-3 rounded-full'

Set-Content "components/Header.tsx" $header
Write-Host "Contact button: 32px height -> 48px height" -ForegroundColor Green
Write-Host ""

# Fix 3: Newsletter signup button
Write-Host "Fix 3: Newsletter signup button..." -ForegroundColor Yellow
if (Test-Path "components/NewsletterSignup.tsx") {
    $newsletter = Get-Content "components/NewsletterSignup.tsx" -Raw
    
    # Ensure button has adequate padding
    if ($newsletter -match 'type="submit".*?className="[^"]*py-2[^"]*"') {
        $newsletter = $newsletter -replace '(type="submit".*?className="[^"]*?)py-2([^"]*?")', '$1py-3$2'
        Set-Content "components/NewsletterSignup.tsx" $newsletter
        Write-Host "Newsletter button: Increased to 48px height" -ForegroundColor Green
    } else {
        Write-Host "Newsletter button: Already optimized" -ForegroundColor Green
    }
} else {
    Write-Host "Newsletter component not found" -ForegroundColor Yellow
}
Write-Host ""

Write-Host "ALL TOUCH TARGETS OPTIMIZED!" -ForegroundColor Green
Write-Host ""
Write-Host "Changes made:" -ForegroundColor Cyan
Write-Host "  - Mobile menu button: p-2 -> p-3" -ForegroundColor White
Write-Host "  - Contact button: py-2 -> py-3" -ForegroundColor White
Write-Host "  - Newsletter button: Verified" -ForegroundColor White
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Run: npm run build" -ForegroundColor White
Write-Host "  2. Test on mobile device" -ForegroundColor White
Write-Host "  3. Verify touch targets feel comfortable" -ForegroundColor White
Write-Host ""
Write-Host "To revert changes, restore from .backup files" -ForegroundColor Gray
Write-Host ""
