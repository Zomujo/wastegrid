export default function ImpactMetrics() {
  return (
    <section className="mt-20 sm:mt-32">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Our Impact at a Glance
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="bg-white/5 dark:bg-black/10 p-8 rounded-xl border border-white/10 dark:border-black/20 backdrop-blur-sm">
          <p className="text-5xl font-bold gradient-text">15,000+</p>
          <p className="text-lg font-medium mt-2 text-gray-700 dark:text-gray-300">
            tons of Waste Diverted
          </p>
        </div>

        <div className="bg-white/5 dark:bg-black/10 p-8 rounded-xl border border-white/10 dark:border-black/20 backdrop-blur-sm">
          <p className="text-5xl font-bold gradient-text">5,000+</p>
          <p className="text-lg font-medium mt-2 text-gray-700 dark:text-gray-300">
            Lives Improved
          </p>
        </div>

        <div className="bg-white/5 dark:bg-black/10 p-8 rounded-xl border border-white/10 dark:border-black/20 backdrop-blur-sm">
          <p className="text-5xl font-bold gradient-text">10,000+</p>
          <p className="text-lg font-medium mt-2 text-gray-700 dark:text-gray-300">
            tons of CO2 Reduced
          </p>
        </div>
      </div>
    </section>
  );
}
