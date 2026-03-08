import { useState } from "react";
import PropertyCard from "./components/PropertyCard";
import { properties } from "./Data/properties";

export default function Property() {
  const [type, setType] = useState("");
  const [houseType, setHouseType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    let filtered = properties;

    if (type) {
      filtered = filtered.filter((p) => p.type === type);
    }

    if (houseType) {
      filtered = filtered.filter((p) => p.houseType === houseType);
    }

    if (priceRange) {
      filtered = filtered.filter((p) => p.priceRange === priceRange);
    }

    setResults(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* SEARCH SECTION */}

      <div className="bg-white shadow-lg rounded-xl p-6 grid md:grid-cols-5 gap-4">
        <select
          className="border p-3 rounded-lg"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Kategori</option>
          <option value="Jual">Jual</option>
          <option value="Sewa">Sewa</option>
          <option value="Property Baru">Property Baru</option>
        </select>

        <select
          className="border p-3 rounded-lg"
          onChange={(e) => setHouseType(e.target.value)}
        >
          <option value="">Tipe Rumah</option>
          <option value="Rumah">Rumah</option>
          <option value="Villa">Villa</option>
        </select>

        <select
          className="border p-3 rounded-lg"
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">Range Harga</option>
          <option value="200-300">200 - 300 JT</option>
          <option value="300-400">300 - 400 JT</option>
          <option value="400-500">400 - 500 JT</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-[#147A55] text-white rounded-lg px-6 py-3 font-semibold hover:bg-[#0f5e42]"
        >
          Cari
        </button>
      </div>

      {/* RESULTS */}

      {results.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Hasil Pencarian</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {results.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
