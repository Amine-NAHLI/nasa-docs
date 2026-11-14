"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Satellite,
  Layers,
  Calculator,
  BrainCircuit,
  CheckCircle,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PipelineStage {
  step: string;
  name: string;
  shortLabel: string;
  icon: React.ReactNode;
  summary: string;
  detailedSpecs: {
    inputs: string;
    processing: string;
    output: string;
  };
  technologies: string[];
}

export function HowItWorksSection() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: PipelineStage[] = [
    {
      step: "01",
      name: "NASA Earth Observations",
      shortLabel: "Satellite Ingestion",
      icon: <Satellite className="h-5 w-5 text-teal-400" />,
      summary:
        "Continuous ingestion of high-resolution multispectral and radar imagery from Landsat 8/9, Sentinel-2, MODIS, SMAP, and ECOSTRESS constellations.",
      detailedSpecs: {
        inputs: "Raw Top-of-Atmosphere (TOA) and Surface Reflectance (SR) radiometry.",
        processing: "Atmospheric correction, cloud masking (QA bands), and spatial tiling.",
        output: "Georeferenced multi-band raster grids across target agricultural parcels.",
      },
      technologies: ["NASA Earthdata", "Landsat OLI/TIRS", "Sentinel-2 MSI", "SMAP L4"],
    },
    {
      step: "02",
      name: "Environmental Data Processing",
      shortLabel: "Index Computation",
      icon: <Layers className="h-5 w-5 text-sky-400" />,
      summary:
        "Conversion of calibrated spectral bands into vegetation vigor (NDVI), canopy moisture stress (NDWI), and thermal anomaly layers.",
      detailedSpecs: {
        inputs: "Red, NIR, SWIR-1, SWIR-2, and Thermal Infrared band rasters.",
        processing: "Harmonization, radiometric calibration, and time-series smoothing.",
        output: "Normalized index layers and historical baseline deviation matrices.",
      },
      technologies: ["NDVI / NDWI Equations", "Savitzky-Golay Filter", "Bilinear Resampling"],
    },
    {
      step: "03",
      name: "Scientific Agricultural Models",
      shortLabel: "Biophysical Modeling",
      icon: <Calculator className="h-5 w-5 text-amber-400" />,
      summary:
        "Biophysical translation using the Penman-Monteith equation and soil-water balance modeling to quantify real evapotranspiration and root-zone deficits.",
      detailedSpecs: {
        inputs: "Solar radiation, wind speed, vapor pressure, temperature, and crop coefficients (Kc).",
        processing: "Daily water depletion tracking and crop phenology stage matching.",
        output: "Crop Water Stress Index (CWSI) and millimeters of soil moisture deficit.",
      },
      technologies: ["FAO-56 Penman-Monteith", "Soil Water Balance", "Phenological GDD"],
    },
    {
      step: "04",
      name: "AI-Assisted Interpretation",
      shortLabel: "Contextual Synthesis",
      icon: <BrainCircuit className="h-5 w-5 text-emerald-400" />,
      summary:
        "Context-aware AI synthesizes quantitative physical indices with regional crop traits, weather forecasts, and historical stress patterns to produce actionable risk assessments.",
      detailedSpecs: {
        inputs: "Calculated CWSI, 7-day meteorological forecast, crop type, and soil texture.",
        processing: "Multi-factor risk evaluation and scenario comparison.",
        output: "Human-readable agronomic alerts and alternative irrigation strategies.",
      },
      technologies: ["Context-Aware Reasoning", "Probabilistic Risk Models", "Grounded AI"],
    },
    {
      step: "05",
      name: "Farmer Decision Support",
      shortLabel: "Field Action",
      icon: <CheckCircle className="h-5 w-5 text-teal-300" />,
      summary:
        "Clear, unencumbered guidance delivered to the farmer: whether to irrigate today, hold water to preserve aquifer quota, or inspect specific stress hotspots in the grove.",
      detailedSpecs: {
        inputs: "Interpreted recommendations and spatial risk heatmap.",
        processing: "Localized prioritization based on farmer constraints.",
        output: "Empowered human choice: the farmer decides with full visibility.",
      },
      technologies: ["Farmer Eye Web Hub", "SMS/Offline Summaries", "Localized Visual Maps"],
    },
  ];

  const current = stages[activeStage];

  return (
    <section id="how-it-works" className="relative py-24 border-t border-white/10 bg-[#070D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>END-TO-END DATA ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-mono">
            HOW IT WORKS
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            From orbiting satellite radiometers to the farmer&apos;s morning inspection: click any stage below to inspect how planetary observations are transformed into grounded agricultural decisions.
          </p>
        </div>

        {/* Interactive Horizontal Pipeline Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {stages.map((stage, idx) => {
            const isSelected = activeStage === idx;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={cn(
                  "p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden group",
                  isSelected
                    ? "bg-[#0B1728] border-teal-400/80 shadow-[0_0_20px_rgba(32,201,189,0.15)] ring-1 ring-teal-400/50"
                    : "bg-[#0B1728]/40 border-white/10 hover:border-white/20 hover:bg-[#0B1728]/70"
                )}
              >
                {/* Active indicator bar */}
                {isSelected && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-400 to-amber-300" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span
                    className={cn(
                      "font-mono text-xs font-bold px-2 py-0.5 rounded",
                      isSelected
                        ? "bg-teal-400 text-slate-950"
                        : "bg-slate-900 text-slate-400 group-hover:text-slate-200"
                    )}
                  >
                    STAGE {stage.step}
                  </span>
                  <div className="p-1 rounded bg-slate-900/80">{stage.icon}</div>
                </div>

                <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                  {stage.shortLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/15 bg-[#0B1728]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient background glow inside panel */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Title & Overview */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
                  <span className="font-bold">STAGE {current.step} OF 05</span>
                  <span>•</span>
                  <span className="text-amber-300 uppercase">{current.shortLabel}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-mono">
                  {current.name}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {current.summary}
                </p>

                {/* Applied Technologies Pill List */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Standards & Protocols:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {current.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-xs font-mono text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Technical Data Contract */}
              <div className="lg:col-span-7 bg-slate-950/60 rounded-xl border border-white/10 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <SlidersHorizontal className="h-4 w-4 text-teal-400" />
                    <span>TECHNICAL DATA CONTRACT</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Stage {current.step}
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                      STAGE INPUTS
                    </span>
                    <p className="text-slate-200 mt-0.5">{current.detailedSpecs.inputs}</p>
                  </div>

                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                      PROCESSING & TRANSFORMATION
                    </span>
                    <p className="text-teal-300 mt-0.5">{current.detailedSpecs.processing}</p>
                  </div>

                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                      STAGE OUTPUT ARTIFACT
                    </span>
                    <p className="text-amber-300 mt-0.5">{current.detailedSpecs.output}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
