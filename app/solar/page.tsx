import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import SolarHero from "./components/SolarHero";
import WhyUsSection from "./components/WhyUsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TechSection from "./components/TechSection";
import InstallersSection from "./components/InstallersSection";
import SocialProofSection from "./components/SocialProofSection";
import FAQSection from "./components/FAQSection";

export const metadata: Metadata = {
  title: "Solar & Green Transition",
  description:
    "GridFi funds 100% of your Solar and Battery setup. Pay a predictable monthly fee and take full ownership in 3 to 5 years. Reliable, clean power for African businesses.",
};

export default function SolarPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-brand-navy">
      <Navbar />
      <main className="flex-1">
        <SolarHero />
        <WhyUsSection />
        <HowItWorksSection />
        <TechSection />
        <InstallersSection />
        <SocialProofSection />
        <FAQSection />
      </main>
    </div>
  );
}
