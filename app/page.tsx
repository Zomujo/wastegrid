import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ThesisHero from "./components/ThesisHero";
import OpportunitySolution from "./components/OpportunitySolution";
import PillarsSection from "./components/PillarsSection";
import GlobalAgendas from "./components/GlobalAgendas";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-6 py-10">
          <HeroSection />
        </div>

        <div className="w-full">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="@container">
              <ThesisHero />
              <OpportunitySolution />
              <PillarsSection />
              <GlobalAgendas />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
