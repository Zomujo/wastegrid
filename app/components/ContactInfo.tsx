export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
      <div className="space-y-6">
        <div className="border-t border-content-light/10 dark:border-content-dark/10 pt-6">
          <h3 className="font-bold text-subtle-light dark:text-subtle-dark">
            Client Services
          </h3>
          <div className="mt-2 space-y-1 text-sm">
            <p>WhatsApp: +233 20 146 2313</p>
            <p>Phone: +233 20 146 2313</p>
            <p>Email: support@wastegrid.com</p>
          </div>
        </div>

        <div className="border-t border-content-light/10 dark:border-content-dark/10 pt-6">
          <h3 className="font-bold text-subtle-light dark:text-subtle-dark">
            Partner Onboarding
          </h3>
          <div className="mt-2 space-y-1 text-sm">
            <p>WhatsApp: +233 20 146 2313</p>
            <p>Phone: +233 20 146 2313</p>
            <p>Email: partners@wastegrid.com</p>
            <a className="text-primary hover:underline" href="#">
              Apply here
            </a>
          </div>
        </div>

        <div className="border-t border-content-light/10 dark:border-content-dark/10 pt-6">
          <h3 className="font-bold text-subtle-light dark:text-subtle-dark">
            Press & Media
          </h3>
          <div className="mt-2 space-y-1 text-sm">
            <p>WhatsApp: +233 20 146 2313</p>
            <p>Phone: +233 20 146 2313</p>
            <p>Email: press@wastegrid.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
