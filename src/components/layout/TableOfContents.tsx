"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  title: string;
  level?: 2 | 3;
}

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          return;
        }
      }
      setActiveId(items[0].id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <div className={cn("w-60 shrink-0 py-6 pl-4 hidden xl:block select-none", className)}>
      <div className="sticky top-20 space-y-6">
        {/* Drizzle-style v1.0 / Goodies Widget */}
        <div className="p-3 rounded-lg border border-zinc-200/90 bg-zinc-50/80 text-xs font-sans">
          <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-800 mb-1.5">
            <span className="font-mono">v1.0 (Earth Trials)</span>
            <span className="text-emerald-600 font-mono font-medium">99.5%</span>
          </div>
          <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[99.5%] rounded-full" />
          </div>
          <p className="mt-2 text-[10px] text-zinc-500 font-mono flex items-center justify-between">
            <span>NASA Space Apps</span>
            <span>DEVUPWARD</span>
          </p>
        </div>

        {/* ON THIS PAGE Section */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-bold text-zinc-900 tracking-wider uppercase font-sans">
            ON THIS PAGE
          </h4>

          <nav className="space-y-0.5 border-l border-zinc-200/80 pl-3">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", `#${item.id}`);
                    }
                  }}
                  className={cn(
                    "block text-[12px] leading-relaxed transition-colors py-1 cursor-pointer",
                    item.level === 3 ? "pl-2 text-[11px]" : "",
                    isActive
                      ? "text-zinc-900 font-semibold border-l-2 border-zinc-900 -ml-[13px] pl-[11px]"
                      : "text-zinc-500 hover:text-zinc-900"
                  )}
                >
                  {item.title}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Partner & Project Meta (Drizzle-style Backers) */}
        <div className="pt-4 border-t border-zinc-200/80 space-y-3">
          <div className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase font-mono">
            INITIATIVE
          </div>
          <div className="p-2.5 rounded-md border border-zinc-200 bg-white shadow-2xs">
            <div className="text-[11px] font-bold text-zinc-900">NASA Space Apps Challenge</div>
            <div className="text-[10px] text-zinc-500 mt-0.5">Global Nominee — Earth Observations</div>
          </div>
          <div className="p-2.5 rounded-md border border-zinc-200 bg-white shadow-2xs">
            <div className="text-[11px] font-bold text-zinc-900">DEVUPWARD</div>
            <div className="text-[10px] text-zinc-500 mt-0.5">Impact 2030 Agriculture Engine</div>
          </div>
        </div>
      </div>
    </div>
  );
}
