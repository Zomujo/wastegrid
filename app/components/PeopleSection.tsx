import Link from "next/link";
import MaterialIcon from "./MaterialIcon";

const expertise = [
  { icon: "engineering", label: "Engineering" },
  { icon: "science", label: "Materials" },
  { icon: "build", label: "Operations" },
  { icon: "devices", label: "Technology" },
];

export default function PeopleSection() {
  return (
    <section className="py-24 sm:py-32 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
            {/* Left */}
            <div className="mb-12 lg:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#1dc962" }}
                >
                  People
                </span>
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl leading-[1.1] mb-6">
                Systems thinkers. Execution-focused.
              </h2>

              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                Our strength lies in combining expertise across engineering,
                materials, operations, and technology.
              </p>

              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mb-10">
                We build teams that understand both systems and execution —
                capable of delivering complex industrial solutions in real-world
                environments.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-bold text-white transition-all hover:scale-105"
                style={{ backgroundColor: "#1dc962" }}
              >
                Work with us
                <MaterialIcon icon="arrow_forward" className="text-[20px]" />
              </Link>
            </div>

            {/* Right — expertise grid */}
            <div className="grid grid-cols-2 gap-5">
              {expertise.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-3 rounded-xl p-10 border border-gray-200 dark:border-white/[0.07] text-center"
                  style={{ background: "rgba(17, 33, 23, 0.03)" }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "rgba(29, 201, 98, 0.1)" }}
                  >
                    <MaterialIcon
                      icon={item.icon}
                      className="text-[24px] text-primary"
                    />
                  </div>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    {item.label}
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
