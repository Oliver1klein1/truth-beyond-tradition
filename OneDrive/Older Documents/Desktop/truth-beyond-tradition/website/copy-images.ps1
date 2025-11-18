# PowerShell script to copy images to public folder
# Run this from the website directory: .\copy-images.ps1

$rootDir = ".."
$publicDir = "public"

# Create subdirectories
New-Item -ItemType Directory -Force -Path "$publicDir\books\bible-contradictions" | Out-Null

# Copy branding images
Copy-Item "$rootDir\full_logo_black_bg.jpg" -Destination "$publicDir\" -ErrorAction SilentlyContinue
Copy-Item "$rootDir\brand_accent_element*.jpg" -Destination "$publicDir\" -ErrorAction SilentlyContinue
Copy-Item "$rootDir\bbt-podcast-studio.png" -Destination "$publicDir\" -ErrorAction SilentlyContinue
Copy-Item "$rootDir\rediscover_boxed_set_final2.jpg" -Destination "$publicDir\" -ErrorAction SilentlyContinue

# Copy thumbnails
Copy-Item "$rootDir\thumbnail*.jpg" -Destination "$publicDir\" -ErrorAction SilentlyContinue

# Copy magazine covers
Copy-Item "$rootDir\magazine_*.jpg" -Destination "$publicDir\" -ErrorAction SilentlyContinue

# Copy book covers
Copy-Item "$rootDir\Escape-the-hell-myth-cover-final.jpg" -Destination "$publicDir\" -ErrorAction SilentlyContinue
Copy-Item "$rootDir\framing-jesus-cover-final.jpg" -Destination "$publicDir\" -ErrorAction SilentlyContinue
Copy-Item "$rootDir\liberating-humanity-cover.jpg" -Destination "$publicDir\" -ErrorAction SilentlyContinue
Copy-Item "$rootDir\reality-unveiled-final.jpg" -Destination "$publicDir\" -ErrorAction SilentlyContinue
Copy-Item "$rootDir\bible-contradictions-cover-final.jpg" -Destination "$publicDir\" -ErrorAction SilentlyContinue

# Copy mockups (optional)
Copy-Item "$rootDir\mockup*.jpg" -Destination "$publicDir\" -ErrorAction SilentlyContinue

# Copy bible contradiction images
$contradictionImages = Get-ChildItem "$rootDir\books\bible-contradictions" -Filter "c*.jpg" -Recurse -ErrorAction SilentlyContinue
foreach ($img in $contradictionImages) {
    Copy-Item $img.FullName -Destination "$publicDir\books\bible-contradictions\" -ErrorAction SilentlyContinue
}

Write-Host "Images copied to public folder!"

