import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "bg-teal-400 text-slate-950 hover:bg-teal-300 font-semibold shadow-[0_0_20px_rgba(32,201,189,0.25)] hover:shadow-[0_0_25px_rgba(32,201,189,0.4)]",
      secondary:
        "bg-slate-900/80 text-slate-100 hover:bg-slate-800 border border-white/10 hover:border-teal-400/30 backdrop-blur-sm",
      outline:
        "border border-white/15 text-slate-200 hover:text-white hover:border-teal-400/50 hover:bg-teal-400/10",
      ghost: "text-slate-300 hover:text-white hover:bg-white/5",
      gold: "bg-amber-400 text-slate-950 hover:bg-amber-300 font-semibold shadow-[0_0_20px_rgba(233,182,90,0.25)]",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5",
      icon: "h-10 w-10 p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
