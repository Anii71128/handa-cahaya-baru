import { useEffect, useState } from "react";
import Hero from "../components/Hero";

const galleryData = [
  {
    id: 1,
    title: "Project Konstruksi",
    category: "Project",
    image: "/images/gallery/project-konstruksi.jpg",
  },
  {
    id: 2,
    title: "Aktivitas Alat Berat",
    category: "Alat Berat",
    image: "/images/gallery/aktivitas-alat-berat.jpg",
  },
  {
    id: 3,
    title: "Pekerjaan Proyek",
    category: "Project",
    image: "/images/gallery/pekerjaan-proyek.jpg",
  },
  {
    id: 4,
    title: "Boomlift",
    category: "ME",
    image: "/images/gallery/boomlift.jpg",
  },
  {
    id: 5,
    title: "Mobil Crane",
    category: "ME",
    image: "/images/gallery/mobil-crane.jpg",
  },
  {
    id: 6,
    title: "Aktivitas Lapangan",
    category: "Aktivitas",
    image: "/images/gallery/aktivitas-lapangan.jpg",
  },
  {
    id: 7,
    title: "Pekerjaan Alat Berat",
    category: "Alat Berat",
    image: "/images/gallery/pekerjaan-alat-berat.jpg",
  },
  {
    id: 8,
    title: "Aktivitas Proyek",
    category: "Aktivitas",
    image: "/images/gallery/aktivitas-proyek.jpg",
  },
];

const categories = ["All", "Project", "Alat Berat", "ME", "Aktivitas"];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredGallery =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const total = filteredGallery.length;
  const selectedImage =
    selectedIndex !== null ? filteredGallery[selectedIndex] : null;

  const handlePrevious = () =>
    setSelectedIndex((i) => (i === null ? i : i === 0 ? total - 1 : i - 1));

  const handleNext = () =>
    setSelectedIndex((i) => (i === null ? i : i === total - 1 ? 0 : i + 1));

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    setSelectedIndex(null);
  }

  // Keyboard (Esc, ←, →) dan kunci scroll saat lightbox terbuka
  const isOpen = selectedIndex !== null;
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft")
        setSelectedIndex((i) => (i === null ? i : i === 0 ? total - 1 : i - 1));
      if (e.key === "ArrowRight")
        setSelectedIndex((i) => (i === null ? i : i === total - 1 ? 0 : i + 1));
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, total]);

  return (
    <main className="overflow-hidden">
      <Hero
        size="full"
        image="/images/gallery-hero.png"
        imageAlt="Gallery CV Handa Cahaya Baru"
        tagline="Gallery"
        title="Dokumentasi Kegiatan & Proyek"
        description="Lihat berbagai dokumentasi proyek, alat berat, Mechanical & Electrical, serta aktivitas CV Handa Cahaya Baru."
      />

      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter kategori */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-amber-500 text-white shadow-sm"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-amber-500 hover:text-amber-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid foto */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-gray-100 transition-shadow duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
                </div>

                <div className="border-t-4 border-amber-500 p-5">
                  <span className="inline-flex rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-600">
                    {item.category}
                  </span>

                  <h2 className="mt-3 text-lg font-bold text-gray-900">
                    {item.title}
                  </h2>
                </div>
              </button>
            ))}
          </div>

          {total === 0 && (
            <div className="mt-12 rounded-2xl border border-dashed border-gray-300 py-16 text-center">
              <p className="text-gray-500">
                Belum ada dokumentasi pada kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Tertarik Bekerja Sama?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
            Diskusikan kebutuhan alat berat dan proyek Anda bersama CV Handa
            Cahaya Baru.
          </p>

          <a
            href="/kontak"
            className="mt-8 inline-flex rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-600"
          >
            Hubungi Kami
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative flex w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-2 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-medium text-gray-900 shadow-lg transition-colors hover:bg-amber-500 hover:text-white"
              aria-label="Tutup"
            >
              ×
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />

            <div className="mt-5 text-center">
              <p className="text-sm font-semibold text-amber-400">
                {selectedImage.category}
              </p>

              <h2 className="mt-1 text-xl font-bold text-white">
                {selectedImage.title}
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                {(selectedIndex ?? 0) + 1} / {total}
              </p>
            </div>

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-gray-900 shadow-lg transition-colors hover:bg-amber-500 hover:text-white"
                  aria-label="Gambar sebelumnya"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-gray-900 shadow-lg transition-colors hover:bg-amber-500 hover:text-white"
                  aria-label="Gambar berikutnya"
                >
                  →
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;
