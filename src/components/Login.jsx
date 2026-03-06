import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!password) {
      newErrors.password = "Password wajib diisi";
    } else if (password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email.trim() && u.password === password.trim(),
    );

    if (user) {
      alert(`Login berhasil! Selamat datang, ${user.name}`);
      localStorage.setItem("currentUser", JSON.stringify(user));

      if (closeModal) closeModal();

      navigate("/");
    } else {
      setErrors({ general: "Email atau password salah!" });
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-bold mb-6">Masuk</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        {/* EMAIL */}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* GENERAL ERROR */}
        {errors.general && (
          <p className="text-red-500 text-center text-sm">{errors.general}</p>
        )}

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-600"
        >
          Masuk
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        Belum punya akun?{" "}
        <Link to="/register" className="text-green-700 underline">
          Daftar
        </Link>
      </p>
    </div>
  );
}
