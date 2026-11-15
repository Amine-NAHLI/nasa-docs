export interface SubChapterItem {
  id: string;
  title: string;
}

export interface ChapterMeta {
  id: string;
  title: string;
  category: string;
  badge?: string;
  description: string;
  subChapters: SubChapterItem[];
  prevId?: string;
  nextId?: string;
}

export interface SidebarCategory {
  title: string;
  chapters: ChapterMeta[];
}

export const DOSSIER_NAVIGATION: SidebarCategory[] = [
  {
    title: "MEET FARMER EYE",
    chapters: [
      {
        id: "overview",
        title: "Get started & Overview",
        category: "MEET FARMER EYE",
        badge: "Ch. 1",
        description: "Executive Summary, team DEVUPWARD, and document status & evidence policy.",
        subChapters: [
          { id: "evidence-policy", title: "Evidence Policy & 5 Classes" },
          { id: "executive-summary", title: "Executive Summary & Context" },
          { id: "key-reference-run", title: "Key Reference Comparison (Meknes)" },
        ],
        nextId: "why-farmer-eye",
      },
      {
        id: "why-farmer-eye",
        title: "Why Farmer Eye?",
        category: "MEET FARMER EYE",
        badge: "Ch. 2-6",
        description: "The global agricultural challenge, design principles, and the Second Eyes concept.",
        subChapters: [
          { id: "global-challenge", title: "The Global Agricultural Challenge (FAO)" },
          { id: "decision-problem", title: "The Farmer Decision Problem" },
          { id: "why-earth-observations", title: "Why Earth Observations Matter" },
          { id: "evidence-maturity", title: "Evidence Maturity (Figure 2.1)" },
          { id: "design-principles", title: "6 Core Design Principles" },
          { id: "second-eyes-concept", title: "The Farmer's Second Eyes Concept" },
          { id: "mission-objectives", title: "Scientific & Practical Objectives" },
          { id: "implementation-status", title: "Implementation Inventory (Table 6.1 & 6.2)" },
        ],
        prevId: "overview",
        nextId: "nasa-power",
      },
    ],
  },
  {
    title: "NASA EARTH DATA",
    chapters: [
      {
        id: "nasa-power",
        title: "NASA POWER Climate",
        category: "NASA EARTH DATA",
        badge: "Ch. 9",
        description: "7 meteorological parameters, quality handling, and reproducible API requests.",
        subChapters: [
          { id: "power-parameters", title: "7 Meteorological Variables (Table 9.1)" },
          { id: "power-quality", title: "Quality Handling & Missing-Data Markers" },
          { id: "power-missingness", title: "Data Quality & Missingness Protocol (Eq. 9.1)" },
          { id: "power-api-request", title: "Reproducible Public API Query (Listing 9.1)" },
        ],
        prevId: "why-farmer-eye",
        nextId: "nasa-smap",
      },
      {
        id: "nasa-smap",
        title: "NASA SMAP Soil Moisture",
        category: "NASA EARTH DATA",
        badge: "Ch. 10",
        description: "SPL4SMGP Level-4 9km radar assimilation, 12-month series, and root-zone depth decoupling.",
        subChapters: [
          { id: "smap-catalogue", title: "SMAP L4 SPL4SMGP Collection & 5 Fields" },
          { id: "smap-extraction-example", title: "January 2025 Meknes Source Extraction" },
          { id: "smap-12-month-chart", title: "12-Month Series from ee-chart.csv (Figure 10.1)" },
          { id: "smap-surface-rootzone", title: "Surface vs Root-Zone Contrast (Figure 17.1)" },
          { id: "smap-interpretation", title: "Correct Reading of Assimilated Moisture" },
        ],
        prevId: "nasa-power",
        nextId: "architecture-pipeline",
      },
      {
        id: "architecture-pipeline",
        title: "Architecture & Pipeline",
        category: "NASA EARTH DATA",
        badge: "Ch. 7, 8, 11-13",
        description: "Complete system architecture, end-to-end request trace, trust boundaries, and metadata contracts.",
        subChapters: [
          { id: "functional-architecture", title: "Functional Architecture (Figure 7.1)" },
          { id: "request-trace", title: "End-to-End Request Trace (Figure 7.2)" },
          { id: "trust-boundaries", title: "4 System Trust Boundaries" },
          { id: "tech-stack", title: "Technologies & Development Stack" },
          { id: "code-responsibilities", title: "FastAPI Module Responsibilities (Table 8.1)" },
          { id: "metadata-contract", title: "Minimum Metadata Contract (Table 11.1)" },
          { id: "api-endpoints", title: "Data Structures & API Endpoints (Table 12.1)" },
          { id: "four-levels", title: "4 Levels of Reported Quantities" },
        ],
        prevId: "nasa-smap",
        nextId: "fao-56-et0",
      },
    ],
  },
  {
    title: "SCIENTIFIC ENGINE",
    chapters: [
      {
        id: "fao-56-et0",
        title: "Reference ET0 (FAO-56)",
        category: "SCIENTIFIC ENGINE",
        badge: "Ch. 14-15",
        description: "Standardized Penman-Monteith equation, vapor pressure curves, and worked numerical demonstration.",
        subChapters: [
          { id: "modeling-methodology", title: "3 Computational Layers (Obs / Bio / Dec)" },
          { id: "penman-monteith-eq", title: "Standardized FAO-56 Penman-Monteith (Eq. 15.1)" },
          { id: "vapor-pressure-curves", title: "Saturation Vapor Pressure & Slope (Eq. 15.2 & 15.3)" },
          { id: "worked-et0-example", title: "Worked FAO-56 Numerical Example (4.99 mm/day)" },
        ],
        prevId: "architecture-pipeline",
        nextId: "etc-crop-water",
      },
      {
        id: "etc-crop-water",
        title: "Crop ETc & Water Balance",
        category: "SCIENTIFIC ENGINE",
        badge: "Ch. 16-20",
        description: "Single-crop coefficients Kc, 3-year rotation averaging, daily root-zone depletion, and uncertainty audit.",
        subChapters: [
          { id: "etc-coefficient-eq", title: "Crop Evapotranspiration ETc (Eq. 16.1 & 16.2)" },
          { id: "worked-kc-demonstration", title: "Worked Kc Demonstration (4.20 mm/day)" },
          { id: "soil-water-deficit", title: "Daily Water Deficit (Eq. 18.1 & 18.2)" },
          { id: "rotation-mathematics", title: "Crop Planning & Rotation Math (Eq. 19.1 - 19.3)" },
          { id: "heuristic-resilience", title: "Heuristic Resilience Score (Eq. 19.4)" },
          { id: "dimensional-audit", title: "Dimensional Audit & Units (Table 19.1)" },
          { id: "sources-of-uncertainty", title: "5 Sources of Uncertainty & Propagation (Eq. 20.1)" },
        ],
        prevId: "fao-56-et0",
        nextId: "crop-battle-lab",
      },
    ],
  },
  {
    title: "EARTH TRIALS LABS",
    chapters: [
      {
        id: "crop-battle-lab",
        title: "Crop Battle Lab",
        category: "EARTH TRIALS LABS",
        badge: "Ch. 21",
        description: "Multi-plan rotation comparison: Cereal monoculture vs. Diversified vs. Conservation-oriented.",
        subChapters: [
          { id: "candidate-plans-table", title: "3 Candidate Plans (Table 21.1)" },
          { id: "score-normalization", title: "Score Normalization Mechanics (Eq. 21.1)" },
          { id: "modeled-demand-chart", title: "Annualized Modeled Demand Chart (Figure 21.1)" },
          { id: "relative-diff-chart", title: "Relative Demand Difference Chart (Figure 21.2)" },
          { id: "comparison-contract", title: "Agronomic Plan Comparison Contract" },
        ],
        prevId: "etc-crop-water",
        nextId: "climate-attack-lab",
      },
      {
        id: "climate-attack-lab",
        title: "Climate Attack Lab",
        category: "EARTH TRIALS LABS",
        badge: "Ch. 22",
        description: "Counterfactual climate shocks: Drought, heatwave, delayed autumn rain, and stress score penalties.",
        subChapters: [
          { id: "shock-multipliers-table", title: "Configurable Shock Multipliers (Table 22.1)" },
          { id: "shock-evaluation", title: "How a Climate Shock is Evaluated" },
          { id: "shock-visualization", title: "Shock Parameter Multipliers (Figure 22.1)" },
          { id: "baseline-vs-drought", title: "Baseline vs. Drought Stress Score (Figure 22.2)" },
        ],
        prevId: "crop-battle-lab",
        nextId: "farm-time-machine",
      },
      {
        id: "farm-time-machine",
        title: "Farm Time Machine & Soil Lab",
        category: "EARTH TRIALS LABS",
        badge: "Ch. 23-24",
        description: "Historical climate replay, counterfactual agronomic comparison, and physical soil assay protocol.",
        subChapters: [
          { id: "time-machine-workflow", title: "Counterfactual Workflow (Figure 23.1)" },
          { id: "historical-run-distinction", title: "Earlier 95 mm Run vs Revised 93.4 mm Run" },
          { id: "physical-soil-protocol", title: "Physical Soil Laboratory Assay Protocol" },
          { id: "minimum-field-log", title: "Minimum Field Log Requirements" },
        ],
        prevId: "climate-attack-lab",
        nextId: "ai-architecture",
      },
    ],
  },
  {
    title: "AI INTELLIGENCE & VALIDATION",
    chapters: [
      {
        id: "ai-architecture",
        title: "Multi-Agent AI Architecture",
        category: "AI INTELLIGENCE & VALIDATION",
        badge: "Ch. 25-27",
        description: "OpenAI integration, multi-agent roles, multilingual Darija/EN/FR assistant, and anti-hallucination tests.",
        subChapters: [
          { id: "role-separation", title: "Deterministic vs Generative Role Separation" },
          { id: "agent-contract", title: "Recommended Agent Contract" },
          { id: "multi-agent-division", title: "Division of Agent Responsibilities (Figure 26.1)" },
          { id: "multilingual-assistant", title: "Moroccan Darija, English & French Assistant" },
          { id: "acceptance-criteria", title: "6 Acceptance Criteria Tests (Table 27.1)" },
        ],
        prevId: "farm-time-machine",
        nextId: "ai-scientific-tribunal",
      },
      {
        id: "ai-scientific-tribunal",
        title: "AI Scientific Tribunal & Trust",
        category: "AI INTELLIGENCE & VALIDATION",
        badge: "Ch. 28-30",
        description: "Internal verification tribunal, evidence checks, deterministic vs generative matrix, and human oversight.",
        subChapters: [
          { id: "tribunal-evidence-checks", title: "5 Proposed Evidence Checks" },
          { id: "tribunal-reasoning-flow", title: "Agent Evidence Flow & Rejection (Figure 28.1)" },
          { id: "deterministic-vs-generative", title: "Deterministic Science vs. Generative AI" },
          { id: "trust-risks", title: "Risks Requiring Mitigation" },
          { id: "human-oversight", title: "Farmer Retention of Final Agency" },
        ],
        prevId: "ai-architecture",
        nextId: "meknes-reference-case",
      },
    ],
  },
  {
    title: "EXPERIMENTAL RESULTS",
    chapters: [
      {
        id: "meknes-reference-case",
        title: "Meknes Case & Walkthrough",
        category: "EXPERIMENTAL RESULTS",
        badge: "Ch. 31-35",
        description: "Meknes/Saïss 2025 baseline, step-by-step depth-to-volume math, 5-ha scaling, and 52-test pytest audit.",
        subChapters: [
          { id: "meknes-coordinates", title: "Geographical Coordinates & Saïss Landscape" },
          { id: "2025-audit-baseline", title: "2025 Audit Baseline Values (Table 32.1)" },
          { id: "crop-rotation-comparison", title: "Revised Crop Rotation Comparison Table" },
          { id: "volume-conversion-identity", title: "Depth to Volume Identity (1 mm on 1 ha = 10 m³)" },
          { id: "volumetric-demand-chart", title: "Volumetric ETc Demand Chart (Figure 33.1)" },
          { id: "five-hectare-scaling", title: "5-Hectare Farm Scaling Calculation" },
          { id: "pytest-validation-audit", title: "Pytest Suite (52 Tests: 49 Passed, 3 Skipped)" },
          { id: "verification-checklist", title: "7-Point Verification Checklist" },
        ],
        prevId: "ai-scientific-tribunal",
        nextId: "impact-2030",
      },
    ],
  },
  {
    title: "IMPACT 2030",
    chapters: [
      {
        id: "impact-2030",
        title: "Impact 2030: Scaling Model",
        category: "IMPACT 2030",
        badge: "Ch. 36-38",
        description: "Global agriculture context, net-farm economics, conditional scaling model, and sensitivity analysis.",
        subChapters: [
          { id: "global-expansion-conditions", title: "Conditions for Responsible Expansion" },
          { id: "global-freshwater-chart", title: "Global Freshwater Withdrawals (Figure 36.1)" },
          { id: "net-farm-economics", title: "Net-Farm Economics Formulation (Eq. 37.1)" },
          { id: "scaling-identities", title: "Mathematical Scaling Identities (Eq. 38.1 - 38.3)" },
          { id: "conditional-scenarios-table", title: "Conditional Scenarios: Pilot / Regional / Multi-Region" },
          { id: "two-volumes-distinction", title: "ET-Demand Equivalent vs. Irrigation Proxy" },
          { id: "transferability-sensitivity", title: "Transferability Factor & Adoption Sensitivity" },
        ],
        prevId: "meknes-reference-case",
        nextId: "annexes",
      },
    ],
  },
  {
    title: "ANNEXES & REFERENCES",
    chapters: [
      {
        id: "annexes",
        title: "Annexes & Bibliography",
        category: "ANNEXES & REFERENCES",
        badge: "Annex A-I",
        description: "Mathematical reference sheet, 12-month ee-chart dataset, test code, glossary, and full bibliography.",
        subChapters: [
          { id: "annex-a-math", title: "Annex A: Mathematical Reference Sheet" },
          { id: "annex-b-chart-table", title: "Annex B: Full 12-Month ee-chart.csv Table" },
          { id: "annex-c-python-tests", title: "Annex C: Python Test Invariants (Listing C.2)" },
          { id: "annex-d-soil-classes", title: "Annex D & E: Soil Classes (Tirs, Hamri) & Runs" },
          { id: "annex-h-glossary", title: "Annex H: Complete Glossary & Acronyms" },
          { id: "dossier-conclusion", title: "Formal Technical Conclusion" },
          { id: "full-bibliography", title: "Bibliography Citations [1–14] with Links" },
        ],
        prevId: "impact-2030",
      },
    ],
  },
];

// Helper to look up any chapter by ID
export function getChapterById(id: string): ChapterMeta | undefined {
  for (const cat of DOSSIER_NAVIGATION) {
    for (const ch of cat.chapters) {
      if (ch.id === id) return ch;
    }
  }
  return undefined;
}
