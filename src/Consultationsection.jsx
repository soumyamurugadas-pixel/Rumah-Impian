import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Consultationsection = () => {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email || !question) {
      setError("Semua field harus diisi");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Format email tidak valid");
      return;
    }

    setMessage("Pesan berhasil dikirim ✅");
    setEmail("");
    setQuestion("");
  };

  return (
    <section className="relative w-full min-h-screen flex items-center py-16">
      {/* =========Background========= */}
      <img
        src="/consultation-bg.png"
        alt="Consultation Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ==========Overlay======= */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ========Container======== */}
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/*========= LEFT CONTENT======== */}
        <div className="text-white w-full lg:max-w-md text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold leading-relaxed">
            Butuh Konsultasi..? <br />
            Silahkan kontak kami <br />
            Kami Siap Membantu
          </h2>

          <div className="mt-8 md:mt-10 space-y-8 text-sm md:text-base">
            <div>
              <p className="font-semibold mb-4 text-base md:text-lg">Kontak</p>

              <div className="space-y-4">
                <div className="flex items-start justify-center lg:justify-start gap-3">
                  <FiMapPin className="text-lg mt-1 shrink-0" />
                  <p>Jl. Pelajar Pejuang 123 Majalaya Bandung Indonesia</p>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <FiPhone className="text-lg shrink-0" />
                  <p>022-6545-2041</p>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <FiMail className="text-lg shrink-0" />
                  <p className="break-all">rumahimpian@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-4 text-base md:text-lg">
                Social Media
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="flex gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition">
                    <FaFacebookF />
                  </div>
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition">
                    <FaInstagram />
                  </div>
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition">
                    <FaTwitter />
                  </div>
                </div>

                <p className="text-sm md:text-base">Rumahimpian</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-md md:max-w-lg lg:max-w-md p-6 md:p-8 rounded-xl shadow-2xl"
        >
          <h3 className="text-center text-[#11875D] text-xl md:text-2xl font-semibold mb-6">
            Ada pertanyaan..?
          </h3>

          <input
            type="email"
            placeholder="Masukan email anda disini.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-200 px-4 py-3 mb-4 outline-none rounded-md focus:ring-2 focus:ring-[#11875D]"
          />

          <textarea
            placeholder="Pertanyaan Anda.."
            rows="4"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full bg-gray-200 px-4 py-3 mb-4 outline-none resize-none rounded-md focus:ring-2 focus:ring-[#11875D]"
          />

          {error && (
            <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
          )}

          {message && (
            <p className="text-green-600 text-sm mb-3 text-center">{message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#11875D] text-white py-3 font-medium rounded-md hover:bg-[#0f6f4c] transition duration-300"
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
};

export default Consultationsection;
