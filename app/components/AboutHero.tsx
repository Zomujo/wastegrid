export default function AboutHero() {
  return (
    <div className="relative text-white py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-green via-primary to-primary-400"
        style={{
          background:
            "linear-gradient(135deg, #4CAF50 0%, #FFC107 50%, #FF9800 100%)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
          Our Thesis
        </h1>
        <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
          Transforming waste into climate solutions for a sustainable Africa.
        </p>
      </div>
    </div>
  );
}
