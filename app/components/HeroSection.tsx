import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[60vh] rounded-xl overflow-hidden flex items-end p-8 md:p-12"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnPX_XlDbBzoJA3bjFPYyJa76NqjOfbf2fCdLcPbPCzJlMA9IPTMGAdW1C3MHNmdU9ep_kjV4_jOCKcNLjh0jBYcAMHPO8a8JptB_4l3_tCRvOgFu3wD4MHDNZpnk4sEdaYW4Jb4_CQkjfQ60ntiipmJyDHjJtB7jalcZxl14Xh6k5rtAMDyLPcSnBhfvXtx_f7pTlGmE85HGbXBxu0DZionjuIiyHVwQOinXCKsFsA6l2ZAS9N-uTtg4GfWDfV3hqWkyBGpz3Ow")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="z-10 flex max-w-3xl flex-col gap-6 text-white">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          The Future of Waste in Africa is{" "}
          <span className="gradient-text">Circular.</span>
        </h1>
        <p className="text-lg text-content-dark">
          We are transforming waste into climate solutions and empowering
          communities across Africa.
        </p>
        <Link
          className="w-fit rounded-lg bg-primary px-6 py-3 text-base font-bold text-white transition-transform hover:scale-105"
          href="/solutions"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
