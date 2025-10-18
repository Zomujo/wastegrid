import Link from "next/link";

export default function GlobalAgendas() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Alignment with Global Agendas
        </h2>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Our work directly contributes to achieving the Sustainable Development
          Goals (SDGs), particularly those related to sustainable cities and
          communities, responsible consumption and production, and climate
          action. We are also aligned with the objectives of the Paris Agreement
          and Africa&apos;s Agenda 2063, supporting the continent&apos;s
          transition to a green and inclusive economy.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <Link
            className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-background-dark shadow-lg transition-transform hover:scale-105"
            href="/solutions"
          >
            <span className="truncate">Discover Our Solutions</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
