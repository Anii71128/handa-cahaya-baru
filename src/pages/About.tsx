import Hero from "../components/Hero";

const highlights = [
  "Unit Berkualitas",
  "Operator Berpengalaman",
  "Harga Kompetitif",
  "Pelayanan Cepat",
  "Bisa mengusulkan untuk bekerja sama",
];

const strengths = [
  {
    title: "Profesional",
    description:
      "Memberikan pelayanan yang profesional dan responsif sesuai kebutuhan pelanggan.",
  },
  {
    title: "Berkualitas",
    description:
      "Mengutamakan kualitas unit dan memastikan alat sesuai dengan kebutuhan pekerjaan.",
  },
  {
    title: "Tepat Waktu",
    description:
      "Mendukung kelancaran pekerjaan dengan proses pelayanan yang terorganisir.",
  },
  {
    title: "Terpercaya",
    description:
      "Membangun hubungan jangka panjang dengan pelanggan melalui pelayanan yang terpercaya.",
  },
];

const missions = [
  "Menyediakan unit alat berat berkualitas.",
  "Memberikan pelayanan profesional dan responsif.",
  "Membangun hubungan jangka panjang dengan pelanggan.",
  "Mendukung kebutuhan proyek secara efektif dan efisien.",
];

const documents = [
  {
    title: "Legalisir",
    description: "Dokumen legalisir perusahaan.",
    href: "/documents/legalisir.pdf",
  },
  {
    title: "PKP HCB",
    description: "Dokumen Pengusaha Kena Pajak CV Handa Cahaya Baru.",
    href: "/documents/PKPHCB.pdf",
  },
  {
    title: "NPWP",
    description: "Dokumen Nomor Pokok Wajib Pajak CV Handa Cahaya Baru.",
    href: "/documents/NPWP.pdf",
  },
];

const stats = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "250+", label: "Unit Disewakan" },
  { value: "100+", label: "Klien" },
];

// Foto alat berat langsung dari Unsplash
const images = {
  hero: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1920&q=85",
  about:
    "https://images.unsplash.com/photo-1652303518335-949c16edc6d9?auto=format&fit=crop&w=1000&q=85",
};

function Badge({
  children,
  dark = false,
}: {
  children: string;
  dark?: boolean;
}) {
  return (
    <p
      className={`inline-block rounded-full px-4 py-1.5 text-sm font-semibold ${
        dark
          ? "bg-amber-500/15 text-amber-400"
          : "bg-amber-500/15 text-amber-600"
      }`}
    >
      {children}
    </p>
  );
}

function About() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <Hero
        size="compact"
        image={images.hero}
        imageAlt="Foto alat berat untuk proyek konstruksi"
        tagline="Tentang Kami"
        title="Mitra Terpercaya dalam Penyewaan dan Penjualan Alat Berat"
        description="CV Handa Cahaya Baru hadir untuk memenuhi kebutuhan alat berat pada berbagai sektor seperti konstruksi, pertambangan, perkebunan, dan industri. Kami mengutamakan kualitas unit, pelayanan profesional, dan kepuasan pelanggan."
        buttons={[{ label: "Hubungi Kami", href: "/kontak" }]}
      />

      {/* Tentang Kami */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={images.about}
                  alt="Alat berat di area konstruksi"
                  loading="lazy"
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <Badge>Tentang Kami</Badge>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Mitra Terpercaya dalam Penyewaan dan Penjualan Alat Berat
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                CV Handa Cahaya Baru hadir untuk memenuhi kebutuhan alat berat
                pada berbagai sektor seperti konstruksi, pertambangan,
                perkebunan, dan industri. Kami mengutamakan kualitas unit,
                pelayanan profesional, dan kepuasan pelanggan.
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="font-medium text-gray-800">{item}</span>
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

      {/* Profil Perusahaan */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge>Profil Perusahaan</Badge>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Partner Andal untuk Kebutuhan Alat Berat
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              CV Handa Cahaya Baru merupakan perusahaan yang bergerak dalam
              bidang penyewaan dan penjualan alat berat untuk mendukung berbagai
              kebutuhan proyek dan industri.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Kami menyediakan berbagai pilihan unit alat berat dengan
              mengutamakan kualitas, pelayanan profesional, serta kebutuhan
              pelanggan sebagai prioritas utama.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => (
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

      {/* Visi & Misi */}
      <section className="bg-gray-900 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge dark>Visi &amp; Misi</Badge>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Menjadi Mitra Pilihan dalam Penyediaan Alat Berat dan Project
              </h2>

              <p className="mt-5 leading-8 text-gray-300">
                Menjadi perusahaan penyedia alat berat yang terpercaya,
                profesional, dan mampu memberikan solusi terbaik bagi kebutuhan
                pelanggan.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold text-white">
                Memberikan Solusi Terbaik
              </h3>

              <ul className="mt-6 flex flex-col gap-4">
                {missions.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">
                      ✓
                    </span>
                    <span className="leading-7 text-gray-200">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legalitas */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge>Legalitas Perusahaan</Badge>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Dokumen Legalitas
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Dokumen legalitas CV Handa Cahaya Baru sebagai bentuk transparansi
              dan informasi perusahaan.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900">{doc.title}</h3>

                <p className="mt-3 flex-1 leading-7 text-gray-600">
                  {doc.description}
                </p>

                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit rounded-full border border-amber-500 px-5 py-2.5 text-sm font-semibold text-amber-600 transition-colors duration-200 hover:bg-amber-500 hover:text-white"
                >
                  Lihat Dokumen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="bg-amber-500 py-14">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 text-center sm:grid-cols-3 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-amber-950">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
