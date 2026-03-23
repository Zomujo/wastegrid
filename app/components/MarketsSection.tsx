import MaterialIcon from "./MaterialIcon";

const markets = [
  {
    icon: "electric_bolt",
    title: "Energy & Infrastructure",
    description:
      "Power generation, transmission, and the infrastructure that makes industrial activity possible.",
  },
  {
    icon: "landslide",
    title: "Mining & Resource Processing",
    description:
      "Extraction, beneficiation, and transformation of mineral and metal resources.",
  },
  {
    icon: "grass",
    title: "Agriculture & Food Systems",
    description:
      "Inputs, processing, and logistics that support agricultural productivity at scale.",
  },
  {
    icon: "domain",
    title: "Construction & Urban Development",
    description:
      "Materials, chemicals, and systems that underpin built environments and infrastructure.",
  },
  {
    icon: "precision_manufacturing",
    title: "Manufacturing & Industrial Production",
    description:
      "Chemical inputs, materials, and energy systems that keep production lines running.",
  },
  {
    icon: "local_shipping",
    title: "Logistics & Supply Chains",
    description:
      "Connectivity, visibility, and efficiency across complex industrial supply networks.",
  },
];

export default function MarketsSection() {
  return (
    <section
      className="py-24 sm:py-32"
      style={{ backgroundColor: "#112117" }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:items-end lg:justify-between mb-14">
            <div className="max-w-xl mb-8 lg:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#1dc962" }}
                >
                  Our Markets
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-[1.1]">
                Supporting the sectors that build economies.
              </h2>
            </div>
            <p
              className="max-w-sm text-base leading-relaxed lg:text-right"
              style={{ color: "#64748b" }}
            >
              Our work spans the sectors responsible for growth, production, and
              long-term economic development across Africa.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            {markets.map((market) => (
              <div
                key={market.title}
                className="group flex flex-col p-8 transition-colors duration-200"
                style={{ background: "#112117" }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-lg mb-6"
                  style={{ backgroundColor: "rgba(29, 201, 98, 0.1)" }}
                >
                  <MaterialIcon
                    icon={market.icon}
                    className="text-[22px] text-primary"
                  />
                </div>
                <h3 className="text-base font-bold text-white mb-3">
                  {market.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {market.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
