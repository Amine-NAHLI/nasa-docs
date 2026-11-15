"use client";

import React, { useState } from "react";
import { useDocsContext } from "@/context/DocsContext";
import { Cpu, Wifi, Radio, Zap, ArrowRight, CheckCircle2, AlertTriangle, Layers, Database, Shield } from "lucide-react";

// ─── 1. ESP32 Hardware Architecture Diagram ─────────────────────────────────
export function Esp32ArchitectureDiagram() {
  const { lang, theme } = useDocsContext();
  const isEn = lang === "en";
  const isDark = theme === "dark";

  const [activeBlock, setActiveBlock] = useState<string | null>("adc");

  const strokeColor = isDark ? "#3f3f46" : "#e4e4e7";
  const textColor = isDark ? "#f4f4f5" : "#18181b";
  const mutedText = isDark ? "#a1a1aa" : "#71717a";

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20 transition-colors">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <div className="text-xs font-semibold text-foreground font-mono">
            {isEn
              ? "Figure 13.1 — ESP-WROOM-32 Microcontroller Architecture & Peripherals"
              : "Figure 13.1 — Architecture Microcontrôleur ESP-WROOM-32 & Périphériques"}
          </div>
          <div className="text-[11px] text-muted-foreground font-mono">
            {isEn
              ? "Dual-Core Xtensa LX6 @ 240 MHz, 12-bit SAR ADC, and telemetry tasks"
              : "Xtensa LX6 double cœur @ 240 MHz, CAN SAR 12 bits et tâches de télémétrie"}
          </div>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-muted border border-border text-foreground">
          FreeRTOS Dual-Core
        </span>
      </div>

      {/* Responsive SVG Architecture Schema */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 760 360"
          className="w-full min-w-[620px] max-w-full h-auto text-xs font-mono select-none"
        >
          {/* Main SoC Outer Boundary */}
          <rect
            x="20"
            y="20"
            width="720"
            height="320"
            rx="8"
            fill={isDark ? "#09090b" : "#ffffff"}
            stroke={isDark ? "#27272a" : "#d4d4d8"}
            strokeWidth="1.5"
          />
          <text x="40" y="45" fill={mutedText} fontSize="11" fontWeight="600" letterSpacing="0.05em">
            ESP-WROOM-32 SYSTEM-ON-CHIP (SoC)
          </text>

          {/* Core 0 (Protocol CPU) */}
          <g
            onClick={() => setActiveBlock("core0")}
            className="cursor-pointer transition-opacity hover:opacity-90"
          >
            <rect
              x="40"
              y="65"
              width="210"
              height="115"
              rx="6"
              fill={activeBlock === "core0" ? (isDark ? "#18181b" : "#f4f4f5") : (isDark ? "#121214" : "#fafafa")}
              stroke={activeBlock === "core0" ? (isDark ? "#52525b" : "#a1a1aa") : strokeColor}
              strokeWidth="1.5"
            />
            <text x="55" y="90" fill={textColor} fontSize="12" fontWeight="600">
              PRO CPU (Core 0)
            </text>
            <text x="55" y="110" fill={mutedText} fontSize="10">
              {isEn ? "• FreeRTOS Task Manager" : "• Gestionnaire FreeRTOS"}
            </text>
            <text x="55" y="128" fill={mutedText} fontSize="10">
              {isEn ? "• Wi-Fi 802.11 b/g/n Stack" : "• Pile Wi-Fi 802.11 b/g/n"}
            </text>
            <text x="55" y="146" fill={mutedText} fontSize="10">
              {isEn ? "• TLS 1.3 / HTTPS Protocol" : "• Protocole TLS 1.3 / HTTPS"}
            </text>
            <text x="55" y="164" fill={mutedText} fontSize="10">
              {isEn ? "• Deep Sleep Wakeup Timer" : "• Réveil de Veille Profonde"}
            </text>
          </g>

          {/* Core 1 (Application CPU) */}
          <g
            onClick={() => setActiveBlock("core1")}
            className="cursor-pointer transition-opacity hover:opacity-90"
          >
            <rect
              x="270"
              y="65"
              width="210"
              height="115"
              rx="6"
              fill={activeBlock === "core1" ? (isDark ? "#18181b" : "#f4f4f5") : (isDark ? "#121214" : "#fafafa")}
              stroke={activeBlock === "core1" ? (isDark ? "#52525b" : "#a1a1aa") : strokeColor}
              strokeWidth="1.5"
            />
            <text x="285" y="90" fill={textColor} fontSize="12" fontWeight="600">
              APP CPU (Core 1)
            </text>
            <text x="285" y="110" fill={mutedText} fontSize="10">
              {isEn ? "• Sensor Acquisition Loop" : "• Boucle d'Acquisition Capteur"}
            </text>
            <text x="285" y="128" fill={mutedText} fontSize="10">
              {isEn ? "• 64-Sample Oversampling" : "• Suréchantillonnage 64 Points"}
            </text>
            <text x="285" y="146" fill={mutedText} fontSize="10">
              {isEn ? "• Median Outlier Filtering" : "• Filtre Médian Anti-Bruit"}
            </text>
            <text x="285" y="164" fill={mutedText} fontSize="10">
              {isEn ? "• ADC Non-Linearity Correction" : "• Correction Non-Linéarité CAN"}
            </text>
          </g>

          {/* Shared Memory SRAM & RTC */}
          <g
            onClick={() => setActiveBlock("mem")}
            className="cursor-pointer transition-opacity hover:opacity-90"
          >
            <rect
              x="500"
              y="65"
              width="220"
              height="115"
              rx="6"
              fill={activeBlock === "mem" ? (isDark ? "#18181b" : "#f4f4f5") : (isDark ? "#121214" : "#fafafa")}
              stroke={activeBlock === "mem" ? (isDark ? "#52525b" : "#a1a1aa") : strokeColor}
              strokeWidth="1.5"
            />
            <text x="515" y="90" fill={textColor} fontSize="12" fontWeight="600">
              Memory & RTC Subsystem
            </text>
            <text x="515" y="110" fill={mutedText} fontSize="10">
              {isEn ? "• 520 KB Internal SRAM" : "• 520 Ko SRAM Interne"}
            </text>
            <text x="515" y="128" fill={mutedText} fontSize="10">
              {isEn ? "• 4 MB External SPI Flash" : "• 4 Mo Flash SPI Externe"}
            </text>
            <text x="515" y="146" fill={mutedText} fontSize="10">
              {isEn ? "• RTC Fast/Slow Memory" : "• Mémoire RTC Fast/Slow"}
            </text>
            <text x="515" y="164" fill={mutedText} fontSize="10">
              {isEn ? "• ULP Co-Processor (8 MHz)" : "• Co-Processeur ULP (8 MHz)"}
            </text>
          </g>

          {/* Bus Interconnect */}
          <line x1="40" y1="205" x2="720" y2="205" stroke={strokeColor} strokeWidth="2" strokeDasharray="4 4" />
          <text x="340" y="200" fill={mutedText} fontSize="10" textAnchor="middle">
            INTERNAL HIGH-SPEED SYSTEM INTERCONNECT BUS
          </text>

          {/* ADC1 Subsystem (Physical Input) */}
          <g
            onClick={() => setActiveBlock("adc")}
            className="cursor-pointer transition-opacity hover:opacity-90"
          >
            <rect
              x="40"
              y="225"
              width="310"
              height="95"
              rx="6"
              fill={activeBlock === "adc" ? (isDark ? "#18181b" : "#f4f4f5") : (isDark ? "#121214" : "#fafafa")}
              stroke={activeBlock === "adc" ? "#10b981" : strokeColor}
              strokeWidth={activeBlock === "adc" ? "2" : "1.5"}
            />
            <text x="55" y="248" fill={textColor} fontSize="12" fontWeight="600">
              ADC1 Subsystem (SAR, 12-bit)
            </text>
            <text x="55" y="268" fill={mutedText} fontSize="10">
              • Input Channel: <tspan fill="#10b981" fontWeight="600">GPIO34 (ADC1_CH6)</tspan>
            </text>
            <text x="55" y="286" fill={mutedText} fontSize="10">
              • Resolution: 12-bit (0–4095 levels, 0–3.3V with 11dB atten)
            </text>
            <text x="55" y="304" fill={mutedText} fontSize="10">
              • Characteristic: Active calibration curve & non-linear deadband
            </text>
          </g>

          {/* RF / Wireless Frontend */}
          <g
            onClick={() => setActiveBlock("rf")}
            className="cursor-pointer transition-opacity hover:opacity-90"
          >
            <rect
              x="370"
              y="225"
              width="350"
              height="95"
              rx="6"
              fill={activeBlock === "rf" ? (isDark ? "#18181b" : "#f4f4f5") : (isDark ? "#121214" : "#fafafa")}
              stroke={activeBlock === "rf" ? "#3b82f6" : strokeColor}
              strokeWidth={activeBlock === "rf" ? "2" : "1.5"}
            />
            <text x="385" y="248" fill={textColor} fontSize="12" fontWeight="600">
              Radio Frequency (RF) Frontend
            </text>
            <text x="385" y="268" fill={mutedText} fontSize="10">
              • 2.4 GHz 802.11 b/g/n (Tx Power up to +20.5 dBm)
            </text>
            <text x="385" y="286" fill={mutedText} fontSize="10">
              • Peak Current: ~240 mA Tx, ~95–130 mA Rx
            </text>
            <text x="385" y="304" fill={mutedText} fontSize="10">
              • Power Management: Modem Sleep, Light Sleep, Deep Sleep (10 µA)
            </text>
          </g>
        </svg>
      </div>

      {/* Interactive Detail Box */}
      <div className="mt-3 p-3 rounded border border-border/60 bg-background text-xs font-mono">
        <div className="flex items-center gap-2 text-foreground font-semibold mb-1">
          <Cpu className="h-4 w-4 text-emerald-500" />
          <span>
            {activeBlock === "adc" && (isEn ? "ADC1 Subsystem & GPIO34 Selection" : "Sous-système CAN ADC1 & Choix de GPIO34")}
            {activeBlock === "core0" && (isEn ? "Core 0 Protocol Management" : "Gestion des Protocoles sur Cœur 0")}
            {activeBlock === "core1" && (isEn ? "Core 1 Real-Time Sampling" : "Échantillonnage Temps Réel sur Cœur 1")}
            {activeBlock === "mem" && (isEn ? "Memory & Low-Power Retention" : "Mémoire & Rétention Basse Consommation")}
            {activeBlock === "rf" && (isEn ? "RF Transmission & Power Budget" : "Émission RF & Bilan de Puissance")}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed font-sans text-xs">
          {activeBlock === "adc" &&
            (isEn
              ? "GPIO34 is hardwired to ADC1_CH6. In the ESP32, ADC2 cannot be used concurrently with active Wi-Fi transmission because the RF driver locks the ADC2 multiplexer. Using ADC1 guarantees unblocked analog reading during network transmission."
              : "La broche GPIO34 est reliée à ADC1_CH6. Sur l'ESP32, le bloc ADC2 est inutilisable lorsque le Wi-Fi émet, car le pilote radio verrouille le multiplexeur ADC2. L'emploi d'ADC1 garantit des mesures analogiques ininterrompues même pendant l'émission réseau.")}
          {activeBlock === "core0" &&
            (isEn
              ? "Core 0 handles background network telemetry, DNS resolution, TLS certificate verification, and HTTP client connection without interrupting the timing-critical ADC sampling routines executing on Core 1."
              : "Le Cœur 0 gère la télémétrie réseau, la résolution DNS, la vérification des certificats TLS et la connexion client HTTP sans jamais interrompre la cadence d'échantillonnage du Cœur 1.")}
          {activeBlock === "core1" &&
            (isEn
              ? "Core 1 executes sensor filtering algorithms: taking 64 successive analog reads over 10 ms, removing extreme min/max outliers, and computing the stable arithmetic mean to eliminate ambient 50/60 Hz electrical grid noise."
              : "Le Cœur 1 exécute les algorithmes de filtrage : acquisition de 64 échantillons successifs sur 10 ms, rejet des valeurs extrêmes et calcul de la moyenne arithmétique pour éliminer le bruit 50/60 Hz.")}
          {activeBlock === "mem" &&
            (isEn
              ? "During deep sleep periods between 30-minute sampling intervals, the main cores power down. The 8 KB RTC Slow Memory retains sensor calibration parameters and offline telemetry queue counters with a baseline current draw of only 10 µA."
              : "Pendant les périodes de veille profonde entre deux acquisitions (ex. 30 min), les cœurs principaux s'éteignent. Les 8 Ko de mémoire RTC conservent les constantes d'étalonnage avec une consommation de seulement 10 µA.")}
          {activeBlock === "rf" &&
            (isEn
              ? "Wi-Fi radio bursts draw up to 240 mA for 1.2–2.5 seconds. For remote field nodes powered by battery and small solar panels, telemetry bursts must be batched (e.g., transmitting once every 2–4 hours) to preserve energy autonomy."
              : "Les salves radio Wi-Fi consomment jusqu'à 240 mA pendant 1,2 à 2,5 s. Pour les parcelles isolées sur batterie solaire, les télétransmissions doivent être regroupées (ex. une émission toutes les 2 à 4 heures).")}
        </p>
      </div>
    </div>
  );
}

// ─── 2. Sensor Wiring Schematic Diagram ──────────────────────────────────────
export function SensorWiringSchematicDiagram() {
  const { lang, theme } = useDocsContext();
  const isEn = lang === "en";
  const isDark = theme === "dark";

  const strokeColor = isDark ? "#3f3f46" : "#e4e4e7";
  const textColor = isDark ? "#f4f4f5" : "#18181b";
  const mutedText = isDark ? "#a1a1aa" : "#71717a";

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20 transition-colors">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <div className="text-xs font-semibold text-foreground font-mono">
            {isEn
              ? "Figure 15.1 — Physical Bench Wiring Architecture: ESP32 to SEN-13637 Probe"
              : "Figure 15.1 — Schéma de Câblage Physique de Banc : ESP32 vers Sonde SEN-13637"}
          </div>
          <div className="text-[11px] text-muted-foreground font-mono">
            {isEn
              ? "Verified laboratory connection: 3-wire direct analog link with dedicated ground"
              : "Câblage vérifié en laboratoire : faisceau 3 fils analogique direct avec masse commune"}
          </div>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
          {isEn ? "Bench-Tested Reference" : "Testé sur Banc Physique"}
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 760 280"
          className="w-full min-w-[620px] max-w-full h-auto text-xs font-mono select-none"
        >
          {/* Background */}
          <rect
            x="10"
            y="10"
            width="740"
            height="260"
            rx="8"
            fill={isDark ? "#09090b" : "#ffffff"}
            stroke={isDark ? "#27272a" : "#d4d4d8"}
            strokeWidth="1.5"
          />

          {/* Left Block: ESP32 DevKit V1 Board */}
          <g>
            <rect
              x="35"
              y="35"
              width="230"
              height="210"
              rx="6"
              fill={isDark ? "#121214" : "#f4f4f5"}
              stroke={strokeColor}
              strokeWidth="1.5"
            />
            <text x="50" y="60" fill={textColor} fontSize="12" fontWeight="600">
              ESP-32 NodeMCU DevKit V1
            </text>
            <text x="50" y="78" fill={mutedText} fontSize="10">
              30-Pin Breadboard Module
            </text>

            {/* Pin 3V3 */}
            <circle cx="240" cy="110" r="5" fill="#ef4444" />
            <text x="175" y="114" fill={textColor} fontSize="11" fontWeight="600" textAnchor="end">
              3V3 (Pin 1)
            </text>
            <text x="175" y="126" fill={mutedText} fontSize="9" textAnchor="end">
              Regulated 3.3V DC
            </text>

            {/* Pin GND */}
            <circle cx="240" cy="155" r="5" fill="#71717a" />
            <text x="175" y="159" fill={textColor} fontSize="11" fontWeight="600" textAnchor="end">
              GND (Pin 2)
            </text>
            <text x="175" y="171" fill={mutedText} fontSize="9" textAnchor="end">
              Common System Ground
            </text>

            {/* Pin GPIO34 */}
            <circle cx="240" cy="205" r="5" fill="#10b981" />
            <text x="175" y="209" fill={textColor} fontSize="11" fontWeight="600" textAnchor="end">
              GPIO34 / D34
            </text>
            <text x="175" y="221" fill="#10b981" fontSize="9" fontWeight="600" textAnchor="end">
              ADC1_CH6 (Analog In)
            </text>
          </g>

          {/* Connecting Wires */}
          {/* Wire 1: Power (Red, 3.3V) */}
          <path
            d="M 245 110 L 375 110 L 375 105 L 500 105"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text x="375" y="98" fill="#ef4444" fontSize="10" textAnchor="middle" fontWeight="600">
            +3.3V DC Supply (Red Wire)
          </text>

          {/* Wire 2: Ground (Black/Gray) */}
          <path
            d="M 245 155 L 500 155"
            fill="none"
            stroke={isDark ? "#a1a1aa" : "#3f3f46"}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text x="375" y="148" fill={mutedText} fontSize="10" textAnchor="middle" fontWeight="600">
            Ground Reference (Black Wire)
          </text>

          {/* Wire 3: Signal (Green/Yellow) */}
          <path
            d="M 245 205 L 375 205 L 375 205 L 500 205"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text x="375" y="223" fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="600">
            Analog Signal V_out (Yellow/Green)
          </text>

          {/* Right Block: SparkFun SEN-13637 Probe */}
          <g>
            <rect
              x="505"
              y="35"
              width="220"
              height="210"
              rx="6"
              fill={isDark ? "#121214" : "#f4f4f5"}
              stroke={strokeColor}
              strokeWidth="1.5"
            />
            <text x="525" y="60" fill={textColor} fontSize="12" fontWeight="600">
              SparkFun SEN-13637
            </text>
            <text x="525" y="78" fill={mutedText} fontSize="10">
              Soil Moisture Sensor Probe
            </text>

            {/* Terminal VCC */}
            <circle cx="510" cy="105" r="5" fill="#ef4444" />
            <text x="525" y="109" fill={textColor} fontSize="11" fontWeight="600">
              VCC Terminal
            </text>
            <text x="525" y="121" fill={mutedText} fontSize="9">
              3.3V DC (Max 5V)
            </text>

            {/* Terminal GND */}
            <circle cx="510" cy="155" r="5" fill={isDark ? "#a1a1aa" : "#3f3f46"} />
            <text x="525" y="159" fill={textColor} fontSize="11" fontWeight="600">
              GND Terminal
            </text>
            <text x="525" y="171" fill={mutedText} fontSize="9">
              0V Ground Return
            </text>

            {/* Terminal SIG */}
            <circle cx="510" cy="205" r="5" fill="#10b981" />
            <text x="525" y="209" fill={textColor} fontSize="11" fontWeight="600">
              SIG Output
            </text>
            <text x="525" y="221" fill="#10b981" fontSize="9" fontWeight="600">
              Analog 0–3.0V Level
            </text>
          </g>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-xs font-mono">
        <div className="p-3 rounded border border-border/60 bg-background space-y-1">
          <div className="flex items-center gap-1.5 text-foreground font-semibold">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            <span>{isEn ? "Bench Validation Record" : "Enregistrement de Banc Réel"}</span>
          </div>
          <p className="text-muted-foreground font-sans text-xs">
            {isEn
              ? "Verified on physical plant pot substrate: SEN-13637 sensor powered by ESP32 3V3 rail, analog signal measured on GPIO34. Output ranges from ~3120 ADC in dry air to ~1480 ADC in fully saturated soil."
              : "Vérifié sur substrat végétal réel : sonde SEN-13637 alimentée par le rail 3V3 de l'ESP32, signal analogique mesuré sur GPIO34. Plage constatée de ~3120 CAN dans l'air sec à ~1480 CAN en sol saturé."}
          </p>
        </div>
        <div className="p-3 rounded border border-border/60 bg-background space-y-1">
          <div className="flex items-center gap-1.5 text-foreground font-semibold">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
            <span>{isEn ? "Field Deployment Requirement" : "Exigence pour Déploiement Terrain"}</span>
          </div>
          <p className="text-muted-foreground font-sans text-xs">
            {isEn
              ? "Continuous DC excitation causes galvanic corrosion on gold prongs within weeks. The production field schematic requires powering the sensor via a GPIO-gated MOSFET only during the 50 ms measurement window."
              : "L'alimentation continue en courant continu provoque la corrosion galvanique des pistes en quelques semaines. Le schéma de production terrain exige un transistor MOSFET commandé par GPIO pour n'alimenter la sonde que 50 ms par mesure."}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── 3. Sensor Calibration Curve Chart ──────────────────────────────────────
export function SensorCalibrationCurveChart() {
  const { lang, theme } = useDocsContext();
  const isEn = lang === "en";
  const isDark = theme === "dark";

  const [activePoint, setActivePoint] = useState<number | null>(2);

  // Calibration curve dataset: Volumetric Water Content θ (%) vs Raw ADC (12-bit, 0-4095)
  // Inverse relationship: higher moisture = lower electrical resistance = lower ADC voltage
  const points = [
    { vwc: 0, adc: 3120, labelEn: "Dry Air Benchmark", labelFr: "Air Sec Référence", zone: "dry" },
    { vwc: 8, adc: 2850, labelEn: "Hygroscopic Water", labelFr: "Eau Hygroscopique", zone: "dry" },
    { vwc: 15, adc: 2510, labelEn: "Wilting Point (θ_WP)", labelFr: "Point de Flétrissement (θ_WP)", zone: "opt" },
    { vwc: 24, adc: 2240, labelEn: "Readily Available (RAW)", labelFr: "Eau Facilement Utilisable", zone: "opt" },
    { vwc: 32, adc: 1910, labelEn: "Field Capacity (θ_FC)", labelFr: "Capacité au Champ (θ_FC)", zone: "opt" },
    { vwc: 40, adc: 1620, labelEn: "Near Saturation", labelFr: "Proche Saturation", zone: "wet" },
    { vwc: 45, adc: 1480, labelEn: "Water Immersion Benchmark", labelFr: "Immersion Eau Référence", zone: "wet" },
  ];

  const width = 640;
  const height = 240;
  const padding = { top: 25, right: 35, bottom: 40, left: 55 };

  const minVwc = 0;
  const maxVwc = 50;
  const minAdc = 1000;
  const maxAdc = 3500;

  const getX = (vwc: number) => padding.left + ((vwc - minVwc) / (maxVwc - minVwc)) * (width - padding.left - padding.right);
  const getY = (adc: number) => height - padding.bottom - ((adc - minAdc) / (maxAdc - minAdc)) * (height - padding.top - padding.bottom);

  const pathData = points.map((p, idx) => `${idx === 0 ? "M" : "L"} ${getX(p.vwc)} ${getY(p.adc)}`).join(" ");

  const strokeColor = isDark ? "#ffffff" : "#18181b";
  const gridColor = isDark ? "#27272a" : "#f4f4f5";
  const textColor = isDark ? "#a1a1aa" : "#71717a";

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20 transition-colors">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <div className="text-xs font-semibold text-foreground font-mono">
            {isEn
              ? "Figure 16.1 — Illustrative Calibration Curve: Raw ADC vs Volumetric Moisture (θ)"
              : "Figure 16.1 — Courbe d'Étalonnage Illustrative : Valeur CAN vs Teneur Volumique (θ)"}
          </div>
          <div className="text-[11px] text-muted-foreground font-mono">
            {isEn
              ? "SparkFun SEN-13637 non-linear inverse characteristic in Saïss loam soil"
              : "Caractéristique inverse non-linéaire de la sonde SparkFun SEN-13637 sur limon du Saïss"}
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-muted-foreground">{isEn ? "Available Water (RAW)" : "Eau Disponible"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-muted-foreground">{isEn ? "Dry Stress" : "Stress Hydrique"}</span>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full min-w-[580px] max-w-full h-auto text-xs font-mono select-none"
        >
          {/* Horizontal Grid lines */}
          {[1500, 2000, 2500, 3000].map((val) => (
            <g key={val}>
              <line
                x1={padding.left}
                y1={getY(val)}
                x2={width - padding.right}
                y2={getY(val)}
                stroke={gridColor}
                strokeWidth="1"
              />
              <text x={padding.left - 8} y={getY(val) + 3} fill={textColor} fontSize="9" textAnchor="end">
                {val}
              </text>
            </g>
          ))}

          {/* Vertical Grid lines */}
          {[10, 20, 30, 40].map((val) => (
            <g key={val}>
              <line
                x1={getX(val)}
                y1={padding.top}
                x2={getX(val)}
                y2={height - padding.bottom}
                stroke={gridColor}
                strokeWidth="1"
              />
              <text x={getX(val)} y={height - padding.bottom + 16} fill={textColor} fontSize="9" textAnchor="middle">
                {val}%
              </text>
            </g>
          ))}

          {/* Shaded Optimal RAW Zone */}
          <rect
            x={getX(15)}
            y={padding.top}
            width={getX(32) - getX(15)}
            height={height - padding.top - padding.bottom}
            fill="#10b981"
            fillOpacity="0.08"
          />
          <text x={(getX(15) + getX(32)) / 2} y={padding.top + 14} fill="#10b981" fontSize="10" fontWeight="600" textAnchor="middle">
            {isEn ? "OPTIMAL RAW ZONE (15%–32%)" : "ZONE UTILE OPTIMALE (15%–32%)"}
          </text>

          {/* Axes */}
          <line
            x1={padding.left}
            y1={height - padding.bottom}
            x2={width - padding.right}
            y2={height - padding.bottom}
            stroke={isDark ? "#52525b" : "#d4d4d8"}
            strokeWidth="1.5"
          />
          <line
            x1={padding.left}
            y1={padding.top}
            x2={padding.left}
            y2={height - padding.bottom}
            stroke={isDark ? "#52525b" : "#d4d4d8"}
            strokeWidth="1.5"
          />

          {/* Axis Labels */}
          <text x={(width + padding.left) / 2} y={height - 6} fill={textColor} fontSize="10" textAnchor="middle" fontWeight="500">
            {isEn ? "Volumetric Soil Moisture Content θ (% m³/m³)" : "Teneur Volumique en Eau du Sol θ (% m³/m³)"}
          </text>
          <text
            x={-height / 2}
            y="14"
            transform="rotate(-90)"
            fill={textColor}
            fontSize="10"
            textAnchor="middle"
            fontWeight="500"
          >
            {isEn ? "Raw 12-Bit ADC Value (0–4095)" : "Valeur CAN Brute 12 Bits (0–4095)"}
          </text>

          {/* Curve Line */}
          <path d={pathData} fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />

          {/* Data Points */}
          {points.map((p, idx) => {
            const isSelected = activePoint === idx;
            return (
              <g
                key={idx}
                onClick={() => setActivePoint(idx)}
                className="cursor-pointer transition-transform hover:scale-125"
              >
                <circle
                  cx={getX(p.vwc)}
                  cy={getY(p.adc)}
                  r={isSelected ? "6" : "4.5"}
                  fill={p.zone === "opt" ? "#10b981" : p.zone === "dry" ? "#f59e0b" : "#3b82f6"}
                  stroke={isDark ? "#09090b" : "#ffffff"}
                  strokeWidth="2"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Point Callout */}
      {activePoint !== null && (
        <div className="mt-3 p-3 rounded border border-border/60 bg-background text-xs font-mono flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold text-foreground">
              {isEn ? points[activePoint].labelEn : points[activePoint].labelFr} :
            </span>{" "}
            <span className="text-muted-foreground font-sans">
              θ = <strong className="text-foreground font-mono">{points[activePoint].vwc}%</strong> (
              {(points[activePoint].vwc / 100).toFixed(2)} m³/m³), Raw ADC ={" "}
              <strong className="text-foreground font-mono">{points[activePoint].adc}</strong>
            </span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] bg-muted border border-border text-foreground">
            M = {(((3120 - points[activePoint].adc) / (3120 - 1480)) * 100).toFixed(1)}% Index
          </span>
        </div>
      )}
    </div>
  );
}

// ─── 4. SMAP vs Ground Complementarity Diagram ──────────────────────────────
export function SmapVsGroundComplementarityDiagram() {
  const { lang, theme } = useDocsContext();
  const isEn = lang === "en";
  const isDark = theme === "dark";

  const strokeColor = isDark ? "#3f3f46" : "#e4e4e7";
  const textColor = isDark ? "#f4f4f5" : "#18181b";
  const mutedText = isDark ? "#a1a1aa" : "#71717a";

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20 transition-colors">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <div className="text-xs font-semibold text-foreground font-mono">
            {isEn
              ? "Figure 18.1 — Multi-Scale Complementarity: NASA SMAP 9-km vs In-Situ Ground Probe"
              : "Figure 18.1 — Complémentarité Multi-Échelles : NASA SMAP 9-km vs Sonde In-Situ"}
          </div>
          <div className="text-[11px] text-muted-foreground font-mono">
            {isEn
              ? "Dual-scale observation convergence: regional satellite macro-context × root-zone in-situ dynamics"
              : "Convergence d'observation duale : macro-contexte spatial régional × dynamique racinaire in-situ"}
          </div>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-muted border border-border text-foreground">
          Spatial Downscaling
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        {/* Branch 1: NASA SMAP Satellite */}
        <div className="p-4 rounded-md border border-border/60 bg-background space-y-2">
          <div className="flex items-center gap-2">
            <Radio className="h-4 w-4 text-blue-500" />
            <span className="font-semibold text-xs font-mono uppercase text-foreground">
              NASA SMAP Level-4 (SPL4SMGP)
            </span>
          </div>
          <ul className="text-xs space-y-1.5 text-muted-foreground font-mono">
            <li>• <strong className="text-foreground">Scale:</strong> 9 km × 9 km regional grid</li>
            <li>• <strong className="text-foreground">Sensing:</strong> L-band microwave radiometer (1.4 GHz)</li>
            <li>• <strong className="text-foreground">Cadence:</strong> 3-hour model assimilation</li>
            <li>• <strong className="text-foreground">Depth:</strong> Surface (0–5 cm) & Root-zone (0–100 cm)</li>
            <li>• <strong className="text-foreground">Strength:</strong> Regional drought trend without local maintenance</li>
            <li>• <strong className="text-foreground">Limitation:</strong> Cannot detect single-furrow irrigation events</li>
          </ul>
        </div>

        {/* Branch 2: Physical Ground Sensor */}
        <div className="p-4 rounded-md border border-border/60 bg-background space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-emerald-500" />
            <span className="font-semibold text-xs font-mono uppercase text-foreground">
              In-Situ ESP32 Edge Sensor
            </span>
          </div>
          <ul className="text-xs space-y-1.5 text-muted-foreground font-mono">
            <li>• <strong className="text-foreground">Scale:</strong> Point reading (&lt; 5 cm prong radius)</li>
            <li>• <strong className="text-foreground">Sensing:</strong> Substrate dielectric / galvanic resistance</li>
            <li>• <strong className="text-foreground">Cadence:</strong> 15–30 minute continuous real-time</li>
            <li>• <strong className="text-foreground">Depth:</strong> Fixed probe placement (e.g. 15 cm depth)</li>
            <li>• <strong className="text-foreground">Strength:</strong> Instantaneous detection of irrigation infiltration</li>
            <li>• <strong className="text-foreground">Limitation:</strong> Probe drift, air pockets & maintenance required</li>
          </ul>
        </div>
      </div>

      {/* Synthesis Node */}
      <div className="p-4 rounded-md border border-emerald-500/30 bg-emerald-500/5 mt-3 space-y-2">
        <div className="flex items-center gap-2 text-foreground font-mono text-xs font-semibold">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <span>
            {isEn
              ? "Synthesis Formula: Dual-Scale Convergence Engine"
              : "Formule de Synthèse : Moteur de Convergence Duale"}
          </span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed font-sans">
          {isEn
            ? "NASA SMAP observations provide the regional boundary condition and prevent spatial blind spots in uninstrumented plots. Local ESP32 ground readings provide real-time infiltration ground truth to calibrate crop water uptake. Together, they eliminate false irrigation alerts triggered when regional surfaces appear dry while root-zone moisture remains adequate."
            : "Les observations NASA SMAP fournissent la condition aux limites régionale et comblent les parcelles non équipées. Les capteurs ESP32 locaux fournissent la vérité terrain d'infiltration en temps réel pour calibrer le prélèvement racinaire. Ensemble, ils éliminent les faux déclenchements d'arrosage lorsque la surface satellitaire paraît sèche mais que la réserve racinaire est encore suffisante."}
        </p>
      </div>
    </div>
  );
}

// ─── 5. IoT Telemetry Pipeline Diagram ──────────────────────────────────────
export function IotTelemetryPipelineDiagram() {
  const { lang, theme } = useDocsContext();
  const isEn = lang === "en";
  const isDark = theme === "dark";

  const steps = [
    {
      num: "01",
      titleEn: "Sampling & Oversample",
      titleFr: "Échantillonnage 64 pts",
      descEn: "Core 1 acquires 64 ADC reads, applies median noise filter",
      descFr: "Cœur 1 acquiert 64 mesures CAN et filtre le bruit",
      icon: Cpu,
    },
    {
      num: "02",
      titleEn: "TLS 1.3 Transport",
      titleFr: "Transport Chiffré TLS",
      descEn: "Core 0 dispatches encrypted HTTPS POST with token auth",
      descFr: "Cœur 0 émet le POST HTTPS sécurisé par jeton",
      icon: Wifi,
    },
    {
      num: "03",
      titleEn: "FastAPI Ingestion",
      titleFr: "Ingestion FastAPI",
      descEn: "Pydantic schema validation & null missingness marker check",
      descFr: "Validation de schéma Pydantic et traitement des valeurs nulles",
      icon: Database,
    },
    {
      num: "04",
      titleEn: "Decision Tribunal",
      titleFr: "Tribunal Décisionnel",
      descEn: "Physical engine combines probe + NASA SMAP L4 balance",
      descFr: "Moteur physique confrontant la sonde au bilan SMAP L4",
      icon: Shield,
    },
  ];

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20 transition-colors">
      <div className="text-xs font-semibold text-foreground font-mono mb-1">
        {isEn
          ? "Figure 17.1 — End-to-End Telemetry Pipeline & Data Quality Path"
          : "Figure 17.1 — Pipeline de Télémétrie de Bout en Bout & Contrôle Qualité"}
      </div>
      <div className="text-[11px] text-muted-foreground font-mono mb-4">
        {isEn
          ? "From localized edge ADC measurement to central biophysical decision court"
          : "De la mesure CAN locale du capteur au tribunal biophysique central"}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((st) => {
          const Icon = st.icon;
          return (
            <div
              key={st.num}
              className="p-3.5 rounded border border-border/60 bg-background space-y-1.5"
            >
              <div className="flex items-center justify-between text-muted-foreground font-mono text-[11px]">
                <span className="font-semibold text-foreground">{st.num}</span>
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="font-medium text-xs text-foreground font-sans">
                {isEn ? st.titleEn : st.titleFr}
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed font-sans">
                {isEn ? st.descEn : st.descFr}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
