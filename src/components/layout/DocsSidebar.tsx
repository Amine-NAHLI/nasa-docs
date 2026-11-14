"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNavigation } from "@/config/docs-nav";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

interface DocsSidebarProps {
  onItemClick?: () => void;
  className?: string;
}

export function DocsSidebar({ onItemClick, className }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "w-72 shrink-0 py-6 pr-4 space-y-8 select-none overflow-y-auto max-h-[calc(100vh-5rem)]",
        className
      )}
    >
      <div className="px-3 pb-2 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
          <BookOpen className="h-4 w-4" />
          <span className="font-semibold uppercase tracking-wider">DOCS INDEX</span>
        </div>
        <p className="text-[11px] text-slate-500 mt-1">
          Farmer Eye Scientific & Technical Hub
        </p>
      </div>

      <div className="space-y-6">
        {docsNavigation.map((group) => (
          <div key={group.id} className="space-y-2">
            {/* Group Header */}
            <div className="flex items-center gap-2 px-3 text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
              <span className="text-teal-400/80">{group.orderNumber}.</span>
              <span>{group.title}</span>
            </div>

            {/* Group Items */}
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;

                if (item.isImplemented) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onItemClick}
                        className={cn(
                          "group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all",
                          isActive
                            ? "bg-teal-500/15 text-teal-300 border border-teal-500/30 font-semibold"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <span className="truncate">{item.title}</span>
                        {item.badge && (
                          <span
                            className={cn(
                              "text-[10px] px-1.5 py-0.5 rounded font-mono shrink-0",
                              isActive
                                ? "bg-teal-400 text-slate-950 font-bold"
                                : "bg-slate-800 text-teal-300 border border-teal-500/20"
                            )}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                }

                // Unimplemented item: honest Coming Soon state
                return (
                  <li key={item.href}>
                    <div
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-500 hover:text-slate-400 transition-colors cursor-not-allowed group/item"
                      title={`${item.title} — Scheduled for Phase 2`}
                    >
                      <span className="truncate group-hover/item:text-slate-300 transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-500 border border-white/5 shrink-0">
                        Soon
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
