import Image from "next/image";

const innovationPoints = [
  {
    number: "01",
    title: "Material processing technologies",
    description:
      "Advanced techniques for beneficiation, refining, and transformation of primary and secondary materials into industrial-grade inputs.",
  },
  {
    number: "02",
    title: "Energy system integration",
    description:
      "Connecting generation, storage, and distribution into cohesive systems that meet the reliability demands of industrial operations.",
  },
  {
    number: "03",
    title: "Industrial optimization tools",
    description:
      "Data-driven approaches to improving efficiency, reducing waste, and maximizing output across industrial processes.",
  },
  {
    number: "04",
    title: "Data-driven supply chain systems",
    description:
      "Platforms that deliver visibility, pricing intelligence, and coordination across complex industrial supply networks.",
  },
];

export default function InnovationSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/focus-digital-infrastructure.jpg"
          alt=""
          fill
          loading="lazy"
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(17, 33, 23, 0.91)" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
            {/* Left */}
            <div className="mb-14 lg:mb-0 lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#1dc962" }}
                >
                  Innovation
                </span>
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-[1.1] mb-6">
                Applied, systems-driven, and industrially relevant.
              </h2>

              <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
                We focus on practical innovation — solutions that operate
                effectively in real environments, not just in controlled
                conditions.
              </p>
            </div>

            {/* Right */}
            <div className="space-y-5">
              {innovationPoints.map((point) => (
                <div
                  key={point.number}
                  className="rounded-xl p-7"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-mono font-semibold"
                      style={{ color: "#1dc962" }}
                    >
                      [{point.number}]
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
