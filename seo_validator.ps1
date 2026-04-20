# SEO Validator
# Validates all SEO improvements after running optimization scripts

Write-Host "`n🔍 SEO VALIDATION CHECK" -ForegroundColor Cyan
Write-Host "========================`n" -ForegroundColor Cyan

$files = Get-ChildItem "data/comparisons" -Filter "*.json"

# Title Tag Analysis
$titleTooShort = 0
$titlePerfect = 0
$titleTooLong = 0

# Meta Description Analysis
$descTooShort = 0
$descPerfect = 0
$descTooLong = 0

foreach ($file in $files) {
    $json = Get-Content $file.FullName | ConvertFrom-Json
    
    # Check title length
    $titleLength = $json.title.Length
    if ($titleLength -lt 50) { $titleTooShort++ }
    elseif ($titleLength -le 60) { $titlePerfect++ }
    else { $titleTooLong++ }
    
    # Check meta description length
    $descLength = $json.metaDescription.Length
    if ($descLength -lt 140) { $descTooShort++ }
    elseif ($descLength -le 160) { $descPerfect++ }
    else { $descTooLong++ }
}

# Calculate scores
$titleScore = [math]::Round(($titlePerfect / $files.Count) * 100, 1)
$descScore = [math]::Round(($descPerfect / $files.Count) * 100, 1)

Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "TITLE TAG ANALYSIS" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  Too short (<50 chars): $titleTooShort" -ForegroundColor $(if($titleTooShort -gt 0){"Yellow"}else{"Green"})
Write-Host "  Perfect (50-60 chars): $titlePerfect" -ForegroundColor Green
Write-Host "  Too long (>60 chars): $titleTooLong" -ForegroundColor $(if($titleTooLong -gt 0){"Red"}else{"Green"})
Write-Host ""
Write-Host "  Optimization Score: $titleScore%" -ForegroundColor $(if($titleScore -gt 90){"Green"}elseif($titleScore -gt 70){"Yellow"}else{"Red"})

Write-Host "`n═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "META DESCRIPTION ANALYSIS" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  Too short (<140 chars): $descTooShort" -ForegroundColor $(if($descTooShort -gt 0){"Yellow"}else{"Green"})
Write-Host "  Perfect (140-160 chars): $descPerfect" -ForegroundColor Green
Write-Host "  Too long (>160 chars): $descTooLong" -ForegroundColor $(if($descTooLong -gt 0){"Yellow"}else{"Green"})
Write-Host ""
Write-Host "  Optimization Score: $descScore%" -ForegroundColor $(if($descScore -gt 90){"Green"}elseif($descScore -gt 70){"Yellow"}else{"Red"})

# Calculate overall SEO score
$overallScore = [math]::Round((($titleScore + $descScore) / 2), 0)

Write-Host "`n═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "OVERALL SEO SCORE" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  On-Page SEO Score: $overallScore/100" -ForegroundColor $(if($overallScore -gt 90){"Green"}elseif($overallScore -gt 70){"Yellow"}else{"Red"})

if ($overallScore -ge 90) {
    Write-Host "`n  🎉 EXCELLENT! Your SEO is highly optimized." -ForegroundColor Green
    Write-Host "  ✅ Ready for launch with strong SEO foundation." -ForegroundColor Green
} elseif ($overallScore -ge 70) {
    Write-Host "`n  👍 GOOD! Your SEO is solid." -ForegroundColor Yellow
    Write-Host "  ⚠️  Some improvements still possible." -ForegroundColor Yellow
} else {
    Write-Host "`n  ⚠️  NEEDS WORK. Run optimization scripts again." -ForegroundColor Red
}

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════════`n" -ForegroundColor Cyan

# Show next steps
if ($titleScore -lt 90 -or $descScore -lt 90) {
    Write-Host "📋 RECOMMENDED ACTIONS:" -ForegroundColor Yellow
    if ($titleScore -lt 90) {
        Write-Host "  • Run title_tag_optimizer.ps1 again" -ForegroundColor White
    }
    if ($descScore -lt 90) {
        Write-Host "  • Run meta_description_expander.ps1 again" -ForegroundColor White
    }
    Write-Host ""
}
