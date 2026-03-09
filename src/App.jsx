import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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

import AuthPop from "./AuthPopup.jsx";
import Property from "./Property.jsx";
import PropertyDetail from "./PropertyDetail.jsx";
import HandleSearch from "./Handlesearch.jsx";

function HomePage() {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // ⭐ THIS IS THE HANDLE SEARCH FUNCTION
  const handleSearch = (results) => {
    setFilteredProperties(results);
    setHasSearched(true);
  };

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

      {/* Search Section */}
      <section id="cari-rumah">
        <Searchhero onSearch={handleSearch} />
      </section>

      {/* Recommendation Section */}
      <section id="rekomendasi">
        <RecommendationSection
          filteredProperties={filteredProperties}
          hasSearched={hasSearched}
        />
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
    </Routes>
  );
}

export default App;
