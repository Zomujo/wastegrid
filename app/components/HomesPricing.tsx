export default function HomesPricing() {
  return (
    <section
      className="py-16 md:py-24 bg-background-light dark:bg-background-dark"
      id="homes"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center">
          For Homes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-neutral-800/20 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              The Civic Plan
            </h3>
            <p className="mt-2 flex items-baseline gap-1 text-neutral-900 dark:text-neutral-100">
              <span className="text-5xl font-extrabold tracking-tight">
                $29
              </span>
              <span className="text-lg font-semibold">/month</span>
            </p>
            <ul className="mt-6 space-y-4 text-neutral-600 dark:text-neutral-400 flex-grow">
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <span>Basic waste collection</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <span>Recycling support</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <span>Community events</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-primary/20 dark:bg-primary/30 text-primary font-bold py-3 px-4 rounded-lg hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
              Choose Plan
            </button>
          </div>

          <div className="bg-gradient-to-br from-primary to-green-400 dark:from-primary dark:to-green-500 text-white rounded-xl p-8 flex flex-col shadow-2xl ring-2 ring-primary -translate-y-4">
            <h3 className="text-xl font-bold">The Metro Plan</h3>
            <p className="mt-2 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold tracking-tight">
                $49
              </span>
              <span className="text-lg font-semibold">/month</span>
            </p>
            <ul className="mt-6 space-y-4 flex-grow">
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <span>Enhanced waste collection</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <span>Advanced recycling</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <span>Educational workshops</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-white text-primary font-bold py-3 px-4 rounded-lg hover:bg-white/90 transition-colors">
              Choose Plan
            </button>
          </div>

          <div className="bg-white dark:bg-neutral-800/20 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              The Vanguard Plan
            </h3>
            <p className="mt-2 flex items-baseline gap-1 text-neutral-900 dark:text-neutral-100">
              <span className="text-5xl font-extrabold tracking-tight">
                $99
              </span>
              <span className="text-lg font-semibold">/month</span>
            </p>
            <ul className="mt-6 space-y-4 text-neutral-600 dark:text-neutral-400 flex-grow">
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <span>Premium waste collection</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <span>Comprehensive recycling</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <span>Exclusive community programs</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-primary/20 dark:bg-primary/30 text-primary font-bold py-3 px-4 rounded-lg hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
