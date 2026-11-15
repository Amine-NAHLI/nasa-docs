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
        nextId: "esp32-hardware",
      },
    ],
  },
  {
    title: { en: "IoT & FIELD SENSORS", fr: "IoT & CAPTEURS DE TERRAIN" },
    chapters: [
      {
        id: "esp32-hardware",
        badge: "IoT 1",
        title: { en: "ESP32 Hardware Architecture", fr: "Architecture Matérielle ESP32" },
        category: { en: "IoT & FIELD SENSORS", fr: "IoT & CAPTEURS DE TERRAIN" },
        description: {
          en: "Microcontroller architecture, ADC channels, electrical constraints, and localized environmental sensing role.",
          fr: "Architecture microcontrôleur, canaux CAN, contraintes électriques et rôle dans la mesure environnementale locale.",
        },
        subChapters: [
          {
            id: "esp32-overview",
            title: { en: "ESP32 Platform Overview", fr: "Présentation de la plateforme ESP32" },
          },
          {
            id: "esp32-why-farmer-eye",
            title: { en: "Relevance to Farmer Eye Architecture", fr: "Pertinence pour l'architecture Farmer Eye" },
          },
          {
            id: "esp32-architecture",
            title: { en: "Dual-Core Architecture & Peripherals", fr: "Architecture Dual-Core & Périphériques" },
          },
          {
            id: "esp32-adc-subsystem",
            title: { en: "ADC Capabilities & Non-Linearity", fr: "Capacités CAN & Non-linéarité" },
          },
          {
            id: "esp32-power-workflow",
            title: { en: "Power Supply & Acquisition Workflow", fr: "Alimentation & Cycle d'acquisition" },
          },
          {
            id: "esp32-local-vs-cloud",
            title: { en: "In-Situ Sensor vs Satellite Cloud", fr: "Capteur in-situ vs Données satellite" },
          },
          {
            id: "esp32-limitations",
            title: { en: "Hardware Deployment Limitations", fr: "Limites de déploiement matériel" },
          },
        ],
        prevId: "architecture-pipeline",
        nextId: "soil-moisture-sensors",
      },
      {
        id: "soil-moisture-sensors",
        badge: "IoT 2",
        title: { en: "Soil Moisture Sensors", fr: "Capteurs d'Humidité du Sol" },
        category: { en: "IoT & FIELD SENSORS", fr: "IoT & CAPTEURS DE TERRAIN" },
        description: {
          en: "Volumetric water content principles, capacitive vs resistive sensors, analog ADC reading, and soil matrix effects.",
          fr: "Principes de teneur volumique en eau, capteurs capacitifs vs résistifs, lecture CAN et effets de matrice du sol.",
        },
        subChapters: [
          {
            id: "sensor-principles",
            title: { en: "Volumetric Water Content (VWC) Principles", fr: "Principes de la Teneur Volumique en Eau" },
          },
          {
            id: "capacitive-vs-resistive",
            title: { en: "Capacitive vs Resistive Technology", fr: "Technologie Capacitive vs Résistive" },
          },
          {
            id: "analog-digital-conversion",
            title: { en: "Analog Voltage to Raw ADC Conversion", fr: "Tension analogique vers CAN brut" },
          },
          {
            id: "soil-environmental-effects",
            title: { en: "Texture, Salinity & Temperature Effects", fr: "Effets de texture, salinité & température" },
          },
          {
            id: "sensor-depth-representativeness",
            title: { en: "Sensor Depth & Spatial Representativeness", fr: "Profondeur & Représentativité spatiale" },
          },
          {
            id: "sensor-drift-limitations",
            title: { en: "Sensor Drift & Physics Limitations", fr: "Dérive du capteur & Limites physiques" },
          },
        ],
        prevId: "esp32-hardware",
        nextId: "wiring-and-firmware",
      },
      {
        id: "wiring-and-firmware",
        badge: "IoT 3",
        title: { en: "Wiring & ESP32 Firmware", fr: "Câblage & Firmware ESP32" },
        category: { en: "IoT & FIELD SENSORS", fr: "IoT & CAPTEURS DE TERRAIN" },
        description: {
          en: "Schematic architecture, GPIO pinout, Arduino/C++ acquisition lifecycle, and electrical safety constraints.",
          fr: "Schéma d'architecture, broches GPIO, cycle d'acquisition Arduino/C++ et sécurité électrique.",
        },
        subChapters: [
          {
            id: "wiring-schematic",
            title: { en: "Physical Wiring & Pinout Architecture", fr: "Câblage physique & Broches GPIO" },
          },
          {
            id: "firmware-lifecycle",
            title: { en: "Firmware Responsibilities & Lifecycle", fr: "Rôles du firmware & Cycle d'exécution" },
          },
          {
            id: "firmware-code-reference",
            title: { en: "C++/Arduino Reference Design Implementation", fr: "Implémentation de Référence C++/Arduino" },
          },
          {
            id: "electrical-safety",
            title: { en: "Electrical Safety & Protection Circuits", fr: "Sécurité électrique & Circuits de protection" },
          },
        ],
        prevId: "soil-moisture-sensors",
        nextId: "sensor-calibration",
      },
      {
        id: "sensor-calibration",
        badge: "IoT 4",
        title: { en: "Sensor Calibration & Quality", fr: "Étalonnage Capteur & Qualité" },
        category: { en: "IoT & FIELD SENSORS", fr: "IoT & CAPTEURS DE TERRAIN" },
        description: {
          en: "Dry/wet references, normalized index formula, multi-point calibration curves, and measurement uncertainty.",
          fr: "Références sec/saturé, formule d'indice normalisé, courbes d'étalonnage et incertitude de mesure.",
        },
        subChapters: [
          {
            id: "calibration-necessity",
            title: { en: "Necessity of Calibration in Agriculture", fr: "Nécessité de l'étalonnage agronomique" },
          },
          {
            id: "dry-wet-references",
            title: { en: "Dry and Wet Baseline Measurement Protocol", fr: "Protocole de mesure des références sec/humide" },
          },
          {
            id: "normalized-index-formula",
            title: { en: "Normalized Moisture Index Formula", fr: "Formule de l'indice d'humidité normalisé" },
          },
          {
            id: "calibration-curves",
            title: { en: "Soil-Specific Calibration Curves", fr: "Courbes d'étalonnage spécifiques au sol" },
          },
          {
            id: "measurement-uncertainty",
            title: { en: "Error Propagation & Quality Control", fr: "Propagation d'erreur & Contrôle qualité" },
          },
        ],
        prevId: "wiring-and-firmware",
        nextId: "iot-telemetry",
      },
      {
        id: "iot-telemetry",
        badge: "IoT 5",
        title: { en: "IoT Telemetry & Connectivity", fr: "Télémétrie IoT & Connectivité" },
        category: { en: "IoT & FIELD SENSORS", fr: "IoT & CAPTEURS DE TERRAIN" },
        description: {
          en: "JSON telemetry schema contract, HTTPS and MQTT transport, edge buffering, and validation pipelines.",
          fr: "Schéma de contrat télémétrique JSON, protocoles HTTPS/MQTT, mise en tampon edge et validation.",
        },
        subChapters: [
          {
            id: "telemetry-overview",
            title: { en: "IoT Telemetry Architecture Overview", fr: "Vue d'ensemble de la télémétrie IoT" },
          },
          {
            id: "json-payload-contract",
            title: { en: "Proposed JSON Telemetry Contract", fr: "Contrat de payload télémétrique JSON" },
          },
          {
            id: "transport-protocols",
            title: { en: "Transport Protocols: HTTPS vs MQTT", fr: "Protocoles de transport : HTTPS vs MQTT" },
          },
          {
            id: "connectivity-resilience",
            title: { en: "Network Resilience, Buffering & Security", fr: "Résilience réseau, mise en mémoire tampon & Sécurité" },
          },
        ],
        prevId: "sensor-calibration",
        nextId: "smap-vs-ground-sensors",
      },
      {
        id: "smap-vs-ground-sensors",
        badge: "IoT 6",
        title: { en: "Ground Sensors vs NASA SMAP", fr: "Capteurs Sol vs NASA SMAP" },
        category: { en: "IoT & FIELD SENSORS", fr: "IoT & CAPTEURS DE TERRAIN" },
        description: {
          en: "Spatial scale discrepancy (9km vs point), physics differences, root-depth decoupling, and complementary fusion framework.",
          fr: "Écart d'échelle spatiale (9km vs ponctuel), physique de mesure, découplage racinaire et cadre de fusion.",
        },
        subChapters: [
          {
            id: "scale-discrepancy",
            title: { en: "Spatial Resolution Discrepancy (9 km vs Point)", fr: "Écart de résolution spatiale (9 km vs Point)" },
          },
          {
            id: "measurement-physics",
            title: { en: "Measurement Physics & Sensing Depths", fr: "Physique de mesure & Profondeurs auscultées" },
          },
          {
            id: "depth-decoupling",
            title: { en: "Surface vs Root-Zone Dynamics", fr: "Dynamique de surface vs Zone racinaire" },
          },
          {
            id: "complementary-framework",
            title: { en: "Complementary Data Integration Framework", fr: "Cadre d'intégration de données complémentaires" },
          },
          {
            id: "scientific-humility",
            title: { en: "Rigorous Scientific Interpretation Rules", fr: "Règles rigoureuses d'interprétation scientifique" },
          },
        ],
        prevId: "iot-telemetry",
        nextId: "hardware-validation",
      },
      {
        id: "hardware-validation",
        badge: "IoT 7",
        title: { en: "Hardware Evidence & Status", fr: "Preuves Matérielles & Statut" },
        category: { en: "IoT & FIELD SENSORS", fr: "IoT & CAPTEURS DE TERRAIN" },
        description: {
          en: "Physical hardware inventory, evidence classification, serial monitor logging, and field deployment roadmap.",
          fr: "Inventaire matériel physique, classification des preuves, journal série et feuille de route terrain.",
        },
        subChapters: [
          {
            id: "hardware-inventory",
            title: { en: "Physical Hardware Inventory & Lab Status", fr: "Inventaire matériel physique & Statut de labo" },
          },
          {
            id: "evidence-classification",
            title: { en: "Rigorous 6-Tier Evidence Classification", fr: "Classification rigoureuse des preuves en 6 niveaux" },
          },
          {
            id: "serial-monitor-logs",
            title: { en: "Serial Monitor Diagnostic Output", fr: "Sortie de diagnostic sur moniteur série" },
          },
          {
            id: "unresolved-steps",
            title: { en: "Unresolved Milestones & Future Deployment", fr: "Étapes non résolues & Déploiement futur" },
          },
        ],
        prevId: "smap-vs-ground-sensors",
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
        prevId: "hardware-validation",
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
        badge: "Ch. 23",
        title: { en: "Farm Time Machine", fr: "Farm Time Machine" },
        category: { en: "EARTH TRIALS LABS", fr: "LABORATOIRES EARTH TRIALS" },
        description: {
          en: "Historical climate replay, counterfactual agronomic comparison, and digital retrospective simulation lab.",
          fr: "Laboratoire de simulation rétrospective, rejeu climatique historique et comparaison agronomique contrefactuelle.",
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
            id: "minimum-field-log",
            title: { en: "Minimum Field Log Requirements", fr: "Cahier d'enregistrement minimal de parcelle" },
          },
        ],
        prevId: "climate-attack-lab",
        nextId: "physical-soil-lab",
      },
      {
        id: "physical-soil-lab",
        badge: "Ch. 24",
        title: { en: "Physical Soil Lab Protocol", fr: "Protocole Laboratoire de Sol" },
        category: { en: "EARTH TRIALS LABS", fr: "LABORATOIRES EARTH TRIALS" },
        description: {
          en: "Soil core sampling, gravimetric-to-volumetric conversion, texture, EC, pH, and field calibration protocol.",
          fr: "Échantillonnage de carottes de sol, conversion gravimétrique-volumétrique, texture, CE, pH et étalonnage terrain.",
        },
        subChapters: [
          {
            id: "soil-sampling-protocol",
            title: { en: "Soil Core Sampling Protocol", fr: "Protocole de carottage de sol" },
          },
          {
            id: "core-depths-texture",
            title: { en: "Core Depths & Textural Classing", fr: "Profondeurs de prélèvement & Granulométrie" },
          },
          {
            id: "gravimetric-volumetric",
            title: { en: "Gravimetric to Volumetric Conversion", fr: "Conversion gravimétrique vers volumique" },
          },
          {
            id: "physicochemical-indicators",
            title: { en: "Physicochemical Soil Indicators (pH, EC, BD)", fr: "Indicateurs physico-chimiques (pH, CE, Da)" },
          },
          {
            id: "field-validation-roadmap",
            title: { en: "Field Validation Roadmap & Rigor", fr: "Feuille de route de validation terrain" },
          },
        ],
        prevId: "farm-time-machine",
        nextId: "ai-architecture",
      },
    ],
  },
  {
    title: { en: "SUPER INTELLIGENCE (SI) & VALIDATION", fr: "SUPER-INTELLIGENCE (SI) & VALIDATION" },
    chapters: [
      {
        id: "ai-architecture",
        badge: "Ch. 25-27",
        title: { en: "Multi-Agent Super Intelligence (SI)", fr: "Super-Intelligence Multi-Agents (SI)" },
        category: { en: "SUPER INTELLIGENCE (SI) & VALIDATION", fr: "SUPER-INTELLIGENCE (SI) & VALIDATION" },
        description: {
          en: "Sept. 29, 2026 Executive Order compliance, multi-agent SI roles, multilingual Darija/EN/FR assistant, and anti-hallucination tests.",
          fr: "Conformité Décret du 29/09/2026, rôles multi-agents SI, assistant Darija/FR/EN et tests anti-hallucination.",
        },
        subChapters: [
          {
            id: "si-executive-order",
            title: { en: "NASA SI Mandate & Sept. 29, 2026 Order", fr: "Mandat NASA SI & Décret du 29 Sept. 2026" },
          },
          {
            id: "role-separation",
            title: { en: "Deterministic vs Generative SI Role Separation", fr: "Séparation Déterministe vs SI Générative" },
          },
          {
            id: "agent-contract",
            title: { en: "Recommended SI Agent Contract", fr: "Contrat d'agent SI recommandé" },
          },
          {
            id: "multi-agent-division",
            title: { en: "Division of SI Responsibilities (Figure 26.1)", fr: "Répartition des rôles SI (Fig. 26.1)" },
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
        prevId: "physical-soil-lab",
        nextId: "ai-scientific-tribunal",
      },
      {
        id: "ai-scientific-tribunal",
        badge: "Ch. 28-30",
        title: { en: "SI Scientific Tribunal & Trust", fr: "Tribunal Scientifique SI & Confiance" },
        category: { en: "SUPER INTELLIGENCE (SI) & VALIDATION", fr: "SUPER-INTELLIGENCE (SI) & VALIDATION" },
        description: {
          en: "Internal verification tribunal, evidence checks, deterministic vs generative SI matrix, and human oversight.",
          fr: "Tribunal de vérification interne, contrôles de preuve, matrice de confiance SI et supervision humaine.",
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
            title: { en: "Deterministic Science vs. Generative SI", fr: "Science déterministe vs SI générative" },
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
    title: { en: "FIELD PILOT BENCHMARK", fr: "BANC D'ESSAI PILOTE DE TERRAIN" },
    chapters: [
      {
        id: "meknes-reference-case",
        badge: "Ch. 31-35",
        title: { en: "Field Pilot Benchmark (Meknes)", fr: "Banc d'Essai Pilote (Meknès)" },
        category: { en: "FIELD PILOT BENCHMARK", fr: "BANC D'ESSAI PILOTE DE TERRAIN" },
        description: {
          en: "Real-world field validation of the global biophysical engine in the semi-arid Saïss basin: step-by-step math, 5-ha scaling, and 52-test automated audit.",
          fr: "Validation empirique terrain du moteur biophysique global dans le bassin semi-aride du Saïss : calculs pas à pas, extrapolation 5 ha et audit de 52 tests.",
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
            id: "executive-summary-2030",
            title: { en: "Executive Summary & Core Question", fr: "Résumé Exécutif & Question Centrale" },
          },
          {
            id: "global-macro-context",
            title: { en: "Global Macro-Context: FAO & Labor Statistics", fr: "Contexte Mondial : Statistiques FAO & Emploi" },
          },
          {
            id: "how-farmer-eye-acts",
            title: { en: "4-Step Action Loop & Scientific Boundaries", fr: "Boucle d'Action en 4 Étapes & Limites" },
          },
          {
            id: "meknes-reference-benchmark",
            title: { en: "Meknes Reference Benchmark (3 Strategies)", fr: "Cas de Référence de Meknès (3 Stratégies)" },
          },
          {
            id: "deployment-model-equations",
            title: { en: "Mathematical Scaling Identities (Eq. 10–17)", fr: "Modèle de Déploiement & Équations (Éq. 10–17)" },
          },
          {
            id: "conditional-scenarios-table",
            title: { en: "3 Conditional Scenarios (Table 2 & Simulator)", fr: "3 Scénarios Conditionnels (Tableau 2 & Simulateur)" },
          },
          {
            id: "two-volumes-distinction",
            title: { en: "Two Volumes: ETc Equivalent vs. Irrigation Proxy", fr: "Distinction Cruciale des Deux Volumes" },
          },
          {
            id: "net-farm-economics",
            title: { en: "Net-Farm Economics & Sensitivity Test (Table 3)", fr: "Économie Nette & Test de Sensibilité (Tableau 3)" },
          },
          {
            id: "transferability-sensitivity",
            title: { en: "Transferability Factor & Multi-Region Summation", fr: "Facteur de Transférabilité & Sommation Multi-Régions" },
          },
          {
            id: "social-environmental-sdgs",
            title: { en: "Social, Environmental & UN SDG Impact (2.4, 6.4, 2.3)", fr: "Impacts Sociaux, Environnementaux & ODD (2.4, 6.4, 2.3)" },
          },
          {
            id: "impact-verification-plan",
            title: { en: "4-Stage Verification Plan & Ground Truth", fr: "Protocole de Vérification en 4 Phases" },
          },
          {
            id: "traceability-matrix",
            title: { en: "Traceability Matrix: Origin of Every Number", fr: "Matrice de Traçabilité : Origine de Chaque Chiffre" },
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
