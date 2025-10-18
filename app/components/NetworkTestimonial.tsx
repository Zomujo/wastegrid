export default function NetworkTestimonial() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
        Testimonial
      </h2>
      <div className="bg-white dark:bg-background-dark p-8 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3">
          <p className="text-sm font-semibold text-primary mb-2">
            Environmental Partner
          </p>
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
            &ldquo;Transforming My Life and Community&rdquo;
          </h3>
          <blockquote className="italic text-slate-600 dark:text-slate-400">
            &ldquo;I used to struggle with inconsistent income and lack of
            recognition. Waste Grid has given me the opportunity to earn more,
            learn new skills, and be part of something bigger. I&apos;m proud to
            be an Environmental Partner and contribute to a cleaner, greener
            future for my community.&rdquo;
          </blockquote>
        </div>
        <div
          className="md:w-1/3 w-full h-64 md:h-auto md:aspect-square rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVGiDsitGWeCXGoEkzzq5XAE26Xv0VoL3qdiqh1cMombFkA13ABPVzjMvUS4UiMG1TIsv8pYBa4n_2efMLKNrY9uKZQYb4ACx-H4x_YLv3-BWEj7PEEaKDu8WsmZp5DU7tqBmMEAAkJyQRc27AFOe-BJr3QCbe1tYufvtMZMcAK0twav6s12sfEqueV2BkgrARLbOlVrTB17ssC6jAXM0R_x0oiOKG7XXO5MfgrGhfeDvOaLSl0TpsV1CgwZsx9ER7N_XoHmiNZA")`,
          }}
        />
      </div>
    </section>
  );
}
