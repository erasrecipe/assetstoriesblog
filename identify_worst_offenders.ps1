# Identify Files Needing Most Attention
# Shows which comparisons have the most quality issues

Write-Host "`n🎯 CONTENT QUALITY HOTSPOTS" -ForegroundColor Cyan
Write-Host "============================`n" -ForegroundColor Cyan

$files = Get-ChildItem "data/comparisons" -Filter "*.json"
$fileScores = @()

# AI phrases to check
$aiPhrases = @('comprehensive', 'landscape', 'nuanced', 'deep dive', 'paradigm', 'leverage', 'groundbreaking', 'transformative', 'holistic', 'robust', 'multifaceted')

# Filler words to check
$fillerWords = @('just', 'actually', 'very', 'really', 'truly', 'clearly', 'obviously', 'honestly', 'literally', 'simply')

Write-Host "Analyzing $($files.Count) files...`n" -ForegroundColor Yellow

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $json = $content | ConvertFrom-Json
    
    $issues = 0
    
    # Count AI phrases
    $aiCount = 0
    foreach ($phrase in $aiPhrases) {
        $aiCount += ([regex]::Matches($content, "\b$phrase\b", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    }
    $issues += $aiCount * 3  # Weight AI phrases heavily
    
    # Count filler words
    $fillerCount = 0
    foreach ($word in $fillerWords) {
        $fillerCount += ([regex]::Matches($content, "\b$word\b", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    }
    $issues += $fillerCount  # Weight filler words normally
    
    # Check recommendation length
    $recLength = $json.verdict.recommendation.Length
    if ($recLength -gt 1200) {
        $issues += 10  # Heavily penalize very long recommendations
    } elseif ($recLength -gt 1000) {
        $issues += 5
    }
    
    # Check for short quotes
    $shortQuotes = 0
    foreach ($quote in $json.quotes.book1) {
        if ($quote.Length -lt 20) { $shortQuotes++ }
    }
    foreach ($quote in $json.quotes.book2) {
        if ($quote.Length -lt 20) { $shortQuotes++ }
    }
    $issues += $shortQuotes * 2
    
    $fileScores += [PSCustomObject]@{
        File = $file.Name
        IssueScore = $issues
        AICount = $aiCount
        FillerCount = $fillerCount
        RecLength = $recLength
        ShortQuotes = $shortQuotes
    }
}

# Sort by issue score
$sorted = $fileScores | Sort-Object -Property IssueScore -Descending

Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "TOP 20 FILES NEEDING ATTENTION" -ForegroundColor Red
Write-Host "═══════════════════════════════════════════════════════════════`n" -ForegroundColor Cyan

$sorted | Select-Object -First 20 | Format-Table @{
    Label="File"; Expression={$_.File.Substring(0, [Math]::Min(50, $_.File.Length))}; Width=50
}, @{
    Label="Score"; Expression={$_.IssueScore}; Width=6
}, @{
    Label="AI"; Expression={$_.AICount}; Width=4
}, @{
    Label="Filler"; Expression={$_.FillerCount}; Width=6
}, @{
    Label="Length"; Expression={$_.RecLength}; Width=6
} -AutoSize

Write-Host "`n═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "CLEANEST 10 FILES (Good Examples)" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════════════════════`n" -ForegroundColor Cyan

$sorted | Sort-Object -Property IssueScore | Select-Object -First 10 | Format-Table @{
    Label="File"; Expression={$_.File.Substring(0, [Math]::Min(50, $_.File.Length))}; Width=50
}, @{
    Label="Score"; Expression={$_.IssueScore}; Width=6
}, @{
    Label="AI"; Expression={$_.AICount}; Width=4
}, @{
    Label="Filler"; Expression={$_.FillerCount}; Width=6
} -AutoSize

Write-Host "`n═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "STATISTICS" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan

$avgIssues = [math]::Round(($fileScores | Measure-Object -Property IssueScore -Average).Average, 1)
$avgAI = [math]::Round(($fileScores | Measure-Object -Property AICount -Average).Average, 1)
$avgFiller = [math]::Round(($fileScores | Measure-Object -Property FillerCount -Average).Average, 1)
$avgLength = [math]::Round(($fileScores | Measure-Object -Property RecLength -Average).Average, 0)

Write-Host "  Average issue score: $avgIssues" -ForegroundColor White
Write-Host "  Average AI phrases per file: $avgAI" -ForegroundColor White
Write-Host "  Average filler words per file: $avgFiller" -ForegroundColor White
Write-Host "  Average recommendation length: $avgLength chars" -ForegroundColor White

$filesOver50 = ($fileScores | Where-Object { $_.IssueScore -gt 50 }).Count
$filesOver30 = ($fileScores | Where-Object { $_.IssueScore -gt 30 }).Count
$filesUnder10 = ($fileScores | Where-Object { $_.IssueScore -lt 10 }).Count

Write-Host "`n  Files with severe issues (>50): $filesOver50" -ForegroundColor Red
Write-Host "  Files with moderate issues (>30): $filesOver30" -ForegroundColor Yellow
Write-Host "  Files with minimal issues (<10): $filesUnder10" -ForegroundColor Green

Write-Host "`n═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "RECOMMENDATION" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan

if ($filesOver50 -gt 50) {
    Write-Host "  PRIORITY: Run automated scripts first" -ForegroundColor Red
    Write-Host "     .\fix_ai_phrases.ps1" -ForegroundColor White
    Write-Host "     .\fix_filler_words.ps1" -ForegroundColor White
} elseif ($filesOver30 -gt 100) {
    Write-Host "  RECOMMENDED: Use automated scripts for efficiency" -ForegroundColor Yellow
    Write-Host "     .\fix_ai_phrases.ps1" -ForegroundColor White
    Write-Host "     .\fix_filler_words.ps1" -ForegroundColor White
} else {
    Write-Host "  GOOD: Manual review of top 20 files may be sufficient" -ForegroundColor Green
}

Write-Host ""
