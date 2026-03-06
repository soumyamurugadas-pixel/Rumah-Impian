import { useState } from "react";

export default function Register({ closeModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Nama wajib diisi";
    } else if (name.length < 3) {
      newErrors.name = "Nama minimal 3 karakter";
    }

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

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email.trim())) {
      setErrors({ email: "Email sudah terdaftar!" });
      return;
    }

    users.push({
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Pendaftaran berhasil!");

    if (closeModal) closeModal();
  };

  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-bold mb-6">Daftar</h2>

      <form onSubmit={handleRegister} className="space-y-4">
        {/* NAME */}
        <div>
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

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

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-600"
        >
          Daftar
        </button>
      </form>
    </div>
  );
}
