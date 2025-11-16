import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import SolutionsHero from "../components/SolutionsHero";
import HomesPricing from "../components/HomesPricing";
import BusinessesSection from "../components/BusinessesSection";
import GovernmentsSection from "../components/GovernmentsSection";
import WhySolutionsMatter from "../components/WhySolutionsMatter";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Discover Waste Grid's comprehensive waste management solutions for homes, businesses, and governments. Transform your waste into valuable resources.",
};

export default function SolutionsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-1">
        <SolutionsHero />
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <div className="space-y-20">
            <HomesPricing />
            <BusinessesSection />
            <GovernmentsSection />
            <WhySolutionsMatter />
          </div>
        </div>
      </main>
    </div>
  );
}
