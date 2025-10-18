import Link from "next/link";

export default function InvestCTA() {
  return (
    <div className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center bg-gradient-to-r from-primary to-orange-400 p-8 sm:p-16 rounded-xl">
        <h2 className="text-3xl font-bold tracking-tight text-background-dark sm:text-4xl">
          Invest in Africa&apos;s Circular Climate Future
        </h2>
        <div className="mt-8 flex justify-center">
          <Link
            className="inline-block rounded-lg bg-background-dark px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-dark"
            href="#"
          >
            Invest Now
          </Link>
        </div>
      </div>
    </div>
  );
}
