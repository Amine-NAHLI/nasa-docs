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
import { Eye, UserCheck, Users, ArrowRight } from "lucide-react";

export default function OurMissionPage() {
  const tocItems: TocItem[] = [
    { id: "what-is-farmer-eye", title: "1. What is Farmer Eye?", level: 2 },
    { id: "why-we-created-it", title: "2. Why We Created It", level: 2 },
    { id: "global-challenge", title: "3. The Global Agricultural Challenge", level: 2 },
    { id: "second-eyes-philosophy", title: "4. 'The Farmer's Second Eyes'", level: 2 },
    { id: "mission-briefing-video", title: "5. Mission Briefing Video", level: 2 },
    { id: "role-of-nasa-observations", title: "6. The Role of NASA Observations", level: 2 },
    { id: "role-of-scientific-modeling", title: "7. The Role of Agricultural Modeling", level: 2 },
    { id: "role-of-ai", title: "8. The Role of Artificial Intelligence", level: 2 },
    { id: "human-agency", title: "9. Why the Farmer Remains in Control", level: 2 },
    { id: "impact-2030-vision", title: "10. The Impact 2030 Vision", level: 2 },
    { id: "devupward-team", title: "11. The DEVUPWARD Team", level: 2 },
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
            How Farmer Eye fuses planetary NASA Earth observations, biophysical crop equations, and grounded artificial intelligence to give farmers an indispensable second perspective in an era of climate volatility.
          </p>
        </div>

        {/* 1. What is Farmer Eye? */}
        <section id="what-is-farmer-eye" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            1. What is Farmer Eye?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            <strong>Farmer Eye</strong> is an open-architecture agricultural decision-support system conceptualized and built by <strong>DEVUPWARD</strong> under the <strong>EARTH TRIALS | IMPACT 2030</strong> initiative for the NASA Space Apps Challenge.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The platform bridges the gap between orbit and soil. It ingests calibrated multispectral imagery, thermal radiance, and soil moisture measurements from NASA satellite constellations, processes them through biophysical agricultural science models, and translates the synthesis into clear, accessible recommendations for farmers and agronomists.
          </p>

          <Callout type="note" title="Global Applicability">
            While field demonstrations and calibration trials have been conducted in Morocco&apos;s Saïss Plain (Meknes), Farmer Eye is engineered as a universally transferable concept. Its algorithms are designed to adapt across Mediterranean, semi-arid, temperate, and sub-tropical farming systems globally.
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
                While commercial enterprises afford private drone fleets and sensor meshes, family smallholders lack simple access to satellite telemetry.
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
              <strong>The First Eyes</strong> are the farmer&apos;s own eyes on the ground: the physical feel of topsoil, leaf color, root inspection, and intimate familiarity with every contour of the field. This can never be replaced by software.
            </p>
            <p className="text-sm text-slate-200 leading-relaxed">
              <strong>The Second Eyes</strong> are the orbital and mathematical perspectives provided by Farmer Eye: invisible infrared reflectance, root-zone moisture anomalies from spaceborne radar, thermal evapotranspiration deficits, and regional weather forecast synthesis.
            </p>
          </div>

          <p className="text-slate-300 leading-relaxed">
            By uniting both perspectives, the farmer gains complete situational awareness before catastrophic crop stress occurs.
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
            6. The Role of NASA Earth Observations
          </h2>
          <p className="text-slate-300 leading-relaxed">
            NASA operates the world&apos;s most sophisticated Earth-observing satellite fleet. Farmer Eye harnesses public, open-science datasets from multiple missions:
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/50 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-100 text-sm">Landsat 8 & Landsat 9 (OLI/TIRS)</span>
                <span className="text-[10px] font-mono text-teal-400 px-2 py-0.5 rounded bg-slate-800">30m Spatial</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Provides continuous 11-band multispectral surface reflectance and thermal infrared radiometry, enabling multi-decade vegetation health baselines and spatial canopy comparisons.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/50 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-100 text-sm">SMAP (Soil Moisture Active Passive)</span>
                <span className="text-[10px] font-mono text-teal-400 px-2 py-0.5 rounded bg-slate-800">L-Band Microwave</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Measures volumetric water content in the top 5cm of soil and assimilates into root-zone (0-100cm) moisture estimates, penetrating dry weather and clouds.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/50 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-100 text-sm">ECOSTRESS (ISS Thermal Radiometer)</span>
                <span className="text-[10px] font-mono text-teal-400 px-2 py-0.5 rounded bg-slate-800">70m High-Res Thermal</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Monitors plant temperature changes during different times of the diurnal cycle to detect moisture stress hours or days before visible leaf wilting occurs.
              </p>
            </div>
          </div>

          <SourceReference
            citation="NASA Earth Science Division Open Data Program"
            source="National Aeronautics and Space Administration"
            year="2026"
            href="https://earthdata.nasa.gov/"
          />
        </section>

        {/* 7. Role of Scientific Agricultural Modeling */}
        <section id="role-of-scientific-modeling" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            7. The Role of Scientific Agricultural Modeling
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Raw satellite pixels alone are not agricultural answers. A raw NDVI score of 0.65 means nothing without knowing crop type, canopy geometry, soil depth, and local temperature.
          </p>

          <ScientificNote
            sourceName="Biophysical Modeling Engine"
            formula="ET_c = K_c * ET_0"
          >
            Farmer Eye implements the internationally accepted FAO-56 Penman-Monteith equation. By combining solar net radiation, ambient air temperature, wind velocity, and relative humidity, the engine calculates reference evapotranspiration (ET_0). Crop coefficients (K_c) tailored to phenological stages then estimate crop-specific water consumption (ET_c).
          </ScientificNote>

          <TechExplanation summary="How Crop Water Stress Index (CWSI) is calculated">
            <p className="mb-2">
              CWSI evaluates canopy temperature relative to theoretical lower and upper bounds:
            </p>
            <div className="p-2 rounded bg-slate-900 font-mono text-xs text-amber-300 mb-2">
              CWSI = ((Tc - Ta) - (Tc - Ta)_lower) / ((Tc - Ta)_upper - (Tc - Ta)_lower)
            </div>
            <p className="text-xs text-slate-400">
              Where Tc is canopy surface temperature measured by thermal sensors and Ta is air temperature. A CWSI of 0 represents an abundantly watered crop freely transpiring, whereas 1.0 indicates complete stomatal closure and severe physiological drought stress.
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
            AI in Farmer Eye is strictly grounded. We reject black-box hallucination and unverified claims. Our AI models perform three explicit tasks:
          </p>

          <div className="space-y-3 pt-1">
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-1">
              <span className="text-xs font-mono font-bold text-teal-400 block">
                Task A: Multispectral Anomaly Segmentation
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Automated detection of localized anomalies across farm parcels, identifying whether a drop in vigor is due to water deficit, soil salinity patches, or irrigation emitter clogging.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-1">
              <span className="text-xs font-mono font-bold text-teal-400 block">
                Task B: Multi-Horizon Risk Simulation
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Probabilistic modeling of upcoming heatwaves combined with current soil moisture, calculating the risk profile of irrigating immediately versus delaying 48 hours to conserve water.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-1">
              <span className="text-xs font-mono font-bold text-teal-400 block">
                Task C: Plain-Language Scientific Synthesis
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Translating gigabytes of raster mathematics into clear, respectful, plain-language summaries that can be reviewed in under 60 seconds on a mobile screen.
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
            In modern AgriTech, there is a dangerous temptation to promise total automation: automated irrigation valves triggering without human oversight, drone sprayers dispatching autonomously, and algorithms dictating harvesting schedules.
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
              Farmer Eye is designed explicitly as a <strong>Decision-Support System</strong>. It provides transparent data, confidence intervals, and scenario simulations. It never overrides human agency. The farmer remains the commander in the field.
            </p>
          </div>
        </section>

        {/* 10. The Impact 2030 Vision */}
        <section id="impact-2030-vision" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            10. Our Future-Oriented Impact 2030 Vision
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
                Goal 4: Open Scientific Calibration
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fostering collaborative ground-truth validation networks across international agronomic research institutions and universities.
              </p>
            </div>
          </div>
        </section>

        {/* 11. The DEVUPWARD Team */}
        <section id="devupward-team" className="py-8 space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            11. The DEVUPWARD Team
          </h2>
          <p className="text-slate-300 leading-relaxed">
            <strong>DEVUPWARD</strong> is a multi-disciplinary team of software engineers, remote sensing practitioners, and creative frontend developers participating in the <strong>NASA Space Apps Challenge</strong>.
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
                NASA Space Apps 2026
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 text-amber-300 border border-amber-400/20">
                EARTH TRIALS
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-white/10">
                IMPACT 2030
              </span>
            </div>
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
