import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/media/BrandLogo";
import { siteConfig } from "@/config/site";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#070D17] text-slate-400 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Identity & Slogan */}
          <div className="md:col-span-2 space-y-4">
            <BrandLogo size="lg" showSlogan />
            <p className="text-sm text-slate-400 leading-relaxed max-w-md pt-2">
              Farmer Eye combines NASA Earth observations, biophysical agricultural models, and context-aware artificial intelligence into clearer decision-support for farmers facing climate uncertainty.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span>{siteConfig.initiative.name}</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-amber-300/90">
                TEAM {siteConfig.team.name}
              </div>
            </div>
          </div>

          {/* Column 2: Documentation Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold">
              Documentation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="hover:text-teal-300 transition-colors">
                  Overview & Orientation
                </Link>
              </li>
              <li>
                <Link href="/docs/our-mission" className="hover:text-teal-300 transition-colors">
                  Our Mission & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-teal-300 transition-colors">
                  5-Stage Scientific Pipeline
                </Link>
              </li>
              <li>
                <Link href="/#science" className="hover:text-teal-300 transition-colors">
                  Scientific Disciplines
                </Link>
              </li>
              <li>
                <Link href="/#vision-2030" className="hover:text-teal-300 transition-colors">
                  Impact 2030 Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Science & Attribution */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold">
              Scientific Foundation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.spaceappschallenge.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>NASA Space Apps Challenge</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <span className="text-slate-500">Landsat 8/9 & Sentinel-2</span>
              </li>
              <li>
                <span className="text-slate-500">SMAP Soil Moisture</span>
              </li>
              <li>
                <span className="text-slate-500">ECOSTRESS Thermal Stress</span>
              </li>
              <li>
                <span className="text-slate-500">Saïss Plain Demonstrator (Meknes)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} Farmer Eye. Developed by {siteConfig.team.name} under {siteConfig.initiative.name}.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-teal-400">English Only</span>
            <span>•</span>
            <span className="text-slate-400">Global Ag-Science Initiative</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
