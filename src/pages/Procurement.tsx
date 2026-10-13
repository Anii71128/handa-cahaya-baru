import Hero from "../components/Hero";

const features = [
  {
    title: "Kebutuhan Alat",
    description:
      "Membantu menyediakan alat yang diperlukan untuk mendukung kebutuhan pekerjaan.",
  },
  {
    title: "Kebutuhan Peralatan",
    description: "Dukungan pengadaan peralatan sesuai kebutuhan proyek.",
  },
  {
    title: "Konsultasi Kebutuhan",
    description: "Diskusikan kebutuhan pengadaan bersama tim kami.",
  },
];

const procurementItems = [
  {
    title: "Pengadaan Alat Berat",
    description:
      "Membantu memenuhi kebutuhan pengadaan alat berat sesuai kebutuhan proyek dan pekerjaan.",
    // Alat berat (excavator) di area proyek
    image: "https://unsplash.com/photos/iQAF4A0To1g/download?force=true&w=800",
  },
  {
    title: "Pengadaan Peralatan",
    description:
      "Menyediakan dukungan pengadaan berbagai peralatan yang dibutuhkan dalam pekerjaan.",
    // Berbagai peralatan kerja (tools) untuk konstruksi
    image: "https://unsplash.com/photos/4Qv1wRxondk/download?force=true&w=800",
  },
  {
    title: "Kebutuhan Proyek",
    description:
      "Membantu memenuhi kebutuhan barang dan peralatan pendukung untuk kebutuhan proyek.",
    // Dump truck menurunkan material di lokasi proyek
    image: "https://unsplash.com/photos/peVKQQ2w-lg/download?force=true&w=800",
  },
];

const steps = [
  {
    title: "Sampaikan Kebutuhan",
    description: "Beritahu kami barang atau peralatan yang Anda perlukan.",
  },
  {
    title: "Pencarian & Penawaran",
    description:
      "Kami mencarikan pilihan yang sesuai dan menyampaikan penawaran.",
  },
  {
    title: "Konfirmasi",
    description: "Pilihan dan ketentuan disepakati bersama sebelum diproses.",
  },
  {
    title: "Pengiriman",
    description: "Barang dikirim sesuai kesepakatan ke lokasi yang dituju.",
  },
];

function Procurement() {
  return (
    <main className="overflow-hidden">
      <Hero
        size="full"
        image="/images/procurement-hero.png"
        imageAlt="Pengadaan kebutuhan proyek CV Handa Cahaya Baru"
        tagline="Pengadaan"
        title="Pengadaan untuk Kebutuhan Proyek"
        description="Kami membantu memenuhi berbagai kebutuhan pengadaan untuk mendukung pekerjaan dan operasional proyek."
        buttons={[{ label: "Hubungi Purchasing", href: "/kontak" }]}
      />

      {/* Detail layanan */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                {/* Deretan unit alat konstruksi yang siap dipakai di proyek */}
                <img
                  src="https://unsplash.com/photos/on86HzomPOk/download?force=true&w=1200"
                  alt="Pengadaan kebutuhan proyek"
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
                Pengadaan
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Dukungan Pengadaan untuk Pekerjaan dan Operasional
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Kami membantu memenuhi berbagai kebutuhan pengadaan untuk
                mendukung pekerjaan dan operasional proyek.
              </p>

              <ul className="mt-8 flex flex-col gap-5">
                {features.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                      ✓
                    </span>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="/kontak"
                className="mt-9 inline-flex rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-600"
              >
                Hubungi Purchasing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Kebutuhan pengadaan */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              Kebutuhan Pengadaan
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Solusi Pengadaan untuk Proyek Anda
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {procurementItems.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 border-t-4 border-amber-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Alur pengadaan */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              Alur Pengadaan
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Cara Mengajukan Kebutuhan
            </h2>
          </div>

          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <li key={step.title} className="relative text-center">
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-7 hidden h-px w-full bg-amber-500/30 lg:block"
                  />
                )}

                <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-white ring-8 ring-white">
                  {index + 1}
                </span>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Punya Kebutuhan Pengadaan?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
            Sampaikan kebutuhan barang atau peralatan yang diperlukan untuk
            proyek Anda kepada kami.
          </p>

          <a
            href="/kontak"
            className="mt-8 inline-flex rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-600"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </main>
  );
}

export default Procurement;
