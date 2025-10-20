export default function ThreePillarsSection() {
  return (
    <div
      className="relative w-screen overflow-x-hidden"
      style={{
        backgroundColor: "#112117",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-lg font-semibold" style={{ color: "#1dc962" }}>
              Our Three Pillars of Lasting Impact
            </h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              WasteGrid Africa&apos;s Core Principles
            </h1>
            <p
              className="mt-4 max-w-2xl mx-auto text-lg"
              style={{ color: "#94a3b8" }}
            >
              Our approach is built on three interconnected pillars, each
              addressing a critical aspect of waste management and urban
              development, working in harmony to create an efficient, equitable,
              and environmentally responsible system.
            </p>
          </div>
          <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col rounded-xl bg-white/5 dark:bg-black/10 p-6 ring-1 ring-inset ring-white/10 dark:ring-white/10">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#1dc962" }}
              >
                <span className="material-symbols-outlined text-white">
                  public
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">
                  Digital Traceability & End-to-End Logistics
                </h3>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#1dc962" }}
                >
                  The Intelligent Grid
                </p>
                <p className="mt-2 text-base" style={{ color: "#94a3b8" }}>
                  We leverage advanced technology to track waste from source to
                  processing, optimizing logistics and ensuring transparency.
                  This data-driven approach enhances efficiency, reduces costs,
                  and minimizes environmental impact.
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-white/5 dark:bg-black/10 p-6 ring-1 ring-inset ring-white/10 dark:ring-white/10">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#1dc962" }}
              >
                <span className="material-symbols-outlined text-white">
                  recycling
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">
                  Decentralized Material Recovery
                </h3>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#1dc962" }}
                >
                  The MSTS Advantage
                </p>
                <p className="mt-2 text-base" style={{ color: "#94a3b8" }}>
                  Our network of decentralized Material Sorting and Transfer
                  Stations (MSTS) brings waste processing closer to communities,
                  reducing transportation needs and creating local economic
                  opportunities.
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-white/5 dark:bg-black/10 p-6 ring-1 ring-inset ring-white/10 dark:ring-white/10">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#1dc962" }}
              >
                <span className="material-symbols-outlined text-white">
                  groups
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">
                  Human Capital Formalization
                </h3>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#1dc962" }}
                >
                  The Green Gig Economy
                </p>
                <p className="mt-2 text-base" style={{ color: "#94a3b8" }}>
                  We empower waste workers by formalizing their roles, providing
                  training, and connecting them to opportunities within the
                  WasteGrid ecosystem. This creates a skilled workforce,
                  improves livelihoods, and promotes social inclusion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
