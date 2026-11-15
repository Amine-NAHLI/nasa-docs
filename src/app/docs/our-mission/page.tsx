"use client";

import React from "react";
import Link from "next/link";
import { TableOfContents, TocItem } from "@/components/layout/TableOfContents";
import { DocsBreadcrumb } from "@/components/docs/DocsBreadcrumb";
import { Callout } from "@/components/docs/Callout";
import { ScientificNote } from "@/components/docs/ScientificNote";
import { SourceReference } from "@/components/docs/SourceReference";
import { TechExplanation } from "@/components/docs/TechExplanation";
import { ExplainerVideo } from "@/components/media/ExplainerVideo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Eye,
  UserCheck,
  Users,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

export default function OurMissionPage() {
  const tocItems: TocItem[] = [
    { id: "what-is-farmer-eye", title: "1. What is Farmer Eye?", level: 2 },
    { id: "why-we-created-it", title: "2. Why We Created It", level: 2 },
    { id: "global-challenge", title: "3. The Global Agricultural Challenge", level: 2 },
    { id: "second-eyes-philosophy", title: "4. 'The Farmer's Second Eyes'", level: 2 },
    { id: "mission-briefing-video", title: "5. Mission Briefing Video", level: 2 },
    { id: "role-of-nasa-observations", title: "6. The Role of NASA Data (POWER & SMAP)", level: 2 },
    { id: "role-of-scientific-modeling", title: "7. The Role of Agricultural Modeling", level: 2 },
    { id: "role-of-ai", title: "8. The Role of Artificial Intelligence", level: 2 },
    { id: "human-agency", title: "9. Why the Farmer Remains in Control", level: 2 },
    { id: "scientific-integrity", title: "10. Current Status, Simulations & Limitations", level: 2 },
    { id: "impact-2030-vision", title: "11. The Impact 2030 Vision", level: 2 },
    { id: "devupward-team", title: "12. The DEVUPWARD Team", level: 2 },
  ];

  return (
    <div className="flex justify-between gap-8">
      {/* Main Article Content */}
      <article className="flex-1 min-w-0 max-w-3xl">
        <div className="mb-6 md:hidden">
          <DocsBreadcrumb
            items={[{ label: "Getting Started", href: "/docs" }, { label: "Our Mission" }]}
          />
        </div>

        {/* Article Header */}
        <div className="space-y-4 pb-8 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="turquoise">01. Getting Started</Badge>
            <Badge variant="gold">Scientific Manifesto</Badge>
            <span className="text-xs font-mono text-slate-500">Doc ID: FE-DOC-012</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-mono tracking-tight leading-tight">
            Our Mission: Empowering Human Agricultural Judgment
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed font-sans">
            How Farmer Eye fuses planetary NASA climate and soil observations, biophysical crop water modeling, and grounded artificial intelligence to give farmers an indispensable second perspective in an era of climate volatility.
          </p>
        </div>

        {/* 1. What is Farmer Eye? */}
        <section id="what-is-farmer-eye" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            1. What is Farmer Eye?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            <strong>Farmer Eye</strong> is an open-architecture agricultural decision-support system conceptualized and built independently by <strong>DEVUPWARD</strong> under the <strong>EARTH TRIALS | IMPACT 2030</strong> initiative for the <strong>NASA Space Apps Challenge</strong>.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The platform bridges the gap between orbit and soil. It ingests calibrated meteorological feeds and soil moisture measurements from NASA open science programs, processes them through biophysical agricultural models, and translates the synthesis into clear, accessible recommendations for farmers and agronomists.
          </p>

          <Callout type="note" title="Universal Applicability & Demonstration Context">
            To ground mathematical models in realistic conditions, Farmer Eye utilizes an illustrative simulation scenario based on the Saïss Plain (Meknes, Morocco). However, the underlying architecture is universally transferable across global semi-arid, temperate, and sub-tropical agricultural basins.
          </Callout>
        </section>

        {/* 2. Why We Created It */}
        <section id="why-we-created-it" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            2. Why We Created It
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Agriculture is human civilization&apos;s foundational industry, yet it is currently the most exposed to rapid climatic destabilization. For generations, farming knowledge was transmitted through inherited experience: when the rains historically arrived, how the soil felt between fingers, and subtle shifts in seasonal winds.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Today, that generational compass is breaking down. Unpredictable thermal spikes, prolonged precipitation droughts, and depleted groundwater basins create environmental conditions that no single lifetime of experience could have anticipated. We created Farmer Eye to provide farmers with a macro-lens—an objective, scientifically grounded instrument to navigate uncertainty without guessing.
          </p>
        </section>

        {/* 3. The Global Agricultural Challenge */}
        <section id="global-challenge" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            3. The Global Agricultural Challenge
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Three severe pressures intersect across vulnerable agricultural landscapes today:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-2">
              <span className="text-xs font-mono font-bold text-teal-400 uppercase block">
                01. Extreme Drought
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rainfed and irrigated farming face longer meteorological dry spells, lowering reservoir reserves and compressing viable planting windows.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-300 uppercase block">
                02. Aquifer Depletion
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Groundwater tables in intensive farming basins drop meters annually due to unoptimized irrigation timing and over-pumping.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase block">
                03. Information Divide
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                While commercial enterprises afford costly private sensor meshes, family smallholders lack simple access to planetary climate telemetry.
              </p>
            </div>
          </div>
        </section>

        {/* 4. The Farmer's Second Eyes */}
        <section id="second-eyes-philosophy" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            4. What &ldquo;The Farmer&apos;s Second Eyes&rdquo; Means
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Our official slogan, <em className="text-teal-300">&ldquo;The Farmer&apos;s Second Eyes,&rdquo;</em> encapsulates the core design thesis of the platform:
          </p>

          <div className="p-5 rounded-xl border border-teal-500/30 bg-teal-950/20 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-teal-400 text-slate-950">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-white text-base">
                First Eyes vs. Second Eyes
              </h3>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              <strong>The First Eyes</strong> are the farmer&apos;s own eyes on the ground: the physical feel of topsoil, leaf texture, root inspection, and intimate familiarity with every contour of the field. This can never be replaced by software.
            </p>
            <p className="text-sm text-slate-200 leading-relaxed">
              <strong>The Second Eyes</strong> are the planetary and mathematical perspectives provided by Farmer Eye: continuous solar radiation tracking, root-zone moisture percentiles from spaceborne microwave radar, reference evapotranspiration balances, and weather trend synthesis.
            </p>
          </div>

          <p className="text-slate-300 leading-relaxed">
            By uniting both perspectives, the farmer gains complete environmental visibility before moisture deficits degrade crop yields.
          </p>
        </section>

        {/* 5. Mission Briefing Video */}
        <section id="mission-briefing-video" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            5. Mission Briefing Video
          </h2>
          <p className="text-slate-300 leading-relaxed">
            An overview of the scientific motivation and architectural framework of the Farmer Eye initiative:
          </p>

          <ExplainerVideo id="our-mission-explainer" className="my-6 max-w-2xl mx-auto" />
        </section>

        {/* 6. Role of NASA Earth Observations */}
        <section id="role-of-nasa-observations" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            6. The Role of NASA Data: POWER & SMAP
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Farmer Eye relies on publicly available, open-science datasets provided by NASA Earth science programs:
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/50 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-100 text-sm">NASA POWER (Prediction Of Worldwide Energy Resources)</span>
                <span className="text-[10px] font-mono text-teal-400 px-2 py-0.5 rounded bg-slate-800">Global Meteorological Grid</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Provides continuous daily parameters including surface solar radiation, 2-meter air temperature (min/max), relative humidity, precipitation, and wind speed. These parameters serve as the physical foundation for reference evapotranspiration modeling.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/50 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-100 text-sm">NASA SMAP (Soil Moisture Active Passive)</span>
                <span className="text-[10px] font-mono text-teal-400 px-2 py-0.5 rounded bg-slate-800">L-Band Microwave Radar/Radiometer</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Delivers surface (0–5 cm) and root-zone (0–100 cm) volumetric soil moisture estimates. By utilizing microwave wavelengths that penetrate clouds and light vegetation cover, SMAP offers consistent, weather-independent soil moisture trends.
              </p>
            </div>
          </div>

          <Callout type="info" title="Future Sensor Integration Roadmap (Phase 2)">
            In subsequent development phases, Farmer Eye plans to explore incorporating high-resolution optical imagery (such as Landsat and Sentinel-2 for parcel-level vegetation indices) and thermal infrared data (such as ECOSTRESS for canopy temperature stress). These sensors represent roadmap goals and are not implemented in Phase 1.
          </Callout>

          <SourceReference
            citation="NASA Prediction Of Worldwide Energy Resources (POWER) Project"
            source="NASA Langley Research Center"
            year="2026"
            href="https://power.larc.nasa.gov/"
          />
        </section>

        {/* 7. Role of Scientific Agricultural Modeling */}
        <section id="role-of-scientific-modeling" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            7. The Role of Agricultural Biophysical Modeling
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Raw meteorological numbers alone do not tell a farmer when to irrigate. Farmer Eye integrates physical equations to calculate crop water demand and track root-zone depletion.
          </p>

          <ScientificNote
            sourceName="Biophysical Modeling Engine"
            satelliteMission="NASA POWER Meteorological Ingestion"
            formula="ET0 = [0.408Δ(Rn - G) + γ(900/(T + 273))u2(es - ea)] / [Δ + γ(1 + 0.34u2)]"
          >
            Farmer Eye implements the internationally accepted FAO-56 Penman-Monteith equation. By combining solar net radiation (Rn), air temperature (T), wind speed (u2), and vapor pressure deficit (es - ea), the engine calculates reference evapotranspiration (ET0). Crop coefficients (Kc) can then scale this baseline to estimate crop water requirements (ETc = Kc * ET0).
          </ScientificNote>

          <TechExplanation summary="Root-Zone Soil-Water Balance Depletion">
            <p className="mb-2">
              Soil moisture depletion (Dr) is tracked according to standard water balance principles:
            </p>
            <div className="p-2 rounded bg-slate-900 font-mono text-xs text-amber-300 mb-2">
              Dr,i = Dr,i-1 - (P_i - RO_i) - I_i + ETc,i + DP_i
            </div>
            <p className="text-xs text-slate-400">
              Where Dr,i is root-zone depletion at the end of day i, P is rainfall, RO is surface runoff, I is net irrigation, ETc is crop evapotranspiration, and DP is deep percolation loss. Combining this theoretical balance with NASA SMAP root-zone observations provides a robust estimate of irrigation urgency.
            </p>
          </TechExplanation>
        </section>

        {/* 8. Role of AI */}
        <section id="role-of-ai" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            8. The Role of Artificial Intelligence
          </h2>
          <p className="text-slate-300 leading-relaxed">
            AI in Farmer Eye is strictly grounded in biophysical parameters. We reject speculative generation or unverified claims. Our AI models perform three concrete interpretation tasks:
          </p>

          <div className="space-y-3 pt-1">
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-1">
              <span className="text-xs font-mono font-bold text-teal-400 block">
                Task A: Multi-Parameter Stress Evaluation
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Evaluating atmospheric vapor pressure deficit alongside SMAP root-zone moisture percentiles to determine whether crops are currently entering water-deficit conditions.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-1">
              <span className="text-xs font-mono font-bold text-teal-400 block">
                Task B: Weather Forecast Tradeoff Analysis
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Comparing short-term precipitation probabilities against daily evapotranspiration rates to help growers evaluate whether to irrigate immediately or delay to conserve reservoir water.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-1">
              <span className="text-xs font-mono font-bold text-teal-400 block">
                Task C: Plain-Language Scientific Synthesis
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Translating physical differential equations and moisture percentiles into clear, respectful, plain-language summaries that can be reviewed in under 60 seconds on a mobile screen.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Human Agency */}
        <section id="human-agency" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            9. Why the Farmer Remains the Decision-Maker
          </h2>
          <p className="text-slate-300 leading-relaxed">
            In modern AgriTech, there is a dangerous temptation to promise total automation: automated irrigation valves triggering without human oversight and algorithms dictating farm operations.
          </p>

          <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-950/20 space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
              <UserCheck className="h-5 w-5" />
              <span>Our Foundational Principle: Human Stewardship</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              No satellite or algorithm understands local economic constraints, micro-topography, market contracts, or family priorities as well as the grower who lives on the land.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Farmer Eye is designed explicitly as a <strong>Decision-Support System</strong>. It provides transparent data, confidence indicators, and scenario simulations. It never overrides human agency. The farmer remains the commander in the field.
            </p>
          </div>
        </section>

        {/* 10. Current Status, Simulations & Limitations */}
        <section id="scientific-integrity" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            10. Current Functionality, Simulations & Limitations
          </h2>
          <p className="text-slate-300 leading-relaxed">
            In keeping with scientific integrity, we clearly outline what is active, what is simulated, and current project constraints:
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-950/20 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 font-bold">
                <ShieldCheck className="h-4 w-4" />
                <span>CURRENT FUNCTIONALITY (PHASE 1)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ingestion of NASA POWER meteorological datasets, NASA SMAP soil moisture percentiles, FAO-56 Penman-Monteith reference evapotranspiration modeling, and rule-grounded AI advisory text generation.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                <AlertTriangle className="h-4 w-4" />
                <span>DEMONSTRATION SIMULATIONS & LIMITATIONS</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                The Saïss Plain (Meknes) case study represents an illustrative simulation scenario to test mathematical behavior under semi-arid conditions. SMAP data operates at coarse regional resolution (~9–36 km), which captures broad root-zone trends rather than sub-meter parcel variations. We do not claim implemented field-level ground-truth validation or in-situ sensor networks at this stage.
              </p>
            </div>
          </div>
        </section>

        {/* 11. The Impact 2030 Vision */}
        <section id="impact-2030-vision" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            11. Our Future-Oriented Impact 2030 Vision
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Under the <strong>EARTH TRIALS | IMPACT 2030</strong> initiative, our roadmap looks ahead to the next decade of agricultural adaptation:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-1.5">
              <span className="text-xs font-mono font-bold text-teal-400 uppercase">
                Goal 1: Open Global Access
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ensuring smallholders in emerging economies have free access to calibrated NASA Earth observation insights without costly commercial paywalls.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-1.5">
              <span className="text-xs font-mono font-bold text-teal-400 uppercase">
                Goal 2: Groundwater Preservation
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Empowering communities to reduce unnecessary deficit pumping, preserving shared aquifers across drought-prone basins.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-1.5">
              <span className="text-xs font-mono font-bold text-amber-300 uppercase">
                Goal 3: Climate Resilience
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Enabling growers to anticipate heatwaves and dry spells 7-10 days earlier, safeguarding yields and stabilizing regional food security.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-1.5">
              <span className="text-xs font-mono font-bold text-amber-300 uppercase">
                Goal 4: High-Resolution Sensor Expansion
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Working toward future integration of high-resolution optical and thermal satellite constellations to enrich coarse regional data with field-level precision.
              </p>
            </div>
          </div>
        </section>

        {/* 12. The DEVUPWARD Team */}
        <section id="devupward-team" className="py-8 space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            12. The DEVUPWARD Team
          </h2>
          <p className="text-slate-300 leading-relaxed">
            <strong>DEVUPWARD</strong> is an independent multi-disciplinary team of software engineers, remote sensing practitioners, and creative frontend developers participating in the <strong>NASA Space Apps Challenge</strong>.
          </p>

          <div className="p-6 rounded-2xl border border-white/10 bg-[#0B1728]/80 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10">
                <Users className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-mono">
                  DEVUPWARD
                </h3>
                <span className="text-xs font-mono text-amber-300">
                  Engineering • Remote Sensing • AgriTech
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              We believe the greatest challenges in agricultural technology are not purely mathematical, but human: how to translate complex planetary science into tools that are respectful, intuitive, and genuinely beneficial to the stewards of the soil.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-slate-900 text-teal-300 border border-teal-500/20">
                NASA Space Apps Challenge 2026
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 text-amber-300 border border-amber-400/20">
                EARTH TRIALS
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-white/10">
                IMPACT 2030
              </span>
            </div>

            <p className="text-[11px] font-mono text-slate-500 pt-1">
              Disclaimer: Farmer Eye is an independent hackathon entry created for the NASA Space Apps Challenge and is not an official NASA program, agency product, or endorsed by NASA.
            </p>
          </div>

          <div className="pt-6 flex items-center justify-between border-t border-white/10">
            <Link href="/docs">
              <Button variant="secondary" size="md">
                <span>← Back to Overview</span>
              </Button>
            </Link>

            <Link href="/#how-it-works">
              <Button variant="primary" size="md">
                <span>Explore 5-Stage Pipeline</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </section>
      </article>

      {/* Right Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
