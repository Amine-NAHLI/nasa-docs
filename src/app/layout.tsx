import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { DocsProvider } from "@/context/DocsContext";

const inter = Inter({
  variable: "--font-inter",
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
    icon: "/brand/farmer-eye-logo.svg",
    shortcut: "/brand/farmer-eye-logo.svg",
    apple: "/brand/farmer-eye-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('farmer_eye_theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#0C0D0E] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-emerald-100 selection:text-emerald-900 dark:selection:bg-emerald-900/40 dark:selection:text-emerald-300 font-sans transition-colors duration-150">
        <DocsProvider>{children}</DocsProvider>
      </body>
    </html>
  );
}
