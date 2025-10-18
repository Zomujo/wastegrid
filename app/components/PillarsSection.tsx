export default function PillarsSection() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        Our Pillars of Transformation
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center gap-4 rounded-xl bg-background-light p-6 shadow-sm ring-1 ring-primary/20 dark:bg-background-dark dark:ring-primary/30">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-3xl">
              lightbulb
            </span>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Innovation
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              We leverage cutting-edge technologies and innovative processes to
              maximize resource recovery and create high-value products from
              waste.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-xl bg-background-light p-6 shadow-sm ring-1 ring-primary/20 dark:bg-background-dark dark:ring-primary/30">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-3xl">groups</span>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Empowerment
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              We empower local communities by creating green jobs, providing
              training, and fostering entrepreneurship within the circular
              economy.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-xl bg-background-light p-6 shadow-sm ring-1 ring-primary/20 dark:bg-background-dark dark:ring-primary/30">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-3xl">spa</span>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Stewardship
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              We are committed to environmental stewardship, minimizing our
              carbon footprint, and promoting sustainable practices throughout
              our operations.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-xl bg-background-light p-6 shadow-sm ring-1 ring-primary/20 dark:bg-background-dark dark:ring-primary/30">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-3xl">
              military_tech
            </span>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Excellence
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              We uphold the highest standards of quality, efficiency, and
              transparency in all our endeavors, ensuring impactful and
              sustainable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
