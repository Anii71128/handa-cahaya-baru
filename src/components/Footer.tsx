import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Footer Main */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Company Information */}
          <div className="w-full lg:max-w-sm">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                HCB
              </div>

              <div>
                <h2 className="text-base font-bold text-white">
                  CV Handa Cahaya Baru
                </h2>

                <p className="mt-1 text-xs text-gray-400">Company Profile</p>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-gray-400">
              Mitra terpercaya dalam penyewaan dan penjualan alat berat, serta
              penyedia solusi untuk kebutuhan proyek konstruksi, industri, dan
              berbagai sektor lainnya.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-yellow-400" />
              <span className="h-1 w-5 rounded-full bg-blue-600" />
            </div>
          </div>

          {/* Navigation */}
          <div className="w-full sm:w-auto">
            <h3 className="text-base font-bold text-white">Navigasi</h3>

            <ul className="mt-6 flex flex-col gap-4 text-sm text-gray-400">
              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/tentang"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Tentang Kami
                </Link>
              </li>

              <li>
                <Link
                  to="/layanan"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Layanan
                </Link>
              </li>

              <li>
                <Link
                  to="/me"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Mechanical & Electrical
                </Link>
              </li>

              <li>
                <Link
                  to="/purchasing"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Purchasing
                </Link>
              </li>
{/* 
              <li>
                <Link
                  to="/gallery"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Gallery
                </Link>
              </li> */}

              <li>
                <Link
                  to="/kontak"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full sm:w-auto">
            <h3 className="text-base font-bold text-white">Layanan Kami</h3>

            <ul className="mt-6 flex flex-col gap-4 text-sm text-gray-400">
              <li>
                <Link
                  to="/layanan/sewa-alat-berat"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Sewa Alat Berat
                </Link>
              </li>

              <li>
                <Link
                  to="/layanan/project"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Project
                </Link>
              </li>

              <li>
                <Link
                  to="/layanan/sipil"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Jasa Sipil
                </Link>
              </li>

              <li>
                <Link
                  to="/layanan/service"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                  to="/layanan/pengadaan"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Pengadaan
                </Link>
              </li>

              <li>
                <Link
                  to="/me/boomlift"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Boomlift
                </Link>
              </li>

              <li>
                <Link
                  to="/me/mobil-crane"
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  Mobil Crane
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:max-w-xs">
            <h3 className="text-base font-bold text-white">Hubungi Kami</h3>

            <div className="mt-6 flex flex-col gap-5">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-900/60 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5.5A2.5 2.5 0 0 1 5.5 3h2A1.5 1.5 0 0 1 9 4.2l1 3a1.5 1.5 0 0 1-.7 1.7l-1.5 1a14 14 0 0 0 6.3 6.3l1-1.5a1.5 1.5 0 0 1 1.7-.7l3 1a1.5 1.5 0 0 1 1.2 1.5v2a2.5 2.5 0 0 1-2.5 2.5A16.5 16.5 0 0 1 3 5.5Z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Telepon / WhatsApp</p>

                  <a
                    href="https://wa.me/6282143051016"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm text-gray-300 transition-colors hover:text-yellow-400"
                  >
                    +62 821-4305-1016
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-900/60 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3 7 9 6 9-6"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Email</p>

                  <a
                    href="mailto:cvhandacahayabaru@gmail.com"
                    className="mt-1 block break-all text-sm text-gray-300 transition-colors hover:text-yellow-400"
                  >
                    cvhandacahayabaru@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-900/60 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Alamat</p>

                  <p className="mt-1 text-sm leading-6 text-gray-300">
                    Dusun Babatan, Desa/Kelurahan Kalirejo, Kecamatan Sukorejo,
                    Kabupaten Pasuruan, Jawa Timur.
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Kalirejo%2C+Sukorejo%2C+Pasuruan%2C+Jawa+Timur"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex text-sm font-medium text-yellow-400 transition-colors hover:text-yellow-300"
                  >
                    Lihat di Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-center text-gray-400 sm:text-left">
            © {new Date().getFullYear()} CV Handa Cahaya Baru. All rights
            reserved.
          </p>

          <p className="text-center text-gray-500 sm:text-right">
            Professional Solutions for Your Project
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
