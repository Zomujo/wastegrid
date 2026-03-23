import Image from "next/image";

const platformPoints = [
  {
    image: "/platform-materials.jpg",
    title: "Secures access to both primary and secondary materials",
  },
  {
    image: "/platform-energy.jpg",
    title: "Enables reliable and cost-efficient energy systems",
  },
  {
    image: "/platform-supply-chain.jpg",
    title: "Strengthens industrial supply chains",
  },
  {
    image: "/platform-efficiency.jpg",
    title: "Improves resource efficiency across sectors",
  },
];

export default function WhatWeAreBuilding() {
  return (
    <section className="py-24 sm:py-32 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-5 lg:gap-16 lg:items-center">
            {/* Left: header (2 cols) */}
            <div className="lg:col-span-2 mb-12 lg:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#1dc962" }}
                >
                  What We Are Building
                </span>
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6 leading-[1.1]">
                An integrated industrial platform.
              </h2>

              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Our role is to build the underlying systems that make industrial
                activity possible and sustainable at scale across Africa.
              </p>
            </div>

            {/* Right: 4-point image cards (3 cols) */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platformPoints.map((point) => (
                <div
                  key={point.title}
                  className="group relative overflow-hidden rounded-xl"
                  style={{ aspectRatio: "3/2" }}
                >
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(17, 33, 23, 0.9) 0%, rgba(17, 33, 23, 0.3) 60%, transparent 100%)",
                    }}
                  />
                  <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-white leading-snug">
                    {point.title}
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
