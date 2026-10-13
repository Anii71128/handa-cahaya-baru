import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

type NavChild = { label: string; to: string };
type NavItem = {
  label: string;
  to?: string;
  children?: NavChild[];
  viewAll?: NavChild;
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Tentang Kami", to: "/tentang" },
  {
    label: "Layanan",
    children: [
      { label: "Sewa Alat Berat", to: "/layanan/sewa-alat-berat" },
      { label: "Project", to: "/layanan/project" },
      { label: "Sipil", to: "/layanan/sipil" },
      { label: "Service", to: "/layanan/service" },
      { label: "Pengadaan", to: "/layanan/pengadaan" },
    ],
  },
  {
    label: "ME",
    children: [
      { label: "Boomlift", to: "/me/boomlift" },
      { label: "Scissorlift", to: "/me/scissorlift" },
      { label: "Yapcrane", to: "/me/yapcrane" },
      { label: "TMC", to: "/me/tmc" },
      { label: "Mobil Crane", to: "/me/mobil-crane" },
      { label: "Manlift", to: "/me/manlift" },
    ],
    viewAll: { label: "Lihat Semua ME", to: "/me" },
  },
  { label: "Purchasing", to: "/purchasing" },
  // { label: "Gallery", to: "/gallery" },
  { label: "Kontak", to: "/kontak" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `font-medium transition-colors duration-200 ${
    isActive ? "text-amber-400" : "text-white hover:text-amber-400"
  }`;

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`h-4 w-4 ${className}`}
      aria-hidden="true"
    >
      <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setOpen(false);
    setOpenSub(null);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-gray-900/95 shadow-lg backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="Logo CV Handa Cahaya Baru"
            className="h-11 w-11 object-contain"
          />
          <div>
            <p className="text-base font-bold leading-tight text-white">
              CV Handa Cahaya Baru
            </p>
            <p className="text-xs text-gray-300">Company Profile</p>
          </div>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-8 text-[15px] xl:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 font-medium text-white transition-colors duration-200 group-hover:text-amber-400 group-focus-within:text-amber-400"
                >
                  {item.label}
                  <Chevron className="transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-xl border border-white/10 bg-gray-900/95 p-2 shadow-xl backdrop-blur">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block rounded-lg px-4 py-3 text-sm text-gray-100 transition-colors duration-200 hover:bg-white/10 hover:text-amber-400"
                      >
                        {child.label}
                      </Link>
                    ))}

                    {item.viewAll && (
                      <>
                        <div className="my-1 border-t border-white/10" />
                        <Link
                          to={item.viewAll.to}
                          className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-amber-400 transition-colors duration-200 hover:bg-white/10"
                        >
                          {item.viewAll.label}
                          <span>→</span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to!}
                end={item.to === "/"}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            )
          )}

          <Link
            to="/kontak"
            className="rounded-full bg-amber-500 px-8 py-3.5 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-amber-600"
          >
            Hubungi Kami
          </Link>
        </nav>

        {/* Tombol menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white xl:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-7 w-7"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 px-6 pb-6 pt-2 xl:hidden">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenSub((v) => (v === item.label ? null : item.label))
                  }
                  aria-expanded={openSub === item.label}
                  className="flex w-full items-center justify-between py-3 font-medium text-white"
                >
                  {item.label}
                  <Chevron
                    className={`transition-transform duration-200 ${
                      openSub === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openSub === item.label && (
                  <div className="mb-2 ml-3 flex flex-col border-l border-white/15 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={closeMenu}
                        className="py-2.5 text-sm text-gray-200 hover:text-amber-400"
                      >
                        {child.label}
                      </Link>
                    ))}

                    {item.viewAll && (
                      <Link
                        to={item.viewAll.to}
                        onClick={closeMenu}
                        className="py-2.5 text-sm font-medium text-amber-400"
                      >
                        {item.viewAll.label} →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to!}
                end={item.to === "/"}
                onClick={closeMenu}
                className={(state) => `block py-3 ${linkClass(state)}`}
              >
                {item.label}
              </NavLink>
            )
          )}

          <Link
            to="/kontak"
            onClick={closeMenu}
            className="mt-4 block rounded-full bg-amber-500 px-6 py-3.5 text-center font-semibold text-white hover:bg-amber-600"
          >
            Hubungi Kami
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;