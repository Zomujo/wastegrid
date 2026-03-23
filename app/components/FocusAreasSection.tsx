import MaterialIcon from "./MaterialIcon";

const focusAreas = [
  {
    title: "Energy & Electrification",
    description: "Reliable, scalable energy systems for industrial and commercial operations.",
    icon: "bolt",
    bullets: [
      "Distributed and utility-scale power systems",
      "Energy storage and hybrid infrastructure",
      "Electrification of transport and logistics",
      "Industrial energy optimization",
    ],
  },
  {
    title: "Energy Materials",
    description: "Materials that enable energy storage, electrification, and next-generation technologies.",
    icon: "battery_charging_full",
    bullets: [
      "Processing of lithium, cobalt, graphite, and related materials",
      "Battery components and material supply chains",
      "Integration of primary and recycled inputs",
      "Lifecycle management of energy systems",
    ],
  },
  {
    title: "Industrial Chemicals",
    description: "Chemical inputs that underpin production across key sectors.",
    icon: "science",
    bullets: [
      "Fertilizers and agrochemical systems",
      "Construction and infrastructure chemicals",
      "Mining and processing reagents",
      "Water and environmental treatment solutions",
    ],
  },
  {
    title: "Primary Materials",
    description: "Upgrading natural resources into industrial-grade inputs.",
    icon: "diamond",
    bullets: [
      "Mineral beneficiation and refining",
      "Metal intermediates and industrial feedstocks",
      "Industrial minerals for construction and manufacturing",
      "Localized material supply chains",
    ],
  },
  {
    title: "Circular Materials",
    description: "Recovering and reintegrating materials into industrial use.",
    icon: "recycling",
    bullets: [
      "Electronic waste and precious metals recovery",
      "Plastics recycling into industrial feedstocks",
      "Scrap metal processing and aggregation",
      "Industrial waste valorization",
    ],
  },
  {
    title: "Clean Fuels",
    description: "Low-carbon fuel systems for industrial applications.",
    icon: "local_gas_station",
    bullets: [
      "Biofuels from agricultural and waste streams",
      "Waste-to-energy systems",
      "Alternative fuels for heavy industry",
      "Emerging hydrogen applications",
    ],
  },
  {
    title: "Agro & Water Systems",
    description: "Systems supporting productivity, resilience, and resource security.",
    icon: "water_drop",
    bullets: [
      "Soil health and precision agriculture inputs",
      "Water treatment and reuse infrastructure",
      "Bio-based materials from agricultural sources",
      "Integration of agricultural and industrial systems",
    ],
  },
  {
    title: "Digital Infrastructure",
    description: "Platforms that enable visibility, coordination, and scale.",
    icon: "hub",
    bullets: [
      "Materials sourcing and marketplace systems",
      "Supply chain tracking and logistics visibility",
      "Pricing intelligence and market data",
      "Industrial analytics and operational systems",
    ],
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="group flex flex-col rounded-xl p-6 border transition-all duration-300 hover:border-primary/40"
              style={{
                backgroundColor: "rgba(17, 33, 23, 0.04)",
                borderColor: "rgba(17, 33, 23, 0.1)",
              }}
            >
              {/* Icon */}
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg mb-5"
                style={{ backgroundColor: "rgba(29, 201, 98, 0.1)" }}
              >
                <MaterialIcon
                  icon={area.icon}
                  className="text-[22px] text-primary"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {area.description}
              </p>

              {/* Bullets */}
              <ul className="mt-auto space-y-2">
                {area.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 rounded-full shrink-0"
                      style={{ backgroundColor: "#1dc962" }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
