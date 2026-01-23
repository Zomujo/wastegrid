import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import NetworkHeroNew from "../components/NetworkHeroNew";
import PartnerAdvantageNew from "../components/PartnerAdvantageNew";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialSection from "../components/TestimonialSection";
import WhyItMattersSection from "../components/WhyItMattersSection";
import NetworkCTA from "../components/NetworkCTA";

export const metadata: Metadata = {
  title: "Network",
  description:
    "Join the Waste Grid network. Partner with us to build a circular economy in Africa. Discover the benefits of becoming a Waste Grid partner.",
};

export default function NetworkPage() {
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
        name: "Network",
        item: `${siteUrl}/network`,
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
          <li className="font-medium text-stone-900 dark:text-white">
            Network
          </li>
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <main className="flex-1">
        <NetworkHeroNew />
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
          <div className="flex flex-col gap-16">
            <PartnerAdvantageNew />
            <BenefitsSection />
            <TestimonialSection />
            <WhyItMattersSection />
            <NetworkCTA />
          </div>
        </div>
      </main>
      <footer className="bg-background-light dark:bg-background-dark border-t border-stone-200 dark:border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
              <Link
                className="text-sm text-stone-600 dark:text-stone-300 hover:text-primary-green"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-sm text-stone-600 dark:text-stone-300 hover:text-primary-green"
                href="/solutions"
              >
                Solutions
              </Link>
              <Link
                className="text-sm text-stone-600 dark:text-stone-300 hover:text-primary-green"
                href="/network"
              >
                Network
              </Link>
              <Link
                className="text-sm text-stone-600 dark:text-stone-300 hover:text-primary-green"
                href="/impact"
              >
                Impact
              </Link>
              <Link
                className="text-sm text-stone-600 dark:text-stone-300 hover:text-primary-green"
                href="/contact"
              >
                Contact
              </Link>
            </div>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              © 2024 Waste Grid. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
