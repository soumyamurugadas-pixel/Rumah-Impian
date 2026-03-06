import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footersection = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Desktop Footer */}
        <div className="hidden md:grid grid-cols-12 gap-10">
          {/* LEFT - LOGO (40%) */}
          <div className="col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img src="/Logo.svg" alt="Rumah Impian Logo" className="h-8" />
              <span className="font-semibold text-lg">Rumah Impian</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Platform properti terpercaya untuk membantu
              <br /> Anda menemukan rumah impian dengan <br /> mudah dan cepat.
            </p>
          </div>

          {/* CENTER - MENU (20%) */}
          <div className="col-span-2">
            <h3 className="font-semibold mb-4">Menu</h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#beranda" className="hover:text-white">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-white">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white">
                  Kontak
                </a>
              </li>
              <li>
                <Link to="/login" className="hover:text-white">
                  Masuk
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT - CONTACT (40%) */}
          <div className="col-span-5">
            <h3 className="font-semibold mb-4">Kontak</h3>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex gap-3 items-center">
                <MapPin size={18} />
                <span>Jl. Pelajar Pejuang 123 Majalaya Bandung Indonesia</span>
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={18} />
                <span>022-6545-2041</span>
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={18} />
                <span>rumahimpian@gmail.com</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-5">
              <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                <FaFacebookF size={14} />
              </div>

              <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                <FaInstagram size={14} />
              </div>

              <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                <FaTwitter size={14} />
              </div>

              <span className="text-sm text-gray-400 ml-2">Rumahimpian</span>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden text-center space-y-8">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <img src="/Logo.svg" alt="Logo" className="h-8 mb-2" />
            <span className="font-semibold text-lg">Rumah Impian</span>
          </div>

          {/* Menu */}
          <ul className="flex flex-col gap-3 text-sm text-gray-300 items-center">
            <li>
              <a href="#beranda">Beranda</a>
            </li>
            <li>
              <a href="#layanan">Layanan</a>
            </li>
            <li>
              <a href="#fitur">Fitur</a>
            </li>
            <li>
              <a href="#kontak">Kontak</a>
            </li>
            <li>
              <Link to="/login">Masuk</Link>
            </li>
          </ul>

          {/* Contact with Icons */}
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex gap-2 justify-center items-center">
              <MapPin size={18} />
              <span>Majalaya Bandung Indonesia</span>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <Phone size={18} />
              <span>022-6545-2041</span>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <Mail size={18} />
              <span>rumahimpian@gmail.com</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-4 mt-2">
            <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
              <FaFacebookF size={14} />
            </div>
            <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
              <FaInstagram size={14} />
            </div>
            <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
              <FaTwitter size={14} />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-400">
          © 2026 Rumah Impian. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footersection;
