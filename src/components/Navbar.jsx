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

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Submitted");
    setShowLogin(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Register Submitted");
    setShowRegister(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="absolute inset-0 bg-linear-to-r from-[#048853] via-[#027346] to-[#002e22] pointer-events-none"></div>

        <img
          src="/Banner1.png"
          alt="dots"
          className="absolute inset-0 h-full object-cover pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 flex justify-between items-center">
          {/* MOBILE LOGO */}
          <div
            className="flex items-center gap-2 lg:hidden cursor-pointer"
            onClick={goHome}
          >
            <img src="/Logo.svg" alt="Logo" className="h-7" />
            <span className="font-semibold text-white text-[16px]">
              Rumah Impian
            </span>
          </div>

          {/* DESKTOP LOGO */}
          <div
            className="hidden lg:flex items-center gap-3 cursor-pointer"
            onClick={goHome}
          >
            <img src="/Logo.svg" alt="Logo" className="h-8" />
            <span className="font-semibold text-lg text-white">
              Rumah Impian
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex gap-10 text-[16px]">
            <li
              onClick={() => goToSection("beranda")}
              className="text-white font-semibold cursor-pointer"
            >
              BERANDA
            </li>
            <li
              onClick={() => goToSection("layanan")}
              className="text-white/70 hover:text-white cursor-pointer"
            >
              LAYANAN
            </li>
            <li
              onClick={() => goToSection("fitur")}
              className="text-white/70 hover:text-white cursor-pointer"
            >
              FITUR
            </li>
            <li
              onClick={() => goToSection("kontak")}
              className="text-white/70 hover:text-white cursor-pointer"
            >
              KONTAK
            </li>
          </ul>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex gap-4 items-center">
            <button
              onClick={() => setShowRegister(true)}
              className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#147A55] transition"
            >
              DAFTAR
            </button>

            <button
              onClick={() => setShowLogin(true)}
              className="bg-white text-[#147A55] px-5 py-2 font-semibold rounded-md"
            >
              MASUK
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl flex flex-col">
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={goHome}
              >
                <img src="/Logo.svg" alt="Logo" className="h-7" />
                <span className="font-semibold text-[#147A55]">
                  Rumah Impian
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-[#147A55]"
              >
                <X size={24} />
              </button>
            </div>

            {/* MENU HEADING */}
            <div className="px-6 pt-6 pb-2">
              <h2 className="text-2xl font-bold text-[#147A55] tracking-wide pb-2">
                MENU
              </h2>
            </div>

            {/* NAVIGATION */}
            <ul className="flex flex-col gap-6 px-6 py-6 text-[#147A55] font-semibold">
              <li
                onClick={() => goToSection("beranda")}
                className="cursor-pointer hover:text-[#0e5c40]"
              >
                BERANDA
              </li>

              <li
                onClick={() => goToSection("layanan")}
                className="cursor-pointer hover:text-[#0e5c40]"
              >
                LAYANAN
              </li>

              <li
                onClick={() => goToSection("fitur")}
                className="cursor-pointer hover:text-[#0e5c40]"
              >
                FITUR
              </li>

              <li
                onClick={() => goToSection("kontak")}
                className="cursor-pointer hover:text-[#0e5c40]"
              >
                KONTAK
              </li>
            </ul>

            {/* DIVIDER */}
            <div className="border-t mx-6"></div>

            {/* BUTTONS */}
            <div className="px-6 mt-6 flex flex-col gap-4">
              <button
                onClick={() => {
                  setShowRegister(true);
                  setIsOpen(false);
                }}
                className="border border-[#147A55] text-[#147A55] py-3 rounded-md font-semibold"
              >
                DAFTAR
              </button>

              <button
                onClick={() => {
                  setShowLogin(true);
                  setIsOpen(false);
                }}
                className="bg-[#147A55] text-white py-3 rounded-md font-semibold"
              >
                MASUK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-xl p-8 relative shadow-2xl text-[#147A55]">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">MASUK</h2>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded mb-4"
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border p-3 rounded mb-4"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#147A55] text-white py-3 rounded-md"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* REGISTER MODAL */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-xl p-8 relative shadow-2xl text-[#147A55]">
            <button
              onClick={() => setShowRegister(false)}
              className="absolute top-4 right-4"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">DAFTAR</h2>

            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Nama"
                className="w-full border p-3 rounded mb-4"
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded mb-4"
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border p-3 rounded mb-6"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#147A55] text-white py-3 rounded-md"
              >
                Daftar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
