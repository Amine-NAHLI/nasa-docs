"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MOROCCO_REGIONS, MoroccoAgroRegion } from "@/config/morocco-regions";
import { CityBriefingCard } from "./CityBriefingCard";
import { CityNavigationDock } from "./CityNavigationDock";
import { CosmicStarfield } from "./CosmicStarfield";

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
  togglePitch: () => void;
  toggleRotate: () => void;
  toggleFullscreen: () => void;
  getPitch: () => number;
  getIsRotating: () => boolean;
}

interface MoroccoOrbitGlobeProps {
  initialRegion?: MoroccoAgroRegion;
  onRegionChange?: (region: MoroccoAgroRegion) => void;
  className?: string;
  autoZoomToFes?: boolean;
  showDock?: boolean;
  onControlsReady?: (controls: MoroccoOrbitGlobeControls) => void;
  altitudeRef?: React.RefObject<HTMLSpanElement | null>;
  coordsRef?: React.RefObject<HTMLSpanElement | null>;
}

export function MoroccoOrbitGlobe({
  initialRegion,
  onRegionChange,
  className = "",
  autoZoomToFes = false,
  showDock = true,
  onControlsReady,
  altitudeRef,
  coordsRef,
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

  // Fallback internal refs if parent did not pass them
  const internalCoordsRef = useRef<HTMLSpanElement>(null);
  const internalAltitudeRef = useRef<HTMLSpanElement>(null);
  const activeAltitudeRef = altitudeRef || internalAltitudeRef;
  const activeCoordsRef = coordsRef || internalCoordsRef;

  // Create High-Definition Location Pin Marker with Cosmic Glow
  const createPinElement = (label: string) => {
    const el = document.createElement("div");
    el.className = "relative flex flex-col items-center cursor-pointer select-none";
    el.innerHTML = `
      <div class="mb-1.5 px-3 py-1 rounded-full bg-slate-950/95 border border-teal-400/80 text-teal-300 font-mono text-[11px] font-bold whitespace-nowrap shadow-[0_0_25px_rgba(45,212,191,0.6)] backdrop-blur-md flex items-center gap-1.5 animate-fade-in">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>${label}</span>
      </div>
      <div class="relative flex items-center justify-center filter drop-shadow-[0_4px_16px_rgba(45,212,191,0.8)]">
        <svg class="w-8 h-8 text-teal-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>
      <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-4 flex items-center justify-center pointer-events-none">
        <span class="absolute w-8 h-4 rounded-full bg-teal-400/60 animate-ping"></span>
        <span class="w-3 h-1.5 rounded-full bg-teal-300 shadow-[0_0_12px_#2dd4bf]"></span>
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

      // Update target coordinate telemetry
      if (activeCoordsRef.current) {
        activeCoordsRef.current.textContent = `${region.coordinates[1].toFixed(2)}°N, ${Math.abs(region.coordinates[0]).toFixed(2)}°W (${region.name.split("·")[0].trim()})`;
      }

      // Parabolic flight: starts in space and dives into city
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
    [onRegionChange, setMarkerAt, activeCoordsRef]
  );

  // Orbit Reset to Deep Space
  const handleResetOrbit = useCallback(() => {
    if (markerRef.current) markerRef.current.remove();
    setCurrentRegion(null);
    setShowBriefingCard(false);

    if (activeCoordsRef.current) {
      activeCoordsRef.current.textContent = "Orbite Spatiale";
    }

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
  }, [activeCoordsRef]);

  const handleTogglePitch = useCallback(() => {
    if (!mapRef.current) return;
    const nextPitch = currentPitch > 25 ? 0 : 50;
    mapRef.current.easeTo({ pitch: nextPitch, duration: 800 });
    setCurrentPitch(nextPitch);
  }, [currentPitch]);

  const handleToggleRotate = useCallback(() => {
    const next = !isRotating;
    isSpinningRef.current = next;
    setIsRotating(next);
  }, [isRotating]);

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  // Expose controls to parent
  useEffect(() => {
    if (!onControlsReady) return;
    onControlsReady({
      flyToRegion,
      resetOrbit: handleResetOrbit,
      zoomIn: () => mapRef.current?.zoomIn(),
      zoomOut: () => mapRef.current?.zoomOut(),
      togglePitch: handleTogglePitch,
      toggleRotate: handleToggleRotate,
      toggleFullscreen: handleToggleFullscreen,
      getPitch: () => currentPitch,
      getIsRotating: () => isRotating,
    });
  }, [
    onControlsReady,
    flyToRegion,
    handleResetOrbit,
    handleTogglePitch,
    handleToggleRotate,
    handleToggleFullscreen,
    currentPitch,
    isRotating,
  ]);

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
      if (!activeAltitudeRef.current) return;
      const z = map.getZoom();
      const km = Math.round(20000 * Math.pow(0.35, Math.max(0, z - 1)));
      activeAltitudeRef.current.textContent =
        km > 1000 ? `${km.toLocaleString()} km` : `${Math.max(0.8, km).toFixed(1)} km`;
    });

    map.on("pitch", () => setCurrentPitch(map.getPitch()));

    map.on("mousemove", (e) => {
      const onEarth = e.lngLat && !isNaN(e.lngLat.lat) && !isNaN(e.lngLat.lng);
      if (activeCoordsRef.current && onEarth) {
        const lat = e.lngLat.lat;
        const lng = e.lngLat.lng;
        activeCoordsRef.current.textContent = `${lat >= 0 ? lat.toFixed(2) + "°N" : Math.abs(lat).toFixed(2) + "°S"}, ${lng >= 0 ? lng.toFixed(2) + "°E" : Math.abs(lng).toFixed(2) + "°W"}`;
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

  return (
    <div className={`relative w-full h-full min-h-screen bg-black overflow-hidden select-none font-sans ${className}`}>
      {/* Layer 1: Cosmic Stars & Nebula Background */}
      <CosmicStarfield />

      {/* Layer 2: 3D MapLibre Globe Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full bg-transparent z-10" />

      {/* Layer 3: Atmospheric Space Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,4,0.45)_100%)] z-10" />

      {/* Layer 4: Station Touchdown Briefing Card (Floats when arrived at a station) */}
      {showBriefingCard && currentRegion && (
        <div className="absolute top-24 right-5 sm:right-8 z-30 pointer-events-auto max-w-sm sm:max-w-md animate-in fade-in slide-in-from-right-4 duration-300">
          <CityBriefingCard
            region={currentRegion}
            onClose={() => setShowBriefingCard(false)}
          />
        </div>
      )}

      {/* Layer 5: Planetary Orbital Dock (Bottom Navbar with Space Theme) */}
      {showDock && (
        <div className="absolute bottom-6 inset-x-4 z-20 pointer-events-auto flex justify-center animate-in fade-in duration-300">
          <CityNavigationDock
            currentRegionId={currentRegion?.id || ""}
            onSelectRegion={(region) => flyToRegion(region)}
          />
        </div>
      )}

      {/* Layer 6: Subtle NASA Telemetry Badge on Bottom-Left */}
      <aside aria-label="Données Satellitaires NASA" className="absolute bottom-6 left-6 z-20 pointer-events-none hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 border border-white/10 backdrop-blur-md text-[10px] font-mono text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
        <span>NASA POWER • SMAP 9KM • FAO-56 PENMAN-MONTEITH</span>
      </aside>
    </div>
  );
}
