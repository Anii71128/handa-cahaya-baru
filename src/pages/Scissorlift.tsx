import { Link } from "react-router-dom";
import EquipmentDetail from "../components/EquipmentDetail";

const scissorLiftImage =
  "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=85";

const specifications = [
  { label: "Tipe", value: "Scissor Lift" },
  { label: "Kapasitas", value: "Hubungi kami untuk informasi unit" },
  { label: "Working Height", value: "Hubungi kami untuk informasi unit" },
  { label: "Platform Height", value: "Hubungi kami untuk informasi unit" },
  { label: "Area Penggunaan", value: "Proyek & Konstruksi" },
];

function Scissorlift() {
  return (
    <>
      <EquipmentDetail
        name="Scissorlift"
        heroImage={scissorLiftImage}
        image={scissorLiftImage}
        heroDescription="Solusi akses kerja vertikal untuk membantu pekerjaan instalasi, pemeliharaan, dan konstruksi."
        description={[
          "Scissorlift merupakan alat bantu kerja di ketinggian dengan platform yang bergerak naik dan turun menggunakan mekanisme pengangkat berbentuk silang.",
          "Peralatan ini dapat digunakan untuk mendukung pekerjaan instalasi, pemeliharaan bangunan, serta pekerjaan konstruksi yang membutuhkan akses vertikal pada area kerja.",
        ]}
        specifications={specifications}
        ctaTitle="Membutuhkan Scissorlift?"
      />

      {/* Artikel pengenalan Scissorlift */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Mengenal Scissorlift
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Solusi Praktis untuk Pekerjaan di Ketinggian
            </h2>

            <p className="mt-5 leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Scissorlift membantu pekerja menjangkau area kerja yang tinggi
              dengan platform yang dapat dinaikkan dan diturunkan secara
              vertikal. Penggunaannya perlu disesuaikan dengan kondisi lokasi
              serta kebutuhan pekerjaan.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:gap-8">
            <article className="flex-1 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                <span aria-hidden="true">↕</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Fungsi Scissorlift
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Membantu pekerjaan yang membutuhkan akses vertikal, seperti
                pemasangan instalasi, perawatan fasilitas, dan pekerjaan pada
                bagian atas bangunan.
              </p>
            </article>

            <article className="flex-1 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                <span aria-hidden="true">▤</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Keunggulan Penggunaan
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Platform kerja dapat dinaikkan sesuai jangkauan unit. Jenis
                alat yang tepat membantu pekerjaan dilakukan lebih terencana
                sesuai kondisi area proyek.
              </p>
            </article>

            <article className="flex-1 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                <span aria-hidden="true">✓</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Pemilihan Unit
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Pemilihan unit perlu mempertimbangkan tinggi kerja, kapasitas
                platform, kondisi permukaan, serta ruang gerak di lokasi
                pekerjaan.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Area penggunaan */}
      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center lg:gap-14">
          <div className="flex-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Area Penggunaan
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Mendukung Berbagai Kebutuhan Proyek
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Scissorlift dapat dipertimbangkan untuk berbagai pekerjaan yang
              memerlukan akses vertikal. Jenis unit dan kondisi penggunaannya
              perlu disesuaikan dengan kebutuhan proyek.
            </p>
          </div>

          <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <ul className="flex flex-col gap-4">
              {[
                "Pekerjaan instalasi dalam bangunan",
                "Pemeliharaan fasilitas dan bangunan",
                "Pekerjaan konstruksi dan finishing",
                "Pemasangan perlengkapan pada area tinggi",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    ✓
                  </span>
                  <span className="leading-6 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Butuh Scissorlift untuk Proyek Anda?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-blue-100">
              Hubungi tim CV Handa Cahaya Baru untuk berkonsultasi mengenai
              kebutuhan unit dan informasi ketersediaan alat.
            </p>
          </div>

          <Link
            to="/kontak"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </>
  );
}

export default Scissorlift;