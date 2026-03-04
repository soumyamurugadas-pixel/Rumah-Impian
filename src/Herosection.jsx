import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Herosection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#147A55] text-white">
      {/* ===== GRADIENT BACKGROUND ===== */}
      <div className="absolute inset-0 bg-linear-to-r from-[#048853] via-[#027346] to-[#002e22] z-0"></div>

      {/* ===== LEFT DOTS ===== */}
      <img
        src="/Banner1.png"
        alt="left dots"
        className="absolute top-0 left-0 w-72 md:w-96 opacity-20 z-10 pointer-events-none"
      />

      {/* ================= NAVBAR ================= */}
      <nav className="relative z-30 max-w-7xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/Logo.svg"
            alt="Rumah Impian Logo"
            className="h-8 md:h-9 w-auto"
          />
          <span className="font-semibold text-base md:text-lg tracking-wide">
            Rumah Impian
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-sm font-medium">
          <li className="font-semibold cursor-pointer">BERANDA</li>
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

        <div className="hidden lg:flex gap-6 text-sm items-center">
          <button>DAFTAR</button>
          <button className="bg-white text-[#147A55] px-6 py-2 font-semibold rounded-md">
            MASUK
          </button>
        </div>

        {/* Hamburger */}
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <Menu size={26} />
        </button>
      </nav>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 flex items-center min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
        <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
          <h1 className="font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Membantu Temukan <br /> Rumah Impian.
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-white/80">
            <span className="font-semibold text-white">Rumah Impian</span> hadir
            untuk temukan rumah terbaik untukmu, untuk di jual ataupun di sewa
            dengan sumber terpercaya.
          </p>

          <button className="mt-8 bg-white text-[#147A55] px-8 py-4 font-semibold flex items-center gap-3 rounded-md mx-auto lg:mx-0">
            Temukan Rumah
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <img
        src="/Banner2.png"
        alt="house"
        className="
          absolute
          right-0
          bottom-0
          w-[150%] sm:w-[120%] md:w-full
          h-auto
          object-cover
          lg:w-auto
          lg:h-[95%]
          lg:object-contain
          z-10
        "
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white text-[#147A55] z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <span className="font-bold text-xl">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col px-6 py-6 gap-6 text-base font-medium">
          <a href="#" onClick={() => setIsOpen(false)}>
            BERANDA
          </a>
          <a href="#" onClick={() => setIsOpen(false)}>
            LAYANAN
          </a>
          <a href="#" onClick={() => setIsOpen(false)}>
            FITUR
          </a>
          <a href="#" onClick={() => setIsOpen(false)}>
            KONTAK
          </a>

          <div className="mt-6 flex flex-col gap-4">
            <button className="border border-[#147A55] py-2 rounded-md">
              DAFTAR
            </button>
            <button className="bg-[#147A55] text-white py-2 rounded-md">
              MASUK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
