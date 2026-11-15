"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DocsSearchModal } from "@/components/docs/DocsSearchModal";
import { useDocsContext } from "@/context/DocsContext";
import { Search, Menu, Sun, Moon } from "lucide-react";
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
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                <Image
                  src="/images/Logo_Farmer_Eye__œil_agricole_coloré-removebg-preview.png"
                  alt="Farmer Eye Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight text-foreground group-hover:text-foreground/90 transition-colors">
                  Farmer Eye
                </span>
                <span className="text-muted-foreground/30 font-mono text-xs select-none">/</span>
                <span className="text-xs font-medium text-muted-foreground">
                  Docs
                </span>
              </div>
            </Link>
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
