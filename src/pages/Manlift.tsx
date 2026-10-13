import { Link } from "react-router-dom";
import EquipmentDetail from "../components/EquipmentDetail";

const manliftImage =
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85";

const specifications = [
  {
    label: "Kapasitas",
    value: "Hubungi kami untuk informasi unit",
  },
  {
    label: "Working Height",
    value: "Hubungi kami untuk informasi unit",
  },
  {
    label: "Tipe Unit",
    value: "Manlift",
  },
  {
    label: "Penggunaan",
    value: "Konstruksi & Industri",
  },
];

function Manlift() {
  return (
    <>
      <EquipmentDetail
        name="Manlift"
        heroImage={manliftImage}
        image={manliftImage}
        heroDescription="Peralatan akses kerja di ketinggian untuk mendukung pekerjaan konstruksi, pemeliharaan, dan industri."
        description={[
          "Manlift merupakan peralatan yang membantu pekerja menjangkau area kerja pada ketinggian tertentu, terutama untuk kebutuhan konstruksi, pemeliharaan, dan pekerjaan industri.",
          "Pemilihan jenis manlift perlu disesuaikan dengan tinggi kerja, kondisi lokasi, jangkauan yang diperlukan, serta kebutuhan pekerjaan di lapangan.",
        ]}
        specifications={specifications}
      />

      {/* Artikel pengenalan Manlift */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Mengenal Manlift
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Membantu Pekerjaan pada Area Ketinggian
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Manlift digunakan untuk membantu pekerja mencapai area yang berada
              di atas permukaan tanah. Jenis unit yang dipilih harus sesuai
              dengan kebutuhan akses, ruang kerja, dan kondisi lokasi proyek.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:gap-8">
            <article className="flex-1 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                <span aria-hidden="true">↕</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Fungsi Manlift
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Membantu pekerjaan pada area tinggi, seperti pemasangan
                instalasi, perawatan bangunan, dan pemeriksaan fasilitas.
              </p>
            </article>

            <article className="flex-1 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                <span aria-hidden="true">⌂</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Area Penggunaan
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Dapat digunakan untuk mendukung kebutuhan konstruksi,
                pemeliharaan gedung, fasilitas industri, dan pekerjaan instalasi
                sesuai karakteristik unit.
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
                Tinggi kerja, jangkauan, kapasitas platform, serta kondisi
                permukaan perlu diperhatikan untuk memilih unit yang sesuai.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Pertimbangan keselamatan */}
      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center lg:gap-14">
          <div className="flex-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Keselamatan Kerja
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Utamakan Keselamatan saat Bekerja di Ketinggian
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Pengoperasian manlift harus mengikuti petunjuk penggunaan unit dan
              prosedur keselamatan yang berlaku. Pemeriksaan kondisi alat dan
              area kerja perlu dilakukan sebelum pekerjaan dimulai.
            </p>
          </div>

          <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Hal yang perlu diperhatikan
            </h3>

            <ul className="mt-5 flex flex-col gap-4">
              {[
                "Periksa kondisi alat sebelum digunakan",
                "Pastikan permukaan kerja sesuai dengan jenis unit",
                "Perhatikan batas kapasitas dan tinggi kerja",
                "Ikuti petunjuk pengoperasian dan prosedur keselamatan",
                "Gunakan operator yang kompeten sesuai kebutuhan pekerjaan",
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
              Membutuhkan Manlift untuk Proyek Anda?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-blue-100">
              Hubungi CV Handa Cahaya Baru untuk berkonsultasi mengenai
              kebutuhan akses kerja di ketinggian dan informasi unit.
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

export default Manlift;
