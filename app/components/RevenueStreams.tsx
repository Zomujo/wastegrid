export default function RevenueStreams() {
  return (
    <section className="mt-16">
      <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
        Our Four Revenue Streams
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl dark:bg-gray-800">
          <div className="aspect-video w-full overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgBpp6aUhqmhNFYOIpTKzTfWCn95UG0S7OaGWar324LDKX7c0fYdCWL_Q8zwB_hdfx0Bj1DVduZ6q-nOZdQwnjUWq3hq0k_uK2BmUyN-zI1qKVsEfEkX9KnVJxKAJc2tumBEEBvhLzHvozdElqHQ6R16GBl_5Q5jFCoXKmzsrkLfZUzHtUv4SpFz2VxaudTbGyslRdYyBYDo6yDoJyiKWw_n6tHqbZjbUcb9TK-3teGFzdLJ30MJ_f-YbjMGiYH5oBRvOEjrQ8DKs")`,
              }}
            ></div>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400">
              Waste Collection
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Service fees from residential and commercial clients.
            </p>
          </div>
        </div>
        <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl dark:bg-gray-800">
          <div className="aspect-video w-full overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBu8Ygh2FeRI6tGJCDwTRedySTPof5fUPY-GCsu-glbFqrYxCF4hr_rqaRivtCMVxzN8K1rNCh-doKIJw7FS61x6w6vsIxWVL-sUFU_wwjicDORVzn0UUrkjasqSi84Cvukkcc_izO33qzYw0eLboN0HCdIAYNeHc2K5mPgkSvZRaVkqvHOSCKDehyJtipogS84DbC8wa-KeqpOw_EcxWMar_6tymsmZGaz5unx31_daj0MBoxjXhe0NKZEZBZHL_ubHxrL56x7dBU")`,
              }}
            ></div>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400">
              Recycled Materials
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Revenue from selling processed recyclables.
            </p>
          </div>
        </div>
        <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl dark:bg-gray-800">
          <div className="aspect-video w-full overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCp3SPY-PX-znUWsuZbii1-h2TLoz74wdF2USHecLwpgH7JVS1k4_uxdgvt7sQE8DK0R7nM14ZGfQK4mZFB39FQ7OWiGJlBzb0Y-n_9iv5SUnCzetNRdKsWKW0Tt8MkwQAM60FM35SAn3oReh5dUdCEXgpxVpL8SBF8SdRL2EXwzYEb_l-oe-O_3Qyl6JmGggGPfZuoQd1qR_QwS2A1fN6MJZlqP_Rejn6oPF_XjBQRcKQ1bYjO6MRmcUlQNXL-VQqMCy8xgUn2UsM")`,
              }}
            ></div>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400">
              Waste-to-Energy
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Income from generating clean energy from waste.
            </p>
          </div>
        </div>
        <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl dark:bg-gray-800">
          <div className="aspect-video w-full overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKuCsq2K1dachjMvSGNS_bNNRxxN_cw3SmQD_PKE5gi5uOfj1blHTqVsKQQGUlV-d7FnH21CE0l6LKNdaTyX7o3XF4wRKNHmSQvjhKY0bh4WdQCkzFqVbW-eJEfnji9pmy6cqwQde_UKWsu-5_GuTrKpzFLfwi769YFYM19p0dkkRN2yrmtBUOf4-rn97L670kGN1gk5iGayvf1d1yw4Q9PN6Yzg_A8Z2CPLBYnuwf-sTHMGe3W9er2Lpe77p1RDP1Gw4IIVt4vaM")`,
              }}
            ></div>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400">
              Carbon Credits
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Earnings from verified GHG emission reductions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
