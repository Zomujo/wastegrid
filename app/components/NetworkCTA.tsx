export default function NetworkCTA() {
  return (
    <div className="bg-gradient-to-br from-primary-500 to-green-400 dark:from-primary-600 dark:to-green-500 rounded-xl p-8 sm:p-12 text-center">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl">
          Join Waste Grid&apos;s Environmental Partner program and be a part of
          the solution to transform waste and empower communities.
        </p>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-primary-600 text-base font-bold transition-transform hover:scale-105">
          <span className="truncate">Become an Environmental Partner</span>
        </button>
      </div>
    </div>
  );
}
