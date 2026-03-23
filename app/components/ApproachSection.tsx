import Image from "next/image";

const valueChainSteps = [
  {
    number: "01",
    from: "Raw materials",
    to: "Processed inputs",
    description:
      "We source, upgrade, and transform primary and secondary materials into the industrial-grade inputs that production systems require.",
  },
  {
    number: "02",
    from: "Energy generation",
    to: "Industrial consumption",
    description:
      "We develop reliable, scalable energy systems — from generation through storage to delivery — that keep industrial operations running.",
  },
  {
    number: "03",
    from: "Waste streams",
    to: "Reintegrated resources",
    description:
      "We close the loop by recovering materials from waste and feeding them back into productive industrial use, reducing dependency on extraction.",
  },
];

export default function ApproachSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
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
          style={{ background: "rgba(17, 33, 23, 0.90)" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
            {/* Left: header + body copy */}
            <div className="mb-16 lg:mb-0 lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#1dc962" }}
                >
                  Our Approach
                </span>
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6 leading-[1.1]">
                Building systems,
                <br />
                not standalone solutions.
              </h2>

              <p className="text-base leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
                Industrial growth requires more than isolated interventions. It
                requires coordinated systems.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#64748b" }}>
                We operate across the full value chain. Through the integration
                of these layers, we enable industries to operate more
                efficiently, scale more reliably, and reduce structural
                constraints.
              </p>
            </div>

            {/* Right: value chain steps */}
            <div className="space-y-6">
              {valueChainSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl p-7"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                  }}
                >
                  {/* Number + arrow row */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-mono font-semibold"
                      style={{ color: "#1dc962" }}
                    >
                      [{step.number}]
                    </span>
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-sm font-medium text-white">
                        {step.from}
                      </span>
                      <span style={{ color: "#1dc962" }}>→</span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "#1dc962" }}
                      >
                        {step.to}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {step.description}
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
