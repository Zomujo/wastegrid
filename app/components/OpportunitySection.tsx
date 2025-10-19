export default function OpportunitySection() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          The Opportunity
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          In many parts of Africa, waste management is a significant challenge,
          leading to environmental and health issues. However, this challenge
          also presents a unique opportunity to transform waste into valuable
          resources, contributing to a more sustainable and climate-resilient
          future.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <img
          alt="Bustling African market with vibrant colors"
          className="rounded-xl shadow-2xl"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrz0gUN5TRP-iCyQafYtHRYZ1RuGXUwWiwyv8YN0VwfwWyoMz4RKCChymLNw1uTiHk4FzR-8J4JrVmj38UYRwaaW38I4wp1KbuR72eSZix2ERJMm45pIGIQXdL2uKZiIO9iuCE8PGij7hRH7QXfjKtj0dYnn5l7dOGx62P1xC91dyfP3ErwGESAbqSoiV_kI49HEiQRtJrjQkOA6D8EoLCXySgl2xFK9Ub4-vH4YNnzemfc1ZT7suEOjtDjc9DL1-qmp5OuSdBgqI"
        />
      </div>
    </section>
  );
}
