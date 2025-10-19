export default function TestimonialSection() {
  return (
    <div className="rounded-xl bg-gradient-to-r from-green-500 to-lime-500 dark:from-green-700 dark:to-lime-700 overflow-hidden text-white">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-8 lg:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            &ldquo;I&apos;ve doubled my income.&rdquo;
          </h2>
          <p className="mt-4 text-lg">
            &ldquo;Being a certified Environmental Partner with Waste Grid has
            been life-changing. I&apos;ve been able to double my income and
            provide a better life for my family.&rdquo;
          </p>
          <p className="mt-6 font-bold text-xl">Sarah</p>
          <p className="text-sm opacity-80">Environmental Partner</p>
        </div>
        <div className="h-64 md:h-full w-full">
          <img
            alt="A smiling woman in professional gear, identified as Sarah, an Environmental Partner."
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABxk2fYc2JPPZ0mQLCy0LWEa6vQpQYgkHaFZVAVyylmb3YKCUI0s3C3WKQc7iqHuODwT9abOh-xTbXNQIYGELt4Nb43ePwaaZZ7NK-6FiVm1ETmWttY_lvJ2JwfBTYeaHBqsKK5Hl11AjyQEfM1E0UEGj2Ii269M6tQh1NFuAmD5CsJ_ItMpUyDVkCVTsE43bnquZJzq5BFuYIJbbneZcPnRE_YDH1WZ2Rld32egz9CMqYewu_tRgTGi0on_gquomHx32XMsWO3Yw"
          />
        </div>
      </div>
    </div>
  );
}
