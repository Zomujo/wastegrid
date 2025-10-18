export default function ContactCTA() {
  return (
    <div className="mt-24 rounded-xl bg-gradient-to-r from-primary/80 to-yellow-500/80 p-10 text-center text-background-dark dark:text-background-dark">
      <h2 className="text-3xl font-bold tracking-tight">
        Ready to Transform Waste into Climate Solutions?
      </h2>
      <p className="mx-auto mt-3 max-w-2xl">
        Join us in our mission to create a circular economy in Africa. Let's
        work together to build a sustainable future for generations to come.
      </p>
      <div className="mt-8 flex justify-center">
        <button className="flex h-12 items-center justify-center rounded-lg bg-background-light px-6 font-bold text-primary transition-colors hover:bg-background-light/90 dark:bg-background-dark dark:text-primary dark:hover:bg-background-dark/90">
          Get Started Today
        </button>
      </div>
    </div>
  );
}
