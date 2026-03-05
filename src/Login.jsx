import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E7A4F]/10 px-4 relative">
      {/* CLOSE BUTTON */}
      <Link
        to="/"
        className="absolute top-6 right-6 text-[#0E7A4F] hover:scale-110 transition"
      >
        <X size={28} />
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-[#0E7A4F] mb-2">
          MASUK
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Masuk ke akun Anda
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[#0E7A4F]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[#0E7A4F]"
          />

          <button
            type="submit"
            className="w-full bg-[#0E7A4F] text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Masuk
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-6 text-gray-500">
          Belum punya akun?{" "}
          <Link
            to="/register"
            className="text-[#0E7A4F] font-medium hover:underline"
          >
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}
