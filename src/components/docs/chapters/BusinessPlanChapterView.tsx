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

        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn
            ? "Executive Summary & B2B2F Commercial Strategy"
            : "Résumé Exécutif & Stratégie Commerciale B2B2F"}
        </h2>

        <div className="border border-border/80 bg-muted/20 p-4 rounded-sm text-sm space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
            <Briefcase className="h-4 w-4 text-emerald-500" />
            <span>
              {isEn ? "Core Commercial Proposition" : "Proposition Commerciale Centrale"}
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {isEn ? (
              <>
                <strong className="text-foreground">Farmer Eye does not sell free satellite data; we sell decision clarity.</strong> The platform transforms open-access NASA Earth observations (NASA POWER meteorology and SMAP L4 soil moisture) into clear, actionable agronomic decisions: seasonal crop-rotation comparisons, climate-stress simulation, and voice explanations in local languages (Moroccan Darija and French).
              </>
            ) : (
              <>
                <strong className="text-foreground">Farmer Eye ne vend pas de données satellites gratuites ; nous vendons la clarté décisionnelle.</strong> La plateforme transforme les flux spatiaux ouverts de la NASA (météo NASA POWER et humidité du sol SMAP L4) en décisions agronomiques claires et actionnables : comparaison de rotations culturales, simulations de chocs climatiques et explications vocales en langues locales (Darija marocaine et Français).
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
            <span className="text-[10px] text-muted-foreground font-mono">150 F / 5 Coop</span>
          </div>

          <div className="p-3.5 rounded border border-border/70 bg-background text-left">
            <span className="text-[11px] font-mono text-muted-foreground uppercase block">
              {isEn ? "2030 Revenue" : "Revenu 2030"}
            </span>
            <div className="text-lg font-semibold text-foreground font-mono mt-1">3 176 000 MAD</div>
            <span className="text-[10px] text-muted-foreground font-mono">4 000 F / 120 Coop / 12 Inst</span>
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
              {isEn ? "Seed Funding" : "Levée Amorçage"}
            </span>
            <div className="text-lg font-semibold text-foreground font-mono mt-1">1 000 000 MAD</div>
            <span className="text-[10px] text-muted-foreground font-mono">{isEn ? "Product & Field Pilots" : "Produit & Pilotes Terrain"}</span>
          </div>
        </div>

        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn ? (
              <>
                <strong className="text-foreground">The B2B2F Distribution Model:</strong> Direct individual smallholder monetization in semi-arid developing regions faces steep friction (high customer acquisition cost, payment collection logistics, and digital skepticism). Farmer Eye circumvents this by partnering with <strong className="text-foreground">agricultural cooperatives and institutional extension services</strong> as trusted local aggregators (B2B2F). Once group trust and measurable seasonal value are established through cooperative advisors, individual farmers voluntarily upgrade to affordable Farmer Pro subscriptions (299 MAD/year).
              </>
            ) : (
              <>
                <strong className="text-foreground">Le Modèle de Distribution B2B2F :</strong> La monétisation directe auprès des petits exploitants isolés en zone semi-aride se heurte à des coûts d'acquisition prohibitifs, des freins de paiement et une méfiance naturelle. Farmer Eye contourne cet obstacle en s'appuyant sur les <strong className="text-foreground">coopératives agricoles et les services de vulgarisation</strong> comme relais de confiance (B2B2F). Une fois la valeur démontrée collectivement auprès des techniciens, les agriculteurs adhèrent individuellement à l'offre abordable Farmer Pro (299 MAD/an).
              </>
            )}
          </p>

          <div className="p-3 rounded border border-amber-500/30 bg-amber-500/5 text-xs font-mono space-y-1">
            <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-semibold">
              <AlertTriangle className="h-3.5 w-3.5" />
              <span>{isEn ? "Rigorous Planning Standard" : "Standard de Rigueur et Transparence"}</span>
            </div>
            <p className="text-muted-foreground font-sans text-xs">
              {isEn
                ? "The product is proven internally (verified source code and mathematical simulations). No commercial contracts or paying customers exist to date. All 2027–2030 projections are planning assumptions specifically structured to be audited and updated against empirical pilot results."
                : "Le produit est démontré en interne (code source vérifié et simulations mathématiques). Aucun contrat commercial ni revenu n'existe à ce jour. Toutes les projections 2027–2030 sont des hypothèses de travail destinées à être remplacées par les résultats des pilotes payants sur le terrain."}
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
            ? "Problem, Solution & Capability Matrix"
            : "Problématique, Solution & Matrice des Capacités"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 rounded-md border border-border/70 bg-background space-y-2">
            <span className="text-foreground font-bold uppercase block text-[11px]">{isEn ? "1. Water Under Stress" : "1. Ressource sous Pression"}</span>
            <p className="text-muted-foreground font-sans text-xs leading-relaxed">
              {isEn
                ? "Agriculture accounts for ~72% of global freshwater withdrawals (FAO). In Morocco and the Mediterranean, groundwater depletion and recurrent multi-year droughts threaten cereal sovereignty."
                : "L'agriculture représente ~72% des prélèvements mondiaux d'eau douce (FAO). Au Maroc et en Méditerranée, la baisse piézométrique des nappes et les sécheresses menacent la sécurité céréalière."}
            </p>
          </div>

          <div className="p-4 rounded-md border border-border/70 bg-background space-y-2">
            <span className="text-foreground font-bold uppercase block text-[11px]">{isEn ? "2. Connected but Unequipped" : "2. Connecté mais non Équipé"}</span>
            <p className="text-muted-foreground font-sans text-xs leading-relaxed">
              {isEn
                ? "78.4% of rural households have internet access (89.2% nationally, ANRT). Connectivity exists, but actionable decision tools tailored to smallholders are completely absent."
                : "78,4% des ménages ruraux ont accès à Internet (89,2% national, ANRT). La connectivité existe, mais les outils décisionnels vulgarisés manquent cruellement."}
            </p>
          </div>

          <div className="p-4 rounded-md border border-border/70 bg-background space-y-2">
            <span className="text-foreground font-bold uppercase block text-[11px]">{isEn ? "3. Adoption Barriers" : "3. Verrous d'Adoption"}</span>
            <p className="text-muted-foreground font-sans text-xs leading-relaxed">
              {isEn
                ? "High commercial station cost (>25k MAD), complex raw satellite charts, and literacy barriers. Solutions must be affordable, spoken in native language, and distributed via trusted cooperatives."
                : "Stations météo industrielles hors de prix (>25 000 MAD), graphiques complexes et barrière de la langue. Les solutions doivent être abordables et vulgarisées vocalement."}
            </p>
          </div>
        </div>

        {/* Capability Table */}
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground bg-muted/20">
              <tr>
                <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Platform Capability" : "Capacité Plateforme"}</th>
                <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Engineering Status" : "Statut d'Ingénierie"}</th>
                <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Direct Customer Value" : "Valeur Directe Client"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">NASA POWER Climate</td>
                <td className="py-2.5 px-3"><span className="text-emerald-600 dark:text-emerald-400 font-semibold">{isEn ? "Implemented" : "Implémenté"}</span></td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Atmospheric evaporative context and 40-year daily historical benchmark." : "Contexte évaporatif atmosphérique et benchmark historique sur 40 ans."}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">NASA SMAP L4 (SPL4SMGP)</td>
                <td className="py-2.5 px-3"><span className="text-emerald-600 dark:text-emerald-400 font-semibold">{isEn ? "Implemented" : "Implémenté"}</span></td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Continuous 9-km satellite surface and root-zone soil moisture assimilation." : "Assimilation satellitaire d'humidité racinaire et de surface à 9 km."}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">Crop Battle Lab</td>
                <td className="py-2.5 px-3"><span className="text-blue-600 dark:text-blue-400 font-semibold">{isEn ? "Run Internally" : "Exécuté en Interne"}</span></td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Objective numerical comparison of monoculture vs diversified crop rotations." : "Comparaison mathématique objective de la monoculture vs rotations diversifiées."}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">Climate Attack Lab</td>
                <td className="py-2.5 px-3"><span className="text-blue-600 dark:text-blue-400 font-semibold">{isEn ? "Run Internally" : "Exécuté en Interne"}</span></td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Stress-testing farm resilience against +2.5°C heatwaves and drought." : "Simulation de résilience face aux canicules (+2,5°C) et sécheresses sévères."}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">Super-Intelligence (SI) Engine</td>
                <td className="py-2.5 px-3"><span className="text-emerald-600 dark:text-emerald-400 font-semibold">{isEn ? "Internal Workflow" : "Flux Interne Validé"}</span></td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Translates complex physics into Darija/French without hallucinated figures." : "Traduction des bilans physiques en Darija/Français sans hallucinations."}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">ESP32 IoT Probes (Optional)</td>
                <td className="py-2.5 px-3"><span className="text-amber-600 dark:text-amber-400 font-semibold">{isEn ? "Hardware Bench Acquired" : "Matériel de Banc Acquis"}</span></td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "High-precision edge research direction; not commercialized in initial phase." : "Recherche de terrain haute précision ; non commercialisé en phase initiale."}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-3.5 rounded border border-border/80 bg-muted/10 text-xs font-mono space-y-1">
          <span className="font-semibold text-foreground">{isEn ? "Explicit Scientific Boundaries:" : "Limites Scientifiques Explicites :"}</span>
          <p className="text-muted-foreground font-sans text-xs leading-relaxed">
            {isEn
              ? "We do NOT promise: individual parcel-level moisture resolution from 9-km SMAP, guaranteed harvest yields, certified commercial water savings, or proprietary sensor dependency. Calculations are deterministic (FAO-56 physical formulation); the Super-Intelligence engine explains decisions but never fabricates raw data."
              : "Ce que nous NE promettons PAS : un suivi d'humidité à la parcelle individuelle depuis les mailles SMAP de 9 km, des rendements garantis, des économies certifiées ou la dépendance à des capteurs propriétaires. Les calculs sont déterministes (formulation biophysique FAO-56) ; la Super-Intelligence explique les bilans sans fabriquer de chiffres."}
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. TARGET CUSTOMERS & BOTTOM-UP SOM MARKET                         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="biz-market-customers" className="scroll-mt-20 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn
            ? "Target Customers & Bottom-Up Market (SOM)"
            : "Segments Clients & Marché Adressable (SOM)"}
        </h2>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground bg-muted/20">
              <tr>
                <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Segment" : "Segment"}</th>
                <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Core Need" : "Besoin Clé"}</th>
                <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Required Proof" : "Preuve Exigée"}</th>
                <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Price Sensitivity" : "Sensibilité Prix"}</th>
                <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Strategic Priority" : "Priorité"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">
                  <div className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> <span>{isEn ? "Smallholder Farmer" : "Petit Exploitant"}</span></div>
                </td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Simple crop rotation choice & irrigation timing" : "Choix simple de culture et calendrier d'irrigation"}</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Local pilot proof, extreme ease of use" : "Preuve sur parcelle voisine, facilité vocale"}</td>
                <td className="py-2.5 px-3 text-amber-600 dark:text-amber-400 font-semibold">{isEn ? "High" : "Élevée"}</td>
                <td className="py-2.5 px-3 font-mono">{isEn ? "Phase 2 (Post-pilot)" : "Phase 2 (Post-pilote)"}</td>
              </tr>
              <tr className="bg-emerald-500/5">
                <td className="py-2.5 px-3 font-semibold text-foreground">
                  <div className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5 text-emerald-500" /> <span className="text-emerald-700 dark:text-emerald-400">{isEn ? "Agricultural Cooperative" : "Coopérative Agricole"}</span></div>
                </td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Standardized advisory methodology for member farmers" : "Méthode de conseil standardisée pour les adhérents"}</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Seasonal multi-farm group trial" : "Pilote saisonnier groupé sur campagne"}</td>
                <td className="py-2.5 px-3 text-foreground font-semibold">{isEn ? "Medium" : "Moyenne"}</td>
                <td className="py-2.5 px-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">{isEn ? "INITIAL TARGET (Phase 1)" : "CIBLE INITIALE (Phase 1)"}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">
                  <div className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> <span>{isEn ? "Institution / NGO / ORMVA" : "Institution / ONG / ORMVA"}</span></div>
                </td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Regional aquifer monitoring & objective audit reports" : "Suivi régional de la nappe et bilans certifiés"}</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Standardized hydrological indicators" : "Indicateurs hydrologiques traçables"}</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Contract-dependent" : "Selon appel d'offres"}</td>
                <td className="py-2.5 px-3 font-mono">{isEn ? "Phase 2–3" : "Phase 2–3"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="border border-border/80 bg-muted/20 p-4 rounded-sm text-xs font-mono space-y-2">
          <div className="font-semibold text-foreground uppercase">{isEn ? "Bottom-Up SOM Estimation (Avoiding Inflated TAM):" : "Estimation SOM par le Bas (Refus d'un TAM Gonflé) :"}</div>
          <p className="text-muted-foreground font-sans leading-relaxed">
            {isEn
              ? "We deliberately avoid advertising an inflated, unrealistic global TAM. Our revenue forecast is built bottom-up from concrete operational conversions in the pilot zone: in 2027, 3,000 qualified farmer prospects at a 5% conversion rate yield 150 accounts (44,850 MAD); 50 targeted regional cooperatives at a 10% conversion rate yield 5 accounts (60,000 MAD), totaling 104,850 MAD. These conversion coefficients will be rigorously validated during pilot trials."
              : "Nous évitons volontairement d'afficher un TAM mondial théorique déconnecté de la réalité. Notre prévision est bâtie par le bas (bottom-up) à partir de taux de conversion opérationnels : en 2027, 3 000 prospects agriculteurs à 5% de conversion donnent 150 comptes (44 850 MAD) ; 50 coopératives ciblées à 10% de conversion donnent 5 comptes (60 000 MAD), soit 104 850 MAD au total. Ces taux seront vérifiés lors des pilotes."}
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. COMPETITIVE BENCHMARK                                           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="biz-competitive-analysis" className="scroll-mt-20 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn
            ? "Competitive Benchmark (OneSoil, EOSDA, CropX)"
            : "Analyse Concurrentielle (OneSoil, EOSDA, CropX)"}
        </h2>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground bg-muted/20">
              <tr>
                <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Competitor" : "Acteur"}</th>
                <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Public Offering & Model" : "Offre Publique & Modèle"}</th>
                <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Market Lesson & Farmer Eye Differentiation" : "Enseignement & Différenciation Farmer Eye"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">OneSoil [5]</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Field NDVI imagery, freemium + advanced custom layers." : "Imagerie parcellaire NDVI, offre freemium + options payantes."}</td>
                <td className="py-2.5 px-3 font-sans text-xs">
                  {isEn
                    ? "Expectation of zero upfront cost exists. Farmer Eye offers a genuine Free discovery tier with cost caps."
                    : "L'attente de gratuité initiale est forte. Farmer Eye intègre un forfait Découverte gratuit sans engagement."}
                </td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">EOSDA [6]</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Crop monitoring SaaS, cooperative & agronomist enterprise accounts." : "SaaS de suivi de culture, comptes coopératives et conseillers."}</td>
                <td className="py-2.5 px-3 font-sans text-xs">
                  {isEn
                    ? "Group institutional contracts are plausible and lucrative. Farmer Eye replicates this via cooperative packages."
                    : "Les contrats institutionnels groupés sont rentables. Farmer Eye calque son offre Coopérative sur ce format."}
                </td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">CropX [7]</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "In-situ capacitive soil hardware probes + farm management." : "Capteurs capacitifs de sol propriétaires in-situ + logiciel de gestion."}</td>
                <td className="py-2.5 px-3 font-sans text-xs">
                  {isEn
                    ? "Hardware deployment is capital-heavy and requires physical maintenance. Farmer Eye is software-first (space data)."
                    : "Le matériel propriétaire exige des capitaux élevés et de la maintenance. Farmer Eye est axé d'abord sur le logiciel."}
                </td>
              </tr>
              <tr className="bg-muted/30">
                <td className="py-2.5 px-3 font-bold text-foreground">Farmer Eye</td>
                <td className="py-2.5 px-3 font-sans text-xs text-foreground font-medium">
                  {isEn
                    ? "Crop rotation scenario comparisons + climate shock tests + multilingual spoken SI."
                    : "Comparaison de rotations + stress hydrique + Super-Intelligence vocale en langue locale."}
                </td>
                <td className="py-2.5 px-3 font-sans text-xs text-foreground">
                  {isEn
                    ? "Shifts from passive observation to actionable crop decisions; 100% transparent data origins; native Darija/French."
                    : "Passe de la simple observation au choix décisionnel ; transparence totale des sources NASA ; Darija et Français."}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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

        {/* 4 Plans Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-md border border-border/70 bg-background space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">{isEn ? "Tier 1 — Free" : "Niveau 1 — Gratuit"}</span>
            <div className="text-2xl font-bold font-mono text-foreground">0 MAD</div>
            <p className="text-xs text-muted-foreground font-sans">
              {isEn ? "Discovery tier, basic NASA POWER weather, limited summaries, cost caps." : "Accès découverte, météo NASA POWER de base, synthèses limitées, coûts bornés."}
            </p>
          </div>

          <div className="p-4 rounded-md border border-border/70 bg-background space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">{isEn ? "Tier 2 — Farmer Pro" : "Niveau 2 — Farmer Pro"}</span>
            <div className="text-2xl font-bold font-mono text-foreground">299 <span className="text-xs font-normal text-muted-foreground font-sans">{isEn ? "MAD/year" : "MAD/an"}</span></div>
            <p className="text-xs text-muted-foreground font-sans">
              {isEn ? "Seasonal crop comparisons, exportable irrigation plans, bounded SI audio assistance." : "Comparaisons saisonnières, exports de calendrier d'irrigation, assistance vocale bornée."}
            </p>
          </div>

          <div className="p-4 rounded-md border border-emerald-500/40 bg-emerald-500/5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">{isEn ? "Tier 3 — Cooperative" : "Niveau 3 — Coopérative"}</span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold">CORE</span>
            </div>
            <div className="text-2xl font-bold font-mono text-foreground">12 000 <span className="text-xs font-normal text-muted-foreground font-sans">{isEn ? "MAD/year" : "MAD/an"}</span></div>
            <p className="text-xs text-muted-foreground font-sans">
              {isEn ? "Multi-seat technician access, member batch reports, regional aquifer balance tracking." : "Accès d'équipe techniciens, rapports groupés pour adhérents, suivi du bassin hydrogéologique."}
            </p>
          </div>

          <div className="p-4 rounded-md border border-border/70 bg-background space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">{isEn ? "Tier 4 — Institution" : "Niveau 4 — Institution"}</span>
            <div className="text-2xl font-bold font-mono text-foreground">45 000 <span className="text-xs font-normal text-muted-foreground font-sans">{isEn ? "MAD/year" : "MAD/an"}</span></div>
            <p className="text-xs text-muted-foreground font-sans">
              {isEn ? "Large-scale regional monitoring, API access, custom parameter validation, dedicated SLA." : "Suivi régional à grande échelle, accès API, validation agronomique sur mesure, SLA dédié."}
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
              ? "Where F is the count of active paid Farmer Pro accounts, C is the count of active Cooperative subscriptions, and I is the count of Institutional accounts. Figures exclude VAT."
              : "Où F représente le nombre de comptes Farmer Pro actifs, C le nombre de coopératives abonnées, et I les comptes institutionnels. Chiffres hors TVA."}
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
                <td className="py-2.5 px-3">{isEn ? "Customers (Farmer / Coop / Inst)" : "Clients (Agriculteurs / Coop / Inst)"}</td>
                <td className="py-2.5 px-3 text-right">150 / 5 / 0</td>
                <td className="py-2.5 px-3 text-right">700 / 20 / 2</td>
                <td className="py-2.5 px-3 text-right">1 800 / 55 / 6</td>
                <td className="py-2.5 px-3 text-right font-bold text-foreground">4 000 / 120 / 12</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Gross Revenue" : "Chiffre d'Affaires Brut"}</td>
                <td className="py-2.5 px-3 text-right text-foreground">104 850</td>
                <td className="py-2.5 px-3 text-right text-foreground">539 300</td>
                <td className="py-2.5 px-3 text-right text-foreground">1 468 200</td>
                <td className="py-2.5 px-3 text-right font-bold text-foreground">3 176 000</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3">{isEn ? "Variable Costs (36 / 1.8k / 6k MAD/acct)" : "Coûts Variables (36 / 1 800 / 6 000 MAD)"}</td>
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
                <td className="py-2.5 px-3 text-foreground">{isEn ? "EBITDA" : "EBITDA"}</td>
                <td className="py-2.5 px-3 text-right text-destructive">-389 550</td>
                <td className="py-2.5 px-3 text-right text-destructive">-253 900</td>
                <td className="py-2.5 px-3 text-right text-emerald-600 dark:text-emerald-400">+218 400</td>
                <td className="py-2.5 px-3 text-right text-emerald-600 dark:text-emerald-400">+1 194 000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Visual Revenue Breakdown SVG Chart */}
        <div className="p-4 rounded-md border border-border/70 bg-background my-4">
          <div className="flex items-center justify-between mb-3 text-xs font-mono">
            <span className="font-semibold text-foreground">{isEn ? "Figure 1 — Revenue Trajectory by Customer Segment" : "Figure 1 — Trajectoire de Chiffre d'Affaires par Segment"}</span>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-blue-500 rounded-xs" /> {isEn ? "Individuals" : "Individuels"}</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-xs" /> {isEn ? "Cooperatives" : "Coopératives"}</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-purple-500 rounded-xs" /> {isEn ? "Institutions" : "Institutions"}</span>
            </div>
          </div>

          <svg viewBox="0 0 600 200" className="w-full h-auto text-xs font-mono select-none">
            {/* Grid lines */}
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

            {/* Bars for 2027, 2028, 2029, 2030 */}
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
                  {/* Individuals Bar (Blue) */}
                  <rect x={d.x} y={yInd} width="45" height={hInd} fill="#3b82f6" rx="1" />
                  {/* Cooperatives Bar (Emerald) */}
                  <rect x={d.x} y={yCoop} width="45" height={hCoop} fill="#10b981" rx="1" />
                  {/* Institutions Bar (Purple) */}
                  <rect x={d.x} y={yInst} width="45" height={hInst} fill="#a855f7" rx="1" />

                  {/* Total Label */}
                  <text x={d.x + 22.5} y={yInst - 6} fill={isDark ? "#f4f4f5" : "#18181b"} fontSize="9" fontWeight="600" textAnchor="middle">
                    {(d.total / 1000).toFixed(0)}k
                  </text>

                  {/* Year X Label */}
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
                <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Scenario / Sensitivity" : "Scénario / Sensibilité"}</th>
                <th className="py-2.5 px-3 text-right font-medium">2027 EBITDA</th>
                <th className="py-2.5 px-3 text-right font-medium">2028 EBITDA</th>
                <th className="py-2.5 px-3 text-right font-medium">2029 EBITDA</th>
                <th className="py-2.5 px-3 text-right font-medium">2030 EBITDA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Conservative (0.65× customer adoption)" : "Conservateur (0,65× adoption clients)"}</td>
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
                <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Ambitious (1.40× accelerated scale)" : "Ambitieux (1,40× accélération)"}</td>
                <td className="py-2.5 px-3 text-right text-destructive">-353 370</td>
                <td className="py-2.5 px-3 text-right text-destructive">-59 660</td>
                <td className="py-2.5 px-3 text-right text-emerald-600 dark:text-emerald-400 font-bold">+710 160</td>
                <td className="py-2.5 px-3 text-right text-emerald-600 dark:text-emerald-400 font-bold">+2 299 400</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-md border border-border/70 bg-background text-xs font-mono space-y-2">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>{isEn ? "Break-Even Point Calculation:" : "Calcul du Point Mort (Seuil de Rentabilité) :"}</span>
          </div>
          <p className="text-muted-foreground font-sans leading-relaxed">
            {isEn ? (
              <>
                Operational break-even is reached at <strong className="text-foreground">56.5% of the 2030 customer mix</strong> (1,550,000 / 2,744,000 contribution). The high contribution margin (~86%) is characteristic of software platforms utilizing open public Earth Observation constellations (NASA POWER / SMAP), with variable costs limited to cloud compute, SMS/audio notifications, and tier licensing.
              </>
            ) : (
              <>
                Le point mort opérationnel est franchi à <strong className="text-foreground">56,5% du mix client de 2030</strong> (1 550 000 / 2 744 000 de marge sur coûts variables). La marge sur coût variable élevée (~86%) est typique des plateformes logicielles exploitant les données ouvertes spatiales, les coûts unitaires se limitant aux serveurs, aux notifications audio et aux licences.
              </>
            )}
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 8. SEED FUNDING (1M MAD) & USE OF PROCEEDS                         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="biz-funding-use-of-proceeds" className="scroll-mt-20 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn
            ? "Seed Funding (1M MAD) & Use of Proceeds"
            : "Financement d'Amorçage (1M MAD) & Emploi des Fonds"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Table Use of Proceeds */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse font-mono text-xs">
              <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground bg-muted/20">
                <tr>
                  <th className="py-2.5 px-3 text-left font-medium">{isEn ? "Allocation Category" : "Poste d'Emploi des Fonds"}</th>
                  <th className="py-2.5 px-3 text-right font-medium">{isEn ? "Amount (MAD)" : "Montant (MAD)"}</th>
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
                  <td className="py-2 px-3 font-semibold text-foreground">{isEn ? "Field Validation & Agro-Partners" : "Validation Terrain & Partenaires"}</td>
                  <td className="py-2 px-3 text-right font-mono">220 000</td>
                  <td className="py-2 px-3 text-right font-mono">22%</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-foreground">{isEn ? "Customer Discovery & Acquisition" : "Découverte Clients & Acquisition"}</td>
                  <td className="py-2 px-3 text-right font-mono">160 000</td>
                  <td className="py-2 px-3 text-right font-mono">16%</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-foreground">{isEn ? "Commercial Data, Cloud & SI" : "Données Commerciales, Cloud & SI"}</td>
                  <td className="py-2 px-3 text-right font-mono">140 000</td>
                  <td className="py-2 px-3 text-right font-mono">14%</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-foreground">{isEn ? "Legal, CNDP Compliance & Contingency" : "Juridique, CNDP & Imprévus"}</td>
                  <td className="py-2 px-3 text-right font-mono">130 000</td>
                  <td className="py-2 px-3 text-right font-mono">13%</td>
                </tr>
                <tr className="border-t-2 border-border font-bold text-foreground">
                  <td className="py-2.5 px-3">{isEn ? "Total Seed Financing" : "Total Levée d'Amorçage"}</td>
                  <td className="py-2.5 px-3 text-right">1 000 000</td>
                  <td className="py-2.5 px-3 text-right">100%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cash Trajectory Note */}
          <div className="p-4 rounded-md border border-border/70 bg-background space-y-3 text-xs font-mono">
            <span className="font-semibold text-foreground uppercase block text-[11px]">{isEn ? "Cash Trajectory & Runway:" : "Trajectoire de Trésorerie & Runway :"}</span>
            <p className="text-muted-foreground font-sans leading-relaxed">
              {isEn ? (
                <>
                  Modeled with capital expenditures of <strong className="text-foreground">80k (2027), 100k (2028), 140k (2029), and 180k (2030) MAD</strong>. Year-end cash reaches a strategic low point of <strong className="text-foreground">176,550 MAD in 2028</strong> during initial pilot execution, before rising steadily to <strong className="text-foreground">1,268,950 MAD in 2030</strong> as recurring cooperative contracts scale.
                </>
              ) : (
                <>
                  Modélisé avec des investissements (Capex) de <strong className="text-foreground">80k (2027), 100k (2028), 140k (2029) et 180k (2030) MAD</strong>. La trésorerie de fin d'année atteint un point bas de <strong className="text-foreground">176 550 MAD en 2028</strong> durant la phase de pilotes, avant de remonter à <strong className="text-foreground">1 268 950 MAD en 2030</strong> grâce aux abonnements récurrents de coopératives.
                </>
              )}
            </p>
            <div className="p-2.5 rounded bg-muted/40 border border-border/60">
              <span className="text-[10px] text-muted-foreground">
                {isEn
                  ? "Conservative safety plan: If only 65% of customer targets materialize by 2028, hiring will be staged and secondary milestone tranches unlocked."
                  : "Plan de sécurité : Si seulement 65% des objectifs sont atteints en 2028, les recrutements seront différés et des tranches de financement d'étape débloquées."}
              </span>
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

        {/* 4 Phases Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3.5 rounded border border-border/70 bg-background space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-foreground uppercase">1. 2027 — Evidence</span>
            <p className="text-xs text-muted-foreground font-sans">
              {isEn ? "Saïss / Meknès-Fès pilots with partner cooperatives, usage logs, and real paid price tests." : "Pilotes dans le Saïss avec coopératives partenaires, logs d'usage et tests de prix réels."}
            </p>
          </div>

          <div className="p-3.5 rounded border border-border/70 bg-background space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-foreground uppercase">2. 2028 — Monetization</span>
            <p className="text-xs text-muted-foreground font-sans">
              {isEn ? "Replication with regional cooperatives, private agronomists, and agricultural extension services." : "Déploiement commercial auprès des coopératives, agronomes privés et conseillers."}
            </p>
          </div>

          <div className="p-3.5 rounded border border-border/70 bg-background space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-foreground uppercase">3. 2029 — Regional Scale</span>
            <p className="text-xs text-muted-foreground font-sans">
              {isEn ? "Expansion into new national agroclimatic basins following local crop coefficient calibration." : "Extension aux autres bassins agricoles nationaux après recalibrage des coefficients locaux."}
            </p>
          </div>

          <div className="p-3.5 rounded border border-border/70 bg-background space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-foreground uppercase">4. 2030 — Global Expansion</span>
            <p className="text-xs text-muted-foreground font-sans">
              {isEn ? "Selective cross-border partnerships across Mediterranean and semi-arid partner countries." : "Partenariats transfrontaliers sélectifs dans le bassin méditerranéen et pays semi-arides."}
            </p>
          </div>
        </div>

        {/* 5 Strict Decision Gates */}
        <div className="p-4 rounded-md border border-border/70 bg-muted/20 space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase text-foreground">
            <Lock className="h-4 w-4 text-emerald-500" />
            <span>{isEn ? "5 Mandatory Decision Gates Before Scaling:" : "5 Portes de Décision Obligatoires avant Accélération :"}</span>
          </div>

          <ol className="list-decimal pl-5 space-y-1.5 text-xs text-muted-foreground font-sans">
            <li>
              <strong className="text-foreground">{isEn ? "Customer Discovery:" : "Découverte Client :"}</strong>{" "}
              {isEn ? "30 farmer interviews and 10 cooperative / extension advisor interviews completed." : "30 entretiens agriculteurs et 10 entretiens coopératives / conseillers menés."}
            </li>
            <li>
              <strong className="text-foreground">{isEn ? "Supervised Trials:" : "Essais Supervisés :"}</strong>{" "}
              {isEn ? "At least 5 documented seasonal supervised pilots across cereal parcels." : "Au moins 5 pilotes saisonniers supervisés et documentés sur parcelles céréalières."}
            </li>
            <li>
              <strong className="text-foreground">{isEn ? "Paid Commitment:" : "Engagement Payant :"}</strong>{" "}
              {isEn ? "Minimum 3 signed paid pilot contracts or documented formal refusal reasons." : "Au minimum 3 contrats pilotes payants signés ou refus formellement documentés."}
            </li>
            <li>
              <strong className="text-foreground">{isEn ? "Multi-Season Retention:" : "Rétention Multi-Saisons :"}</strong>{" "}
              {isEn ? "Product retention measured across two consecutive agricultural seasons." : "Rétention mesurée sur deux campagnes agricoles consécutives."}
            </li>
            <li>
              <strong className="text-foreground">{isEn ? "Commercial Infrastructure:" : "Infrastructure Commerciale :"}</strong>{" "}
              {isEn ? "Commercial Earth Engine configuration formally approved before any billed automated processing." : "Configuration commerciale Earth Engine approuvée avant tout traitement facturé."}
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
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Conducted structured interviews and real annual payment trials before scaling marketing spend." : "Entretiens structurés et tests réels d'adhésion annuelle avant tout investissement publicitaire."}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Google Earth Engine Costs" : "Coûts Google Earth Engine"}</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Commercial use requires paid tier (from USD 500/month) [8,9]; budgeted and confirmed before commercial launch." : "L'usage commercial exige un forfait payant (dès 500 USD/mois) [8,9] ; budgété dans les coûts fixes."}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "NASA SMAP Scale Gap (9 km)" : "Écart d'Échelle SMAP (9 km)"}</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Never promise plot-level moisture; clearly explain 9-km satellite resolution as regional macro-context." : "Ne jamais promettre de mesure à la parcelle ; expliquer clairement la maille spatiale de 9 km."}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "AI Hallucinations / Errors" : "Erreurs ou Hallucinations de l'IA"}</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Deterministic FAO-56 biophysical calculations, verifiable data provenance, human verification firewall." : "Calculs biophysiques déterministes FAO-56 stricts, traçabilité des données, tribunal de vérification."}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Crop Model Transferability" : "Transférabilité des Modèles"}</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Region-specific crop calendars and FAO-56 coefficients validated with local agronomic research institutes." : "Calendriers culturaux et coefficients spécifiques validés avec les instituts agronomiques locaux."}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Personal Data & Compliance" : "Données Personnelles & Conformité"}</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Farmer consent, role-based access control, strict compliance with Moroccan Law 09-08 (CNDP) [12]." : "Consentement éclairé, contrôle d'accès strict, conformité totale à la loi marocaine 09-08 (CNDP) [12]."}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-foreground">{isEn ? "Working Capital Exhaustion" : "Tension sur le Fonds de Roulement"}</td>
                <td className="py-2.5 px-3 font-sans text-xs">{isEn ? "Rigorous monthly cash tracking, milestone-linked staged hiring, cost reduction contingency plan." : "Suivi rigoureux mensuel de la trésorerie, recrutements cadencés par jalons validés."}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 11. COMPLETE BUSINESS PLAN PDF DOSSIER DOWNLOAD                   */}
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
            <span>Issue Date: 15 November 2026</span>
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
