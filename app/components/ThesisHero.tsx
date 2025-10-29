import Link from "next/link";
import MaterialIcon from "./MaterialIcon";

export default function ThesisHero() {
  return (
    <div
      className="relative flex min-h-[520px] flex-col items-center justify-center gap-8 overflow-hidden rounded-xl bg-cover bg-center p-8 text-center text-white"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(29, 201, 98, 0.5) 0%, rgba(249, 115, 22, 0.3) 100%), linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAe4f7H_OlWS_Kps10lXEtx9TicCxuxN3twDh-9lfeB5ys2rGOKfvF75PgG3wSUvEJhnnJzG43XfGUuZ3qddPNCb1fnS34y49tUCY7w_dF1grgcIo3BNgFIrAN0gvSGfg9OmNpFGvusah-1e2gqyp7mYrAKBPeD6aBpq_2Tb7Yn8HeKtBJqn4srr_cFxytt-3TbDbCleSGGCxQmEiyIsaXSOptB1LJrnjDaM5giYD24xu9BiRugpprEpBkZwsUYmqNd3lCGGLbb2A")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex max-w-4xl flex-col gap-4">
        <h1 className="text-4xl font-bold !leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl">
          We Saw Climate Solutions in What Others Left Behind.
        </h1>
        <p className="mx-auto max-w-3xl text-base font-normal text-white/90 sm:text-lg">
          At Waste Grid, we envision a world where waste is not an end but a
          beginning. Our thesis is rooted in the belief that the discarded
          materials of today hold the key to a sustainable and prosperous
          tomorrow. We are committed to transforming waste into valuable
          resources, driving economic growth, and fostering environmental
          stewardship across Africa.
        </p>
      </div>
      <Link
        className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-background-dark shadow-lg transition-transform hover:scale-105"
        href="/solutions"
      >
        <span className="truncate">Discover Our Solutions</span>
        <MaterialIcon icon="arrow_forward" className="" />
      </Link>
    </div>
  );
}
