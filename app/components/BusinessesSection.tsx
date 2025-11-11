export default function BusinessesSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          alt="Business team in a green office environment"
          className="rounded-xl object-cover shadow-xl"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYDg51jaRFVzqgcGanymUFtSvy2Cy-wf7tw9bm_KZgHT-K7VqHyMezg-njjw5VmUbf3haatfJ3lRPOjxID00zUwoRWBYIFBSelDK-V4nvo6zzZLVRvYlwdtPNxT7dZwFdgvfit-TGOnn2oIWFhgyvR3IrhcUKplsXIThqrmHTaa2-lpgzxDXtsHhFojAg0VISYY9kDCRG3wkpEmXLmFAcLdYYOwTK96ntopXrB_5av4_ic1kJPKN8k6CZvDXZZmrPKYw3s4eilMCg"
        />
      </div>
      <div>
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-primary-orange">
          For Businesses
        </h2>
        <p className="mb-6 text-subtle-light dark:text-subtle-dark">
          Tailored waste management solutions for businesses of all sizes,
          focusing on sustainability and cost-effectiveness.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg bg-background-light p-4 shadow-sm transition-all hover:shadow-lg dark:bg-background-dark">
            <p className="font-medium">Waste Audits</p>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-background-light p-4 shadow-sm transition-all hover:shadow-lg dark:bg-background-dark">
            <p className="font-medium">Recycling Programs</p>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-background-light p-4 shadow-sm transition-all hover:shadow-lg dark:bg-background-dark">
            <p className="font-medium">Composting Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
