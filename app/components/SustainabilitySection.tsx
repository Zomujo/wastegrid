import MaterialIcon from "./MaterialIcon";

const points = [
  {
    icon: "recycling",
    title: "Circular material flows",
    description:
      "Circular material flows reduce dependency on raw extraction by recovering and reintegrating materials into productive industrial use.",
  },
  {
    icon: "bolt",
    title: "Low-carbon energy and fuel systems",
    description:
      "Low-carbon energy and fuel systems reduce emissions across industrial operations and supply chains.",
  },
  {
    icon: "local_shipping",
    title: "Efficient supply chains",
    description:
      "Efficient supply chains reduce waste and cost by improving coordination and visibility across the full value chain.",
  },
  {
    icon: "verified",
    title: "Responsible processing",
    description:
      "Responsible processing ensures long-term viability — for the environment, for communities, and for the industries we serve.",
  },
];

export default function SustainabilitySection() {
  return (
    <section className="py-24 sm:py-32 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#1dc962" }}
              >
                Our Approach to Sustainability
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl leading-[1.1] mb-4">
              Structural, not decorative.
            </h2>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
              Every system WasteGrid builds is designed with sustainability as a
              core constraint — not an afterthought.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point) => (
              <div
                key={point.title}
                className="flex gap-5 rounded-xl p-7 border border-gray-200 dark:border-white/[0.07]"
                style={{ background: "rgba(17, 33, 23, 0.03)" }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg mt-0.5"
                  style={{ backgroundColor: "rgba(29, 201, 98, 0.1)" }}
                >
                  <MaterialIcon
                    icon={point.icon}
                    className="text-[22px] text-primary"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
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
