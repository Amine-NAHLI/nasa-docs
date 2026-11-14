export const siteConfig = {
  name: "Farmer Eye",
  slogan: "The Farmer's Second Eyes.",
  shortDescription: "Turning NASA Earth observations, agricultural science, and artificial intelligence into clearer farming decisions.",
  corePhilosophy: "Farmers see their fields. Farmer Eye helps them see the bigger picture.",
  team: {
    name: "DEVUPWARD",
    role: "Engineering & Scientific Innovation Team",
  },
  initiative: {
    name: "EARTH TRIALS | IMPACT 2030",
    slogan: "Towards resilient, data-augmented agricultural ecosystems",
  },
  challenge: {
    name: "NASA Space Apps Challenge",
    track: "Earth Observation & Agriculture",
  },
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
