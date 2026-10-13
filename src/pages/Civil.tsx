import Hero from "../components/Hero";

const features = [
  {
    title: "Persiapan Pekerjaan",
    description:
      "Mendukung kebutuhan persiapan area sebelum pekerjaan proyek dimulai.",
  },
  {
    title: "Dukungan Konstruksi",
    description:
      "Membantu kebutuhan pekerjaan konstruksi sesuai kebutuhan proyek.",
  },
  {
    title: "Dukungan Alat Berat",
    description:
      "Mendukung pekerjaan sipil dengan kebutuhan alat berat yang sesuai.",
  },
];

const services = [
  {
    title: "Pekerjaan Konstruksi",
    description:
      "Dukungan pekerjaan konstruksi untuk membantu kebutuhan pembangunan dan pekerjaan proyek.",
    // Tower crane di antara bangunan yang sedang dibangun
    image: "https://unsplash.com/photos/H5n45elIVZQ/download?force=true&w=800",
  },
  {
    title: "Pekerjaan Tanah",
    description:
      "Mendukung pekerjaan persiapan dan pengolahan area tanah sesuai kebutuhan proyek.",
    // Excavator menumpahkan tanah (pekerjaan tanah / earthworks)
    image: "https://unsplash.com/photos/KDTd-1lYHrE/download?force=true&w=800",
  },
  {
    title: "Persiapan Area",
    description:
      "Membantu proses persiapan area sebelum pekerjaan utama proyek dimulai.",
    // Alat berat di atas lahan terbuka
    image: "https://unsplash.com/photos/iQAF4A0To1g/download?force=true&w=800",
  },
];

const steps = [
  {
    title: "Konsultasi",
    description: "Sampaikan kebutuhan dan lingkup pekerjaan sipil Anda.",
  },
  {
    title: "Survei Lokasi",
    description: "Kondisi area proyek ditinjau untuk menentukan kebutuhan.",
  },
  {
    title: "Pelaksanaan",
    description: "Pekerjaan dilakukan dengan dukungan alat berat yang sesuai.",
  },
  {
    title: "Penyelesaian",
    description: "Area dan hasil pekerjaan diperiksa sebelum diserahterimakan.",
  },
];

function Civil() {
  return (
    <main className="overflow-hidden">
      <Hero
        size="full"
        image="/images/civil-hero.png"
        imageAlt="Pekerjaan sipil CV Handa Cahaya Baru"
        tagline="Sipil"
        title="Jasa Sipil untuk Kebutuhan Proyek"
        description="Dukungan pekerjaan sipil untuk membantu kebutuhan berbagai proyek konstruksi dan pembangunan."
        buttons={[{ label: "Konsultasikan Kebutuhan", href: "/kontak" }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                {/* Rangka bangunan baja di dekat tower crane */}
                <img
                  src="https://unsplash.com/photos/nhCPOp4A2Xo/download?force=true&w=1200"
                  alt="Pekerjaan sipil"
                  className="h-80 w-full object-cover sm:h-105"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
                Sipil
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Dukungan Pekerjaan Sipil dari Persiapan hingga Pelaksanaan
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Kami menyediakan dukungan pekerjaan sipil untuk membantu
                kebutuhan berbagai proyek konstruksi dan pembangunan.
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
                Konsultasikan Kebutuhan
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              Layanan Sipil
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Dukungan untuk Berbagai Kebutuhan
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 border-t-4 border-amber-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              Tahapan Pekerjaan
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Alur Kerja yang Jelas
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

      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Membutuhkan Jasa Sipil?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
            Hubungi kami untuk mendiskusikan kebutuhan pekerjaan sipil dan
            proyek Anda.
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

export default Civil;
