import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "./MaterialIcon";

const expertise = [
  { image: "/people-engineering.jpg", label: "Engineering" },
  { image: "/people-materials.jpg", label: "Materials" },
  { image: "/people-operations.jpg", label: "Operations" },
  { image: "/people-technology.jpg", label: "Technology" },
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

            {/* Right — expertise image grid */}
            <div className="grid grid-cols-2 gap-4">
              {expertise.map((item) => (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-xl"
                  style={{ aspectRatio: "1/1" }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(17, 33, 23, 0.85) 0%, rgba(17, 33, 23, 0.2) 60%, transparent 100%)",
                    }}
                  />
                  <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-bold text-white">
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
