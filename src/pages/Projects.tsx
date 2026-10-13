import Hero from "../components/Hero";

const projects = [
  {
    title: "Project Konstruksi",
    category: "Konstruksi",
    description:
      "Dukungan alat berat dan kebutuhan pekerjaan untuk proyek konstruksi.",
    // Tower crane di lokasi proyek konstruksi
    image: "https://unsplash.com/photos/rpCP0gFdg5M/download?force=true&w=1000",
  },
  {
    title: "Project Pertambangan",
    category: "Pertambangan",
    description:
      "Penyediaan kebutuhan alat berat untuk mendukung aktivitas proyek pertambangan.",
    // Area tambang terbuka (open pit) dengan truk tambang
    image: "https://unsplash.com/photos/4Gf51uY0YQE/download?force=true&w=1000",
  },
  {
    title: "Project Perkebunan",
    category: "Perkebunan",
    description: "Dukungan kebutuhan alat dan pekerjaan untuk area perkebunan.",
    // Truk pengangkut buah kelapa sawit
    image: "https://unsplash.com/photos/2avagx7iMy8/download?force=true&w=1000",
  },
  {
    title: "Project Industri",
    category: "Industri",
    description:
      "Mendukung kebutuhan alat berat untuk berbagai pekerjaan di sektor industri.",
    // Rangka baja bangunan industri di dekat tower crane
    image: "https://unsplash.com/photos/nhCPOp4A2Xo/download?force=true&w=1000",
  },
];

const supports = [
  {
    title: "Penyediaan Alat Berat",
    description:
      "Unit disesuaikan dengan jenis pekerjaan dan karakteristik proyek Anda.",
  },
  {
    title: "Operator Berpengalaman",
    description:
      "Operator yang siap mendukung pekerjaan di lapangan dengan aman.",
  },
  {
    title: "Perencanaan Kebutuhan Unit",
    description:
      "Diskusi kebutuhan unit dan durasi pekerjaan bersama tim kami.",
  },
  {
    title: "Dukungan Service",
    description:
      "Perawatan dan pemeriksaan unit agar tetap siap selama proyek berjalan.",
  },
];

function Projects() {
  return (
    <main className="overflow-hidden">
      <Hero
        size="full"
        image="/images/projects-hero.png"
        imageAlt="Project CV Handa Cahaya Baru"
        tagline="Project"
        title="Project yang Kami Dukung"
        description="Berbagai kebutuhan proyek dapat didukung dengan layanan dan penyediaan alat berat sesuai kebutuhan pekerjaan."
        buttons={[{ label: "Hubungi Kami", href: "/kontak" }]}
      />

      {/* Daftar project */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              Sektor Project
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Mendukung Berbagai Sektor Pekerjaan
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Dari konstruksi hingga industri, kami membantu memenuhi kebutuhan
              alat berat sesuai karakteristik proyek.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col border-t-4 border-amber-500 p-6">
                  <span className="inline-flex w-fit rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-600">
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>

                  <a
                    href="/kontak"
                    className="mt-5 inline-flex w-fit rounded-full border border-amber-500 px-5 py-2 text-sm font-semibold text-amber-600 transition-colors duration-200 hover:bg-amber-500 hover:text-white"
                  >
                    Konsultasikan Project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dukungan project */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              Dukungan Kami
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Yang Kami Siapkan untuk Project Anda
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Kami membantu dari perencanaan kebutuhan unit hingga dukungan
              selama pekerjaan berlangsung.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supports.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-t-4 border-amber-500 bg-gray-50 p-7"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Punya Kebutuhan Project?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
            Diskusikan kebutuhan project dan alat berat yang diperlukan bersama
            tim kami.
          </p>

          <a
            href="/kontak"
            className="mt-8 inline-flex rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-600"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </main>
  );
}

export default Projects;
