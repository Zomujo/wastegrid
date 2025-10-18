import NetworkHeader from "../components/NetworkHeader";
import NetworkHero from "../components/NetworkHero";
import PartnerAdvantage from "../components/PartnerAdvantage";
import NetworkTestimonial from "../components/NetworkTestimonial";
import NetworkWhyMatters from "../components/NetworkWhyMatters";
import JoinNetwork from "../components/JoinNetwork";

export default function NetworkPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <NetworkHeader />
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <NetworkHero />
          <PartnerAdvantage />
          <NetworkTestimonial />
          <NetworkWhyMatters />
          <JoinNetwork />
        </div>
      </main>
    </div>
  );
}
