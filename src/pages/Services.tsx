import { useState } from "react";
import Hero from "../components/Hero";

const features = [
  {
    title: "Perawatan Unit",
    description:
      "Membantu menjaga kondisi dan kesiapan unit untuk kebutuhan operasional.",
  },
  {
    title: "Pemeriksaan Unit",
    description:
      "Pemeriksaan dilakukan untuk membantu mengetahui kondisi unit sebelum digunakan.",
  },
  {
    title: "Dukungan Service",
    description: "Dukungan service untuk kebutuhan alat berat dan proyek.",
  },
];

const serviceTypes = [
  {
    title: "Service Berkala",
    description: "Pengecekan dan perawatan rutin sesuai jadwal pemakaian unit.",
  },
  {
    title: "Perbaikan Mesin",
    description:
      "Penanganan gangguan pada mesin agar unit dapat kembali beroperasi.",
  },
  {
    title: "Sistem Hidrolik",
    description: "Pemeriksaan dan perbaikan komponen hidrolik pada alat berat.",
  },
  {
    title: "Sistem Kelistrikan",
    description: "Pengecekan kelistrikan dan komponen pendukung unit.",
  },
  {
    title: "Undercarriage",
    description:
      "Pemeriksaan bagian kaki-kaki unit agar tetap aman dan siap dipakai.",
  },
  {
    title: "Penggantian Suku Cadang",
    description:
      "Bantuan pengadaan dan penggantian komponen yang dibutuhkan unit.",
  },
];

const steps = [
  {
    title: "Konsultasi",
    description:
      "Sampaikan jenis unit dan kendala yang dialami kepada tim kami.",
  },
  {
    title: "Pemeriksaan",
    description:
      "Unit diperiksa untuk mengetahui kondisi dan kebutuhan perbaikan.",
  },
  {
    title: "Pengerjaan",
    description: "Service dan perawatan dikerjakan sesuai hasil pemeriksaan.",
  },
  {
    title: "Serah Terima",
    description:
      "Unit diperiksa kembali dan diserahkan siap digunakan untuk proyek.",
  },
];

const faqs = [
  {
    question: "Unit apa saja yang dapat diservis?",
    answer:
      "Kami melayani service untuk berbagai jenis alat berat. Hubungi kami dan sebutkan jenis serta kondisi unit Anda agar dapat kami tindak lanjuti.",
  },
  {
    question: "Apakah service bisa dilakukan di lokasi proyek?",
    answer:
      "Ketersediaan service di lokasi bergantung pada jenis pekerjaan dan lokasi proyek. Silakan hubungi kami untuk konfirmasi.",
  },
  {
    question: "Bagaimana cara mengajukan service?",
    answer:
      "Hubungi kami melalui halaman Kontak, lalu tim kami akan menindaklanjuti kebutuhan service Anda.",
  },
];

function Service() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-hidden">
      <Hero
        size="full"
        image="/images/service-hero.png"
        imageAlt="Service alat berat CV Handa Cahaya Baru"
        tagline="Service"
        title="Layanan Service Alat Berat"
        description="Layanan service dan perawatan untuk menjaga kondisi alat berat agar tetap siap digunakan dalam mendukung kebutuhan proyek."
        buttons={[{ label: "Hubungi Kami", href: "/kontak" }]}
      />

      {/* Detail layanan */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                {/* Mekanik sedang mengerjakan mesin di bengkel */}
                <img
                  src="https://unsplash.com/photos/XP8o9_Arwqg/download?force=true&w=1200"
                  alt="Service alat berat"
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
                Service
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Perawatan dan Pemeriksaan untuk Unit yang Siap Kerja
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Kami menyediakan layanan service dan perawatan untuk membantu
                menjaga kondisi alat berat agar tetap siap digunakan dalam
                mendukung kebutuhan proyek.
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
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Jenis layanan service */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              Jenis Layanan
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Cakupan Service Alat Berat
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Berbagai kebutuhan service dan perawatan untuk mendukung
              kelancaran operasional unit di proyek Anda.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-t-4 border-amber-500 bg-white p-7 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900">
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

      {/* Alur service */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              Alur Service
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Proses yang Mudah dan Terarah
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

      {/* FAQ */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              FAQ
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-amber-600 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="m5 7.5 5 5 5-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <p className="px-6 pb-5 leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Butuh Service untuk Alat Berat Anda?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
            Hubungi kami untuk berkonsultasi mengenai kebutuhan service dan
            perawatan unit alat berat Anda.
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

export default Service;
