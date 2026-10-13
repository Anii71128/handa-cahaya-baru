import { Link } from "react-router-dom";
import EquipmentDetail from "../components/EquipmentDetail";

const mobilCraneImage =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85";

const specifications = [
  {
    label: "Kapasitas",
    value: "Hubungi kami untuk informasi unit",
  },
  {
    label: "Tinggi Angkat",
    value: "Hubungi kami untuk informasi unit",
  },
  {
    label: "Tipe Unit",
    value: "Mobile Crane",
  },
  {
    label: "Penggunaan",
    value: "Konstruksi & Industri",
  },
];

function MobilCrane() {
  return (
    <>
      <EquipmentDetail
        name="Mobil Crane"
        heroImage={mobilCraneImage}
        image={mobilCraneImage}
        heroDescription="Unit crane bergerak untuk mendukung kebutuhan pengangkatan material pada berbagai proyek konstruksi dan industri."
        description={[
          "Mobil Crane atau mobile crane merupakan alat pengangkat yang dipasang pada kendaraan atau rangka bergerak sehingga dapat dipindahkan sesuai kebutuhan pekerjaan.",
          "Unit ini dapat mendukung pekerjaan pengangkatan material pada proyek konstruksi dan industri. Pemilihan unit perlu disesuaikan dengan berat beban, jangkauan pengangkatan, dan kondisi lokasi.",
        ]}
        specifications={specifications}
      />

      {/* Artikel pengenalan Mobil Crane */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Mengenal Mobil Crane
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Mendukung Pekerjaan Pengangkatan Material
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Mobil crane membantu pekerjaan yang membutuhkan pengangkatan
              material dengan jangkauan tertentu. Dengan pemilihan unit yang
              tepat, alat ini dapat mendukung kebutuhan proyek sesuai kondisi
              lapangan dan spesifikasi teknisnya.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:gap-8">
            <article className="flex-1 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                <span aria-hidden="true">↗</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Fungsi Pengangkatan
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Membantu mengangkat dan memindahkan material atau komponen
                konstruksi sesuai kapasitas unit dan rencana pengangkatan.
              </p>
            </article>

            <article className="flex-1 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                <span aria-hidden="true">↔</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Mobilitas Unit
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Mendukung perpindahan alat antararea kerja. Akses menuju lokasi,
                ruang manuver, dan kondisi permukaan tetap perlu diperhatikan.
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
                Kapasitas angkat, panjang boom, jangkauan, serta kondisi lokasi
                perlu disesuaikan dengan kebutuhan pekerjaan.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Pertimbangan penggunaan */}
      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center lg:gap-14">
          <div className="flex-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Perencanaan Proyek
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Tentukan Unit Sesuai Kebutuhan Lapangan
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Setiap pekerjaan memiliki kebutuhan pengangkatan yang berbeda.
              Informasi tentang beban dan kondisi lokasi membantu proses
              konsultasi untuk menentukan unit yang sesuai.
            </p>
          </div>

          <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Hal yang perlu diperhatikan
            </h3>

            <ul className="mt-5 flex flex-col gap-4">
              {[
                "Berat dan dimensi material yang akan diangkat",
                "Kapasitas angkat pada jangkauan yang dibutuhkan",
                "Kondisi permukaan dan kestabilan area kerja",
                "Akses kendaraan serta ruang untuk manuver",
                "Persyaratan keselamatan selama pengoperasian",
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
              Membutuhkan Mobil Crane?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-blue-100">
              Konsultasikan kebutuhan pengangkatan material proyek Anda kepada
              tim CV Handa Cahaya Baru untuk mendapatkan informasi unit.
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

export default MobilCrane;
