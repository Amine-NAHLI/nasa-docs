"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { mediaRegistry } from "@/config/media";
import { VideoModal } from "@/components/media/VideoModal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, Satellite } from "lucide-react";

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const introVideo = mediaRegistry["cinematic-intro"];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Atmosphere Layers */}
      <div className="absolute inset-0 bg-space-radial pointer-events-none" />
      <div className="absolute inset-0 bg-earth-glow pointer-events-none" />
      <div className="absolute inset-0 bg-sunrise-glow pointer-events-none" />
      <div className="absolute inset-0 scientific-grid opacity-15 pointer-events-none" />

      {/* Subtle Orbital Ring Graphics in the background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="w-[750px] h-[750px] md:w-[950px] md:h-[950px] rounded-full border border-teal-500/15 animate-spin"
          style={{ animationDuration: "90s" }}
        />
        <div
          className="absolute w-[550px] h-[550px] md:w-[700px] md:h-[700px] rounded-full border border-dashed border-amber-400/10 animate-spin"
          style={{ animationDuration: "120s", animationDirection: "reverse" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-teal-500/30 text-xs font-mono text-teal-300 backdrop-blur-md shadow-lg shadow-teal-500/5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>EARTH TRIALS</span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-300 font-semibold">IMPACT 2030</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-sm">
            <Satellite className="h-3.5 w-3.5 text-teal-400" />
            <span>NASA Space Apps Challenge 2026</span>
          </div>
        </motion.div>

        {/* Main Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-mono uppercase">
            FARMER <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400">EYE</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-amber-200 font-sans">
            THE FARMER&apos;S SECOND EYES.
          </p>
        </motion.div>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed"
        >
          {siteConfig.shortDescription}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <Link href="/docs" className="w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full sm:w-auto text-base px-8 py-3.5 shadow-xl">
              <span>Explore Documentation</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>

          <Button
            size="lg"
            variant="secondary"
            onClick={() => setIsVideoModalOpen(true)}
            className="w-full sm:w-auto text-base px-7 py-3.5"
          >
            <Play className="h-4 w-4 fill-slate-200 text-slate-200 mr-1" />
            <span>Watch Our Story</span>
          </Button>
        </motion.div>

        {/* Feature Highlights Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 text-left font-mono"
        >
          <div className="p-3 rounded-lg bg-slate-900/40 border border-white/5">
            <span className="text-[10px] text-teal-400 uppercase block font-semibold">CLIMATE DATA</span>
            <span className="text-xs sm:text-sm text-slate-200 font-medium">NASA POWER Feeds</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/40 border border-white/5">
            <span className="text-[10px] text-teal-400 uppercase block font-semibold">SOIL MOISTURE</span>
            <span className="text-xs sm:text-sm text-slate-200 font-medium">NASA SMAP Radar</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/40 border border-white/5">
            <span className="text-[10px] text-teal-400 uppercase block font-semibold">MODELING</span>
            <span className="text-xs sm:text-sm text-slate-200 font-medium">Biophysical Water Balance</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/40 border border-white/5">
            <span className="text-[10px] text-amber-300 uppercase block font-semibold">PHILOSOPHY</span>
            <span className="text-xs sm:text-sm text-slate-200 font-medium">Farmer Decides Always</span>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoItem={introVideo}
      />
    </section>
  );
}
