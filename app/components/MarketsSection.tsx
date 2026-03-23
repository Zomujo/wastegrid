import Image from "next/image";

const markets = [
  {
    image: "/market-energy.jpg",
    title: "Energy & Infrastructure",
    description:
      "Power generation, transmission, and the infrastructure that makes industrial activity possible.",
    colSpan: 2,
  },
  {
    image: "/market-mining.jpg",
    title: "Mining & Resource Processing",
    description:
      "Extraction, beneficiation, and transformation of mineral and metal resources.",
    colSpan: 1,
  },
  {
    image: "/market-agriculture.jpg",
    title: "Agriculture & Food Systems",
    description:
      "Inputs, processing, and logistics that support agricultural productivity at scale.",
    colSpan: 1,
  },
  {
    image: "/market-construction.jpg",
    title: "Construction & Urban Development",
    description:
      "Materials, chemicals, and systems that underpin built environments and infrastructure.",
    colSpan: 2,
  },
  {
    image: "/market-manufacturing.jpg",
    title: "Manufacturing & Industrial Production",
    description:
      "Chemical inputs, materials, and energy systems that keep production lines running.",
    colSpan: 1,
  },
  {
    image: "/market-logistics.jpg",
    title: "Logistics & Supply Chains",
    description:
      "Connectivity, visibility, and efficiency across complex industrial supply networks.",
    colSpan: 2,
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

          {/* Bento mosaic — 3 col grid, cards alternate between col-span-2 and col-span-1 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {markets.map((market) => (
              <div
                key={market.title}
                className="group relative overflow-hidden rounded-xl"
                style={{
                  gridColumn: `span ${market.colSpan}`,
                  height: "320px",
                }}
              >
                {/* Image */}
                <Image
                  src={market.image}
                  alt={market.title}
                  fill
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(17, 33, 23, 0.95) 0%, rgba(17, 33, 23, 0.4) 55%, rgba(17, 33, 23, 0.1) 100%)",
                  }}
                />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-base font-bold text-white mb-2">
                    {market.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
                    {market.description}
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
