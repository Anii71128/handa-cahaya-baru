import type { ReactNode } from "react";

type HeroButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroProps = {
  image: string;
  imageAlt?: string;
  tagline?: string;
  title: ReactNode;
  description?: string;
  buttons?: HeroButton[];
  /** "full" = layar penuh (Home), "compact" = lebih pendek (halaman lain) */
  size?: "full" | "compact";
};

const buttonStyles = {
  primary:
    "bg-amber-500 text-white hover:bg-amber-600 focus-visible:outline-amber-400",
  secondary:
    "border border-white/70 text-white hover:bg-white hover:text-gray-900 focus-visible:outline-white",
};

export default function Hero({
  image,
  imageAlt = "",
  tagline,
  title,
  description,
  buttons = [],
  size = "full",
}: HeroProps) {
  const isFull = size === "full";

  const scrollDown = () =>
    window.scrollBy({ top: window.innerHeight - 80, behavior: "smooth" });

  return (
    <section
      className={`relative isolate flex w-full items-center overflow-hidden bg-gray-900 ${
        isFull ? "min-h-screen" : "min-h-[440px] sm:min-h-[520px]"
      }`}
    >
      {/* Background image */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Overlay gelap supaya teks tetap terbaca */}
      <div className="absolute inset-0 -z-10 bg-black/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Konten (pt besar agar tidak tertutup navbar) */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-8">
        <div className="max-w-3xl">
          {tagline && (
            <p className="mb-6 inline-block rounded-full bg-amber-500/15 px-5 py-2 text-sm font-semibold uppercase text-amber-400 backdrop-blur-sm">
              {tagline}
            </p>
          )}

          <h1
            className={`font-extrabold leading-[1.1] tracking-tight text-white ${
              isFull
                ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
              {description}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  className={`rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    buttonStyles[btn.variant ?? "primary"]
                  }`}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Indikator scroll */}
      {isFull && (
        <button
          type="button"
          onClick={scrollDown}
          aria-label="Scroll ke bawah"
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-white/80"
        >
          <span className="text-[11px] tracking-[0.35em]">SCROLL</span>
          <span className="h-12 w-px bg-gradient-to-b from-amber-500 to-white/20 motion-safe:animate-pulse" />
        </button>
      )}
    </section>
  );
}