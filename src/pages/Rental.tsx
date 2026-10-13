import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const categories = [
  {
    name: "Pembangunan Gedung",
    slug: "pembangunan-gedung",
    description:
      "Pilihan alat berat untuk mendukung pembangunan gedung, perkantoran, gudang, dan bangunan lainnya.",
    equipment: ["Excavator", "Wheel Loader", "Crane"],
    // Tower crane di antara gedung yang sedang dibangun
    image: "https://unsplash.com/photos/H5n45elIVZQ/download?force=true&w=800",
  },
  {
    name: "Pembangunan Jalan",
    slug: "pembangunan-jalan",
    description:
      "Dukungan alat berat untuk pekerjaan pembangunan jalan, perataan permukaan, dan pemadatan tanah.",
    equipment: ["Bulldozer", "Dump Truck", "Compactor"],
    // Dump truck menurunkan material di lokasi proyek
    image: "https://unsplash.com/photos/peVKQQ2w-lg/download?force=true&w=800",
  },
  {
    name: "Pertambangan",
    slug: "pertambangan",
    description:
      "Pilihan alat berat untuk membantu pemindahan material dan mendukung operasional pertambangan.",
    equipment: ["Excavator", "Dump Truck", "Wheel Loader"],
    // Excavator di area tambang terbuka
    image: "https://unsplash.com/photos/1O_HNWeY0O4/download?force=true&w=800",
  },
  {
    name: "Perkebunan dan Pembukaan Lahan",
    slug: "perkebunan",
    description:
      "Dukungan alat berat untuk pembukaan lahan, perataan area, dan persiapan lahan perkebunan.",
    equipment: ["Excavator", "Bulldozer", "Dump Truck"],
    // Excavator menggali tanah (pekerjaan tanah / earthworks)
    image: "https://unsplash.com/photos/OyI1n2iR52c/download?force=true&w=800",
  },
];

function Rental() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <Hero
        size="full"
        image="/images/rental-hero.png"
        imageAlt="Sewa alat berat CV Handa Cahaya Baru"
        tagline="Layanan"
        title="Sewa Alat Berat untuk Kebutuhan Proyek"
        description="Berbagai pilihan alat berat untuk mendukung pekerjaan konstruksi, industri, pertambangan, perkebunan, dan kebutuhan proyek lainnya."
        buttons={[{ label: "Hubungi Kami", href: "/kontak" }]}
      />

      {/* Kategori Sewa Alat Berat */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-semibold text-amber-600 sm:text-sm">
              Kategori Sewa
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:mt-5 sm:text-3xl lg:text-4xl">
              Pilih Kategori Sesuai Kebutuhan Proyek
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
              Setiap proyek memiliki kebutuhan alat berat yang berbeda. Pilih
              kategori pekerjaan di bawah ini untuk melihat pilihan alat berat
              yang dapat mendukung proyek Anda.
            </p>
          </div>

          {/* Kartu Kategori */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.slug}
                className="group flex min-w-0 flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl"
              >
                <Link
                  to={`/layanan/sewa-alat-berat/${category.slug}`}
                  className="flex flex-1 flex-col focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-amber-500"
                  aria-label={`Lihat kategori ${category.name}`}
                >
                  {/* Gambar */}
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 sm:aspect-[5/3]">
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Konten */}
                  <div className="flex flex-1 flex-col border-t-4 border-amber-500 p-4 sm:p-5 lg:p-6">
                    <h3 className="text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-amber-600 sm:text-xl">
                      {category.name}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                      {category.description}
                    </p>

                    {/* Contoh alat berat */}
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Contoh alat berat
                      </p>

                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {category.equipment.map((item) => (
                          <span
                            key={item}
                            className="max-w-full break-words rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link kategori */}
                    <div className="mt-5 border-t border-gray-100 pt-4 sm:mt-6">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600">
                        Lihat Kategori
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Membutuhkan Alat Berat untuk Proyek Anda?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
            Hubungi kami untuk mendapatkan informasi mengenai ketersediaan unit
            dan kebutuhan alat berat untuk proyek Anda.
          </p>

          <Link
            to="/kontak"
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-600 sm:mt-8 sm:w-auto sm:px-7 sm:py-3.5"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Rental;
