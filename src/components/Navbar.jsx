import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const goHome = () => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("beranda")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="absolute inset-0 bg-linear-to-r from-[#048853] via-[#027346] to-[#002e22]"></div>
        <img
          src="/Banner1.png"
          alt="dots"
          className="absolute h-full w-full object-cover pointer-events-none"
        />
        <div className="relative max-w-7xl 2xl:max-w-425 mx-auto px-4 sm:px-6 md:px-8 py-6 flex justify-between items-center">
          {/* MOBILE LOGO */}
          <div
            className="flex items-center gap-2 ml-3 lg:hidden cursor-pointer"
            onClick={goHome}
          >
            <img
              src="/Logo.svg"
              alt="Rumah Impian Logo"
              className="h-7 w-auto"
            />
            <span className="font-semibold text-[16px] tracking-wide text-white">
              Rumah Impian
            </span>
          </div>

          {/* DESKTOP LOGO */}
          <div
            className="hidden lg:flex items-center ml-6 gap-3 cursor-pointer"
            onClick={goHome}
          >
            <img
              src="/Logo.svg"
              alt="Rumah Impian Logo"
              className="h-8 md:h-9 w-auto md:ml-20"
            />
            <span className="font-semibold text-[20px] md:text-lg tracking-wide text-white">
              Rumah Impian
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex gap-10 text-[16px] font-normal">
            <a
              onClick={() => goToSection("beranda")}
              className="font-semibold text-white cursor-pointer"
            >
              BERANDA
            </a>
            <a
              onClick={() => goToSection("layanan")}
              className="text-white/70 hover:text-white cursor-pointer"
            >
              LAYANAN
            </a>
            <a
              onClick={() => goToSection("fitur")}
              className="text-white/70 hover:text-white cursor-pointer"
            >
              FITUR
            </a>
            <a
              onClick={() => goToSection("kontak")}
              className="text-white/70 hover:text-white cursor-pointer"
            >
              KONTAK
            </a>
          </ul>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex gap-6 text-sm items-center">
            <button
              onClick={() => setShowRegister(true)}
              className="text-white border border-white hover:bg-white hover:text-[#147A55] transition-all duration-300 px-4 py-2 rounded-md"
            >
              DAFTAR
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-white text-[#147A55] px-6 py-2 font-semibold rounded-md"
            >
              MASUK
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={26} className="text-white" />
          </button>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
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
          <a onClick={() => goToSection("beranda")}>BERANDA</a>
          <a onClick={() => goToSection("layanan")}>LAYANAN</a>
          <a onClick={() => goToSection("fitur")}>FITUR</a>
          <a onClick={() => goToSection("kontak")}>KONTAK</a>

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

      {/* LOGIN & REGISTER MODALS */}
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
    </>
  );
}
