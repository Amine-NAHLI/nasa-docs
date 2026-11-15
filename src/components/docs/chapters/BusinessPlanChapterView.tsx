"use client";

import React, { useState } from "react";
import { useDocsContext } from "@/context/DocsContext";
import { EvidenceBadge } from "@/components/docs/EvidenceBadge";
import {
  FileText,
  Download,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Users,
  Briefcase,
  ChevronRight,
  ExternalLink,
  Layers,
  ArrowRight,
  Calendar,
  Lock,
  Cpu,
  BarChart3,
  Droplets,
  BookOpen,
  HelpCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ChapterViewProps {
  activeSubChapterId?: string;
}

function SubChapterContainer({
  activeSubChapterId,
  children,
  defaultSubId,
}: {
  activeSubChapterId?: string;
  children: React.ReactNode;
  defaultSubId?: string;
}) {
  const childArray = React.Children.toArray(children);
  if (activeSubChapterId) {
    const match = childArray.find(
      (c) => React.isValidElement(c) && (c.props as { id?: string }).id === activeSubChapterId
    );
    if (match) return <>{match}</>;
  }
  if (defaultSubId) {
    const defaultMatch = childArray.find(
      (c) => React.isValidElement(c) && (c.props as { id?: string }).id === defaultSubId
    );
    if (defaultMatch) return <>{defaultMatch}</>;
  }
  return <>{childArray[0]}</>;
}

export function BusinessPlanChapterView({ activeSubChapterId }: ChapterViewProps) {
  const { lang, theme } = useDocsContext();
  const isEn = lang === "en";
  const isDark = theme === "dark";

  const [activeScenario, setActiveScenario] = useState<"conservative" | "central" | "ambitious">("central");

  return (
    <div className="space-y-8">
      <SubChapterContainer activeSubChapterId={activeSubChapterId} defaultSubId="biz-executive-summary">
        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 1. EXECUTIVE SUMMARY & B2B2F STRATEGY                              */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-executive-summary" className="scroll-mt-20 space-y-6">
          <div className="flex items-center gap-2">
            <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="Business Plan 2027–2030" />
          </div>

          <div className="flex items-center justify-between flex-wrap gap-2 border-b border-border/60 pb-3">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {isEn
                  ? "Executive Summary & B2B2F Commercial Strategy"
                  : "Résumé Exécutif & Stratégie Commerciale B2B2F"}
              </h2>
              <div className="text-xs text-muted-foreground font-mono mt-0.5">
                DEVUPWARD – EARTH TRIALS | IMPACT 2030 · {isEn ? "Document Date: 15 November 2026" : "Date du Document : 15 Novembre 2026"}
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground bg-muted/30 px-2.5 py-1 rounded border border-border">
              <span>NASA Space Apps 2026</span>
              <span>·</span>
              <span>7 Pages Official Dossier</span>
            </div>
          </div>

          {/* Legal Disclaimer Box */}
          <div className="p-3 rounded border border-border/80 bg-muted/20 text-xs font-mono text-muted-foreground">
            <strong className="text-foreground">{isEn ? "Planning Scenario Notice: " : "Mention Légale Scénario de Planification : "}</strong>
            {isEn
              ? "No verified commercial revenue, customer contracts, or formal investment commitments exist to date. The use of NASA open satellite data does not imply NASA endorsement or sponsorship."
              : "Aucun revenu commercial vérifié, contrat client ou engagement formel d'investissement n'existe à ce jour. L'utilisation des données ouvertes de la NASA n'implique aucune approbation ni parrainage de la NASA."}
          </div>

          {/* Core Proposition Banner */}
          <div className="border border-border/80 bg-muted/10 p-4 rounded-sm text-sm space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
              <Briefcase className="h-4 w-4 text-emerald-500" />
              <span>
                {isEn ? "Core Commercial Proposition" : "Proposition Commerciale Centrale"}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {isEn ? (
                <>
                  <strong className="text-foreground">Farmer Eye does not sell free satellite data; we sell decision clarity.</strong> The platform transforms open-access NASA Earth observations (NASA POWER daily meteorology and SMAP L4 soil moisture) into actionable agronomic decisions: crop-rotation comparison, climate-stress simulation, and explanations in the local language (Moroccan Darija and French). Calculations are deterministic; Super-Intelligence is limited to explaining them without inventing figures.
                </>
              ) : (
                <>
                  <strong className="text-foreground">Farmer Eye ne vend pas de données satellites gratuites ; nous vendons la clarté décisionnelle.</strong> La plateforme transforme les flux spatiaux ouverts de la NASA (météorologie NASA POWER et humidité du sol SMAP L4) en décisions agronomiques claires et actionnables : comparaison de rotations culturales, simulations de chocs climatiques et explications en langue locale (Darija marocaine et Français). Les calculs sont déterministes ; la Super-Intelligence se limite à les expliquer sans fabriquer de chiffres.
                </>
              )}
            </p>
          </div>

          {/* 4 Key Financial Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
            <div className="p-3.5 rounded border border-border/70 bg-background text-left">
              <span className="text-[11px] font-mono text-muted-foreground uppercase block">
                {isEn ? "2027 Revenue" : "Revenu 2027"}
              </span>
              <div className="text-lg font-semibold text-foreground font-mono mt-1">104 850 MAD</div>
              <span className="text-[10px] text-muted-foreground font-mono">150 Farmers / 5 Coops</span>
            </div>

            <div className="p-3.5 rounded border border-border/70 bg-background text-left">
              <span className="text-[11px] font-mono text-muted-foreground uppercase block">
                {isEn ? "2030 Revenue" : "Revenu 2030"}
              </span>
              <div className="text-lg font-semibold text-foreground font-mono mt-1">3 176 000 MAD</div>
              <span className="text-[10px] text-muted-foreground font-mono">4 000 F / 120 C / 12 I</span>
            </div>

            <div className="p-3.5 rounded border border-border/70 bg-background text-left">
              <span className="text-[11px] font-mono text-muted-foreground uppercase block">
                {isEn ? "EBITDA Positive" : "EBITDA Positif"}
              </span>
              <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 font-mono mt-1">
                {isEn ? "From 2029" : "Dès 2029"}
              </div>
              <span className="text-[10px] text-muted-foreground font-mono">+218 400 MAD (2029)</span>
            </div>

            <div className="p-3.5 rounded border border-border/70 bg-background text-left">
              <span className="text-[11px] font-mono text-muted-foreground uppercase block">
                {isEn ? "Funding Target" : "Cible Amorçage"}
              </span>
              <div className="text-lg font-semibold text-foreground font-mono mt-1">1 000 000 MAD</div>
              <span className="text-[10px] text-muted-foreground font-mono">{isEn ? "Product & Field Pilots" : "Produit & Pilotes Terrain"}</span>
            </div>
          </div>

          <div className="space-y-4 text-[14px] leading-7 text-muted-foreground">
            <p>
              {isEn ? (
                <>
                  <strong className="text-foreground">The B2B2F Distribution Strategy:</strong> Facing growing pressure on agricultural water in Morocco and semi-arid regions, the project follows a B2B2F strategy (Business-to-Business-to-Farmer). We earn the trust of cooperatives and agricultural advisers first through structured collective trials, then offer affordable individual access once value is validated.
                </>
              ) : (
                <>
                  <strong className="text-foreground">La Stratégie de Distribution B2B2F :</strong> Face à la pression croissante sur l'eau agricole au Maroc, le projet adopte une stratégie B2B2F (Business-to-Business-to-Farmer). Nous gagnons d'abord la confiance des coopératives et conseillers agricoles à travers des essais groupés, puis proposons un accès individuel abordable une fois la valeur prouvée.
                </>
              )}
            </p>

            <div className="p-3.5 rounded border border-border/70 bg-muted/20 text-xs font-mono space-y-1.5">
              <div className="flex items-center gap-1.5 text-foreground font-semibold">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>{isEn ? "Central Hypothesis to be Empirically Audited:" : "Hypothèse Centrale à Tester sur le Terrain :"}</span>
              </div>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                {isEn
                  ? "« A cooperative will pay more reliably than an isolated farmer. » The product is demonstrated internally (code and physical simulations). All 2027–2030 figures are planning assumptions designed to be audited and updated against paid pilot results."
                  : "« Une coopérative paiera de manière plus fiable qu'un agriculteur isolé. » Le produit est démontré en interne (code et simulations). Tous les chiffres 2027–2030 sont des hypothèses de travail destinées à être remplacées par les résultats des pilotes payants."}
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 2. PROBLEM, SOLUTION & CAPABILITY MATRIX                           */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-problem-solution" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
            {isEn
              ? "The Problem, Solution & Capability Matrix"
              : "La Problématique, Solution & Matrice des Capacités"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-md border border-border/70 bg-background space-y-2">
              <span className="text-foreground font-bold uppercase block text-[11px]">
                {isEn ? "1. Resource Under Pressure" : "1. Ressource sous Pression"}
              </span>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                {isEn
                  ? "Agriculture accounts for about 72% of global freshwater withdrawals (FAO [1]). In Morocco, water scarcity and multi-year drought are critical strategic challenges (World Bank [2])."
                  : "L'agriculture représente environ 72% des prélèvements mondiaux d'eau douce (FAO [1]). Au Maroc, la pénurie hydrique et les sécheresses constituent des défis stratégiques (Banque Mondiale [2])."}
              </p>
            </div>

            <div className="p-4 rounded-md border border-border/70 bg-background space-y-2">
              <span className="text-foreground font-bold uppercase block text-[11px]">
                {isEn ? "2. Connected Audience" : "2. Public Connecté mais Dépassé"}
              </span>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                {isEn
                  ? "78.4% of rural households have internet access (89.2% nationally, ANRT [3]). However, this measures connectivity, not automatic willingness to pay for complex raw data."
                  : "78,4% des ménages ruraux ont accès à Internet (89,2% au niveau national, ANRT [3]). Cette donnée mesure l'accès, non la disposition à payer pour des données brutes complexes."}
              </p>
            </div>

            <div className="p-4 rounded-md border border-border/70 bg-background space-y-2">
              <span className="text-foreground font-bold uppercase block text-[11px]">
                {isEn ? "3. Adoption Barriers" : "3. Verrous Réels d'Adoption"}
              </span>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                {isEn
                  ? "Real barriers to adoption: cost, infrastructure, and institutional capacity (FAO [4]). A technically correct tool is not enough: it requires simple explanations, affordable plans, and trusted local intermediaries."
                  : "Barrières d'adoption réelles : coût, infrastructure et capacité institutionnelle (FAO [4]). Un outil techniquement juste ne suffit pas : il exige des explications simples, des forfaits abordables et des relais de confiance."}
              </p>
            </div>
          </div>

          {/* Capability Table */}
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse font-mono text-xs">
              <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground bg-muted/20">
                <tr>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Platform Capability" : "Capacité de la Plateforme"}</th>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Engineering Status" : "Statut d'Ingénierie"}</th>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Direct Customer Value" : "Valeur Client Directe"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">NASA POWER Daily Climate</td>
                  <td className="py-2.5 px-3"><span className="text-emerald-600 dark:text-emerald-400 font-semibold">{isEn ? "Implemented" : "Implémenté"}</span></td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Climate context and 40-year seasonal comparison." : "Contexte climatique et comparaison saisonnière sur 40 ans."}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">SMAP L4 via Earth Engine</td>
                  <td className="py-2.5 px-3"><span className="text-emerald-600 dark:text-emerald-400 font-semibold">{isEn ? "Implemented" : "Implémenté"}</span></td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Regional soil moisture assimilation (9 km grid)." : "Humidité du sol régionale assimilée (grille de 9 km)."}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">Crop Battle Lab</td>
                  <td className="py-2.5 px-3"><span className="text-blue-600 dark:text-blue-400 font-semibold">{isEn ? "Run Internally" : "Exécuté en Interne"}</span></td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Comparison of monoculture vs diversified crop rotations." : "Comparaison mathématique de rotations culturales vs monoculture."}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">Climate Attack Lab</td>
                  <td className="py-2.5 px-3"><span className="text-blue-600 dark:text-blue-400 font-semibold">{isEn ? "Run Internally" : "Exécuté en Interne"}</span></td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Drought, heatwave (+2.5°C) and delayed-rain tests." : "Tests de stress : canicules (+2,5°C), sécheresses et pluies tardives."}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">Super-Intelligence (SI) Engine</td>
                  <td className="py-2.5 px-3"><span className="text-emerald-600 dark:text-emerald-400 font-semibold">{isEn ? "Internal Workflow" : "Flux Interne"}</span></td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Results translated into plain Darija and French; SI invents no figures." : "Résultats traduits en langage clair (Darija/Français) ; l'IA n'invente aucun chiffre."}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">ESP32 Sensor Nodes (Optional)</td>
                  <td className="py-2.5 px-3"><span className="text-amber-600 dark:text-amber-400 font-semibold">{isEn ? "Hardware Acquired" : "Matériel Acquis"}</span></td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Research direction for edge ground truth; not commercialized." : "Piste de recherche au sol ; non commercialisé en phase initiale."}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded border border-border/80 bg-muted/20 text-xs font-mono space-y-1.5">
            <span className="font-semibold text-foreground uppercase">{isEn ? "Explicit Boundary Promises (What We Do NOT Promise):" : "Promesses et Limites Explicites (Ce que nous NE promettons PAS) :"}</span>
            <p className="text-muted-foreground font-sans text-xs leading-relaxed">
              {isEn
                ? "We do NOT promise: plot-scale moisture monitoring from 9-km SMAP, guaranteed harvest yields, certified commercial water savings, or scientific accreditation. Calculations are strictly deterministic (FAO-56 physical formulation); Super-Intelligence explains decisions, it does not produce them."
                : "Ce que nous NE promettons PAS : un suivi d'humidité à la parcelle depuis SMAP 9 km, des rendements garantis, des économies certifiées ou une certification scientifique. Les calculs sont strictement déterministes (formulation FAO-56) ; la Super-Intelligence explique les calculs, elle ne les produit pas."}
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 3. TARGET CUSTOMERS & BOTTOM-UP SOM MARKET                         */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-market-customers" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
            {isEn
              ? "Customers and Market (Bottom-Up SOM)"
              : "Clients et Marché (SOM Construit par le Bas)"}
          </h2>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse font-mono text-xs">
              <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground bg-muted/20">
                <tr>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Customer Segment" : "Segment Client"}</th>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Core Need" : "Besoin Clé"}</th>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Proof Required" : "Preuve Exigée"}</th>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Price Sensitivity" : "Sensibilité Prix"}</th>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Priority" : "Priorité"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">
                    <div className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> <span>{isEn ? "Smallholder Farmer" : "Agriculteur Individuel"}</span></div>
                  </td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Compare crops and rotations simply" : "Comparer simplement les cultures"}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Local pilot proof, extreme ease of use" : "Pilote local, simplicité d'usage"}</td>
                  <td className="py-2.5 px-3 text-amber-600 dark:text-amber-400 font-semibold">{isEn ? "High" : "Élevée"}</td>
                  <td className="py-2.5 px-3 font-mono">{isEn ? "Phase 2" : "Phase 2"}</td>
                </tr>
                <tr className="bg-emerald-500/5">
                  <td className="py-2.5 px-3 font-semibold text-foreground">
                    <div className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5 text-emerald-500" /> <span className="text-emerald-700 dark:text-emerald-400 font-bold">{isEn ? "Cooperative" : "Coopérative Agricole"}</span></div>
                  </td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Shared advisory method for member farmers" : "Méthode de conseil partagée pour adhérents"}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Seasonal multi-farm group trial" : "Pilote groupé sur une saison"}</td>
                  <td className="py-2.5 px-3 text-foreground font-semibold">{isEn ? "Medium" : "Moyenne"}</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">{isEn ? "Initial Target" : "Cible Initiale"}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">
                    <div className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> <span>{isEn ? "Institution / NGO / ORMVA" : "Institution / ONG / Bassin"}</span></div>
                  </td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Regional monitoring and hydrological reports" : "Suivi régional et rapports hydrogéologiques"}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Standardized monitoring indicators" : "Indicateurs de suivi standardisés"}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Contract-dependent" : "Selon contrat"}</td>
                  <td className="py-2.5 px-3 font-mono">{isEn ? "Phase 2–3" : "Phase 2–3"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Account Progression Table */}
          <div className="border border-border/80 bg-muted/20 p-4 rounded-sm text-xs font-mono space-y-3">
            <div className="font-semibold text-foreground uppercase">{isEn ? "Bottom-Up SOM Construction (Avoiding Inflated TAM):" : "Construction du Marché SOM par le Bas (Refus d'un TAM Gonflé) :"}</div>
            <p className="text-muted-foreground font-sans leading-relaxed">
              {isEn
                ? "No reliable paying-market figure exists to date for this exact product; we deliberately avoid advertising an inflated global TAM. Our forecast is a Serviceable Obtainable Market (SOM) planning hypothesis built strictly bottom-up:"
                : "Aucun chiffre fiable de marché payant n'existe à ce jour pour ce produit exact ; nous évitons délibérément d'afficher un TAM mondial gonflé. Notre prévision est une hypothèse de marché SOM construite rigoureusement par le bas :"}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="p-2.5 rounded bg-background border border-border">
                <span className="text-[10px] text-muted-foreground block">2027 Target</span>
                <span className="text-xs font-bold text-foreground">150 F / 5 C / 0 I</span>
                <span className="text-[10px] text-muted-foreground block mt-0.5">3 000 leads @ 5% · 50 coops @ 10%</span>
              </div>
              <div className="p-2.5 rounded bg-background border border-border">
                <span className="text-[10px] text-muted-foreground block">2028 Target</span>
                <span className="text-xs font-bold text-foreground">700 F / 20 C / 2 I</span>
                <span className="text-[10px] text-muted-foreground block mt-0.5">Coop replication & advisers</span>
              </div>
              <div className="p-2.5 rounded bg-background border border-border">
                <span className="text-[10px] text-muted-foreground block">2029 Target</span>
                <span className="text-xs font-bold text-foreground">1 800 F / 55 C / 6 I</span>
                <span className="text-[10px] text-muted-foreground block mt-0.5">Regional multi-basin scale</span>
              </div>
              <div className="p-2.5 rounded bg-background border border-border">
                <span className="text-[10px] text-muted-foreground block">2030 Target</span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">4 000 F / 120 C / 12 I</span>
                <span className="text-[10px] text-muted-foreground block mt-0.5">Full commercial maturity</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 4. COMPETITIVE BENCHMARK                                           */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-competitive-analysis" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
            {isEn
              ? "Competitive Analysis (OneSoil, EOSDA, CropX)"
              : "Analyse Concurrentielle (OneSoil, EOSDA, CropX)"}
          </h2>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse font-mono text-xs">
              <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground bg-muted/20">
                <tr>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Competitor" : "Acteur"}</th>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Public Offering" : "Offre Publique"}</th>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Market Lesson & Takeaway" : "Enseignement & Différenciation"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">OneSoil [5]</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Field imagery, free + advanced plans." : "Imagerie parcellaire, formule gratuite + forfaits avancés."}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">
                    {isEn
                      ? "Expectations of free initial access exist. Farmer Eye integrates a real Free discovery tier with cost caps."
                      : "L'attente d'un accès initial gratuit existe. Farmer Eye intègre une offre Découverte gratuite avec coûts bornés."}
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">EOSDA [6]</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Satellite monitoring, cooperative / adviser plans." : "Surveillance satellitaire, forfaits coopératives et conseillers."}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">
                    {isEn
                      ? "Institutional contracts are plausible and durable. Farmer Eye mirrors this with dedicated Cooperative accounts."
                      : "Les contrats institutionnels sont plausibles et durables. Farmer Eye calque son offre Coopérative sur ce format."}
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">CropX [7]</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Sensors + farm management platform." : "Capteurs capacitifs au sol + logiciel de gestion agricole."}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">
                    {isEn
                      ? "Hardware probes require heavy capital expenditure and physical maintenance. Farmer Eye is software-first."
                      : "Les capteurs matériels exigent des capitaux élevés et de la maintenance. Farmer Eye privilégie d'abord le logiciel."}
                  </td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="py-2.5 px-3 font-bold text-foreground">Farmer Eye</td>
                  <td className="py-2.5 px-3 font-sans text-xs text-foreground font-medium">
                    {isEn
                      ? "Crop-scenario comparison + stress tests + spoken explanations."
                      : "Comparaison de rotations + stress hydrique + explications vocales."}
                  </td>
                  <td className="py-2.5 px-3 font-sans text-xs text-foreground">
                    {isEn
                      ? "Differentiation: moving from passive observation to actionable crop choice; visible sources and units; Darija & French."
                      : "Différenciation : passage de l'observation passive au choix agronomique ; transparence totale ; Darija et Français."}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground font-sans leading-relaxed">
            {isEn
              ? "None of these features is a permanent advantage on its own: true moat will be built through cooperative partnerships, local agronomic calibration, and farmer trust."
              : "Aucun de ces atouts ne constitue un avantage permanent à lui seul : le véritable fossé concurrentiel sera bâti par les partenariats avec les coopératives, la rigueur agronomique locale et la confiance des agriculteurs."}
          </p>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 5. BUSINESS MODEL & 4-TIER PRICING GRID                            */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-pricing-model" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
            {isEn
              ? "Business Model & 4-Tier Pricing Grid"
              : "Modèle Économique & Grille Tarifaire à 4 Niveaux"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-md border border-border/70 bg-background space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">{isEn ? "Plan 1 — Free" : "Forfait 1 — Gratuit"}</span>
              <div className="text-2xl font-bold font-mono text-foreground">0 MAD</div>
              <p className="text-xs text-muted-foreground font-sans">
                {isEn ? "Discovery tier, basic NASA POWER weather, limited summaries, bounded compute caps." : "Découverte, météo NASA POWER de base, synthèses limitées, coûts bornés."}
              </p>
            </div>

            <div className="p-4 rounded-md border border-border/70 bg-background space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">{isEn ? "Plan 2 — Farmer Pro" : "Forfait 2 — Farmer Pro"}</span>
              <div className="text-2xl font-bold font-mono text-foreground">299 <span className="text-xs font-normal text-muted-foreground font-sans">{isEn ? "MAD/year" : "MAD/an"}</span></div>
              <p className="text-xs text-muted-foreground font-sans">
                {isEn ? "Seasonal crop comparisons, irrigation calendars, bounded Super-Intelligence audio guidance." : "Comparaisons saisonnières, calendriers d'irrigation, assistance vocale par IA bornée."}
              </p>
            </div>

            <div className="p-4 rounded-md border border-emerald-500/40 bg-emerald-500/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">{isEn ? "Plan 3 — Cooperative" : "Forfait 3 — Coopérative"}</span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold">INITIAL TARGET</span>
              </div>
              <div className="text-2xl font-bold font-mono text-foreground">12 000 <span className="text-xs font-normal text-muted-foreground font-sans">{isEn ? "MAD/year" : "MAD/an"}</span></div>
              <p className="text-xs text-muted-foreground font-sans">
                {isEn ? "Multi-seat team access, member batch PDF reports, collective irrigation tracking." : "Accès d'équipe multi-techniciens, rapports groupés pour adhérents, suivi collectif."}
              </p>
            </div>

            <div className="p-4 rounded-md border border-border/70 bg-background space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">{isEn ? "Plan 4 — Institution" : "Forfait 4 — Institution"}</span>
              <div className="text-2xl font-bold font-mono text-foreground">45 000 <span className="text-xs font-normal text-muted-foreground font-sans">{isEn ? "MAD/year" : "MAD/an"}</span></div>
              <p className="text-xs text-muted-foreground font-sans">
                {isEn ? "Multi-region hydrological monitoring, API access, customized parameters, agreed SLA support." : "Suivi multi-régions de bassin, accès API direct, paramètres personnalisés, support dédié."}
              </p>
            </div>
          </div>

          {/* Revenue Formula Box */}
          <div className="border border-border/70 bg-muted/20 p-4 rounded-md font-mono text-xs space-y-2">
            <div className="text-foreground font-semibold uppercase">{isEn ? "Annual Revenue Model Formula:" : "Formule du Modèle de Revenu Annuel :"}</div>
            <div className="text-sm font-bold text-foreground py-1">
              {"R = 299 · F + 12 000 · C + 45 000 · I"}
            </div>
            <p className="text-muted-foreground font-sans text-xs">
              {isEn
                ? "Where F is the count of active paid Farmer Pro accounts, C is the count of active Cooperative subscriptions, and I is the count of Institutional accounts. All prices are pilot test cells (excluding VAT), to be confirmed through field trials."
                : "Où F représente le nombre d'abonnés Farmer Pro, C le nombre de coopératives, et I les comptes institutionnels. Chiffres hors TVA, constituant des cellules de test pour les pilotes."}
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 6. FINANCIAL FORECAST (CENTRAL CASE 2027–2030)                     */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-financial-forecast" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
            {isEn
              ? "Financial Forecast (Central Operating Model 2027–2030)"
              : "Prévisions Financières (Cas Central d'Exploitation 2027–2030)"}
          </h2>

          {/* Table 1 Operating Model */}
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse font-mono text-xs">
              <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground bg-muted/20">
                <tr>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Metric (in MAD)" : "Indicateur (en MAD)"}</th>
                  <th className="py-2.5 px-3 text-right font-medium">2027</th>
                  <th className="py-2.5 px-3 text-right font-medium">2028</th>
                  <th className="py-2.5 px-3 text-right font-medium">2029</th>
                  <th className="py-2.5 px-3 text-right font-medium">2030</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr className="bg-muted/10 font-medium text-foreground">
                  <td className="py-2.5 px-3">{isEn ? "Farmer Pro / Cooperatives / Institutions" : "Farmer Pro / Coopératives / Institutions"}</td>
                  <td className="py-2.5 px-3 text-right">150 / 5 / 0</td>
                  <td className="py-2.5 px-3 text-right">700 / 20 / 2</td>
                  <td className="py-2.5 px-3 text-right">1 800 / 55 / 6</td>
                  <td className="py-2.5 px-3 text-right font-bold text-foreground">4 000 / 120 / 12</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Revenue (MAD)" : "Chiffre d'Affaires Brut (MAD)"}</td>
                  <td className="py-2.5 px-3 text-right text-foreground">104 850</td>
                  <td className="py-2.5 px-3 text-right text-foreground">539 300</td>
                  <td className="py-2.5 px-3 text-right text-foreground">1 468 200</td>
                  <td className="py-2.5 px-3 text-right font-bold text-foreground">3 176 000</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3">{isEn ? "Variable Costs (36 / 1 800 / 6 000 MAD/acct)" : "Coûts Variables (36 / 1 800 / 6 000 MAD/compte)"}</td>
                  <td className="py-2.5 px-3 text-right">14 400</td>
                  <td className="py-2.5 px-3 text-right">73 200</td>
                  <td className="py-2.5 px-3 text-right">199 800</td>
                  <td className="py-2.5 px-3 text-right">432 000</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3">{isEn ? "Fixed Costs (Salaries, Cloud, GEE, Audits)" : "Coûts Fixes (Salaires, Cloud, GEE, Audits)"}</td>
                  <td className="py-2.5 px-3 text-right">480 000</td>
                  <td className="py-2.5 px-3 text-right">720 000</td>
                  <td className="py-2.5 px-3 text-right">1 050 000</td>
                  <td className="py-2.5 px-3 text-right">1 550 000</td>
                </tr>
                <tr className="border-t-2 border-border font-bold">
                  <td className="py-2.5 px-3 text-foreground">{isEn ? "EBITDA (MAD)" : "EBITDA (MAD)"}</td>
                  <td className="py-2.5 px-3 text-right text-destructive">-389 550</td>
                  <td className="py-2.5 px-3 text-right text-destructive">-253 900</td>
                  <td className="py-2.5 px-3 text-right text-emerald-600 dark:text-emerald-400 font-bold">+218 400</td>
                  <td className="py-2.5 px-3 text-right text-emerald-600 dark:text-emerald-400 font-bold">+1 194 000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Detailed Unit Variable Costs Box */}
          <div className="p-4 rounded-md border border-border/70 bg-background text-xs font-mono space-y-2">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <DollarSign className="h-4 w-4 text-emerald-500" />
              <span>{isEn ? "Mathematical Verification of Assumed Unit Variable Costs:" : "Vérification Mathématique des Coûts Variables Unitaires :"}</span>
            </div>
            <p className="text-muted-foreground font-sans leading-relaxed text-xs">
              {isEn ? (
                <>
                  Variable costs per account are modeled as: <strong className="text-foreground">36 MAD</strong> per Farmer Pro (SMS/audio quota + server cycles), <strong className="text-foreground">1,800 MAD</strong> per Cooperative (batch processing + multi-seat storage), and <strong className="text-foreground">6,000 MAD</strong> per Institution (dedicated API SLA & heavy queries).
                  <br />
                  <span className="font-mono text-[11px] block mt-1">
                    • 2027: (150 × 36) + (5 × 1 800) = 5 400 + 9 000 = 14 400 MAD.
                    <br />
                    • 2028: (700 × 36) + (20 × 1 800) + (2 × 6 000) = 25 200 + 36 000 + 12 000 = 73 200 MAD.
                    <br />
                    • 2029: (1 800 × 36) + (55 × 1 800) + (6 × 6 000) = 64 800 + 99 000 + 36 000 = 199 800 MAD.
                    <br />
                    • 2030: (4 000 × 36) + (120 × 1 800) + (12 × 6 000) = 144 000 + 216 000 + 72 000 = 432 000 MAD.
                  </span>
                </>
              ) : (
                <>
                  Les coûts variables unitaires par compte sont modélisés à : <strong className="text-foreground">36 MAD</strong> par agriculteur (quotas SMS/audio + cycles serveurs), <strong className="text-foreground">1 800 MAD</strong> par coopérative (traitements par lots + stockage multi-comptes), et <strong className="text-foreground">6 000 MAD</strong> par institution (SLA dédié API et calculs intensifs).
                  <br />
                  <span className="font-mono text-[11px] block mt-1">
                    • 2027 : (150 × 36) + (5 × 1 800) = 5 400 + 9 000 = 14 400 MAD.
                    <br />
                    • 2028 : (700 × 36) + (20 × 1 800) + (2 × 6 000) = 25 200 + 36 000 + 12 000 = 73 200 MAD.
                    <br />
                    • 2029 : (1 800 × 36) + (55 × 1 800) + (6 × 6 000) = 64 800 + 99 000 + 36 000 = 199 800 MAD.
                    <br />
                    • 2030 : (4 000 × 36) + (120 × 1 800) + (12 × 6 000) = 144 000 + 216 000 + 72 000 = 432 000 MAD.
                  </span>
                </>
              )}
            </p>
          </div>

          {/* Visual Revenue Breakdown SVG Chart */}
          <div className="p-4 rounded-md border border-border/70 bg-background my-4">
            <div className="flex items-center justify-between mb-3 text-xs font-mono">
              <span className="font-semibold text-foreground">{isEn ? "Figure 1 — Modeled Revenue Trajectory by Segment (2027–2030)" : "Figure 1 — Trajectoire de Chiffre d'Affaires par Segment (2027–2030)"}</span>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-blue-500 rounded-xs" /> {isEn ? "Individuals" : "Individuels"}</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-xs" /> {isEn ? "Cooperatives" : "Coopératives"}</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-purple-500 rounded-xs" /> {isEn ? "Institutions" : "Institutions"}</span>
              </div>
            </div>

            <svg viewBox="0 0 600 200" className="w-full h-auto text-xs font-mono select-none">
              {[0, 1000000, 2000000, 3000000].map((val) => {
                const y = 170 - (val / 3200000) * 140;
                return (
                  <g key={val}>
                    <line x1="45" y1={y} x2="580" y2={y} stroke={isDark ? "#27272a" : "#f4f4f5"} strokeWidth="1" />
                    <text x="40" y={y + 3} fill={isDark ? "#71717a" : "#a1a1aa"} fontSize="9" textAnchor="end">
                      {(val / 1000000).toFixed(0)}M
                    </text>
                  </g>
                );
              })}

              {[
                { year: "2027", ind: 44850, coop: 60000, inst: 0, total: 104850, x: 90 },
                { year: "2028", ind: 209300, coop: 240000, inst: 90000, total: 539300, x: 220 },
                { year: "2029", ind: 538200, coop: 660000, inst: 270000, total: 1468200, x: 350 },
                { year: "2030", ind: 1196000, coop: 1440000, inst: 540000, total: 3176000, x: 480 },
              ].map((d) => {
                const scale = 140 / 3200000;
                const hInd = d.ind * scale;
                const hCoop = d.coop * scale;
                const hInst = d.inst * scale;

                const yInd = 170 - hInd;
                const yCoop = yInd - hCoop;
                const yInst = yCoop - hInst;

                return (
                  <g key={d.year}>
                    <rect x={d.x} y={yInd} width="45" height={hInd} fill="#3b82f6" rx="1" />
                    <rect x={d.x} y={yCoop} width="45" height={hCoop} fill="#10b981" rx="1" />
                    <rect x={d.x} y={yInst} width="45" height={hInst} fill="#a855f7" rx="1" />
                    <text x={d.x + 22.5} y={yInst - 6} fill={isDark ? "#f4f4f5" : "#18181b"} fontSize="9" fontWeight="600" textAnchor="middle">
                      {(d.total / 1000).toFixed(0)}k
                    </text>
                    <text x={d.x + 22.5} y="186" fill={isDark ? "#a1a1aa" : "#71717a"} fontSize="10" textAnchor="middle">
                      {d.year}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 7. STRESS SCENARIOS & BREAK-EVEN ANALYSIS                          */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-stress-scenarios" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
            {isEn
              ? "Stress Scenarios & Break-Even Analysis"
              : "Scénarios de Stress & Seuil de Rentabilité"}
          </h2>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse font-mono text-xs">
              <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground bg-muted/20">
                <tr>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "EBITDA Sensitivity (in MAD)" : "Sensibilité EBITDA (en MAD)"}</th>
                  <th className="py-2.5 px-3 text-right font-medium">2027</th>
                  <th className="py-2.5 px-3 text-right font-medium">2028</th>
                  <th className="py-2.5 px-3 text-right font-medium">2029</th>
                  <th className="py-2.5 px-3 text-right font-medium">2030</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Conservative (0.65× customers)" : "Conservateur (0,65× clients)"}</td>
                  <td className="py-2.5 px-3 text-right text-destructive">-423 626</td>
                  <td className="py-2.5 px-3 text-right text-destructive">-428 735</td>
                  <td className="py-2.5 px-3 text-right text-destructive">-219 090</td>
                  <td className="py-2.5 px-3 text-right text-emerald-600 dark:text-emerald-400 font-bold">+241 400</td>
                </tr>
                <tr className="bg-muted/10">
                  <td className="py-2.5 px-3 font-bold text-foreground">{isEn ? "Central Case (Base model)" : "Cas Central (Modèle de base)"}</td>
                  <td className="py-2.5 px-3 text-right text-destructive">-389 550</td>
                  <td className="py-2.5 px-3 text-right text-destructive">-253 900</td>
                  <td className="py-2.5 px-3 text-right text-emerald-600 dark:text-emerald-400 font-bold">+218 400</td>
                  <td className="py-2.5 px-3 text-right text-emerald-600 dark:text-emerald-400 font-bold">+1 194 000</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Ambitious (1.40× customers)" : "Ambitieux (1,40× clients)"}</td>
                  <td className="py-2.5 px-3 text-right text-destructive">-353 370</td>
                  <td className="py-2.5 px-3 text-right text-destructive">-59 660</td>
                  <td className="py-2.5 px-3 text-right text-emerald-600 dark:text-emerald-400 font-bold">+710 160</td>
                  <td className="py-2.5 px-3 text-right text-emerald-600 dark:text-emerald-400 font-bold">+2 299 400</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Break-Even Mathematical Derivation */}
          <div className="p-4 rounded-md border border-border/70 bg-background text-xs font-mono space-y-2">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>{isEn ? "Break-Even Point Exact Algebraic Derivation:" : "Démonstration Algébrique du Seuil de Rentabilité :"}</span>
            </div>
            <p className="text-muted-foreground font-sans leading-relaxed text-xs">
              {isEn ? (
                <>
                  In 2030, Gross Revenue is <strong className="text-foreground">3,176,000 MAD</strong> and Variable Costs are <strong className="text-foreground">432,000 MAD</strong>, yielding a total Contribution Margin of <strong className="text-foreground">2,744,000 MAD</strong> (~86.4% margin).
                  <br />
                  Fixed operating costs in 2030 equal <strong className="text-foreground">1,550,000 MAD</strong>.
                  <br />
                  <span className="font-mono text-xs py-1 text-foreground font-semibold block">
                    Break-Even Ratio = 1,550,000 MAD / 2,744,000 MAD ≈ 56.49% ≈ 56.5%
                  </span>
                  Therefore, break-even is reached as soon as <strong className="text-foreground">56.5% of the projected 2030 customer mix</strong> is achieved.
                </>
              ) : (
                <>
                  En 2030, le Chiffre d'Affaires Brut s'élève à <strong className="text-foreground">3 176 000 MAD</strong> et les Coûts Variables à <strong className="text-foreground">432 000 MAD</strong>, générant une Marge sur Coûts Variables de <strong className="text-foreground">2 744 000 MAD</strong> (marge de ~86,4%).
                  <br />
                  Les coûts fixes en 2030 s'établissent à <strong className="text-foreground">1 550 000 MAD</strong>.
                  <br />
                  <span className="font-mono text-xs py-1 text-foreground font-semibold block">
                    Ratio du Point Mort = 1 550 000 MAD / 2 744 000 MAD ≈ 56,49% ≈ 56,5%
                  </span>
                  Le point mort est ainsi franchi dès l'atteinte de <strong className="text-foreground">56,5% du mix client prévu en 2030</strong>.
                </>
              )}
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 8. SEED FUNDING (1M MAD), CAPEX & CASH RUNWAY                      */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-funding-use-of-proceeds" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
            {isEn
              ? "Seed Funding (1M MAD), Capex & Cash Runway"
              : "Financement d'Amorçage (1M MAD), Capex & Trésorerie"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Table Use of Proceeds */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse font-mono text-xs">
                <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground bg-muted/20">
                  <tr>
                    <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Use of Funds" : "Emploi des Fonds"}</th>
                    <th className="py-2.5 px-3 text-right font-medium">MAD</th>
                    <th className="py-2.5 px-3 text-right font-medium">%</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-muted-foreground">
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">{isEn ? "Engineering & Product Delivery" : "Ingénierie & Livraison Produit"}</td>
                    <td className="py-2 px-3 text-right font-mono">350 000</td>
                    <td className="py-2 px-3 text-right font-mono">35%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">{isEn ? "Field Validation & Agronomic Partners" : "Validation Terrain & Partenaires Agro"}</td>
                    <td className="py-2 px-3 text-right font-mono">220 000</td>
                    <td className="py-2 px-3 text-right font-mono">22%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">{isEn ? "Customer Discovery & Acquisition" : "Découverte Clients & Acquisition"}</td>
                    <td className="py-2 px-3 text-right font-mono">160 000</td>
                    <td className="py-2 px-3 text-right font-mono">16%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">{isEn ? "Commercial Data / Cloud & SI" : "Données Commerciales / Cloud & SI"}</td>
                    <td className="py-2 px-3 text-right font-mono">140 000</td>
                    <td className="py-2 px-3 text-right font-mono">14%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">{isEn ? "Legal, Compliance (CNDP) & Contingency" : "Juridique, Conformité CNDP & Imprévus"}</td>
                    <td className="py-2 px-3 text-right font-mono">130 000</td>
                    <td className="py-2 px-3 text-right font-mono">13%</td>
                  </tr>
                  <tr className="border-t-2 border-border font-bold text-foreground">
                    <td className="py-2.5 px-3">{isEn ? "Total Seed Financing" : "Total Levée Amorçage"}</td>
                    <td className="py-2.5 px-3 text-right">1 000 000</td>
                    <td className="py-2.5 px-3 text-right">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Cash Trajectory Note & Capex */}
            <div className="p-4 rounded-md border border-border/70 bg-background space-y-3 text-xs font-mono">
              <span className="font-semibold text-foreground uppercase block text-[11px]">{isEn ? "Cash Trajectory & Capital Expenditure:" : "Trajectoire de Trésorerie & Investissements :"}</span>
              <p className="text-muted-foreground font-sans leading-relaxed">
                {isEn ? (
                  <>
                    Modeled with annual capital expenditure (Capex) of <strong className="text-foreground">80,000 / 100,000 / 140,000 / 180,000 MAD</strong>. Year-end cash reaches a strategic low point of <strong className="text-foreground">176,550 MAD in 2028</strong> during initial pilot execution, then rises to <strong className="text-foreground">1,268,950 MAD in 2030</strong>.
                  </>
                ) : (
                  <>
                    Modélisé avec des investissements annuels (Capex) de <strong className="text-foreground">80 000 / 100 000 / 140 000 / 180 000 MAD</strong>. La trésorerie en fin d'année atteint un point bas de <strong className="text-foreground">176 550 MAD en 2028</strong> pendant la phase pilote, puis grimpe à <strong className="text-foreground">1 268 950 MAD en 2030</strong>.
                  </>
                )}
              </p>

              <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-400">
                <span className="font-semibold block text-[11px]">{isEn ? "Conservative Case Alert:" : "Alerte Scénario Conservateur :"}</span>
                <p className="font-sans text-xs mt-0.5">
                  {isEn
                    ? "With 65% of planned customers, seed financing would be exhausted around late 2028. We therefore plan for milestone-linked funding and a staged hiring contingency plan."
                    : "Avec 65% des clients prévus, ce financement s'épuiserait vers fin 2028. Nous prévoyons donc des déblocages par jalons et un plan de recrutement cadencé."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 9. GO-TO-MARKET ROADMAP & 5 DECISION GATES                         */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-gtm-roadmap" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
            {isEn
              ? "Go-To-Market Roadmap & 5 Decision Gates"
              : "Feuille de Route Go-To-Market & 5 Jalons Décisionnels"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded border border-border/70 bg-background space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-foreground uppercase">1. 2027 — Evidence</span>
              <p className="text-xs text-muted-foreground font-sans">
                {isEn ? "Saïss / Meknès-Fès pilots with cooperatives, usage logs, paid price tests." : "Pilotes dans le Saïss / Meknès-Fès avec coopératives, logs d'usage, tests de prix."}
              </p>
            </div>

            <div className="p-3.5 rounded border border-border/70 bg-background space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-foreground uppercase">2. 2028 — Monetization</span>
              <p className="text-xs text-muted-foreground font-sans">
                {isEn ? "Replication with cooperatives, private agronomists and extension partners." : "Réplication avec coopératives, agronomes privés et conseillers agricoles."}
              </p>
            </div>

            <div className="p-3.5 rounded border border-border/70 bg-background space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-foreground uppercase">3. 2029 — Regional Scale</span>
              <p className="text-xs text-muted-foreground font-sans">
                {isEn ? "New agroclimatic regions, after local agronomic parameter validation." : "Nouvelles régions agroclimatiques, après validation des paramètres locaux."}
              </p>
            </div>

            <div className="p-3.5 rounded border border-border/70 bg-background space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-foreground uppercase">4. 2030 — Selective Scale</span>
              <p className="text-xs text-muted-foreground font-sans">
                {isEn ? "Verified cross-border partnerships (language, licensing, local support)." : "Partenariats transfrontaliers vérifiés (langue, licences, support local)."}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-md border border-border/70 bg-muted/20 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase text-foreground">
              <Lock className="h-4 w-4 text-emerald-500" />
              <span>{isEn ? "5 Decision Gates Before Accelerating Capital Spend:" : "5 Jalons Décisionnels avant Accélération des Dépenses :"}</span>
            </div>

            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-muted-foreground font-sans">
              <li>
                <strong className="text-foreground">{isEn ? "Field Discovery:" : "Découverte Terrain :"}</strong>{" "}
                {isEn ? "30 farmer interviews and 10 cooperative / adviser interviews completed." : "30 entretiens agriculteurs et 10 entretiens coopératives / conseillers réalisés."}
              </li>
              <li>
                <strong className="text-foreground">{isEn ? "Supervised Trials:" : "Essais Supervisés :"}</strong>{" "}
                {isEn ? "5 documented supervised seasonal agricultural pilots." : "5 pilotes saisonniers supervisés et documentés sur parcelles réelles."}
              </li>
              <li>
                <strong className="text-foreground">{isEn ? "Paid Commitment:" : "Engagement Financier :"}</strong>{" "}
                {isEn ? "At least 3 paid pilot contracts or formally documented refusal rationales." : "Au moins 3 contrats pilotes payants signés ou refus formellement documentés."}
              </li>
              <li>
                <strong className="text-foreground">{isEn ? "Retention:" : "Rétention :"}</strong>{" "}
                {isEn ? "User retention measured across two consecutive agricultural seasons." : "Rétention mesurée sur deux campagnes agricoles consécutives."}
              </li>
              <li>
                <strong className="text-foreground">{isEn ? "Commercial Cloud:" : "Configuration Cloud Commerciale :"}</strong>{" "}
                {isEn ? "Commercial Google Earth Engine configuration formally approved before paid processing." : "Configuration commerciale Earth Engine approuvée avant tout traitement facturé."}
              </li>
            </ol>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 10. KEY RISKS & STRATEGIC MITIGATION MATRIX                       */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-risk-matrix" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
            {isEn
              ? "Key Risks & Strategic Mitigation Matrix"
              : "Matrice des Risques Majeurs & Mesures d'Atténuation"}
          </h2>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse font-mono text-xs">
              <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground bg-muted/20">
                <tr>
                  <th className="py-2.5 px-3 text-left font-medium w-1/4">{isEn ? "Identified Risk" : "Risque Identifié"}</th>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Operational Mitigation Strategy" : "Stratégie d'Atténuation Opérationnelle"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Unproven Willingness to Pay" : "Disposition à Payer Non Prouvée"}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Interviews and real annual-payment trials before any marketing scaling." : "Entretiens préalables et tests réels de paiement annuel avant tout déploiement."}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Google Earth Engine Costs" : "Coûts Google Earth Engine"}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Commercial use requires paid tier (from USD 500/month per official list) [8,9]; budgeted and confirmed before launch." : "L'usage commercial exige un forfait payant (dès 500 USD/mois selon barème officiel) [8,9] ; budgété avant le lancement."}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "SMAP Scale Gap (9 km)" : "Écart d'Échelle SMAP (9 km)"}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Never promise plot-level measurements; clearly explain the 9-km satellite resolution." : "Ne jamais promettre de mesures à la parcelle ; expliquer clairement la résolution de 9 km."}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "AI Hallucinations / Errors" : "Erreurs / Hallucinations de l'IA"}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Deterministic calculations (FAO-56), explicit data provenance, human verification firewall." : "Calculs déterministes (FAO-56), traçabilité stricte des données, contrôle humain."}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Crop Model Transferability" : "Transférabilité des Modèles"}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Region-specific crop calendars and coefficients, validated in the field with agronomic institutes." : "Calendriers et coefficients spécifiques à chaque région, validés sur le terrain."}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Personal Data & Compliance" : "Données Personnelles & CNDP"}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Farmer consent, role-based access, strict compliance with Moroccan Law 09-08 (CNDP) [12]." : "Consentement des agriculteurs, accès par rôles, conformité à la loi 09-08 (CNDP) [12]."}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Working Capital Exhaustion" : "Tension sur le Fonds de Roulement"}</td>
                  <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Rigorous monthly cash tracking, milestone-linked staged hiring, cost reduction plan." : "Suivi mensuel rigoureux de trésorerie, recrutements cadencés par jalons validés."}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 11. AGRONOMIC IMPACT & 934 m3/ha/yr WATER SAVINGS SCENARIO         */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-impact-water-scenario" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
            {isEn
              ? "Agronomic Impact & Water Savings Scenario (Meknès Model)"
              : "Impact Agronomique & Scénario d'Économie d'Eau (Modèle Meknès)"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-md border border-border/70 bg-background space-y-2">
              <span className="text-muted-foreground block text-[10px] uppercase">{isEn ? "Wheat Monoculture Demand" : "Demande Monoculture Blé"}</span>
              <div className="text-2xl font-bold font-mono text-destructive">455.8 <span className="text-xs font-normal text-muted-foreground">mm/{isEn ? "year" : "an"}</span></div>
              <p className="text-muted-foreground font-sans text-xs">
                {isEn ? "Baseline benchmark demand under continuous soft wheat cultivation in Saïss plain." : "Demande de référence pour du blé tendre en continu dans la plaine du Saïss."}
              </p>
            </div>

            <div className="p-4 rounded-md border border-border/70 bg-background space-y-2">
              <span className="text-muted-foreground block text-[10px] uppercase">{isEn ? "Diversified Rotation Demand" : "Demande Rotation Diversifiée"}</span>
              <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">362.4 <span className="text-xs font-normal text-muted-foreground">mm/{isEn ? "year" : "an"}</span></div>
              <p className="text-muted-foreground font-sans text-xs">
                {isEn ? "Optimized wheat–lentil–barley rotation demand reducing soil evaporative stress." : "Rotation optimisée blé–lentille–orge réduisant l'évaporation et le stress hydrique."}
              </p>
            </div>

            <div className="p-4 rounded-md border border-emerald-500/40 bg-emerald-500/5 space-y-2">
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold block text-[10px] uppercase">{isEn ? "Modeled Water Difference" : "Écart Modélisé"}</span>
              <div className="text-2xl font-bold font-mono text-foreground">93.4 <span className="text-xs font-normal text-muted-foreground">mm = 934 m³/ha</span></div>
              <p className="text-muted-foreground font-sans text-xs">
                {isEn ? "Modeled annual theoretical savings of 934 cubic meters of water per hectare." : "Économie théorique modélisée de 934 mètres cubes d'eau par hectare et par an."}
              </p>
            </div>
          </div>

          {/* Macro Extrapolation Card */}
          <div className="p-4 rounded-md border border-border/70 bg-muted/20 space-y-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Droplets className="h-4 w-4 text-blue-500" />
              <span>{isEn ? "Macro Scaling Extrapolation (Illustrative Scenario):" : "Extrapolation Macro à l'Échelle Régionale (Scénario Illustratif) :"}</span>
            </div>
            <p className="text-muted-foreground font-sans text-xs leading-relaxed">
              {isEn ? (
                <>
                  For illustration, <strong className="text-foreground">10,000 farmers × 5 ha average holding × 30% adoption rate</strong> represents <strong className="text-foreground">15,000 hectares</strong>.
                  <br />
                  If this modeled difference applied to the whole area:
                  <br />
                  <span className="font-mono text-xs py-1 text-foreground font-semibold block">
                    15,000 ha × 934 m³/ha/year = 14,010,000 m³/year (≈ 14.01 Million m³/year)
                  </span>
                </>
              ) : (
                <>
                  À titre illustratif, <strong className="text-foreground">10 000 agriculteurs × 5 ha moyens × 30% d'adoption</strong> représentent <strong className="text-foreground">15 000 hectares</strong>.
                  <br />
                  Si cet écart modélisé s'appliquait à l'ensemble de la superficie :
                  <br />
                  <span className="font-mono text-xs py-1 text-foreground font-semibold block">
                    15 000 ha × 934 m³/ha/an = 14 010 000 m³/an (≈ 14,01 Millions m³/an)
                  </span>
                </>
              )}
            </p>
          </div>

          {/* Strict Field Reality Check */}
          <div className="p-4 rounded-md border border-amber-500/30 bg-amber-500/5 text-xs font-mono space-y-2">
            <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-semibold">
              <AlertTriangle className="h-4 w-4" />
              <span>{isEn ? "Strict Scientific Reality Check & Verification Protocol:" : "Contrôle de Réalité Scientifique & Protocole de Vérification :"}</span>
            </div>
            <p className="text-muted-foreground font-sans text-xs leading-relaxed">
              {isEn ? (
                <>
                  This is a <strong className="text-foreground">modeled difference</strong>, not an irrigation saving measured on real farm meters, and it is NOT transferable to another agroclimatic zone without local empirical calibration. It is a planning scenario independent of the sales forecast.
                  <br />
                  During pilot execution, DEVUPWARD will specifically measure:
                  <br />
                  1. <strong className="text-foreground">Decision comprehension:</strong> Do farmers understand rotation benefits in spoken Darija?
                  <br />
                  2. <strong className="text-foreground">Real adoption:</strong> Do participating farmers actually change cropping rotations?
                  <br />
                  3. <strong className="text-foreground">Metered irrigation withdrawals:</strong> Auditing physical water pump meters against satellite simulations.
                  <br />
                  4. <strong className="text-foreground">Economic net farm margin:</strong> Ensuring farmer profitability is strictly preserved.
                </>
              ) : (
                <>
                  Il s'agit d'un <strong className="text-foreground">écart modélisé</strong>, et non d'une économie d'eau mesurée sur compteurs d'irrigation, et il N'EST PAS transférable à une autre zone sans calibration locale. Il s'agit d'un scénario indépendant des prévisions de vente.
                  <br />
                  Durant les pilotes, DEVUPWARD mesurera concrètement :
                  <br />
                  1. <strong className="text-foreground">La compréhension :</strong> Les agriculteurs saisissent-ils les bilans en Darija vocale ?
                  <br />
                  2. <strong className="text-foreground">L'adoption réelle :</strong> Les parcelles changent-elles effectivement de rotation ?
                  <br />
                  3. <strong className="text-foreground">Les prélèvements mesurés :</strong> Relevés sur compteurs physiques d'irrigation.
                  <br />
                  4. <strong className="text-foreground">La marge économique nette :</strong> Vérification de la rentabilité financière des exploitants.
                </>
              )}
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 12. CONCLUSION, ACTION PLAN & 13 OFFICIAL SOURCES                  */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-conclusion-sources" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
            {isEn
              ? "Conclusion, Pilot Action Plan & Official Sources [1–13]"
              : "Conclusion, Plan d'Action Pilote & 13 Sources Officielles [1–13]"}
          </h2>

          <div className="border border-border/80 bg-muted/20 p-4 rounded-sm text-sm space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>{isEn ? "Commercial Synthesis & Perspective" : "Synthèse Commerciale & Perspectives"}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-xs font-sans">
              {isEn ? (
                <>
                  The context is highly favorable (water urgency, high rural smartphone penetration), but monetization remains to be proven. Farmer Eye already possesses a solid technical base; it now requires paid pilots, locally validated agronomy, a compliant commercial Google Earth Engine configuration, and measured unit costs. Launching first with cooperatives is substantially more credible than promising universal individual adoption from day one. The 2029 break-even is a planning target, not an unfounded guarantee.
                </>
              ) : (
                <>
                  Le contexte est très favorable (urgence hydrique, forte pénétration du smartphone en milieu rural), mais la monétisation reste à prouver. Farmer Eye dispose d'une base technique solide ; il a désormais besoin de pilotes payants, d'une agronomie validée localement, d'une configuration Google Earth Engine commerciale conforme et de coûts unitaires mesurés. Démarrer auprès des coopératives est bien plus crédible que de promettre une adoption universelle dès le premier jour. Le point mort en 2029 est un résultat de planification, non une garantie sans fondement.
                </>
              )}
            </p>
            <div className="pt-2 border-t border-border/60 text-xs font-mono text-foreground font-medium">
              <strong className="text-emerald-600 dark:text-emerald-400">{isEn ? "Immediate Next Action: " : "Prochaine Action Immédiate : "}</strong>
              {isEn
                ? "Document supervised pilot evidence with cooperatives before committing to any long-term infrastructure spend."
                : "Documenter les preuves de pilotes supervisés avec des coopératives avant tout engagement d'infrastructure à long terme."}
            </div>
          </div>

          {/* 13 Official Sources Table */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-foreground">
              <BookOpen className="h-4 w-4 text-emerald-500" />
              <span>{isEn ? "Official Bibliography Citations [1–13]:" : "Références Bibliographiques Officielles [1–13] :"}</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse font-mono text-xs">
                <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground bg-muted/20">
                  <tr>
                    <th className="py-2 px-3 text-left font-medium w-12">#</th>
                    <th className="py-2 px-3 text-left font-medium w-40">{isEn ? "Organization / Author" : "Organisme / Auteur"}</th>
                    <th className="py-2 px-3 text-left font-medium">{isEn ? "Document Title & Scope" : "Titre du Document & Portée"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-muted-foreground text-xs">
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[1]</td>
                    <td className="py-2 px-3 font-medium text-foreground">FAO</td>
                    <td className="py-2 px-3 font-sans">Water scarcity and agricultural water management worldwide.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[2]</td>
                    <td className="py-2 px-3 font-medium text-foreground">World Bank</td>
                    <td className="py-2 px-3 font-sans">Morocco Country Climate and Development Report (CCDR).</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[3]</td>
                    <td className="py-2 px-3 font-medium text-foreground">ANRT Morocco</td>
                    <td className="py-2 px-3 font-sans">Enquête annuelle sur l'accès et les usages des TIC par les ménages au Maroc.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[4]</td>
                    <td className="py-2 px-3 font-medium text-foreground">FAO</td>
                    <td className="py-2 px-3 font-sans">Digital agricultural extension: challenges and opportunities in developing regions.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[5]</td>
                    <td className="py-2 px-3 font-medium text-foreground">OneSoil</td>
                    <td className="py-2 px-3 font-sans">Product overview, NDVI field mapping, and freemium subscription model.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[6]</td>
                    <td className="py-2 px-3 font-medium text-foreground">EOSDA</td>
                    <td className="py-2 px-3 font-sans">Crop Monitoring platform, cooperative and agronomist account tiers.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[7]</td>
                    <td className="py-2 px-3 font-medium text-foreground">CropX</td>
                    <td className="py-2 px-3 font-sans">CropX soil hardware probe system, irrigation management, and vendor claims.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[8]</td>
                    <td className="py-2 px-3 font-medium text-foreground">Google</td>
                    <td className="py-2 px-3 font-sans">Google Earth Engine: policies and guidelines for transition to commercial use.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[9]</td>
                    <td className="py-2 px-3 font-medium text-foreground">Google Cloud</td>
                    <td className="py-2 px-3 font-sans">Earth Engine commercial pricing schedule (standard tier starting at USD 500/month).</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[10]</td>
                    <td className="py-2 px-3 font-medium text-foreground">NASA POWER</td>
                    <td className="py-2 px-3 font-sans">Prediction of Worldwide Energy Resources: Daily Agroclimatology API.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[11]</td>
                    <td className="py-2 px-3 font-medium text-foreground">Earth Engine Catalog</td>
                    <td className="py-2 px-3 font-sans">NASA-USDA SMAP Global Soil Moisture Data (SPL4SMGP V008, 9-km grid).</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[12]</td>
                    <td className="py-2 px-3 font-medium text-foreground">CNDP Morocco</td>
                    <td className="py-2 px-3 font-sans">Loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-foreground">[13]</td>
                    <td className="py-2 px-3 font-medium text-foreground">DEVUPWARD</td>
                    <td className="py-2 px-3 font-sans">Internal Farmer Eye / EARTH TRIALS technical documentation and simulated Meknès runs, Nov 2026.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 13. COMPLETE BUSINESS PLAN PDF DOSSIER DOWNLOAD                    */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <section id="biz-download-pdf" className="scroll-mt-20 pt-4">
          <div className="p-6 rounded-lg border-2 border-border/80 bg-muted/30 shadow-xs space-y-5">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-emerald-500" />
                  <h3 className="text-base font-semibold text-foreground tracking-tight">
                    {isEn
                      ? "Complete Business Plan PDF Dossier (2027–2030)"
                      : "Dossier Complet du Plan d'Affaires PDF (2027–2030)"}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground font-sans max-w-xl leading-relaxed">
                  {isEn
                    ? "Download the official 7-page technical and financial business plan document, containing the complete operating model, stress cases, market assumptions, unit economics, and bibliography."
                    : "Téléchargez le document officiel de 7 pages du plan d'affaires technique et financier, incluant le compte d'exploitation prévisionnel, les scénarios de stress, le modèle unitaire et la bibliographie."}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                <span className="px-2 py-0.5 rounded bg-background border border-border">7 Pages</span>
                <span className="px-2 py-0.5 rounded bg-background border border-border">~280 KB</span>
                <span className="px-2 py-0.5 rounded bg-background border border-border">DEVUPWARD</span>
              </div>
            </div>

            {/* Download Buttons Section */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Primary Download Button for Current Language */}
              <a
                href={isEn ? "/buisnessEn.pdf" : "/buisnessFr.pdf"}
                download={isEn ? "Farmer-Eye-Business-Plan-2027-2030-EN.pdf" : "Farmer-Eye-Plan-Affaires-2027-2030-FR.pdf"}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background font-medium text-xs font-mono hover:bg-foreground/90 transition-all shadow-sm cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>
                  {isEn
                    ? "Download Business Plan (PDF - English)"
                    : "Télécharger le Plan d'Affaires (PDF - Français)"}
                </span>
              </a>

              {/* Secondary Alternative Language Link */}
              <a
                href={isEn ? "/buisnessFr.pdf" : "/buisnessEn.pdf"}
                download={isEn ? "Farmer-Eye-Plan-Affaires-2027-2030-FR.pdf" : "Farmer-Eye-Business-Plan-2027-2030-EN.pdf"}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-border/80 bg-background text-foreground text-xs font-mono hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                <span>
                  {isEn
                    ? "Also available: French Version (PDF)"
                    : "Également disponible : Version Anglaise (PDF)"}
                </span>
              </a>
            </div>

            <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground/80 flex items-center justify-between flex-wrap gap-2">
              <span>
                {isEn
                  ? "Official Submission Document · NASA Space Apps Challenge 2026"
                  : "Document Officiel de Soumission · NASA Space Apps Challenge 2026"}
              </span>
              <span>DEVUPWARD · 15 November 2026</span>
            </div>
          </div>
        </section>
      </SubChapterContainer>

      {/* Persistent Quick Download Bar at the bottom of the page for every sub-chapter */}
      {activeSubChapterId !== "biz-download-pdf" && (
        <div className="p-4 rounded-lg border border-border/80 bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-background border border-border text-emerald-500">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-foreground">
                {isEn ? "Full Business Plan PDF (2027–2030)" : "Plan d'Affaires Complet en PDF (2027–2030)"}
              </div>
              <div className="text-[11px] text-muted-foreground font-mono">
                {isEn ? "7 pages · Full financial tables & unit economics" : "7 pages · Tableaux financiers & modèle économique complet"}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={isEn ? "/buisnessEn.pdf" : "/buisnessFr.pdf"}
              download={isEn ? "Farmer-Eye-Business-Plan-2027-2030-EN.pdf" : "Farmer-Eye-Plan-Affaires-2027-2030-FR.pdf"}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-foreground text-background font-medium text-xs font-mono hover:bg-foreground/90 transition-all cursor-pointer shadow-xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{isEn ? "Download PDF" : "Télécharger PDF"}</span>
            </a>
            <a
              href={isEn ? "/buisnessFr.pdf" : "/buisnessEn.pdf"}
              download={isEn ? "Farmer-Eye-Plan-Affaires-2027-2030-FR.pdf" : "Farmer-Eye-Business-Plan-2027-2030-EN.pdf"}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/80 bg-background text-foreground text-xs font-mono hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <span>{isEn ? "FR Version" : "Version EN"}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
