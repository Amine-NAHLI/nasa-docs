import { DocNavGroup } from "@/types/docs";

export const docsNavigation: DocNavGroup[] = [
  {
    id: "getting-started",
    orderNumber: "01",
    title: "Getting Started",
    items: [
      {
        title: "Documentation Overview",
        href: "/docs",
        description: "Welcome to Farmer Eye documentation and system orientation.",
        isImplemented: true,
        badge: "Phase 1",
      },
      {
        title: "Our Mission",
        href: "/docs/our-mission",
        description: "Why we created Farmer Eye, the global challenge, and our 2030 vision.",
        isImplemented: true,
        badge: "Phase 1",
      },
    ],
  },
  {
    id: "nasa-earth-intelligence",
    orderNumber: "02",
    title: "NASA Earth Intelligence",
    items: [
      {
        title: "Satellite Missions & Sensors",
        href: "/docs/nasa-intelligence/missions",
        description: "Landsat, Sentinel, MODIS, and ECOSTRESS spatial data pipelines.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "Spectral Indices (NDVI & NDWI)",
        href: "/docs/nasa-intelligence/indices",
        description: "Vegetation vigor, canopy moisture, and thermal stress indices.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "Soil Moisture & GPM Precipitation",
        href: "/docs/nasa-intelligence/soil-moisture",
        description: "SMAP root-zone estimates and precipitation anomaly tracking.",
        isImplemented: false,
        badge: "Coming Soon",
      },
    ],
  },
  {
    id: "scientific-engine",
    orderNumber: "03",
    title: "Scientific Engine",
    items: [
      {
        title: "Agronomic Modeling Principles",
        href: "/docs/scientific-engine/principles",
        description: "Biophysical models connecting raw radiometric data to crop physiology.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "Evapotranspiration & Water Balance",
        href: "/docs/scientific-engine/water-balance",
        description: "Penman-Monteith calibration with local micro-climate inputs.",
        isImplemented: false,
        badge: "Coming Soon",
      },
    ],
  },
  {
    id: "earth-trials",
    orderNumber: "04",
    title: "Earth Trials",
    items: [
      {
        title: "Meknes & Saïss Plain Pilot",
        href: "/docs/earth-trials/meknes",
        description: "Mediterranean semi-arid demonstration zone and ground-truth validation.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "Global Transferability Protocol",
        href: "/docs/earth-trials/transferability",
        description: "Adapting calibration coefficients to diverse global agro-ecological zones.",
        isImplemented: false,
        badge: "Coming Soon",
      },
    ],
  },
  {
    id: "ai-intelligence",
    orderNumber: "05",
    title: "AI Intelligence",
    items: [
      {
        title: "Context-Aware Agro-LLM",
        href: "/docs/ai-intelligence/context-model",
        description: "Grounded reasoning fusing satellite telemetry with local crop stage.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "Decision Trees & Risk Analysis",
        href: "/docs/ai-intelligence/decision-trees",
        description: "Probabilistic outcomes for irrigation, pest risk, and heatwaves.",
        isImplemented: false,
        badge: "Coming Soon",
      },
    ],
  },
  {
    id: "impact-2030",
    orderNumber: "06",
    title: "Results & Impact 2030",
    items: [
      {
        title: "Impact Metrics & Goals",
        href: "/docs/impact/metrics",
        description: "Water preservation targets, yield resilience, and farmer adoption metrics.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "Global Expansion Roadmap",
        href: "/docs/impact/roadmap",
        description: "Phased deployment strategy from pilots to open international access.",
        isImplemented: false,
        badge: "Coming Soon",
      },
    ],
  },
  {
    id: "architecture-developers",
    orderNumber: "07",
    title: "Developers & Architecture",
    items: [
      {
        title: "System Architecture",
        href: "/docs/architecture/system-design",
        description: "Modular pipeline design, Next.js architecture, and data contracts.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "API Specifications",
        href: "/docs/architecture/api-reference",
        description: "REST & Route Handlers for Earth observation ingestion.",
        isImplemented: false,
        badge: "Coming Soon",
      },
    ],
  },
];
