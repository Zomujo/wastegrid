import type { Metadata } from "next";
import Link from "next/link";
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
        name: "Solutions",
        item: `${siteUrl}/solutions`,
      },
    ],
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto w-full max-w-4xl px-4 py-4"
      >
        <ol className="flex items-center gap-2 text-sm text-stone-600">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="text-stone-400">/</li>
          <li className="font-medium text-stone-900 dark:text-white">
            Solutions
          </li>
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
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
