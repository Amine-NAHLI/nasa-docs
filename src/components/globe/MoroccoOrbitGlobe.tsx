"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MOROCCO_REGIONS, MoroccoAgroRegion } from "@/config/morocco-regions";
import { CityBriefingCard } from "./CityBriefingCard";
import { CityNavigationDock } from "./CityNavigationDock";
import {
  Compass,
  RotateCw,
  Eye,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
} from "lucide-react";

// Register local worker
if (typeof maplibregl.setWorkerUrl === "function") {
  maplibregl.setWorkerUrl("/maplibre-gl-worker.js");
}

const SATELLITE_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
  sources: {
    satellite: {
      type: "raster",
      tiles: [
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      ],
      tileSize: 256,
      attribution: "© Esri, NASA, USGS, ESA",
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: "satellite-tiles",
      type: "raster",
      source: "satellite",
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

export interface MoroccoOrbitGlobeControls {
  flyToRegion: (region: MoroccoAgroRegion) => void;
  resetOrbit: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
}

interface MoroccoOrbitGlobeProps {
  initialRegion?: MoroccoAgroRegion;
  onRegionChange?: (region: MoroccoAgroRegion) => void;
  isHeroMode?: boolean;
  onEnterSite?: () => void;
  className?: string;
  autoZoomToFes?: boolean;
  onControlsReady?: (controls: MoroccoOrbitGlobeControls) => void;
}

export function MoroccoOrbitGlobe({
  initialRegion,
  onRegionChange,
  isHeroMode = false,
  onEnterSite,
  className = "",
  autoZoomToFes = false,
  onControlsReady,
}: MoroccoOrbitGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const isSpinningRef = useRef(true);
  const isInteractingRef = useRef(false);
  const [isRotating, setIsRotating] = useState(true);
  const [currentRegion, setCurrentRegion] = useState<MoroccoAgroRegion | null>(null);
  const [showBriefingCard, setShowBriefingCard] = useState(false);
  const [currentPitch, setCurrentPitch] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Direct DOM refs for zero-lag HUD
  const coordsRef = useRef<HTMLSpanElement>(null);
  const altitudeRef = useRef<HTMLSpanElement>(null);

  // Create High-Definition Location Pin Marker
  const createPinElement = (label: string) => {
    const el = document.createElement("div");
    el.className = "relative flex flex-col items-center cursor-pointer select-none";
    el.innerHTML = `
      <div class="mb-1 px-3 py-1 rounded-full bg-slate-950/95 border border-teal-400/60 text-teal-300 font-mono text-[11px] font-semibold whitespace-nowrap shadow-[0_0_20px_rgba(32,201,189,0.5)] backdrop-blur-md flex items-center gap-1.5 animate-fade-in">
        <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span>${label}</span>
      </div>
      <div class="relative flex items-center justify-center filter drop-shadow-[0_4px_12px_rgba(32,201,189,0.7)]">
        <svg class="w-8 h-8 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>
      <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-4 flex items-center justify-center pointer-events-none">
        <span class="absolute w-8 h-4 rounded-full bg-teal-400/50 animate-ping"></span>
        <span class="w-3 h-1.5 rounded-full bg-teal-300 shadow-[0_0_10px_#20c9bd]"></span>
      </div>
    `;
    return el;
  };

  const setMarkerAt = useCallback((coords: [number, number], label: string) => {
    if (!mapRef.current) return;
    if (markerRef.current) markerRef.current.remove();
    markerRef.current = new maplibregl.Marker({
      element: createPinElement(label),
      anchor: "bottom",
    })
      .setLngLat(coords)
      .addTo(mapRef.current);
  }, []);

  // Cinematic Space-to-City Parabolic Fly-To
  const flyToRegion = useCallback(
    (region: MoroccoAgroRegion) => {
      const map = mapRef.current;
      if (!map) return;

      // Halt auto rotation
      isSpinningRef.current = false;
      setIsRotating(false);
      setShowBriefingCard(false);
      setCurrentRegion(region);

      if (onRegionChange) {
        onRegionChange(region);
      }

      // Drop pin immediately
      setMarkerAt(region.coordinates, region.name.split("·")[0].trim());

      // Parabolic flight: starts in space and zooms down into city
      map.flyTo({
        center: region.coordinates,
        zoom: region.zoom,
        pitch: region.pitch,
        bearing: region.bearing,
        duration: 3800, // 3.8s majestic descent
        curve: 1.42, // Parabolic NASA flight curve
        speed: 0.85,
        essential: true,
      });

      // Reveal briefing card on arrival
      map.once("moveend", () => {
        setShowBriefingCard(true);
      });
    },
    [onRegionChange, setMarkerAt]
  );

  // Orbit Reset to Deep Space
  const handleResetOrbit = useCallback(() => {
    if (markerRef.current) markerRef.current.remove();
    setCurrentRegion(null);
    setShowBriefingCard(false);

    mapRef.current?.flyTo({
      center: [0, 24],
      zoom: 1.6,
      pitch: 0,
      bearing: 0,
      duration: 2600,
      essential: true,
    });

    setTimeout(() => {
      isSpinningRef.current = true;
      setIsRotating(true);
    }, 2700);
  }, []);

  // Expose controls to parent if requested
  useEffect(() => {
    if (!onControlsReady) return;
    onControlsReady({
      flyToRegion,
      resetOrbit: handleResetOrbit,
      zoomIn: () => mapRef.current?.zoomIn(),
      zoomOut: () => mapRef.current?.zoomOut(),
    });
  }, [onControlsReady, flyToRegion, handleResetOrbit]);

  // Handle external initialRegion change
  useEffect(() => {
    if (!initialRegion || !mapRef.current) return;
    flyToRegion(initialRegion);
  }, [initialRegion, flyToRegion]);

  // Initialize MapLibre
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: SATELLITE_STYLE,
      center: [0, 24],
      zoom: 1.6,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
    });

    mapRef.current = map;

    map.on("load", () => {
      try {
        const globeMap = map as unknown as {
          setProjection?: (opts: { type: string }) => void;
        };
        if (typeof globeMap.setProjection === "function") {
          globeMap.setProjection({ type: "globe" });
        }
      } catch (err) {
        console.warn("Globe projection notice:", err);
      }

      try {
        const skyMap = map as unknown as {
          setSky?: (opts: Record<string, unknown>) => void;
        };
        if (typeof skyMap.setSky === "function") {
          skyMap.setSky({
            "sky-color": "#000004",
            "horizon-color": "#06b6d4",
            "fog-color": "#030712",
            "atmosphere-blend": 0.85,
          });
        }
      } catch {
        // Fallback
      }

      map.resize();

      // Trigger automatic zoom to Fès if requested or if initialRegion passed
      if (autoZoomToFes) {
        setTimeout(() => {
          flyToRegion(MOROCCO_REGIONS.overview);
        }, 1200);
      } else if (initialRegion) {
        setTimeout(() => {
          flyToRegion(initialRegion);
        }, 800);
      }
    });

    // Altitude HUD tracker
    map.on("zoom", () => {
      if (!altitudeRef.current) return;
      const z = map.getZoom();
      const km = Math.round(20000 * Math.pow(0.35, Math.max(0, z - 1)));
      altitudeRef.current.textContent =
        km > 1000 ? `${km.toLocaleString()} km` : `${Math.max(0.8, km).toFixed(1)} km`;
    });

    map.on("pitch", () => setCurrentPitch(map.getPitch()));

    map.on("mousemove", (e) => {
      const onEarth = e.lngLat && !isNaN(e.lngLat.lat) && !isNaN(e.lngLat.lng);
      if (coordsRef.current && onEarth) {
        const lat = e.lngLat.lat;
        const lng = e.lngLat.lng;
        coordsRef.current.textContent = `${lat >= 0 ? lat.toFixed(2) + "°N" : Math.abs(lat).toFixed(2) + "°S"}, ${lng >= 0 ? lng.toFixed(2) + "°E" : Math.abs(lng).toFixed(2) + "°W"}`;
      }
    });

    map.on("dragstart", () => {
      isInteractingRef.current = true;
      isSpinningRef.current = false;
      setIsRotating(false);
    });

    map.on("dragend", () => {
      isInteractingRef.current = false;
    });

    const onResize = () => map.resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (markerRef.current) markerRef.current.remove();
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Smooth Orbit Spin (requestAnimationFrame)
  useEffect(() => {
    isSpinningRef.current = isRotating;
    if (!isRotating) {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      return;
    }

    let lastTime = performance.now();
    const loop = (now: number) => {
      if (!isSpinningRef.current) return;
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (mapRef.current && !isInteractingRef.current) {
        const z = mapRef.current.getZoom();
        if (z < 5) {
          const c = mapRef.current.getCenter();
          c.lng -= 2.8 * dt;
          mapRef.current.jumpTo({ center: c });
        }
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
    };
  }, [isRotating]);

  const handleTogglePitch = () => {
    if (!mapRef.current) return;
    mapRef.current.easeTo({ pitch: currentPitch > 25 ? 0 : 50, duration: 800 });
  };

  return (
    <div
      className={`relative w-full h-full min-h-[500px] bg-black overflow-hidden select-none font-sans ${className} ${
        isFullscreen ? "fixed inset-0 z-50 min-h-screen" : ""
      }`}
    >
      {/* 3D MapLibre Globe Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full bg-[#000004]" />

      {/* Atmospheric space vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,5,0.45)_100%)]" />

      {/* Top-Left: Mission & Orbital Telemetry HUD */}
      <div className="absolute top-20 left-5 z-20 pointer-events-none max-w-xs space-y-2">
        <div className="p-3.5 rounded-xl bg-slate-950/85 border border-white/10 backdrop-blur-md font-mono text-xs text-slate-300 space-y-2 shadow-2xl">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-slate-500 uppercase flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-teal-400" /> Altitude
            </span>
            <span ref={altitudeRef} className="text-teal-300 font-bold tabular-nums">
              20,000 km
            </span>
          </div>

          <div className="flex justify-between items-center text-[11px]">
            <span className="text-slate-500 uppercase">Coordonnées</span>
            <span ref={coordsRef} className="text-slate-200 font-medium tabular-nums">
              Orbite Spatiale
            </span>
          </div>

          {currentRegion && (
            <div className="pt-2 border-t border-white/10 text-[11px] flex items-center justify-between text-teal-300 font-semibold truncate">
              <span className="text-slate-500">Cible :</span>
              <span className="truncate max-w-[170px]">{currentRegion.name}</span>
            </div>
          )}
        </div>
      </div>

      {/* Center-Floating City Briefing Card (Upon touchdown) */}
      {!isHeroMode && showBriefingCard && currentRegion && (
        <div className="absolute top-20 right-4 sm:right-6 z-30 pointer-events-auto max-w-sm sm:max-w-md">
          <CityBriefingCard
            region={currentRegion}
            onClose={() => setShowBriefingCard(false)}
          />
        </div>
      )}

      {/* Bottom Center: Moroccan Cities Navigation Dock */}
      {!isHeroMode && (
        <div className="absolute bottom-5 inset-x-4 z-20 pointer-events-auto flex justify-center">
          <CityNavigationDock
            currentRegionId={currentRegion?.id || ""}
            onSelectRegion={(region) => flyToRegion(region)}
          />
        </div>
      )}

      {/* Optional hero mode enter trigger */}
      {isHeroMode && onEnterSite && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
          <button
            type="button"
            onClick={onEnterSite}
            className="px-6 py-3 rounded-xl bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-teal-300 transition-all cursor-pointer"
          >
            Entrer sur le site
          </button>
        </div>
      )}

      {/* Top-Right: Quick Orbit Controls */}
      <div className="absolute top-4 right-4 z-20 pointer-events-auto flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="p-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-white/10 text-slate-300 hover:text-white backdrop-blur-md transition-all cursor-pointer shadow-lg"
          title={isFullscreen ? "Réduire l'écran" : "Plein écran 3D"}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        <button
          type="button"
          onClick={() => {
            const next = !isRotating;
            isSpinningRef.current = next;
            setIsRotating(next);
          }}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium backdrop-blur-md border transition-all cursor-pointer shadow-lg ${
            isRotating
              ? "bg-teal-950/80 border-teal-500/50 text-teal-300"
              : "bg-slate-950/80 border-white/10 text-slate-400 hover:text-slate-200"
          }`}
          title="Basculer la rotation orbitale"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? "animate-spin" : ""}`} />
          <span className="hidden sm:inline">{isRotating ? "Spin ON" : "Spin OFF"}</span>
        </button>

        <button
          type="button"
          onClick={handleTogglePitch}
          className={`p-2 rounded-xl border backdrop-blur-md transition-all cursor-pointer shadow-lg ${
            currentPitch > 20
              ? "bg-teal-950/80 border-teal-500/50 text-teal-300"
              : "bg-slate-950/80 hover:bg-slate-900 border-white/10 text-slate-400 hover:text-slate-200"
          }`}
          title="Basculer l'angle d'horizon 3D"
        >
          <Eye className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => mapRef.current?.zoomIn()}
          className="p-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-white/10 text-slate-300 hover:text-white backdrop-blur-md transition-all cursor-pointer shadow-lg"
          title="Zoom avant"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => mapRef.current?.zoomOut()}
          className="p-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-white/10 text-slate-300 hover:text-white backdrop-blur-md transition-all cursor-pointer shadow-lg"
          title="Zoom arrière"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={handleResetOrbit}
          className="px-3 py-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-white/10 text-teal-300 text-xs font-mono font-medium backdrop-blur-md transition-all cursor-pointer shadow-lg flex items-center gap-1"
          title="Réinitialiser l'orbite spatiale"
        >
          <span>Espace</span>
        </button>
      </div>
    </div>
  );
}
