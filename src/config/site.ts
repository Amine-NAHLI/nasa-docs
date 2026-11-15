export const siteConfig = {
  name: "Farmer Eye",
  slogan: "The Farmer's Second Eyes.",
  shortDescription:
    "Turning NASA Earth observations, agricultural science, and artificial intelligence into clearer farming decisions.",
  corePhilosophy: "Farmers see their fields. Farmer Eye helps them see the bigger picture.",
  team: {
    name: "DEVUPWARD",
    role: "Independent Engineering & Scientific Innovation Team",
  },
  initiative: {
    name: "EARTH TRIALS | IMPACT 2030",
    slogan: "Towards resilient, data-augmented agricultural ecosystems",
  },
  challenge: {
    name: "NASA Space Apps Challenge",
    disclaimer:
      "Independent project developed for the NASA Space Apps Challenge hackathon. Not officially affiliated with or endorsed by NASA.",
  },
  currentDataSources: [
    "NASA POWER Climate Data (Solar Radiation, Temperature, Humidity, Wind, Precipitation)",
    "NASA SMAP Soil Moisture (Surface & Root-Zone Moisture)",
    "FAO-56 Penman-Monteith Evapotranspiration Modeling",
    "Context-Aware AI Interpretation",
  ],
  nav: [
    { title: "Home", href: "/" },
    { title: "Documentation", href: "/docs" },
    { title: "Our Mission", href: "/docs/our-mission" },
    { title: "Science", href: "/#science" },
    { title: "Architecture", href: "/#how-it-works" },
  ],
  links: {
    github: "https://github.com/DEVUPWARD/farmer-eye",
    nasaSpaceApps: "https://www.spaceappschallenge.org/",
    docs: "/docs",
    ourMission: "/docs/our-mission",
  },
};

export type SiteConfig = typeof siteConfig;
