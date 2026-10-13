import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Hero from "../components/Hero";

const WHATSAPP_NUMBER = "6282143051016";

const iconClass = "h-6 w-6";

const PhoneIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={iconClass}
    aria-hidden="true"
  >
    <path
      d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={iconClass}
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PinIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={iconClass}
    aria-hidden="true"
  >
    <path
      d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

type ContactItem = {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
  href?: string;
};

const contactData: ContactItem[] = [
  {
    id: 1,
    title: "Telepon",
    value: "+62 82143051016",
    description: "Hubungi kami untuk informasi dan kebutuhan proyek.",
    icon: PhoneIcon,
    href: "tel:+6282143051016",
  },
  {
    id: 2,
    title: "Email",
    value: "cvhandacahayabaru@gmail.com",
    description: "Kirim kebutuhan atau pertanyaan melalui email.",
    icon: MailIcon,
    href: "mailto:cvhandacahayabaru@gmail.com",
  },
  {
    id: 3,
    title: "Alamat",
    value:
      "Dusun Babatan, Desa/Kelurahan Kalirejo, Kec. Sukorejo, Kab. Pasuruan, Jawa Timur",
    description: "Lokasi CV Handa Cahaya Baru.",
    icon: PinIcon,
  },
];

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-100";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return;
    }

    const whatsappMessage = `
Halo CV Handa Cahaya Baru,

Saya ingin menghubungi terkait kebutuhan:

Nama: ${name}
Email: ${email}
Nomor Telepon: ${phone}
Subjek: ${subject}

Pesan:
${message}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <main className="overflow-hidden">
      <Hero
        size="full"
        image="/images/contact-hero.png"
        imageAlt="Kontak CV Handa Cahaya Baru"
        tagline="Kontak"
        title="Mari Diskusikan Kebutuhan Proyek Anda"
        description="Hubungi CV Handa Cahaya Baru untuk mendapatkan informasi lebih lanjut mengenai layanan, alat berat, Mechanical & Electrical, purchasing, maupun kebutuhan proyek Anda."
        buttons={[
          {
            label: "Hubungi via WhatsApp",
            href: `https://wa.me/${WHATSAPP_NUMBER}`,
          },
        ]}
      />

      {/* Informasi kontak & form */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row">
            {/* Informasi kontak */}
            <div className="w-full lg:w-2/5">
              <div className="flex flex-col gap-5">
                {contactData.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border-l-4 border-amber-500 bg-white p-6 shadow-sm ring-1 ring-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                        {item.icon}
                      </div>

                      <div className="min-w-0">
                        <h2 className="font-bold text-gray-900">
                          {item.title}
                        </h2>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-2 block break-words text-sm font-medium leading-6 text-gray-800 transition-colors hover:text-amber-600"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-sm font-medium leading-6 text-gray-800">
                            {item.value}
                          </p>
                        )}

                        <p className="mt-1 text-sm leading-6 text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-600"
              >
                Hubungi via WhatsApp
              </a>
            </div>

            {/* Form kontak */}
            <div className="w-full lg:w-3/5">
              <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100 sm:p-8">
                <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
                  Form Kontak
                </p>

                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                  Kirim Pesan
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Pesan Anda akan dikirim melalui WhatsApp ke tim kami.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="w-full">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Nama
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Nama lengkap"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        className={inputClass}
                      />
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Alamat email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Nomor Telepon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Nomor WhatsApp / telepon"
                      value={phone}
                      onChange={(event) =>
                        setPhone(event.target.value.replace(/\D/g, ""))
                      }
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700"
                    >
                      Subjek
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Contoh: Kebutuhan sewa alat berat"
                      value={subject}
                      onChange={(event) => setSubject(event.target.value)}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tuliskan kebutuhan atau pesan Anda..."
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      required
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-600 sm:w-fit"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <p className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-600">
              Lokasi
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Temukan Kami
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm ring-1 ring-gray-200">
            <iframe
              title="Lokasi CV Handa Cahaya Baru"
              src="https://www.google.com/maps?q=-7.6903304,112.7276078&z=17&output=embed"
              className="h-[380px] w-full border-0 sm:h-[450px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://maps.app.goo.gl/N1E4DnYaodBaydQQA"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-600"
          >
            Buka di Google Maps
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
