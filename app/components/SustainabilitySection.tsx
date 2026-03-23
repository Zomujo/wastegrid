import Image from "next/image";

const points = [
  {
    number: "01",
    title: "Circular material flows",
    description:
      "Recovering and reintegrating materials into productive industrial use reduces dependency on raw extraction.",
  },
  {
    number: "02",
    title: "Low-carbon energy and fuel systems",
    description:
      "Low-carbon energy and fuel systems reduce emissions across industrial operations and supply chains.",
  },
  {
    number: "03",
    title: "Efficient supply chains",
    description:
      "Improving coordination and visibility across the full value chain reduces waste, cost, and idle capacity.",
  },
  {
    number: "04",
    title: "Responsible processing",
    description:
      "Responsible processing ensures long-term viability — for the environment, for communities, and for the industries we serve.",
  },
];

export default function SustainabilitySection() {
  return (
    <section className="bg-background-light dark:bg-background-dark">
      <div className="lg:flex" style={{ minHeight: "640px" }}>
        {/* Left: full-height image panel */}
        <div className="relative h-72 lg:h-auto lg:w-1/2 overflow-hidden">
          <Image
            src="/sustain-lowcarbon.jpg"
            alt="Low-carbon energy"
            fill
            loading="lazy"
            quality={85}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          {/* Subtle right-edge fade into the dark right panel on desktop */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent 70%, rgba(17, 33, 23, 0.6) 100%)",
            }}
          />
        </div>

        {/* Right: dark content panel */}
        <div
          className="lg:w-1/2 py-16 lg:py-24 px-8 lg:px-16 flex flex-col justify-center"
          style={{ backgroundColor: "#112117" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#1dc962" }}
            >
              Our Approach to Sustainability
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-[1.1] mb-4">
            Structural, not decorative.
          </h2>
          <p
            className="text-base leading-relaxed mb-12"
            style={{ color: "#64748b" }}
          >
            Every system WasteGrid builds is designed with sustainability as a
            core constraint — not an afterthought.
          </p>

          {/* Points */}
          <div className="space-y-8">
            {points.map((point) => (
              <div key={point.number} className="flex gap-5">
                <span
                  className="text-xs font-mono font-semibold shrink-0 mt-0.5"
                  style={{ color: "#1dc962" }}
                >
                  {point.number}
                </span>
                <div
                  className="pt-0.5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <h3 className="text-base font-bold text-white mb-1">
                    {point.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#64748b" }}
                  >
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
