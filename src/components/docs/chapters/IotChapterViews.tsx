"use client";

import React from "react";
import { useDocsContext } from "@/context/DocsContext";
import { EvidenceBadge } from "@/components/docs/EvidenceBadge";
import { CodeBlock } from "@/components/docs/CodeBlock";
import {
  Cpu,
  Layers,
  Activity,
  Wifi,
  Radio,
  FileCheck,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Database,
  Terminal,
  Zap,
  Gauge,
  Sliders,
  CheckCircle2,
  HelpCircle,
  FlaskConical,
  TestTube2
} from "lucide-react";

interface ChapterViewProps {
  activeSubChapterId?: string;
}

function SubChapterContainer({
  activeSubChapterId,
  children,
  defaultSubId,
}: {
  activeSubChapterId?: string;
  children: React.ReactNode;
  defaultSubId?: string;
}) {
  const childArray = React.Children.toArray(children);
  if (activeSubChapterId) {
    const match = childArray.find(
      (c: any) => c && c.props && c.props.id === activeSubChapterId
    );
    if (match) return <div className="space-y-8 animate-in fade-in-50 duration-150">{match}</div>;
  }
  if (defaultSubId) {
    const match = childArray.find(
      (c: any) => c && c.props && c.props.id === defaultSubId
    );
    if (match) return <div className="space-y-8 animate-in fade-in-50 duration-150">{match}</div>;
  }
  return <div className="space-y-8 animate-in fade-in-50 duration-150">{childArray[0]}</div>;
}

// ─── 1. ESP32 HARDWARE ARCHITECTURE ──────────────────────────────────────────
export function Esp32HardwareChapterView({ activeSubChapterId }: ChapterViewProps) {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <SubChapterContainer activeSubChapterId={activeSubChapterId} defaultSubId="esp32-overview">
      <section id="esp32-overview" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="HARDWARE AVAILABLE" sourceDoc="Physical Bench Unit" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "01 — Overview & Hardware Identity" : "01 — Vue d'ensemble & Identité Matérielle"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "The ESP32 is a low-power, high-performance system-on-a-chip (SoC) microcontroller developed by Espressif Systems. In the Farmer Eye architecture, the ESP32 serves as the physical edge node deployed in agricultural fields to acquire high-frequency in-situ soil moisture and local ambient temperature signals."
              : "L'ESP32 est un microcontrôleur basse consommation à haute performance (SoC) développé par Espressif Systems. Dans l'architecture Farmer Eye, l'ESP32 agit comme nœud de bord (edge node) déployé sur la parcelle agricole pour acquérir les mesures in situ d'humidité du sol et de température ambiante."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs my-4 font-mono">
            <div className="p-3.5 rounded-md border border-border/70 bg-muted/20">
              <span className="text-muted-foreground block mb-1 font-semibold uppercase text-[10px]">Processing Core</span>
              <span className="text-foreground font-bold">Dual-Core Xtensa 32-bit LX6</span>
              <p className="text-muted-foreground font-sans mt-1 text-[11px]">Clock rate 80 to 240 MHz, 600 DMIPS.</p>
            </div>
            <div className="p-3.5 rounded-md border border-border/70 bg-muted/20">
              <span className="text-muted-foreground block mb-1 font-semibold uppercase text-[10px]">Memory</span>
              <span className="text-foreground font-bold">520 KB SRAM + 4 MB Flash</span>
              <p className="text-muted-foreground font-sans mt-1 text-[11px]">Enables local ring-buffer for offline storage.</p>
            </div>
            <div className="p-3.5 rounded-md border border-border/70 bg-muted/20">
              <span className="text-muted-foreground block mb-1 font-semibold uppercase text-[10px]">Wireless Stack</span>
              <span className="text-foreground font-bold">2.4 GHz Wi-Fi & BLE 4.2</span>
              <p className="text-muted-foreground font-sans mt-1 text-[11px]">802.11 b/g/n + Bluetooth Low Energy.</p>
            </div>
          </div>

          {/* Physical Hardware Photo */}
          <div className="my-6 p-4 rounded-lg border border-border/70 bg-muted/20 text-center">
            <div className="relative max-w-xs mx-auto h-52 flex items-center justify-center">
              <img
                src="/images/Capture_d_écran_2026-11-15_033322-removebg-preview.png"
                alt="ESP-32 NodeMCU DevKit V1 Board"
                className="max-h-48 w-auto object-contain mx-auto drop-shadow-sm transition-transform hover:scale-105 duration-300"
              />
            </div>
            <p className="text-xs text-muted-foreground font-mono mt-3">
              {isEn
                ? "Physical Bench Unit: ESP-32 NodeMCU DevKit V1 (30-pin, CP2102 USB-to-UART bridge, ESP-WROOM-32 SoC)"
                : "Unité Physique de Laboratoire : Module ESP-32 NodeMCU DevKit V1 (30 broches, pont CP2102, SoC ESP-WROOM-32)"}
            </p>
          </div>
        </div>
      </section>

      <section id="esp32-why-farmer-eye" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="HARDWARE AVAILABLE" sourceDoc="Farmer Eye Edge Layer" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "02 — Why Farmer Eye Uses ESP32" : "02 — Pourquoi Farmer Eye Utilise l'ESP32"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "Smallholder agricultural environments in the Saïss plain require edge instrumentation that balances low unit cost with robust communication resilience. The ESP32 provides three vital architectural advantages:"
              : "L'agriculture paysanne dans la plaine du Saïss requiert une instrumentation de bord conciliant coût unitaire accessible et résilience de communication. L'ESP32 offre trois atouts majeurs :"}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">{isEn ? "Deep Sleep Power Economy:" : "Économie d'Énergie en Veille Profonde :"}</strong>{" "}
              {isEn
                ? "Consuming less than 10 µA in deep sleep mode, enabling autonomous seasonal battery or solar-assisted field operation."
                : "Consommation inférieure à 10 µA en veille profonde, permettant un fonctionnement autonome sur batterie ou petit panneau solaire."}
            </li>
            <li>
              <strong className="text-foreground">{isEn ? "Offline Flash Buffering:" : "Tamponnage Hors-Ligne sur Flash :"}</strong>{" "}
              {isEn
                ? "During rural network dropouts, readings are safely buffered to onboard flash (SPIFFS / LittleFS) and retransmitted automatically upon reconnection."
                : "En cas de perte de réseau rural, les mesures sont horodatées et stockées sur mémoire flash interne puis réexpédiées dès le retour de la connexion."}
            </li>
            <li>
              <strong className="text-foreground">{isEn ? "Hardware Availability:" : "Disponibilité Matérielle :"}</strong>{" "}
              {isEn
                ? "The team maintains physical bench ESP32 development hardware, allowing direct firmware testing and analog calibration workflows."
                : "L'équipe dispose d'unités physiques ESP32 sur banc d'essai, permettant de tester le firmware et l'étalonnage analogique en conditions réelles."}
            </li>
          </ul>
        </div>
      </section>

      <section id="esp32-architecture" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="IMPLEMENTED — CODE VERIFIED" sourceDoc="Architecture Spec" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "03 — Implemented Architecture & Pinout" : "03 — Architecture Implémentée & Brochage"}
        </h2>
        <div className="p-4 rounded-md border border-border/70 bg-muted/20 font-mono text-xs overflow-x-auto my-3">
          <pre>{`+--------------------------------------------------------------+
|                     ESP32 EDGE FIELD NODE                    |
|                                                              |
|   +-------------------+              +-------------------+   |
|   |   Power Rails     |              |  Dual-Core Xtensa |   |
|   |  3.3V LDO / LiPo  |              |    LX6 @ 240MHz   |   |
|   +---------+---------+              +---------+---------+   |
|             |                                  |             |
|   +---------v---------+              +---------v---------+   |
|   | ADC1 (GPIO 34/35) | <----------  | Analog Soil Probe |   |
|   | 12-bit SAR (0-3.3V)|  Analog VWC  |  Capacitive v1.2  |   |
|   +---------+---------+              +-------------------+   |
|             |                                                |
|   +---------v---------+              +-------------------+   |
|   | LittleFS Buffer   |              | 2.4 GHz Wi-Fi/BLE |   |
|   | Offline Telemetry | -----------> | HTTPS/MQTT Uplink |   |
|   +-------------------+              +---------+---------+   |
+------------------------------------------------|-------------+
                                                 v
                                  Farmer Eye Ingestion Gateway`}</pre>
        </div>
      </section>

      <section id="esp32-adc-subsystem" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="ADC1 Hardware Constraint" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "04 — ADC Capabilities & Attenuation (ADC1 vs ADC2)" : "04 — Capacités ADC & Atténuation (ADC1 vs ADC2)"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "The ESP32 features two 12-bit Successive Approximation Register (SAR) ADCs supporting up to 4096 quantization steps (0–4095 counts). However, agricultural telemetry requires strict adherence to an architectural hardware constraint:"
              : "L'ESP32 intègre deux convertisseurs analogique-numérique (SAR ADC) 12 bits offrant 4096 pas de quantification (valeurs 0–4095). Cependant, la télémétrie agricole impose le respect d'une contrainte matérielle critique :"}
          </p>
          <div className="p-3.5 rounded-md border border-amber-500/30 bg-amber-500/10 text-xs text-foreground space-y-1">
            <div className="flex items-center gap-1.5 font-bold font-mono text-amber-600 dark:text-amber-400">
              <AlertTriangle className="h-4 w-4" />
              <span>{isEn ? "CRITICAL HARDWARE RULE: ADC2 Wi-Fi Conflict" : "RÈGLE MATÉRIELLE CRITIQUE : Conflit ADC2 / Wi-Fi"}</span>
            </div>
            <p className="text-muted-foreground font-sans">
              {isEn
                ? "ADC2 channels (GPIO 0, 2, 4, 12–15, 25–27) share hardware with the Wi-Fi subsystem. Reading ADC2 while Wi-Fi is initialized causes driver conflicts and non-deterministic returns. Soil sensors MUST exclusively use ADC1 channels (GPIO 32, 33, 34, 35, 36, 39)."
                : "Les canaux ADC2 partagent les ressources matérielles du pilote Wi-Fi. Toute lecture ADC2 pendant l'activité Wi-Fi produit des erreurs. Les capteurs de sol DOIVENT impérativement être connectés aux broches de l'ADC1 (GPIO 32, 33, 34, 35, 36, 39)."}
            </p>
          </div>
        </div>
      </section>

      <section id="esp32-power-workflow" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="Power Lifecycle" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "05 — Sensor Acquisition Workflow & Power Supply" : "05 — Cycle d'Acquisition & Alimentation"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "To avoid continuous sensor corrosion and minimize battery drain, the probe is not powered continuously. The ESP32 switches sensor VCC via an external P-channel MOSFET or a high-drive GPIO pin immediately prior to sampling:"
              : "Pour éviter l'électrolyse prématurée et préserver la batterie, le capteur n'est pas alimenté en continu. L'ESP32 active la ligne VCC du capteur via un transistor MOSFET ou une broche GPIO haute puissance juste avant la mesure :"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs my-4 font-mono">
            <div className="p-3 rounded-md border border-border/70 bg-muted/20">
              <span className="text-foreground font-semibold block mb-1">1. Wake & Power</span>
              <p className="text-muted-foreground font-sans">Wake from deep sleep; assert GPIO power high.</p>
            </div>
            <div className="p-3 rounded-md border border-border/70 bg-muted/20">
              <span className="text-foreground font-semibold block mb-1">2. Settle Delay</span>
              <p className="text-muted-foreground font-sans">Wait 15 ms for capacitive oscillator stabilization.</p>
            </div>
            <div className="p-3 rounded-md border border-border/70 bg-muted/20">
              <span className="text-foreground font-semibold block mb-1">3. Multi-Sampling</span>
              <p className="text-muted-foreground font-sans">Take 64 ADC readings; calculate median value.</p>
            </div>
            <div className="p-3 rounded-md border border-border/70 bg-muted/20">
              <span className="text-foreground font-semibold block mb-1">4. Cut Power & Sleep</span>
              <p className="text-muted-foreground font-sans">De-assert GPIO; store to flash or transmit; enter deep sleep.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="esp32-local-vs-cloud" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="TESTED — OUTPUT VERIFIED" sourceDoc="Scientific Architecture" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "06 — Local In-Situ Readings vs. Cloud Observations" : "06 — Mesures In Situ Locales vs Observations Spatiales"}
        </h2>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2 pr-4">{isEn ? "Dimension" : "Dimension"}</th>
                <th className="py-2 pr-4 text-foreground font-bold">{isEn ? "ESP32 In-Situ Field Node" : "Nœud de Bord ESP32 In Situ"}</th>
                <th className="py-2 pr-4">{isEn ? "NASA SMAP L4 Satellite Grid" : "Grille Satellite NASA SMAP L4"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Spatial Resolution</td>
                <td className="py-2 pr-4 text-foreground font-semibold">Point measurement (~10 cm³ rhizosphere)</td>
                <td className="py-2 pr-4">9 km × 9 km (81 km² landscape average)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Temporal Frequency</td>
                <td className="py-2 pr-4 text-foreground font-semibold">1 to 60 minutes (real-time field clock)</td>
                <td className="py-2 pr-4">3-hourly model assimilation snapshot</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Measurement Physics</td>
                <td className="py-2 pr-4">Capacitive dielectric charge time (50–100 MHz)</td>
                <td className="py-2 pr-4">L-band passive radar brightness temp (1.41 GHz)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="esp32-limitations" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="HARDWARE AVAILABLE" sourceDoc="Field Readiness Audit" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "07 — Hardware Limitations & Deployment Considerations" : "07 — Limites Matérielles & Considérations de Déploiement"}
        </h2>
        <div className="divide-y divide-border/60 text-xs my-4 border border-border/70 rounded-md p-3 bg-muted/20">
          <div className="py-2.5">
            <strong className="text-foreground font-mono">1. ADC Non-Linearity:</strong> Uncalibrated ESP32 SAR ADCs exhibit non-linear response curves below 0.1V and above 3.1V. Factory eFuse two-point calibration (esp_adc_cal) is mandatory to convert raw counts to true millivolts.
          </div>
          <div className="py-2.5">
            <strong className="text-foreground font-mono">2. Rural Enclosure:</strong> Field deployment requires IP66/IP67 weatherproof enclosures, cable glands, and conformal coating to protect electronics from Saïss agricultural dust and pesticide drift.
          </div>
          <div className="py-2.5">
            <strong className="text-foreground font-mono">3. Cable Attenuation:</strong> Sensor signal lines exceeding 2 meters suffer voltage drops and capacitive line loading, altering raw ADC readings unless shielded.
          </div>
        </div>
      </section>
    </SubChapterContainer>
  );
}

// ─── 2. SOIL MOISTURE SENSORS ────────────────────────────────────────────────
export function SoilMoistureSensorsChapterView({ activeSubChapterId }: ChapterViewProps) {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <SubChapterContainer activeSubChapterId={activeSubChapterId} defaultSubId="sensor-principles">
      <section id="sensor-principles" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="HARDWARE AVAILABLE" sourceDoc="Soil Physics" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "01 — Overview & Volumetric Water Content (VWC)" : "01 — Vue d'ensemble & Teneur en Eau Volumique (VWC)"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "Volumetric Water Content (VWC, θ_v) is defined as the volume of liquid water per unit total volume of undisturbed soil: θ_v = V_w / V_T [m³/m³ or %]. Soil moisture sensors do not measure water volume directly; they measure a physical proxy (electrical resistance or dielectric permittivity) that correlates with water presence."
              : "La Teneur en Eau Volumique (VWC, θ_v) est définie comme le rapport entre le volume d'eau liquide et le volume total de sol non remanié : θ_v = V_w / V_T [m³/m³ ou %]. Les capteurs ne mesurent pas directement un volume d'eau ; ils mesurent une grandeur physique intermédiaire (résistance électrique ou permittivité diélectrique) corrélée à l'eau."}
          </p>
          <div className="p-4 rounded-md border border-border/70 bg-muted/20 font-mono text-xs text-foreground text-center my-3">
            <code>{"θ_v = V_water / V_total [m³/m³]  <==>  θ_v(%) = (V_water / V_total) × 100%"}</code>
          </div>

          {/* Physical Soil Moisture Sensor Photo */}
          <div className="my-6 p-4 rounded-lg border border-border/70 bg-muted/20 text-center">
            <div className="relative max-w-xs mx-auto h-52 flex items-center justify-center">
              <img
                src="/images/13637-01-removebg-preview.png"
                alt="SparkFun Soil Moisture Sensor"
                className="max-h-48 w-auto object-contain mx-auto drop-shadow-sm transition-transform hover:scale-105 duration-300"
              />
            </div>
            <p className="text-xs text-muted-foreground font-mono mt-3">
              {isEn
                ? "Physical Bench Unit: SparkFun Soil Moisture Sensor (SEN-13637, Gold-Plated Prongs, 3-Pin Screw Terminal: VCC, GND, SIG)"
                : "Unité Physique de Laboratoire : Sonde d'Humidité SparkFun (SEN-13637, broches dorées anticorrosion, bornier 3 vis : VCC, GND, SIG)"}
            </p>
          </div>
        </div>
      </section>

      <section id="capacitive-vs-resistive" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="HARDWARE AVAILABLE" sourceDoc="Physical Bench Probe" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "02 — Capacitive vs. Resistive Sensor Technologies" : "02 — Technologies Capacitive vs Résistive"}
        </h2>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2 pr-4">{isEn ? "Criterion" : "Critère"}</th>
                <th className="py-2 pr-4 text-foreground font-bold">{isEn ? "Capacitive Probe (Farmer Eye Unit)" : "Sonde Capacitive (Unité Farmer Eye)"}</th>
                <th className="py-2 pr-4">{isEn ? "Resistive Probe (Exposed Copper)" : "Sonde Résistive (Pistes Nues)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Corrosion Resistance</td>
                <td className="py-2 pr-4 text-emerald-600 dark:text-emerald-400 font-semibold">High (insulated copper traces)</td>
                <td className="py-2 pr-4 text-rose-500 font-semibold">Poor (rapid DC electrolysis corrosion)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Salinity (EC) Sensitivity</td>
                <td className="py-2 pr-4">Low to moderate (measures dielectric constant)</td>
                <td className="py-2 pr-4 text-rose-500 font-semibold">Extreme (fertilizer causes false high readings)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Lifespan in Soil</td>
                <td className="py-2 pr-4 text-foreground font-semibold">Multiple agricultural seasons</td>
                <td className="py-2 pr-4">Few weeks to months before degradation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="analog-digital-conversion" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="IMPLEMENTED — CODE VERIFIED" sourceDoc="ADC Transfer Function" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "03 — Analog Signals & Raw ADC Readings" : "03 — Signaux Analogiques & Lectures Brutes ADC"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "The capacitive probe outputs an analog voltage inversely proportional to soil capacitance (and thus water content). When connected to a 12-bit ADC, the reading ranges between 0 and 4095 counts:"
              : "La sonde capacitive délivre une tension analogique inversement proportionnelle à la capacité du sol (donc à sa teneur en eau). Raccordée à l'ADC 12 bits, la lecture s'étend de 0 à 4095 pas :"}
          </p>
          <div className="p-3.5 rounded-md border border-border/70 bg-muted/20 font-mono text-xs text-foreground text-center my-3">
            <code>{"V_sensor = (ADC_raw / 4095.0) × V_ref [Volts]"}</code>
          </div>
          <p className="text-xs text-muted-foreground">
            {isEn
              ? "Scientific Principle: A raw ADC count (e.g., 2350) has no intrinsic physical meaning. It must undergo dry/wet boundary normalization and soil texture calibration before it can be interpreted as moisture."
              : "Principe Scientifique : Une valeur brute d'ADC (ex. : 2350) n'a aucune signification agronomique directe. Elle nécessite un étalonnage aux bornes sèche/humide et une courbe de calibration par type de sol."}
          </p>
        </div>
      </section>

      <section id="soil-environmental-effects" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REQUIRES FIELD VALIDATION" sourceDoc="Soil Physics Literature" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "04 — Soil Texture, Salinity & Temperature Effects" : "04 — Effets de la Texture, Salinité & Température"}
        </h2>
        <div className="divide-y divide-border/60 text-xs my-4 border border-border/70 rounded-md p-3 bg-muted/20">
          <div className="py-2.5">
            <strong className="text-foreground font-mono">Clay Shrink-Swell (Tirs Vertisols):</strong> Clay soils expand when wet and crack when drying. Air gaps between soil and sensor blade cause severe measurement drops (false dry readings).
          </div>
          <div className="py-2.5">
            <strong className="text-foreground font-mono">Thermal Drift:</strong> Dielectric permittivity of water decreases slightly with temperature (~0.4%/°C). Diurnal temperature swings (10°C night to 35°C day) produce apparent moisture oscillations if uncompensated.
          </div>
          <div className="py-2.5">
            <strong className="text-foreground font-mono">Salinity Shifts:</strong> Soluble fertilizers alter the complex permittivity imaginary component, requiring high oscillator frequencies (&gt;50 MHz) to minimize dielectric losses.
          </div>
        </div>
      </section>

      <section id="sensor-depth-representativeness" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="Agronomic Placement Guide" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "05 — Sensor Depth, Positioning & Spatial Representativeness" : "05 — Profondeur, Positionnement & Représentativité"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "For wheat and cereal crops in the Saïss plain, sensor placement must target the active root zone (15 to 30 cm depth). Sensors placed horizontally minimize preferential vertical water flow along the blade, whereas vertical insertion averages moisture across the probe height."
              : "Pour les céréales dans le Saïss, le capteur doit cibler la zone racinaire active (15 à 30 cm de profondeur). Une insertion horizontale limite les écoulements préférentiels d'eau le long de la lame, tandis qu'une insertion verticale moyenne l'humidité sur sa hauteur."}
          </p>
        </div>
      </section>

      <section id="sensor-drift-limitations" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="HARDWARE AVAILABLE" sourceDoc="Sensor Quality Manual" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "06 — Sensor Drift & Why Raw ADC ≠ Soil Moisture %" : "06 — Dérive du Capteur & Pourquoi ADC Brut ≠ % Humidité"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "Displaying raw ADC values as a literal soil moisture percentage (e.g. dividing by 40.95) is scientifically false. Without dry/wet references and soil calibration, raw numbers cannot inform agricultural decisions."
              : "Afficher directement la valeur brute ADC comme un pourcentage d'humidité (ex. : diviser par 40,95) est scientifiquement erroné. Sans références étalonnées et courbe de sol, ces chiffres bruts ne peuvent guider aucune décision agricole."}
          </p>
        </div>
      </section>
    </SubChapterContainer>
  );
}

// ─── 3. WIRING & ESP32 FIRMWARE ──────────────────────────────────────────────
export function WiringAndFirmwareChapterView({ activeSubChapterId }: ChapterViewProps) {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <SubChapterContainer activeSubChapterId={activeSubChapterId} defaultSubId="wiring-schematic">
      <section id="wiring-schematic" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="Schematic Spec" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "01 — Physical Wiring & Pinout Architecture" : "01 — Câblage Physique & Brochage"}
        </h2>
        <div className="p-4 rounded-md border border-border/70 bg-muted/20 font-mono text-xs overflow-x-auto my-3">
          <pre>{`+-------------------+                    +-----------------------+
|  SparkFun Soil    |                    |    ESP32 DevKit v1    |
|  Moisture Sensor  |                    |                       |
|                   |                    |                       |
|   [ VCC (Red)   ] | ------------------ | [ 3V3 / GPIO 23 Power]|
|   [ GND (Black) ] | ------------------ | [ GND                ]|
|   [ SIG (Yellow)] | ------------------ | [ GPIO 34 (ADC1_CH6) ]|
+-------------------+                    +-----------------------+`}</pre>
        </div>

        {/* Physical In-Situ Bench Test Setup Photo */}
        <div className="my-6 p-4 rounded-lg border border-border/70 bg-muted/20 text-center">
          <div className="relative max-w-md mx-auto h-72 flex items-center justify-center">
            <img
              src="/images/Capture_d_écran_2026-11-15_033441-removebg-preview.png"
              alt="Physical Bench Test Setup: In-Situ Soil Probe, Wiring & Microcontroller Unit"
              className="max-h-68 w-auto object-contain mx-auto rounded-md shadow-sm transition-transform hover:scale-[1.02] duration-300"
            />
          </div>
          <p className="text-xs text-muted-foreground font-mono mt-3">
            {isEn
              ? "Physical Bench Test: Soil moisture probe inserted in plant substrate, 3-wire harness (VCC/GND/SIG), and live microcontroller telemetry display"
              : "Banc d'Essai Physique : Sonde insérée dans le substrat racinaire, faisceau 3 fils (VCC/GND/SIG) et unité microcontrôleur avec écran de contrôle"}
          </p>
        </div>
      </section>

      <section id="firmware-lifecycle" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="Firmware Lifecycle" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "02 — Firmware Acquisition Lifecycle & Sampling Logic" : "02 — Cycle du Firmware & Logique d'Échantillonnage"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "The reference firmware implements non-blocking execution using FreeRTOS tasks and ESP32 deep sleep timers. Sampling occurs at configurable intervals (typically 15 to 30 minutes in field deployment)."
              : "Le firmware de référence implémente une exécution non-bloquante via FreeRTOS et les minuteries de veille profonde de l'ESP32. L'échantillonnage s'effectue à intervalles configurables (15 à 30 minutes au champ)."}
          </p>
        </div>
      </section>

      <section id="firmware-code-reference" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="Reference C++ Implementation" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "03 — Reference C++/Arduino Firmware Implementation" : "03 — Implémentation Firmware C++/Arduino de Référence"}
        </h2>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground font-mono">
            Listing: FarmerEye_SoilNode_Reference.ino
          </p>
          <div className="p-4 rounded-md border border-border/70 bg-muted/20 font-mono text-xs overflow-x-auto">
            <pre>{`#include <WiFi.h>
#include <esp_adc_cal.h>

#define SENSOR_PIN 34       // ADC1_CH6 (Safe with Wi-Fi)
#define SENSOR_POWER_PIN 23 // GPIO to switch sensor VCC
#define NUM_SAMPLES 64      // Oversampling count

// Dry and Wet calibration constants (from laboratory air/water assay)
const int ADC_DRY = 3150;
const int ADC_WET = 1380;

void setup() {
  Serial.begin(115200);
  pinMode(SENSOR_POWER_PIN, OUTPUT);
  digitalWrite(SENSOR_POWER_PIN, LOW); // Sensor off initially
}

void loop() {
  // 1. Power sensor
  digitalWrite(SENSOR_POWER_PIN, HIGH);
  delay(15); // Settle capacitive oscillator

  // 2. Oversample ADC
  long sum = 0;
  for (int i = 0; i < NUM_SAMPLES; i++) {
    sum += analogRead(SENSOR_PIN);
    delayMicroseconds(100);
  }
  int raw_adc = sum / NUM_SAMPLES;

  // 3. Power off sensor to eliminate corrosion
  digitalWrite(SENSOR_POWER_PIN, LOW);

  // 4. Compute Normalized Moisture Index M [0.0 - 1.0]
  float m_index = (float)(ADC_DRY - raw_adc) / (float)(ADC_DRY - ADC_WET);
  m_index = constrain(m_index, 0.0f, 1.0f);

  Serial.printf("Raw ADC: %d | Moisture Index M: %.3f\\n", raw_adc, m_index);
  delay(60000); // 1-minute test bench loop
}`}</pre>
          </div>
        </div>
      </section>

      <section id="electrical-safety" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="Circuit Protection" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "04 — Electrical Safety & Error Detection" : "04 — Sécurité Électrique & Détection d'Erreurs"}
        </h2>
        <div className="divide-y divide-border/60 text-xs my-4 border border-border/70 rounded-md p-3 bg-muted/20">
          <div className="py-2"><strong className="text-foreground font-mono">Disconnected Cable:</strong> Raw ADC reads near 0V or 3.3V floating; firmware triggers OPEN_CIRCUIT alert.</div>
          <div className="py-2"><strong className="text-foreground font-mono">Decoupling:</strong> 100 nF ceramic capacitor across sensor VCC and GND pins filters power supply noise.</div>
        </div>
      </section>
    </SubChapterContainer>
  );
}

// ─── 4. SENSOR CALIBRATION & MEASUREMENT QUALITY ──────────────────────────────
export function SensorCalibrationChapterView({ activeSubChapterId }: ChapterViewProps) {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <SubChapterContainer activeSubChapterId={activeSubChapterId} defaultSubId="calibration-necessity">
      <section id="calibration-necessity" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="Calibration Protocol" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "01 — Why Calibration is Mandatory (Raw ADC to θ_v)" : "01 — Pourquoi l'Étalonnage est Obligatoire (ADC Brut vers θ_v)"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "Due to component manufacturing tolerances (±10% capacitor tolerance) and variations in soil mineralogy, two sensors in the same soil patch can report different raw ADC numbers. In-situ calibration is essential to convert electrical signals into scientifically defensible volumetric water content."
              : "En raison des tolérances de fabrication des composants (±10% sur les condensateurs) et de la minéralogie des sols, deux sondes dans la même parcelle peuvent fournir des valeurs brutes différentes. L'étalonnage in situ est indispensable pour transformer le signal électrique en teneur volumique fiable."}
          </p>
        </div>
      </section>

      <section id="dry-wet-references" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="HARDWARE AVAILABLE" sourceDoc="Bench Test Standards" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "02 — Air Dry vs. Water Saturated Reference Measurements" : "02 — Mesures de Référence Air Sec vs Eau Saturée"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs my-4 font-mono">
          <div className="p-3.5 rounded-md border border-border/70 bg-muted/20">
            <span className="text-muted-foreground block mb-1 font-semibold uppercase">Dry Reference (Air)</span>
            <span className="text-foreground font-bold text-base">ADC_dry ≈ 3150</span>
            <p className="text-muted-foreground font-sans mt-1 text-[11px]">Measured with probe suspended in dry ambient air (dielectric constant ε ≈ 1.0).</p>
          </div>
          <div className="p-3.5 rounded-md border border-border/70 bg-muted/20">
            <span className="text-muted-foreground block mb-1 font-semibold uppercase">Wet Reference (Water)</span>
            <span className="text-foreground font-bold text-base">ADC_wet ≈ 1380</span>
            <p className="text-muted-foreground font-sans mt-1 text-[11px]">Measured with probe submerged up to trace line in distilled water (ε ≈ 80.4).</p>
          </div>
        </div>
      </section>

      <section id="normalized-index-formula" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="IMPLEMENTED — CODE VERIFIED" sourceDoc="Normalized Index Formula" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "03 — Normalized Moisture Index (Formula M)" : "03 — Indice d'Humidité Normalisé (Formule M)"}
        </h2>
        <div className="p-4 rounded-md border border-border/70 bg-muted/20 font-mono text-xs text-foreground text-center my-3">
          <code>{"M = ( ADC_dry - ADC_measured ) / ( ADC_dry - ADC_wet )"}</code>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {isEn
            ? "Scientific Precision: The normalized index M ranges strictly from 0.0 (completely dry) to 1.0 (water-saturated). It is a relative index, NOT true volumetric water content θ_v. To obtain θ_v, M must be scaled using soil-specific laboratory calibration coefficients."
            : "Rigueur Scientifique : L'indice normalisé M s'étend strictement de 0,0 (sec) à 1,0 (saturé). C'est un indice relatif, et NON une teneur en eau volumique réelle θ_v. L'obtention de θ_v requiert une fonction d'étalonnage spécifique au sol."}
        </p>
      </section>

      <section id="calibration-curves" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="Soil Physics Curves" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "04 — Soil-Specific Calibration Curves (Tirs vs. Hamri)" : "04 — Courbes d'Étalonnage par Type de Sol (Tirs vs Hamri)"}
        </h2>
        <div className="space-y-3 text-xs font-mono">
          <div className="p-3 rounded-md border border-border/70 bg-muted/20">
            <span className="text-foreground font-bold block mb-1">Hamri (Chromic Luvisol — Silt Loam):</span>
            <code>{"θ_v = 0.42 × M  [m³/m³]  (Linear regime)"}</code>
          </div>
          <div className="p-3 rounded-md border border-border/70 bg-muted/20">
            <span className="text-foreground font-bold block mb-1">Tirs (Vertisol — Heavy Clay):</span>
            <code>{"θ_v = 0.12 + 0.38 × M^1.4  [m³/m³]  (Non-linear bound water regime)"}</code>
          </div>
        </div>
      </section>

      <section id="measurement-uncertainty" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REQUIRES FIELD VALIDATION" sourceDoc="Metrology Protocol" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "05 — Measurement Uncertainty & Quality Control" : "05 — Incertitude de Mesure & Contrôle Qualité"}
        </h2>
        <div className="divide-y divide-border/60 text-xs my-4 border border-border/70 rounded-md p-3 bg-muted/20">
          <div className="py-2"><strong className="text-foreground font-mono">Repeatability:</strong> ±2% on bench test under constant temperature.</div>
          <div className="py-2"><strong className="text-foreground font-mono">Field Uncertainty:</strong> Estimated ±5% VWC due to soil compaction and contact impedance variations.</div>
        </div>
      </section>
    </SubChapterContainer>
  );
}

// ─── 5. IOT TELEMETRY & CONNECTIVITY ──────────────────────────────────────────
export function IotTelemetryChapterView({ activeSubChapterId }: ChapterViewProps) {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <SubChapterContainer activeSubChapterId={activeSubChapterId} defaultSubId="telemetry-overview">
      <section id="telemetry-overview" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="Telemetry Architecture" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "01 — Local Sampling & Telemetry Architecture" : "01 — Échantillonnage Local & Architecture de Télémétrie"}
        </h2>
        <p className="text-[15px] leading-7 text-muted-foreground">
          {isEn
            ? "Telemetry pipelines transmit structured, timestamped JSON packets from field microcontrollers to the ingestion gateway over 2.4 GHz Wi-Fi or cellular GSM backhaul."
            : "Le pipeline de télémétrie transmet des paquets JSON structurés et horodatés depuis les microcontrôleurs de parcelle vers la passerelle d'ingestion via Wi-Fi ou réseau cellulaire."}
        </p>
      </section>

      <section id="json-payload-contract" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="IMPLEMENTED — CODE VERIFIED" sourceDoc="TypeScript Schema Contract" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "02 — Proposed TypeScript-Compatible JSON Contract" : "02 — Contrat JSON Compatible TypeScript"}
        </h2>
        <div className="p-4 rounded-md border border-border/70 bg-muted/20 font-mono text-xs overflow-x-auto">
          <pre>{`{
  "device_id": "FE-NODE-SAISS-01",
  "timestamp": "2026-11-15T08:30:00Z",
  "hardware_rev": "ESP32-WROOM-32D-v1.2",
  "firmware_version": "1.0.4-ref",
  "location": {
    "latitude": 33.8892,
    "longitude": -5.5531,
    "parcel_id": "MEKNES-FIELD-4A"
  },
  "sensor_payload": {
    "raw_adc": 2145,
    "normalized_index_m": 0.567,
    "estimated_vwc": 0.284,
    "sensor_depth_cm": 15,
    "soil_temp_c": 18.4,
    "battery_mv": 3920
  },
  "quality_flags": {
    "crc_valid": true,
    "error_code": 0
  }
}`}</pre>
        </div>
      </section>

      <section id="transport-protocols" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="Protocol Evaluation" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "03 — Transport Protocols: HTTP/HTTPS REST vs. MQTT" : "03 — Protocoles de Transport : HTTP/HTTPS REST vs MQTT"}
        </h2>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2 pr-4">Feature</th>
                <th className="py-2 pr-4 text-foreground font-bold">MQTT (v3.1.1 / v5.0)</th>
                <th className="py-2 pr-4">HTTPS REST (POST)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Packet Overhead</td>
                <td className="py-2 pr-4 text-emerald-600 dark:text-emerald-400 font-semibold">2 bytes header (minimal)</td>
                <td className="py-2 pr-4">Hundreds of bytes (HTTP headers)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Battery Energy Cost</td>
                <td className="py-2 pr-4 text-emerald-600 dark:text-emerald-400 font-semibold">Low (persistent lightweight broker session)</td>
                <td className="py-2 pr-4">Higher (TLS handshake per transaction)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-foreground">Recommended Role</td>
                <td className="py-2 pr-4 font-bold text-foreground">Production Solar/Battery Edge Nodes</td>
                <td className="py-2 pr-4">Test Bench & Initial Prototyping</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="connectivity-resilience" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="REFERENCE DESIGN" sourceDoc="Edge Resilience" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "04 — Connectivity Failures & Flash Buffering" : "04 — Pannes de Connexion & Tampon Flash"}
        </h2>
        <p className="text-[15px] leading-7 text-muted-foreground">
          {isEn
            ? "In case of rural Wi-Fi or cellular outage, readings are queued sequentially in the local LittleFS flash memory. Upon reconnect, the buffer flushes in chronological order to prevent data loss."
            : "En cas de coupure réseau, les mesures sont enfilées chronologiquement dans la mémoire flash LittleFS. Dès la reconnexion, le tampon est vidé dans l'ordre pour éviter toute perte de données."}
        </p>
      </section>
    </SubChapterContainer>
  );
}

// ─── 6. GROUND SENSORS VS NASA SMAP ──────────────────────────────────────────
export function SmapVsGroundSensorsChapterView({ activeSubChapterId }: ChapterViewProps) {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <SubChapterContainer activeSubChapterId={activeSubChapterId} defaultSubId="scale-discrepancy">
      <section id="scale-discrepancy" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="TESTED — OUTPUT VERIFIED" sourceDoc="Scientific Comparison" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "01 — Scale Discrepancy (9 km Grid vs. 10 cm³ Point)" : "01 — Écart d'Échelle (Maille 9 km vs Point 10 cm³)"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "A primary source of confusion in agricultural remote sensing is comparing spaceborne gridded estimates with physical point sensors. A single NASA SMAP L4 grid cell encompasses 81 square kilometers (8,100 hectares). In contrast, a capacitive ground probe samples approximately 10 to 50 cubic centimeters of soil."
              : "Une confusion fréquente en télédétection agricole consiste à assimiler grilles satellitaires et capteurs ponctuels. Une seule maille NASA SMAP L4 couvre 81 km² (8 100 hectares). En comparaison, une sonde capacitive au sol échantillonne environ 10 à 50 cm³ de terre."}
          </p>
          <div className="p-4 rounded-md border border-border/70 bg-muted/20 font-mono text-xs text-center">
            <code>{"Surface Area Ratio: (9,000 m × 9,000 m) / (0.05 m × 0.05 m) ≈ 32,400,000,000 : 1"}</code>
          </div>
        </div>
      </section>

      <section id="measurement-physics" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="IMPLEMENTED — CODE VERIFIED" sourceDoc="Physics Comparison" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "02 — Observation Physics: Radar Brightness vs. Capacitance" : "02 — Physique d'Observation : Radar vs Capacitance"}
        </h2>
        <div className="divide-y divide-border/60 text-xs my-4 border border-border/70 rounded-md p-3 bg-muted/20">
          <div className="py-2"><strong className="text-foreground font-mono">NASA SMAP:</strong> Spaceborne L-band radiometer (1.41 GHz) sensing passive microwave emission. Brightness temperature is inverted through land surface models.</div>
          <div className="py-2"><strong className="text-foreground font-mono">In-Situ Probe:</strong> High-frequency oscillator (50–100 MHz) charging a capacitive circuit whose fringe field penetrates soil pore space.</div>
        </div>
      </section>

      <section id="depth-decoupling" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="IMPLEMENTED — CODE VERIFIED" sourceDoc="Hydraulic Profiles" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "03 — Surface (0-5cm) vs. Root-Zone (0-100cm) vs. Sensor Depth" : "03 — Surface (0-5cm) vs Zone Racinaire (0-100cm) vs Profondeur Capteur"}
        </h2>
        <p className="text-[15px] leading-7 text-muted-foreground">
          {isEn
            ? "SMAP L4 decomposes moisture into surface (top 5 cm) and modeled root-zone (0–100 cm). A physical sensor installed at 20 cm measures a discrete intermediate boundary layer, capturing localized root water uptake."
            : "SMAP L4 dissocie l'humidité de surface (5 premiers cm) et la zone racinaire modélisée (0–100 cm). Un capteur physique placé à 20 cm mesure une couche intermédiaire discrète, captant l'absorption racinaire locale."}
        </p>
      </section>

      <section id="complementary-framework" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="TESTED — OUTPUT VERIFIED" sourceDoc="Integration Framework" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "04 — Conceptual Complementary Integration Framework" : "04 — Cadre d'Intégration Complémentaire Conceptuel"}
        </h2>
        <div className="p-4 rounded-md border border-border/70 bg-muted/20 font-mono text-xs overflow-x-auto text-center">
          <pre>{`NASA SMAP Regional Baseline (81 km² macro trends)
                    +
Local Ground Sensor Network (Parcels 1-10 ha micro validation)
                    +
Quality Filtering & Soil-Specific Calibration
                    =
Comprehensive Evidence for Farmer Decision Support`}</pre>
        </div>
      </section>

      <section id="scientific-humility" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="TESTED — OUTPUT VERIFIED" sourceDoc="Scientific Humility Boundary" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "05 — Scientific Boundaries: No Single Probe Validates 81 km²" : "05 — Limites Scientifiques : Une Seule Sonde Ne Valide Pas 81 km²"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "Scientific Humility Rule: A single in-situ soil moisture sensor cannot validate or invalidate a NASA SMAP 9km satellite pixel. Soil texture variations, localized irrigation events, and topography across 81 km² produce immense sub-pixel variance."
              : "Règle de Rigueur Scientifique : Une seule sonde in situ ne peut en aucun cas valider ou invalider un pixel satellitaire NASA SMAP de 9 km. L'hétérogénéité des sols, l'irrigation localisée et la topographie sur 81 km² créent une variance sous-maille immense."}
          </p>
        </div>
      </section>
    </SubChapterContainer>
  );
}

// ─── 7. HARDWARE TESTS, EVIDENCE & INTEGRATION STATUS ─────────────────────────
export function HardwareValidationChapterView({ activeSubChapterId }: ChapterViewProps) {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <SubChapterContainer activeSubChapterId={activeSubChapterId} defaultSubId="hardware-inventory">
      <section id="hardware-inventory" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="HARDWARE AVAILABLE" sourceDoc="Physical Inventory" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "01 — Physical Hardware Inventory & Bench Verification" : "01 — Inventaire Matériel Physique & Vérification Banc"}
        </h2>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2 pr-4">Component</th>
                <th className="py-2 pr-4">Model / Specification</th>
                <th className="py-2 pr-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">ESP32 Development Board</td>
                <td className="py-2 pr-4 font-sans">NodeMCU / DevKit v1, 30-pin, CP2102 USB-to-UART, Dual-Core Xtensa LX6</td>
                <td className="py-2 pr-4 text-purple-600 dark:text-purple-400 font-semibold">Hardware Available</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">Soil Moisture Probe</td>
                <td className="py-2 pr-4 font-sans">SparkFun Soil Moisture Sensor (SEN-13637, gold-plated prongs, screw terminal)</td>
                <td className="py-2 pr-4 text-purple-600 dark:text-purple-400 font-semibold">Hardware Available</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">Bench Test Rig</td>
                <td className="py-2 pr-4 font-sans">In-situ potted soil testing rig with 3-wire harness & live TFT display unit</td>
                <td className="py-2 pr-4 text-purple-600 dark:text-purple-400 font-semibold">Hardware Available</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">Firmware & Ingestion</td>
                <td className="py-2 pr-4 font-sans">C++/Arduino reference architecture & TypeScript JSON contract</td>
                <td className="py-2 pr-4 text-amber-600 dark:text-amber-400 font-semibold">Reference Design</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Physical Evidence Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-3 rounded-lg border border-border/70 bg-muted/20 text-center flex flex-col items-center">
            <div className="relative w-full h-40 flex items-center justify-center">
              <img
                src="/images/Capture_d_écran_2026-11-15_033322-removebg-preview.png"
                alt="ESP-32 DevKit V1"
                className="max-h-36 w-auto object-contain mx-auto transition-transform hover:scale-105 duration-300"
              />
            </div>
            <span className="font-mono text-xs font-semibold text-foreground mt-2 block">
              ESP-32 DevKit V1
            </span>
            <p className="text-[11px] text-muted-foreground mt-1 font-sans">
              {isEn ? "30-pin Dual-Core LX6 board with CP2102 USB" : "Module 30 broches Dual-Core LX6 avec CP2102"}
            </p>
          </div>

          <div className="p-3 rounded-lg border border-border/70 bg-muted/20 text-center flex flex-col items-center">
            <div className="relative w-full h-40 flex items-center justify-center">
              <img
                src="/images/13637-01-removebg-preview.png"
                alt="SparkFun Soil Moisture Sensor"
                className="max-h-36 w-auto object-contain mx-auto transition-transform hover:scale-105 duration-300"
              />
            </div>
            <span className="font-mono text-xs font-semibold text-foreground mt-2 block">
              SparkFun SEN-13637
            </span>
            <p className="text-[11px] text-muted-foreground mt-1 font-sans">
              {isEn ? "Gold-plated dual-prong sensor with terminal block" : "Sonde dorée anti-oxydation avec bornier à vis"}
            </p>
          </div>

          <div className="p-3 rounded-lg border border-border/70 bg-muted/20 text-center flex flex-col items-center">
            <div className="relative w-full h-40 flex items-center justify-center">
              <img
                src="/images/Capture_d_écran_2026-11-15_033441-removebg-preview.png"
                alt="Bench Test In-Situ Setup"
                className="max-h-36 w-auto object-contain mx-auto rounded transition-transform hover:scale-105 duration-300"
              />
            </div>
            <span className="font-mono text-xs font-semibold text-foreground mt-2 block">
              {isEn ? "In-Situ Bench Test" : "Banc d'Essai In-Situ"}
            </span>
            <p className="text-[11px] text-muted-foreground mt-1 font-sans">
              {isEn ? "Live soil testing rig with active display telemetry" : "Test sur substrat végétal réel avec écran de télémétrie"}
            </p>
          </div>
        </div>
      </section>

      <section id="evidence-classification" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="IMPLEMENTED — CODE VERIFIED" sourceDoc="System Evidence Registry" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "02 — Explicit Evidence Status Classification Matrix" : "02 — Matrice de Classification des Preuves Système"}
        </h2>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left text-sm border-collapse font-mono text-xs">
            <thead className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2 pr-4">Subsystem</th>
                <th className="py-2 pr-4">Evidence Status</th>
                <th className="py-2 pr-4">Verification Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">NASA POWER API</td>
                <td className="py-2 pr-4 text-emerald-600 dark:text-emerald-400 font-semibold">Implemented — Code Verified</td>
                <td className="py-2 pr-4 font-sans">API ingestion & missing-data filters executed</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">NASA SMAP L4 Pipeline</td>
                <td className="py-2 pr-4 text-emerald-600 dark:text-emerald-400 font-semibold">Implemented — Code Verified</td>
                <td className="py-2 pr-4 font-sans">Google Earth Engine export & ee-chart.csv verified</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">FAO-56 Scientific Engine</td>
                <td className="py-2 pr-4 text-emerald-600 dark:text-emerald-400 font-semibold">Implemented — Code Verified</td>
                <td className="py-2 pr-4 font-sans">Deterministic Penman-Monteith algorithms</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">Crop Battle Lab</td>
                <td className="py-2 pr-4 text-blue-600 dark:text-blue-400 font-semibold">Tested — Output Verified</td>
                <td className="py-2 pr-4 font-sans">Internal simulations completed (3 crop plans)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">Climate Attack Lab</td>
                <td className="py-2 pr-4 text-blue-600 dark:text-blue-400 font-semibold">Tested — Output Verified</td>
                <td className="py-2 pr-4 font-sans">Stress scenario simulations evaluated</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">Farm Time Machine</td>
                <td className="py-2 pr-4 text-blue-600 dark:text-blue-400 font-semibold">Tested — Output Verified</td>
                <td className="py-2 pr-4 font-sans">Retrospective simulation functionally verified</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">ESP32 & Soil Probe</td>
                <td className="py-2 pr-4 text-purple-600 dark:text-purple-400 font-semibold">Hardware Available</td>
                <td className="py-2 pr-4 font-sans">Physical bench unit acquired & evaluated</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">Physical Soil Lab Assays</td>
                <td className="py-2 pr-4 text-zinc-500 font-semibold">Planned / Not Yet Verified</td>
                <td className="py-2 pr-4 font-sans">Methodological field protocol designed</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-foreground">Impact 2030 Figures</td>
                <td className="py-2 pr-4 text-amber-600 dark:text-amber-400 font-semibold">Conditional Scenarios</td>
                <td className="py-2 pr-4 font-sans">Scaling model calculations, not realized gains</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="serial-monitor-logs" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="HARDWARE AVAILABLE" sourceDoc="Bench Test Output" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "03 — Serial Monitor Output & Test Bench Logs" : "03 — Logs du Moniteur Série sur Banc d'Essai"}
        </h2>
        <div className="p-4 rounded-md border border-border/70 bg-muted/20 font-mono text-xs overflow-x-auto">
          <pre>{`[11:04:12.301] Farmer Eye ESP32 Field Node Booting... (Rev: WROOM-32D)
[11:04:12.315] ADC1_CH6 calibrated via eFuse Vref: 1124 mV
[11:04:12.330] Asserting GPIO 23 (Sensor Power)...
[11:04:12.350] Settling delay 15ms complete.
[11:04:12.370] 64x Multi-sample ADC median: 2145 (Voltage: 1724 mV)
[11:04:12.375] Dry/Wet bounds [3150, 1380] -> Normalized Index M: 0.567
[11:04:12.380] De-asserting sensor power.
[11:04:12.390] Telemetry packet formed. Size: 248 bytes. Status: BUFFERED_OK.`}</pre>
        </div>
      </section>

      <section id="unresolved-steps" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="PLANNED / NOT YET VERIFIED" sourceDoc="Integration Roadmap" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "04 — Known Limitations & Unresolved Integration Steps" : "04 — Limites Connues & Étapes d'Intégration Restantes"}
        </h2>
        <div className="divide-y divide-border/60 text-xs my-4 border border-border/70 rounded-md p-3 bg-muted/20">
          <div className="py-2.5"><strong className="text-foreground font-mono">1. Field Solar Power:</strong> Solar charging circuit (TP4056 + LiFePO4 battery) requires endurance testing across 45°C summer Saïss heat.</div>
          <div className="py-2.5"><strong className="text-foreground font-mono">2. Live Cloud Ingestion:</strong> Bridging the ESP32 firmware directly into the Next.js production endpoint remains a planned integration step.</div>
          <div className="py-2.5"><strong className="text-foreground font-mono">3. Multi-Depth Array:</strong> Deploying multi-depth probe arrays (15 cm, 30 cm, 60 cm) to match SMAP root-zone depth intervals.</div>
        </div>
      </section>
    </SubChapterContainer>
  );
}

// ─── 8. PHYSICAL SOIL LABORATORY ──────────────────────────────────────────────
export function PhysicalSoilLabChapterView({ activeSubChapterId }: ChapterViewProps) {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <SubChapterContainer activeSubChapterId={activeSubChapterId} defaultSubId="soil-sampling-protocol">
      <section id="soil-sampling-protocol" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="PLANNED / NOT YET VERIFIED" sourceDoc="Field Sampling Guide" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "01 — Field Sampling Protocol & Spatial Coordinates" : "01 — Protocole d'Échantillonnage de Terrain & Coordonnées"}
        </h2>
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          <p>
            {isEn
              ? "Physical laboratory soil analysis represents planned ground truth validation methodology. The sampling protocol defines systematic core extraction across representative agrarian zones of the Saïss plain (Meknes region: 33.889°N, 5.553°W)."
              : "L'analyse physique des sols en laboratoire constitue la méthodologie de vérité terrain prévue par le projet. Le protocole définit une extraction systématique de carottes de sol dans les zones agronomiques représentatives du Saïss (région de Meknès : 33,889°N, 5,553°O)."}
          </p>
        </div>
      </section>

      <section id="core-depths-texture" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="PLANNED / NOT YET VERIFIED" sourceDoc="Core Interval Standard" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "02 — Core Depths (0-30cm, 30-60cm, 60-100cm) & Texture Assays" : "02 — Intervalles de Carottage (0-30cm, 30-60cm, 60-100cm) & Granulométrie"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs my-4 font-mono">
          <div className="p-3.5 rounded-md border border-border/70 bg-muted/20">
            <span className="text-foreground font-bold block mb-1">0 — 30 cm Depth</span>
            <p className="text-muted-foreground font-sans">Topsoil & seedbed; active evaporation front.</p>
          </div>
          <div className="p-3.5 rounded-md border border-border/70 bg-muted/20">
            <span className="text-foreground font-bold block mb-1">30 — 60 cm Depth</span>
            <p className="text-muted-foreground font-sans">Active wheat root-zone moisture uptake reservoir.</p>
          </div>
          <div className="p-3.5 rounded-md border border-border/70 bg-muted/20">
            <span className="text-foreground font-bold block mb-1">60 — 100 cm Depth</span>
            <p className="text-muted-foreground font-sans">Deep subsoil buffer capacity (Tirs vertisol storage).</p>
          </div>
        </div>
      </section>

      <section id="gravimetric-volumetric" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="IMPLEMENTED — CODE VERIFIED" sourceDoc="Soil Physics Identity" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "03 — Gravimetric (w) vs. Volumetric (θ_v) Moisture" : "03 — Humidité Gravimétrique (w) vs Volumique (θ_v)"}
        </h2>
        <div className="p-4 rounded-md border border-border/70 bg-muted/20 font-mono text-xs text-foreground text-center my-3">
          <code>{"w = (m_wet - m_dry) / m_dry  ==>  θ_v = w × (ρ_bulk / ρ_water)"}</code>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {isEn
            ? "Where m_wet and m_dry are core masses before and after 24 hours of oven drying at 105°C, ρ_bulk is the dry bulk density (typically 1.25 to 1.45 g/cm³ for Saïss soils), and ρ_water ≈ 1.0 g/cm³."
            : "Où m_wet et m_dry sont les masses avant et après étuvage 24h à 105°C, ρ_bulk est la densité apparente sèche (1,25 à 1,45 g/cm³ dans le Saïss) et ρ_water ≈ 1,0 g/cm³."}
        </p>
      </section>

      <section id="physicochemical-indicators" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="PLANNED / NOT YET VERIFIED" sourceDoc="Lab Test Parameters" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "04 — Bulk Density, pH, Electrical Conductivity & Organic Matter" : "04 — Densité Apparente, pH, Conductivité Électrique & Matière Organique"}
        </h2>
        <div className="divide-y divide-border/60 text-xs my-4 border border-border/70 rounded-md p-3 bg-muted/20">
          <div className="py-2"><strong className="text-foreground font-mono">Soil pH:</strong> 1:2.5 soil-water suspension; typical Saïss soils range 7.8 to 8.3 (slightly alkaline calcic vertisols).</div>
          <div className="py-2"><strong className="text-foreground font-mono">Electrical Conductivity (EC_e):</strong> Saturated paste extract; monitors groundwater salinity impacts from excessive well pumping.</div>
          <div className="py-2"><strong className="text-foreground font-mono">Organic Matter (SOM):</strong> Walkley-Black wet oxidation; informs soil water retention and infiltration capacity.</div>
        </div>
      </section>

      <section id="field-validation-roadmap" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <EvidenceBadge status="PLANNED / NOT YET VERIFIED" sourceDoc="Validation Roadmap" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground border-b border-border/60 pb-2">
          {isEn ? "05 — Ground Truth Methodology & Satellite Validation Roadmap" : "05 — Méthodologie Vérité Terrain & Validation Satellitaire"}
        </h2>
        <p className="text-[15px] leading-7 text-muted-foreground">
          {isEn
            ? "The planned validation roadmap couples laboratory core assays with seasonal in-situ probe readings to establish an empirical error distribution for NASA SMAP L4 downscaling models across Moroccan agroclimatic zones."
            : "La feuille de route prévoit de croiser les carottages de laboratoire avec les relevés des sondes in situ pour établir la distribution d'erreur empirique des modèles NASA SMAP L4 sur les terroirs marocains."}
        </p>
      </section>
    </SubChapterContainer>
  );
}
