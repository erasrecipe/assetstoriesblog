# AI Phrase Removal Script
# Automatically replaces common AI-tell phrases with more natural alternatives

Write-Host "`n🤖 AI PHRASE REMOVAL TOOL" -ForegroundColor Cyan
Write-Host "===========================`n" -ForegroundColor Cyan

# Define replacements (case-insensitive)
$replacements = @{
    # Common AI phrases
    'comprehensive deep dive' = 'thorough examination'
    'deep dive into' = 'detailed look at'
    'deep dive' = 'detailed analysis'
    'nuanced landscape' = 'complex environment'
    'nuanced approach' = 'refined approach'
    'robust framework' = 'strong framework'
    'holistic approach' = 'complete approach'
    'paradigm shift' = 'major change'
    'paradigm' = 'model'
    'leverage' = 'use'
    'synergy' = 'cooperation'
    'game-changer' = 'breakthrough'
    'game changer' = 'breakthrough'
    'treasure trove' = 'wealth'
    'hidden gem' = 'overlooked book'
    'unpack' = 'examine'
    'delves into' = 'explores'
    'navigating the' = 'dealing with'
    'landscape of' = 'world of'
    'groundbreaking' = 'innovative'
    'transformative journey' = 'powerful transformation'
    'transformative' = 'powerful'
    'cutting-edge' = 'innovative'
    'state-of-the-art' = 'advanced'
    'revolutionize' = 'transform'
    'multifaceted' = 'complex'
}

$files = Get-ChildItem "data/comparisons" -Filter "*.json"
$totalChanges = 0
$filesModified = 0

Write-Host "Starting replacement on $($files.Count) files...`n" -ForegroundColor Yellow

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $changesInFile = 0
    
    foreach ($phrase in $replacements.Keys) {
        $replacement = $replacements[$phrase]
        
        # Count occurrences before replacement
        $beforeCount = ([regex]::Matches($content, [regex]::Escape($phrase), [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
        
        if ($beforeCount -gt 0) {
            # Replace (case-insensitive)
            $content = $content -replace "(?i)$([regex]::Escape($phrase))", $replacement
            $changesInFile += $beforeCount
            $totalChanges += $beforeCount
        }
    }
    
    # Only save if changes were made
    if ($content -ne $originalContent) {
        Set-Content $file.FullName -Value $content -NoNewline
        $filesModified++
        Write-Host "✓ $($file.Name): $changesInFile replacements" -ForegroundColor Green
    }
}

Write-Host "`n" -NoNewline
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "✅ COMPLETE!" -ForegroundColor Green
Write-Host "Files Modified: $filesModified" -ForegroundColor White
Write-Host "Total Replacements: $totalChanges" -ForegroundColor White
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "`nNext: Run fix_filler_words.ps1 to reduce 'just' usage`n" -ForegroundColor Yellow
