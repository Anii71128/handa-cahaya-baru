import Hero from "./Hero";

export type Specification = { label: string; value: string };

type EquipmentDetailProps = {
  name: string;
  category?: string;
  heroImage: string;
  image: string;
  heroDescription: string;
  description: string[];
  specifications: Specification[];
  ctaTitle?: string;
  ctaText?: string;
};

export default function EquipmentDetail({
  name,
  category = "Mechanical & Electrical",
  heroImage,
  image,
  heroDescription,
  description,
  specifications,
  ctaTitle = `Kebutuhan ${name} untuk Proyek Anda?`,
  ctaText = "Konsultasikan kebutuhan unit dan pekerjaan Anda bersama tim CV Handa Cahaya Baru.",
}: EquipmentDetailProps) {
  return (
    <main className="overflow-hidden">
      <Hero
        size="full"
        image={heroImage}
        imageAlt={name}
        tagline={category}
        title={name}
        description={heroDescription}
        buttons={[{ label: "Hubungi Kami", href: "/kontak" }]}
      />

      {/* Tentang unit */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={image}
                  alt={name}
                  className="h-[340px] w-full object-cover sm:h-[460px]"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
                {category}
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Tentang {name}
              </h2>

              {description.map((text) => (
                <p key={text} className="mt-5 leading-8 text-gray-600">
                  {text}
                </p>
              ))}

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

      {/* Spesifikasi */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              Spesifikasi
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Informasi {name}
            </h2>
          </div>

          <dl className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
            {specifications.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
                  index % 2 === 1 ? "bg-gray-50/70" : ""
                } ${
                  index !== specifications.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <dt className="text-sm font-medium text-gray-500">
                  {spec.label}
                </dt>
                <dd className="text-sm font-semibold text-gray-900 sm:text-right">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {ctaTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
            {ctaText}
          </p>

          <a
            href="/kontak"
            className="mt-8 inline-flex rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-600"
          >
            Konsultasikan Sekarang
          </a>
        </div>
      </section>
    </main>
  );
}