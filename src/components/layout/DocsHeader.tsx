"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DocsSearchModal } from "@/components/docs/DocsSearchModal";
import { useDocsContext } from "@/context/DocsContext";
import { Search, Menu, Sun, Moon, ChevronDown } from "lucide-react";
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
      {/* Minimal Top Announcement Banner */}
      <div className="w-full bg-zinc-50 dark:bg-zinc-950 border-b border-border/60 py-1 px-4 text-center text-xs text-muted-foreground font-sans flex items-center justify-center gap-2 select-none">
        <span className="font-mono text-[11px]">NASA SPACE APPS 2026</span>
        <span className="text-border">•</span>
        <span>
          {isEn
            ? "Agricultural Decision-Support System Technical Dossier"
            : "Dossier Technique du Système d'Aide à la Décision Agricole"}
        </span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 h-14 w-full border-b border-border/60 bg-background/85 backdrop-blur-md px-4 sm:px-6">
        <div className="flex h-full items-center justify-between gap-3 sm:gap-4 max-w-7xl mx-auto">
          {/* Left: Brand Identity + Category */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Mobile Menu Button */}
            {onOpenMobileNav && (
              <button
                type="button"
                onClick={onOpenMobileNav}
                className="lg:hidden p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                aria-label={isEn ? "Open navigation" : "Ouvrir le menu"}
              >
                <Menu className="h-4 w-4" />
              </button>
            )}

            {/* Logo + Title */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                <Image
                  src="/brand/farmer-eye-official.png"
                  alt="Farmer Eye Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight text-foreground">
                  farmer eye
                </span>
                <span className="text-border/80 font-mono text-xs">/</span>
                <span className="text-xs font-mono text-muted-foreground">
                  docs
                </span>
              </div>
            </Link>

            {/* Dialect / Data Source Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-2 py-1 rounded-md border border-border/60 bg-muted/40 text-[11px] font-mono text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>NASA Earth Engine</span>
              <ChevronDown className="h-3 w-3 opacity-60" />
            </div>
          </div>

          {/* Center: Search Box */}
          <div className="flex-1 max-w-md mx-2 sm:mx-6">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-md border border-border/70 bg-muted/30 hover:bg-muted/60 hover:border-border text-xs text-muted-foreground transition-all cursor-pointer"
              aria-label={isEn ? "Search documentation" : "Rechercher dans la documentation"}
            >
              <div className="flex items-center gap-2 truncate">
                <Search className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                <span className="truncate">
                  {isEn ? "Search documentation..." : "Rechercher dans la documentation..."}
                </span>
              </div>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-background border border-border/80 text-[10px] font-mono text-muted-foreground">
                <span className="text-[11px]">⌘</span>K
              </kbd>
            </button>
          </div>

          {/* Right: Language Switcher + GitHub + Theme Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center rounded-md border border-border/70 p-0.5 text-xs font-mono">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer",
                  lang === "en"
                    ? "bg-foreground text-background font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
                title="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("fr")}
                className={cn(
                  "px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer",
                  lang === "fr"
                    ? "bg-foreground text-background font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
                title="Français"
              >
                FR
              </button>
            </div>

            {/* GitHub Link */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border/70 hover:bg-muted/50 text-xs text-muted-foreground hover:text-foreground transition-colors"
              title="GitHub"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="font-mono text-[11px]">35k</span>
            </a>

            {/* Sun / Moon Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
              title={
                theme === "light"
                  ? isEn ? "Switch to Dark mode" : "Passer en mode sombre"
                  : isEn ? "Switch to Light mode" : "Passer en mode clair"
              }
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      <DocsSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
