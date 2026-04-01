import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FocusAreasSection from "./components/FocusAreasSection";
import ApproachSection from "./components/ApproachSection";
import WhatWeAreBuilding from "./components/WhatWeAreBuilding";
import MarketsSection from "./components/MarketsSection";

export const metadata: Metadata = {
  title: {
    absolute: "WasteGrid - Enabling an Industrial Africa",
  },
  description:
    "WasteGrid is enabling an industrial Africa by developing foundational systems across materials, energy, and industrial infrastructure.",
  openGraph: {
    title: "WasteGrid - Enabling an Industrial Africa",
    description:
      "WasteGrid is enabling an industrial Africa by developing foundational systems across materials, energy, and industrial infrastructure.",
    url: "/",
    type: "website",
  },
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
      </main>
    </div>
  );
}
