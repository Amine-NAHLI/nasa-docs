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
        title: "NASA POWER Climate Data",
        href: "/docs/nasa-intelligence/power-climate",
        description: "Solar radiation, air temperature, humidity, wind, and precipitation ingestion.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "NASA SMAP Soil Moisture",
        href: "/docs/nasa-intelligence/smap-soil-moisture",
        description: "Surface and root-zone soil moisture metrics and satellite radar measurements.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "Future Sensor Roadmap",
        href: "/docs/nasa-intelligence/roadmap",
        description: "Planned integration of high-resolution optical and thermal sensors (Phase 2).",
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
        title: "Evapotranspiration (FAO-56)",
        href: "/docs/scientific-engine/evapotranspiration",
        description: "Penman-Monteith reference evapotranspiration calculation from POWER parameters.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "Soil-Water Deficit Balance",
        href: "/docs/scientific-engine/water-balance",
        description: "Depletion tracking integrating SMAP moisture and crop water requirements.",
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
        title: "Saïss Plain Demonstration Scenario",
        href: "/docs/earth-trials/meknes-scenario",
        description: "Meknes simulation case study demonstrating semi-arid agricultural stress models.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "Global Transferability Protocol",
        href: "/docs/earth-trials/transferability",
        description: "Adapting meteorological models across diverse global agro-ecological zones.",
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
        title: "Context-Aware Agro-Interpretation",
        href: "/docs/ai-intelligence/context-model",
        description: "Translating quantitative moisture and climate metrics into actionable guidance.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "Risk Analysis & Scenario Evaluation",
        href: "/docs/ai-intelligence/decision-trees",
        description: "Evaluating irrigation timing tradeoffs under forecasted dry spells.",
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
        title: "Impact Targets & Metrics",
        href: "/docs/impact/metrics",
        description: "Water conservation potential, climate resilience, and farmer accessibility.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "Global Expansion Roadmap",
        href: "/docs/impact/roadmap",
        description: "Roadmap from simulation prototypes to open international accessibility.",
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
        description: "Next.js App Router design, data ingestion pipeline, and interfaces.",
        isImplemented: false,
        badge: "Coming Soon",
      },
      {
        title: "API & Data Contracts",
        href: "/docs/architecture/api-reference",
        description: "Data schemas for NASA POWER, SMAP feeds, and modeling endpoints.",
        isImplemented: false,
        badge: "Coming Soon",
      },
    ],
  },
];
