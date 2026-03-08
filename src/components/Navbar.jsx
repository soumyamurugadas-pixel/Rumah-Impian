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

  /* LOGIN SUBMIT */
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Submitted");
    setShowLogin(false);
  };

  /* REGISTER SUBMIT */
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
          className="absolute inset-0 h-full min-w-auto object-cover pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 flex justify-between items-center">
          {/* MOBILE LOGO */}
          <div
            className="flex items-center gap-2 lg:hidden cursor-pointer"
            onClick={goHome}
          >
            <img src="/Logo.svg" alt="Logo" className="h-7 w-auto" />
            <span className="font-semibold text-[16px] text-white">
              Rumah Impian
            </span>
          </div>

          {/* DESKTOP LOGO */}
          <div
            className="hidden lg:flex items-center gap-3 cursor-pointer"
            onClick={goHome}
          >
            <img src="/Logo.svg" alt="Logo" className="h-8 w-auto" />
            <span className="font-semibold text-lg text-white">
              Rumah Impian
            </span>
          </div>

          {/* MENU */}
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

          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-100">
          <div className="bg-white w-[90%] max-w-md rounded-xl p-8 relative shadow-2xl text-[#147A55]">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">MASUK</h2>

            {/* FIXED FORM */}
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-100">
          <div className="bg-white w-[90%] max-w-md rounded-xl p-8 relative shadow-2xl text-[#147A55]">
            <button
              onClick={() => setShowRegister(false)}
              className="absolute top-4 right-4"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">DAFTAR</h2>

            {/* FIXED FORM */}
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
