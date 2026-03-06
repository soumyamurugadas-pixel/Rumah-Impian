import { Routes, Route } from "react-router-dom";

import Herosection from "./Herosection.jsx";
import Cardsection from "./Cardsection.jsx";
import Searchhero from "./Searchhero.jsx";
import RecommendationSection from "./RecommendationSection.jsx";
import Slidersection from "./Slidersection.jsx";
import Consultationsection from "./Consultationsection.jsx";
import Footersection from "./components/Footersection.jsx";
import PropertyDetail from "./PropertyDetail";

import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Navbar from "./components/Navbar.jsx";

function HomePage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* BERANDA */}
      <section id="beranda">
        <Herosection />
      </section>

      {/* LAYANAN */}
      <section id="layanan">
        <Cardsection />
      </section>

      {/* CARI RUMAH */}
      <section id="cari-rumah">
        <Searchhero />
      </section>

      {/* REKOMENDASI */}
      <section id="Rekomendasi">
        <RecommendationSection />
      </section>

      {/* FITUR */}
      <section id="fitur">
        <Slidersection />
      </section>

      {/* KONTAK */}
      <section id="kontak">
        <Consultationsection />
        <Footersection />
      </section>
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<HomePage />} />

      {/* Login Page */}
      <Route path="/login" element={<Login />} />

      {/* Register Page */}
      <Route path="/register" element={<Register />} />

      {/* Home Page */}
      <Route path="/" element={<RecommendationSection />} />

      {/* Detail Page */}
      <Route path="/property/:id" element={<PropertyDetail />} />
    </Routes>
  );
}

export default App;
