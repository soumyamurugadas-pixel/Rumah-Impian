import { useState } from "react";
import { X } from "lucide-react";

export default function AuthPopup({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-100">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-8 relative shadow-2xl animate-fade">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-[#147A55] text-center mb-6">
          {isLogin ? "MASUK" : "DAFTAR"}
        </h2>

        {/* FORM */}
        <div className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="border p-3 rounded-md outline-[#147A55]"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-md outline-[#147A55]"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-md outline-[#147A55]"
          />

          {isLogin && (
            <p className="text-sm text-right text-[#147A55] cursor-pointer hover:underline">
              Forgot Password?
            </p>
          )}

          <button className="bg-[#147A55] text-white py-3 rounded-md hover:scale-105 transition">
            {isLogin ? "Login" : "Register"}
          </button>
        </div>

        {/* SWITCH LOGIN / REGISTER */}
        <p className="text-center text-sm mt-6">
          {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#147A55] font-semibold ml-2 cursor-pointer hover:underline"
          >
            {isLogin ? "Daftar" : "Masuk"}
          </span>
        </p>
      </div>
    </div>
  );
}
