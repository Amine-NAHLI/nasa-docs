"use client";

import React, { useState } from "react";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { DocsHeader } from "@/components/layout/DocsHeader";
import { MobileDocsDrawer } from "@/components/layout/MobileDocsDrawer";
import { Footer } from "@/components/layout/Footer";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#070D17] text-slate-100">
      {/* Top Docs Header */}
      <DocsHeader
        breadcrumbItems={[]}
        onOpenMobileNav={() => setIsMobileDrawerOpen(true)}
      />

      {/* Main Body with Sidebar + Content */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex">
        {/* Desktop Fixed/Sticky Sidebar */}
        <div className="hidden md:block border-r border-white/10 sticky top-[65px] h-[calc(100vh-65px)]">
          <DocsSidebar />
        </div>

        {/* Dynamic Page Content */}
        <main className="flex-1 min-w-0 py-8 md:px-8 lg:px-10">
          {children}
        </main>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileDocsDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
