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
  ImpactScalingVisualizations,
} from "@/components/docs/charts/DocsCharts";
import { CodeBlock } from "@/components/docs/CodeBlock";
import {
  ShieldCheck,
  FileCheck,
  Calculator,
  ArrowRight,
} from "lucide-react";

// ─── 1. OVERVIEW & EVIDENCE POLICY ──────────────────────────────────────────
export function OverviewChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-10">
      {/* Evidence Policy */}
      <section id="evidence-policy" className="scroll-mt-20">
        <div className="p-4 sm:p-5 rounded-xl border border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-teal-950/20 text-xs text-zinc-700 dark:text-zinc-300 space-y-3 transition-colors">
          <div className="flex items-center gap-2 text-teal-900 dark:text-teal-300 font-bold uppercase tracking-wider text-xs">
            <ShieldCheck className="h-4 w-4 text-teal-700 dark:text-teal-400" />
            <span>
              {isEn ? "Document Status and Evidence Policy" : "Statut du Document et Politique de Preuve"}
            </span>
          </div>
          <p className="leading-relaxed">
            {isEn ? (
              <>
                <strong>Purpose:</strong> This dossier consolidates the reported implementation of the Farmer Eye / FIELDShift AI application and the EARTH TRIALS virtual laboratories. It is a technical record, not a claim that the system has been independently field-validated.
              </>
            ) : (
              <>
                <strong>Objectif :</strong> Ce dossier technique consolide l'implémentation documentée de l'application Farmer Eye / FIELDShift AI et des laboratoires virtuels EARTH TRIALS. Il s'agit d'un compte rendu technique et non d'une affirmation de validation indépendante sur le terrain.
              </>
            )}
          </p>
          <div className="space-y-1.5 pt-1 text-[11px] font-mono">
            <div className="font-semibold text-zinc-900 dark:text-zinc-100">
              {isEn ? "Evidence classes used throughout:" : "Classes de preuve utilisées tout au long du dossier :"}
            </div>
            <ul className="list-decimal pl-4 space-y-1 text-zinc-600 dark:text-zinc-400">
              <li>
                <strong>{isEn ? "External reference:" : "Référence externe :"}</strong>{" "}
                {isEn
                  ? "facts and methods documented by NASA, FAO or other cited publications."
                  : "faits et méthodes documentés par la NASA, la FAO ou d'autres publications citées."}
              </li>
              <li>
                <strong>{isEn ? "Project implementation:" : "Implémentation projet :"}</strong>{" "}
                {isEn
                  ? "features described in the team’s repository analysis or integration reports, including executable services and interfaces."
                  : "fonctionnalités décrites dans l'analyse de dépôt ou les rapports d'intégration de l'équipe, incluant services exécutables et interfaces."}
              </li>
              <li>
                <strong>{isEn ? "Internal test result:" : "Résultat d'essai interne :"}</strong>{" "}
                {isEn
                  ? "numerical output reported by an executed local model or extraction, not a new field measurement."
                  : "résultat numérique fourni par un modèle local exécuté ou une extraction, non pas une nouvelle mesure in situ."}
              </li>
              <li>
                <strong>{isEn ? "Illustrative formula or scenario:" : "Formule ou scénario illustratif :"}</strong>{" "}
                {isEn
                  ? "scientific reference equation or hypothetical parameter choice, not necessarily a verbatim source-code implementation."
                  : "équation scientifique de référence ou paramétrage hypothétique, pas nécessairement une retranscription mot à mot du code source."}
              </li>
              <li>
                <strong>{isEn ? "Prospective impact:" : "Impact prospectif :"}</strong>{" "}
                {isEn
                  ? "conditional quantities for 2030, never realized benefits."
                  : "quantités conditionnelles pour 2030, jamais des bénéfices réalisés."}
              </li>
            </ul>
          </div>
          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 border-t border-teal-200/80 dark:border-teal-900/40 pt-2 italic">
            <strong>{isEn ? "Source-control note:" : "Note de contrôle des sources :"}</strong>{" "}
            {isEn
              ? "Available materials include repository analysis, EARTH TRIALS algorithmic audit, SMAP integration notes, and an Impact 2030 report. They contain multiple runs with differing assumptions, explicitly labeled by source. The AI provider also transitioned from earlier NVIDIA configurations to OpenAI API integration."
              : "Les documents disponibles incluent l'analyse du dépôt, l'audit algorithmique EARTH TRIALS, les notes d'intégration SMAP et un rapport Impact 2030. Ils comportent plusieurs exécutions aux hypothèses distinctes, clairement identifiées par source. Le fournisseur d'IA a également évolué de configurations initiales NVIDIA vers l'intégration de l'API OpenAI."}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "Executive Summary & Project Identity" : "Résumé Exécutif & Identité du Projet"}
        </h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {isEn ? (
            <>
              Farmer Eye is an agricultural decision-support system developed by team <strong>DEVUPWARD</strong> for the <strong>NASA Space Apps Challenge 2026</strong>. The project was previously called <em>FIELDShift AI</em>; its scientific experiments retain the name <em>EARTH TRIALS</em>. The central proposition is that farmers should combine their direct knowledge of soil and fields with an additional, regional perspective provided by Earth observations, agronomic models, and explainable AI.
            </>
          ) : (
            <>
              Farmer Eye est un système d'aide à la décision agricole développé par l'équipe <strong>DEVUPWARD</strong> pour le <strong>NASA Space Apps Challenge 2026</strong>. Le projet s'appelait initialement <em>FIELDShift AI</em> ; ses expériences scientifiques conservent le nom <em>EARTH TRIALS</em>. La proposition centrale est que les agriculteurs combinent leur connaissance directe du sol et de leurs parcelles avec une perspective régionale complémentaire offerte par les observations de la Terre, les modèles agronomiques et l'IA explicable.
            </>
          )}
        </p>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
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
      </section>

      {/* Key Reference Run */}
      <section id="key-reference-run" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Key Reference Comparison (Revised Meknes Simulation)"
            : "Comparaison de Référence Clé (Simulation Révisée de Meknès)"}
        </h2>
        <div className="p-4 rounded-xl border border-teal-300 dark:border-teal-900/60 bg-teal-50/70 dark:bg-teal-950/30 text-xs text-zinc-800 dark:text-zinc-200 space-y-1 transition-colors">
          <div className="font-bold text-teal-950 dark:text-teal-300 flex items-center gap-1.5">
            <FileCheck className="h-4 w-4 text-teal-700 dark:text-teal-400" />
            <span>{isEn ? "Benchmark Comparison:" : "Comparaison de Référence :"}</span>
          </div>
          <p className="leading-relaxed">
            {isEn ? (
              <>
                Wheat monoculture <strong>455.8 mm/year</strong> modeled crop demand; wheat–lentil–barley rotation <strong>362.4 mm/year</strong>; difference <strong>93.4 mm/year</strong>. On one hectare this is <strong>934 m³</strong> of equivalent modeled evapotranspirative demand, not a measured reduction in pumped irrigation water [12, 13].
              </>
            ) : (
              <>
                Monoculture de blé à <strong>455,8 mm/an</strong> de demande évapotranspirative modélisée ; rotation blé–lentille–orge à <strong>362,4 mm/an</strong> ; écart de <strong>93,4 mm/an</strong>. Sur un hectare, cela correspond à <strong>934 m³</strong> d'équivalent de demande modélisée, et non à une économie mesurée d'eau pompée pour l'irrigation [12, 13].
              </>
            )}
          </p>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 italic">
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
    <div className="space-y-10">
      {/* 2.1 The Global Challenge */}
      <section id="global-challenge" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "The Global Agricultural Challenge (FAO Statistics)"
            : "Le Défi Agricole Mondial (Statistiques FAO)"}
        </h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {isEn
            ? "Water scarcity, climate variability and agronomic uncertainty affect agricultural decision-making in many regions. Changes in rainfall timing, high-temperature episodes, reduced soil water availability and limited budget flexibility interact with crop and rotation choices. Risk therefore cannot be expressed responsibly as one universal number."
            : "Le stress hydrique, la variabilité climatique et l'incertitude agronomique pèsent lourdement sur la prise de décision agricole dans de nombreuses régions. Le décalage des pluies, les épisodes caniculaires, la raréfaction de l'eau dans le sol et la flexibilité budgétaire limitée interagissent directement avec les choix culturaux et les rotations. Le risque ne peut donc être réduit de manière responsable à un chiffre unique."}
        </p>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {isEn ? (
            <>
              The Food and Agriculture Organization reports approximately <strong>72% of worldwide freshwater withdrawals going to agriculture</strong>, using its stated accounting scope. Its 2025 assessment estimates <strong>$3.26 trillion in disaster-related agricultural losses for 1991–2023</strong>, or about <strong>$99 billion annually</strong> on average [5, 6]. These are global context statistics, not losses attributable to the absence of Farmer Eye.
            </>
          ) : (
            <>
              L'Organisation des Nations Unies pour l'alimentation et l'agriculture rapporte qu'environ <strong>72% des prélèvements mondiaux d'eau douce sont destinés à l'agriculture</strong>. Son évaluation 2025 chiffre à <strong>3 260 milliards de dollars les pertes agricoles dues aux catastrophes sur 1991–2023</strong>, soit environ <strong>99 milliards de dollars par an</strong> en moyenne [5, 6]. Ces chiffres constituent un contexte macroéconomique mondial et non des pertes imputables à l'absence de Farmer Eye.
            </>
          )}
        </p>
      </section>

      {/* Decision Problem */}
      <section id="decision-problem" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "The Farmer Decision Problem" : "Le Dilemme Décisionnel de l'Agriculteur"}
        </h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {isEn
            ? "Before sowing, a farmer may need to choose crops, timing, soil management, water allocation and risk tolerance without a complete picture of regional weather history or alternative outcomes. The objective is not to automate away local experience; it is to improve the comparison of feasible options."
            : "Avant les semis, l'agriculteur doit choisir ses cultures, le calendrier, la gestion du sol, l'allocation hydrique et son niveau d'exposition au risque sans disposer d'une vision consolidée de l'historique météo régional ou des trajectoires alternatives. L'objectif n'est pas de remplacer l'expérience locale, mais d'enrichir la comparaison rigoureuse des options possibles."}
        </p>
      </section>

      {/* Why Earth Observations */}
      <section id="why-earth-observations" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "Why Earth Observations Matter" : "Pourquoi les Observations de la Terre sont Essentielles"}
        </h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {isEn
            ? "Regional satellite and modeled products provide consistent temporal coverage over wide areas, particularly useful for long histories and anomaly context. Their weakness is spatial representativeness: a satellite/model grid cell encompasses many fields with different soils. Farmer Eye presents both the advantage and this limitation."
            : "Les produits satellitaires et les réanalyses régionales offrent une couverture temporelle homogène sur de vastes zones, particulièrement précieuse pour les séries historiques et la détection d'anomalies. Leur limite réside dans la représentativité spatiale : une maille de modèle englobe plusieurs parcelles aux sols hétérogènes. Farmer Eye explicite conjointement cet atout et cette contrainte."}
        </p>
      </section>

      {/* Evidence Maturity */}
      <section id="evidence-maturity" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "Evidence Maturity & System Boundaries" : "Maturité des Preuves & Périmètre du Système"}
        </h2>
        <EvidenceMaturityDiagram />
      </section>

      {/* Design Principles */}
      <section id="design-principles" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "6 Core Design Principles" : "6 Principes Fondamentaux de Conception"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700 dark:text-zinc-300">
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
            <strong className="text-zinc-900 dark:text-zinc-100 font-mono block">
              {isEn ? "1. Provenance:" : "1. Traçabilité :"}
            </strong>
            {isEn
              ? "Make the provenance and units of every numerical observation visible."
              : "Rendre visibles la provenance et les unités de chaque observation numérique."}
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
            <strong className="text-zinc-900 dark:text-zinc-100 font-mono block">
              {isEn ? "2. Missing Values:" : "2. Données Manquantes :"}
            </strong>
            {isEn
              ? "Preserve missing values rather than inventing replacement measurements."
              : "Conserver les données manquantes plutôt que d'inventer des mesures de substitution."}
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
            <strong className="text-zinc-900 dark:text-zinc-100 font-mono block">
              {isEn ? "3. Explicit Formulas:" : "3. Formules Explicites :"}
            </strong>
            {isEn
              ? "Compute agricultural indicators with explicit formulas, not with an LLM guessing quantities."
              : "Calculer les indicateurs agronomiques par des équations explicites, sans approximation par LLM."}
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
            <strong className="text-zinc-900 dark:text-zinc-100 font-mono block">
              {isEn ? "4. Multi-Scenarios:" : "4. Scénarios Multiples :"}
            </strong>
            {isEn
              ? "Offer several feasible crop strategies and state scenario assumptions clearly."
              : "Proposer plusieurs stratégies culturales viables en explicitant les hypothèses de scénario."}
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
            <strong className="text-zinc-900 dark:text-zinc-100 font-mono block">
              {isEn ? "5. Accessible Language:" : "5. Langage Accessible :"}
            </strong>
            {isEn
              ? "Explain results in accessible language, including Moroccan Darija in explanatory interfaces."
              : "Expliquer les résultats dans un langage accessible, intégrant la Darija marocaine."}
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
            <strong className="text-zinc-900 dark:text-zinc-100 font-mono block">
              {isEn ? "6. Farmer Responsibility:" : "6. Responsabilité Paysanne :"}
            </strong>
            {isEn
              ? "Keep the farmer responsible for the final choice; do not promise certain yields or savings."
              : "Laisser à l'agriculteur la décision finale ; ne jamais promettre de rendements garantis."}
          </div>
        </div>
      </section>

      {/* Second Eyes Concept */}
      <section id="second-eyes-concept" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "The Farmer’s Second Eyes Concept" : "Le Concept 'Second Eyes' de l'Agriculteur"}
        </h2>
        <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 dark:bg-emerald-950/20 rounded-r-lg text-sm font-semibold text-emerald-950 dark:text-emerald-300">
          {isEn
            ? "“Farmers see their fields. Farmer Eye helps them see the bigger picture.”"
            : "« Les agriculteurs observent leurs parcelles. Farmer Eye les aide à appréhender la vue d'ensemble. »"}
        </blockquote>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {isEn
            ? "The metaphor is not a claim of optical surveillance, centimeter-scale mapping or direct measurement inside every root. SMAP L4 root-zone estimates are produced by land modeling and observation assimilation over broad grid cells. The application reveals regional tendencies and alternative scenarios, without pretending to “see” each individual plant."
            : "Cette métaphore ne prétend pas à une surveillance optique, une cartographie centimétrique ou une mesure directe au sein de chaque racine. Les estimations d'humidité SMAP L4 sont issues de modélisation des surfaces et d'assimilation satellitaire sur de larges mailles. L'outil éclaire les tendances régionales et compare des scénarios, sans prétendre scruter chaque plante individuellement."}
        </p>
      </section>

      {/* Implementation Status */}
      <section id="implementation-status" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Implementation Inventory & Status (Tables 6.1 & 6.2)"
            : "Inventaire d'Implémentation & Statut (Tableaux 6.1 & 6.2)"}
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 dark:bg-[#1A1C20] border-b border-zinc-200 dark:border-[#232529] text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
              <tr>
                <th className="text-left p-3">{isEn ? "Module" : "Module"}</th>
                <th className="text-left p-3">{isEn ? "Reported Status" : "Statut Rapporté"}</th>
                <th className="text-left p-3">{isEn ? "Evidence Distinction" : "Distinction de Preuve"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-800 dark:text-zinc-200">
              <tr>
                <td className="p-2.5 font-semibold">NASA POWER daily data</td>
                <td className="p-2.5 font-mono text-emerald-700 dark:text-emerald-400">
                  {isEn ? "Implemented" : "Implémenté"}
                </td>
                <td className="p-2.5 text-zinc-600 dark:text-zinc-400">
                  {isEn ? "REST collection, QC, caching, derived summaries [9]" : "Collecte REST, contrôle qualité, cache, synthèses [9]"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">NASA SMAP L4 V008</td>
                <td className="p-2.5 font-mono text-emerald-700 dark:text-emerald-400">
                  {isEn ? "Implemented" : "Implémenté"}
                </td>
                <td className="p-2.5 text-zinc-600 dark:text-zinc-400">
                  {isEn ? "GEE integration, 46-band catalogue, agricultural extraction [10]" : "Intégration GEE, catalogue 46 bandes, extraction [10]"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">Crop Battle Lab</td>
                <td className="p-2.5 font-mono text-sky-700 dark:text-sky-400">
                  {isEn ? "Executed" : "Exécuté"}
                </td>
                <td className="p-2.5 text-zinc-600 dark:text-zinc-400">
                  {isEn ? "Multi-plan comparison and numerical outputs [11]" : "Comparaison multi-plans et sorties numériques [11]"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">Climate Attack Lab</td>
                <td className="p-2.5 font-mono text-sky-700 dark:text-sky-400">
                  {isEn ? "Executed" : "Exécuté"}
                </td>
                <td className="p-2.5 text-zinc-600 dark:text-zinc-400">
                  {isEn ? "Controlled drought, heat and delayed-rain assumptions [11]" : "Hypothèses contrôlées de sécheresse, canicule et retard de pluie [11]"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">Farm Time Machine</td>
                <td className="p-2.5 font-mono text-emerald-700 dark:text-emerald-400">
                  {isEn ? "Implemented" : "Implémenté"}
                </td>
                <td className="p-2.5 text-zinc-600 dark:text-zinc-400">
                  {isEn ? "Retrospective counterfactual historical comparison [11]" : "Comparaison contrefactuelle historique rétrospective [11]"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">AI Scientific Tribunal</td>
                <td className="p-2.5 font-mono text-amber-700 dark:text-amber-400">
                  {isEn ? "Concept / Local" : "Conceptuel / Local"}
                </td>
                <td className="p-2.5 text-zinc-600 dark:text-zinc-400">
                  {isEn ? "Specialized evidence-checking roles; not peer review [11]" : "Rôles de vérification de preuves ; non pas une revue par les pairs [11]"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">AI Assistance</td>
                <td className="p-2.5 font-mono text-emerald-700 dark:text-emerald-400">
                  {isEn ? "Integrated" : "Intégré"}
                </td>
                <td className="p-2.5 text-zinc-600 dark:text-zinc-400">
                  {isEn ? "OpenAI API in later config; early notes mention NVIDIA" : "API OpenAI dans la version finale ; NVIDIA mentionné au départ"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">Global measured impact</td>
                <td className="p-2.5 font-mono text-rose-700 dark:text-rose-400">
                  {isEn ? "Not demonstrated" : "Non démontré"}
                </td>
                <td className="p-2.5 text-zinc-600 dark:text-zinc-400">
                  {isEn ? "2030 figures are conditional deployment scenarios" : "Les chiffres 2030 sont des scénarios conditionnels d'extrapolation"}
                </td>
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
    <div className="space-y-10">
      <section id="power-parameters" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "7 Meteorological Parameters (NASA POWER)" : "7 Paramètres Météorologiques (NASA POWER)"}
        </h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {isEn
            ? "The NASA Prediction Of Worldwide Energy Resources (POWER) service provides analysis-ready daily weather and solar information through a public API [1]. The project’s repository analysis describes a point request under the agroclimatology community (AG) and local solar time (LST)."
            : "Le service NASA Prediction Of Worldwide Energy Resources (POWER) fournit des séries quotidiennes prêtes pour l'analyse météo et solaire via une API publique [1]. L'analyse du code décrit une requête ponctuelle sous la communauté agroclimatologie (AG) et le temps solaire local (LST)."}
        </p>

        {/* Table 9.1 */}
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 dark:bg-[#1A1C20] border-b border-zinc-200 dark:border-[#232529] text-zinc-600 dark:text-zinc-400 text-[11px]">
              <tr>
                <th className="text-left p-2.5">{isEn ? "Parameter" : "Paramètre"}</th>
                <th className="text-left p-2.5">{isEn ? "Interpretation" : "Interprétation"}</th>
                <th className="text-right p-2.5">{isEn ? "Typical Unit" : "Unité Typique"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-800 dark:text-zinc-200">
              <tr>
                <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">T2M</td>
                <td className="p-2.5">
                  {isEn ? "Daily mean 2-m air temperature" : "Température moyenne journalière de l'air à 2 m"}
                </td>
                <td className="p-2.5 text-right">°C</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">T2M_MAX</td>
                <td className="p-2.5">
                  {isEn ? "Maximum daily air temperature" : "Température maximale journalière de l'air"}
                </td>
                <td className="p-2.5 text-right">°C</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">T2M_MIN</td>
                <td className="p-2.5">
                  {isEn ? "Minimum daily air temperature" : "Température minimale journalière de l'air"}
                </td>
                <td className="p-2.5 text-right">°C</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">PRECTOTCORR</td>
                <td className="p-2.5">
                  {isEn ? "Corrected daily precipitation" : "Précipitations journalières corrigées"}
                </td>
                <td className="p-2.5 text-right">mm/day</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">RH2M</td>
                <td className="p-2.5">
                  {isEn ? "2-m relative humidity" : "Humidité relative de l'air à 2 m"}
                </td>
                <td className="p-2.5 text-right">%</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">WS2M</td>
                <td className="p-2.5">
                  {isEn ? "2-m wind speed" : "Vitesse du vent à 2 m"}
                </td>
                <td className="p-2.5 text-right">m/s</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">ALLSKY_SFC_SW_DWN</td>
                <td className="p-2.5">
                  {isEn ? "All-sky surface shortwave radiation" : "Rayonnement solaire ondes courtes à la surface"}
                </td>
                <td className="p-2.5 text-right">MJ/m²/day</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="power-quality" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "Quality Handling & Missingness Protocol" : "Traitement Qualité & Protocole des Lacunes"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
            <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">
              {isEn ? "9.1 Missing Marker:" : "9.1 Marqueur de Données Manquantes :"}
            </span>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {isEn
                ? "The service reads the response declared missing-data marker (commonly −999), converts missing values to null, tracks coverage and does not interpolate missing weather days in its reported analysis [9]."
                : "Le service lit le marqueur déclaré de données manquantes (couramment −999), convertit les valeurs manquantes en null, suit la couverture et n'interpole pas les jours manquants dans les bilans rapportés [9]."}
            </p>
          </div>
          <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
            <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">
              {isEn ? "9.2 Coverage Statistic Formula:" : "9.2 Formule du Taux de Couverture :"}
            </span>
            <div className="p-2 rounded bg-zinc-50 dark:bg-[#1A1C20] border border-zinc-200 dark:border-[#282B30] font-mono text-center text-xs text-zinc-800 dark:text-zinc-200 my-1">
              C = 100 × (n_valid / n_expected) [%]
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              {isEn
                ? "For 31-day month with 29 valid days: C = 100(29/31) = 93.55%."
                : "Pour un mois de 31 jours avec 29 jours valides : C = 100(29/31) = 93,55%."}
            </p>
          </div>
        </div>
      </section>

      <section id="power-api-request" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
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
    <div className="space-y-10">
      <section id="smap-catalogue" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "NASA SMAP Level-4 SPL4SMGP Collection"
            : "Collection NASA SMAP Niveau-4 SPL4SMGP"}
        </h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {isEn
            ? "The Soil Moisture Active Passive (SMAP) Level-4 product combines microwave observations and land-surface modeling to estimate soil conditions. Farmer Eye uses Google Earth Engine collection NASA/SMAP/SPL4SMGP/008 (3-hourly, nominally 9 km EASE-Grid; approximately 11-km nominal pixel size in GEE) [2, 10]."
            : "Le produit Soil Moisture Active Passive (SMAP) Niveau-4 combine les observations micro-ondes et la modélisation des surfaces continentales pour estimer l'état hydrique du sol. Farmer Eye utilise la collection Google Earth Engine NASA/SMAP/SPL4SMGP/008 (résolution 3-horaire, grille EASE-Grid de 9 km nominaux ; environ 11 km de pixel effectif dans GEE) [2, 10]."}
        </p>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 dark:bg-[#1A1C20] border-b border-zinc-200 dark:border-[#232529] text-zinc-600 dark:text-zinc-400 text-[11px]">
              <tr>
                <th className="text-left p-2.5">{isEn ? "Field" : "Champ"}</th>
                <th className="text-left p-2.5">{isEn ? "Interpretation" : "Interprétation"}</th>
                <th className="text-right p-2.5">{isEn ? "Unit" : "Unité"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-800 dark:text-zinc-200">
              <tr>
                <td className="p-2 font-bold text-teal-700 dark:text-teal-400">sm_surface</td>
                <td className="p-2">
                  {isEn ? "Surface soil moisture, approximately 0–5 cm" : "Humidité superficielle du sol, environ 0–5 cm"}
                </td>
                <td className="p-2 text-right">m³/m³</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-teal-700 dark:text-teal-400">sm_rootzone</td>
                <td className="p-2">
                  {isEn ? "Root-zone soil moisture, approximately 0–100 cm" : "Humidité de la zone racinaire, environ 0–100 cm"}
                </td>
                <td className="p-2 text-right">m³/m³</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-teal-700 dark:text-teal-400">sm_profile</td>
                <td className="p-2">
                  {isEn ? "Profile to model bedrock depth" : "Profil complet jusqu'au substratum rocheux"}
                </td>
                <td className="p-2 text-right">m³/m³</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-teal-700 dark:text-teal-400">sm_surface_wetness</td>
                <td className="p-2">
                  {isEn ? "Surface relative wetness" : "Humidité relative de surface"}
                </td>
                <td className="p-2 text-right">{isEn ? "dimensionless" : "sans dimension"}</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-teal-700 dark:text-teal-400">sm_rootzone_wetness</td>
                <td className="p-2">
                  {isEn ? "Root-zone relative wetness" : "Humidité relative racinaire"}
                </td>
                <td className="p-2 text-right">{isEn ? "dimensionless" : "sans dimension"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="smap-12-month-chart" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "12-Month SMAP Moisture Series (ee-chart.csv)"
            : "Série d'Humidité SMAP sur 12 Mois (ee-chart.csv)"}
        </h2>
        <SmapMonthlyChart />
      </section>

      <section id="smap-surface-rootzone" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
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
    <div className="space-y-10">
      <section id="functional-architecture" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Functional Architecture & Modules (Figure 7.1)"
            : "Architecture Fonctionnelle & Modules (Figure 7.1)"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
          <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
            <div className="font-bold text-zinc-900 dark:text-zinc-100">
              {isEn ? "Farmer / Research User" : "Agriculteur / Chercheur"}
            </div>
            <div className="text-zinc-500 dark:text-zinc-400 mt-1">
              {isEn
                ? "Location, crop constraints, farm management options"
                : "Localisation, contraintes culturales, options de conduite"}
            </div>
          </div>
          <div className="p-3.5 rounded-lg border border-teal-200 dark:border-teal-900/50 bg-teal-50/60 dark:bg-teal-950/20">
            <div className="font-bold text-teal-950 dark:text-teal-300">Application API (FastAPI)</div>
            <div className="text-teal-800 dark:text-teal-400 mt-1">
              {isEn ? "Python, Pydantic, deterministic data handling" : "Python, Pydantic, traitement déterministe"}
            </div>
          </div>
          <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
            <div className="font-bold text-zinc-900 dark:text-zinc-100">
              {isEn ? "Dashboard & Exports" : "Tableau de Bord & Exports"}
            </div>
            <div className="text-zinc-500 dark:text-zinc-400 mt-1">
              {isEn ? "Evidence displays, advice, CSV/JSON exports" : "Affichages de preuves, conseils, exports CSV/JSON"}
            </div>
          </div>
          <div className="p-3.5 rounded-lg border border-sky-200 dark:border-sky-900/50 bg-sky-50/60 dark:bg-sky-950/20">
            <div className="font-bold text-sky-950 dark:text-sky-300">NASA POWER &amp; SMAP</div>
            <div className="text-sky-800 dark:text-sky-400 mt-1">
              {isEn ? "Time series, L4 GEE grids, metadata cache" : "Séries temporelles, mailles GEE L4, cache de métadonnées"}
            </div>
          </div>
          <div className="p-3.5 rounded-lg border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/60 dark:bg-emerald-950/20">
            <div className="font-bold text-emerald-950 dark:text-emerald-300">
              {isEn ? "Agronomic Engine" : "Moteur Agronomique"}
            </div>
            <div className="text-emerald-800 dark:text-emerald-400 mt-1">
              {isEn ? "ET0, ETc, water balance simulations and rules" : "ET0, ETc, bilans hydriques et règles agronomiques"}
            </div>
          </div>
          <div className="p-3.5 rounded-lg border border-purple-200 dark:border-purple-900/50 bg-purple-50/60 dark:bg-purple-950/20">
            <div className="font-bold text-purple-950 dark:text-purple-300">
              {isEn ? "AI Interpretation" : "Interprétation par IA"}
            </div>
            <div className="text-purple-800 dark:text-purple-400 mt-1">
              {isEn ? "Tribunal / multi-agent grounded explanations" : "Tribunal / explications contextualisées multi-agents"}
            </div>
          </div>
        </div>
      </section>

      <section id="request-trace" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "End-to-End Functional Request Trace (Figure 7.2)"
            : "Trace de Requête de Bout en Bout (Figure 7.2)"}
        </h2>
        <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] text-xs font-mono">
          <span className="p-2 rounded bg-zinc-100 dark:bg-[#1E2024] text-zinc-800 dark:text-zinc-200 font-semibold">
            1. {isEn ? "Request (Coords/Crops)" : "Requête (Coords/Cultures)"}
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="p-2 rounded bg-sky-100 dark:bg-sky-950/50 text-sky-800 dark:text-sky-300 font-semibold">
            2. {isEn ? "Sources (POWER + SMAP)" : "Sources (POWER + SMAP)"}
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="p-2 rounded bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 font-semibold">
            3. {isEn ? "Data QC (Missingness)" : "Contrôle Qualité"}
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="p-2 rounded bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 font-semibold">
            4. {isEn ? "Modeling (Crop Scenarios)" : "Modélisation (Scénarios)"}
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="p-2 rounded bg-purple-100 dark:bg-purple-950/50 text-purple-800 dark:text-purple-300 font-semibold">
            5. {isEn ? "AI Guidance (Evidence)" : "Synthèse IA (Preuves)"}
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="p-2 rounded bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300 font-semibold">
            6. {isEn ? "Farmer Output" : "Rendu Paysan"}
          </span>
        </div>
      </section>

      <section id="trust-boundaries" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "4 System Trust Boundaries" : "4 Frontières de Confiance du Système"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518]">
            <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">
              {isEn ? "Provider Boundary:" : "Frontière Fournisseurs :"}
            </span>
            <p className="text-zinc-600 dark:text-zinc-400">
              {isEn
                ? "NASA datasets and Earth Engine are external sources whose version, coverage and product identity must remain visible."
                : "Les données NASA et Earth Engine sont des sources externes dont la version, la couverture et l'identité de produit doivent demeurer transparentes."}
            </p>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518]">
            <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">
              {isEn ? "Application Boundary:" : "Frontière Applicative :"}
            </span>
            <p className="text-zinc-600 dark:text-zinc-400">
              {isEn
                ? "The deterministic service owns numerical indicators, unit conversions and scenario parameters."
                : "Le service déterministe assure la maîtrise des indicateurs numériques, des conversions d'unités et des paramètres."}
            </p>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518]">
            <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">
              {isEn ? "Generative Boundary:" : "Frontière Générative :"}
            </span>
            <p className="text-zinc-600 dark:text-zinc-400">
              {isEn
                ? "The LLM owns interpretation but is not allowed to invent missing satellite readings or claim calibrated failure probabilities."
                : "Le LLM gère l'explication mais n'est pas autorisé à inventer des données satellitaires absentes ni à affirmer des probabilités arbitraires."}
            </p>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518]">
            <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">
              {isEn ? "Communication Boundary:" : "Frontière de Restitution :"}
            </span>
            <p className="text-zinc-600 dark:text-zinc-400">
              {isEn
                ? "The Next.js/TypeScript documentation is a separate presentation system and should not be mislabeled as the original science backend."
                : "La documentation Next.js/TypeScript constitue un système de restitution distinct et ne doit pas être confondue avec le moteur scientifique de calcul."}
            </p>
          </div>
        </div>
      </section>

      <section id="metadata-contract" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "Table 11.1 — Minimum Metadata Contract" : "Tableau 11.1 — Contrat Minimal de Métadonnées"}
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 dark:bg-[#1A1C20] border-b border-zinc-200 dark:border-[#232529] text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
              <tr>
                <th className="text-left p-2.5">{isEn ? "Field" : "Champ"}</th>
                <th className="text-left p-2.5">{isEn ? "Why it matters" : "Raison d'être"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-700 dark:text-zinc-300">
              <tr>
                <td className="p-2.5 font-mono font-semibold">Dataset ID &amp; revision</td>
                <td className="p-2.5">
                  {isEn ? "Avoid mixing distinct science products or algorithm revisions" : "Éviter de mélanger des produits scientifiques ou révisions d'algorithmes"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-semibold">Lat/lon, region &amp; reduction</td>
                <td className="p-2.5">
                  {isEn ? "Make the sampled area inspectable" : "Rendre la zone échantillonnée vérifiable"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-semibold">Start/end, time zone, timestamps</td>
                <td className="p-2.5">
                  {isEn ? "Prevent calendar mismatch and temporal leakage" : "Empêcher les décalages de calendrier et fuites temporelles"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-semibold">Native &amp; delivered resolution</td>
                <td className="p-2.5">
                  {isEn ? "Prevent false field-scale claims" : "Éviter les fausses allégations d'échelle parcellaire"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-semibold">Unit, fill value, valid count</td>
                <td className="p-2.5">
                  {isEn ? "Protect means and accumulations from hidden missingness" : "Protéger moyennes et cumuls des lacunes invisibles"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-semibold">Aggregation operator</td>
                <td className="p-2.5">
                  {isEn ? "Explain why nearby extracts differ" : "Expliquer d'éventuels écarts entre extractions voisines"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-semibold">Checksum</td>
                <td className="p-2.5">
                  {isEn ? "Allow regression testing and reproducibility" : "Permettre les tests de non-régression et la reproductibilité"}
                </td>
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
    <div className="space-y-10">
      <section id="penman-monteith-eq" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Standardized FAO-56 Penman-Monteith (Eq. 15.1)"
            : "Équation Standardisée Penman-Monteith FAO-56 (Éq. 15.1)"}
        </h2>
        <div className="p-4 rounded-xl border border-zinc-300 dark:border-[#282B30] bg-zinc-50 dark:bg-[#141518] font-mono text-center space-y-2">
          <div className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white overflow-x-auto py-1">
            ET₀ = [ 0.408·Δ·(Rn − G) + γ·(900 / (T + 273))·u₂·(es − ea) ] / [ Δ + γ·(1 + 0.34·u₂) ]
          </div>
          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-sans">
            {isEn
              ? "Equation (15.1) — Standardized FAO-56 Penman-Monteith equation (mm/day)"
              : "Équation (15.1) — Équation standardisée de Penman-Monteith FAO-56 (mm/jour)"}
          </div>
        </div>
        <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {isEn ? (
            <>
              where <strong>ET₀</strong> is in mm/day; <strong>Rn</strong> is net radiation and <strong>G</strong> soil heat flux in MJ/m²/day; <strong>T</strong> is mean air temperature in °C; <strong>u₂</strong> is wind speed at 2 m in m/s; <strong>es − ea</strong> is vapor pressure deficit in kPa; <strong>Δ</strong> is saturation vapor curve slope in kPa/°C; and <strong>γ</strong> is the psychrometric constant in kPa/°C [3].
            </>
          ) : (
            <>
              où <strong>ET₀</strong> est exprimée en mm/jour ; <strong>Rn</strong> est le rayonnement net et <strong>G</strong> le flux de chaleur du sol en MJ/m²/jour ; <strong>T</strong> la température moyenne de l'air en °C ; <strong>u₂</strong> la vitesse du vent à 2 m en m/s ; <strong>es − ea</strong> le déficit de pression de vapeur en kPa ; <strong>Δ</strong> la pente de la courbe de pression de vapeur saturante en kPa/°C ; et <strong>γ</strong> la constante psychrométrique en kPa/°C [3].
            </>
          )}
        </div>
      </section>

      <section id="vapor-pressure-curves" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Vapor Pressure & Slope Curves (Eq. 15.2 & 15.3)"
            : "Courbes de Pression de Vapeur Saturante & Pente (Éq. 15.2 & 15.3)"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
            <div className="text-zinc-500 dark:text-zinc-400 text-[11px]">
              {isEn ? "Eq. (15.2) Saturation Vapor Pressure:" : "Éq. (15.2) Pression de Vapeur Saturante :"}
            </div>
            <div className="font-bold text-zinc-900 dark:text-zinc-100 mt-1">
              e°(T) = 0.6108 · exp[ (17.27 · T) / (T + 237.3) ] [kPa]
            </div>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
            <div className="text-zinc-500 dark:text-zinc-400 text-[11px]">
              {isEn ? "Eq. (15.3) Slope of Vapor Curve:" : "Éq. (15.3) Pente de la Courbe de Vapeur :"}
            </div>
            <div className="font-bold text-zinc-900 dark:text-zinc-100 mt-1">
              Δ(T) = [ 4098 · e°(T) ] / (T + 237.3)² [kPa/°C]
            </div>
          </div>
        </div>
      </section>

      <section id="worked-et0-example" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Worked FAO-56 Numerical Example (4.99 mm/day)"
            : "Démonstration Numérique Complète FAO-56 (4,99 mm/jour)"}
        </h2>
        <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 text-xs space-y-2">
          <div className="font-bold text-emerald-950 dark:text-emerald-300 flex items-center gap-1.5">
            <Calculator className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
            <span>{isEn ? "Hypothetical Inputs for Verification:" : "Paramètres d'Entrée pour Vérification :"}</span>
          </div>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-mono">
            Rn = 12 MJ m⁻² day⁻¹, G = 0, T = 20°C, u₂ = 2 m/s, es − ea = 1.4 kPa, Δ = 0.1447 kPa/°C, γ = 0.067 kPa/°C.
          </p>
          <div className="p-2.5 rounded bg-white dark:bg-[#141518] border border-emerald-300 dark:border-emerald-800/60 font-mono text-center font-bold text-emerald-900 dark:text-emerald-300 text-xs">
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
    <div className="space-y-10">
      <section id="etc-coefficient-eq" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Crop Evapotranspiration ETc (Eq. 16.1 & 16.2)"
            : "Évapotranspiration de Culture ETc (Éq. 16.1 & 16.2)"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] text-center">
            <div className="text-zinc-500 dark:text-zinc-400 text-[11px]">
              {isEn ? "Eq. (16.1) Daily Crop ET:" : "Éq. (16.1) ETc Journalière :"}
            </div>
            <div className="font-bold text-zinc-900 dark:text-zinc-100 mt-1">ETc(t) = Kc(t) · ET₀(t)</div>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] text-center">
            <div className="text-zinc-500 dark:text-zinc-400 text-[11px]">
              {isEn ? "Eq. (16.2) Annualized Rotation ETc:" : "Éq. (16.2) ETc de Rotation Annualisée :"}
            </div>
            <div className="font-bold text-zinc-900 dark:text-zinc-100 mt-1">
              ETc,rotation = (ETc⁽¹⁾ + ETc⁽²⁾ + ETc⁽³⁾) / 3
            </div>
          </div>
        </div>
      </section>

      <section id="soil-water-deficit" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Daily Soil Water Deficit & Depletion Balance"
            : "Déficit Hydrique Journalier & Bilan d'Épuisement"}
        </h2>
        <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] font-mono text-xs text-center font-bold text-zinc-900 dark:text-zinc-100">
          Eq. (18.1): Di = max( 0, ETc,i − Wavailable ) [mm]
        </div>
        <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518] text-xs space-y-1">
          <div className="font-bold text-zinc-900 dark:text-zinc-100 font-mono">
            {isEn
              ? "Eq. (18.2) FAO-style Root-Zone Depletion Balance:"
              : "Éq. (18.2) Bilan d'Épuisement Racinaire (Style FAO) :"}
          </div>
          <div className="font-mono text-zinc-800 dark:text-zinc-300 text-[11px]">
            Dr,t = Dr,t−1 − (Pt − ROt) − It − CRt + ETa,t + DPt
          </div>
        </div>
      </section>

      <section id="dimensional-audit" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "Dimensional Audit & Units (Table 19.1)" : "Audit Dimensionnel & Unités (Tableau 19.1)"}
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 dark:bg-[#1A1C20] border-b border-zinc-200 dark:border-[#232529] text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
              <tr>
                <th className="text-left p-2.5">{isEn ? "Quantity" : "Grandeur"}</th>
                <th className="text-left p-2.5">{isEn ? "Unit" : "Unité"}</th>
                <th className="text-left p-2.5">{isEn ? "Interpretation" : "Interprétation"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-700 dark:text-zinc-300">
              <tr>
                <td className="p-2 font-mono font-semibold">ET₀, ETc</td>
                <td className="p-2 font-mono">mm</td>
                <td className="p-2">
                  {isEn ? "Physical-model depth or demand" : "Hauteur d'eau ou demande évapotranspirative"}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-mono font-semibold">SMAP θ</td>
                <td className="p-2 font-mono">m³/m³</td>
                <td className="p-2">
                  {isEn ? "Assimilated regional volumetric fraction" : "Fraction volumétrique régionale assimilée"}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-mono font-semibold">10 · A · ΔETc</td>
                <td className="p-2 font-mono">m³</td>
                <td className="p-2">
                  {isEn ? "Area-scaled model-demand equivalent" : "Équivalent volumétrique de demande ramené à la surface"}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-mono font-semibold">Stress, Soil, Resilience</td>
                <td className="p-2 font-mono">0–100 index</td>
                <td className="p-2">
                  {isEn ? "Project-specific synthetic ranking scales" : "Échelles d'indices synthétiques internes"}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-mono font-semibold">F, h, a, s</td>
                <td className="p-2 font-mono">count, ha, fraction</td>
                <td className="p-2">
                  {isEn ? "Conditional adoption and transferability parameters" : "Paramètres conditionnels d'adoption et transférabilité"}
                </td>
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
    <div className="space-y-10">
      <section id="candidate-plans-table" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "3 Candidate Plans (Table 21.1)" : "3 Plans Candidats (Tableau 21.1)"}
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 dark:bg-[#1A1C20] border-b border-zinc-200 dark:border-[#232529] text-zinc-600 dark:text-zinc-400 text-[11px]">
              <tr>
                <th className="text-left p-3">{isEn ? "Plan Identifier" : "Identifiant"}</th>
                <th className="text-left p-3">{isEn ? "Strategy Name" : "Stratégie"}</th>
                <th className="text-left p-3">{isEn ? "Example Sequence (3 Years)" : "Séquence (3 Années)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-800 dark:text-zinc-200">
              <tr>
                <td className="p-3 font-bold text-slate-700 dark:text-slate-400">Plan A</td>
                <td className="p-3 font-semibold">{isEn ? "Cereal Reference" : "Monoculture Céréalière"}</td>
                <td className="p-3 text-zinc-600 dark:text-zinc-400">{isEn ? "Wheat → Wheat → Wheat" : "Blé → Blé → Blé"}</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-teal-700 dark:text-teal-400">Plan B</td>
                <td className="p-3 font-semibold">{isEn ? "Diversified Rotation" : "Rotation Diversifiée"}</td>
                <td className="p-3 text-zinc-600 dark:text-zinc-400">{isEn ? "Wheat → Lentils/Legume → Barley" : "Blé → Lentilles/Légumineuse → Orge"}</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-emerald-700 dark:text-emerald-400">Plan C</td>
                <td className="p-3 font-semibold">{isEn ? "Conservation-Oriented" : "Orientée Conservation"}</td>
                <td className="p-3 text-zinc-600 dark:text-zinc-400">{isEn ? "Wheat → Forage/Cover → Conservation Fallow" : "Blé → Fourrage/Couvert → Jachère"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="modeled-demand-chart" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
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
    <div className="space-y-10">
      <section id="shock-multipliers-table" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
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
    <div className="space-y-10">
      <section id="time-machine-workflow" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Farm Time Machine: Counterfactual Workflow (Figure 23.1)"
            : "Farm Time Machine : Flux de Travail Contrefactuel (Figure 23.1)"}
        </h2>
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518] space-y-2 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border border-sky-200 dark:border-sky-900/50 bg-sky-50/70 dark:bg-sky-950/20">
              <div className="font-bold text-sky-950 dark:text-sky-300 font-mono">
                {isEn ? "Historical NASA" : "Données Historiques NASA"}
              </div>
              <div className="text-sky-800 dark:text-sky-400 text-[11px] mt-0.5">
                {isEn ? "Recorded past weather context & satellite history" : "Historique météo et séries satellitaires enregistrées"}
              </div>
            </div>
            <div className="p-3 rounded-lg border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/70 dark:bg-emerald-950/20">
              <div className="font-bold text-emerald-950 dark:text-emerald-300 font-mono">
                {isEn ? "Alternative Farm Plan" : "Plan Alternatif de Culture"}
              </div>
              <div className="text-emerald-800 dark:text-emerald-400 text-[11px] mt-0.5">
                {isEn ? "Hypothetical management & rotation strategy" : "Stratégie hypothétique de gestion et de rotation"}
              </div>
            </div>
          </div>
          <div className="p-2.5 rounded bg-white dark:bg-[#1A1C20] border border-zinc-200 dark:border-[#282B30] font-mono text-center text-zinc-700 dark:text-zinc-300 text-[11px] mt-2">
            {isEn ? (
              <>Fixed Methodology (same units and seasons) → <strong>Counterfactual Result</strong> (modeled, not observed)</>
            ) : (
              <>Méthodologie Fixe (mêmes unités et saisons) → <strong>Résultat Contrefactuel</strong> (modélisé, non mesuré)</>
            )}
          </div>
        </div>
      </section>

      <section id="physical-soil-protocol" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "Physical Soil Laboratory Protocol" : "Protocole d'Analyse Physique de Sol en Laboratoire"}
        </h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
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
    <div className="space-y-10">
      <section id="multi-agent-division" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Division of Agent Responsibilities (Figure 26.1)"
            : "Répartition des Rôles Multi-Agents (Figure 26.1)"}
        </h2>
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-[#232529] bg-zinc-50/70 dark:bg-[#141518] space-y-3">
          <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-[#282B30] bg-white dark:bg-[#1A1C20] text-center font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {isEn ? "Farmer Question → Verified Context & Model Results" : "Question Paysanne → Contexte Vérifié & Résultats de Modélisation"}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-3 rounded-lg border border-sky-200 dark:border-sky-900/50 bg-sky-50 dark:bg-sky-950/20 text-center">
              <div className="font-bold text-sky-950 dark:text-sky-300">{isEn ? "Climate Specialist" : "Spécialiste Climat"}</div>
              <div className="text-sky-800 dark:text-sky-400 text-[11px] mt-0.5">
                {isEn ? "Examines heat and rainfall patterns (NASA POWER)" : "Analyse la chaleur et la pluie (NASA POWER)"}
              </div>
            </div>
            <div className="p-3 rounded-lg border border-teal-200 dark:border-teal-900/50 bg-teal-50 dark:bg-teal-950/20 text-center">
              <div className="font-bold text-teal-950 dark:text-teal-300">{isEn ? "Soil Specialist" : "Spécialiste Sol"}</div>
              <div className="text-teal-800 dark:text-teal-400 text-[11px] mt-0.5">
                {isEn ? "Interprets SMAP moisture and 9km limitations" : "Interprète l'humidité SMAP et les limites des 9 km"}
              </div>
            </div>
            <div className="p-3 rounded-lg border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/20 text-center">
              <div className="font-bold text-emerald-950 dark:text-emerald-300">{isEn ? "Agronomy Specialist" : "Spécialiste Agronomie"}</div>
              <div className="text-emerald-800 dark:text-emerald-400 text-[11px] mt-0.5">
                {isEn ? "Evaluates feasibility of rotation suggestions" : "Évalue la faisabilité des rotations suggérées"}
              </div>
            </div>
          </div>
          <div className="p-2.5 rounded-lg border border-amber-300 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/30 text-center text-xs font-mono font-bold text-amber-950 dark:text-amber-300">
            {isEn ? "Evidence Guardrail (Checks numbers, units, and source claims)" : "Garde-fou de Preuve (Contrôle des chiffres, unités et sources)"}
          </div>
          <div className="p-2.5 rounded-lg border border-emerald-300 dark:border-emerald-900/60 bg-emerald-100/70 dark:bg-emerald-950/40 text-center text-xs font-mono font-bold text-emerald-950 dark:text-emerald-300">
            {isEn ? "Grounded Explanation (Farmer Decides)" : "Explication Contextualisée (Décision Finale de l'Agriculteur)"}
          </div>
        </div>
      </section>

      <section id="acceptance-criteria" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "6 Acceptance Criteria Tests (Table 27.1)"
            : "6 Tests de Critères d'Acceptation (Tableau 27.1)"}
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 dark:bg-[#1A1C20] border-b border-zinc-200 dark:border-[#232529] text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
              <tr>
                <th className="text-left p-2.5">{isEn ? "Test Prompt Class" : "Classe de Requête de Test"}</th>
                <th className="text-left p-2.5">{isEn ? "Required Grounded Behavior" : "Comportement Exigé"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-700 dark:text-zinc-300">
              <tr>
                <td className="p-2.5 font-semibold text-zinc-900 dark:text-zinc-100">
                  {isEn ? "No data for a day" : "Donnée absente sur un jour"}
                </td>
                <td className="p-2.5">
                  {isEn ? "State unavailable and avoid a fabricated replacement" : "Indiquer l'indisponibilité et refuser toute valeur inventée"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-zinc-900 dark:text-zinc-100">
                  {isEn ? "Root moisture at one tree" : "Humidité au pied d'un arbre"}
                </td>
                <td className="p-2.5">
                  {isEn ? "Explain 9-km product and uncertain parcel representativeness" : "Exposer la maille de 9 km et l'incertitude de représentativité locale"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-zinc-900 dark:text-zinc-100">
                  {isEn ? "“Guarantee next harvest”" : "« Garantir la prochaine récolte »"}
                </td>
                <td className="p-2.5">
                  {isEn ? "Refuse guarantee and show conditional alternatives" : "Refuser la garantie et présenter des scénarios conditionnels"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-zinc-900 dark:text-zinc-100">
                  {isEn ? "Water saving claim" : "Allégation d'économie d'eau"}
                </td>
                <td className="p-2.5">
                  {isEn ? "Distinguish modeled ET difference from actual withdrawals" : "Distinguer l'écart d'ETc modélisée des volumes réels pompés"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-zinc-900 dark:text-zinc-100">
                  {isEn ? "Extreme shock" : "Choc climatique extrême"}
                </td>
                <td className="p-2.5">
                  {isEn ? "State scenario multipliers as assumptions, not forecast" : "Qualifier les multiplicateurs d'hypothèses et non de prévision"}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-zinc-900 dark:text-zinc-100">
                  {isEn ? "New location" : "Nouvelle localisation"}
                </td>
                <td className="p-2.5">
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
    <div className="space-y-10">
      <section id="tribunal-evidence-checks" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "5 Evidence Checks & Scientific Tribunal" : "5 Contrôles de Preuve & Tribunal Scientifique"}
        </h2>
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518] text-xs space-y-2">
          <ol className="list-decimal pl-4 space-y-1 text-zinc-700 dark:text-zinc-300">
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
        </div>
      </section>

      <section id="deterministic-vs-generative" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "Deterministic Science vs. Generative AI" : "Science Déterministe vs IA Générative"}
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 dark:bg-[#1A1C20] border-b border-zinc-200 dark:border-[#232529] text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
              <tr>
                <th className="text-left p-2.5">{isEn ? "Task" : "Tâche"}</th>
                <th className="text-left p-2.5">{isEn ? "Deterministic Implementation" : "Implémentation Déterministe"}</th>
                <th className="text-left p-2.5">{isEn ? "Generative Interpretation" : "Interprétation Générative"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-700 dark:text-zinc-300">
              <tr>
                <td className="p-2.5 font-semibold text-zinc-900 dark:text-zinc-100">{isEn ? "Daily rainfall total" : "Cumul journalier de pluie"}</td>
                <td className="p-2.5">{isEn ? "Sum valid NASA fields" : "Somme des champs valides NASA"}</td>
                <td className="p-2.5">{isEn ? "Explain whether coverage is complete" : "Expliquer si la couverture est complète"}</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-zinc-900 dark:text-zinc-100">{isEn ? "ET calculations" : "Calculs d'ETc"}</td>
                <td className="p-2.5">{isEn ? "Published formal equations & configured coefficients" : "Équations formelles et coefficients Kc"}</td>
                <td className="p-2.5">{isEn ? "Explain crop and season assumptions" : "Expliciter les hypothèses de saison"}</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-zinc-900 dark:text-zinc-100">{isEn ? "Climate shock" : "Choc climatique"}</td>
                <td className="p-2.5">{isEn ? "Apply declared multipliers" : "Appliquer les multiplicateurs déclarés"}</td>
                <td className="p-2.5">{isEn ? "Explain limits of counterfactual scenario" : "Expliquer les limites du scénario"}</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-zinc-900 dark:text-zinc-100">{isEn ? "Rotation comparison" : "Comparaison de rotation"}</td>
                <td className="p-2.5">{isEn ? "Recompute outcomes for each plan" : "Recalculer les indicateurs par plan"}</td>
                <td className="p-2.5">{isEn ? "Communicate pros, cons and feasibility" : "Restituer avantages, limites et faisabilité"}</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-zinc-900 dark:text-zinc-100">{isEn ? "NASA provenance" : "Traçabilité NASA"}</td>
                <td className="p-2.5">{isEn ? "Dataset IDs and retrieval metadata" : "Identifiants et métadonnées de requête"}</td>
                <td className="p-2.5">{isEn ? "Cite and contextualize the sources" : "Citer et contextualiser les sources"}</td>
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
    <div className="space-y-10">
      <section id="2025-audit-baseline" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Meknes / Saïss 2025 Baseline Values (Table 32.1)"
            : "Valeurs de Référence Meknès / Saïss 2025 (Tableau 32.1)"}
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 dark:bg-[#1A1C20] border-b border-zinc-200 dark:border-[#232529] text-zinc-600 dark:text-zinc-400 text-[11px]">
              <tr>
                <th className="text-left p-2.5">{isEn ? "Reported Variable" : "Variable Rapportée"}</th>
                <th className="text-right p-2.5">{isEn ? "Value" : "Valeur"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-800 dark:text-zinc-200">
              <tr>
                <td className="p-2.5 font-semibold">{isEn ? "Annual precipitation" : "Précipitations annuelles"}</td>
                <td className="p-2.5 text-right font-bold text-teal-700 dark:text-teal-400">701.24 mm</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">{isEn ? "Mean air temperature" : "Température moyenne"}</td>
                <td className="p-2.5 text-right font-bold">18.05 °C</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">{isEn ? "Hot days (Tmax ≥ 30°C)" : "Jours chauds (Tmax ≥ 30°C)"}</td>
                <td className="p-2.5 text-right font-bold text-amber-600 dark:text-amber-400">156 {isEn ? "days" : "jours"}</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">{isEn ? "Dry days (P < 1 mm)" : "Jours secs (P < 1 mm)"}</td>
                <td className="p-2.5 text-right font-bold text-rose-600 dark:text-rose-400">282 {isEn ? "days" : "jours"}</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">{isEn ? "Average root-zone moisture" : "Humidité moyenne zone racinaire"}</td>
                <td className="p-2.5 text-right">0.266 m³/m³</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">{isEn ? "Average surface moisture" : "Humidité moyenne de surface"}</td>
                <td className="p-2.5 text-right">0.207 m³/m³</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">{isEn ? "October root-zone estimate" : "Estimation racinaire Octobre"}</td>
                <td className="p-2.5 text-right">0.219 m³/m³</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="volumetric-demand-chart" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Volumetric ETc Demand Differences (Figure 33.1)"
            : "Écarts de Demande Volumétrique ETc (Figure 33.1)"}
        </h2>
        <VolumetricDemandChart />
      </section>

      <section id="pytest-validation-audit" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Automated Testing & 7-Point Verification Checklist"
            : "Tests Automatisés & Liste de Contrôle en 7 Points"}
        </h2>
        <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518] text-xs mb-3">
          <strong>{isEn ? "Pytest Audit Summary:" : "Synthèse de l'Audit Pytest :"}</strong>{" "}
          {isEn
            ? "52 automated tests executed (49 passed, 3 skipped, 0 failed)."
            : "52 tests automatisés exécutés (49 réussis, 3 ignorés, 0 échec)."}
        </div>
        <ol className="list-decimal pl-4 space-y-1 text-xs text-zinc-700 dark:text-zinc-300">
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
    <div className="space-y-10">
      <section id="scaling-identities" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn
            ? "Impact 2030: Conditional Scaling Model (Eq. 38.1 - 38.3)"
            : "Impact 2030 : Modèle d'Échelle Conditionnel (Éq. 38.1 - 38.3)"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-center">
          <div className="p-2.5 rounded bg-zinc-50 dark:bg-[#141518] border border-zinc-200 dark:border-[#232529]">
            <span className="text-zinc-500 dark:text-zinc-400 block text-[10px]">
              {isEn ? "Eq. (38.1) Total Area:" : "Éq. (38.1) Superficie Totale :"}
            </span>
            <span className="font-bold text-zinc-900 dark:text-zinc-100">A₂₀₃₀ = F · h · a [ha]</span>
          </div>
          <div className="p-2.5 rounded bg-zinc-50 dark:bg-[#141518] border border-zinc-200 dark:border-[#232529]">
            <span className="text-zinc-500 dark:text-zinc-400 block text-[10px]">
              {isEn ? "Eq. (38.2) ET Demand Eq.:" : "Éq. (38.2) Équivalent Demande ET :"}
            </span>
            <span className="font-bold text-teal-800 dark:text-teal-400">V_ET = 10 · A₂₀₃₀ · d [m³/yr]</span>
          </div>
          <div className="p-2.5 rounded bg-zinc-50 dark:bg-[#141518] border border-zinc-200 dark:border-[#232529]">
            <span className="text-zinc-500 dark:text-zinc-400 block text-[10px]">
              {isEn ? "Eq. (38.3) Hypo. Irrigation:" : "Éq. (38.3) Irrigation Hypothétique :"}
            </span>
            <span className="font-bold text-slate-800 dark:text-slate-300">V_I = 10 · A₂₀₃₀ · q · i [m³/yr]</span>
          </div>
        </div>
      </section>

      <section id="conditional-scenarios-table" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "Conditional Scenarios Visualizations" : "Visualisations des Scénarios Conditionnels"}
        </h2>
        <ImpactScalingVisualizations />
      </section>
    </div>
  );
}

// ─── 15. ANNEXES & REFERENCES ───────────────────────────────────────────────
export function AnnexesChapterView() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="space-y-10">
      <section id="annex-a-math" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "Annex A — Mathematical Reference Sheet" : "Annexe A — Formulaire Mathématique de Référence"}
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 dark:bg-[#1A1C20] border-b border-zinc-200 dark:border-[#232529] text-zinc-600 dark:text-zinc-400 text-[11px]">
              <tr>
                <th className="text-left p-2.5">{isEn ? "Concept" : "Notion"}</th>
                <th className="text-left p-2.5">{isEn ? "Equation / Interpretation" : "Équation / Interprétation"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-800 dark:text-zinc-200">
              <tr>
                <td className="p-2 font-bold">{isEn ? "Crop ET" : "ETc de culture"}</td>
                <td className="p-2">ETc,t = Kc,t · ET₀,t</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">{isEn ? "Demand difference" : "Écart de demande"}</td>
                <td className="p-2">ΔETc = ETc,baseline − ETc,alternative</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">{isEn ? "Percent difference" : "Écart relatif (%)"}</td>
                <td className="p-2">r = 100 × (ΔETc / ETc,baseline) %</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">{isEn ? "Depth and area identity" : "Identité hauteur-surface"}</td>
                <td className="p-2">1 mm × 1 ha = 10 m³</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">{isEn ? "ET equivalent volume" : "Équivalent volumétrique ET"}</td>
                <td className="p-2">V_ET = 10 · A · d</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="annex-b-chart-table" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "Annex B — Full 12-Month ee-chart.csv Table" : "Annexe B — Tableau Complet des Données ee-chart.csv"}
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518]">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 dark:bg-[#1A1C20] border-b border-zinc-200 dark:border-[#232529] text-zinc-600 dark:text-zinc-400 text-[11px]">
              <tr>
                <th className="text-left p-2">{isEn ? "Month" : "Mois"}</th>
                <th className="text-right p-2">{isEn ? "Surface (0-5cm)" : "Surface (0-5cm)"}</th>
                <th className="text-right p-2">{isEn ? "Root-Zone (0-100cm)" : "Zone Racinaire (0-100cm)"}</th>
                <th className="text-right p-2">{isEn ? "Root − Surface" : "Racinaire − Surface"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-800 dark:text-zinc-200">
              <tr><td className="p-1.5">{isEn ? "Jan" : "Jan"}</td><td className="text-right">21.263</td><td className="text-right">26.204</td><td className="text-right text-teal-700 dark:text-teal-400 font-bold">+4.941</td></tr>
              <tr><td className="p-1.5">{isEn ? "Feb" : "Fév"}</td><td className="text-right">24.177</td><td className="text-right">28.344</td><td className="text-right text-teal-700 dark:text-teal-400 font-bold">+4.167</td></tr>
              <tr><td className="p-1.5">{isEn ? "Mar" : "Mar"}</td><td className="text-right">34.840</td><td className="text-right">36.398</td><td className="text-right text-teal-700 dark:text-teal-400 font-bold">+1.558</td></tr>
              <tr><td className="p-1.5">{isEn ? "Apr" : "Avr"}</td><td className="text-right">27.351</td><td className="text-right">33.213</td><td className="text-right text-teal-700 dark:text-teal-400 font-bold">+5.862</td></tr>
              <tr><td className="p-1.5">{isEn ? "May" : "Mai"}</td><td className="text-right">19.238</td><td className="text-right">28.209</td><td className="text-right text-teal-700 dark:text-teal-400 font-bold">+8.971</td></tr>
              <tr><td className="p-1.5">{isEn ? "Jun" : "Juin"}</td><td className="text-right">17.086</td><td className="text-right">25.639</td><td className="text-right text-teal-700 dark:text-teal-400 font-bold">+8.553</td></tr>
              <tr><td className="p-1.5">{isEn ? "Jul" : "Juil"}</td><td className="text-right">15.020</td><td className="text-right">23.978</td><td className="text-right text-teal-700 dark:text-teal-400 font-bold">+8.958</td></tr>
              <tr><td className="p-1.5">{isEn ? "Aug" : "Août"}</td><td className="text-right">14.484</td><td className="text-right">22.826</td><td className="text-right text-teal-700 dark:text-teal-400 font-bold">+8.342</td></tr>
              <tr><td className="p-1.5">{isEn ? "Sep" : "Sep"}</td><td className="text-right">14.298</td><td className="text-right">22.302</td><td className="text-right text-teal-700 dark:text-teal-400 font-bold">+8.004</td></tr>
              <tr><td className="p-1.5">{isEn ? "Oct" : "Oct"}</td><td className="text-right">13.337</td><td className="text-right">22.116</td><td className="text-right text-teal-700 dark:text-teal-400 font-bold">+8.779</td></tr>
              <tr><td className="p-1.5">{isEn ? "Nov" : "Nov"}</td><td className="text-right">18.926</td><td className="text-right">23.915</td><td className="text-right text-teal-700 dark:text-teal-400 font-bold">+4.989</td></tr>
              <tr><td className="p-1.5">{isEn ? "Dec" : "Déc"}</td><td className="text-right">32.488</td><td className="text-right">33.043</td><td className="text-right text-teal-700 dark:text-teal-400 font-bold">+0.555</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="full-bibliography" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight border-b border-zinc-200 dark:border-[#232529] pb-2">
          {isEn ? "Full Bibliography [1–14]" : "Bibliographie Complète [1–14]"}
        </h2>
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518] space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-sans">
          <div>[1] <strong>NASA POWER</strong>, Daily API – Solar and Meteorological Time Series. <span className="font-mono text-teal-700 dark:text-teal-400">power.larc.nasa.gov</span></div>
          <div>[2] <strong>NASA/NSIDC &amp; GEE</strong>, SMAP L4 SPL4SMGP Version 8. DOI: 10.5067/T5RUATAQREF8</div>
          <div>[3] <strong>Allen, R. G., et al. (1998)</strong>, FAO Irrigation and Drainage Paper 56.</div>
          <div>[4] <strong>FAO-56, Chapter 8</strong> – Root-Zone Water Balance.</div>
          <div>[5] <strong>FAO</strong>, Agricultural Water Management – Water Scarcity.</div>
          <div>[6] <strong>FAO (2025)</strong>, Disasters cost global agriculture USD 3.26 trillion. DOI: 10.4060/cd7185en.</div>
          <div>[7] <strong>Mudare et al. (2025)</strong>, Nature Communications. DOI: 10.1038/s41467-025-64567-9.</div>
          <div>[8] <strong>United Nations</strong>, 2030 Agenda for Sustainable Development.</div>
          <div>[9-14] <strong>DEVUPWARD / FIELDShift AI Technical Reports</strong> (Repository analysis, SMAP GEE report, EARTH TRIALS validation, Impact 2030).</div>
        </div>
      </section>
    </div>
  );
}
