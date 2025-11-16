import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactCTA from "../components/ContactCTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Waste Grid. Reach out to learn more about our waste management solutions, partnerships, or how to get involved in transforming waste in Africa.",
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
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
