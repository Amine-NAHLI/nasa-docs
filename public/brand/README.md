# Official Brand Assets Directory

Drop your real Farmer Eye logo, DEVUPWARD team logo, and team mascot into this directory.

### Asset Files Supported:
- `farmer-eye-logo.svg` or `farmer-eye-logo.png`: Primary Farmer Eye logo
- `devupward-logo.svg` or `devupward-logo.png`: DEVUPWARD team insignia
- `farmer-eye-mascot.png` or `farmer-eye-mascot.svg`: Official project mascot
- `favicon.ico`: Browser favicon

### How the Website Handles Your Assets:
- The website's `BrandLogo` component ([src/components/media/BrandLogo.tsx](file:///d:/nasa-docs/src/components/media/BrandLogo.tsx)) and `brandAssets` registry ([src/config/media.ts](file:///d:/nasa-docs/src/config/media.ts)) are pre-configured to render your real files immediately upon placement.
- Supported formats: Vector SVG (preferred for crisp scaling) or high-resolution PNG with transparent background.
- Automatic graceful fallback: If an image is missing or invalid, an elegant SVG fallback mark renders so the interface never breaks.

### NASA Branding Notice:
Farmer Eye is an independent project developed for the NASA Space Apps Challenge hackathon. In accordance with NASA regulations, do not use the official NASA meatball or worm insignia in a way that suggests NASA endorsement or official NASA agency affiliation.
