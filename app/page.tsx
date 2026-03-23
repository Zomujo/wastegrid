import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FocusAreasSection from "./components/FocusAreasSection";
import ApproachSection from "./components/ApproachSection";
import WhatWeAreBuilding from "./components/WhatWeAreBuilding";
import MarketsSection from "./components/MarketsSection";
import JoinUsCTA from "./components/JoinUsCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "WasteGrid is an industrial platform developing the foundational systems required for Africa's next phase of growth — across materials, energy, and industrial infrastructure.",
};

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FocusAreasSection />
        <ApproachSection />
        <WhatWeAreBuilding />
        <MarketsSection />
        <JoinUsCTA />
      </main>
    </div>
  );
}
