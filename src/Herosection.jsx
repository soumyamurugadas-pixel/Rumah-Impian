import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Herosection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* ================= DESKTOP (lg and above) ================= */}
      <section className="relative min-h-screen bg-[#0E7A4F] text-white hidden lg:block overflow-hidden">
        {/* LEFT DECOR IMAGE */}
        <img
          src="/Banner1.png"
          alt="pattern"
          className="absolute left-0 top-0 h-full z-40 object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#0E7A4F] via-[#0E7A4F] to-black/80" />

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 w-full z-30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/Logo.svg" alt="Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl">Rumah Impian</span>
            </div>

            <ul className="flex gap-8 text-lg">
              <li className="font-semibold">BERANDA</li>
              <li className="text-white/70 hover:text-white cursor-pointer">
                LAYANAN
              </li>
              <li className="text-white/70 hover:text-white cursor-pointer">
                FITUR
              </li>
              <li className="text-white/70 hover:text-white cursor-pointer">
                KONTAK
              </li>
            </ul>

            <div className="flex items-center gap-5">
              <button className="text-sm hover:text-gray-200">DAFTAR</button>
              <button className="bg-white text-[#0E7A4F] px-4 py-1.5 text-sm font-medium hover:bg-gray-200 transition">
                MASUK
              </button>
            </div>
          </div>
        </nav>

        {/* CONTENT */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="w-1/2">
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Membantu Temukan <br /> Rumah Impian.
              </h1>

              <p className="text-lg text-gray-200 leading-relaxed mb-10">
                Rumah Impian hadir untuk temukan
                <br /> rumah terbaik untukmu.
              </p>

              <button className="bg-white text-[#0E7A4F] px-8 py-4 text-base font-bold hover:bg-gray-200 transition">
                Temukan Rumah
              </button>
            </div>
          </div>

          <img
            src="/tabhero.png"
            alt="House"
            className="absolute right-0 bottom-0 h-[90%] object-contain"
          />
        </div>
      </section>

      {/* ================= TABLET (md to lg) ================= */}
      <section className="relative min-h-screen bg-[#0E7A4F] text-white hidden md:block lg:hidden overflow-hidden">
        {/* LEFT DECOR IMAGE */}
        <img
          src="/banner1.png"
          alt="pattern"
          className="absolute left-0 top-0 h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#0E7A4F] via-[#0E7A4F] to-black/70" />

        {/* FULL NAVBAR ADDED */}
        <nav className="relative z-30 px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/Logo.svg" alt="Logo" className="h-9 w-auto" />
            <span className="font-bold text-lg">Rumah Impian</span>
          </div>

          <ul className="hidden md:flex gap-6 text-sm">
            <li className="font-semibold">BERANDA</li>
            <li className="text-white/70">LAYANAN</li>
            <li className="text-white/70">FITUR</li>
            <li className="text-white/70">KONTAK</li>
          </ul>

          <div className="flex gap-3 text-sm">
            <button>DAFTAR</button>
            <button className="bg-white text-[#0E7A4F] px-3 py-1 rounded">
              MASUK
            </button>
          </div>
        </nav>

        {/* CONTENT */}
        <div className="relative z-20 px-10 pt-24 max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Membantu Temukan <br /> Rumah Impian.
          </h1>

          <p className="text-base text-gray-200 mb-6">
            Rumah Impian hadir untuk temukan
            <br /> rumah terbaik untukmu.
          </p>

          <button className="bg-white text-[#0E7A4F] px-6 py-3 font-semibold rounded-md shadow">
            Temukan Rumah
          </button>
        </div>

        <img
          src="/tabhero.png"
          alt="House"
          className="absolute right-0 bottom-0 h-[85%] object-contain"
        />
      </section>

      {/* ================= MOBILE ONLY ================= */}
      <section className="relative bg-[#0E7A4F] text-white md:hidden min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#0E7A4F]/95 via-[#0E7A4F]/80 to-black/70" />

        {/* NAV */}
        <nav className="relative z-30 px-6 pt-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/Logo.svg" alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg">Rumah Impian</span>
          </div>

          <button onClick={() => setIsOpen(true)}>
            <Menu size={26} />
          </button>
        </nav>

        {/* HAMBURGER UI REDESIGNED */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white text-[#0E7A4F] z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-5 border-b">
            <span className="font-bold text-xl">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col px-6 py-6 space-y-6 font-medium overflow-y-auto">
            <a href="#">BERANDA</a>
            <a href="#">LAYANAN</a>
            <a href="#">FITUR</a>
            <a href="#">KONTAK</a>

            <div className="pt-6 border-t space-y-4">
              <button className="w-full border border-[#0E7A4F] py-2 rounded">
                DAFTAR
              </button>
              <button className="w-full bg-[#0E7A4F] text-white py-2 rounded">
                MASUK
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-20 px-6 pt-16 text-center">
          <h1 className="text-2xl font-bold mb-4">
            Membantu Temukan <br /> Rumah Impian.
          </h1>

          <p className="text-sm text-gray-200 mb-6">
            Rumah Impian hadir untuk temukan
            <br /> rumah terbaik untukmu.
          </p>

          <button className="bg-white text-[#0E7A4F] px-5 py-2 text-sm font-semibold rounded">
            Temukan Rumah
          </button>
        </div>

        <img
          src="/tabhero.png"
          alt="House"
          className="absolute bottom-0 right-0 max-w-sm max-h-[80%] object-contain"
        />
      </section>
    </div>
  );
}
