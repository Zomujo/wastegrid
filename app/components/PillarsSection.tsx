import MaterialIcon from "./MaterialIcon";

export default function PillarsSection() {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
        Our Pillars of Transformation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-4 text-center transform hover:scale-105 transition-transform duration-300">
          <MaterialIcon icon="recycling" className="text-5xl text-primary" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Waste Reduction & Recycling
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Implementing strategies to reduce waste generation at the source and
            enhance recycling rates.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-4 text-center transform hover:scale-105 transition-transform duration-300">
          <MaterialIcon icon="energy_savings_leaf" className="text-5xl text-secondary" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Renewable Energy Generation
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Converting organic waste into biogas and other renewable energy
            sources.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-4 text-center transform hover:scale-105 transition-transform duration-300">
          <MaterialIcon icon="payments" className="text-5xl text-orange-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Economic Empowerment
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Creating jobs and income opportunities for local communities through
            waste management activities.
          </p>
        </div>
      </div>
    </section>
  );
}
