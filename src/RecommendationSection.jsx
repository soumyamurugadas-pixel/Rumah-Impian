import { useState } from "react";
import { BedDouble, Bath, Maximize } from "lucide-react";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    image: "/house1.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Sewa",
  },
  {
    id: 2,
    image: "/house2.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Jual",
  },
  {
    id: 3,
    image: "/house3.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Property Baru",
  },
  {
    id: 4,
    image: "/house4.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Sewa",
  },
  {
    id: 5,
    image: "/house5.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Sewa",
  },
  {
    id: 6,
    image: "/house6.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Sewa",
  },
];

export default function RecommendationSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleProperties = showAll ? properties : properties.slice(0, 3);

  return (
    <section className="bg-[#E8F1EC] py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#0E7A4F] text-center mb-10 md:mb-14">
          Rekomendasi Rumah Untuk Mu
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleProperties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <div
                className="group rounded-xl overflow-hidden bg-white shadow-md transition-all duration-500
              hover:bg-linear-to-r hover:from-[#0E7A4F] hover:via-[#0C6B45] hover:to-[#063D2A]"
              >
                <img
                  src={property.image}
                  alt="House"
                  className="w-full h-48 md:h-56 object-cover"
                />

                <div className="p-5 md:p-6">
                  <h3 className="font-semibold text-base md:text-lg text-black group-hover:text-white">
                    {property.price}
                  </h3>

                  <p className="text-sm mt-1 text-gray-600 group-hover:text-gray-200">
                    {property.location}
                  </p>

                  <p className="text-sm mb-4 font-medium text-red-500 group-hover:text-orange-300">
                    {property.type}
                  </p>

                  <div className="h-px mb-5 md:mb-6 bg-gray-300 group-hover:bg-white/40"></div>

                  <div className="grid grid-cols-3 text-center text-black group-hover:text-white">
                    <div className="flex flex-col items-center">
                      <BedDouble size={20} />
                      <span className="mt-1 font-semibold">3</span>
                      <span className="text-xs md:text-sm mt-1">
                        Kamar Tidur
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <Bath size={20} />
                      <span className="mt-1 font-semibold">4</span>
                      <span className="text-xs md:text-sm mt-1">
                        Kamar Mandi
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <Maximize size={20} />
                      <span className="mt-1 font-semibold">360m</span>
                      <span className="text-xs md:text-sm mt-1">
                        Luas Rumah
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="text-[#0E7A4F] font-medium hover:underline"
            >
              Lihat Lainnya..
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
