export default function HomesPricing() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-primary-green">
          For Homes
        </h2>
        <p className="mb-6 text-subtle-light dark:text-subtle-dark">
          Convenient and eco-friendly waste management services for households,
          ensuring responsible disposal and recycling.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg bg-background-light p-4 shadow-sm transition-all hover:shadow-lg dark:bg-background-dark">
            <div>
              <p className="font-medium">Basic Plan</p>
              <p className="text-sm text-subtle-light dark:text-subtle-dark">
                Ideal for small households
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-background-light p-4 shadow-sm transition-all hover:shadow-lg dark:bg-background-dark">
            <div>
              <p className="font-medium">Standard Plan</p>
              <p className="text-sm text-subtle-light dark:text-subtle-dark">
                Suitable for medium-sized families
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-background-light p-4 shadow-sm transition-all hover:shadow-lg dark:bg-background-dark">
            <div>
              <p className="font-medium">Premium Plan</p>
              <p className="text-sm text-subtle-light dark:text-subtle-dark">
                Best for large households with high waste volume
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img
          alt="Happy family sorting waste"
          className="rounded-xl object-cover shadow-xl"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDApUr8zmR_fuGEilGixMMOr3MUY4kSBs36ypTFMmAuqfNUHPCQfRGymLOOWdFfeF63DIFNQnsJkcj5yIHjxKqrNEkwdxJBoj2TG7B40pkaF5IW5-Jg98iUEcA1wXACr_g-IEzQEIE_lnA3pT2cQjceNYpk-4Ff53FO5HgvsA-hKdT0ZxjvO-qSMaDBbkvLJdq7O4tWHIL7kRVlchSZsx58L6NWW-4H9_CYbwdG1K_rs75rhkg8s23Qr7i3XjP30f8jknpbdu382bA"
        />
      </div>
    </section>
  );
}
