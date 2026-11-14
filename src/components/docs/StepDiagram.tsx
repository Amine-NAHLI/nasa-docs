import React from "react";
import { cn } from "@/lib/utils";

interface StepItem {
  number: string;
  title: string;
  description: string;
  tag?: string;
}

interface StepDiagramProps {
  title?: string;
  steps: StepItem[];
  className?: string;
}

export function StepDiagram({ title, steps, className }: StepDiagramProps) {
  return (
    <div className={cn("my-8 rounded-xl border border-white/10 bg-[#0B1728]/60 p-6", className)}>
      {title && (
        <h4 className="text-base font-semibold text-slate-100 mb-5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400" />
          {title}
        </h4>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative rounded-lg border border-white/10 bg-slate-900/70 p-4 transition-all hover:border-teal-500/30"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-teal-400 px-2 py-0.5 rounded bg-teal-950/60 border border-teal-500/30">
                STEP {step.number}
              </span>
              {step.tag && (
                <span className="text-[10px] uppercase font-mono text-amber-300/80">
                  {step.tag}
                </span>
              )}
            </div>
            <h5 className="font-medium text-slate-100 text-sm mb-1">{step.title}</h5>
            <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
