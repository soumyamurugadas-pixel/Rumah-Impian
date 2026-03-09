import { useState } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { properties } from "./Data/properties.js";

import Herosection from "./Herosection.jsx";
import Cardsection from "./Cardsection.jsx";
import Searchhero from "./Searchhero.jsx";
import RecommendationSection from "./RecommendationSection.jsx";
import Slidersection from "./Slidersection.jsx";
import Consultationsection from "./Consultationsection.jsx";

import Footersection from "./components/Footersection.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import SearchResults from "./components/SearchResults.jsx";

import AuthPop from "./AuthPopup.jsx";
import Property from "./Property.jsx";
import PropertyDetail from "./PropertyDetail.jsx";

function HomePage() {
  const [filteredProperties, setFilteredProperties] = useState(properties);

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
        <Searchhero onSearch={setFilteredProperties} />
      </section>

      <section id="Rekomendasi">
        <RecommendationSection filteredProperties={filteredProperties} />
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
      <Route path="/property" element={<Property />} />
      <Route path="/search-results" element={<SearchResults />} />
    </Routes>
  );
}

export default App;
