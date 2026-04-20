# Filler Word Reduction Script
# Removes unnecessary filler words to strengthen writing

Write-Host "`n📝 FILLER WORD REDUCTION TOOL" -ForegroundColor Cyan
Write-Host "==============================`n" -ForegroundColor Cyan

# Patterns to remove or reduce
$patterns = @(
    # Remove "just" in common weak phrases
    @{ Pattern = '\bjust really\b'; Replacement = 'really'; Name = '"just really"' }
    @{ Pattern = '\bjust very\b'; Replacement = 'very'; Name = '"just very"' }
    @{ Pattern = '\bIt\'s just\b'; Replacement = "It's"; Name = '"It\'s just"' }
    @{ Pattern = '\bis just\b'; Replacement = 'is'; Name = '"is just"' }
    @{ Pattern = '\bwas just\b'; Replacement = 'was'; Name = '"was just"' }
    @{ Pattern = '\bjust a\b'; Replacement = 'a'; Name = '"just a"' }
    
    # Remove "actually" when it adds no meaning
    @{ Pattern = '\bactually really\b'; Replacement = 'really'; Name = '"actually really"' }
    @{ Pattern = '\bactually very\b'; Replacement = 'very'; Name = '"actually very"' }
    @{ Pattern = '\bis actually\b'; Replacement = 'is'; Name = '"is actually"' }
    @{ Pattern = '\bwas actually\b'; Replacement = 'was'; Name = '"was actually"' }
    
    # Remove redundant modifiers
    @{ Pattern = '\bvery very\b'; Replacement = 'extremely'; Name = '"very very"' }
    @{ Pattern = '\breally very\b'; Replacement = 'extremely'; Name = '"really very"' }
    @{ Pattern = '\breally really\b'; Replacement = 'extremely'; Name = '"really really"' }
    
    # Clean up weak phrases
    @{ Pattern = '\bclearly shows\b'; Replacement = 'shows'; Name = '"clearly shows"' }
    @{ Pattern = '\bobviously demonstrates\b'; Replacement = 'demonstrates'; Name = '"obviously demonstrates"' }
    @{ Pattern = '\bsimply put\b'; Replacement = 'In short'; Name = '"simply put"' }
)

$files = Get-ChildItem "data/comparisons" -Filter "*.json"
$totalChanges = 0
$filesModified = 0
$patternStats = @{}

Write-Host "Processing $($files.Count) files...`n" -ForegroundColor Yellow

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $changesInFile = 0
    
    foreach ($item in $patterns) {
        $beforeCount = ([regex]::Matches($content, $item.Pattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
        
        if ($beforeCount -gt 0) {
            $content = $content -replace $item.Pattern, $item.Replacement
            $changesInFile += $beforeCount
            $totalChanges += $beforeCount
            
            if (-not $patternStats.ContainsKey($item.Name)) {
                $patternStats[$item.Name] = 0
            }
            $patternStats[$item.Name] += $beforeCount
        }
    }
    
    if ($content -ne $originalContent) {
        Set-Content $file.FullName -Value $content -NoNewline
        $filesModified++
        if ($changesInFile -gt 0) {
            Write-Host "✓ $($file.Name): $changesInFile changes" -ForegroundColor Green
        }
    }
}

Write-Host "`n" -NoNewline
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "✅ COMPLETE!" -ForegroundColor Green
Write-Host "Files Modified: $filesModified" -ForegroundColor White
Write-Host "Total Changes: $totalChanges" -ForegroundColor White
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan

Write-Host "`nTop Patterns Removed:" -ForegroundColor Yellow
$patternStats.GetEnumerator() | Sort-Object -Property Value -Descending | ForEach-Object {
    Write-Host "  $($_.Key): $($_.Value) occurrences" -ForegroundColor White
}

Write-Host "`nNext: Run analyze_content_quality.ps1 to verify improvements`n" -ForegroundColor Yellow
