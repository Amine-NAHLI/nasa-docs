"use client";

import React, { useMemo } from "react";

export function CosmicStarfield() {
  // Generate a deterministic constellation of 120 stars with varying brightness and positions
  const stars = useMemo(() => {
    const starList = [];
    for (let i = 0; i < 120; i++) {
      const top = ((i * 37) % 100) + ((i * 13) % 7) * 0.1;
      const left = ((i * 73) % 100) + ((i * 17) % 5) * 0.1;
      const size = (i % 3 === 0 ? 2 : i % 5 === 0 ? 2.5 : 1.2);
      const opacity = 0.3 + ((i * 19) % 65) / 100;
      const pulseDelay = (i % 7) * 0.7;
      const pulseDuration = 3 + (i % 5) * 1.2;

      starList.push({
        id: i,
        top: `${top}%`,
        left: `${left}%`,
        size: `${size}px`,
        opacity,
        pulseDelay: `${pulseDelay}s`,
        pulseDuration: `${pulseDuration}s`,
      });
    }
    return starList;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Deep Space Cosmic Radial Gradients */}
      <div className="absolute inset-0 bg-[#000004]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(14,116,144,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(13,148,136,0.06)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,105,161,0.04)_0%,transparent_70%)]" />

      {/* Twinkling Stars */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white transition-opacity"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            boxShadow:
              s.size === "2.5px"
                ? "0 0 6px rgba(255, 255, 255, 0.9), 0 0 12px rgba(6, 182, 212, 0.6)"
                : s.size === "2px"
                ? "0 0 4px rgba(255, 255, 255, 0.8)"
                : "none",
            animation: `twinkle ${s.pulseDuration} infinite ease-in-out ${s.pulseDelay}`,
          }}
        />
      ))}

      {/* Global Vignette Edge */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,4,0.7)_100%)]" />

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.15);
          }
        }
      `}</style>
    </div>
  );
}
