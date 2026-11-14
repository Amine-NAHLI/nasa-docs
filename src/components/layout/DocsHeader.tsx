"use client";

import React, { useState } from "react";
import { BrandLogo } from "@/components/media/BrandLogo";
import { DocsBreadcrumb } from "@/components/docs/DocsBreadcrumb";
import { DocsSearchModal } from "@/components/docs/DocsSearchModal";
import { Search, Menu, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface DocsHeaderProps {
  breadcrumbItems?: { label: string; href?: string }[];
  onOpenMobileNav: () => void;
}

export function DocsHeader({
  breadcrumbItems = [],
  onOpenMobileNav,
}: DocsHeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-white/10 bg-[#070D17]/85 backdrop-blur-xl px-4 sm:px-6 py-3.5">
        <div className="flex items-center gap-3">
          {/* Mobile Nav Toggle */}
          <button
            type="button"
            onClick={onOpenMobileNav}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Open documentation navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link href="/" className="md:hidden">
            <BrandLogo size="sm" />
          </Link>

          {/* Desktop Breadcrumbs */}
          <div className="hidden md:block">
            <DocsBreadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-slate-900/70 hover:bg-slate-900 hover:border-teal-400/40 text-xs text-slate-400 transition-all cursor-pointer"
            aria-label="Search documentation"
          >
            <Search className="h-3.5 w-3.5 text-teal-400" />
            <span className="hidden sm:inline">Search documentation...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-white/5">
              ⌘K
            </kbd>
          </button>

          <Link href="/">
            <Button variant="ghost" size="sm" className="text-xs text-slate-400 hover:text-slate-200">
              <ArrowLeft className="h-3.5 w-3.5 mr-1" />
              <span className="hidden sm:inline">Back to Home</span>
            </Button>
          </Link>
        </div>
      </header>

      <DocsSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
