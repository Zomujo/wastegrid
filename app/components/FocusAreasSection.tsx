import Image from "next/image";

const focusAreas = [
  {
    image: "/focus-energy-electrification.jpg",
    title: "Energy & Electrification",
    description: "Reliable, scalable energy systems for industrial and commercial operations.",
  },
  {
    image: "/focus-energy-materials.jpg",
    title: "Energy Materials",
    description: "Materials that enable energy storage, electrification, and next-generation technologies.",
  },
  {
    image: "/focus-industrial-chemicals.jpg",
    title: "Industrial Chemicals",
    description: "Chemical inputs that underpin production across key sectors.",
  },
  {
    image: "/focus-primary-materials.jpg",
    title: "Primary Materials",
    description: "Upgrading natural resources into industrial-grade inputs.",
  },
  {
    image: "/focus-circular-materials.jpg",
    title: "Circular Materials",
    description: "Recovering and reintegrating materials into industrial use.",
  },
  {
    image: "/focus-clean-fuels.jpg",
    title: "Clean Fuels",
    description: "Low-carbon fuel systems for industrial applications.",
  },
  {
    image: "/focus-agro-water.jpg",
    title: "Agro & Water Systems",
    description: "Systems supporting productivity, resilience, and resource security.",
  },
  {
    image: "/focus-digital-infrastructure.jpg",
    title: "Digital Infrastructure",
    description: "Platforms that enable visibility, coordination, and scale.",
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

        {/* 8-card grid — 2 col mobile, 4 col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="group relative overflow-hidden rounded-xl"
              style={{ height: "360px" }}
            >
              {/* Background image */}
              <Image
                src={area.image}
                alt={area.title}
                fill
                loading="lazy"
                quality={80}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(17,33,23,0.15) 0%, rgba(17,33,23,0.55) 50%, rgba(17,33,23,0.97) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-sm font-bold text-white mb-1.5 leading-tight">
                  {area.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
