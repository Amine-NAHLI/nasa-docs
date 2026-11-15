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
        description: "Vue d'ensemble orbitale et hub central ancré sur la Plaine du Saïss.",
        isImplemented: true,
        badge: "Fès",
      },
      {
        title: "Our Mission",
        href: "/docs/our-mission",
        description: "Gouvernance éthique et prise de décision agricole humaine.",
        isImplemented: true,
        badge: "Rabat",
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
        href: "/docs/nasa-earth",
        description: "Rayonnement solaire ALLSKY, température, humidité et précipitations.",
        isImplemented: true,
        badge: "Kénitra",
      },
      {
        title: "NASA SMAP Soil Moisture",
        href: "/docs/nasa-earth",
        description: "Teneur en eau superficielle et racinaire mesurée par radar micro-ondes.",
        isImplemented: true,
        badge: "Gharb",
      },
      {
        title: "Future Sensor Roadmap",
        href: "/docs/nasa-earth",
        description: "Feuille de route pour l'intégration de capteurs optiques et thermiques.",
        isImplemented: true,
        badge: "Roadmap",
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
        href: "/docs/scientific-engine",
        description: "Calculs Penman-Monteith de référence (ET0) à partir des paramètres NASA.",
        isImplemented: true,
        badge: "Béni Mellal",
      },
      {
        title: "Soil-Water Deficit Balance",
        href: "/docs/scientific-engine",
        description: "Suivi du bilan de déficit hydrique et consommation culturale de l'eau.",
        isImplemented: true,
        badge: "Tadla",
      },
    ],
  },
  {
    id: "earth-trials",
    orderNumber: "04",
    title: "Earth Trials",
    items: [
      {
        title: "Simulation & Stress Extrême",
        href: "/docs/earth-trials",
        description: "Éprouver les algorithmes sous des conditions semi-arides et thermiques aiguës.",
        isImplemented: true,
        badge: "Marrakech",
      },
      {
        title: "Global Transferability Protocol",
        href: "/docs/earth-trials",
        description: "Adaptation des modèles biophysiques à l'ensemble des bassins mondiaux.",
        isImplemented: true,
        badge: "Haouz",
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
        href: "/docs/ai-intelligence",
        description: "Traduction des pourcentages radar SMAP et indices en langage clair.",
        isImplemented: true,
        badge: "Agadir",
      },
      {
        title: "Risk Analysis & Decision Trees",
        href: "/docs/ai-intelligence",
        description: "Évaluation des compromis d'irrigation face aux prévisions de canicule.",
        isImplemented: true,
        badge: "Souss",
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
        href: "/docs/impact-2030",
        description: "Mesure de la préservation de l'eau et de la résilience face à la sécheresse.",
        isImplemented: true,
        badge: "Berkane",
      },
      {
        title: "Global Expansion Roadmap",
        href: "/docs/impact-2030",
        description: "Trajectoire d'accessibilité internationale ouverte aux petits producteurs.",
        isImplemented: true,
        badge: "Moulouya",
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
        href: "/docs/architecture-developers",
        description: "Pipeline d'ingestion Next.js, cache des flux NASA et accessibilité rurale.",
        isImplemented: true,
        badge: "Casablanca",
      },
      {
        title: "API & Data Contracts",
        href: "/docs/architecture-developers",
        description: "Schémas de données GeoJSON et contrats d'échange ouverts.",
        isImplemented: true,
        badge: "Open API",
      },
    ],
  },
];
