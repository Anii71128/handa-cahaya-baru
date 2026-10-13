import { Link } from "react-router-dom";
import EquipmentDetail from "../components/EquipmentDetail";

const yapcraneImage =
  "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=85";

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
    label: "Jangkauan",
    value: "Hubungi kami untuk informasi unit",
  },
  {
    label: "Penggunaan",
    value: "Konstruksi & Industri",
  },
];

function Yapcrane() {
  return (
    <>
      <EquipmentDetail
        name="Yapcrane"
        heroImage={yapcraneImage}
        image={yapcraneImage}
        heroDescription="Solusi peralatan pengangkatan untuk mendukung kebutuhan pekerjaan proyek dan operasional industri."
        description={[
          "Yapcrane merupakan salah satu peralatan yang dapat digunakan untuk mendukung kebutuhan pekerjaan proyek dan aktivitas pengangkatan material.",
          "Penggunaan unit perlu disesuaikan dengan jenis pekerjaan, berat material, jangkauan pengangkatan, serta kondisi area proyek.",
        ]}
        specifications={specifications}
      />

      {/* Artikel pengenalan Yapcrane */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Mengenal Yapcrane
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Mendukung Kebutuhan Pengangkatan Material
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Pekerjaan konstruksi dan industri sering membutuhkan peralatan
              untuk membantu memindahkan atau mengangkat material. Pemilihan
              crane yang tepat membantu pekerjaan direncanakan sesuai kebutuhan
              dan kondisi lokasi proyek.
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
                Membantu pekerjaan pemindahan atau pengangkatan material
                berdasarkan kemampuan unit dan kebutuhan operasional di
                lapangan.
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
                Dapat dipertimbangkan untuk kebutuhan proyek konstruksi dan
                industri yang memerlukan bantuan peralatan pengangkatan
                material.
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
                Kapasitas angkat, jangkauan, kondisi permukaan, dan ruang
                manuver perlu diperiksa sebelum menentukan unit yang akan
                digunakan.
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
              Sesuaikan Peralatan dengan Kebutuhan Lapangan
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Setiap pekerjaan memiliki kebutuhan pengangkatan yang berbeda.
              Karena itu, informasi material, posisi pengangkatan, dan kondisi
              lokasi perlu disampaikan saat berkonsultasi mengenai unit.
            </p>
          </div>

          <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Hal yang perlu diperhatikan
            </h3>

            <ul className="mt-5 flex flex-col gap-4">
              {[
                "Berat dan dimensi material yang diangkat",
                "Kapasitas angkat serta jangkauan unit",
                "Kondisi permukaan dan akses lokasi",
                "Kebutuhan ruang kerja dan keselamatan",
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
              Butuh Informasi Unit Yapcrane?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-blue-100">
              Konsultasikan kebutuhan proyek Anda kepada tim CV Handa Cahaya
              Baru untuk memperoleh informasi unit yang sesuai.
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

export default Yapcrane;
