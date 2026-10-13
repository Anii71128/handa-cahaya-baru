import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const equipment = [
  {
    name: "Boomlift",
    slug: "boomlift",
    description:
      "Alat bantu kerja di ketinggian untuk mendukung berbagai kebutuhan pekerjaan proyek.",
    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Scissorlift",
    slug: "scissorlift",
    description:
      "Alat bantu untuk pekerjaan pada area dengan kebutuhan akses kerja di ketinggian.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Yapcrane",
    slug: "yapcrane",
    description:
      "Peralatan pendukung pengangkatan untuk membantu kebutuhan pekerjaan proyek.",
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "TMC",
    slug: "tmc",
    description:
      "Peralatan pendukung operasional proyek untuk berbagai kebutuhan pekerjaan.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mobil Crane",
    slug: "mobil-crane",
    description:
      "Alat pendukung pengangkatan dan pemindahan material untuk kebutuhan proyek.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Manlift",
    slug: "manlift",
    description:
      "Alat bantu untuk mendukung pekerjaan pada area yang membutuhkan akses ketinggian.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
  },
];

function MechanicalElectrical() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <Hero
        size="full"
        image="/images/rental-hero.png"
        imageAlt="Peralatan Mechanical dan Electrical CV Handa Cahaya Baru"
        tagline="Mechanical & Electrical"
        title="Peralatan ME untuk Kebutuhan Proyek"
        description="Temukan berbagai peralatan ME yang tersedia untuk mendukung kebutuhan pekerjaan dan proyek Anda."
        buttons={[{ label: "Hubungi Kami", href: "/kontak" }]}
      />

      {/* Daftar Peralatan ME */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-block rounded-full bg-blue-700/10 px-4 py-1.5 text-xs font-semibold text-blue-700 sm:text-sm">
              Mechanical & Electrical
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:mt-5 sm:text-3xl lg:text-4xl">
              Pilihan Peralatan ME
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
              Jelajahi berbagai jenis peralatan ME dan temukan unit yang sesuai
              dengan kebutuhan pekerjaan serta proyek Anda.
            </p>
          </div>

          {/* Kartu Peralatan */}
          <div className="mt-8 flex flex-wrap gap-5 sm:mt-10 sm:gap-6">
            {equipment.map((item) => (
              <article
                key={item.slug}
                className="group flex w-full min-w-0 flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[calc(50%-12px)] sm:rounded-2xl xl:w-[calc(33.333%-16px)]"
              >
                <Link
                  to={`/me/${item.slug}`}
                  className="flex flex-1 flex-col focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-blue-700"
                  aria-label={`Lihat detail ${item.name}`}
                >
                  {/* Gambar */}
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 sm:aspect-[5/3]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Konten */}
                  <div className="flex flex-1 flex-col border-t-4 border-yellow-400 p-4 sm:p-5 lg:p-6">
                    <h3 className="text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-700 sm:text-xl">
                      {item.name}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>

                    <div className="mt-5 border-t border-gray-100 pt-4">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors group-hover:text-blue-900">
                        Lihat Detail
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-blue-700 px-5 py-8 text-center sm:mt-16 sm:px-10 sm:py-10 lg:py-12">
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              Membutuhkan Peralatan ME?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
              Hubungi kami untuk mendapatkan informasi mengenai peralatan yang
              sesuai dengan kebutuhan proyek Anda.
            </p>

            <Link
              to="/kontak"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-500 sm:mt-8 sm:w-auto"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MechanicalElectrical;
