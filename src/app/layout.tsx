import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { DocsProvider } from "@/context/DocsContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortDescription,
  keywords: [
    "Farmer Eye",
    "NASA Space Apps Challenge",
    "Earth Observations",
    "Agricultural Intelligence",
    "Drought Monitoring",
    "Penman-Monteith",
    "Remote Sensing",
    "DEVUPWARD",
    "Impact 2030",
  ],
  authors: [{ name: siteConfig.team.name }],
  icons: {
    icon: "/brand/farmer-eye-official.png",
    shortcut: "/brand/farmer-eye-official.png",
    apple: "/brand/farmer-eye-official.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('farmer_eye_theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-black text-zinc-950 dark:text-zinc-100 antialiased selection:bg-zinc-200 selection:text-zinc-900 dark:selection:bg-zinc-800 dark:selection:text-zinc-100 font-sans transition-colors duration-150">
        <DocsProvider>{children}</DocsProvider>
      </body>
    </html>
  );
}
