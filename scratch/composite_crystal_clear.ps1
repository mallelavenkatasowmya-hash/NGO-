Add-Type -AssemblyName System.Drawing

# 1. Load the pristine river background (1376 x 768)
$bgPath = "C:\Users\Lenovo\.gemini\antigravity\brain\5b756bae-2572-453f-9545-e875f41d502e\godavari_riverbank_panoramic_1794299015746.jpg"
$bg = [System.Drawing.Bitmap]::FromFile($bgPath)

# Target canvas: 2400 x 720 (panoramic ratio 3.33:1)
$tw = 2400
$th = 720

$canvas = New-Object System.Drawing.Bitmap($tw, $th)
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# In bg (1376x768), take the panoramic view:
# x: 260 to 1376, y: 30 to 740 -> stretch to 2400 x 720
$bgSrcRect = New-Object System.Drawing.Rectangle(260, 25, (1376 - 260), (740 - 25))
$bgDestRect = New-Object System.Drawing.Rectangle(0, 0, $tw, $th)
$g.DrawImage($bg, $bgDestRect, $bgSrcRect, [System.Drawing.GraphicsUnit]::Pixel)

# 2. Load the high-res extracted female hands + plant (2000 x 2900)
$femPath = "C:\Users\Lenovo\.gemini\antigravity\brain\5b756bae-2572-453f-9545-e875f41d502e\scratch\extracted_female_plant.png"
$fem = [System.Drawing.Bitmap]::FromFile($femPath)

# Clean up any leftover magenta fringe on the cutout
for ($y = 0; $y -lt $fem.Height; $y++) {
    for ($x = 0; $x -lt $fem.Width; $x++) {
        $c = $fem.GetPixel($x, $y)
        if ($c.A -gt 0) {
            # Check for magenta shirt fringe (R > 110, G < 60, B > 60)
            if ($c.R -gt 90 -and $c.G -lt 65 -and $c.B -gt 55) {
                $fem.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            } elseif ($c.R -gt 80 -and ($c.R - $c.G) -gt 40 -and ($c.B - $c.G) -gt 15) {
                $fem.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            }
        }
    }
}

# Scale the cutout to height = 660 px, proportional width
$targetFemH = 660
$targetFemW = [int]($fem.Width * ($targetFemH / $fem.Height)) # ~455 px

# Position: bottom-left, slightly inset
$posX = 50
$posY = $th - $targetFemH # 60 px from top, grounded at bottom

# Draw a subtle natural soft ambient shadow behind the hands
$shadowBmp = New-Object System.Drawing.Bitmap($targetFemW + 40, 100)
$gShadow = [System.Drawing.Graphics]::FromImage($shadowBmp)
$gShadow.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(60, 10, 40, 20))
$gShadow.FillEllipse($shadowBrush, 20, 20, $targetFemW, 60)
$shadowBrush.Dispose()
$gShadow.Dispose()

$g.DrawImage($shadowBmp, ($posX - 20), ($th - 80))
$shadowBmp.Dispose()

# Draw the high-res female hands & seedling
$destFemRect = New-Object System.Drawing.Rectangle($posX, $posY, $targetFemW, $targetFemH)
$srcFemRect = New-Object System.Drawing.Rectangle(0, 0, $fem.Width, $fem.Height)
$g.DrawImage($fem, $destFemRect, $srcFemRect, [System.Drawing.GraphicsUnit]::Pixel)

# Save at maximum quality
$destPath = "C:\Users\Lenovo\.gemini\antigravity\brain\5b756bae-2572-453f-9545-e875f41d502e\scratch\hero_banner_crystal_clear.jpg"
$encoder = [System.Drawing.Imaging.Encoder]::Quality
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, [long]98)
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }

$canvas.Save($destPath, $jpegCodec, $encoderParams)
Write-Host "Created crystal clear hero banner: $destPath ($tw x $th)"

$encoderParams.Dispose()
$canvas.Dispose()
$g.Dispose()
$fem.Dispose()
$bg.Dispose()

