import MaterialIcon from "./MaterialIcon";

const platformPoints = [
  {
    icon: "inventory_2",
    title: "Secures access to both primary and secondary materials",
  },
  {
    icon: "bolt",
    title: "Enables reliable and cost-efficient energy systems",
  },
  {
    icon: "link",
    title: "Strengthens industrial supply chains",
  },
  {
    icon: "loop",
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

            {/* Right: 4-point list (3 cols) */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {platformPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl p-6 border border-gray-200 dark:border-white/[0.07]"
                  style={{
                    background: "rgba(17, 33, 23, 0.03)",
                  }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg mt-0.5"
                    style={{ backgroundColor: "rgba(29, 201, 98, 0.1)" }}
                  >
                    <MaterialIcon
                      icon={point.icon}
                      className="text-[20px] text-primary"
                    />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-300">
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
