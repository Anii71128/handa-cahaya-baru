import Hero from "../components/Hero";

const purchasingData = [
  {
    id: 1,
    title: "Alat Berat",
    description:
      "Kebutuhan alat berat dan unit pendukung untuk berbagai pekerjaan proyek.",
  },
  {
    id: 2,
    title: "Material",
    description:
      "Pengadaan material dan kebutuhan pendukung sesuai kebutuhan pekerjaan.",
  },
  {
    id: 3,
    title: "Kebutuhan Proyek",
    description:
      "Kebutuhan lainnya yang berkaitan dengan pekerjaan dan operasional proyek.",
  },
];

const steps = [
  {
    title: "Sampaikan Kebutuhan",
    description:
      "Sampaikan informasi kebutuhan alat, material, atau kebutuhan proyek kepada tim purchasing.",
  },
  {
    title: "Konsultasi Kebutuhan",
    description:
      "Tim melakukan konsultasi untuk memahami kebutuhan dan menyesuaikan pengadaan dengan pekerjaan yang akan dilakukan.",
  },
  {
    title: "Penawaran dan Pengadaan",
    description:
      "Kebutuhan diproses dan dilanjutkan dengan informasi penawaran serta proses pengadaan.",
  },
];

function Purchasing() {
  return (
    <main className="overflow-hidden">
      <Hero
        size="full"
        image="/images/purchasing-hero.png"
        imageAlt="Purchasing CV Handa Cahaya Baru"
        tagline="Purchasing"
        title="Solusi Pengadaan untuk Kebutuhan Proyek Anda"
        description="Kami membantu memenuhi kebutuhan pengadaan alat, material, dan berbagai kebutuhan pendukung proyek melalui proses yang terarah dan profesional."
        buttons={[{ label: "Hubungi Purchasing", href: "/kontak" }]}
      />

      {/* Kebutuhan pengadaan */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              Kebutuhan Pengadaan
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Kebutuhan yang Dapat Dikonsultasikan
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Sampaikan kebutuhan proyek atau operasional Anda kepada tim
              purchasing untuk mendapatkan informasi dan penawaran yang sesuai.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {purchasingData.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border-t-4 border-amber-500 bg-gray-50 p-7"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses pengadaan */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              Prosedur
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Proses Pengadaan
            </h2>
          </div>

          <ol className="relative mt-12 flex flex-col gap-5">
            <span
              aria-hidden="true"
              className="absolute bottom-10 left-[2.15rem] top-10 hidden w-px bg-amber-500/30 sm:block"
            />

            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex items-start gap-5 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <div>
                  <h3 className="font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>
                </div>
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
            Diskusikan kebutuhan proyek Anda bersama tim CV Handa Cahaya Baru.
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

export default Purchasing;
