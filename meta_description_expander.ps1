# Meta Description Expander
# Expands short meta descriptions to optimal 140-160 characters

Write-Host "`n📝 META DESCRIPTION EXPANDER" -ForegroundColor Cyan
Write-Host "=============================`n" -ForegroundColor Cyan

$files = Get-ChildItem "data/comparisons" -Filter "*.json"
$modified = 0
$tooShort = 0
$perfect = 0

# Compelling endings to add
$endings = @(
    " Expert analysis, ratings, and honest reviews to help you choose.",
    " Detailed comparison with expert insights to guide your choice.",
    " Compare features, ratings, and reviews to find your perfect read.",
    " In-depth analysis to help you pick the right book for you.",
    " Expert ratings and reviews to help you make the best choice."
)

Write-Host "Analyzing $($files.Count) meta descriptions...`n" -ForegroundColor Yellow

foreach ($file in $files) {
    $json = Get-Content $file.FullName | ConvertFrom-Json
    $originalDesc = $json.metaDescription
    $originalLength = $originalDesc.Length
    
    if ($originalLength -lt 140) {
        $tooShort++
        
        # Calculate available space
        $targetLength = 155  # Target 155 for safety
        $spaceNeeded = $targetLength - $originalLength
        
        # Choose appropriate ending
        $ending = ""
        foreach ($end in $endings) {
            if ($end.Length -le $spaceNeeded) {
                $ending = $end
                break
            }
        }
        
        # If no ending fits, use shortest one and trim description
        if ($ending -eq "") {
            $ending = $endings[-1]  # Shortest ending
            $maxDescLength = $targetLength - $ending.Length
            
            if ($originalDesc.Length -gt $maxDescLength) {
                # Trim at last complete sentence or word
                $trimmed = $originalDesc.Substring(0, $maxDescLength)
                $lastPeriod = $trimmed.LastIndexOf('.')
                $lastSpace = $trimmed.LastIndexOf(' ')
                
                if ($lastPeriod -gt 0) {
                    $originalDesc = $trimmed.Substring(0, $lastPeriod + 1)
                } elseif ($lastSpace -gt 0) {
                    $originalDesc = $trimmed.Substring(0, $lastSpace) + "."
                }
            }
        }
        
        $newDesc = $originalDesc.TrimEnd() + $ending
        $newLength = $newDesc.Length
        
        # Ensure we're in range
        if ($newLength -ge 140 -and $newLength -le 160) {
            $json.metaDescription = $newDesc
            $json | ConvertTo-Json -Depth 10 | Set-Content $file.FullName -NoNewline
            $modified++
            
            Write-Host "✓ $($file.Name)" -ForegroundColor Green
            Write-Host "  Before ($originalLength chars): $originalDesc" -ForegroundColor Gray
            Write-Host "  After ($newLength chars): $newDesc" -ForegroundColor White
            Write-Host ""
        }
    } else {
        $perfect++
    }
}

Write-Host "`n═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "✅ EXPANSION COMPLETE!" -ForegroundColor Green
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "Files Modified: $modified" -ForegroundColor White
Write-Host "Originally Too Short: $tooShort" -ForegroundColor Yellow
Write-Host "Already Perfect: $perfect" -ForegroundColor Green
Write-Host ""
Write-Host "Next: Run seo_validator.ps1 to verify improvements" -ForegroundColor Cyan
Write-Host ""
