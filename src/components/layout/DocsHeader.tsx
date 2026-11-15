"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DocsSearchModal } from "@/components/docs/DocsSearchModal";
import { useDocsContext } from "@/context/DocsContext";
import { Search, Menu, Bell, Sun, Moon, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocsHeaderProps {
  onOpenMobileNav?: () => void;
}

export function DocsHeader({ onOpenMobileNav }: DocsHeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme, lang, setLang } = useDocsContext();

  const isEn = lang === "en";

  return (
    <>
      {/* Top Drizzle Announcement Banner */}
      <div className="w-full bg-[#FAFAFA] dark:bg-[#141518] border-b border-zinc-200/80 dark:border-[#232529] py-1.5 px-4 text-center text-xs text-zinc-600 dark:text-zinc-400 font-sans flex items-center justify-center gap-2 transition-colors">
        <span>
          {isEn
            ? "NASA Space Apps Challenge 2026 — Earth Observation & Agriculture Documentation."
            : "NASA Space Apps Challenge 2026 — Documentation Observation de la Terre & Agriculture."}
        </span>
        <span className="text-zinc-400 dark:text-zinc-600">|</span>
        <span className="font-medium text-zinc-800 dark:text-zinc-200 underline decoration-zinc-300 dark:decoration-zinc-600 underline-offset-2">
          {isEn ? "PDF Technical Dossier Extracted" : "Dossier Technique Extrait du PDF"}
        </span>
      </div>

      {/* Main Drizzle 56px Header */}
      <header className="sticky top-0 z-40 h-14 w-full border-b border-zinc-200/80 dark:border-[#232529] bg-white/95 dark:bg-[#0C0D0E]/95 backdrop-blur-md px-4 sm:px-6 transition-colors">
        <div className="flex h-full items-center justify-between gap-3 sm:gap-4 max-w-7xl mx-auto">
          {/* Left: Brand Identity + Docs Pill + Dialect Selector */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Mobile Menu Button */}
            {onOpenMobileNav && (
              <button
                type="button"
                onClick={onOpenMobileNav}
                className="lg:hidden p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#1E2024] transition-colors"
                aria-label={isEn ? "Open navigation" : "Ouvrir le menu"}
              >
                <Menu className="h-5 w-5" />
              </button>
            )}

            {/* Logo + Title */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                <Image
                  src="/brand/farmer-eye-official.png"
                  alt="Farmer Eye Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-white">
                  <span className="text-zinc-400 dark:text-zinc-500 font-normal mr-1">///</span>
                  farmer eye
                </span>
                <span className="px-1.5 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-100 dark:bg-[#1E2024] text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-[#2E3138]">
                  Docs
                </span>
              </div>
            </Link>

            {/* Dialect / Data Source Dropdown Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-[#232529] bg-zinc-50/70 dark:bg-[#141518] text-xs text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#1E2024] cursor-pointer transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="font-medium text-[11px]">NASA Earth Engine</span>
              <ChevronDown className="h-3 w-3 text-zinc-400 dark:text-zinc-500" />
            </div>
          </div>

          {/* Center: Search Box (Drizzle style: Ctrl K) */}
          <div className="flex-1 max-w-md mx-2 sm:mx-6">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg border border-zinc-200/90 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518] hover:bg-zinc-100 dark:hover:bg-[#1A1C20] hover:border-zinc-300 dark:hover:border-zinc-700 text-xs text-zinc-500 dark:text-zinc-400 transition-all cursor-pointer shadow-xs"
              aria-label={isEn ? "Search documentation" : "Rechercher dans la documentation"}
            >
              <div className="flex items-center gap-2 truncate">
                <Search className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                <span className="truncate">
                  {isEn ? "Search documentation..." : "Rechercher dans la documentation..."}
                </span>
              </div>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white dark:bg-[#1E2024] text-[10px] font-mono text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-[#2E3138] shadow-2xs">
                Ctrl K
              </kbd>
            </button>
          </div>

          {/* Right: Language Pill + GitHub Stars + Bell + Sun/Moon (Theme Toggle) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Language Switcher Pill (FR | EN) */}
            <div className="flex items-center rounded-lg border border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518] p-0.5 text-xs font-mono font-medium">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "px-2 py-0.5 rounded text-[11px] transition-all cursor-pointer",
                  lang === "en"
                    ? "bg-white dark:bg-[#232529] text-zinc-950 dark:text-white font-bold shadow-2xs border border-zinc-200/80 dark:border-zinc-700"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                )}
                title="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("fr")}
                className={cn(
                  "px-2 py-0.5 rounded text-[11px] transition-all cursor-pointer",
                  lang === "fr"
                    ? "bg-white dark:bg-[#232529] text-zinc-950 dark:text-white font-bold shadow-2xs border border-zinc-200/80 dark:border-zinc-700"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                )}
                title="Passer en Français"
              >
                FR
              </button>
            </div>

            {/* GitHub Stars Button */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] hover:bg-zinc-50 dark:hover:bg-[#1E2024] text-xs text-zinc-700 dark:text-zinc-300 font-medium transition-colors shadow-2xs"
              title="GitHub Stars"
            >
              <svg className="h-3.5 w-3.5 fill-current text-zinc-800 dark:text-zinc-200" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>35k+</span>
            </a>

            {/* Notification Bell */}
            <button
              type="button"
              className="relative p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#1E2024] transition-colors cursor-pointer"
              title={isEn ? "Notifications" : "Notifications"}
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-rose-500" />
            </button>

            {/* Sun / Moon Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#1E2024] transition-colors cursor-pointer"
              title={
                theme === "light"
                  ? isEn
                    ? "Switch to Dark Mode"
                    : "Activer le Mode Sombre"
                  : isEn
                  ? "Switch to Light Mode"
                  : "Activer le Mode Clair"
              }
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Sun className="h-4 w-4 text-amber-500 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="h-4 w-4 text-sky-400 transition-transform hover:-rotate-12" />
              )}
            </button>
          </div>
        </div>
      </header>

      <DocsSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
