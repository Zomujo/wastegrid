import SolutionsHeader from "../components/SolutionsHeader";
import SolutionsHero from "../components/SolutionsHero";
import HomesPricing from "../components/HomesPricing";
import BusinessesSection from "../components/BusinessesSection";
import GovernmentsSection from "../components/GovernmentsSection";
import WhySolutionsMatter from "../components/WhySolutionsMatter";

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <SolutionsHeader />
      <main className="flex-grow">
        <SolutionsHero />
        <HomesPricing />
        <BusinessesSection />
        <GovernmentsSection />
        <WhySolutionsMatter />
      </main>
    </div>
  );
}
