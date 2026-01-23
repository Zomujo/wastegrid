import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import OpportunitySection from "../components/OpportunitySection";
import SolutionSection from "../components/SolutionSection";
import PillarsSection from "../components/PillarsSection";
import GlobalGovernanceSection from "../components/GlobalGovernanceSection";
import GlobalAgendasSection from "../components/GlobalAgendasSection";
import GetInvolvedCTA from "../components/GetInvolvedCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Waste Grid's mission to transform waste into climate solutions and empower communities across Africa through circular economy principles.",
};

export default function AboutPage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.wastegridafrica.com";

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${siteUrl}/about`,
      },
    ],
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto w-full max-w-6xl px-4 py-4"
      >
        <ol className="flex items-center gap-2 text-sm text-stone-600">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="text-stone-400">/</li>
          <li className="font-medium text-stone-900 dark:text-white">About</li>
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <main className="flex-1">
        <AboutHero />
        <div className="bg-background-light dark:bg-background-dark py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-20">
              <OpportunitySection />
              <SolutionSection />
              <PillarsSection />
              <GlobalGovernanceSection />
              <GlobalAgendasSection />
              <GetInvolvedCTA />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
