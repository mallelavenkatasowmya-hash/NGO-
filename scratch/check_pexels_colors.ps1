Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\Lenovo\.gemini\antigravity\brain\5b756bae-2572-453f-9545-e875f41d502e\scratch\pexels_12644988.jpg")
Write-Host "Pexels size: $($src.Width) x $($src.Height)"

# Sample shirt at (100, 100), (300, 300), (2000, 300)
@([System.Drawing.Point]::new(100, 100), [System.Drawing.Point]::new(300, 300), [System.Drawing.Point]::new(2000, 300)) | ForEach-Object {
    $c = $src.GetPixel($_.X, $_.Y)
    Write-Host "Shirt at ($($_.X), $($_.Y)) -> R=$($c.R), G=$($c.G), B=$($c.B)"
}

# Sample leaf at (1200, 1500)
$cLeaf = $src.GetPixel(1200, 1500)
Write-Host "Leaf at (1200, 1500) -> R=$($cLeaf.R), G=$($cLeaf.G), B=$($cLeaf.B)"

# Sample hand at (600, 2400)
$cHand = $src.GetPixel(600, 2400)
Write-Host "Hand at (600, 2400) -> R=$($cHand.R), G=$($cHand.G), B=$($cHand.B)"

# Sample soil at (1200, 2400)
$cSoil = $src.GetPixel(1200, 2400)
Write-Host "Soil at (1200, 2400) -> R=$($cSoil.R), G=$($cSoil.G), B=$($cSoil.B)"

$src.Dispose()

