import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import SustainabilityHero from "../components/SustainabilityHero";
import SustainabilitySection from "../components/SustainabilitySection";
import InnovationSection from "../components/InnovationSection";
import JoinUsCTA from "../components/JoinUsCTA";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Sustainability is embedded in how WasteGrid designs and operates its systems — through circular material flows, low-carbon energy, efficient supply chains, and responsible processing.",
};

export default function SustainabilityPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-1">
        <SustainabilityHero />
        <SustainabilitySection />
        <InnovationSection />
        <JoinUsCTA />
      </main>
    </div>
  );
}
