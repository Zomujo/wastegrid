import ContactHeader from "../components/ContactHeader";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactCTA from "../components/ContactCTA";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <ContactHeader />
      <main className="container mx-auto flex-1 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
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
