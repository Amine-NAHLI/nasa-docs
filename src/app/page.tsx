import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { GlobalChallengeSection } from "@/components/home/GlobalChallengeSection";
import { IntroducingSection } from "@/components/home/IntroducingSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ExploreScienceSection } from "@/components/home/ExploreScienceSection";
import { Vision2030Section } from "@/components/home/Vision2030Section";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { SpaceIntroModal } from "@/components/globe/SpaceIntroModal";

export default function HomePage() {
  return (
    <SpaceIntroModal>
      <div className="flex min-h-screen flex-col bg-[#070D17]">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <GlobalChallengeSection />
          <IntroducingSection />
          <HowItWorksSection />
          <ExploreScienceSection />
          <Vision2030Section />
          <FinalCtaSection />
        </main>
        <Footer />
      </div>
    </SpaceIntroModal>
  );
}
