"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DocsSearchModal } from "@/components/docs/DocsSearchModal";
import { Search, Menu, Bell, Sun, ChevronDown } from "lucide-react";

interface DocsHeaderProps {
  onOpenMobileNav?: () => void;
}

export function DocsHeader({ onOpenMobileNav }: DocsHeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Top Drizzle Announcement Banner */}
      <div className="w-full bg-[#FAFAFA] border-b border-zinc-200/80 py-1.5 px-4 text-center text-xs text-zinc-600 font-sans flex items-center justify-center gap-2">
        <span>NASA Space Apps Challenge 2024 — Earth Observation & Agriculture Documentation.</span>
        <span className="text-zinc-400">|</span>
        <span className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-2">
          PDF Content Structure Ready
        </span>
      </div>

      {/* Main Drizzle 56px Header */}
      <header className="sticky top-0 z-40 h-14 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-md px-4 sm:px-6">
        <div className="flex h-full items-center justify-between gap-4 max-w-7xl mx-auto">
          {/* Left: Brand Identity + Docs Pill + Dialect Selector */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile Menu Button */}
            {onOpenMobileNav && (
              <button
                type="button"
                onClick={onOpenMobileNav}
                className="lg:hidden p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                aria-label="Ouvrir le menu"
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
                <span className="font-bold text-sm tracking-tight text-zinc-900">
                  <span className="text-zinc-400 font-normal mr-1">///</span>
                  farmer eye
                </span>
                <span className="px-1.5 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">
                  Docs
                </span>
              </div>
            </Link>

            {/* Dialect / Data Source Dropdown Pill (Drizzle style: PostgreSQL ↕) */}
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-zinc-200 bg-zinc-50/70 text-xs text-zinc-700 hover:bg-zinc-100 cursor-pointer transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="font-medium text-[11px]">NASA Earth Engine</span>
              <ChevronDown className="h-3 w-3 text-zinc-400" />
            </div>
          </div>

          {/* Center: Search Box (Drizzle style: Ctrl K) */}
          <div className="flex-1 max-w-md mx-2 sm:mx-6">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg border border-zinc-200/90 bg-zinc-50 hover:bg-zinc-100 hover:border-zinc-300 text-xs text-zinc-500 transition-all cursor-pointer shadow-xs"
              aria-label="Search documentation"
            >
              <div className="flex items-center gap-2 truncate">
                <Search className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                <span className="truncate">Search</span>
              </div>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white text-[10px] font-mono text-zinc-500 border border-zinc-200 shadow-2xs">
                Ctrl K
              </kbd>
            </button>
          </div>

          {/* Right: GitHub Stars + Bell + Sun (Theme Toggle) */}
          <div className="flex items-center gap-2">
            {/* GitHub Stars Button */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-zinc-200 bg-white hover:bg-zinc-50 text-xs text-zinc-700 font-medium transition-colors shadow-2xs"
              title="GitHub Stars"
            >
              <svg className="h-3.5 w-3.5 fill-current text-zinc-800" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>35k+</span>
            </a>

            {/* Notification Bell */}
            <button
              type="button"
              className="relative p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
              title="Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-rose-500" />
            </button>

            {/* Sun / Light Theme Active Indicator */}
            <button
              type="button"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
              title="Theme: Light mode"
            >
              <Sun className="h-4 w-4 text-amber-500" />
            </button>
          </div>
        </div>
      </header>

      <DocsSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
