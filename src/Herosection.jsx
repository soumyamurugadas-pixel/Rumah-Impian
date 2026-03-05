import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Herosection() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <section
      id="beranda"
      className="relative w-full overflow-hidden bg-[#147A55] text-white lg:min-h-screen"
    >
      {/* ===== GRADIENT BACKGROUND ===== */}
      <div className="absolute inset-0 bg-linear-to-r from-[#048853] via-[#027346] to-[#002e22] z-0"></div>

      {/* ===== LEFT DOTS ===== */}
      <img
        src="/Banner1.png"
        alt="left dots"
        className="absolute top-0 left-0 w-40 h-full sm:w-60 md:w-80 lg:w-72 2xl:w-96 z-10 pointer-events-none"
      />

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50">
        {/* NAVBAR BACKGROUND */}
        <div className="absolute inset-0 bg-linear-to-r from-[#048853] via-[#027346] to-[#002e22]"></div>

        {/* DOT IMAGE */}
        <img
          src="/Banner1.png"
          alt="dots"
          className="absolute h-full max-w-425 pointer-events-none"
        />

        <div className="relative max-w-7xl 2xl:max-w-425 mx-auto px-4 sm:px-6 md:px-8 py-6 flex justify-between items-center">
          {/* MOBILE LOGO */}
          <div className="flex items-center gap-2 ml-3 lg:hidden">
            <img
              src="/Logo.svg"
              alt="Rumah Impian Logo"
              className="h-7 w-auto"
            />
            <span className="font-semibold text-[16px] tracking-wide">
              Rumah Impian
            </span>
          </div>

          {/* DESKTOP LOGO */}
          <div className="hidden lg:flex items-center ml-6 gap-3">
            <img
              src="/Logo.svg"
              alt="Rumah Impian Logo"
              className="h-8 md:h-9 w-auto md:ml-20"
            />
            <span className="font-semibold text-[20px] md:text-lg tracking-wide">
              Rumah Impian
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex gap-10 text-[16px] font-normal">
            <a href="#beranda" className="font-semibold cursor-pointer">
              BERANDA
            </a>

            <a
              href="#layanan"
              className="text-white/70 hover:text-white cursor-pointer"
            >
              LAYANAN
            </a>

            <a
              href="#fitur"
              className="text-white/70 hover:text-white cursor-pointer"
            >
              FITUR
            </a>

            <a
              href="#kontak"
              className="text-white/70 hover:text-white cursor-pointer"
            >
              KONTAK
            </a>
          </ul>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex gap-6 text-sm items-center">
            <button onClick={() => setShowRegister(true)}>DAFTAR</button>

            <button
              onClick={() => setShowLogin(true)}
              className="bg-white text-[#147A55] px-6 py-2 font-semibold rounded-md"
            >
              MASUK
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* ===== DESKTOP CONTENT ===== */}
      <div className="hidden lg:flex relative z-20 max-w-7xl 2xl:max-w-425 mx-auto px-4 sm:px-6 md:px-8 items-center min-h-[80vh] pt-32">
        <div className="max-w-4xl text-left mx-0 lg:pl-16 xl:pl-24 2xl:pl-32">
          <h1 className="font-semibold leading-tight text-5xl 2xl:text-6xl">
            Membantu Temukan
            <br /> Rumah Impian.
          </h1>

          <p className="mt-6 text-lg 2xl:text-[17px] text-white/80">
            <span className="font-semibold text-white">Rumah Impian</span> hadir
            untuk temukan rumah terbaik untukmu, untuk di <br />
            jual ataupun di sewa dengan sumber terpercaya.
          </p>

          <a
            href="#cari-rumah"
            className="group mt-8 bg-white text-[#147A55] px-8 py-4 font-semibold flex items-center gap-3 rounded-md w-fit transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Temukan Rumah
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </a>
        </div>
      </div>

      {/* ===== MOBILE CONTENT ===== */}
      <div className="lg:hidden relative z-20 px-4 sm:px-6 pt-32 text-center">
        <h1 className="font-semibold leading-tight text-2xl sm:text-3xl">
          Membantu Temukan
          <br /> Rumah Impian.
        </h1>

        <p className="mt-4 text-sm px-10 sm:text-base text-white/80">
          <span className="font-semibold text-white">Rumah Impian</span> hadir
          untuk temukan rumah terbaik untukmu.
        </p>

        <a
          href="#cari-rumah"
          className="group mt-6 bg-white text-[#147A55] px-4 py-2 font-semibold flex items-center gap-3 rounded-md mx-auto w-fit"
        >
          Temukan Rumah
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </a>

        <img
          src="/m_Banner2.png"
          alt="house"
          className="block w-screen max-w-none mt-6 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
        />
      </div>

      {/* DESKTOP RIGHT IMAGE */}
      <img
        src="/Banner2.png"
        alt="house"
        className="hidden lg:block absolute right-0 bottom-0 lg:h-[95%] 2xl:h-full lg:object-contain z-10"
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white text-[#147A55] z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <span className="font-bold text-xl">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-6 gap-6 text-base font-medium">
          <a href="#beranda" onClick={() => setIsOpen(false)}>
            BERANDA
          </a>

          <a href="#layanan" onClick={() => setIsOpen(false)}>
            LAYANAN
          </a>

          <a href="#fitur" onClick={() => setIsOpen(false)}>
            FITUR
          </a>

          <a href="#kontak" onClick={() => setIsOpen(false)}>
            KONTAK
          </a>

          {/* MOBILE BUTTONS WITH EFFECTS */}
          <div className="mt-6 flex flex-col gap-4">
            <button
              onClick={() => {
                setShowRegister(true);
                setIsOpen(false);
              }}
              className="border border-[#147A55] py-2 rounded-md transition-all duration-300 hover:bg-[#147A55] hover:text-white hover:scale-105 active:scale-95"
            >
              DAFTAR
            </button>

            <button
              onClick={() => {
                setShowLogin(true);
                setIsOpen(false);
              }}
              className="bg-[#147A55] text-white py-2 rounded-md transition-all duration-300 hover:bg-[#0f6b4b] hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              MASUK
            </button>
          </div>
        </div>
      </div>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-xl p-8 relative text-[#147A55] shadow-2xl">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">MASUK</h2>

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded mb-2"
            />

            <div className="text-right mb-4">
              <button className="text-sm hover:underline">
                Forgot Password?
              </button>
            </div>

            <button className="w-full bg-[#147A55] text-white py-3 rounded-md">
              Login
            </button>
          </div>
        </div>
      )}

      {/* REGISTER MODAL */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-xl p-8 relative text-[#147A55] shadow-2xl">
            <button
              onClick={() => setShowRegister(false)}
              className="absolute top-4 right-4"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">DAFTAR</h2>

            <input
              type="text"
              placeholder="Nama"
              className="w-full border p-3 rounded mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded mb-6"
            />

            <button className="w-full bg-[#147A55] text-white py-3 rounded-md">
              Daftar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
