export default function BenefitsSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white text-center sm:text-4xl">
        Benefits for Environmental Partners
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 rounded-xl bg-primary-50 dark:bg-primary-950/50 p-6 text-center items-center">
          <span
            className="material-symbols-outlined text-primary-500"
            style={{ fontSize: "40px" }}
          >
            payments
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-stone-900 dark:text-white">
              Increased Earning Potential
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Gain access to higher-value waste streams and performance-based
              incentives, boosting your income.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-primary-50 dark:bg-primary-950/50 p-6 text-center items-center">
          <span
            className="material-symbols-outlined text-primary-500"
            style={{ fontSize: "40px" }}
          >
            verified
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-stone-900 dark:text-white">
              Professional Certification
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Receive formal recognition for your skills and expertise,
              enhancing your credibility and market value.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-primary-50 dark:bg-primary-950/50 p-6 text-center items-center">
          <span
            className="material-symbols-outlined text-primary-500"
            style={{ fontSize: "40px" }}
          >
            groups
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-stone-900 dark:text-white">
              Community and Support
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Join a network of like-minded individuals, fostering collaboration
              and mutual support.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-primary-50 dark:bg-primary-950/50 p-6 text-center items-center">
          <span
            className="material-symbols-outlined text-primary-500"
            style={{ fontSize: "40px" }}
          >
            eco
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-stone-900 dark:text-white">
              Environmental Impact
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Contribute directly to a cleaner, healthier environment by
              diverting waste from landfills and promoting sustainable
              practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
