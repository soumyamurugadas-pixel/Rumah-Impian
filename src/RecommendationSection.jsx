import { useState, useEffect } from "react";
import { BedDouble, Bath, Maximize } from "lucide-react";
import { Link } from "react-router-dom";
import { properties } from "./Data/properties";

export default function RecommendationSection({
  filteredProperties,
  hasSearched,
}) {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setShowAll(false);
  }, [filteredProperties]);

  const displayProperties = hasSearched ? filteredProperties : properties;
  const visibleProperties = showAll
    ? displayProperties
    : displayProperties.slice(0, 3);

  const formatPrice = (price) => `IDR.${price.toLocaleString("id-ID")}`;

  return (
    <section id="rekomendasi" className="bg-[#E8F1EC] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-[#0E7A4F] mb-10">
          Rekomendasi Rumah Untuk Mu
        </h2>

        {hasSearched && filteredProperties.length === 0 && (
          <p className="text-center text-gray-500 mb-10">
            Properti tidak ditemukan.
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {visibleProperties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <div className="group bg-white rounded-xl overflow-hidden shadow hover:bg-linear-to-r hover:from-[#048853] hover:via-[#027346] hover:to-[#002e22] transition-all duration-500">
                <img
                  src={property.image}
                  className="w-full h-52 object-cover"
                  alt={property.type}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x300?text=No+Image";
                  }}
                />

                <div className="p-5">
                  <h3 className="font-semibold text-lg group-hover:text-white">
                    {formatPrice(property.price)}
                  </h3>

                  <p className="text-gray-600 group-hover:text-white">
                    {property.location}
                  </p>

                  <p className="text-red-500 text-sm mb-4 group-hover:text-orange-500">
                    {property.type}
                  </p>

                  <div className="grid grid-cols-3 text-center">
                    <div className="flex flex-col items-center group-hover:text-white">
                      <BedDouble size={18} />
                      <span className="font-medium">{property.beds}</span>
                      <span className="text-xs">Kamar Tidur</span>
                    </div>

                    <div className="flex flex-col items-center group-hover:text-white">
                      <Bath size={18} />
                      <span className="font-medium">{property.baths}</span>
                      <span className="text-xs">Kamar Mandi</span>
                    </div>

                    <div className="flex flex-col items-center group-hover:text-white">
                      <Maximize size={18} />
                      <span className="font-medium">{property.area} m²</span>
                      <span className="text-xs">Luas Rumah</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && displayProperties.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="text-green-700 font-semibold"
            >
              Lihat Lainnya..
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
