Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\Lenovo\.gemini\antigravity\brain\5b756bae-2572-453f-9545-e875f41d502e\scratch\pexels_12644988.jpg")
$w = $src.Width
$h = $src.Height

# We want to crop from y=600 to 3500, x=200 to 2200
$cropRect = New-Object System.Drawing.Rectangle(200, 600, 2000, 2900)
$cropped = $src.Clone($cropRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Background removal for the magenta shirt:
# Shirt has high R, low G, medium-high B. Condition: (R - G) > 50 and (B - G) > 15
for ($y = 0; $y -lt $cropped.Height; $y++) {
    for ($x = 0; $x -lt $cropped.Width; $x++) {
        $c = $cropped.GetPixel($x, $y)
        $diffRG = $c.R - $c.G
        $diffBG = $c.B - $c.G
        
        # Check if shirt
        if ($diffRG -gt 45 -and $diffBG -gt 15) {
            # Make fully transparent
            $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } elseif ($diffRG -gt 35 -and $diffBG -gt 5) {
            # Soft edge
            $alpha = [int](255 * (1.0 - ($diffRG - 35) / 15.0))
            $alpha = [Math]::Max(0, [Math]::Min(255, $alpha))
            $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
        }
    }
}

$outPath = "C:\Users\Lenovo\.gemini\antigravity\brain\5b756bae-2572-453f-9545-e875f41d502e\scratch\extracted_female_plant.png"
$cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Extracted plant saved to $outPath"

$cropped.Dispose()
$src.Dispose()

