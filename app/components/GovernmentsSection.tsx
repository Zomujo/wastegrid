export default function GovernmentsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-primary-green">
          For Governments
        </h2>
        <p className="mb-6 text-subtle-light dark:text-subtle-dark">
          Partnering with governments to implement comprehensive waste
          management systems, promoting environmental sustainability and public
          health.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg bg-background-light p-4 shadow-sm transition-all hover:shadow-lg dark:bg-background-dark">
            <p className="font-medium">City-Wide Waste Collection</p>
            <button className="rounded-lg bg-primary-green/10 px-4 py-2 text-sm font-medium text-primary-green transition-colors hover:bg-primary-green/20">
              Learn More
            </button>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-background-light p-4 shadow-sm transition-all hover:shadow-lg dark:bg-background-dark">
            <p className="font-medium">Waste-to-Energy Projects</p>
            <button className="rounded-lg bg-primary-green/10 px-4 py-2 text-sm font-medium text-primary-green transition-colors hover:bg-primary-green/20">
              Learn More
            </button>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-background-light p-4 shadow-sm transition-all hover:shadow-lg dark:bg-background-dark">
            <p className="font-medium">Public Awareness Campaigns</p>
            <button className="rounded-lg bg-primary-green/10 px-4 py-2 text-sm font-medium text-primary-green transition-colors hover:bg-primary-green/20">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img
          alt="Modern African city with clean streets"
          className="rounded-xl object-cover shadow-xl"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnnEsCxpP0t4T_tmWjwKD2ful6lVrsMVjtgqnu0PwVPdGiTKSTgDK4H9qzJ-sYUnsIAxH_mgsprJYvaJ9fu6e9y0zsYWI3dnfOjLczj85-i5nEzQzJr_hIfxTNuz_sAv_V9S3D6Ytw6NkvssDUX7XWEcmyugm6qGmvbi21yK_m-SKfiXb97C928Qg6ne68Aj5_Y4gisFS2tURCB19NN4pExjXTzsijZS6xA02QaDDDE7UL6gC1GxvdMTHvjXIGu8iSIubWymp17I8"
        />
      </div>
    </section>
  );
}
