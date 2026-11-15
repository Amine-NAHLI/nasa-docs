export interface MoroccoAgroRegion {
  id: string;
  name: string;
  arabicName: string;
  basin: string;
  moduleTitle: string;
  coordinates: [number, number]; // [lng, lat]
  zoom: number;
  pitch: number;
  bearing: number;
  docHref: string;
  docOrder: string;
  whatIsThis: string;
  agriculturalChallenge: string;
  nasaDataFeed: string;
  keyCrops: string[];
  climateZone: string;
}

export const MOROCCO_REGIONS: Record<string, MoroccoAgroRegion> = {
  overview: {
    id: "overview",
    name: "Fès · Plaine du Saïss",
    arabicName: "فاس · سهل سايس",
    basin: "Bassin Hydrogéologique de Fès-Saïss",
    moduleTitle: "01. Vue d'ensemble (Overview)",
    coordinates: [-4.9998, 34.0331],
    zoom: 14.8,
    pitch: 52,
    bearing: 25,
    docHref: "/docs",
    docOrder: "01",
    whatIsThis:
      "Le pôle central de démonstration de Farmer Eye. Il illustre l'orientation globale du système et la vision : croiser la télémétrie spatiale NASA avec la réalité du terrain agricole.",
    agriculturalChallenge:
      "Plaine céréalière et oléicole majeure confrontée à une baisse continue du niveau piézométrique de la nappe souterraine du Saïss.",
    nasaDataFeed: "Télémétrie Globale · NASA POWER Climat & NASA SMAP Humidité",
    keyCrops: ["Oliviers", "Blé dur", "Orge", "Légumineuses"],
    climateZone: "Méditerranéen Semi-Aride",
  },
  "our-mission": {
    id: "our-mission",
    name: "Rabat · Pôle Décisionnel",
    arabicName: "الرباط · المركز العلمي",
    basin: "Bassin Côtier du Bouregreg",
    moduleTitle: "01. Notre Mission (Our Mission)",
    coordinates: [-6.8416, 34.0209],
    zoom: 13.8,
    pitch: 45,
    bearing: 15,
    docHref: "/docs/our-mission",
    docOrder: "01",
    whatIsThis:
      "Le centre de gouvernance éthique et scientifique de l'équipe DEVUPWARD. C'est ici qu'est ancré le principe fondamental : 'Le fermier reste le seul maître à bord'.",
    agriculturalChallenge:
      "Éviter la dépossession algorithmique des agriculteurs et concevoir des outils d'aide à la décision respectueux de l'expertise humaine.",
    nasaDataFeed: "Protocoles Open Science & Normes d'IA Explicable",
    keyCrops: ["Gouvernance Scientifique", "Aide à la Décision", "Innovation"],
    climateZone: "Méditerranéen Océanique",
  },
  "nasa-earth": {
    id: "nasa-earth",
    name: "Kénitra · Plaine du Gharb",
    arabicName: "القنيطرة · سهل الغرب",
    basin: "Bassin Alluvial du Sebou",
    moduleTitle: "02. NASA Earth Intelligence",
    coordinates: [-6.5802, 34.2610],
    zoom: 13.5,
    pitch: 42,
    bearing: 10,
    docHref: "/docs/nasa-earth",
    docOrder: "02",
    whatIsThis:
      "Le pôle de démonstration pour l'ingestion des données climatiques régionales. Il illustre comment les flux de rayonnement solaire, température et pluie sont collectés sans nécessiter de station météo privée coûteuse.",
    agriculturalChallenge:
      "Gestion des fluctuations pluviométriques et optimisation de l'eau sur les grands vergers d'agrumes et périmètres irrigués.",
    nasaDataFeed: "NASA POWER (Rayonnement solaire ALLSKY, Température T2M, Pluviométrie)",
    keyCrops: ["Agrumes", "Canne à sucre", "Riz", "Céréales"],
    climateZone: "Sub-Humide Méditerranéen",
  },
  "scientific-engine": {
    id: "scientific-engine",
    name: "Béni Mellal · Plaine du Tadla",
    arabicName: "بني ملال · سهل تادلة",
    basin: "Bassin de l'Oum Er-Rbia",
    moduleTitle: "03. Scientific Engine",
    coordinates: [-6.3608, 32.3394],
    zoom: 13.6,
    pitch: 48,
    bearing: 30,
    docHref: "/docs/scientific-engine",
    docOrder: "03",
    whatIsThis:
      "Le pôle de modélisation biophysique. Il applique les équations internationales FAO-56 Penman-Monteith pour calculer l'évapotranspiration de référence (ET0) et le bilan de déficit hydrique.",
    agriculturalChallenge:
      "Alimenté par la fonte nivale de l'Atlas, ce périmètre doit calculer avec rigueur la perte en eau quotidienne pour éviter le gaspillage d'irrigation.",
    nasaDataFeed: "Équation FAO-56 Penman-Monteith & Déficit Hydrique Racinaire",
    keyCrops: ["Betterave à sucre", "Coton", "Grenadiers", "Oliviers"],
    climateZone: "Semi-Aride Continental",
  },
  "earth-trials": {
    id: "earth-trials",
    name: "Marrakech · Plaine du Haouz",
    arabicName: "مراكش · سهل الحوز",
    basin: "Bassin du Tensift",
    moduleTitle: "04. Earth Trials",
    coordinates: [-7.9811, 31.6295],
    zoom: 13.5,
    pitch: 46,
    bearing: 20,
    docHref: "/docs/earth-trials",
    docOrder: "04",
    whatIsThis:
      "Le pôle d'essais pour la simulation en conditions climatiques extrêmes. Il permet d'éprouver la résistance des modèles biophysiques face aux vagues de chaleur estivales.",
    agriculturalChallenge:
      "Arboriculture d'oliveraies soumise à des températures supérieures à 45°C et des quotas d'irrigation très restreints.",
    nasaDataFeed: "Indicateurs de Stress Thermique & Bilan de Sécheresse Aiguë",
    keyCrops: ["Oliveraies", "Abricotiers", "Céréales d'hiver", "Fourrages"],
    climateZone: "Aride / Semi-Aride",
  },
  "ai-intelligence": {
    id: "ai-intelligence",
    name: "Agadir · Vallée du Souss-Massa",
    arabicName: "أكادير · سهل سوس ماسة",
    basin: "Bassin du Souss-Massa",
    moduleTitle: "05. AI Intelligence",
    coordinates: [-9.5981, 30.4278],
    zoom: 13.6,
    pitch: 45,
    bearing: 15,
    docHref: "/docs/ai-intelligence",
    docOrder: "05",
    whatIsThis:
      "Le laboratoire d'intelligence artificielle contextuelle. Il transforme les pourcentages d'humidité radar SMAP et les alertes météo en synthèses claires rédigées en langage naturel.",
    agriculturalChallenge:
      "Épicentre du maraîchage intensif sous serre d'exportation avec un épuisement historique des nappes et une dépendance au dessalement.",
    nasaDataFeed: "NASA SMAP Radar Micro-Ondes L-Band & Arbres de Risque IA",
    keyCrops: ["Tomates sous serre", "Primeurs", "Agrumes", "Arganiers"],
    climateZone: "Aride Subtropical",
  },
  "impact-2030": {
    id: "impact-2030",
    name: "Berkane · Périmètre de la Moulouya",
    arabicName: "بركان · حوض ملوية",
    basin: "Bassin de la Basse Moulouya",
    moduleTitle: "06. Impact 2030",
    coordinates: [-2.3200, 34.9200],
    zoom: 13.5,
    pitch: 44,
    bearing: 18,
    docHref: "/docs/impact-2030",
    docOrder: "06",
    whatIsThis:
      "L'observatoire des objectifs d'impact 2030 : mesurer la préservation des réserves hydriques, la résilience face aux sécheresses pluriannuelles et la démocratisation pour les petits exploitants.",
    agriculturalChallenge:
      "Protection du capital arboricole (clémentiniers de renommée mondiale) face aux sécheresses consécutives dans l'Est du Maroc.",
    nasaDataFeed: "Objectifs de Conservation & Métriques de Résilience 2030",
    keyCrops: ["Clémentines de Berkane", "Oranges", "Grandes cultures"],
    climateZone: "Méditerranéen Semi-Aride",
  },
  "architecture-developers": {
    id: "architecture-developers",
    name: "Casablanca · Pôle Cloud & Tech",
    arabicName: "الدار البيضاء · بوابة التكنولوجيا",
    basin: "Pôle Côtier Atlantique",
    moduleTitle: "07. Architecture & Devs",
    coordinates: [-7.5898, 33.5731],
    zoom: 13.8,
    pitch: 40,
    bearing: 5,
    docHref: "/docs/architecture-developers",
    docOrder: "07",
    whatIsThis:
      "L'infrastructure technique de Farmer Eye : architecture Next.js App Router, Route Handlers, mise en cache des requêtes NASA et protocoles de distribution ouverts.",
    agriculturalChallenge:
      "Assurer un temps de réponse rapide et une accessibilité mobile même sur les réseaux 3G/4G ruraux à faible débit.",
    nasaDataFeed: "API REST, Schémas GeoJSON & Contrats de Données",
    keyCrops: ["Cloud Engineering", "Route Handlers", "Open API"],
    climateZone: "Atlantique Océanique",
  },
};

export const MOROCCO_REGIONS_LIST = Object.values(MOROCCO_REGIONS);
