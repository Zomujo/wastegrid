import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import ApproachSection from "../components/ApproachSection";
import WhatWeAreBuilding from "../components/WhatWeAreBuilding";
import PeopleSection from "../components/PeopleSection";

export const metadata: Metadata = {
  title: "About Waste Grid",
  description:
    "WasteGrid is an industrial platform developing the foundational systems required for Africa's next phase of growth — across materials, energy, and industrial infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <ApproachSection />
        <WhatWeAreBuilding />
        <PeopleSection />
      </main>
    </div>
  );
}
