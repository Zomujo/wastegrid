export default function ContactHero() {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
        <span
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "#1dc962" }}
        >
          Get in Touch
        </span>
        <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
      </div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white mb-4">
        Let&apos;s build what enables everything else.
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-subtle-light dark:text-subtle-dark md:text-lg leading-relaxed">
        Whether you are a potential partner, investor, or collaborator across
        materials, energy, or industrial infrastructure — we want to hear from
        you.
      </p>
    </div>
  );
}
