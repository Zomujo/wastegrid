export default function WhyModelWorks() {
  return (
    <section className="relative mt-16 overflow-hidden rounded-xl bg-gray-100 p-12 text-center dark:bg-gray-800">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCp3SPY-PX-znUWsuZbii1-h2TLoz74wdF2USHecLwpgH7JVS1k4_uxdgvt7sQE8DK0R7nM14ZGfQK4mZFB39FQ7OWiGJlBzb0Y-n_9iv5SUnCzetNRdKsWKW0Tt8MkwQAM60FM35SAn3oReh5dUdCEXgpxVpL8SBF8SdRL2EXwzYEb_l-oe-O_3Qyl6JmGggGPfZuoQd1qR_QwS2A1fN6MJZlqP_Rejn6oPF_XjBQRcKQ1bYjO6MRmcUlQNXL-VQqMCy8xgUn2UsM')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-1">
        <h2 className="mb-6 text-4xl font-bold tracking-tight">
          Why This Model Works
        </h2>
        <p className="mx-auto max-w-4xl text-lg text-gray-700 dark:text-gray-300">
          WasteGrid&apos;s integrated, circular economy approach creates a
          powerful synergy. By combining waste collection, advanced recycling,
          energy generation, and carbon credit sales, we build a financially
          self-sustaining and environmentally restorative model. This
          diversification ensures long-term resilience and scalability, enabling
          us to expand our positive impact to more communities across Africa.
        </p>
      </div>
    </section>
  );
}
