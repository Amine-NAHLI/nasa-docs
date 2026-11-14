import { SearchResultItem } from "@/types/docs";

export const phase1SearchIndex: SearchResultItem[] = [
  {
    id: "hero",
    title: "Farmer Eye: The Farmer's Second Eyes",
    section: "Homepage / Overview",
    href: "/#hero",
    snippet:
      "Turning NASA Earth observations, agricultural science, and artificial intelligence into clearer farming decisions.",
    keywords: ["farmer eye", "nasa", "earth observation", "ai", "second eyes", "satellite", "slogan"],
  },
  {
    id: "challenge",
    title: "The Global Challenge: Climate Uncertainty & Drought",
    section: "Homepage / Global Challenge",
    href: "/#challenge",
    snippet:
      "Unpredictable precipitation, severe droughts, and escalating groundwater pressure make traditional intuition alone insufficient for complex agricultural decisions.",
    keywords: ["climate", "drought", "water pressure", "uncertainty", "precipitation", "groundwater"],
  },
  {
    id: "introducing",
    title: "Introducing Farmer Eye: Seeing the Bigger Picture",
    section: "Homepage / Concept",
    href: "/#introducing",
    snippet:
      "Farmers see their fields from the ground; Farmer Eye helps them see the bigger picture from space, combining macroscopic satellite telemetry with agronomic science.",
    keywords: ["concept", "bigger picture", "human judgment", "empowerment", "decision support"],
  },
  {
    id: "pipeline",
    title: "How It Works: 5-Stage Scientific Pipeline",
    section: "Homepage / Architecture Flow",
    href: "/#how-it-works",
    snippet:
      "NASA Earth Observations → Environmental Data Processing → Scientific Agricultural Models → AI-Assisted Interpretation → Farmer Decision Support.",
    keywords: ["pipeline", "flow", "landsat", "modis", "sentinel", "penman-monteith", "soil moisture", "stages"],
  },
  {
    id: "docs-overview",
    title: "Documentation Overview & Getting Started",
    section: "Docs / Getting Started",
    href: "/docs",
    snippet:
      "Technical roadmap, architecture navigation, and module directory across the seven core scientific disciplines of Farmer Eye.",
    keywords: ["docs", "documentation", "overview", "getting started", "modules", "navigation"],
  },
  {
    id: "mission-what-is",
    title: "What is Farmer Eye?",
    section: "Docs / Our Mission",
    href: "/docs/our-mission#what-is-farmer-eye",
    snippet:
      "Farmer Eye is an open scientific decision-support system designed to empower farmers with planetary-scale Earth observations, biophysical crop modeling, and grounded AI.",
    keywords: ["mission", "what is", "definition", "open science", "decision support"],
  },
  {
    id: "mission-second-eyes",
    title: "The Philosophy of 'The Farmer's Second Eyes'",
    section: "Docs / Our Mission",
    href: "/docs/our-mission#second-eyes-philosophy",
    snippet:
      "Why Farmer Eye serves as an augmentative perspective rather than an autonomous replacement. The farmer always retains final agency and field judgment.",
    keywords: ["second eyes", "philosophy", "human agency", "augmentation", "autonomy vs support"],
  },
  {
    id: "mission-nasa-role",
    title: "The Role of NASA Earth Observations",
    section: "Docs / Our Mission",
    href: "/docs/our-mission#role-of-nasa-observations",
    snippet:
      "Multispectral satellite data (Landsat, Sentinel, ECOSTRESS, SMAP) provide objective radiometric baselines for vegetation vigor, moisture stress, and evapotranspiration.",
    keywords: ["nasa", "landsat", "smap", "ecostress", "sentinel", "multispectral", "radiometric"],
  },
  {
    id: "mission-scientific-models",
    title: "The Role of Agricultural Biophysical Modeling",
    section: "Docs / Our Mission",
    href: "/docs/our-mission#role-of-scientific-modeling",
    snippet:
      "Connecting raw pixel reflectance to plant physiology: water balance calculations, soil thermal dynamics, and growing-degree-day phenology curves.",
    keywords: ["scientific models", "biophysical", "crop modeling", "penman-monteith", "phenology", "agronomy"],
  },
  {
    id: "mission-ai-role",
    title: "The Role of AI & Context-Aware Interpretation",
    section: "Docs / Our Mission",
    href: "/docs/our-mission#role-of-ai",
    snippet:
      "Translating complex petabytes of multispectral indices and mathematical differential equations into clear, plain-language actionable insights tailored to regional conditions.",
    keywords: ["ai", "machine learning", "llm", "context-aware", "interpretation", "actionable insights"],
  },
  {
    id: "mission-team",
    title: "The DEVUPWARD Team & Scientific Initiative",
    section: "Docs / Our Mission",
    href: "/docs/our-mission#devupward-team",
    snippet:
      "Developed by DEVUPWARD under the EARTH TRIALS | IMPACT 2030 initiative for the NASA Space Apps Challenge.",
    keywords: ["devupward", "team", "space apps", "earth trials", "impact 2030", "creators"],
  },
  {
    id: "vision-2030",
    title: "Impact 2030: Our Global Agricultural Vision",
    section: "Homepage & Docs / Vision",
    href: "/#vision-2030",
    snippet:
      "A global ambition to democratize planetary Earth intelligence so that every farming community can anticipate climate volatility with scientific confidence.",
    keywords: ["vision", "2030", "impact", "global", "climate resilience", "sustainability"],
  },
];

export function searchDocumentation(query: string): SearchResultItem[] {
  const clean = query.trim().toLowerCase();
  if (!clean || clean.length < 2) return [];

  return phase1SearchIndex.filter((item) => {
    return (
      item.title.toLowerCase().includes(clean) ||
      item.snippet.toLowerCase().includes(clean) ||
      item.section.toLowerCase().includes(clean) ||
      item.keywords.some((kw) => kw.includes(clean))
    );
  });
}
