const Footersection = () => {
  return (
    <>
      {/* ================= DESKTOP FOOTER ================= */}
      <footer className="hidden md:block bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/Logo.svg"
                alt="Rumah Impian Logo"
                className="h-8 w-auto"
              />
              <span className="font-semibold text-lg">Rumah Impian</span>
            </div>

            {/* Navigation */}
            <ul className="flex gap-8 text-sm">
              <li className="cursor-pointer hover:text-gray-400 transition">
                Beranda
              </li>
              <li className="cursor-pointer hover:text-gray-400 transition">
                Layanan
              </li>
              <li className="cursor-pointer hover:text-gray-400 transition">
                Fitur
              </li>
              <li className="cursor-pointer hover:text-gray-400 transition">
                Kontak
              </li>
              <li className="cursor-pointer hover:text-gray-400 transition">
                Masuk
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-400">
            © 2026 Rumah Impian. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ================= MOBILE FOOTER ================= */}
      <footer className="md:hidden bg-black text-white pt-10 pb-6 px-6">
        {/* Logo Centered */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/Logo.svg"
            alt="Rumah Impian Logo"
            className="h-8 w-auto mb-3"
          />
          <span className="font-semibold text-lg">Rumah Impian</span>
        </div>

        {/* Vertical Navigation */}
        <ul className="flex flex-col items-center gap-4 text-sm mb-8">
          <li className="cursor-pointer hover:text-gray-400 transition">
            Beranda
          </li>
          <li className="cursor-pointer hover:text-gray-400 transition">
            Layanan
          </li>
          <li className="cursor-pointer hover:text-gray-400 transition">
            Fitur
          </li>
          <li className="cursor-pointer hover:text-gray-400 transition">
            Kontak
          </li>
          <li className="cursor-pointer hover:text-gray-400 transition">
            Masuk
          </li>
        </ul>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Bottom Text */}
        <p className="text-center text-xs text-gray-400">
          © 2026 Rumah Impian. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footersection;
