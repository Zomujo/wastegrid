export default function GovernmentsSection() {
  return (
    <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="bg-gradient-to-bl from-green-300 to-amber-300 dark:from-green-800 dark:to-amber-800 rounded-xl p-1 shadow-lg aspect-video">
            <div className="bg-background-light dark:bg-background-dark rounded-lg h-full w-full flex items-center justify-center">
              <span className="text-2xl font-bold text-neutral-400 dark:text-neutral-600">
                Image Placeholder
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            For Governments & Municipalities
          </h2>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
            Government solutions for sustainable city management, including
            waste infrastructure and community engagement programs.
          </p>
          <button className="mt-8 bg-primary hover:bg-primary/90 text-background-dark font-bold py-3 px-6 rounded-lg transition-colors">
            Discover Government Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
