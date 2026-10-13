import { Link } from "react-router-dom";
import EquipmentDetail from "../components/EquipmentDetail";

const specifications = [
  { label: "Tipe", value: "Articulating Boomlift" },
  { label: "Kapasitas", value: "Hubungi kami untuk informasi unit" },
  { label: "Working Height", value: "Hubungi kami untuk informasi unit" },
  { label: "Reach", value: "Hubungi kami untuk informasi unit" },
  { label: "Area Penggunaan", value: "Proyek dan konstruksi" },
];

function Boomlift() {
  return (
    <main className="overflow-hidden">
      <EquipmentDetail
        name="Boomlift"
        heroImage="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1920&q=85"
        image="https://unsplash.com/photos/red-articulated-boom-lift-with-basket-and-metal-cage-nYZBLnfgUmQ"
        heroDescription="Solusi akses kerja di ketinggian untuk membantu pekerjaan instalasi, pemeliharaan, dan berbagai kebutuhan proyek."
        description={[
          "Boomlift merupakan peralatan dengan lengan pengangkat dan keranjang kerja untuk menjangkau area tinggi.",
          "Peralatan ini dapat digunakan untuk pekerjaan konstruksi, instalasi, serta pemeliharaan bangunan sesuai kebutuhan proyek.",
        ]}
        specifications={specifications}
      />

      {/* Artikel tentang Boomlift */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-semibold text-amber-600 sm:text-sm">
                Mengenal Boomlift
              </p>

              <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                Fungsi dan Penggunaan Boomlift dalam Proyek
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                Kenali fungsi, manfaat, dan hal-hal yang perlu diperhatikan
                sebelum memilih Boomlift untuk kebutuhan pekerjaan Anda.
              </p>
            </div>

            <article className="mt-10 space-y-8 text-sm leading-7 text-gray-600 sm:mt-12 sm:text-base sm:leading-8">
              <section>
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Apa Itu Boomlift?
                </h3>

                <p className="mt-3">
                  Boomlift adalah alat akses kerja yang memiliki lengan
                  pengangkat dan platform untuk membawa pekerja ke area kerja
                  yang tinggi. Beberapa tipe memiliki lengan yang dapat
                  menjangkau area di atas atau melewati penghalang, sehingga
                  membantu pekerjaan pada lokasi yang sulit dijangkau secara
                  langsung.
                </p>

                <p className="mt-3">
                  Pemilihan tipe Boomlift perlu disesuaikan dengan kondisi
                  lokasi, ketinggian kerja, jangkauan yang diperlukan, serta
                  kebutuhan pekerjaan di lapangan.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Fungsi Boomlift
                </h3>

                <p className="mt-3">
                  Boomlift dapat membantu berbagai pekerjaan yang membutuhkan
                  akses ke area tinggi, antara lain:
                </p>

                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    "Pemasangan dan pemeliharaan instalasi bangunan.",
                    "Pekerjaan perawatan bagian luar gedung.",
                    "Pemasangan lampu dan perlengkapan pada area tinggi.",
                    "Pekerjaan instalasi pada fasilitas industri.",
                    "Pemeriksaan dan pemeliharaan struktur bangunan.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-sm font-bold text-amber-600">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Keunggulan Penggunaan Boomlift
                </h3>

                <p className="mt-3">
                  Dengan pemilihan unit yang sesuai, Boomlift dapat membantu
                  pekerjaan pada ketinggian menjadi lebih terarah. Platform
                  kerja memberikan tempat bagi pekerja untuk melakukan tugas
                  tertentu, sedangkan lengan pengangkat membantu menjangkau
                  posisi kerja yang dibutuhkan.
                </p>

                <p className="mt-3">
                  Penggunaan Boomlift tetap memerlukan operator yang kompeten,
                  pemeriksaan kondisi unit, dan penerapan prosedur keselamatan
                  sesuai petunjuk penggunaan serta kondisi proyek.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Hal yang Perlu Diperhatikan Sebelum Menyewa
                </h3>

                <p className="mt-3">
                  Sebelum menentukan unit, pastikan kebutuhan pekerjaan
                  dijelaskan dengan baik kepada penyedia alat berat. Beberapa
                  hal yang perlu dipertimbangkan meliputi:
                </p>

                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    "Ketinggian kerja yang dibutuhkan.",
                    "Jangkauan horizontal menuju titik pekerjaan.",
                    "Kondisi permukaan dan ruang gerak di lokasi.",
                    "Kapasitas platform sesuai kebutuhan pekerjaan.",
                    "Durasi penyewaan dan ketersediaan unit.",
                    "Kebutuhan operator serta perlengkapan keselamatan.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700/10 text-sm font-bold text-blue-700">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Membutuhkan Boomlift untuk Proyek Anda?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
            Hubungi CV Handa Cahaya Baru untuk berkonsultasi mengenai
            ketersediaan unit dan kebutuhan Boomlift untuk proyek Anda.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/kontak"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
            >
              Hubungi Kami
            </Link>

            <Link
              to="/me"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Lihat Peralatan ME Lainnya
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Boomlift;
