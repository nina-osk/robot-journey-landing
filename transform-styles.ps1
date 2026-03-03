# Script para transformar los estilos al diseño futurista negro

$files = @(
    "c:\Users\oscarihe\Documents\mio\robotsconsultant\robot-journey-landing\src\pages\TransformacionDigital.tsx",
    "c:\Users\oscarihe\Documents\mio\robotsconsultant\robot-journey-landing\src\pages\PackEcommerce.tsx",
    "c:\Users\oscarihe\Documents\mio\robotsconsultant\robot-journey-landing\src\pages\OdooServices.tsx",
    "c:\Users\oscarihe\Documents\mio\robotsconsultant\robot-journey-landing\src\pages\KioscosPago.tsx"
)

$transformations = @{
    'bg-white(?!")' = 'bg-[#0a0a0a]'
    'bg-gray-50' = 'bg-[#0a0a0a]'
    'bg-gray-100' = 'bg-white/[0.03]'
    'bg-gradient-to-br from-gray-50' = 'bg-[#0a0a0a]'
    'bg-gradient-to-br from-slate-50' = 'bg-[#0a0a0a]'
    'bg-gradient-to-br from-blue-50' = 'bg-[#0a0a0a]'
    'bg-blue-50' = 'bg-white/[0.03]'
    'bg-green-50' = 'bg-white/[0.03]'
    'bg-red-50' = 'bg-white/[0.03]'
    'bg-orange-50' = 'bg-white/[0.03]'
    'bg-purple-50' = 'bg-white/[0.03]'
    'text-gray-900' = 'text-white'
    'text-gray-800' = 'text-white'
    'text-gray-700' = 'text-gray-300'
    'text-gray-600' = 'text-gray-400'
    'text-blue-800' = 'text-white'
    'text-blue-700' = 'text-gray-300'
    'text-green-800' = 'text-white'
    'text-green-700' = 'text-gray-300'
    'text-orange-800' = 'text-white'
    'text-orange-700' = 'text-gray-300'
    'text-green-500' = 'text-[#667eea]'
    'text-green-600' = 'text-[#667eea]'
    'from-blue-600 to-purple-600' = 'from-[#667eea] to-[#764ba2]'
    'from-blue-600 to-sky-600' = 'from-[#667eea] to-[#764ba2]'
    'from-green-600 to-emerald-600' = 'from-[#667eea] to-[#764ba2]'
    'from-orange-600 to-yellow-600' = 'from-[#667eea] to-[#764ba2]'
    'bg-blue-600' = 'bg-gradient-to-r from-[#667eea] to-[#764ba2]'
    'bg-green-600' = 'bg-gradient-to-r from-[#667eea] to-[#764ba2]'
    'bg-orange-600' = 'bg-gradient-to-r from-[#667eea] to-[#764ba2]'
    'bg-purple-600' = 'bg-gradient-to-r from-[#667eea] to-[#764ba2]'
    'hover:bg-blue-700' = 'hover:shadow-lg hover:shadow-[#667eea]/40'
    'hover:bg-green-700' = 'hover:shadow-lg hover:shadow-[#667eea]/40'
    'hover:bg-orange-700' = 'hover:shadow-lg hover:shadow-[#667eea]/40'
    'hover:bg-purple-700' = 'hover:shadow-lg hover:shadow-[#667eea]/40'
    'border-blue-' = 'border-white/'
    'border-green-' = 'border-white/'
    'border-red-' = 'border-white/'
    'border-orange-' = 'border-white/'
    'border-0' = 'border-0'
}

foreach ($file in $files) {
    Write-Host "Processing $file..."
    
    $content = Get-Content $file -Raw
    
    # Apply each transformation
    foreach ($pattern in $transformations.Keys) {
        $replacement = $transformations[$pattern]
        $content = $content -replace $pattern, $replacement
    }
    
    # Additional card transformations
    $content = $content -replace 'className="([^"]*?)Card([^"]*?)(?:bg-white|bg-gray-\d+)([^"]*?)"', 'className="$1Card$2bg-white/[0.05] border-white/10 hover:bg-white/[0.08]$3"'
    
    # Save the transformed content
    Set-Content $file -Value $content -NoNewline
    
    Write-Host "Completed $file"
}

Write-Host "All transformations completed!"
