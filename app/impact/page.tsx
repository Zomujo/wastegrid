import ImpactHeader from "../components/ImpactHeader";
import ImpactHero from "../components/ImpactHero";
import ImpactMetrics from "../components/ImpactMetrics";
import GlobalAgendasCards from "../components/GlobalAgendasCards";
import RevenueStreams from "../components/RevenueStreams";
import WhyModelWorks from "../components/WhyModelWorks";
import InvestCTA from "../components/InvestCTA";

export default function ImpactPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <ImpactHeader />
      <main className="container mx-auto px-6 py-16 sm:py-24">
        <ImpactHero />
        <ImpactMetrics />
        <GlobalAgendasCards />
        <RevenueStreams />
        <WhyModelWorks />
        <InvestCTA />
      </main>
    </div>
  );
}
