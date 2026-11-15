"use client";

import React from "react";
import { useDocsContext } from "@/context/DocsContext";
import {
  EvidenceMaturityDiagram,
  SmapMonthlyChart,
  SoilDepthDifferenceChart,
  CropBattleComparisonCharts,
  ClimateAttackCharts,
  VolumetricDemandChart,
  GlobalWithdrawalsChart,
  TwoVolumesComparisonChart,
  TransferabilitySensitivityChart,
  ImpactScalingVisualizations,
} from "@/components/docs/charts/DocsCharts";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { ShieldCheck, FileCheck, Calculator } from "lucide-react";

// ─── 1. OVERVIEW & EVIDENCE POLICY ──────────────────────────────────────────
export function OverviewChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      {/* Evidence Policy */}
      <section id="evidence-policy" className="scroll-mt-20">
        <div className="border-l-2 border-foreground/30 pl-4 py-2 text-sm text-muted-foreground space-y-3">
          <div className="flex items-center gap-2 text-foreground font-mono text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>
              {isEn ? "Document Status & Evidence Policy" : "Statut du Document & Politique de Preuve"}
            </span>
          </div>
          <p className="leading-relaxed">
            {isEn ? (
              <>
                <strong className="text-foreground font-medium">Purpose:</strong> This dossier consolidates the reported implementation of the Farmer Eye / FIELDShift AI application and the EARTH TRIALS virtual laboratories. It is a technical record, not a claim that the system has been independently field-validated.
              </>
            ) : (
              <>
                <strong className="text-foreground font-medium">Objectif :</strong> Ce dossier technique consolide l'implémentation documentée de l'application Farmer Eye / FIELDShift AI et des laboratoires virtuels EARTH TRIALS. Il s'agit d'un compte rendu technique et non d'une affirmation de validation indépendante sur le terrain.
              </>
            )}
          </p>
          <div className="space-y-1.5 pt-1 text-xs">
            <div className="font-mono font-medium text-foreground">
              {isEn ? "Evidence classes used throughout:" : "Classes de preuve utilisées tout au long du dossier :"}
            </div>
            <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
              <li>
                <strong className="text-foreground font-medium">{isEn ? "External reference:" : "Référence externe :"}</strong>{" "}
                {isEn
                  ? "facts and methods documented by NASA, FAO or other cited publications."
                  : "faits et méthodes documentés par la NASA, la FAO ou d'autres publications citées."}
              </li>
              <li>
                <strong className="text-foreground font-medium">{isEn ? "Project implementation:" : "Implémentation projet :"}</strong>{" "}
                {isEn
                  ? "features described in the team’s repository analysis or integration reports, including executable services and interfaces."
                  : "fonctionnalités décrites dans l'analyse de dépôt ou les rapports d'intégration de l'équipe, incluant services exécutables et interfaces."}
              </li>
              <li>
                <strong className="text-foreground font-medium">{isEn ? "Internal test result:" : "Résultat d'essai interne :"}</strong>{" "}
                {isEn
                  ? "numerical output reported by an executed local model or extraction, not a new field measurement."
                  : "résultat numérique fourni par un modèle local exécuté ou une extraction, non pas une nouvelle mesure in situ."}
              </li>
              <li>
                <strong className="text-foreground font-medium">{isEn ? "Illustrative formula or scenario:" : "Formule ou scénario illustratif :"}</strong>{" "}
                {isEn
                  ? "scientific reference equation or hypothetical parameter choice, not necessarily a verbatim source-code implementation."
                  : "équation scientifique de référence ou paramétrage hypothétique, pas nécessairement une retranscription mot à mot du code source."}
              </li>
              <li>
                <strong className="text-foreground font-medium">{isEn ? "Prospective impact:" : "Impact prospectif :"}</strong>{" "}
                {isEn
                  ? "conditional quantities for 2030, never realized benefits."
                  : "quantités conditionnelles pour 2030, jamais des bénéfices réalisés."}
              </li>
            </ol>
          </div>
          <div className="text-xs text-muted-foreground/80 pt-2 border-t border-border/60">
            <strong className="text-foreground font-medium">{isEn ? "Source-control note:" : "Note de contrôle des sources :"}</strong>{" "}
            {isEn
              ? "Available materials include repository analysis, EARTH TRIALS algorithmic audit, SMAP integration notes, and an Impact 2030 report. They contain multiple runs with differing assumptions, explicitly labeled by source. The AI provider also transitioned from earlier NVIDIA configurations to OpenAI API integration."
              : "Les documents disponibles incluent l'analyse du dépôt, l'audit algorithmique EARTH TRIALS, les notes d'intégration SMAP et un rapport Impact 2030. Ils comportent plusieurs exécutions aux hypothèses distinctes, clairement identifiées par source. Le fournisseur d'IA a également évolué de configurations initiales NVIDIA vers l'intégration de l'API OpenAI."}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "Executive Summary & Project Identity" : "Résumé Exécutif & Identité du Projet"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn ? (
              <>
                Farmer Eye is an agricultural decision-support system developed by team <strong className="text-foreground font-medium">DEVUPWARD</strong> for the <strong className="text-foreground font-medium">NASA Space Apps Challenge 2026</strong>. The project was previously called <em>FIELDShift AI</em>; its scientific experiments retain the name <em>EARTH TRIALS</em>. The central proposition is that farmers should combine their direct knowledge of soil and fields with an additional, regional perspective provided by Earth observations, agronomic models, and explainable AI.
              </>
            ) : (
              <>
                Farmer Eye est un système d'aide à la décision agricole développé par l'équipe <strong className="text-foreground font-medium">DEVUPWARD</strong> pour le <strong className="text-foreground font-medium">NASA Space Apps Challenge 2026</strong>. Le projet s'appelait initialement <em>FIELDShift AI</em> ; ses expériences scientifiques conservent le nom <em>EARTH TRIALS</em>. La proposition centrale est que les agriculteurs combinent leur connaissance directe du sol et de leurs parcelles avec une perspective régionale complémentaire offerte par les observations de la Terre, les modèles agronomiques et l'IA explicable.
              </>
            )}
          </p>
          <p>
            {isEn ? (
              <>
                The implemented work described in the team materials includes acquisition of NASA POWER daily meteorological data, NASA SMAP Level-4 V008 regional soil-moisture extraction through Google Earth Engine, data quality and export functions, agricultural simulation, the Crop Battle Lab, Climate Attack Lab, Farm Time Machine, and an AI Scientific Tribunal. A Python/FastAPI service underpinned earlier application functionality; a separate Next.js/TypeScript documentation experience was later designed.
              </>
            ) : (
              <>
                Les travaux réalisés décrits dans la documentation comprennent l'acquisition quotidienne des données météo NASA POWER, l'extraction de l'humidité du sol régionale NASA SMAP Niveau-4 V008 via Google Earth Engine, le contrôle qualité des données, la simulation agronomique, le Crop Battle Lab, le Climate Attack Lab, la Farm Time Machine et le Tribunal Scientifique IA. Un service Python/FastAPI soutenait les fonctionnalités de calcul initiales ; une expérience de documentation Next.js/TypeScript dédiée a ensuite été conçue.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Key Reference Run */}
      <section id="key-reference-run" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Key Reference Comparison (Revised Meknes Simulation)"
            : "Comparaison de Référence Clé (Simulation Révisée de Meknès)"}
        </h2>
        <div className="border-l-2 border-foreground/30 pl-4 py-2 my-4 text-sm text-foreground space-y-1">
          <div className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <FileCheck className="h-4 w-4" />
            <span>{isEn ? "Benchmark Result:" : "Résultat de Référence :"}</span>
          </div>
          <p className="text-[15px] leading-7 text-muted-foreground">
            {isEn ? (
              <>
                Wheat monoculture <strong className="text-foreground font-medium">455.8 mm/year</strong> modeled crop demand; wheat–lentil–barley rotation <strong className="text-foreground font-medium">362.4 mm/year</strong>; difference <strong className="text-foreground font-medium">93.4 mm/year</strong>. On one hectare this is <strong className="text-foreground font-medium">934 m³</strong> of equivalent modeled evapotranspirative demand, not a measured reduction in pumped irrigation water [12, 13].
              </>
            ) : (
              <>
                Monoculture de blé à <strong className="text-foreground font-medium">455,8 mm/an</strong> de demande évapotranspirative modélisée ; rotation blé–lentille–orge à <strong className="text-foreground font-medium">362,4 mm/an</strong> ; écart de <strong className="text-foreground font-medium">93,4 mm/an</strong>. Sur un hectare, cela correspond à <strong className="text-foreground font-medium">934 m³</strong> d'équivalent de demande modélisée, et non à une économie mesurée d'eau pompée pour l'irrigation [12, 13].
              </>
            )}
          </p>
        </div>
        <p className="text-xs text-muted-foreground font-mono mt-3">
          {isEn
            ? "The project aims to make comparative agricultural evidence accessible. It does not prove yield improvements, field-level soil moisture, realized water savings, or deployment at worldwide scale. The global ambition remains distinct from its Moroccan reference case."
            : "Le projet vise à rendre accessibles des preuves agronomiques comparatives. Il ne prétend pas démontrer d'améliorations de rendement, d'humidité mesurée à la parcelle, d'économies d'eau réelles ou de déploiement à l'échelle mondiale. L'ambition globale reste distincte de son cas d'étude de référence marocain."}
        </p>
      </section>
    </div>
  );
}

// ─── 2. WHY FARMER EYE? ─────────────────────────────────────────────────────
export function WhyFarmerEyeChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      {/* 2.1 The Global Challenge */}
      <section id="global-challenge" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "The Global Agricultural Challenge (FAO Statistics)"
            : "Le Défi Agricole Mondial (Statistiques FAO)"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "Water scarcity, climate variability and agronomic uncertainty affect agricultural decision-making in many regions. Changes in rainfall timing, high-temperature episodes, reduced soil water availability and limited budget flexibility interact with crop and rotation choices. Risk therefore cannot be expressed responsibly as one universal number."
              : "Le stress hydrique, la variabilité climatique et l'incertitude agronomique pèsent lourdement sur la prise de décision agricole dans de nombreuses régions. Le décalage des pluies, les épisodes caniculaires, la raréfaction de l'eau dans le sol et la flexibilité budgétaire limitée interagissent directement avec les choix culturaux et les rotations. Le risque ne peut donc être réduit de manière responsable à un chiffre unique."}
          </p>
          <p>
            {isEn ? (
              <>
                The Food and Agriculture Organization reports approximately <strong className="text-foreground font-medium">72% of worldwide freshwater withdrawals going to agriculture</strong>, using its stated accounting scope. Its 2025 assessment estimates <strong className="text-foreground font-medium">$3.26 trillion in disaster-related agricultural losses for 1991–2023</strong>, or about <strong className="text-foreground font-medium">$99 billion annually</strong> on average [5, 6]. These are global context statistics, not losses attributable to the absence of Farmer Eye.
              </>
            ) : (
              <>
                L'Organisation des Nations Unies pour l'alimentation et l'agriculture rapporte qu'environ <strong className="text-foreground font-medium">72% des prélèvements mondiaux d'eau douce sont destinés à l'agriculture</strong>. Son évaluation 2025 chiffre à <strong className="text-foreground font-medium">3 260 milliards de dollars les pertes agricoles dues aux catastrophes sur 1991–2023</strong>, soit environ <strong className="text-foreground font-medium">99 milliards de dollars par an</strong> en moyenne [5, 6]. Ces chiffres constituent un contexte macroéconomique mondial et non des pertes imputables à l'absence de Farmer Eye.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Decision Problem */}
      <section id="decision-problem" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "The Farmer Decision Problem" : "Le Dilemme Décisionnel de l'Agriculteur"}
        </h2>
        <p className="text-[15px] leading-7 text-muted-foreground">
          {isEn
            ? "Before sowing, a farmer may need to choose crops, timing, soil management, water allocation and risk tolerance without a complete picture of regional weather history or alternative outcomes. The objective is not to automate away local experience; it is to improve the comparison of feasible options."
            : "Avant les semis, l'agriculteur doit choisir ses cultures, le calendrier, la gestion du sol, l'allocation hydrique et son niveau d'exposition au risque sans disposer d'une vision consolidée de l'historique météo régional ou des trajectoires alternatives. L'objectif n'est pas de remplacer l'expérience locale, mais d'enrichir la comparaison rigoureuse des options possibles."}
        </p>
      </section>

      {/* Why Earth Observations */}
      <section id="why-earth-observations" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "Why Earth Observations Matter" : "Pourquoi les Observations de la Terre sont Essentielles"}
        </h2>
        <p className="text-[15px] leading-7 text-muted-foreground">
          {isEn
            ? "Regional satellite and modeled products provide consistent temporal coverage over wide areas, particularly useful for long histories and anomaly context. Their weakness is spatial representativeness: a satellite/model grid cell encompasses many fields with different soils. Farmer Eye presents both the advantage and this limitation."
            : "Les produits satellitaires et les réanalyses régionales offrent une couverture temporelle homogène sur de vastes zones, particulièrement précieuse pour les séries historiques et la détection d'anomalies. Leur limite réside dans la représentativité spatiale : une maille de modèle englobe plusieurs parcelles aux sols hétérogènes. Farmer Eye explicite conjointement cet atout et cette contrainte."}
        </p>
      </section>

      {/* Evidence Maturity */}
      <section id="evidence-maturity" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "Evidence Maturity & System Boundaries" : "Maturité des Preuves & Périmètre du Système"}
        </h2>
        <EvidenceMaturityDiagram />
      </section>

      {/* Design Principles */}
      <section id="design-principles" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "6 Core Design Principles" : "6 Principes Fondamentaux de Conception"}
        </h2>
        <div className="divide-y divide-border/60 text-sm my-4">
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "1. Provenance" : "1. Traçabilité"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Make the provenance and units of every numerical observation visible."
                : "Rendre visibles la provenance et les unités de chaque observation numérique."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "2. Missing Values" : "2. Données Manquantes"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Preserve missing values rather than inventing replacement measurements."
                : "Conserver les données manquantes plutôt que d'inventer des mesures de substitution."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "3. Explicit Formulas" : "3. Formules Explicites"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Compute agricultural indicators with explicit formulas, not with an LLM guessing quantities."
                : "Calculer les indicateurs agronomiques par des équations explicites, sans approximation par LLM."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "4. Multi-Scenarios" : "4. Scénarios Multiples"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Offer several feasible crop strategies and state scenario assumptions clearly."
                : "Proposer plusieurs stratégies culturales viables en explicitant les hypothèses de scénario."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "5. Accessible Language" : "5. Langage Accessible"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Explain results in accessible language, including Moroccan Darija in explanatory interfaces."
                : "Expliquer les résultats dans un langage accessible, intégrant la Darija marocaine."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "6. Farmer Responsibility" : "6. Décision Paysanne"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Keep the farmer responsible for the final choice; do not promise certain yields or savings."
                : "Laisser à l'agriculteur la décision finale ; ne jamais promettre de rendements garantis."}
            </span>
          </div>
        </div>
      </section>

      {/* Second Eyes Concept */}
      <section id="second-eyes-concept" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "The Farmer’s Second Eyes Concept" : "Le Concept 'Second Eyes' de l'Agriculteur"}
        </h2>
        <blockquote className="my-6 border-l-2 border-foreground/40 pl-4 py-1 text-base italic text-foreground font-normal">
          {isEn
            ? "“Farmers see their fields. Farmer Eye helps them see the bigger picture.”"
            : "« Les agriculteurs observent leurs parcelles. Farmer Eye les aide à appréhender la vue d'ensemble. »"}
        </blockquote>
        <p className="text-[15px] leading-7 text-muted-foreground">
          {isEn
            ? "The metaphor is not a claim of optical surveillance, centimeter-scale mapping or direct measurement inside every root. SMAP L4 root-zone estimates are produced by land modeling and observation assimilation over broad grid cells. The application reveals regional tendencies and alternative scenarios, without pretending to “see” each individual plant."
            : "Cette métaphore ne prétend pas à une surveillance optique, une cartographie centimétrique ou une mesure directe au sein de chaque racine. Les estimations d'humidité SMAP L4 sont issues de modélisation des surfaces et d'assimilation satellitaire sur de larges mailles. L'outil éclaire les tendances régionales et compare des scénarios, sans prétendre scruter chaque plante individuellement."}
        </p>
      </section>

      {/* Implementation Status */}
      <section id="implementation-status" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Implementation Inventory & Status (Tables 6.1 & 6.2)"
            : "Inventaire d'Implémentation & Statut (Tableaux 6.1 & 6.2)"}
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="border-b border-border text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Module" : "Module"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Reported Status" : "Statut Rapporté"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Evidence Distinction" : "Distinction de Preuve"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-medium text-foreground">NASA POWER daily data</td>
                <td className="py-2.5 pr-4 font-mono text-xs text-foreground font-medium">{isEn ? "Implemented" : "Implémenté"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "REST collection, QC, caching, derived summaries [9]" : "Collecte REST, contrôle qualité, cache, synthèses [9]"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-foreground">NASA SMAP L4 V008</td>
                <td className="py-2.5 pr-4 font-mono text-xs text-foreground font-medium">{isEn ? "Implemented" : "Implémenté"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "GEE integration, 46-band catalogue, agricultural extraction [10]" : "Intégration GEE, catalogue 46 bandes, extraction [10]"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-foreground">Crop Battle Lab</td>
                <td className="py-2.5 pr-4 font-mono text-xs text-foreground font-medium">{isEn ? "Executed" : "Exécuté"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Multi-plan comparison and numerical outputs [11]" : "Comparaison multi-plans et sorties numériques [11]"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-foreground">Climate Attack Lab</td>
                <td className="py-2.5 pr-4 font-mono text-xs text-foreground font-medium">{isEn ? "Executed" : "Exécuté"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Controlled drought, heat and delayed-rain assumptions [11]" : "Hypothèses contrôlées de sécheresse, canicule et retard de pluie [11]"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-foreground">Farm Time Machine</td>
                <td className="py-2.5 pr-4 font-mono text-xs text-foreground font-medium">{isEn ? "Implemented" : "Implémenté"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Retrospective counterfactual historical comparison [11]" : "Comparaison contrefactuelle historique rétrospective [11]"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-foreground">AI Scientific Tribunal</td>
                <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{isEn ? "Concept / Local" : "Conceptuel / Local"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Specialized evidence-checking roles; not peer review [11]" : "Rôles de vérification de preuves ; non pas une revue par les pairs [11]"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-foreground">AI Assistance</td>
                <td className="py-2.5 pr-4 font-mono text-xs text-foreground font-medium">{isEn ? "Integrated" : "Intégré"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "OpenAI API in later config; early notes mention NVIDIA" : "API OpenAI dans la version finale ; NVIDIA mentionné au départ"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-foreground">Global measured impact</td>
                <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{isEn ? "Not demonstrated" : "Non démontré"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "2030 figures are conditional deployment scenarios" : "Les chiffres 2030 sont des scénarios conditionnels d'extrapolation"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── 3. NASA POWER CLIMATE ──────────────────────────────────────────────────
export function NasaPowerChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      <section id="power-parameters" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "7 Meteorological Parameters (NASA POWER)" : "7 Paramètres Météorologiques (NASA POWER)"}
        </h2>
        <p className="text-[15px] leading-7 text-muted-foreground mb-4">
          {isEn
            ? "The NASA Prediction Of Worldwide Energy Resources (POWER) service provides analysis-ready daily weather and solar information through a public API [1]. The project’s repository analysis describes a point request under the agroclimatology community (AG) and local solar time (LST)."
            : "Le service NASA Prediction Of Worldwide Energy Resources (POWER) fournit des séries quotidiennes prêtes pour l'analyse météo et solaire via une API publique [1]. L'analyse du code décrit une requête ponctuelle sous la communauté agroclimatologie (AG) et le temps solaire local (LST)."}
        </p>

        {/* Table 9.1 */}
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Parameter" : "Paramètre"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Interpretation" : "Interprétation"}</th>
                <th className="py-2.5 pr-4 text-right font-medium">{isEn ? "Typical Unit" : "Unité Typique"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">T2M</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Daily mean 2-m air temperature" : "Température moyenne journalière de l'air à 2 m"}</td>
                <td className="py-2.5 pr-4 text-right">°C</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">T2M_MAX</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Maximum daily air temperature" : "Température maximale journalière de l'air"}</td>
                <td className="py-2.5 pr-4 text-right">°C</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">T2M_MIN</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Minimum daily air temperature" : "Température minimale journalière de l'air"}</td>
                <td className="py-2.5 pr-4 text-right">°C</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">PRECTOTCORR</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Corrected daily precipitation" : "Précipitations journalières corrigées"}</td>
                <td className="py-2.5 pr-4 text-right">mm/day</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">RH2M</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "2-m relative humidity" : "Humidité relative de l'air à 2 m"}</td>
                <td className="py-2.5 pr-4 text-right">%</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">WS2M</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "2-m wind speed" : "Vitesse du vent à 2 m"}</td>
                <td className="py-2.5 pr-4 text-right">m/s</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">ALLSKY_SFC_SW_DWN</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "All-sky surface shortwave radiation" : "Rayonnement solaire ondes courtes à la surface"}</td>
                <td className="py-2.5 pr-4 text-right">MJ/m²/day</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="power-quality" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "Quality Handling & Missingness Protocol" : "Traitement Qualité & Protocole des Lacunes"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "The service reads the response declared missing-data marker (commonly −999), converts missing values to null, tracks coverage and does not interpolate missing weather days in its reported analysis [9]."
              : "Le service lit le marqueur déclaré de données manquantes (couramment −999), convertit les valeurs manquantes en null, suit la couverture et n'interpole pas les jours manquants dans les bilans rapportés [9]."}
          </p>
          <div className="my-4 overflow-x-auto rounded-md border border-border/70 bg-muted/20 px-4 py-3 font-mono text-sm text-foreground text-center">
            <code>C = 100 × (n_valid / n_expected) [%]</code>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            {isEn
              ? "Example: For a 31-day month with 29 valid days: C = 100 × (29 / 31) = 93.55%."
              : "Exemple : Pour un mois de 31 jours avec 29 jours valides : C = 100 × (29 / 31) = 93,55%."}
          </p>
        </div>
      </section>

      <section id="power-api-request" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Listing 9.1 — Reproducible Public API Query"
            : "Listing 9.1 — Requête API Publique Reproductible"}
        </h2>
        <CodeBlock
          filename="nasa_power_request.sh"
          language="bash"
          code={`https://power.larc.nasa.gov/api/temporal/daily/point?\\
parameters=T2M,T2M_MAX,T2M_MIN,PRECTOTCORR,RH2M,WS2M,ALLSKY_SFC_SW_DWN&\\
community=AG&longitude=-5.5516&latitude=33.8938&\\
start=20250101&end=20250131&format=JSON`}
        />
      </section>
    </div>
  );
}

// ─── 4. NASA SMAP SOIL MOISTURE ─────────────────────────────────────────────
export function NasaSmapChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      <section id="smap-catalogue" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "NASA SMAP Level-4 SPL4SMGP Collection"
            : "Collection NASA SMAP Niveau-4 SPL4SMGP"}
        </h2>
        <p className="text-[15px] leading-7 text-muted-foreground mb-4">
          {isEn
            ? "The Soil Moisture Active Passive (SMAP) Level-4 product combines microwave observations and land-surface modeling to estimate soil conditions. Farmer Eye uses Google Earth Engine collection NASA/SMAP/SPL4SMGP/008 (3-hourly, nominally 9 km EASE-Grid; approximately 11-km nominal pixel size in GEE) [2, 10]."
            : "Le produit Soil Moisture Active Passive (SMAP) Niveau-4 combine les observations micro-ondes et la modélisation des surfaces continentales pour estimer l'état hydrique du sol. Farmer Eye utilise la collection Google Earth Engine NASA/SMAP/SPL4SMGP/008 (résolution 3-horaire, grille EASE-Grid de 9 km nominaux ; environ 11 km de pixel effectif dans GEE) [2, 10]."}
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Field" : "Champ"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Interpretation" : "Interprétation"}</th>
                <th className="py-2.5 pr-4 text-right font-medium">{isEn ? "Unit" : "Unité"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">sm_surface</td>
                <td className="py-2 pr-4 font-sans text-xs">{isEn ? "Surface soil moisture, approximately 0–5 cm" : "Humidité superficielle du sol, environ 0–5 cm"}</td>
                <td className="py-2 pr-4 text-right">m³/m³</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">sm_rootzone</td>
                <td className="py-2 pr-4 font-sans text-xs">{isEn ? "Root-zone soil moisture, approximately 0–100 cm" : "Humidité de la zone racinaire, environ 0–100 cm"}</td>
                <td className="py-2 pr-4 text-right">m³/m³</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">sm_profile</td>
                <td className="py-2 pr-4 font-sans text-xs">{isEn ? "Profile to model bedrock depth" : "Profil complet jusqu'au substratum rocheux"}</td>
                <td className="py-2 pr-4 text-right">m³/m³</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">sm_surface_wetness</td>
                <td className="py-2 pr-4 font-sans text-xs">{isEn ? "Surface relative wetness" : "Humidité relative de surface"}</td>
                <td className="py-2 pr-4 text-right">{isEn ? "dimensionless" : "sans dimension"}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">sm_rootzone_wetness</td>
                <td className="py-2 pr-4 font-sans text-xs">{isEn ? "Root-zone relative wetness" : "Humidité relative racinaire"}</td>
                <td className="py-2 pr-4 text-right">{isEn ? "dimensionless" : "sans dimension"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="smap-12-month-chart" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "12-Month SMAP Moisture Series (ee-chart.csv)"
            : "Série d'Humidité SMAP sur 12 Mois (ee-chart.csv)"}
        </h2>
        <SmapMonthlyChart />
      </section>

      <section id="smap-surface-rootzone" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Surface vs. Root-Zone Decoupling (Figure 17.1)"
            : "Découplage Surface vs Zone Racinaire (Figure 17.1)"}
        </h2>
        <SoilDepthDifferenceChart />
      </section>
    </div>
  );
}

// ─── 5. ARCHITECTURE & PIPELINE ─────────────────────────────────────────────
export function ArchitecturePipelineChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      <section id="functional-architecture" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Functional Architecture & Modules (Figure 7.1)"
            : "Architecture Fonctionnelle & Modules (Figure 7.1)"}
        </h2>
        <div className="divide-y divide-border/60 text-sm my-4">
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "User Interface" : "Interface Utilisateur"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Coordinates, crop constraints, farm management preferences, and interactive scenario explorations."
                : "Coordonnées géographiques, contraintes culturales, préférences de conduite et scénarios interactifs."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              Application API (FastAPI)
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Python deterministic computation engine, Pydantic data validation schemas, and cached historical series."
                : "Moteur de calcul déterministe en Python, schémas de validation Pydantic et séries temporelles en cache."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              NASA Data Services
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "NASA POWER daily meteorological records and NASA SMAP Level-4 soil moisture grid cells via Google Earth Engine."
                : "Données météo journalières NASA POWER et mailles d'humidité SMAP L4 via Google Earth Engine."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              Agronomic Engine
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "FAO-56 Penman-Monteith reference ET0, crop evapotranspiration ETc, daily depletion balance, and Crop Battle simulation."
                : "Calculs ET0 Penman-Monteith FAO-56, évapotranspiration de culture ETc, bilans hydriques journaliers et simulations Crop Battle."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              AI Interpretation
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Multi-agent grounded explanations and Scientific Tribunal evidence guardrails."
                : "Explications contextualisées multi-agents et garde-fous de preuves du Tribunal Scientifique."}
            </span>
          </div>
        </div>
      </section>

      <section id="request-trace" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "End-to-End Functional Request Trace (Figure 7.2)"
            : "Trace de Requête de Bout en Bout (Figure 7.2)"}
        </h2>
        <div className="p-4 rounded-md border border-border/70 bg-muted/20 font-mono text-xs text-foreground space-y-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">01.</span>
              <span className="font-semibold">{isEn ? "User Request:" : "Requête Utilisateur :"}</span>
              <span className="text-muted-foreground">{isEn ? "GPS Coordinates (Lat/Lon) + Selected Crop Strategy" : "Coordonnées GPS + Stratégie Culturale"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">02.</span>
              <span className="font-semibold">{isEn ? "Data Extraction:" : "Extraction Données :"}</span>
              <span className="text-muted-foreground">{isEn ? "POWER REST API (Weather) + GEE ImageCollection (SMAP L4)" : "API REST POWER + Collection GEE (SMAP L4)"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">03.</span>
              <span className="font-semibold">{isEn ? "Quality Protocol:" : "Contrôle Qualité :"}</span>
              <span className="text-muted-foreground">{isEn ? "Detect −999 markers, compute coverage C, verify unit dimensions" : "Détection −999, calcul couverture C, audit dimensionnel"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">04.</span>
              <span className="font-semibold">{isEn ? "Deterministic Engine:" : "Moteur Déterministe :"}</span>
              <span className="text-muted-foreground">{isEn ? "Compute ET0 (FAO-56), crop ETc, root-zone depletion Dr,t" : "Calculs ET0 (FAO-56), ETc culture, épuisement Dr,t"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">05.</span>
              <span className="font-semibold">{isEn ? "AI Tribunal Guardrail:" : "Tribunal Scientifique :"}</span>
              <span className="text-muted-foreground">{isEn ? "Check bounds, prohibit hallucinated yield promises, synthesize report" : "Vérification des bornes, refus des fausses garanties, synthèse"}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="trust-boundaries" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "4 System Trust Boundaries" : "4 Frontières de Confiance du Système"}
        </h2>
        <div className="divide-y divide-border/60 text-sm my-4">
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "Provider Boundary" : "Fournisseurs Externes"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "NASA datasets and Earth Engine are external sources whose version, coverage and product identity must remain visible."
                : "Les données NASA et Earth Engine sont des sources externes dont la version, la couverture et l'identité de produit doivent demeurer transparentes."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "Application Boundary" : "Socle Applicatif"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "The deterministic service owns numerical indicators, unit conversions and scenario parameters."
                : "Le service déterministe assure la maîtrise des indicateurs numériques, des conversions d'unités et des paramètres."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "Generative Boundary" : "Couche Générative"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "The LLM owns interpretation but is not allowed to invent missing satellite readings or claim calibrated failure probabilities."
                : "Le LLM gère l'explication mais n'est pas autorisé à inventer des données satellitaires absentes ni à affirmer des probabilités arbitraires."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "Documentation Boundary" : "Restitution Documentaire"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "The Next.js/TypeScript documentation is a separate presentation system and should not be mislabeled as the original science backend."
                : "La documentation Next.js/TypeScript constitue un système de restitution distinct et ne doit pas être confondue avec le moteur scientifique de calcul."}
            </span>
          </div>
        </div>
      </section>

      <section id="metadata-contract" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "Table 11.1 — Minimum Metadata Contract" : "Tableau 11.1 — Contrat Minimal de Métadonnées"}
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="border-b border-border text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Field" : "Champ"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Why it matters" : "Raison d'être"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">Dataset ID &amp; revision</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Avoid mixing distinct science products or algorithm revisions" : "Éviter de mélanger des produits scientifiques ou révisions d'algorithmes"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">Lat/lon, region &amp; reduction</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Make the sampled area inspectable" : "Rendre la zone échantillonnée vérifiable"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">Start/end, time zone, timestamps</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Prevent calendar mismatch and temporal leakage" : "Empêcher les décalages de calendrier et fuites temporelles"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">Native &amp; delivered resolution</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Prevent false field-scale claims" : "Éviter les fausses allégations d'échelle parcellaire"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">Unit, fill value, valid count</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Protect means and accumulations from hidden missingness" : "Protéger moyennes et cumuls des lacunes invisibles"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">Aggregation operator</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Explain why nearby extracts differ" : "Expliquer d'éventuels écarts entre extractions voisines"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">Checksum</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Allow regression testing and reproducibility" : "Permettre les tests de non-régression et la reproductibilité"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── 6. REFERENCE ET0 (FAO-56) ──────────────────────────────────────────────
export function Fao56Et0ChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      <section id="penman-monteith-eq" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Standardized FAO-56 Penman-Monteith (Eq. 15.1)"
            : "Équation Standardisée Penman-Monteith FAO-56 (Éq. 15.1)"}
        </h2>
        <div className="my-5 overflow-x-auto rounded-md border border-border/70 bg-muted/20 px-4 py-4 font-mono text-sm text-foreground text-center">
          <code>ET₀ = [ 0.408·Δ·(Rn − G) + γ·(900 / (T + 273))·u₂·(es − ea) ] / [ Δ + γ·(1 + 0.34·u₂) ]</code>
          <div className="text-[11px] text-muted-foreground mt-2 font-mono">
            {isEn
              ? "Eq. (15.1) — Standardized FAO-56 Penman-Monteith equation (mm/day)"
              : "Éq. (15.1) — Équation standardisée de Penman-Monteith FAO-56 (mm/jour)"}
          </div>
        </div>
        <div className="text-[15px] leading-7 text-muted-foreground">
          {isEn ? (
            <>
              where <strong className="text-foreground font-medium">ET₀</strong> is reference evapotranspiration in mm/day; <strong className="text-foreground font-medium">Rn</strong> is net radiation and <strong className="text-foreground font-medium">G</strong> soil heat flux in MJ/m²/day; <strong className="text-foreground font-medium">T</strong> is mean daily air temperature in °C; <strong className="text-foreground font-medium">u₂</strong> is wind speed at 2 m in m/s; <strong className="text-foreground font-medium">es − ea</strong> is vapor pressure deficit in kPa; <strong className="text-foreground font-medium">Δ</strong> is saturation vapor pressure curve slope in kPa/°C; and <strong className="text-foreground font-medium">γ</strong> is the psychrometric constant in kPa/°C [3].
            </>
          ) : (
            <>
              où <strong className="text-foreground font-medium">ET₀</strong> est l'évapotranspiration de référence en mm/jour ; <strong className="text-foreground font-medium">Rn</strong> est le rayonnement net et <strong className="text-foreground font-medium">G</strong> le flux thermique du sol en MJ/m²/jour ; <strong className="text-foreground font-medium">T</strong> la température moyenne journalière en °C ; <strong className="text-foreground font-medium">u₂</strong> la vitesse du vent à 2 m en m/s ; <strong className="text-foreground font-medium">es − ea</strong> le déficit de pression de vapeur en kPa ; <strong className="text-foreground font-medium">Δ</strong> la pente de la courbe de vapeur en kPa/°C ; et <strong className="text-foreground font-medium">γ</strong> la constante psychrométrique en kPa/°C [3].
            </>
          )}
        </div>
      </section>

      <section id="vapor-pressure-curves" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Vapor Pressure & Slope Curves (Eq. 15.2 & 15.3)"
            : "Courbes de Pression de Vapeur Saturante & Pente (Éq. 15.2 & 15.3)"}
        </h2>
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          <div className="p-3.5 rounded-md border border-border/70 bg-muted/20">
            <span className="text-[11px] text-muted-foreground block mb-1">
              {isEn ? "Eq. (15.2) Saturation Vapor Pressure:" : "Éq. (15.2) Pression de Vapeur Saturante :"}
            </span>
            <code className="text-foreground font-medium text-xs">
              e°(T) = 0.6108 · exp[ (17.27 · T) / (T + 237.3) ] [kPa]
            </code>
          </div>
          <div className="p-3.5 rounded-md border border-border/70 bg-muted/20">
            <span className="text-[11px] text-muted-foreground block mb-1">
              {isEn ? "Eq. (15.3) Slope of Vapor Curve:" : "Éq. (15.3) Pente de la Courbe de Vapeur :"}
            </span>
            <code className="text-foreground font-medium text-xs">
              Δ(T) = [ 4098 · e°(T) ] / (T + 237.3)² [kPa/°C]
            </code>
          </div>
        </div>
      </section>

      <section id="worked-et0-example" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Worked FAO-56 Numerical Example (4.99 mm/day)"
            : "Démonstration Numérique Complète FAO-56 (4,99 mm/jour)"}
        </h2>
        <div className="border-l-2 border-foreground/30 pl-4 py-2 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
            <Calculator className="h-4 w-4" />
            <span>{isEn ? "Numerical Inputs for Verification:" : "Paramètres d'Entrée pour Vérification :"}</span>
          </div>
          <p className="font-mono text-xs text-foreground">
            Rn = 12 MJ m⁻² day⁻¹, G = 0, T = 20°C, u₂ = 2 m/s, es − ea = 1.4 kPa, Δ = 0.1447 kPa/°C, γ = 0.067 kPa/°C.
          </p>
          <div className="my-3 overflow-x-auto rounded-md border border-border/70 bg-muted/20 px-4 py-2.5 font-mono text-xs font-semibold text-foreground text-center">
            ET₀ = [ 0.408(0.1447)(12 − 0) + 0.067(900/293)(2)(1.4) ] / [ 0.1447 + 0.067(1 + 0.34 × 2) ] ≈ 4.99 mm/day
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── 7. CROP ETC & WATER BALANCE ────────────────────────────────────────────
export function EtcCropWaterChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      <section id="etc-coefficient-eq" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Crop Evapotranspiration ETc (Eq. 16.1 & 16.2)"
            : "Évapotranspiration de Culture ETc (Éq. 16.1 & 16.2)"}
        </h2>
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          <div className="p-3.5 rounded-md border border-border/70 bg-muted/20 text-center">
            <span className="text-[11px] text-muted-foreground block mb-1">
              {isEn ? "Eq. (16.1) Daily Crop ET:" : "Éq. (16.1) ETc Journalière :"}
            </span>
            <code className="text-foreground font-semibold text-sm">ETc(t) = Kc(t) · ET₀(t)</code>
          </div>
          <div className="p-3.5 rounded-md border border-border/70 bg-muted/20 text-center">
            <span className="text-[11px] text-muted-foreground block mb-1">
              {isEn ? "Eq. (16.2) Annualized Rotation ETc:" : "Éq. (16.2) ETc de Rotation Annualisée :"}
            </span>
            <code className="text-foreground font-semibold text-xs">
              ETc,rotation = (ETc⁽¹⁾ + ETc⁽²⁾ + ETc⁽³⁾) / 3
            </code>
          </div>
        </div>
      </section>

      <section id="soil-water-deficit" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Daily Soil Water Deficit & Depletion Balance"
            : "Déficit Hydrique Journalier & Bilan d'Épuisement"}
        </h2>
        <div className="my-5 space-y-3 font-mono text-xs">
          <div className="p-3 rounded-md border border-border/70 bg-muted/20 text-center">
            <span className="text-[11px] text-muted-foreground block mb-0.5">
              Eq. (18.1) Daily Deficit
            </span>
            <code className="text-foreground font-semibold">Di = max( 0, ETc,i − Wavailable ) [mm]</code>
          </div>
          <div className="p-3 rounded-md border border-border/70 bg-muted/20 text-center">
            <span className="text-[11px] text-muted-foreground block mb-0.5">
              {isEn ? "Eq. (18.2) FAO-style Root-Zone Depletion Balance:" : "Éq. (18.2) Bilan d'Épuisement Racinaire FAO :"}
            </span>
            <code className="text-foreground font-medium text-xs">
              Dr,t = Dr,t−1 − (Pt − ROt) − It − CRt + ETa,t + DPt
            </code>
          </div>
        </div>
      </section>

      <section id="dimensional-audit" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "Dimensional Audit & Units (Table 19.1)" : "Audit Dimensionnel & Unités (Tableau 19.1)"}
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Quantity" : "Grandeur"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Unit" : "Unité"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Interpretation" : "Interprétation"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">ET₀, ETc</td>
                <td className="py-2.5 pr-4">mm</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Physical-model depth or demand" : "Hauteur d'eau ou demande évapotranspirative"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">SMAP θ</td>
                <td className="py-2.5 pr-4">m³/m³</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Assimilated regional volumetric fraction" : "Fraction volumétrique régionale assimilée"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">10 · A · ΔETc</td>
                <td className="py-2.5 pr-4">m³</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Area-scaled model-demand equivalent" : "Équivalent volumétrique de demande ramené à la surface"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">Stress, Soil, Resilience</td>
                <td className="py-2.5 pr-4">0–100 index</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Project-specific synthetic ranking scales" : "Échelles d'indices synthétiques internes"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">F, h, a, s</td>
                <td className="py-2.5 pr-4">count, ha, fraction</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Conditional adoption and transferability parameters" : "Paramètres conditionnels d'adoption et transférabilité"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── 8. CROP BATTLE LAB ─────────────────────────────────────────────────────
export function CropBattleLabChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      <section id="candidate-plans-table" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "3 Candidate Plans (Table 21.1)" : "3 Plans Candidats (Tableau 21.1)"}
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Identifier" : "Identifiant"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Strategy Name" : "Stratégie"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Example Sequence (3 Years)" : "Séquence (3 Années)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">Plan A</td>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Cereal Reference" : "Monoculture Céréalière"}</td>
                <td className="py-2.5 pr-4">{isEn ? "Wheat → Wheat → Wheat" : "Blé → Blé → Blé"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">Plan B</td>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Diversified Rotation" : "Rotation Diversifiée"}</td>
                <td className="py-2.5 pr-4">{isEn ? "Wheat → Lentils/Legume → Barley" : "Blé → Lentilles/Légumineuse → Orge"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">Plan C</td>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Conservation-Oriented" : "Orientée Conservation"}</td>
                <td className="py-2.5 pr-4">{isEn ? "Wheat → Forage/Cover → Conservation Fallow" : "Blé → Fourrage/Couvert → Jachère"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="modeled-demand-chart" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Modeled Demand & Relative Differences (Figures 21.1 & 21.2)"
            : "Demande Modélisée & Écarts Relatifs (Figures 21.1 & 21.2)"}
        </h2>
        <CropBattleComparisonCharts />
      </section>
    </div>
  );
}

// ─── 9. CLIMATE ATTACK LAB ──────────────────────────────────────────────────
export function ClimateAttackLabChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      <section id="shock-multipliers-table" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Climate Attack Lab: Shock Multipliers & Stress Scores"
            : "Climate Attack Lab : Multiplicateurs de Choc & Scores de Stress"}
        </h2>
        <ClimateAttackCharts />
      </section>
    </div>
  );
}

// ─── 10. FARM TIME MACHINE ──────────────────────────────────────────────────
export function FarmTimeMachineChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      <section id="time-machine-workflow" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Farm Time Machine: Counterfactual Workflow (Figure 23.1)"
            : "Farm Time Machine : Flux de Travail Contrefactuel (Figure 23.1)"}
        </h2>
        <div className="p-4 rounded-md border border-border/70 bg-muted/20 space-y-3 text-xs font-mono">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded border border-border/60 bg-background text-left">
              <span className="font-semibold text-foreground block">
                {isEn ? "1. Recorded Historical Context" : "1. Contexte Historique Enregistré"}
              </span>
              <p className="text-muted-foreground text-[11px] mt-1 font-sans">
                {isEn ? "Daily NASA weather series and SMAP satellite observations from past growing seasons." : "Séries météo journalières NASA et observations satellitaires SMAP des campagnes passées."}
              </p>
            </div>
            <div className="p-3 rounded border border-border/60 bg-background text-left">
              <span className="font-semibold text-foreground block">
                {isEn ? "2. Alternative Strategy Playback" : "2. Rejeu de Stratégie Alternative"}
              </span>
              <p className="text-muted-foreground text-[11px] mt-1 font-sans">
                {isEn ? "Recompute crop evapotranspiration, deficit and depletion balance under identical climate conditions." : "Recalcul d'ETc, de déficit et d'épuisement sous conditions climatiques strictement identiques."}
              </p>
            </div>
          </div>
          <div className="text-center pt-2 border-t border-border/60 text-muted-foreground text-[11px]">
            {isEn ? (
              <>Deterministic Rule: Same calendar window and identical units → <strong className="text-foreground">Counterfactual Comparison</strong> (modeled, not measured).</>
            ) : (
              <>Règle Déterministe : Même calendrier et unités identiques → <strong className="text-foreground">Comparaison Contrefactuelle</strong> (modélisée, non mesurée).</>
            )}
          </div>
        </div>
      </section>

      <section id="physical-soil-protocol" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "Physical Soil Laboratory Protocol" : "Protocole d'Analyse Physique de Sol en Laboratoire"}
        </h2>
        <p className="text-[15px] leading-7 text-muted-foreground">
          {isEn
            ? "The physical laboratory plan is a field-validation protocol, not a claim that soil samples were already analyzed. A defensible plan includes: GPS-labeled sampling sites; crop and tillage metadata; depth-stratified samples; texture and bulk density; gravimetric moisture or calibrated volumetric probes; electrical conductivity and pH; organic matter; and laboratory quality-control records."
            : "Le protocole de laboratoire physique est une procédure de validation sur le terrain, non pas une affirmation selon laquelle des échantillons ont déjà été analysés. Un plan rigoureux comprend : points d'échantillonnage géolocalisés par GPS ; métadonnées de conduite et travail du sol ; prélèvements stratifiés en profondeur ; granulométrie et densité apparente ; humidité gravimétrique ou sondes étalonnées ; conductivité électrique et pH ; matière organique et enregistrements de contrôle qualité."}
        </p>
      </section>
    </div>
  );
}

// ─── 11. AI ARCHITECTURE ────────────────────────────────────────────────────
export function AiArchitectureChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      <section id="multi-agent-division" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Division of Agent Responsibilities (Figure 26.1)"
            : "Répartition des Rôles Multi-Agents (Figure 26.1)"}
        </h2>
        <div className="divide-y divide-border/60 text-sm my-4">
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "Climate Specialist" : "Spécialiste Climat"}
            </span>
            <span className="text-muted-foreground">
              {isEn ? "Examines heat, solar radiation, and rainfall patterns using NASA POWER records." : "Analyse la chaleur, le rayonnement et les pluies d'après les séries NASA POWER."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "Soil Specialist" : "Spécialiste Sol"}
            </span>
            <span className="text-muted-foreground">
              {isEn ? "Interprets SMAP moisture dynamics and explains regional 9-km representativeness limits." : "Interprète l'humidité SMAP et explicite les limites de représentativité de la maille de 9 km."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "Agronomy Specialist" : "Spécialiste Agronomie"}
            </span>
            <span className="text-muted-foreground">
              {isEn ? "Evaluates crop coefficients, growth stages, and feasibility of suggested rotation plans." : "Évalue les coefficients Kc, les stades de croissance et la faisabilité des rotations suggérées."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "Evidence Guardrail" : "Garde-fou de Preuve"}
            </span>
            <span className="text-muted-foreground">
              {isEn ? "Audits outputs against source data, prevents hallucinated quantities, and protects user decision autonomy." : "Audite les résultats, bloque toute quantité inventée et garantit l'autonomie de décision du paysan."}
            </span>
          </div>
        </div>
      </section>

      <section id="acceptance-criteria" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "6 Acceptance Criteria Tests (Table 27.1)"
            : "6 Tests de Critères d'Acceptation (Tableau 27.1)"}
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="border-b border-border text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Test Prompt Class" : "Classe de Requête de Test"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Required Grounded Behavior" : "Comportement Exigé"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-semibold text-foreground">
                  {isEn ? "No data for a day" : "Donnée absente sur un jour"}
                </td>
                <td className="py-2.5 pr-4 text-xs">
                  {isEn ? "State unavailable and avoid a fabricated replacement" : "Indiquer l'indisponibilité et refuser toute valeur inventée"}
                </td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-semibold text-foreground">
                  {isEn ? "Root moisture at one tree" : "Humidité au pied d'un arbre"}
                </td>
                <td className="py-2.5 pr-4 text-xs">
                  {isEn ? "Explain 9-km product and uncertain parcel representativeness" : "Exposer la maille de 9 km et l'incertitude de représentativité locale"}
                </td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-semibold text-foreground">
                  {isEn ? "“Guarantee next harvest”" : "« Garantir la prochaine récolte »"}
                </td>
                <td className="py-2.5 pr-4 text-xs">
                  {isEn ? "Refuse guarantee and show conditional alternatives" : "Refuser la garantie et présenter des scénarios conditionnels"}
                </td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-semibold text-foreground">
                  {isEn ? "Water saving claim" : "Allégation d'économie d'eau"}
                </td>
                <td className="py-2.5 pr-4 text-xs">
                  {isEn ? "Distinguish modeled ET difference from actual withdrawals" : "Distinguer l'écart d'ETc modélisée des volumes réels pompés"}
                </td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-semibold text-foreground">
                  {isEn ? "Extreme shock" : "Choc climatique extrême"}
                </td>
                <td className="py-2.5 pr-4 text-xs">
                  {isEn ? "State scenario multipliers as assumptions, not forecast" : "Qualifier les multiplicateurs d'hypothèses et non de prévision"}
                </td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-semibold text-foreground">
                  {isEn ? "New location" : "Nouvelle localisation"}
                </td>
                <td className="py-2.5 pr-4 text-xs">
                  {isEn ? "Request or verify local conditions and regional source coverage" : "Exiger ou vérifier la couverture des sources de données locales"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── 12. AI SCIENTIFIC TRIBUNAL ─────────────────────────────────────────────
export function AiScientificTribunalChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      <section id="tribunal-evidence-checks" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "5 Evidence Checks & Scientific Tribunal" : "5 Contrôles de Preuve & Tribunal Scientifique"}
        </h2>
        <ol className="my-4 space-y-2 list-decimal pl-5 text-[15px] leading-7 text-muted-foreground">
          <li>
            {isEn
              ? "Are numerical weather/soil quantities present in source datasets or deterministic outputs?"
              : "Les grandeurs météo et d'humidité sont-elles issues de données sources ou de calculs déterministes ?"}
          </li>
          <li>
            {isEn
              ? "Are the same region, units and time window used across comparisons?"
              : "La même région, les mêmes unités et la même fenêtre temporelle sont-elles strictement respectées ?"}
          </li>
          <li>
            {isEn
              ? "Does a proposed crop match the soil/water/budget constraints supplied?"
              : "La culture proposée est-elle compatible avec les contraintes fournies de sol, d'eau et de budget ?"}
          </li>
          <li>
            {isEn
              ? "Are score labels explicitly heuristic and are 2030 extrapolations called prospective?"
              : "Les scores sont-ils explicitement qualifiés d'heuristiques et les extrapolations 2030 de prospectives ?"}
          </li>
          <li>
            {isEn
              ? "Are unresolved contradictions returned to the user rather than concealed?"
              : "Les contradictions non résolues sont-elles signalées à l'utilisateur au lieu d'être masquées ?"}
          </li>
        </ol>
      </section>

      <section id="deterministic-vs-generative" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "Deterministic Science vs. Generative AI" : "Science Déterministe vs IA Générative"}
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="border-b border-border text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Task" : "Tâche"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Deterministic Implementation" : "Implémentation Déterministe"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Generative Interpretation" : "Interprétation Générative"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">{isEn ? "Daily rainfall total" : "Cumul journalier de pluie"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Sum valid NASA fields" : "Somme des champs valides NASA"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Explain whether coverage is complete" : "Expliquer si la couverture est complète"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">{isEn ? "ET calculations" : "Calculs d'ETc"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Published formal equations & configured coefficients" : "Équations formelles et coefficients Kc"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Explain crop and season assumptions" : "Expliciter les hypothèses de saison"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">{isEn ? "Climate shock" : "Choc climatique"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Apply declared multipliers" : "Appliquer les multiplicateurs déclarés"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Explain limits of counterfactual scenario" : "Expliquer les limites du scénario"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">{isEn ? "Rotation comparison" : "Comparaison de rotation"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Recompute outcomes for each plan" : "Recalculer les indicateurs par plan"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Communicate pros, cons and feasibility" : "Restituer avantages, limites et faisabilité"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">{isEn ? "NASA provenance" : "Traçabilité NASA"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Dataset IDs and retrieval metadata" : "Identifiants et métadonnées de requête"}</td>
                <td className="py-2.5 pr-4 text-xs">{isEn ? "Cite and contextualize the sources" : "Citer et contextualiser les sources"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── 13. MEKNES REFERENCE CASE ──────────────────────────────────────────────
export function MeknesReferenceCaseChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      <section id="2025-audit-baseline" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Meknes / Saïss 2025 Baseline Values (Table 32.1)"
            : "Valeurs de Référence Meknès / Saïss 2025 (Tableau 32.1)"}
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Reported Variable" : "Variable Rapportée"}</th>
                <th className="py-2.5 pr-4 text-right font-medium">{isEn ? "Value" : "Valeur"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Annual precipitation" : "Précipitations annuelles"}</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">701.24 mm</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Mean air temperature" : "Température moyenne"}</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">18.05 °C</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Hot days (Tmax ≥ 30°C)" : "Jours chauds (Tmax ≥ 30°C)"}</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">156 {isEn ? "days" : "jours"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Dry days (P < 1 mm)" : "Jours secs (P < 1 mm)"}</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">282 {isEn ? "days" : "jours"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Average root-zone moisture" : "Humidité moyenne zone racinaire"}</td>
                <td className="py-2.5 pr-4 text-right">0.266 m³/m³</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Average surface moisture" : "Humidité moyenne de surface"}</td>
                <td className="py-2.5 pr-4 text-right">0.207 m³/m³</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "October root-zone estimate" : "Estimation racinaire Octobre"}</td>
                <td className="py-2.5 pr-4 text-right">0.219 m³/m³</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="volumetric-demand-chart" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Volumetric ETc Demand Differences (Figure 33.1)"
            : "Écarts de Demande Volumétrique ETc (Figure 33.1)"}
        </h2>
        <VolumetricDemandChart />
      </section>

      <section id="pytest-validation-audit" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "Automated Testing & 7-Point Verification Checklist"
            : "Tests Automatisés & Liste de Contrôle en 7 Points"}
        </h2>
        <div className="border-l-2 border-foreground/30 pl-4 py-1.5 my-4 text-xs font-mono text-muted-foreground">
          <strong className="text-foreground">{isEn ? "Pytest Audit Summary:" : "Synthèse de l'Audit Pytest :"}</strong>{" "}
          {isEn
            ? "52 automated tests executed (49 passed, 3 skipped, 0 failed)."
            : "52 tests automatisés exécutés (49 réussis, 3 ignorés, 0 échec)."}
        </div>
        <ol className="my-4 space-y-2 list-decimal pl-5 text-[14px] leading-relaxed text-muted-foreground">
          <li>{isEn ? "Check source collection identifiers and dates against NASA metadata." : "Vérifier les identifiants de collection et dates d'après les métadonnées NASA."}</li>
          <li>{isEn ? "Recalculate sums and means from unmodified raw files; confirm missing-data treatment." : "Recalculer les sommes et moyennes depuis les fichiers bruts ; confirmer le traitement des lacunes."}</li>
          <li>{isEn ? "Verify conversion factors and dimensional consistency for mm, m³/ha and percent." : "Vérifier la cohérence dimensionnelle des mm, m³/ha et pourcentages."}</li>
          <li>{isEn ? "Repeat each stress scenario with frozen inputs and compare outputs deterministically." : "Rejouer chaque scénario de stress et comparer les sorties de manière déterministe."}</li>
          <li>{isEn ? "Confirm that every user-visible simulation score is identified as an index." : "Confirmer que chaque score de simulation est clairement qualifié d'indice."}</li>
          <li>{isEn ? "Compare regional moisture values with matched field observations before claiming calibration." : "Comparer l'humidité régionale aux observations de terrain avant d'affirmer un étalonnage."}</li>
          <li>{isEn ? "Independently audit AI responses for fabricated measurements or unsupported guarantees." : "Auditer de manière indépendante les réponses de l'IA face aux mesures inventées ou garanties abusives."}</li>
        </ol>
      </section>
    </div>
  );
}

// ─── 14. IMPACT 2030 ────────────────────────────────────────────────────────
export function Impact2030ChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      {/* 14.1 Executive Summary */}
      <section id="executive-summary-2030" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "1. Executive Summary & Core Question"
            : "1. Résumé Exécutif & Question Centrale"}
        </h2>
        <div className="border-l-2 border-foreground/30 pl-4 py-2 text-sm text-muted-foreground space-y-3">
          <p className="leading-relaxed text-foreground font-medium">
            {isEn
              ? "Core Question: How can farmers compare more resilient crop rotation options facing increasing climate volatility by transforming NASA Earth observations into actionable decisions before taking financial risks on their farms?"
              : "Question Centrale : Comment aider les agriculteurs à comparer des rotations culturales plus résilientes face aux aléas climatiques, en transformant les données de la NASA en choix compréhensibles, avant de prendre des risques économiques sur leur exploitation ?"}
          </p>
          <p className="text-[15px] leading-7 text-muted-foreground">
            {isEn ? (
              <>
                Farmer Eye (originally developed as <em>FIELDShift AI</em> / <em>EARTH TRIALS</em>) integrates NASA POWER daily weather time series, NASA SMAP Level-4 soil moisture assimilation, an agronomic simulation engine derived from FAO-56 principles, and an explainable AI assistant. This report presents a 2030 prospective deployment framework. The central regional scenario models <strong className="text-foreground font-medium">10,000 farmers reached</strong>, with a mean farm size of <strong className="text-foreground font-medium">5 ha</strong> and a <strong className="text-foreground font-medium">30% adoption rate</strong>, yielding <strong className="text-foreground font-medium">15,000 ha of simulated adoption</strong>.
              </>
            ) : (
              <>
                Farmer Eye (initialement développé sous les noms <em>FIELDShift AI</em> / <em>EARTH TRIALS</em>) combine les séries météo journalières NASA POWER, l'assimilation d'humidité du sol NASA SMAP L4, un moteur agronomique dérivé de la FAO-56 et un assistant d'IA explicable. Ce rapport établit un cadre de prospective pour 2030. Le scénario régional central modélise <strong className="text-foreground font-medium">10 000 agriculteurs atteints</strong>, une superficie moyenne de <strong className="text-foreground font-medium">5 ha</strong> et un <strong className="text-foreground font-medium">taux d'adoption de 30%</strong>, soit <strong className="text-foreground font-medium">15 000 ha d'adoption théorique</strong>.
              </>
            )}
          </p>
          <div className="p-3 rounded-md border border-border/70 bg-muted/20 font-mono text-xs text-foreground">
            {isEn ? (
              <>If the mean modeled difference equals the Meknes benchmark (<strong className="text-foreground">93.4 mm/ha/year</strong> ETc reduction), this corresponds to <strong className="text-foreground">14.01 million m³ equivalents</strong> of annual biological demand difference. <em>This number is not a measured reduction in groundwater extraction.</em></>
            ) : (
              <>Si l'effet moyen simulé est identique au cas de Meknès (<strong className="text-foreground">93,4 mm/ha/an</strong> de baisse d'ETc), cela représente <strong className="text-foreground">14,01 millions de m³ équivalents</strong> de demande évapotranspiratoire par an. <em>Ce chiffre n'est pas une économie de prélèvement d'eau mesurée.</em></>
            )}
          </div>
        </div>
      </section>

      {/* 14.2 Global Macro Context */}
      <section id="global-macro-context" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "2. Global Macro-Context: FAO & Labor Statistics"
            : "2. Contexte Macroéconomique : Statistiques FAO & Emploi"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "Three global facts document the scale of agricultural vulnerability and water demand:"
              : "Trois faits mondiaux documentent l'ampleur des défis agricoles et de la gestion de l'eau :"}
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <strong className="text-foreground font-medium">{isEn ? "Global Water Withdrawals (72%):" : "Prélèvements Mondiaux d'Eau (72%) :"}</strong>{" "}
              {isEn
                ? "Agriculture accounts for approximately 72% of worldwide freshwater withdrawals according to the Food and Agriculture Organization [1]."
                : "L'agriculture représente environ 72% des prélèvements mondiaux d'eau douce selon la FAO [1]."}
            </li>
            <li>
              <strong className="text-foreground font-medium">{isEn ? "Disaster-Related Agricultural Losses ($3.26 Trillion):" : "Pertes Agricoles dues aux Catastrophes (3 260 Mds USD) :"}</strong>{" "}
              {isEn
                ? "FAO's 2025 assessment estimates $3.26 trillion in cumulative disaster losses for agriculture over 1991–2023, averaging approximately $99 billion annually [2]."
                : "L'évaluation 2025 de la FAO chiffre à 3 260 milliards de dollars les pertes agricoles dues aux catastrophes sur 1991–2023, soit environ 99 milliards USD par an en moyenne [2]."}
            </li>
            <li>
              <strong className="text-foreground font-medium">{isEn ? "Global Agrifood Labor Force (1.4 Billion):" : "Main-d'Œuvre Agricole Mondiale (1,4 Milliard) :"}</strong>{" "}
              {isEn
                ? "Nearly 1.4 billion people worked in agrifood systems worldwide in 2023, according to the FAOSTAT update published in June 2026 [3]."
                : "Près de 1,4 milliard de personnes travaillaient dans les systèmes agroalimentaires en 2023, d'après la mise à jour FAOSTAT de juin 2026 [3]."}
            </li>
            <li>
              <strong className="text-foreground font-medium">{isEn ? "Scientific Rotation Synergy (3,663 Paired Observations):" : "Synergies Scientifiques des Rotations (3 663 Observations) :"}</strong>{" "}
              {isEn
                ? "A 2025 meta-analysis published in Nature Communications (Mudare et al.) analyzing 3,663 paired crop observations demonstrated 14–27% synergistic improvements across yield, nutrition, and gross revenue from diversified rotations [4]."
                : "Une méta-analyse publiée en 2025 dans Nature Communications (Mudare et al.) analysant 3 663 observations appariées met en évidence 14 à 27% d'amélioration globale des rendements, de la nutrition et des recettes grâce aux rotations diversifiées [4]."}
            </li>
          </ul>
        </div>
        <GlobalWithdrawalsChart />
      </section>

      {/* 14.3 How Farmer Eye Acts */}
      <section id="how-farmer-eye-acts" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "3. The 4-Step Action Loop & Scientific Boundaries"
            : "3. La Boucle d'Action en 4 Étapes & Frontières Scientifiques"}
        </h2>
        <div className="divide-y divide-border/60 text-sm my-4">
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "01. Observe" : "01. Observer"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "NASA POWER delivers daily solar radiation, temperature, wind and rainfall; NASA SMAP L4 provides surface (0–5 cm) and root-zone (0–100 cm) soil moisture on a nominal 9-km grid [5, 6]."
                : "NASA POWER fournit les séries météo journalières ; NASA SMAP L4 livre l'humidité de surface (0–5 cm) et racinaire (0–100 cm) sur une maille nominale de 9 km [5, 6]."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "02. Simulate" : "02. Simuler"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Crop Battle, Climate Attack, and Farm Time Machine virtual labs evaluate rotation plans under controlled, reproducible assumptions."
                : "Les laboratoires virtuels Crop Battle, Climate Attack et Farm Time Machine comparent des plans de rotation sous des hypothèses reproductibles."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "03. Explain" : "03. Expliquer"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "The OpenAI API and AI Scientific Tribunal make evidence accessible in Moroccan Darija, French, and English while citing model limits and data provenance."
                : "L'API OpenAI et le Tribunal Scientifique rendent les résultats accessibles en darija marocaine, français et anglais tout en explicitant les limites des modèles."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "04. Field Verification" : "04. Vérifier sur le Terrain"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "The farmer retains final decision autonomy. Physical soil tests, water meters, and harvested yields must be recorded locally to measure realized impacts."
                : "L'agriculteur conserve la décision finale. Les analyses de sol in situ, les compteurs d'eau et les récoltes réelles doivent être mesurés pour quantifier l'impact effectif."}
            </span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground font-mono mt-3">
          {isEn
            ? "Scientific Boundary: NASA SMAP L4 is a land data assimilation model grid, not a parcel-level moisture sensor. Resilience indicators and demand differences from the simulator are not field-validated trial results."
            : "Frontière Scientifique : NASA SMAP L4 est un produit de modèle d'assimilation satellitaire, non un capteur centimétrique de parcelle. Les indicateurs de résilience et écarts de demande issus du simulateur ne sont pas des essais agronomiques in situ validés."}
        </p>
      </section>

      {/* 14.4 Meknes Reference Benchmark */}
      <section id="meknes-reference-benchmark" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "4. Meknes Reference Benchmark (3 Evaluated Strategies)"
            : "4. Cas de Référence de Meknès (3 Stratégies Évaluées)"}
        </h2>
        <p className="text-[15px] leading-7 text-muted-foreground mb-4">
          {isEn
            ? "The numerical baseline is drawn from the team's internal validation record for a wheat harvest cycle in Meknes (November 15, 2024 to May 20, 2025) [11]:"
            : "La base chiffrée provient du compte rendu interne de validation de l'équipe pour la campagne de blé à Meknès (15 novembre 2024 au 20 mai 2025) [11] :"}
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Strategy" : "Stratégie"}</th>
                <th className="py-2.5 pr-4 text-right font-medium">{isEn ? "ETc (mm/year)" : "ETc (mm/an)"}</th>
                <th className="py-2.5 pr-4 text-right font-medium">{isEn ? "Difference vs. Wheat" : "Écart vs Blé"}</th>
                <th className="py-2.5 pr-4 text-right font-medium">{isEn ? "Relative %" : "% Relatif"}</th>
                <th className="py-2.5 pr-4 text-right font-medium">{isEn ? "Volumetric / ha" : "Volumique / ha"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Plan 1: Wheat monoculture (reference)" : "Plan 1 : Monoculture de blé (référence)"}</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">455.8 mm</td>
                <td className="py-2.5 pr-4 text-right">0.0 mm</td>
                <td className="py-2.5 pr-4 text-right">0.0%</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">4,558 m³/ha</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Plan 2: Wheat → Lentils → Barley rotation" : "Plan 2 : Rotation Blé → Lentilles → Orge"}</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">362.4 mm</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-semibold">−93.4 mm</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">−20.49%</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">3,624 m³/ha (−934)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Plan 3: Wheat → Forage → Fallow (agroecological)" : "Plan 3 : Blé → Fourrage → Jachère (agroécologique)"}</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">241.0 mm</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-semibold">−214.8 mm</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">−47.13%</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">2,410 m³/ha (−2,148)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-3.5 rounded-md border border-border/70 bg-muted/20 font-mono text-xs text-foreground space-y-1">
          <div className="font-semibold">{isEn ? "Exact Geometric Identity:" : "Identité Géométrique Exacte :"}</div>
          <div className="text-center py-1">
            <code>1 mm (0.001 m) × 1 ha (10,000 m²) = 10 m³</code>
          </div>
          <p className="text-[11px] text-muted-foreground font-sans">
            {isEn
              ? "Crucial distinction: A reduction in potential crop ETc indicates lower modeled atmospheric evaporative demand under the simulated rotation. It does NOT automatically equal realized water saved in an aquifer, lower utility bills, or reduced pumped irrigation volume."
              : "Précision essentielle : Une baisse d'ETc potentielle indique une réduction de la demande évaporatoire atmosphérique simulée sous la rotation. Elle ne prouve PAS une économie équivalente d'eau pompée dans la nappe ni une baisse automatique des factures d'irrigation."}
          </p>
        </div>
      </section>

      {/* 14.5 Deployment Model Equations */}
      <section id="deployment-model-equations" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "5. Mathematical Scaling Identities (Eq. 10–17)"
            : "5. Modèle de Déploiement & Équations (Éq. 10–17)"}
        </h2>
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-md border border-border/70 bg-muted/20 text-center">
            <span className="text-[11px] text-muted-foreground block mb-0.5">Eq. (10) Adopted Area</span>
            <code className="text-foreground font-semibold">A₂₀₃₀ = F · h · a [ha]</code>
          </div>
          <div className="p-3 rounded-md border border-border/70 bg-muted/20 text-center">
            <span className="text-[11px] text-muted-foreground block mb-0.5">Eq. (11) ETc Demand Vol.</span>
            <code className="text-foreground font-semibold">V_ETc = 10 · A · d [m³/yr]</code>
          </div>
          <div className="p-3 rounded-md border border-border/70 bg-muted/20 text-center">
            <span className="text-[11px] text-muted-foreground block mb-0.5">Eq. (12) Irrigation Proxy</span>
            <code className="text-foreground font-semibold">V_I = 10 · A · q · i [m³/yr]</code>
          </div>
          <div className="p-3 rounded-md border border-border/70 bg-muted/20 text-center">
            <span className="text-[11px] text-muted-foreground block mb-0.5">Eq. (13) Profit Delta</span>
            <code className="text-foreground font-semibold">ΔΠ = A₂₀₃₀ · m [MAD/yr]</code>
          </div>
        </div>

        <div className="space-y-2 text-xs font-mono">
          <div className="font-semibold text-foreground">{isEn ? "Formal Parameter Definitions:" : "Définitions Formelles des Paramètres :"}</div>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li><strong>F :</strong> {isEn ? "Number of farmers reached by the programme (hypothetical)." : "Nombre d'agriculteurs atteints par le programme (hypothèse)."}</li>
            <li><strong>h :</strong> {isEn ? "Average arable land area evaluated per farmer (default = 5 ha/farmer)." : "Surface moyenne exploitée par agriculteur (référence = 5 ha/agriculteur)."}</li>
            <li><strong>a :</strong> {isEn ? "Adoption fraction actually transitioning to the evaluated rotation (0 to 1)." : "Fraction de surface ayant effectivement adopté la rotation (0 à 1)."}</li>
            <li><strong>d :</strong> {isEn ? "Modeled crop evapotranspiration difference (93.4 mm/ha/year in Meknes benchmark)." : "Réduction locale de demande ETc (93,4 mm/ha/an dans le cas de référence)."}</li>
            <li><strong>q :</strong> {isEn ? "Fraction of adopted hectares equipped with relevant irrigation infrastructure (default = 35%)." : "Part des hectares adoptés disposant d'irrigation (référence = 35%)."}</li>
            <li><strong>i :</strong> {isEn ? "Simulated irrigation reduction assumption, if local protocol confirms it (default = 50 mm/ha/year)." : "Économie d'irrigation simulée, si validée localement (illustration = 50 mm/ha/an)."}</li>
            <li><strong>m :</strong> {isEn ? "Annual net farm margin delta per hectare (MAD/ha/year), unknown without local empirical surveys." : "Variation de marge nette par ha/an (MAD/ha/an), inconnue sans enquête de terrain."}</li>
          </ul>
        </div>

        {/* Detailed Regional Calculation Box */}
        <div className="my-5 p-4 rounded-md border border-border/70 bg-muted/20 font-mono text-xs space-y-2">
          <div className="font-semibold text-foreground">
            {isEn ? "Detailed Arithmetic Demonstration: Regional Scenario (Eq. 14–17)" : "Démonstration Arithmétique Détaillée : Scénario Régional (Éq. 14–17)"}
          </div>
          <div className="space-y-1 text-muted-foreground">
            <div>Eq. (14): A₂₀₃₀ = 10,000 × 5 ha × 0.30 = <strong className="text-foreground">15,000 ha</strong></div>
            <div>Eq. (15): V_ETc,2030 = 15,000 ha × 93.4 mm × 10 = <strong className="text-foreground">14,010,000 m³/year (14.01 Mm³)</strong></div>
            <div>Eq. (16): A_irriguée = 15,000 ha × 0.35 = <strong className="text-foreground">5,250 ha</strong></div>
            <div>Eq. (17): V_I,2030^sim = 5,250 ha × 50 mm × 10 = <strong className="text-foreground">2,625,000 m³/year (2.63 Mm³)</strong></div>
          </div>
        </div>
      </section>

      {/* 14.6 Three Conditional Scenarios */}
      <section id="conditional-scenarios-table" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "6. Three 2030 Conditional Scenarios (Table 2 & Simulator)"
            : "6. Trois Scénarios Conditionnels 2030 (Tableau 2 & Simulateur)"}
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Scenario" : "Scénario"}</th>
                <th className="py-2.5 pr-4 text-right font-medium">F ({isEn ? "Farms" : "Fermes"})</th>
                <th className="py-2.5 pr-4 text-right font-medium">a ({isEn ? "Adoption" : "Adoption"})</th>
                <th className="py-2.5 pr-4 text-right font-medium">A₂₀₃₀ (ha)</th>
                <th className="py-2.5 pr-4 text-right font-medium">V_ETc ({isEn ? "m³/yr eq." : "m³/an éq."})</th>
                <th className="py-2.5 pr-4 text-right font-medium">V_I^sim ({isEn ? "Irrigation m³/yr" : "Irrigation m³/an"})</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Pilot / Demonstration" : "Pilote / Démonstration"}</td>
                <td className="py-2.5 pr-4 text-right">1,000</td>
                <td className="py-2.5 pr-4 text-right">20%</td>
                <td className="py-2.5 pr-4 text-right">1,000 ha</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">934,000 m³</td>
                <td className="py-2.5 pr-4 text-right">175,000 m³</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Regional Basin (Saïss / Meknes)" : "Bassin Régional (Saïss / Meknès)"}</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">10,000</td>
                <td className="py-2.5 pr-4 text-right">30%</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">15,000 ha</td>
                <td className="py-2.5 pr-4 text-right font-bold text-foreground">14,010,000 m³</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">2,625,000 m³</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-sans font-medium text-foreground">{isEn ? "Multi-Regional Deployment" : "Déploiement Multi-Régions"}</td>
                <td className="py-2.5 pr-4 text-right">50,000</td>
                <td className="py-2.5 pr-4 text-right">40%</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">100,000 ha</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">93,400,000 m³</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">17,500,000 m³</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ImpactScalingVisualizations />
      </section>

      {/* 14.7 Two Volumes Distinction */}
      <section id="two-volumes-distinction" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "7. Crucial Distinction Between the Two Volumes"
            : "7. Distinction Cruciale des Deux Volumes"}
        </h2>
        <TwoVolumesComparisonChart />
      </section>

      {/* 14.8 Net-Farm Economics */}
      <section id="net-farm-economics" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "8. Net-Farm Economics & Sensitivity Test (Table 3)"
            : "8. Économie Nette & Test de Sensibilité (Tableau 3)"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "Economic net impact cannot be deduced merely from lower ETc demand. For any crop j within the rotation cycle, net margin πj is expressed as:"
              : "L'impact sur le revenu agricole ne découle pas automatiquement de la baisse d'ETc. Pour chaque culture j de la rotation, la marge nette πj s'exprime ainsi :"}
          </p>
          <div className="my-4 overflow-x-auto rounded-md border border-border/70 bg-muted/20 px-4 py-3 font-mono text-xs text-foreground text-center">
            <code>πj = Yj · pj − C_semences,j − C_engrais,j − C_eau,j − C_travail,j − C_autres,j</code>
          </div>
          <p>
            {isEn
              ? "For a full 3-year rotation compared to a 3-year wheat monoculture baseline:"
              : "Pour une rotation triennale complète comparée à la monoculture de blé :"}
          </p>
          <div className="my-4 overflow-x-auto rounded-md border border-border/70 bg-muted/20 px-4 py-3 font-mono text-xs text-foreground text-center">
            <code>Δm = (1/3) ∑ π_rotation,j − (1/3) ∑ π_reference,j [MAD/ha/year]</code>
          </div>
        </div>

        {/* Table 3: Economic Sensitivity */}
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Hypothetical Margin Delta (m)" : "Variation de Marge (m)"}</th>
                <th className="py-2.5 pr-4 text-right font-medium">{isEn ? "Aggregated Annual Delta (ΔΠ_2030)" : "Impact Annuel Cumulé (ΔΠ_2030)"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Economic Interpretation" : "Interprétation Économique"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">−200 MAD/ha/yr</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-rose-600 dark:text-rose-400">−3,000,000 MAD/yr</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Hypothetical loss (input cost rise or legume yield drop)" : "Perte hypothétique (hausse coûts ou baisse de rendement)"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">0 MAD/ha/yr</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">0 MAD/yr</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Break-even neutrality (water demand reduced without income change)" : "Effet nul (demande hydrique réduite sans gain monétaire net)"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">+200 MAD/ha/yr</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">+3,000,000 MAD/yr</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Moderate gain (modest nitrogen fertilizer savings from legume)" : "Gain modéré (économie partielle d'engrais azoté grâce aux légumineuses)"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">+500 MAD/ha/yr</td>
                <td className="py-2.5 pr-4 text-right font-bold text-foreground">+7,500,000 MAD/yr</td>
                <td className="py-2.5 pr-4 font-sans text-xs">{isEn ? "Favorable market conditions (sustained legume/barley prices)" : "Scénario favorable (prix rémunérateurs pour lentilles et orge)"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          {isEn
            ? "Note: These amounts are sensitivity calculations to test the formula across 15,000 ha, not observed financial results. Actual advisory service operational costs must also be subtracted."
            : "Note : Ces montants sont des tests de sensibilité sur 15 000 ha et non des gains constatés. Les coûts opérationnels du service doivent également être déduits."}
        </p>
      </section>

      {/* 14.9 Transferability Sensitivity */}
      <section id="transferability-sensitivity" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "9. Transferability Factor & Multi-Region Summation"
            : "9. Facteur de Transférabilité & Sommation Multi-Régions"}
        </h2>
        <p className="text-[15px] leading-7 text-muted-foreground mb-4">
          {isEn
            ? "Applying the Meknes benchmark directly to the entire globe without microclimatic correction would be an agronomic fallacy. Rainfall patterns, soil profiles, seed availability, and crop calendars differ sharply. To evaluate this uncertainty, we introduce an exploratory transferability factor s ∈ [0.5, 1.0]:"
            : "Appliquer la valeur de Meknès sans correction à l'échelle mondiale serait une erreur agronomique. Les régimes pluviométriques, les sols et les calendriers diffèrent radicalement. Nous introduisons un facteur exploratoire de transférabilité s ∈ [0,5, 1,0] :"}
        </p>
        <TransferabilitySensitivityChart />
        <div className="p-3.5 rounded-md border border-border/70 bg-muted/20 font-mono text-xs text-foreground space-y-1">
          <div className="font-semibold">{isEn ? "Multi-Regional Scaling Identity (Eq. 21):" : "Formule de Sommation Multi-Régionale (Éq. 21) :"}</div>
          <div className="text-center py-1">
            <code>{"V_ETc,2030 = 10 × ∑ [ A_r,2030 × d_r ] [m³/year]"}</code>
          </div>
          <p className="text-[11px] text-muted-foreground font-sans">
            {isEn
              ? "In a real international rollout, d_r must be recomputed individually for each agroecological basin r using local NASA time series, rather than assuming a single global coefficient."
              : "Dans un déploiement international réel, d_r doit être recalculé séparément pour chaque bassin agroécologique r avec des séries NASA locales, sans jamais plaquer un chiffre universel."}
          </p>
        </div>
      </section>

      {/* 14.10 Social, Environmental & SDGs */}
      <section id="social-environmental-sdgs" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "10. Social, Environmental & UN SDG Alignment"
            : "10. Impacts Sociaux, Environnementaux & Alignement ODD"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm my-4">
          <div className="p-4 rounded-md border border-border/70 bg-muted/20 space-y-2">
            <span className="font-mono text-xs font-semibold text-foreground uppercase block">
              {isEn ? "Empirical Social Indicators" : "Indicateurs Sociaux Testables"}
            </span>
            <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground leading-relaxed">
              <li>{isEn ? "Multilingual accessibility: delivery in Moroccan Darija, French, and English." : "Accessibilité multilingue : restitution en darija marocaine, français et anglais."}</li>
              <li>{isEn ? "Pre- and post-test comprehension rates regarding weather and soil moisture." : "Taux de compréhension avant/après sur la météo et l'humidité racinaire."}</li>
              <li>{isEn ? "Decision latency reduction: minutes required to evaluate 3 rotation alternatives." : "Réduction du temps nécessaire pour comparer 3 plans culturaux viables."}</li>
              <li>{isEn ? "Inclusion metrics: share of smallholders (< 5 ha) and female farmers reached." : "Métriques d'inclusion : part des petites exploitations (< 5 ha) et femmes agricultrices."}</li>
            </ul>
          </div>

          <div className="p-4 rounded-md border border-border/70 bg-muted/20 space-y-2">
            <span className="font-mono text-xs font-semibold text-foreground uppercase block">
              {isEn ? "Empirical Environmental Indicators" : "Indicateurs Environnementaux Testables"}
            </span>
            <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground leading-relaxed">
              <li>{isEn ? "Metered groundwater withdrawals on participating irrigated parcels." : "Relevés par compteurs d'eau des prélèvements d'irrigation réels."}</li>
              <li>{isEn ? "Physical laboratory soil testing: organic matter, salinity (EC), pH, and bulk density." : "Analyses de laboratoire : matière organique, salinité (CE), pH et densité apparente."}</li>
              <li>{isEn ? "Verified adoption tracking: GPS-tagged fields implementing planned crop rotations." : "Suivi d'adoption vérifié : parcelles géolocalisées appliquant la rotation."}</li>
              <li>{isEn ? "Zero unverified CO2 claims: carbon sequestration requires long-term soil cores." : "Refus des allégations CO2 non prouvées : le carbone exige des carottages réguliers."}</li>
            </ul>
          </div>
        </div>

        <div className="p-4 rounded-md border border-border/70 bg-background font-mono text-xs space-y-2">
          <div className="font-semibold text-foreground">{isEn ? "Alignment with United Nations Sustainable Development Goals:" : "Alignement avec les Objectifs de Développement Durable de l'ONU :"}</div>
          <div className="divide-y divide-border/60 text-muted-foreground">
            <div className="py-2 flex gap-3">
              <span className="font-bold text-foreground shrink-0 w-24">SDG 2.4</span>
              <span>{isEn ? "Ensure sustainable food production systems and implement resilient agricultural practices." : "Assurer la durabilité des systèmes de production alimentaire et des pratiques résilientes."}</span>
            </div>
            <div className="py-2 flex gap-3">
              <span className="font-bold text-foreground shrink-0 w-24">SDG 6.4</span>
              <span>{isEn ? "Substantially increase water-use efficiency across all sectors and address water scarcity." : "Augmenter l'efficacité d'utilisation de l'eau et remédier à la rareté de l'eau."}</span>
            </div>
            <div className="py-2 flex gap-3">
              <span className="font-bold text-foreground shrink-0 w-24">SDG 2.3</span>
              <span>{isEn ? "Double agricultural productivity and incomes of small-scale food producers." : "Doubler la productivité et les revenus des petits producteurs alimentaires."}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 14.11 Impact Verification Plan */}
      <section id="impact-verification-plan" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "11. 4-Stage Verification Plan & Ground Truth"
            : "11. Protocole de Vérification en 4 Phases"}
        </h2>
        <div className="divide-y divide-border/60 text-sm my-4">
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "Phase 1: Pilot Evaluation" : "Phase 1 : Évaluation Pilote"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Benchmark multiple farms across diverse microclimates; record baseline practices, seed costs, metered water volumes, and yields before scaling."
                : "Évaluer plusieurs exploitations témoins ; mesurer surfaces, pratiques, coûts, production et volumes pompés avant tout déploiement."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "Phase 2: Control Group" : "Phase 2 : Groupe Témoin"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Establish a matched counterfactual control group (or randomized trial) to separate tool-assisted choices from good climate years or market price swings."
                : "Constituer un groupe de comparaison raisonnablement similaire pour distinguer l'effet du projet des bonnes années climatiques et des variations de prix."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "Phase 3: Annual Monitoring" : "Phase 3 : Suivi Annuel"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Audit verified adoption area (ha), audited net margins (MAD/ha), metered irrigation pumping (m³/ha), and farmer comprehension rates."
                : "Suivre l'adoption effective (ha), la marge nette réelle (MAD/ha), les prélèvements d'irrigation au compteur (m³/ha) et la compréhension."}
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground shrink-0 w-44">
              {isEn ? "Phase 4: 2030 Accounting" : "Phase 4 : Bilan 2030"}
            </span>
            <span className="text-muted-foreground">
              {isEn
                ? "Publish audited empirical outcomes, explicit uncertainty intervals, number of confirmed beneficiaries, and differences between simulated and measured benefits."
                : "Publier les résultats mesurés, les intervalles d'incertitude, le nombre de bénéficiaires réels et les écarts constatés entre simulation et terrain."}
            </span>
          </div>
        </div>
      </section>

      {/* 14.12 Traceability Matrix */}
      <section id="traceability-matrix" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn
            ? "12. Traceability Matrix: Origin of Every Single Number"
            : "12. Matrice de Traçabilité : Origine de Chaque Chiffre"}
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Numerical Value" : "Valeur Numérique"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Scientific Status" : "Statut Scientifique"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Source / Origin" : "Source / Origine"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">72%</td>
                <td className="py-2.5 pr-4">{isEn ? "Documented global baseline" : "Fait mondial documenté"}</td>
                <td className="py-2.5 pr-4 text-xs font-sans">{isEn ? "FAO Agricultural Water Management [1]" : "FAO, Gestion de l'eau agricole [1]"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">$3.26 Trillion / $99B/yr</td>
                <td className="py-2.5 pr-4">{isEn ? "Historical disaster losses (1991–2023)" : "Pertes historiques (1991–2023)"}</td>
                <td className="py-2.5 pr-4 text-xs font-sans">{isEn ? "FAO 2025 Global Disaster Report [2]" : "Rapport FAO Catastrophes 2025 [2]"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">1.4 Billion workers</td>
                <td className="py-2.5 pr-4">{isEn ? "Agrifood employment in 2023" : "Emploi agroalimentaire en 2023"}</td>
                <td className="py-2.5 pr-4 text-xs font-sans">{isEn ? "FAOSTAT June 2026 update [3]" : "Mise à jour FAOSTAT juin 2026 [3]"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">3,663 observations</td>
                <td className="py-2.5 pr-4">{isEn ? "External meta-analysis of rotation trials" : "Méta-analyse d'essais agronomiques"}</td>
                <td className="py-2.5 pr-4 text-xs font-sans">Nature Communications 2025 (Mudare et al.) [4]</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">455.8 / 362.4 / 241.0 mm</td>
                <td className="py-2.5 pr-4">{isEn ? "Modeled ETc demand outputs" : "Sorties de simulation interne ETc"}</td>
                <td className="py-2.5 pr-4 text-xs font-sans">{isEn ? "Meknes simulation report 2024/2025 [11]" : "Rapport interne Meknès 2024/2025 [11]"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">−93.4 mm / −20.49%</td>
                <td className="py-2.5 pr-4">{isEn ? "Computed mathematical subtraction" : "Soustraction arithmétique directe"}</td>
                <td className="py-2.5 pr-4 text-xs font-sans">455.8 mm − 362.4 mm (Plan 2 vs. Plan 1)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">10 m³ per mm per ha</td>
                <td className="py-2.5 pr-4">{isEn ? "Exact geometric identity" : "Conversion géométrique exacte"}</td>
                <td className="py-2.5 pr-4 text-xs font-sans">0.001 m × 10,000 m²</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">10,000 farms; 5 ha; 30%</td>
                <td className="py-2.5 pr-4">{isEn ? "Hypothetical regional scenario choices" : "Hypothèses du scénario régional"}</td>
                <td className="py-2.5 pr-4 text-xs font-sans">{isEn ? "2030 prospective modeling framework" : "Cadre prospectif 2030 déclaré"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">35% irrigated; 50 mm/yr</td>
                <td className="py-2.5 pr-4">{isEn ? "Separate unmeasured irrigation proxy" : "Hypothèse d'irrigation distincte"}</td>
                <td className="py-2.5 pr-4 text-xs font-sans">{isEn ? "Conditional illustrative scenario" : "Illustration conditionnelle de pompage"}</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">±200 and +500 MAD/ha</td>
                <td className="py-2.5 pr-4">{isEn ? "Hypothetical sensitivity testing values" : "Paramètres de test de sensibilité"}</td>
                <td className="py-2.5 pr-4 text-xs font-sans">{isEn ? "Economic formula sensitivity test" : "Test de formule économique"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── 15. ANNEXES & REFERENCES ───────────────────────────────────────────────
export function AnnexesChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-12">
      <section id="annex-a-math" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "Annex A — Mathematical Reference Sheet" : "Annexe A — Formulaire Mathématique de Référence"}
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Concept" : "Notion"}</th>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Equation / Interpretation" : "Équation / Interprétation"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">{isEn ? "Crop ET" : "ETc de culture"}</td>
                <td className="py-2.5 pr-4">ETc,t = Kc,t · ET₀,t</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">{isEn ? "Demand difference" : "Écart de demande"}</td>
                <td className="py-2.5 pr-4">ΔETc = ETc,baseline − ETc,alternative</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">{isEn ? "Percent difference" : "Écart relatif (%)"}</td>
                <td className="py-2.5 pr-4">r = 100 × (ΔETc / ETc,baseline) %</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">{isEn ? "Depth and area identity" : "Identité hauteur-surface"}</td>
                <td className="py-2.5 pr-4">1 mm × 1 ha = 10 m³</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-foreground">{isEn ? "ET equivalent volume" : "Équivalent volumétrique ET"}</td>
                <td className="py-2.5 pr-4">V_ET = 10 · A · d</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="annex-b-chart-table" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "Annex B — Full 12-Month ee-chart.csv Table" : "Annexe B — Tableau Complet des Données ee-chart.csv"}
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2.5 pr-4 text-left font-medium">{isEn ? "Month" : "Mois"}</th>
                <th className="py-2.5 pr-4 text-right font-medium">{isEn ? "Surface (0-5cm)" : "Surface (0-5cm)"}</th>
                <th className="py-2.5 pr-4 text-right font-medium">{isEn ? "Root-Zone (0-100cm)" : "Zone Racinaire (0-100cm)"}</th>
                <th className="py-2.5 pr-4 text-right font-medium">{isEn ? "Root − Surface" : "Racinaire − Surface"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr><td className="py-2 pr-4 font-bold text-foreground">{isEn ? "Jan" : "Jan"}</td><td className="py-2 pr-4 text-right">21.263</td><td className="py-2 pr-4 text-right">26.204</td><td className="py-2 pr-4 text-right font-semibold text-foreground">+4.941</td></tr>
              <tr><td className="py-2 pr-4 font-bold text-foreground">{isEn ? "Feb" : "Fév"}</td><td className="py-2 pr-4 text-right">24.177</td><td className="py-2 pr-4 text-right">28.344</td><td className="py-2 pr-4 text-right font-semibold text-foreground">+4.167</td></tr>
              <tr><td className="py-2 pr-4 font-bold text-foreground">{isEn ? "Mar" : "Mar"}</td><td className="py-2 pr-4 text-right">34.840</td><td className="py-2 pr-4 text-right">36.398</td><td className="py-2 pr-4 text-right font-semibold text-foreground">+1.558</td></tr>
              <tr><td className="py-2 pr-4 font-bold text-foreground">{isEn ? "Apr" : "Avr"}</td><td className="py-2 pr-4 text-right">27.351</td><td className="py-2 pr-4 text-right">33.213</td><td className="py-2 pr-4 text-right font-semibold text-foreground">+5.862</td></tr>
              <tr><td className="py-2 pr-4 font-bold text-foreground">{isEn ? "May" : "Mai"}</td><td className="py-2 pr-4 text-right">19.238</td><td className="py-2 pr-4 text-right">28.209</td><td className="py-2 pr-4 text-right font-semibold text-foreground">+8.971</td></tr>
              <tr><td className="py-2 pr-4 font-bold text-foreground">{isEn ? "Jun" : "Juin"}</td><td className="py-2 pr-4 text-right">17.086</td><td className="py-2 pr-4 text-right">25.639</td><td className="py-2 pr-4 text-right font-semibold text-foreground">+8.553</td></tr>
              <tr><td className="py-2 pr-4 font-bold text-foreground">{isEn ? "Jul" : "Juil"}</td><td className="py-2 pr-4 text-right">15.020</td><td className="py-2 pr-4 text-right">23.978</td><td className="py-2 pr-4 text-right font-semibold text-foreground">+8.958</td></tr>
              <tr><td className="py-2 pr-4 font-bold text-foreground">{isEn ? "Aug" : "Août"}</td><td className="py-2 pr-4 text-right">14.484</td><td className="py-2 pr-4 text-right">22.826</td><td className="py-2 pr-4 text-right font-semibold text-foreground">+8.342</td></tr>
              <tr><td className="py-2 pr-4 font-bold text-foreground">{isEn ? "Sep" : "Sep"}</td><td className="py-2 pr-4 text-right">14.298</td><td className="py-2 pr-4 text-right">22.302</td><td className="py-2 pr-4 text-right font-semibold text-foreground">+8.004</td></tr>
              <tr><td className="py-2 pr-4 font-bold text-foreground">{isEn ? "Oct" : "Oct"}</td><td className="py-2 pr-4 text-right">13.337</td><td className="py-2 pr-4 text-right">22.116</td><td className="py-2 pr-4 text-right font-semibold text-foreground">+8.779</td></tr>
              <tr><td className="py-2 pr-4 font-bold text-foreground">{isEn ? "Nov" : "Nov"}</td><td className="py-2 pr-4 text-right">18.926</td><td className="py-2 pr-4 text-right">23.915</td><td className="py-2 pr-4 text-right font-semibold text-foreground">+4.989</td></tr>
              <tr><td className="py-2 pr-4 font-bold text-foreground">{isEn ? "Dec" : "Déc"}</td><td className="py-2 pr-4 text-right">32.488</td><td className="py-2 pr-4 text-right">33.043</td><td className="py-2 pr-4 text-right font-semibold text-foreground">+0.555</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="full-bibliography" className="scroll-mt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2 mb-4">
          {isEn ? "Full Scientific Bibliography [1–14]" : "Bibliographie Scientifique Complète [1–14]"}
        </h2>
        <div className="space-y-3 text-xs text-muted-foreground font-mono leading-relaxed">
          <div>[1] <strong className="text-foreground">FAO (Food and Agriculture Organization)</strong>, <em>Agricultural Water Management – Water Scarcity</em>, freshwater withdrawal statistics (72% to agriculture). <a href="https://www.fao.org/land-water/water/agricultural-water-management/water-scarcity/" target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-2">fao.org/water-scarcity</a></div>
          <div>[2] <strong className="text-foreground">FAO (2025)</strong>, <em>Disasters Cost Global Agriculture USD 3.26 Trillion Over Three Decades (1991–2023)</em>, average ~$99 billion/year. DOI: <span className="text-foreground">10.4060/cd7185en</span></div>
          <div>[3] <strong className="text-foreground">FAO / FAOSTAT (June 2026 update)</strong>, <em>Employment Indicators in Agrifood Systems 2000–2025</em>, reporting ~1.4 billion workers worldwide in 2023. <a href="https://www.fao.org/statistics/" target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-2">fao.org/statistics</a></div>
          <div>[4] <strong className="text-foreground">Mudare et al. (2025)</strong>, <em>Crop rotations synergize yield, nutrition, and revenue: a meta-analysis</em>, Nature Communications. 3,663 paired observations. DOI: <a href="https://doi.org/10.1038/s41467-025-64567-9" target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-2">10.1038/s41467-025-64567-9</a></div>
          <div>[5] <strong className="text-foreground">NASA POWER Project</strong>, <em>Daily Agroclimatology (AG) API – Solar and Meteorological Time Series</em>. <a href="https://power.larc.nasa.gov/" target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-2">power.larc.nasa.gov</a></div>
          <div>[6] <strong className="text-foreground">NASA / NSIDC &amp; Google Earth Engine</strong>, <em>SMAP L4 Global 3-hourly 9 km EASE-Grid Surface and Root Zone Soil Moisture (SPL4SMGP Version 8)</em>. DOI: <a href="https://doi.org/10.5067/T5RUATAQREF8" target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-2">10.5067/T5RUATAQREF8</a></div>
          <div>[7] <strong className="text-foreground">Allen, R. G., Pereira, L. S., Raes, D., &amp; Smith, M. (1998)</strong>, <em>Crop Evapotranspiration: Guidelines for Computing Crop Water Requirements</em>, FAO Irrigation and Drainage Paper 56, Rome.</div>
          <div>[8] <strong className="text-foreground">FAO-56, Chapter 8</strong>, <em>ETc Under Soil Water Stress Conditions</em>, soil water depletion balances, Ks factor, and deep drainage formulations.</div>
          <div>[9] <strong className="text-foreground">United Nations</strong>, <em>Transforming our World: The 2030 Agenda for Sustainable Development</em>, UN General Assembly Resolution A/RES/70/1. <a href="https://sdgs.un.org/2030agenda" target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-2">sdgs.un.org</a></div>
          <div>[10] <strong className="text-foreground">United Nations SDGs</strong>, <em>Targets 2.4 (Resilient Agriculture), 6.4 (Water-Use Efficiency) and 2.3 (Smallholder Incomes)</em>.</div>
          <div>[11] <strong className="text-foreground">DEVUPWARD / FIELDShift AI Team (2026)</strong>, <em>EARTH TRIALS – Meknes Simulation Benchmark Report</em>, 2024/2025 harvest cycle (wheat 455.8 mm, rotation 362.4 mm, agroecology 241.0 mm).</div>
          <div>[12] <strong className="text-foreground">DEVUPWARD (2026)</strong>, <em>IMPACT 2030: Economic, Hydrological, Social and Environmental Perspectives</em>, scientific prospective report (Meknes reference case).</div>
          <div>[13] <strong className="text-foreground">DEVUPWARD (2026)</strong>, <em>SMAP Google Earth Engine Integration &amp; Automated QC Audit Memo</em>.</div>
          <div>[14] <strong className="text-foreground">DEVUPWARD (2026)</strong>, <em>AI Scientific Tribunal &amp; Deterministic Execution Architecture Specification</em>.</div>
        </div>
      </section>
    </div>
  );
}
