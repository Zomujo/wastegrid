export default function ImpactMetrics() {
  return (
    <section className="mt-16">
      <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
        Impact at a Glance
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex transform flex-col items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-primary-100 p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl dark:from-green-950 dark:to-primary-900">
          <p className="text-6xl font-extrabold text-primary-600 dark:text-primary-400">
            100K+
          </p>
          <p className="mt-2 text-xl font-medium text-gray-700 dark:text-gray-300">
            Tons of Waste Diverted
          </p>
        </div>
        <div className="flex transform flex-col items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-primary-100 p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl dark:from-green-950 dark:to-primary-900">
          <p className="text-6xl font-extrabold text-primary-600 dark:text-primary-400">
            50K+
          </p>
          <p className="mt-2 text-xl font-medium text-gray-700 dark:text-gray-300">
            Lives Improved
          </p>
        </div>
        <div className="flex transform flex-col items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-primary-100 p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl dark:from-green-950 dark:to-primary-900">
          <p className="text-6xl font-extrabold text-primary-600 dark:text-primary-400">
            20K+
          </p>
          <p className="mt-2 text-xl font-medium text-gray-700 dark:text-gray-300">
            Tons of CO₂ Reduced
          </p>
        </div>
      </div>
    </section>
  );
}
