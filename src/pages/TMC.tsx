import { Link } from "react-router-dom";
import EquipmentDetail from "../components/EquipmentDetail";

const tmcImage =
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
    label: "Tipe",
    value: "Truck Mounted Crane",
  },
  {
    label: "Penggunaan",
    value: "Konstruksi & Industri",
  },
];

function TMC() {
  return (
    <>
      <EquipmentDetail
        name="TMC"
        heroImage={tmcImage}
        image={tmcImage}
        heroDescription="Truck Mounted Crane untuk mendukung kebutuhan pengangkatan dan pemindahan material di berbagai lokasi proyek."
        description={[
          "TMC atau Truck Mounted Crane merupakan peralatan yang menggabungkan kendaraan truk dengan sistem crane untuk mendukung kebutuhan pengangkatan dan pemindahan material.",
          "Unit ini dapat membantu berbagai pekerjaan konstruksi, industri, dan operasional yang membutuhkan mobilitas kendaraan serta kemampuan pengangkatan material.",
        ]}
        specifications={specifications}
      />

      {/* Artikel pengenalan TMC */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Mengenal TMC
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Pengangkatan Material dengan Mobilitas Truk
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Truck Mounted Crane dirancang dengan sistem crane yang terpasang
              pada kendaraan truk. Kombinasi ini dapat membantu pekerjaan
              pengangkatan material di lokasi yang membutuhkan mobilitas
              kendaraan, sesuai spesifikasi dan kemampuan unit.
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
                Membantu mengangkat dan memindahkan material untuk kebutuhan
                pekerjaan proyek berdasarkan kapasitas dan jangkauan crane.
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
                Sistem crane yang terpasang pada truk memungkinkan unit
                berpindah lokasi mengikuti kebutuhan pekerjaan, dengan tetap
                memperhatikan akses jalan dan kondisi lapangan.
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
                Pemilihan unit perlu mempertimbangkan berat material, jangkauan
                angkat, ruang untuk kendaraan, dan kondisi lokasi proyek.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Kebutuhan operasional */}
      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center lg:gap-14">
          <div className="flex-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Kebutuhan Proyek
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Rencanakan Penggunaan TMC dengan Tepat
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Sebelum menentukan unit, sampaikan kebutuhan pengangkatan dan
              kondisi lokasi kepada penyedia alat. Informasi tersebut membantu
              proses penentuan unit yang sesuai dengan pekerjaan.
            </p>
          </div>

          <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Hal yang perlu diperhatikan
            </h3>

            <ul className="mt-5 flex flex-col gap-4">
              {[
                "Berat dan jenis material yang akan diangkat",
                "Kapasitas angkat dan jangkauan crane",
                "Akses kendaraan menuju lokasi",
                "Ruang kerja dan kondisi permukaan tanah",
                "Persyaratan keselamatan pengoperasian",
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
              Membutuhkan Truck Mounted Crane?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-blue-100">
              Hubungi CV Handa Cahaya Baru untuk berkonsultasi mengenai
              kebutuhan pengangkatan material dan informasi unit yang tersedia.
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

export default TMC;
