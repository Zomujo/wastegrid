export default function GlobalAgendasCards() {
  return (
    <section className="mt-20 sm:mt-32">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Our Alignment with Global Agendas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 dark:bg-black/10 rounded-xl overflow-hidden group">
          <div
            className="h-56 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1yFptcTF9LxGrzM279nqlFI7PataziY2zo20zDHQOvCS1PcaqhlsG2l_rwV2nSJwc3MzRzujRfVAF0UThP4ucreW0QMUow-U_-vtGM5LO-xuxhZ4CWrp0eXtgCZxT7sFuZSztB2vuvddEwNGDmc9twtXZHUqdQvvFix04d4W9rVJ3X-ZbebRkky-BXysk7hlnTr9kJGYvyCulEwJwrXaHAUG8wByHJzrfjR3sXOvhu1asJlaof-vpSEv0Tya9lbzhNIHgSrkrMw")`,
            }}
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Sustainable Development Goals</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Contributing to poverty reduction, clean water, and sustainable
              cities.
            </p>
          </div>
        </div>

        <div className="bg-white/5 dark:bg-black/10 rounded-xl overflow-hidden group">
          <div
            className="h-56 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1B3sqI6LvCQF3QnG1YvJG9TXNVrqFmnFKGLiyKYugfLXTi-mbOCQQFYh_5l45TYklhvFkgiF5hG1cFIKW2lTz2GnGcSKfHBYnxwNg_ymhxTAnTUnMPjX3Wf5EwVXFAHMqS2U7rGzhtnP3mjVMhjxZKn5DWGoEHs19EUxWOXFVYFPvxawkKplYfT7R82rMMcRHIOTRTRrzd5Uzv_dhW_Y-Mnlqu_dZgy8xN9qIo4g_LY2FvE6Co9eN2TKTy4IG6LuOcyXw8FOe-g")`,
            }}
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Paris Agreement</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Directly supporting goals by reducing greenhouse gas emissions.
            </p>
          </div>
        </div>

        <div className="bg-white/5 dark:bg-black/10 rounded-xl overflow-hidden group">
          <div
            className="h-56 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWbJF21zFiH4vf6qns_f4eXwV69dj4NU2aMzGXig4Im12U1MAlRAks3lCUKw90zBH-vGHmjgDuJIoYudMQitk1ZwIfdO00_iW1I1gM3V_l6bCeQ6U0UG_IKGLvQ0_1RHxD2-Lq74oePylUzc0GPAwzNc7KnuC62GtdUIllfEjM9_8fyNRXZ7S1m3s8vqQh1H4JXDvdQ49rKJQ4HAaJg6ujWpwKz6CRaXK6dNNyfi95_YV8vhswer66OhJsRgUw-sSYf2tGKYmO9A")`,
            }}
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Africa's Agenda 2063</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Aligning with inclusive growth and environmental sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
