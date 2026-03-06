import { useState, useEffect } from "react";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

export default function AuthPop({ isOpen, onClose, type }) {
  const [authType, setAuthType] = useState(type);

  useEffect(() => {
    setAuthType(type);
  }, [type]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="relative w-full max-w-md bg-white rounded-xl p-8 shadow-lg">
        <button onClick={onClose} className="absolute right-4 top-3 text-xl">
          ✕
        </button>

        {authType === "login" ? (
          <Login switchToRegister={() => setAuthType("register")} />
        ) : (
          <Register switchToLogin={() => setAuthType("login")} />
        )}
      </div>
    </div>
  );
}
