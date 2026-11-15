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
      name: "NASA Climate & Soil Ingestion",
      shortLabel: "Data Ingestion",
      icon: <Satellite className="h-5 w-5 text-teal-400" />,
      summary:
        "Daily automated ingestion of meteorological parameters from NASA POWER and L-band microwave soil moisture telemetry from the NASA SMAP mission.",
      detailedSpecs: {
        inputs: "Solar irradiance (ALLSKY_SFC_SW_DWN), T2M (temperature), RH2M (humidity), WS2M (wind), precipitation, and SMAP soil moisture.",
        processing: "Coordinate-based geospatial extraction, quality-flag screening, and temporal alignment.",
        output: "Standardized multi-parameter environmental time-series for the target agricultural parcel.",
      },
      technologies: ["NASA POWER API", "NASA SMAP L4 Data", "JSON/GeoJSON Ingestion"],
    },
    {
      step: "02",
      name: "Environmental Parameter Processing",
      shortLabel: "Parameter Preparation",
      icon: <Layers className="h-5 w-5 text-sky-400" />,
      summary:
        "Normalization and physical calibration of solar radiation, atmospheric vapor pressure deficit (VPD), and root-zone moisture saturation percentiles.",
      detailedSpecs: {
        inputs: "Raw daily climate parameters and SMAP volumetric moisture (m³/m³).",
        processing: "Saturation vapor pressure modeling, relative humidity correction, and soil moisture anomaly calculation.",
        output: "Harmonized meteorological vectors and root-zone water availability index.",
      },
      technologies: ["Vapor Pressure Deficit (VPD)", "Soil Moisture Percentiles", "Data Harmonization"],
    },
    {
      step: "03",
      name: "Scientific Agricultural Models",
      shortLabel: "Biophysical Modeling",
      icon: <Calculator className="h-5 w-5 text-amber-400" />,
      summary:
        "Biophysical translation using the standard FAO-56 Penman-Monteith equation to calculate reference evapotranspiration (ET0) and track daily soil-water deficits.",
      detailedSpecs: {
        inputs: "Net radiation, air temperature, wind speed at 2m, psychrometric constant, and crop coefficients (Kc).",
        processing: "Daily evapotranspiration calculation and root-zone depletion balance equations.",
        output: "Estimated crop evapotranspiration (ETc) and net soil-water deficit in millimeters.",
      },
      technologies: ["FAO-56 Penman-Monteith", "Soil Water Depletion Balance", "Crop Coefficients (Kc)"],
    },
    {
      step: "04",
      name: "AI-Assisted Interpretation",
      shortLabel: "Contextual Synthesis",
      icon: <BrainCircuit className="h-5 w-5 text-emerald-400" />,
      summary:
        "Context-aware AI synthesizes calculated evapotranspiration, root-zone moisture levels, and short-term weather trends into clear, plain-language advisory summaries.",
      detailedSpecs: {
        inputs: "Calculated ET0, SMAP soil moisture index, short-term temperature forecasts, and crop growth stage.",
        processing: "Rule-grounded evaluation, water-stress risk scoring, and multi-scenario comparison.",
        output: "Plain-language agronomic summary and risk-graded irrigation advisories.",
      },
      technologies: ["Grounded AI Interpretation", "Water Stress Risk Scoring", "Scenario Evaluation"],
    },
    {
      step: "05",
      name: "Farmer Decision Support",
      shortLabel: "Farmer Action",
      icon: <CheckCircle className="h-5 w-5 text-teal-300" />,
      summary:
        "Clear, unencumbered guidance delivered to the farmer: whether irrigation is advised today, how much water to allocate, or when to hold to conserve aquifer reserves.",
      detailedSpecs: {
        inputs: "Advisory summary, water deficit metrics, and confidence level.",
        processing: "Clean presentation tailored for quick review without technical jargon.",
        output: "Empowered human choice: the farmer decides with complete environmental visibility.",
      },
      technologies: ["Farmer Eye Web Hub", "Accessible Mobile UI", "Actionable Guidance Cards"],
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
            From NASA climate feeds to the farmer&apos;s morning inspection: click any stage below to inspect how planetary observations are transformed into grounded agricultural decisions.
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
