# Farmer Eye Documentation Website — Phase 1

> **"The Farmer's Second Eyes."**  
> Turning NASA Earth observations, agricultural science, and artificial intelligence into clearer farming decisions.

Developed by **DEVUPWARD** under the **EARTH TRIALS | IMPACT 2030** scientific initiative for the **NASA Space Apps Challenge**.

---

## 🛰️ Project Overview

Farmer Eye is an open-architecture agricultural decision-support system designed to empower farmers facing escalating climate uncertainty, drought, and groundwater depletion. By synthesizing macroscopic Earth observations (Landsat, Sentinel-2, MODIS, SMAP, ECOSTRESS), biophysical crop modeling (FAO-56 Penman-Monteith), and context-aware artificial intelligence, Farmer Eye acts as an indispensable "second eye" while honoring the farmer as the ultimate decision-maker on the land.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript in strict mode
- **Styling**: Tailwind CSS
- **Design System & Components**: shadcn/ui patterns, Lucide React icons
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
| `/docs` | **Documentation Hub Overview**: System orientation, 7 scientific discipline navigation, 3-step evaluation trail, Meknes demonstration case, and local search. | ✅ Production Ready |
| `/docs/our-mission` | **Our Mission & Philosophy**: 11-section comprehensive scientific treatise covering the "Second Eyes" thesis, NASA missions, biophysical modeling, AI role, human agency, and DEVUPWARD team. | ✅ Production Ready |

---

## 📂 Reusable Video & Brand Asset System

The codebase features a configurable TypeScript media registry (`src/config/media.ts`) and modular media components (`BrandLogo`, `ExplainerVideo`, `VideoModal`, `VideoPoster`).

### Where to Place Your Official Assets:

1. **Official Logos & Mascot**:
   - Location: `public/brand/`
   - Files: `farmer-eye-logo.svg`, `devupward-logo.svg`, `earth-trials-2030.svg`, `farmer-eye-mascot.png`
   - The UI automatically renders official vector assets from this directory.

2. **Official Videos**:
   - Location: `public/videos/`
   - Files: `farmer-eye-cinematic-intro.mp4`, `farmer-eye-poster.jpg`, `farmer-eye-story-captions.vtt`
   - To connect your video, edit `src/config/media.ts`:
     ```typescript
     "cinematic-intro": {
       ...
       videoUrl: "/videos/farmer-eye-cinematic-intro.mp4",
       posterUrl: "/videos/farmer-eye-poster.jpg",
       status: "available",
     }
     ```
   - When no file is supplied (`status: "placeholder"`), the video player displays a scientific placeholder interface with technical specifications (4K UHD / 1080p, H.264, AAC).

---

## 🔍 Local Scoped Search

Press **⌘K** (macOS) or **Ctrl+K** (Windows/Linux) or click the search button in the top navbar to open the local search modal. It provides instant filtering over all active Phase 1 documentation concepts without external database dependencies.

---

## 🔭 Phase 2 Roadmap

- **NASA Earth Intelligence**: Live ingestion pipelines for Landsat surface reflectance and SMAP soil moisture grids.
- **Scientific Engine**: Interactive web-based FAO-56 Penman-Monteith and Crop Water Stress Index (CWSI) calculators.
- **Earth Trials Demonstrator**: Interactive spatial map of the Saïss Plain / Meknes demonstration plots.
- **AI Intelligence**: Context-aware reasoning sandbox and interactive scenario simulator.
- **Results & Impact 2030**: Live indicators for water preservation and smallholder adoption.

---

## 👥 Scientific Team & Initiative

- **Team**: DEVUPWARD
- **Scientific Initiative**: EARTH TRIALS | IMPACT 2030
- **Competition**: NASA Space Apps Challenge
- **Official Slogan**: *"The Farmer's Second Eyes."*
