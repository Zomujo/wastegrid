import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import OpportunitySection from "../components/OpportunitySection";
import SolutionSection from "../components/SolutionSection";
import PillarsSection from "../components/PillarsSection";
import GlobalAgendasSection from "../components/GlobalAgendasSection";
import GetInvolvedCTA from "../components/GetInvolvedCTA";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <div className="bg-background-light dark:bg-background-dark py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-20">
              <OpportunitySection />
              <SolutionSection />
              <PillarsSection />
              <GlobalAgendasSection />
              <GetInvolvedCTA />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
