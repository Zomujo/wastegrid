import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ImpactHero from "../components/ImpactHero";
import ImpactMetrics from "../components/ImpactMetrics";
import GlobalAgendasCards from "../components/GlobalAgendasCards";
import RevenueStreams from "../components/RevenueStreams";
import WhyModelWorks from "../components/WhyModelWorks";
import InvestCTA from "../components/InvestCTA";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See the measurable impact of Waste Grid's circular economy model. Discover our metrics, revenue streams, and how we're creating positive change across Africa.",
};

export default function ImpactPage() {
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
        name: "Impact",
        item: `${siteUrl}/impact`,
      },
    ],
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto w-full max-w-5xl px-4 py-4"
      >
        <ol className="flex items-center gap-2 text-sm text-stone-600">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="text-stone-400">/</li>
          <li className="font-medium text-stone-900 dark:text-white">Impact</li>
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
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
