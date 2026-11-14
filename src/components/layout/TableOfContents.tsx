"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

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
      const scrollPosition = window.scrollY + 120;
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
    <div className={cn("w-64 shrink-0 py-6 pl-4 hidden xl:block select-none", className)}>
      <div className="sticky top-20 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
          <List className="h-3.5 w-3.5 text-teal-400" />
          <span>ON THIS PAGE</span>
        </div>

        <nav className="space-y-1.5 border-l border-white/10 pl-3">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "block text-xs leading-relaxed transition-colors duration-150",
                  item.level === 3 ? "pl-3 text-[11px]" : "",
                  isActive
                    ? "text-teal-400 font-semibold translate-x-0.5"
                    : "text-slate-400 hover:text-slate-200"
                )}
              >
                {item.title}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
