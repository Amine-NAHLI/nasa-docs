# Farmer Eye Documentation Website — Phase 1

> **"The Farmer's Second Eyes."**  
> Turning NASA Earth observations, agricultural science, and artificial intelligence into clearer farming decisions.

Developed independently by **DEVUPWARD** under the **EARTH TRIALS | IMPACT 2030** scientific initiative for the **NASA Space Apps Challenge**.

---

## 🛰️ Project Overview & Scientific Basis

Farmer Eye is an open-architecture agricultural decision-support system designed to empower farmers facing climate uncertainty, drought, and groundwater depletion.

### Current Implemented Capabilities:
- **NASA POWER Climate Data**: Daily surface solar radiation, air temperature (min/max), relative humidity, precipitation, and wind speed.
- **NASA SMAP Soil Moisture**: Surface (0–5 cm) and root-zone (0–100 cm) volumetric water content percentiles from spaceborne L-band microwave radar/radiometer.
- **Biophysical Agricultural Modeling**: FAO-56 Penman-Monteith reference evapotranspiration ($ET_0$) and root-zone water depletion balance calculations.
- **Context-Aware AI Interpretation**: Grounded translation of physical moisture and weather metrics into plain-language agricultural summaries and risk assessments.
- **Demonstration Scenario**: An illustrative Mediterranean semi-arid simulation case study based on the Saïss Plain (Meknes, Morocco).

### Clarification on Planned Roadmap (Not Implemented in Phase 1):
High-resolution optical multispectral imagery (Landsat 8/9, Sentinel-2), thermal stress radiometry (ECOSTRESS), spectral vegetation index processing (NDVI, NDWI), radiometric calibration, Crop Water Stress Index ($CWSI$), and field-level sensor networks represent planned research directions for future phases.

---

## ⚖️ NASA Branding & Challenge Notice

Farmer Eye is an independent project created for the **NASA Space Apps Challenge** hackathon. It utilizes open public science data provided by NASA. Farmer Eye is not an official NASA agency program, and this website does not claim official affiliation with, sponsorship by, or endorsement from NASA.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript in strict mode
- **Styling**: Tailwind CSS
- **Design System & Components**: Custom glass panels, Lucide React icons
- **Animations**: Motion for React
- **Documentation Engine**: Next.js MDX integration (`@next/mdx`)
- **Package Manager**: npm

---

## 🚀 Quickstart & Development

### 1. Installation
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm run start
```

---

## 🗺️ Implemented Routes (Phase 1)

| Route | Description | Status |
| :--- | :--- | :--- |
| `/` | **Cinematic Homepage**: Full-screen hero, global challenge storytelling, perspective shift, interactive 5-stage pipeline, 6 scientific discipline cards, 2030 vision, and final CTA. | ✅ Production Ready |
| `/docs` | **Documentation Hub Overview**: System orientation, 7 scientific discipline navigation, 3-step evaluation trail, Meknes simulation case study, and local search. | ✅ Production Ready |
| `/docs/our-mission` | **Our Mission & Philosophy**: 12-section scientific manifesto covering the "Second Eyes" thesis, NASA POWER & SMAP data, biophysical modeling, AI interpretation, human agency, and limitations. | ✅ Production Ready |

---

## 🎨 Brand & Mascot System

Place your official vector logos, brand marks, and team mascot in `public/brand/`:
- `farmer-eye-logo.svg` or `farmer-eye-logo.png`: Primary Farmer Eye logo
- `devupward-logo.svg` or `devupward-logo.png`: DEVUPWARD team insignia
- `farmer-eye-mascot.png` or `farmer-eye-mascot.svg`: Team mascot
- `favicon.ico`: Application browser icon

The `BrandLogo` component (`src/components/media/BrandLogo.tsx`) and navbar are pre-configured to render these assets cleanly with automatic fallback.

---

## 🔍 Local Scoped Search

Press **⌘K** (macOS) or **Ctrl+K** (Windows/Linux) or click the search button in the top navbar to open the local search modal. It provides instant filtering over all active Phase 1 documentation concepts without external database dependencies.

---

## 🔭 Future Roadmap (Phase 2+)

- **High-Resolution Optical Ingestion**: Exploring Landsat and Sentinel-2 tile processing for parcel-level canopy health.
- **Thermal Infrared Stress**: Exploring ECOSTRESS diurnal thermal measurements.
- **Interactive Biophysical Calculator**: Client-side FAO-56 Penman-Monteith tool.
- **Field Demonstration Testbed**: Ground-truth sensor telemetry and localized calibration.
- **Public API Route Handlers**: Open REST endpoints for agricultural researchers.

---

## 👥 Scientific Team & Initiative

- **Team**: DEVUPWARD
- **Scientific Initiative**: EARTH TRIALS | IMPACT 2030
- **Competition**: NASA Space Apps Challenge 2026
- **Official Slogan**: *"The Farmer's Second Eyes."*
