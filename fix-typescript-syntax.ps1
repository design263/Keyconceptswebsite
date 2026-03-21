# Script to fix remaining TypeScript syntax in converted files

$jsFiles = Get-ChildItem -Path "src" -Filter "*.js" -Recurse | Where-Object { $_.FullName -notlike "*node_modules*" }
$jsxFiles = Get-ChildItem -Path "src" -Filter "*.jsx" -Recurse | Where-Object { $_.FullName -notlike "*node_modules*" }

# Process all JS and JSX files
$allFiles = $jsFiles + $jsxFiles

foreach ($file in $allFiles) {
    Write-Host "Fixing TypeScript syntax in: $($file.FullName)"
    
    $content = Get-Content -Path $file.FullName -Raw
    
    # Remove entire interface blocks (multi-line)
    $content = $content -replace '(?s)interface\s+\w+\s*\{[^}]*\}', ''
    
    # Remove single-line interface declarations
    $content = $content -replace 'interface\s+\w+.*$', ''
    
    # Remove type imports
    $content = $content -replace 'import\s+type\s+{[^}]*}\s+from\s+["''][^"'']*["''];?', ''
    $content = $content -replace 'import\s+type\s+[^;]*;', ''
    
    # Remove type annotations (more comprehensive)
    $content = $content -replace ':\s*React\.\w+<[^>]*>', ''
    $content = $content -replace ':\s*\w+(\[\])?(\s*\|\s*\w+(\[\])?)*\s*(?=[=,)])', ''
    $content = $content -replace ':\s*{[^}]*}\s*(?=[=,)])', ''
    $content = $content -replace ':\s*"[^"]*"\s*(?=[=,)])', ''
    $content = $content -replace ':\s*'[^']*'\s*(?=[=,)])', ''
    $content = $content -replace ':\s*\([^)]*\)\s*=>\s*[^,=)]*\s*(?=[=,)])', ''
    
    # Remove generic type parameters
    $content = $content -replace '<[^>]*>(?=\s*\()', ''
    $content = $content -replace '<[^>]*>(?=\s*{)', ''
    
    # Remove any remaining type keywords
    $content = $content -replace '\btype\s+\w+\s*=', ''
    
    # Clean up extra whitespace and empty lines
    $content = $content -replace '\n\s*\n\s*\n', '\n\n'
    $content = $content.Trim()
    
    # Write the fixed content back
    $content | Out-File -FilePath $file.FullName -Encoding UTF8
}

Write-Host "TypeScript syntax fixes complete!"
