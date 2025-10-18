import HomeHeader from "./components/HomeHeader";
import HeroSection from "./components/HeroSection";
import ThesisHero from "./components/ThesisHero";
import OpportunitySolution from "./components/OpportunitySolution";
import PillarsSection from "./components/PillarsSection";
import GlobalAgendas from "./components/GlobalAgendas";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <HomeHeader />
      <main className="container mx-auto px-6 py-10">
        <HeroSection />
      </main>

      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex flex-1 flex-col items-center">
            <div className="w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="@container">
                <ThesisHero />
                <OpportunitySolution />
                <PillarsSection />
                <GlobalAgendas />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
