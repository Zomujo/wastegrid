import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactCTA from "../components/ContactCTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WasteGrid. Reach out to explore partnerships, investment opportunities, or collaboration across our industrial platform.",
};

export default function ContactPage() {
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
        name: "Contact",
        item: `${siteUrl}/contact`,
      },
    ],
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto w-full max-w-4xl px-6 py-4"
      >
        <ol className="flex items-center gap-2 text-sm text-stone-600">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="text-stone-400">/</li>
          <li className="font-medium text-stone-900 dark:text-white">
            Contact
          </li>
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
          <ContactHero />
          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
          <ContactCTA />
        </div>
      </main>
    </div>
  );
}
