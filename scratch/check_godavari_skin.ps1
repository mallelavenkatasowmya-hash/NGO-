Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\Lenovo\.gemini\antigravity\brain\5b756bae-2572-453f-9545-e875f41d502e\godavari_riverbank_panoramic_1794299015746.jpg")

# The hands are at:
# Left arm: x: 0 to 300, y: 550 to 768
# Left hand/wrist: x: 200 to 450, y: 640 to 768
# Right hand/fingers: x: 300 to 540, y: 640 to 760
# Soil: x: 220 to 520, y: 650 to 750
# Plant: x: 230 to 500, y: 400 to 680

# Sample skin at x=100, y=650; x=300, y=720; x=450, y=700
Write-Host "Skin samples in original godavari:"
@([System.Drawing.Point]::new(100, 650), [System.Drawing.Point]::new(300, 720), [System.Drawing.Point]::new(450, 700)) | ForEach-Object {
    $c = $src.GetPixel($_.X, $_.Y)
    Write-Host "Skin at ($($_.X), $($_.Y)) -> R=$($c.R), G=$($c.G), B=$($c.B)"
}

# Sample plant leaf at x=360, y=500
$cLeaf = $src.GetPixel(360, 500)
Write-Host "Leaf at (360, 500) -> R=$($cLeaf.R), G=$($cLeaf.G), B=$($cLeaf.B)"

# Sample soil at x=350, y=700
$cSoil = $src.GetPixel(350, 700)
Write-Host "Soil at (350, 700) -> R=$($cSoil.R), G=$($cSoil.G), B=$($cSoil.B)"

$src.Dispose()

