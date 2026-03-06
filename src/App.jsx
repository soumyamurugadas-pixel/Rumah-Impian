import { Routes, Route } from "react-router-dom";

import Herosection from "./Herosection.jsx";
import Cardsection from "./Cardsection.jsx";
import Searchhero from "./Searchhero.jsx";
import RecommendationSection from "./RecommendationSection.jsx";
import Slidersection from "./Slidersection.jsx";
import Consultationsection from "./Consultationsection.jsx";
import Footersection from "./components/Footersection.jsx";
import PropertyDetail from "./PropertyDetail.jsx";

import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import AuthPop from "./AuthPopup.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <AuthPop />

      <section id="beranda">
        <Herosection />
      </section>

      <section id="layanan">
        <Cardsection />
      </section>

      <section id="cari-rumah">
        <Searchhero />
      </section>

      <section id="Rekomendasi">
        <RecommendationSection />
      </section>

      <section id="fitur">
        <Slidersection />
      </section>

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
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/property/:id" element={<PropertyDetail />} />
    </Routes>
  );
}

export default App;
