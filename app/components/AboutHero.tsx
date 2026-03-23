export default function AboutHero() {
  return (
    <div
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "#112117" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(29, 201, 98, 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#1dc962" }}
          >
            About WasteGrid
          </span>
          <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08] mb-6 max-w-3xl mx-auto">
          An industrial platform for Africa&apos;s future.
        </h1>

        <p
          className="text-base leading-relaxed max-w-2xl mx-auto"
          style={{ color: "#94a3b8" }}
        >
          WasteGrid is developing the foundational systems required for
          Africa&apos;s next phase of growth — across materials, energy, and
          industrial infrastructure.
        </p>
      </div>
    </div>
  );
}
