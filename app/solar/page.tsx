import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import SolarHero from "./components/SolarHero";
import WhyUsSection from "./components/WhyUsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TechSection from "./components/TechSection";
import InstallersSection from "./components/InstallersSection";
import SocialProofSection from "./components/SocialProofSection";
import FAQSection from "./components/FAQSection";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.wastegridafrica.com";
const baseUrl = siteUrl.replace(/\/$/, "");
const pageUrl = `${baseUrl}/solar`;

export const metadata: Metadata = {
  title: "Solar & Green Transition",
  description:
    "GridFi funds 100% of your Solar and Battery setup. Pay a predictable monthly fee and take full ownership in 3 to 5 years. Reliable, clean power for African businesses.",
  alternates: {
    canonical: "/solar",
  },
  openGraph: {
    title: "Solar & Green Transition | Waste Grid",
    description:
      "GridFi funds 100% of your Solar and Battery setup. Pay a predictable monthly fee and take full ownership in 3 to 5 years.",
    url: pageUrl,
    type: "website",
  },
};

export default function SolarPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solar & Green Transition",
        item: pageUrl,
      },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Waste Grid Solar & Green Transition",
    provider: {
      "@type": "Organization",
      name: "Waste Grid",
      url: baseUrl,
    },
    serviceType: "Solar and battery financing",
    areaServed: {
      "@type": "Place",
      name: "Africa",
    },
    url: pageUrl,
    description:
      "Waste Grid helps businesses deploy solar and battery systems with 100% upfront financing and predictable monthly payments.",
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-brand-navy">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <main className="flex-1">
        <SolarHero />
        <WhyUsSection />
        <HowItWorksSection />
        <TechSection />
        <InstallersSection />
        <SocialProofSection />
        <FAQSection />
      </main>
    </div>
  );
}
