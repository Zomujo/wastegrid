import Link from "next/link";
import MaterialIcon from "./MaterialIcon";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#112117" }}
    >
      {/* Radial glow backgrounds */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 55% 50%, rgba(29, 201, 98, 0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 70% at 90% 15%, rgba(249, 115, 22, 0.05) 0%, transparent 60%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29, 201, 98, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(29, 201, 98, 1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#1dc962" }}
            >
              Industrial Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[72px] leading-[1.04] mb-6">
            Enabling Africa&apos;s
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #1dc962 0%, #4ade80 50%, #1dc962 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Industrial Future.
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-lg font-medium mb-6 tracking-wide"
            style={{ color: "#94a3b8" }}
          >
            Materials. Energy. Industrial Systems.
          </p>

          {/* Description */}
          <p
            className="text-base leading-relaxed max-w-2xl mb-12"
            style={{ color: "#64748b" }}
          >
            WasteGrid is an industrial platform developing the foundational
            systems required for Africa&apos;s next phase of growth. We operate
            across materials, energy, and industrial infrastructure —
            transforming resources into value, enabling production, and
            connecting fragmented supply chains.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "#1dc962" }}
            >
              Explore Our Platform
              <MaterialIcon icon="arrow_forward" className="text-[20px]" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-lg border px-8 py-4 text-base font-medium transition-all hover:border-primary"
              style={{
                borderColor: "rgba(29, 201, 98, 0.25)",
                color: "#e2e8f0",
              }}
            >
              Our Approach
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 flex flex-wrap gap-12 pt-8 border-t" style={{ borderColor: "rgba(29, 201, 98, 0.1)" }}>
            {[
              { value: "8", label: "Focus Areas" },
              { value: "6", label: "Key Markets" },
              { value: "3", label: "Value Chain Layers" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold" style={{ color: "#1dc962" }}>
                  {stat.value}
                </p>
                <p className="text-sm mt-1" style={{ color: "#64748b" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right decorative panel */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[38%] hidden lg:block pointer-events-none"
        style={{
          borderLeft: "1px solid rgba(29, 201, 98, 0.08)",
          background:
            "linear-gradient(135deg, rgba(29, 201, 98, 0.03) 0%, transparent 100%)",
        }}
      >
        <div
          className="absolute top-12 left-10 right-10 bottom-12 rounded-2xl"
          style={{ border: "1px solid rgba(29, 201, 98, 0.07)" }}
        />
      </div>
    </section>
  );
}
