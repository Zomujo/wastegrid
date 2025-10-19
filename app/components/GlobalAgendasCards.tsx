export default function GlobalAgendasCards() {
  return (
    <section className="mt-16">
      <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
        Alignment with Global Agendas
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-2xl dark:bg-gray-800">
          <div
            className="h-64 w-full bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuADNYHYQgQv83-l4PRq8bJRU3WLDdLmKyzjlM4KQdDolHSmw_x5tnqS90V2adwAfDbWHVT6PLPq98M2foPHWz_y9qxolLGf8vZUGx-DrE_yjIaQT8paOzE8Av3L6KZt9Yc-x1dxuh3q4joL61SrRk5a2YpPwVunGOu2jKqRi6Byu1JYHFa75vNNqzWKos1MjSoxJfbImnd21m5ybJjyOVzEhDkZyiGjM6a-TaNneivb7nZWhCWTQdpMewTEDPZT_nLboKEhQ7usi8I")`,
            }}
          ></div>
          <div className="flex flex-col gap-3 p-8">
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Sustainable Development Goals
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our work directly contributes to several SDGs, including SDG 6
              (Clean Water), SDG 7 (Affordable and Clean Energy), and SDG 11
              (Sustainable Cities and Communities).
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-2xl dark:bg-gray-800">
          <div
            className="h-64 w-full bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7z7TMhLHRMRmJOo8mEo6DASqWJMMszTCQIGZHVBAA1H5vh2PCks9dC2947drcjrljKTagz-GSrBowZB4-RvDoMX2lS-iu2HF8yvOsWRNNwgGF6mcvdw0O2vXpQuy7qt6kLy0NxOPYqAl_xeg3jlhzrzBf8oBbwRR4S0pl3mh0TNcOaM3d6QlG4SBjLx8VGt898dQK662e0tTi3o_z_XHd2uxkxkvnGRQ1Vvyen1HaPp1OtkjysfysO8W9-xln9I1A5P1qnusZ6lY")`,
            }}
          ></div>
          <div className="flex flex-col gap-3 p-8">
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Paris Agreement
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              By reducing potent greenhouse gas emissions through advanced waste
              management, we actively support the Paris Agreement&apos;s climate
              change mitigation goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
