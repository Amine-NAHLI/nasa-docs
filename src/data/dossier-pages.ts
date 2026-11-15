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

interface LocalizedChapterData {
  id: string;
  badge?: string;
  prevId?: string;
  nextId?: string;
  title: { en: string; fr: string };
  category: { en: string; fr: string };
  description: { en: string; fr: string };
  subChapters: {
    id: string;
    title: { en: string; fr: string };
  }[];
}

interface LocalizedCategoryData {
  title: { en: string; fr: string };
  chapters: LocalizedChapterData[];
}

const LOCALIZED_DOSSIER: LocalizedCategoryData[] = [
  {
    title: { en: "MEET FARMER EYE", fr: "DÉCOUVRIR FARMER EYE" },
    chapters: [
      {
        id: "overview",
        badge: "Ch. 1",
        title: { en: "Get started & Overview", fr: "Introduction & Vue d'ensemble" },
        category: { en: "MEET FARMER EYE", fr: "DÉCOUVRIR FARMER EYE" },
        description: {
          en: "Executive Summary, team DEVUPWARD, and document status & evidence policy.",
          fr: "Résumé exécutif, équipe DEVUPWARD, statut du document et politique de preuve.",
        },
        subChapters: [
          {
            id: "evidence-policy",
            title: { en: "Evidence Policy & 5 Classes", fr: "Politique de preuve & 5 classes" },
          },
          {
            id: "executive-summary",
            title: { en: "Executive Summary & Context", fr: "Résumé exécutif & contexte" },
          },
          {
            id: "key-reference-run",
            title: { en: "Key Reference Comparison (Meknes)", fr: "Comparaison de référence (Meknès)" },
          },
        ],
        nextId: "why-farmer-eye",
      },
      {
        id: "why-farmer-eye",
        badge: "Ch. 2-6",
        title: { en: "Why Farmer Eye?", fr: "Pourquoi Farmer Eye ?" },
        category: { en: "MEET FARMER EYE", fr: "DÉCOUVRIR FARMER EYE" },
        description: {
          en: "The global agricultural challenge, design principles, and the Second Eyes concept.",
          fr: "Défi agricole mondial, principes de conception et concept des Second Eyes.",
        },
        subChapters: [
          {
            id: "global-challenge",
            title: { en: "The Global Agricultural Challenge (FAO)", fr: "Le défi agricole mondial (FAO)" },
          },
          {
            id: "decision-problem",
            title: { en: "The Farmer Decision Problem", fr: "Le dilemme décisionnel de l'agriculteur" },
          },
          {
            id: "why-earth-observations",
            title: { en: "Why Earth Observations Matter", fr: "L'importance des observations de la Terre" },
          },
          {
            id: "evidence-maturity",
            title: { en: "Evidence Maturity (Figure 2.1)", fr: "Maturité des preuves (Figure 2.1)" },
          },
          {
            id: "design-principles",
            title: { en: "6 Core Design Principles", fr: "6 principes clés de conception" },
          },
          {
            id: "second-eyes-concept",
            title: { en: "The Farmer's Second Eyes Concept", fr: "Le concept 'Second Eyes' de l'agriculteur" },
          },
          {
            id: "mission-objectives",
            title: { en: "Scientific & Practical Objectives", fr: "Objectifs scientifiques et pratiques" },
          },
          {
            id: "implementation-status",
            title: { en: "Implementation Inventory (Table 6.1 & 6.2)", fr: "Inventaire d'implémentation (Tab. 6.1 & 6.2)" },
          },
        ],
        prevId: "overview",
        nextId: "nasa-power",
      },
    ],
  },
  {
    title: { en: "NASA EARTH DATA", fr: "DONNÉES TERRESTRES NASA" },
    chapters: [
      {
        id: "nasa-power",
        badge: "Ch. 9",
        title: { en: "NASA POWER Climate", fr: "Climat NASA POWER" },
        category: { en: "NASA EARTH DATA", fr: "DONNÉES TERRESTRES NASA" },
        description: {
          en: "7 meteorological parameters, quality handling, and reproducible API requests.",
          fr: "7 paramètres météorologiques, gestion de la qualité et requêtes API reproductibles.",
        },
        subChapters: [
          {
            id: "power-parameters",
            title: { en: "7 Meteorological Variables (Table 9.1)", fr: "7 variables météo (Tableau 9.1)" },
          },
          {
            id: "power-quality",
            title: { en: "Quality Handling & Missing-Data Markers", fr: "Traitement qualité et marqueurs de lacunes" },
          },
          {
            id: "power-missingness",
            title: { en: "Data Quality & Missingness Protocol (Eq. 9.1)", fr: "Protocole de qualité des données (Éq. 9.1)" },
          },
          {
            id: "power-api-request",
            title: { en: "Reproducible Public API Query (Listing 9.1)", fr: "Requête API publique reproductible (Listing 9.1)" },
          },
        ],
        prevId: "why-farmer-eye",
        nextId: "nasa-smap",
      },
      {
        id: "nasa-smap",
        badge: "Ch. 10",
        title: { en: "NASA SMAP Soil Moisture", fr: "Humidité du Sol NASA SMAP" },
        category: { en: "NASA EARTH DATA", fr: "DONNÉES TERRESTRES NASA" },
        description: {
          en: "SPL4SMGP Level-4 9km radar assimilation, 12-month series, and root-zone depth decoupling.",
          fr: "Assimilation radar SPL4SMGP Niveau-4 9km, série sur 12 mois et découplage racinaire.",
        },
        subChapters: [
          {
            id: "smap-catalogue",
            title: { en: "SMAP L4 SPL4SMGP Collection & 5 Fields", fr: "Collection SMAP L4 SPL4SMGP et 5 champs" },
          },
          {
            id: "smap-extraction-example",
            title: { en: "January 2025 Meknes Source Extraction", fr: "Extraction source Meknès Janvier 2025" },
          },
          {
            id: "smap-12-month-chart",
            title: { en: "12-Month Series from ee-chart.csv (Figure 10.1)", fr: "Série 12 mois de ee-chart.csv (Figure 10.1)" },
          },
          {
            id: "smap-surface-rootzone",
            title: { en: "Surface vs Root-Zone Contrast (Figure 17.1)", fr: "Contraste Surface vs Zone Racinaire (Fig. 17.1)" },
          },
          {
            id: "smap-interpretation",
            title: { en: "Correct Reading of Assimilated Moisture", fr: "Lecture correcte de l'humidité assimilée" },
          },
        ],
        prevId: "nasa-power",
        nextId: "architecture-pipeline",
      },
      {
        id: "architecture-pipeline",
        badge: "Ch. 7, 8, 11-13",
        title: { en: "Architecture & Pipeline", fr: "Architecture & Pipeline" },
        category: { en: "NASA EARTH DATA", fr: "DONNÉES TERRESTRES NASA" },
        description: {
          en: "Complete system architecture, end-to-end request trace, trust boundaries, and metadata contracts.",
          fr: "Architecture système, trace de requête de bout en bout, limites de confiance et contrats.",
        },
        subChapters: [
          {
            id: "functional-architecture",
            title: { en: "Functional Architecture (Figure 7.1)", fr: "Architecture fonctionnelle (Figure 7.1)" },
          },
          {
            id: "request-trace",
            title: { en: "End-to-End Request Trace (Figure 7.2)", fr: "Trace de requête de bout en bout (Figure 7.2)" },
          },
          {
            id: "trust-boundaries",
            title: { en: "4 System Trust Boundaries", fr: "4 frontières de confiance du système" },
          },
          {
            id: "tech-stack",
            title: { en: "Technologies & Development Stack", fr: "Technologies et pile de développement" },
          },
          {
            id: "code-responsibilities",
            title: { en: "FastAPI Module Responsibilities (Table 8.1)", fr: "Responsabilités des modules FastAPI (Tab. 8.1)" },
          },
          {
            id: "metadata-contract",
            title: { en: "Minimum Metadata Contract (Table 11.1)", fr: "Contrat de métadonnées minimal (Tableau 11.1)" },
          },
          {
            id: "api-endpoints",
            title: { en: "Data Structures & API Endpoints (Table 12.1)", fr: "Structures de données & points d'API (Tab. 12.1)" },
          },
          {
            id: "four-levels",
            title: { en: "4 Levels of Reported Quantities", fr: "4 niveaux de grandeurs rapportées" },
          },
        ],
        prevId: "nasa-smap",
        nextId: "fao-56-et0",
      },
    ],
  },
  {
    title: { en: "SCIENTIFIC ENGINE", fr: "MOTEUR SCIENTIFIQUE" },
    chapters: [
      {
        id: "fao-56-et0",
        badge: "Ch. 14-15",
        title: { en: "Reference ET0 (FAO-56)", fr: "ET0 de Référence (FAO-56)" },
        category: { en: "SCIENTIFIC ENGINE", fr: "MOTEUR SCIENTIFIQUE" },
        description: {
          en: "Standardized Penman-Monteith equation, vapor pressure curves, and worked numerical demonstration.",
          fr: "Équation de Penman-Monteith standardisée, courbes de pression de vapeur et démonstration chiffrée.",
        },
        subChapters: [
          {
            id: "modeling-methodology",
            title: { en: "3 Computational Layers (Obs / Bio / Dec)", fr: "3 couches de calcul (Obs / Bio / Déc)" },
          },
          {
            id: "penman-monteith-eq",
            title: { en: "Standardized FAO-56 Penman-Monteith (Eq. 15.1)", fr: "Penman-Monteith FAO-56 standardisée (Éq. 15.1)" },
          },
          {
            id: "vapor-pressure-curves",
            title: { en: "Saturation Vapor Pressure & Slope (Eq. 15.2 & 15.3)", fr: "Pression de vapeur saturante & pente (Éq. 15.2-3)" },
          },
          {
            id: "worked-et0-example",
            title: { en: "Worked FAO-56 Numerical Example (4.99 mm/day)", fr: "Exemple numérique calculé FAO-56 (4,99 mm/j)" },
          },
        ],
        prevId: "architecture-pipeline",
        nextId: "etc-crop-water",
      },
      {
        id: "etc-crop-water",
        badge: "Ch. 16-20",
        title: { en: "Crop ETc & Water Balance", fr: "ETc des Cultures & Bilan Hydrique" },
        category: { en: "SCIENTIFIC ENGINE", fr: "MOTEUR SCIENTIFIQUE" },
        description: {
          en: "Single-crop coefficients Kc, 3-year rotation averaging, daily root-zone depletion, and uncertainty audit.",
          fr: "Coefficients Kc de culture, moyenne de rotation triennale, épuisement journalier et incertitudes.",
        },
        subChapters: [
          {
            id: "etc-coefficient-eq",
            title: { en: "Crop Evapotranspiration ETc (Eq. 16.1 & 16.2)", fr: "Évapotranspiration de la culture ETc (Éq. 16.1-2)" },
          },
          {
            id: "worked-kc-demonstration",
            title: { en: "Worked Kc Demonstration (4.20 mm/day)", fr: "Démonstration Kc calculée (4,20 mm/jour)" },
          },
          {
            id: "soil-water-deficit",
            title: { en: "Daily Water Deficit (Eq. 18.1 & 18.2)", fr: "Déficit hydrique journalier (Éq. 18.1 & 18.2)" },
          },
          {
            id: "rotation-mathematics",
            title: { en: "Crop Planning & Rotation Math (Eq. 19.1 - 19.3)", fr: "Mathématiques de rotation de cultures (Éq. 19.1-3)" },
          },
          {
            id: "heuristic-resilience",
            title: { en: "Heuristic Resilience Score (Eq. 19.4)", fr: "Score heuristique de résilience (Éq. 19.4)" },
          },
          {
            id: "dimensional-audit",
            title: { en: "Dimensional Audit & Units (Table 19.1)", fr: "Audit dimensionnel & unités (Tableau 19.1)" },
          },
          {
            id: "sources-of-uncertainty",
            title: { en: "5 Sources of Uncertainty & Propagation (Eq. 20.1)", fr: "5 sources d'incertitude & propagation (Éq. 20.1)" },
          },
        ],
        prevId: "fao-56-et0",
        nextId: "crop-battle-lab",
      },
    ],
  },
  {
    title: { en: "EARTH TRIALS LABS", fr: "LABORATOIRES EARTH TRIALS" },
    chapters: [
      {
        id: "crop-battle-lab",
        badge: "Ch. 21",
        title: { en: "Crop Battle Lab", fr: "Crop Battle Lab" },
        category: { en: "EARTH TRIALS LABS", fr: "LABORATOIRES EARTH TRIALS" },
        description: {
          en: "Multi-plan rotation comparison: Cereal monoculture vs. Diversified vs. Conservation-oriented.",
          fr: "Comparaison de plans de rotation : Monoculture céréalière vs Diversifié vs Conservation.",
        },
        subChapters: [
          {
            id: "candidate-plans-table",
            title: { en: "3 Candidate Plans (Table 21.1)", fr: "3 plans candidats (Tableau 21.1)" },
          },
          {
            id: "score-normalization",
            title: { en: "Score Normalization Mechanics (Eq. 21.1)", fr: "Mécanique de normalisation du score (Éq. 21.1)" },
          },
          {
            id: "modeled-demand-chart",
            title: { en: "Annualized Modeled Demand Chart (Figure 21.1)", fr: "Demande annuelle modélisée (Figure 21.1)" },
          },
          {
            id: "relative-diff-chart",
            title: { en: "Relative Demand Difference Chart (Figure 21.2)", fr: "Écart relatif de demande (Figure 21.2)" },
          },
          {
            id: "comparison-contract",
            title: { en: "Agronomic Plan Comparison Contract", fr: "Contrat de comparaison des plans agronomiques" },
          },
        ],
        prevId: "etc-crop-water",
        nextId: "climate-attack-lab",
      },
      {
        id: "climate-attack-lab",
        badge: "Ch. 22",
        title: { en: "Climate Attack Lab", fr: "Climate Attack Lab" },
        category: { en: "EARTH TRIALS LABS", fr: "LABORATOIRES EARTH TRIALS" },
        description: {
          en: "Counterfactual climate shocks: Drought, heatwave, delayed autumn rain, and stress score penalties.",
          fr: "Chocs climatiques contrefactuels : Sécheresse, canicule, retard des pluies et pénalités de stress.",
        },
        subChapters: [
          {
            id: "shock-multipliers-table",
            title: { en: "Configurable Shock Multipliers (Table 22.1)", fr: "Multiplicateurs de choc configurables (Tab. 22.1)" },
          },
          {
            id: "shock-evaluation",
            title: { en: "How a Climate Shock is Evaluated", fr: "Évaluation séquentielle d'un choc climatique" },
          },
          {
            id: "shock-visualization",
            title: { en: "Shock Parameter Multipliers (Figure 22.1)", fr: "Multiplicateurs de paramètres de choc (Fig. 22.1)" },
          },
          {
            id: "baseline-vs-drought",
            title: { en: "Baseline vs. Drought Stress Score (Figure 22.2)", fr: "Score de stress Référence vs Sécheresse (Fig. 22.2)" },
          },
        ],
        prevId: "crop-battle-lab",
        nextId: "farm-time-machine",
      },
      {
        id: "farm-time-machine",
        badge: "Ch. 23-24",
        title: { en: "Farm Time Machine & Soil Lab", fr: "Farm Time Machine & Labo Sol" },
        category: { en: "EARTH TRIALS LABS", fr: "LABORATOIRES EARTH TRIALS" },
        description: {
          en: "Historical climate replay, counterfactual agronomic comparison, and physical soil assay protocol.",
          fr: "Rejeu climatique historique, comparaison contrefactuelle et protocole d'analyse de sol.",
        },
        subChapters: [
          {
            id: "time-machine-workflow",
            title: { en: "Counterfactual Workflow (Figure 23.1)", fr: "Flux de travail contrefactuel (Figure 23.1)" },
          },
          {
            id: "historical-run-distinction",
            title: { en: "Earlier 95 mm Run vs Revised 93.4 mm Run", fr: "Simulation initiale 95 mm vs Révisée 93,4 mm" },
          },
          {
            id: "physical-soil-protocol",
            title: { en: "Physical Soil Laboratory Assay Protocol", fr: "Protocole d'analyse physique de sol en labo" },
          },
          {
            id: "minimum-field-log",
            title: { en: "Minimum Field Log Requirements", fr: "Cahier d'enregistrement minimal de parcelle" },
          },
        ],
        prevId: "climate-attack-lab",
        nextId: "ai-architecture",
      },
    ],
  },
  {
    title: { en: "AI INTELLIGENCE & VALIDATION", fr: "IA & VALIDATION SCIENTIFIQUE" },
    chapters: [
      {
        id: "ai-architecture",
        badge: "Ch. 25-27",
        title: { en: "Multi-Agent AI Architecture", fr: "Architecture IA Multi-Agents" },
        category: { en: "AI INTELLIGENCE & VALIDATION", fr: "IA & VALIDATION SCIENTIFIQUE" },
        description: {
          en: "OpenAI integration, multi-agent roles, multilingual Darija/EN/FR assistant, and anti-hallucination tests.",
          fr: "Intégration OpenAI, rôles multi-agents, assistant Darija/FR/EN et tests anti-hallucination.",
        },
        subChapters: [
          {
            id: "role-separation",
            title: { en: "Deterministic vs Generative Role Separation", fr: "Séparation Déterministe vs Génératif" },
          },
          {
            id: "agent-contract",
            title: { en: "Recommended Agent Contract", fr: "Contrat d'agent recommandé" },
          },
          {
            id: "multi-agent-division",
            title: { en: "Division of Agent Responsibilities (Figure 26.1)", fr: "Répartition des responsabilités (Fig. 26.1)" },
          },
          {
            id: "multilingual-assistant",
            title: { en: "Moroccan Darija, English & French Assistant", fr: "Assistant multilingue Darija, Français & Anglais" },
          },
          {
            id: "acceptance-criteria",
            title: { en: "6 Acceptance Criteria Tests (Table 27.1)", fr: "6 tests de critères d'acceptation (Tab. 27.1)" },
          },
        ],
        prevId: "farm-time-machine",
        nextId: "ai-scientific-tribunal",
      },
      {
        id: "ai-scientific-tribunal",
        badge: "Ch. 28-30",
        title: { en: "AI Scientific Tribunal & Trust", fr: "Tribunal Scientifique IA & Confiance" },
        category: { en: "AI INTELLIGENCE & VALIDATION", fr: "IA & VALIDATION SCIENTIFIQUE" },
        description: {
          en: "Internal verification tribunal, evidence checks, deterministic vs generative matrix, and human oversight.",
          fr: "Tribunal de vérification interne, contrôles de preuve, matrice de confiance et supervision humaine.",
        },
        subChapters: [
          {
            id: "tribunal-evidence-checks",
            title: { en: "5 Proposed Evidence Checks", fr: "5 contrôles de conformité de preuve" },
          },
          {
            id: "tribunal-reasoning-flow",
            title: { en: "Agent Evidence Flow & Rejection (Figure 28.1)", fr: "Flux de preuve et rejet par le tribunal (Fig. 28.1)" },
          },
          {
            id: "deterministic-vs-generative",
            title: { en: "Deterministic Science vs. Generative AI", fr: "Science déterministe vs IA générative" },
          },
          {
            id: "trust-risks",
            title: { en: "Risks Requiring Mitigation", fr: "Risques nécessitant une atténuation stricte" },
          },
          {
            id: "human-oversight",
            title: { en: "Farmer Retention of Final Agency", fr: "Maintien de la souveraineté décisionnelle paysanne" },
          },
        ],
        prevId: "ai-architecture",
        nextId: "meknes-reference-case",
      },
    ],
  },
  {
    title: { en: "EXPERIMENTAL RESULTS", fr: "RÉSULTATS EXPÉRIMENTAUX" },
    chapters: [
      {
        id: "meknes-reference-case",
        badge: "Ch. 31-35",
        title: { en: "Meknes Case & Walkthrough", fr: "Cas de Référence Meknès & Audit" },
        category: { en: "EXPERIMENTAL RESULTS", fr: "RÉSULTATS EXPÉRIMENTAUX" },
        description: {
          en: "Meknes/Saïss 2025 baseline, step-by-step depth-to-volume math, 5-ha scaling, and 52-test pytest audit.",
          fr: "Référence Meknès/Saïss 2025, conversion hauteur-volume, extrapolation 5 ha et audit pytest (52 tests).",
        },
        subChapters: [
          {
            id: "meknes-coordinates",
            title: { en: "Geographical Coordinates & Saïss Landscape", fr: "Coordonnées géographiques & paysage du Saïss" },
          },
          {
            id: "2025-audit-baseline",
            title: { en: "2025 Audit Baseline Values (Table 32.1)", fr: "Valeurs de référence d'audit 2025 (Tableau 32.1)" },
          },
          {
            id: "crop-rotation-comparison",
            title: { en: "Revised Crop Rotation Comparison Table", fr: "Tableau comparatif révisé des rotations" },
          },
          {
            id: "volume-conversion-identity",
            title: { en: "Depth to Volume Identity (1 mm on 1 ha = 10 m³)", fr: "Identité hauteur-volume (1 mm sur 1 ha = 10 m³)" },
          },
          {
            id: "volumetric-demand-chart",
            title: { en: "Volumetric ETc Demand Chart (Figure 33.1)", fr: "Demande volumétrique modélisée (Figure 33.1)" },
          },
          {
            id: "five-hectare-scaling",
            title: { en: "5-Hectare Farm Scaling Calculation", fr: "Calcul d'échelle pour une exploitation de 5 ha" },
          },
          {
            id: "pytest-validation-audit",
            title: { en: "Pytest Suite (52 Tests: 49 Passed, 3 Skipped)", fr: "Suite Pytest (52 tests : 49 réussis, 3 ignorés)" },
          },
          {
            id: "verification-checklist",
            title: { en: "7-Point Verification Checklist", fr: "Liste de contrôle de vérification en 7 points" },
          },
        ],
        prevId: "ai-scientific-tribunal",
        nextId: "impact-2030",
      },
    ],
  },
  {
    title: { en: "IMPACT 2030", fr: "IMPACT 2030" },
    chapters: [
      {
        id: "impact-2030",
        badge: "Ch. 36-38",
        title: { en: "Impact 2030: Scaling Model", fr: "Impact 2030 : Modèle d'Échelle" },
        category: { en: "IMPACT 2030", fr: "IMPACT 2030" },
        description: {
          en: "Global agriculture context, net-farm economics, conditional scaling model, and sensitivity analysis.",
          fr: "Contexte mondial, économie nette d'exploitation, modèle d'échelle conditionnel et sensibilité.",
        },
        subChapters: [
          {
            id: "global-expansion-conditions",
            title: { en: "Conditions for Responsible Expansion", fr: "Conditions d'expansion responsable" },
          },
          {
            id: "global-freshwater-chart",
            title: { en: "Global Freshwater Withdrawals (Figure 36.1)", fr: "Prélèvements mondiaux d'eau douce (Fig. 36.1)" },
          },
          {
            id: "net-farm-economics",
            title: { en: "Net-Farm Economics Formulation (Eq. 37.1)", fr: "Formulation économique nette par ferme (Éq. 37.1)" },
          },
          {
            id: "scaling-identities",
            title: { en: "Mathematical Scaling Identities (Eq. 38.1 - 38.3)", fr: "Identités mathématiques d'extrapolation (Éq. 38.1-3)" },
          },
          {
            id: "conditional-scenarios-table",
            title: { en: "Conditional Scenarios: Pilot / Regional / Multi-Region", fr: "Scénarios conditionnels : Pilote / Régional / Multi" },
          },
          {
            id: "two-volumes-distinction",
            title: { en: "ET-Demand Equivalent vs. Irrigation Proxy", fr: "Équivalent demande ETc vs approximation irrigation" },
          },
          {
            id: "transferability-sensitivity",
            title: { en: "Transferability Factor & Adoption Sensitivity", fr: "Facteur de transférabilité & sensibilité d'adoption" },
          },
        ],
        prevId: "meknes-reference-case",
        nextId: "annexes",
      },
    ],
  },
  {
    title: { en: "ANNEXES & REFERENCES", fr: "ANNEXES & BIBLIOGRAPHIE" },
    chapters: [
      {
        id: "annexes",
        badge: "Annex A-I",
        title: { en: "Annexes & Bibliography", fr: "Annexes & Bibliographie" },
        category: { en: "ANNEXES & REFERENCES", fr: "ANNEXES & BIBLIOGRAPHIE" },
        description: {
          en: "Mathematical reference sheet, 12-month ee-chart dataset, test code, glossary, and full bibliography.",
          fr: "Formulaire mathématique, données 12 mois de ee-chart, code de test, glossaire et bibliographie complète.",
        },
        subChapters: [
          {
            id: "annex-a-math",
            title: { en: "Annex A: Mathematical Reference Sheet", fr: "Annexe A : Formulaire mathématique de référence" },
          },
          {
            id: "annex-b-chart-table",
            title: { en: "Annex B: Full 12-Month ee-chart.csv Table", fr: "Annexe B : Tableau complet 12 mois ee-chart.csv" },
          },
          {
            id: "annex-c-python-tests",
            title: { en: "Annex C: Python Test Invariants (Listing C.2)", fr: "Annexe C : Invariants de tests Python (Listing C.2)" },
          },
          {
            id: "annex-d-soil-classes",
            title: { en: "Annex D & E: Soil Classes (Tirs, Hamri) & Runs", fr: "Annexes D & E : Classes de sols (Tirs, Hamri) & simulations" },
          },
          {
            id: "annex-h-glossary",
            title: { en: "Annex H: Complete Glossary & Acronyms", fr: "Annexe H : Glossaire complet & sigles" },
          },
          {
            id: "dossier-conclusion",
            title: { en: "Formal Technical Conclusion", fr: "Conclusion technique formelle" },
          },
          {
            id: "full-bibliography",
            title: { en: "Bibliography Citations [1–14] with Links", fr: "Citations bibliographiques [1–14] avec liens" },
          },
        ],
        prevId: "impact-2030",
      },
    ],
  },
];

export function getDossierNavigation(lang: "en" | "fr" = "en"): SidebarCategory[] {
  return LOCALIZED_DOSSIER.map((cat) => ({
    title: cat.title[lang],
    chapters: cat.chapters.map((ch) => ({
      id: ch.id,
      title: ch.title[lang],
      category: cat.title[lang],
      badge: ch.badge,
      description: ch.description[lang],
      subChapters: ch.subChapters.map((sub) => ({
        id: sub.id,
        title: sub.title[lang],
      })),
      prevId: ch.prevId,
      nextId: ch.nextId,
    })),
  }));
}

// Default export for backwards compatibility
export const DOSSIER_NAVIGATION: SidebarCategory[] = getDossierNavigation("en");

// Helper to look up any chapter by ID and language
export function getChapterById(id: string, lang: "en" | "fr" = "en"): ChapterMeta | undefined {
  const nav = getDossierNavigation(lang);
  for (const cat of nav) {
    for (const ch of cat.chapters) {
      if (ch.id === id) return ch;
    }
  }
  return undefined;
}
