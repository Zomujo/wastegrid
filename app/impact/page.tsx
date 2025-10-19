import Navbar from "../components/Navbar";
import ImpactHero from "../components/ImpactHero";
import ImpactMetrics from "../components/ImpactMetrics";
import GlobalAgendasCards from "../components/GlobalAgendasCards";
import RevenueStreams from "../components/RevenueStreams";
import WhyModelWorks from "../components/WhyModelWorks";
import InvestCTA from "../components/InvestCTA";

export default function ImpactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
          <div className="flex flex-col gap-16 md:gap-24">
            <ImpactHero />
            <ImpactMetrics />
            <GlobalAgendasCards />
            <RevenueStreams />
            <WhyModelWorks />
            <InvestCTA />
          </div>
        </div>
      </main>
    </div>
  );
}
