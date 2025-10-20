export default function GlobalGovernanceSection() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-16 px-4">
      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-background-dark dark:text-background-light mb-4">
            Alignment with Global Governance & Policy
          </h1>
          <p className="text-lg text-background-dark/70 dark:text-background-light/70 max-w-3xl mx-auto">
            WasteGrid Africa&apos;s platform generates auditable,
            climate-aligned assets that drive policy and investment, ensuring
            compliance and maximizing impact.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-background-dark/10 dark:border-background-light/10 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <span className="material-symbols-outlined text-primary text-2xl">
                  corporate_fare
                </span>
              </div>
              <h3 className="text-xl font-bold text-background-dark dark:text-background-light">
                Corporate ESG & Scope 3
              </h3>
            </div>
            <p className="text-background-dark/80 dark:text-background-light/80">
              Our platform provides detailed, verifiable data on waste
              management practices, enabling corporations to accurately report
              and improve their ESG performance and Scope 3 emissions.
            </p>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-background-dark/10 dark:border-background-light/10 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <span className="material-symbols-outlined text-primary text-2xl">
                  monitoring
                </span>
              </div>
              <h3 className="text-xl font-bold text-background-dark dark:text-background-light">
                Climate Finance & VCRs
              </h3>
            </div>
            <p className="text-background-dark/80 dark:text-background-light/80">
              By generating high-quality, verifiable carbon reduction units
              (VCRs), WasteGrid Africa facilitates access to climate finance,
              supporting investment in sustainable waste management projects.
            </p>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-background-dark/10 dark:border-background-light/10 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <span className="material-symbols-outlined text-primary text-2xl">
                  public
                </span>
              </div>
              <h3 className="text-xl font-bold text-background-dark dark:text-background-light">
                Global Agendas
              </h3>
            </div>
            <p className="text-background-dark/80 dark:text-background-light/80">
              We align with the UN SDGs and Africa&apos;s Agenda 2063, promoting
              sustainable urban development and resource management across the
              continent.
            </p>
          </div>
        </div>
        <div className="text-center mt-16">
          <button className="bg-primary text-background-dark font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
            Join the Movement
          </button>
        </div>
      </div>
    </div>
  );
}
