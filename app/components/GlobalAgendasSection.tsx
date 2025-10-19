export default function GlobalAgendasSection() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Alignment with Global Agendas
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Our work aligns with several global agendas, including the Sustainable
          Development Goals (SDGs), the Paris Agreement on Climate Change, and
          the African Union&apos;s Agenda 2063. By addressing waste management
          challenges, we contribute to broader goals of sustainable development,
          climate action, and inclusive growth.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <img
          alt="Globe showing Africa with interconnected lines representing global networks"
          className="rounded-xl shadow-2xl"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVMVKlUu6rfo81r-QDN8JCiNZ2GvHL0WUto8L691nBHdjXP7zCs9J7cf0-zX63I41IXJTzIiVtXGFLl2TgduTgoiXuBkxgI7jvf5lpLN-6yMdpV0GYnbHNsLz6M2tHC0uzJ9XG_kFZSKcw6W5WKUkIeROagcy4Gd0lje_EWhT0UFLL7pOsm0AG866xUzRNnRmgRZutB-7X1SazWeRwJFWzLPmIrPjIhK_zEI_ugyfiAdM49FNBF9QN4Ws0vepYTpOJ8MZzlM0tRGc"
        />
      </div>
    </section>
  );
}
