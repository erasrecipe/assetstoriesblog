#!/usr/bin/env pwsh
# Mobile Text Readability Optimization Script
# Makes small text responsive (larger on bigger screens)

Write-Host ""
Write-Host "MOBILE TEXT READABILITY OPTIMIZATION" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "This will make text-xs (12px) responsive:" -ForegroundColor White
Write-Host "  Mobile: 12px" -ForegroundColor Gray
Write-Host "  Desktop: 14px" -ForegroundColor Gray
Write-Host ""

# Backup files
Write-Host "Creating backups..." -ForegroundColor Yellow
$filesToFix = @(
    "components/BookCard.tsx",
    "components/ComparisonCard.tsx",
    "components/DarkModeToggle.tsx",
    "components/RelatedComparisons.tsx",
    "components/SocialShare.tsx"
)

foreach ($file in $filesToFix) {
    if (Test-Path $file) {
        Copy-Item $file "$file.backup" -Force
    }
}
Write-Host "Backups created" -ForegroundColor Green
Write-Host ""

# Fix each file
$fixed = 0
foreach ($file in $filesToFix) {
    if (Test-Path $file) {
        Write-Host "Processing $file..." -ForegroundColor Yellow
        
        $content = Get-Content $file -Raw
        
        # Replace text-xs with text-xs sm:text-sm (only if not already responsive)
        if ($content -match 'text-xs(?!\s+sm:)') {
            $content = $content -replace '\btext-xs\b(?!\s+sm:)', 'text-xs sm:text-sm'
            Set-Content $file $content
            Write-Host "  Updated: text-xs -> text-xs sm:text-sm" -ForegroundColor Green
            $fixed++
        } else {
            Write-Host "  Already optimized" -ForegroundColor Gray
        }
    }
}

Write-Host ""
if ($fixed -gt 0) {
    Write-Host "TEXT READABILITY OPTIMIZED!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Files updated: $fixed" -ForegroundColor White
} else {
    Write-Host "All files already optimized!" -ForegroundColor Green
}

Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Run: npm run build" -ForegroundColor White
Write-Host "  2. Test on various screen sizes" -ForegroundColor White
Write-Host "  3. Verify text is readable" -ForegroundColor White
Write-Host ""
Write-Host "To revert changes, restore from .backup files" -ForegroundColor Gray
Write-Host ""
