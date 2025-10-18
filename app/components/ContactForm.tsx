export default function ContactForm() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight">Send us a message</h2>
      <form className="space-y-6">
        <div>
          <label className="text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="form-input mt-2 block w-full rounded-lg border-none bg-background-dark/5 dark:bg-background-light/5 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
            id="name"
            placeholder="Your Name"
            type="text"
          />
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="organization">
            Organization
          </label>
          <input
            className="form-input mt-2 block w-full rounded-lg border-none bg-background-dark/5 dark:bg-background-light/5 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
            id="organization"
            placeholder="Your Organization"
            type="text"
          />
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="form-input mt-2 block w-full rounded-lg border-none bg-background-dark/5 dark:bg-background-light/5 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
            id="email"
            placeholder="Your Email"
            type="email"
          />
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="phone">
            Phone (Optional)
          </label>
          <input
            className="form-input mt-2 block w-full rounded-lg border-none bg-background-dark/5 dark:bg-background-light/5 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
            id="phone"
            placeholder="Your Phone"
            type="tel"
          />
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-textarea mt-2 block w-full rounded-lg border-none bg-background-dark/5 dark:bg-background-light/5 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
            id="message"
            placeholder="Your Message"
            rows={4}
          ></textarea>
        </div>

        <div>
          <button
            className="flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-background-dark transition-opacity hover:opacity-90"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
