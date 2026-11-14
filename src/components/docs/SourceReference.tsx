import React from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface SourceReferenceProps {
  citation: string;
  source: string;
  year?: string;
  href?: string;
  className?: string;
}

export function SourceReference({
  citation,
  source,
  year,
  href,
  className,
}: SourceReferenceProps) {
  const content = (
    <div
      className={cn(
        "my-4 flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-slate-900/60 p-3 text-xs text-slate-300 transition-colors hover:border-teal-500/30 hover:bg-slate-900/90",
        className
      )}
    >
      <div className="flex items-center gap-2.5">
        <BookOpen className="h-4 w-4 text-teal-400 shrink-0" />
        <div>
          <span className="font-medium text-slate-200">{citation}</span>
          <span className="text-slate-400 ml-1.5">
            ({source}
            {year ? `, ${year}` : ""})
          </span>
        </div>
      </div>
      {href && (
        <span className="text-teal-400 shrink-0 inline-flex items-center gap-1 font-mono text-[11px]">
          Ref <ExternalLink className="h-3.5 w-3.5" />
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        {content}
      </a>
    );
  }

  return content;
}
