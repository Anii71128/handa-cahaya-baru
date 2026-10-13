import Hero from "../components/Hero";

const highlights = [
  "Unit Berkualitas",
  "Operator Berpengalaman",
  "Harga Kompetitif",
  "Pelayanan Cepat",
  "Bisa mengusulkan untuk bekerja sama",
];

function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <Hero
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=85"
        imageAlt="Aktivitas pekerjaan konstruksi dan alat berat di area proyek"
        tagline="Sales, Rent, Project, Purchasing, Service"
        title="Solusi Terbaik untuk Kebutuhan Alat Berat Proyek Anda"
        description="Menyediakan layanan penyewaan dan penjualan alat berat dengan unit berkualitas serta operator profesional."
      />

      {/* Tentang Singkat */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-16">
            {/* Gambar Tentang Kami */}
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-xl sm:rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
                  alt="Aktivitas pekerjaan konstruksi di area proyek"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105 sm:aspect-[5/4] lg:h-[420px] lg:aspect-auto"
                />
              </div>
            </div>

            {/* Konten Tentang Kami */}
            <div className="w-full lg:w-1/2">
              <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-semibold text-amber-600 sm:text-sm">
                Tentang Kami
              </p>

              <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:mt-5 sm:text-3xl lg:text-4xl">
                Mitra Terpercaya dalam Penyewaan dan Penjualan Alat Berat
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
                CV Handa Cahaya Baru hadir untuk memenuhi kebutuhan alat berat
                pada berbagai sektor seperti konstruksi, pertambangan,
                perkebunan, dan industri. Kami mengutamakan kualitas unit,
                pelayanan profesional, dan kepuasan pelanggan.
              </p>

              {/* Keunggulan */}
              <ul className="mt-6 flex flex-col gap-3 sm:mt-7">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                      ✓
                    </span>

                    <span className="text-sm font-medium leading-6 text-gray-800 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/tentang"
                className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-600 sm:mt-9 sm:w-auto sm:py-3.5"
              >
                Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
