# Title Tag Optimizer
# Optimizes all title tags to 50-60 characters for better SEO

Write-Host "`n📝 TITLE TAG OPTIMIZER" -ForegroundColor Cyan
Write-Host "=======================`n" -ForegroundColor Cyan

$files = Get-ChildItem "data/comparisons" -Filter "*.json"
$modified = 0
$tooLong = 0
$tooShort = 0
$perfect = 0

Write-Host "Analyzing $($files.Count) comparison files...`n" -ForegroundColor Yellow

foreach ($file in $files) {
    $json = Get-Content $file.FullName | ConvertFrom-Json
    $originalTitle = $json.title
    $originalLength = $originalTitle.Length
    $needsUpdate = $false
    
    # Remove common bloat patterns
    $newTitle = $originalTitle
    $newTitle = $newTitle -replace ': Head to Head Comparison', ''
    $newTitle = $newTitle -replace ': Head-to-Head Comparison', ''
    $newTitle = $newTitle -replace ' - Complete Comparison', ''
    $newTitle = $newTitle -replace ' Comparison Guide', ''
    
    # Check if we need to optimize
    $newLength = $newTitle.Length
    
    if ($newLength -gt 60) {
        # Still too long after removing bloat - truncate intelligently
        if ($newTitle -match '^(.+)\s+vs\s+(.+)$') {
            $book1 = $matches[1]
            $book2 = $matches[2]
            
            # Try: "Book1 vs Book2 (2026)"
            $compact = "$book1 vs $book2 (2026)"
            
            if ($compact.Length -le 60) {
                $newTitle = $compact
            } else {
                # Last resort: truncate at word boundary
                $words = $newTitle.Split(' ')
                $truncated = ""
                foreach ($word in $words) {
                    if (($truncated + " " + $word).Length -lt 57) {
                        $truncated += " " + $word
                    } else {
                        break
                    }
                }
                $newTitle = $truncated.Trim() + "..."
            }
        }
        $tooLong++
        $needsUpdate = $true
    } elseif ($newLength -lt 50) {
        # Too short - add year for freshness
        if ($newTitle -notmatch '2026') {
            $newTitle = "$newTitle (2026)"
        }
        
        # Still short? Add context
        if ($newTitle.Length -lt 50 -and $newTitle -notmatch 'Which|Comparison') {
            $newTitle = $newTitle -replace '\(2026\)', 'Comparison (2026)'
        }
        
        $tooShort++
        $needsUpdate = $true
    } else {
        $perfect++
    }
    
    # Update if changed
    if ($newTitle -ne $originalTitle) {
        $json.title = $newTitle
        $json | ConvertTo-Json -Depth 10 | Set-Content $file.FullName -NoNewline
        $modified++
        
        Write-Host "✓ $($file.Name)" -ForegroundColor Green
        Write-Host "  Before ($originalLength chars): $originalTitle" -ForegroundColor Gray
        Write-Host "  After ($($newTitle.Length) chars): $newTitle" -ForegroundColor White
        Write-Host ""
    }
}

Write-Host "`n═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "✅ OPTIMIZATION COMPLETE!" -ForegroundColor Green
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "Files Modified: $modified" -ForegroundColor White
Write-Host "Originally Too Long: $tooLong" -ForegroundColor Yellow
Write-Host "Originally Too Short: $tooShort" -ForegroundColor Yellow
Write-Host "Already Perfect: $perfect" -ForegroundColor Green
Write-Host ""
Write-Host "Next: Run meta_description_expander.ps1" -ForegroundColor Cyan
Write-Host ""
