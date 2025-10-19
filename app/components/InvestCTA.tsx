export default function InvestCTA() {
  return (
    <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-400 p-12 text-center text-white shadow-2xl">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-5xl font-extrabold tracking-tight">
          Join Us. Be a Catalyst for Change.
        </h2>
        <p className="max-w-3xl text-xl text-primary-50">
          Your contribution directly fuels our mission to scale our impact,
          creating healthier communities and a more sustainable future for
          Africa. Transform waste with us.
        </p>
        <button className="rounded-lg bg-white px-10 py-4 text-xl font-bold text-primary-600 shadow-lg transition-transform hover:scale-105">
          Donate Now
        </button>
      </div>
    </section>
  );
}
