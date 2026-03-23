import Image from "next/image";

const pillars = [
  {
    image: "/focus-primary-materials.jpg",
    category: "Materials",
    description:
      "Sourcing, upgrading, and transforming both primary and secondary materials into industrial-grade inputs.",
    areas: [
      "Energy Materials",
      "Industrial Chemicals",
      "Primary Materials",
      "Circular Materials",
    ],
  },
  {
    image: "/focus-energy-electrification.jpg",
    category: "Energy",
    description:
      "Reliable, scalable energy systems — from generation and storage to industrial consumption and clean fuels.",
    areas: ["Energy & Electrification", "Clean Fuels"],
  },
  {
    image: "/focus-digital-infrastructure.jpg",
    category: "Industrial Systems",
    description:
      "Platforms and physical systems that enable industrial coordination, visibility, and scale.",
    areas: ["Agro & Water Systems", "Digital Infrastructure"],
  },
];

export default function FocusAreasSection() {
  return (
    <section className="py-24 sm:py-32 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#1dc962" }}
            >
              Our Focus Areas
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
            Integrated capabilities across the industrial value chain
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Our work supports the industries that build economies: energy,
            manufacturing, construction, agriculture, and resource processing.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.category}
              className="group relative overflow-hidden rounded-2xl"
              style={{ minHeight: "520px" }}
            >
              {/* Background image */}
              <Image
                src={pillar.image}
                alt={pillar.category}
                fill
                loading="lazy"
                quality={85}
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay — dark at bottom, light at top */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(17,33,23,0.25) 0%, rgba(17,33,23,0.55) 40%, rgba(17,33,23,0.97) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                {/* Top label */}
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase self-start px-3 py-1 rounded-full"
                  style={{
                    color: "#1dc962",
                    background: "rgba(29,201,98,0.12)",
                    border: "1px solid rgba(29,201,98,0.25)",
                  }}
                >
                  {pillar.category}
                </span>

                {/* Bottom: title + description + areas */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {pillar.category}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {pillar.description}
                  </p>
                  <div
                    className="pt-5"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <ul className="space-y-2.5">
                      {pillar.areas.map((area) => (
                        <li
                          key={area}
                          className="flex items-center gap-2.5 text-sm"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: "#1dc962" }}
                          />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
