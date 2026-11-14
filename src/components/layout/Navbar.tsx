"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/media/BrandLogo";
import { Button } from "@/components/ui/Button";
import { DocsSearchModal } from "@/components/docs/DocsSearchModal";
import { siteConfig } from "@/config/site";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-[#070D17]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo & Scientific Track */}
          <div className="flex items-center gap-6">
            <BrandLogo size="md" showSlogan={false} />
            
            {/* Desktop Initiative Badge */}
            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/10 text-xs font-mono text-slate-400">
              <span className="text-teal-400 font-semibold">{siteConfig.initiative.name}</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-300/90">{siteConfig.team.name}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-teal-300 bg-teal-500/10 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Search Trigger & CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-slate-900/60 hover:bg-slate-900 hover:border-teal-400/40 text-xs text-slate-400 transition-all cursor-pointer"
              aria-label="Search documentation"
            >
              <Search className="h-3.5 w-3.5 text-teal-400" />
              <span className="hidden sm:inline">Search docs...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-white/5">
                ⌘K
              </kbd>
            </button>

            <Link href="/docs" className="hidden sm:inline-block">
              <Button size="sm" variant="primary" className="text-xs">
                <span>Explore Docs</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle mobile navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#070D17]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 shadow-2xl">
            <div className="space-y-1">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10 hover:text-teal-300 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/docs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                <Button className="w-full" variant="primary" size="md">
                  Explore Documentation
                </Button>
              </Link>
              <div className="text-center text-xs font-mono text-slate-500 pt-2">
                {siteConfig.initiative.name} • {siteConfig.team.name}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Scoped Search Dialog */}
      <DocsSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
