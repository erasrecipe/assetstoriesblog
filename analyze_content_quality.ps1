# Content Quality Analysis Script
# Checks for remaining issues after fixes

Write-Host "`n📊 CONTENT QUALITY ANALYZER" -ForegroundColor Cyan
Write-Host "============================`n" -ForegroundColor Cyan

$files = Get-ChildItem "data/comparisons" -Filter "*.json"

# Check for AI phrases
$aiPhrases = @('comprehensive', 'landscape', 'nuanced', 'deep dive', 'paradigm', 'leverage', 'groundbreaking', 'transformative')
$aiCount = @{}

foreach ($phrase in $aiPhrases) {
    $count = 0
    foreach ($file in $files) {
        $content = Get-Content $file.FullName -Raw
        $count += ([regex]::Matches($content, "\b$phrase\b", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    }
    if ($count -gt 0) {
        $aiCount[$phrase] = $count
    }
}

# Check for filler words
$fillerWords = @('just', 'actually', 'very', 'really')
$fillerCount = @{}

foreach ($word in $fillerWords) {
    $count = 0
    foreach ($file in $files) {
        $content = Get-Content $file.FullName -Raw
        $count += ([regex]::Matches($content, "\b$word\b", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    }
    $fillerCount[$word] = $count
}

# Check recommendation lengths
$longRecommendations = 0
$totalLength = 0
foreach ($file in $files) {
    $json = Get-Content $file.FullName -Raw | ConvertFrom-Json
    $length = $json.verdict.recommendation.Length
    $totalLength += $length
    if ($length -gt 1000) {
        $longRecommendations++
    }
}
$avgLength = [math]::Round($totalLength / $files.Count, 0)

# Display Results
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "AI PHRASE ANALYSIS" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan

if ($aiCount.Count -eq 0) {
    Write-Host "✅ No AI phrases detected!" -ForegroundColor Green
} else {
    foreach ($phrase in $aiCount.Keys | Sort-Object {$aiCount[$_]} -Descending) {
        $count = $aiCount[$phrase]
        $color = if ($count -gt 100) { "Red" } elseif ($count -gt 50) { "Yellow" } else { "Green" }
        Write-Host "  $phrase: $count occurrences" -ForegroundColor $color
    }
}

Write-Host "`n" -NoNewline
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "FILLER WORD ANALYSIS" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan

foreach ($word in $fillerCount.Keys | Sort-Object {$fillerCount[$_]} -Descending) {
    $count = $fillerCount[$word]
    $color = if ($count -gt 500) { "Red" } elseif ($count -gt 200) { "Yellow" } else { "Green" }
    Write-Host "  $word: $count occurrences" -ForegroundColor $color
}

Write-Host "`n" -NoNewline
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "LENGTH ANALYSIS" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan

Write-Host "  Average recommendation length: $avgLength chars" -ForegroundColor $(if($avgLength -gt 1000){"Yellow"}else{"Green"})
Write-Host "  Recommendations over 1000 chars: $longRecommendations" -ForegroundColor $(if($longRecommendations -gt 100){"Yellow"}else{"Green"})

Write-Host "`n" -NoNewline
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "OVERALL QUALITY SCORE" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan

$totalAiPhrases = ($aiCount.Values | Measure-Object -Sum).Sum
$totalFillerWords = ($fillerCount.Values | Measure-Object -Sum).Sum

$score = 100
if ($totalAiPhrases -gt 300) { $score -= 20 }
elseif ($totalAiPhrases -gt 150) { $score -= 10 }
elseif ($totalAiPhrases -gt 50) { $score -= 5 }

if ($totalFillerWords -gt 1000) { $score -= 20 }
elseif ($totalFillerWords -gt 500) { $score -= 10 }
elseif ($totalFillerWords -gt 250) { $score -= 5 }

if ($longRecommendations -gt 300) { $score -= 10 }
elseif ($longRecommendations -gt 150) { $score -= 5 }

$grade = if ($score -ge 95) { "A+" } elseif ($score -ge 90) { "A" } elseif ($score -ge 85) { "B+" } elseif ($score -ge 80) { "B" } else { "C" }

Write-Host "  Content Quality Score: $score/100 ($grade)" -ForegroundColor $(if($score -ge 90){"Green"}elseif($score -ge 80){"Yellow"}else{"Red"})

Write-Host "`n" -NoNewline
