import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#070D17] text-slate-100 antialiased selection:bg-teal-400/30 selection:text-teal-200">
        {children}
      </body>
    </html>
  );
}
