import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PlatformHero from "../components/PlatformHero";
import FocusAreasSection from "../components/FocusAreasSection";
import WhatWeAreBuilding from "../components/WhatWeAreBuilding";

export const metadata: Metadata = {
  title: "Platform | Materials, Energy & Industrial Systems",
  description:
    "WasteGrid's integrated industrial platform spans 8 focus areas — from energy and materials to digital infrastructure — enabling Africa's next phase of industrial growth.",
};

export default function PlatformPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-1">
        <PlatformHero />
        <FocusAreasSection />
        <WhatWeAreBuilding />
      </main>
    </div>
  );
}
