import { BedDouble, Bath, Maximize } from "lucide-react";

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
  return (
    <>
      {/* ================= DESKTOP ================= */}
      <section className="hidden md:block bg-[#E8F1EC] pt-24 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-[#0E7A4F] text-center mb-12">
            Rekomendasi Rumah Untuk Mu
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="group rounded-xl overflow-hidden bg-white shadow-md transition-all duration-500
                hover:bg-linear-to-r hover:from-[#0E7A4F] hover:via-[#0C6B45] hover:to-[#063D2A]"
              >
                <img
                  src={property.image}
                  alt="House"
                  className="w-full h-56 object-cover"
                />

                <div className="p-6 transition-colors duration-300">
                  <h3 className="font-semibold text-lg text-black group-hover:text-white transition">
                    {property.price}
                  </h3>

                  <p className="text-sm mt-1 text-gray-700 group-hover:text-gray-200 transition">
                    {property.location}
                  </p>

                  <p className="text-sm mb-4 font-medium text-red-500 group-hover:text-orange-300 transition">
                    {property.type}
                  </p>

                  <div className="h-px mb-6 bg-gray-300 group-hover:bg-white/40 transition"></div>

                  {/* ==========ICON SECTION======== */}
                  <div className="grid grid-cols-3 text-center text-black group-hover:text-white transition">
                    <div className="flex flex-col items-center">
                      <BedDouble size={22} />
                      <span className="mt-2 font-semibold">3</span>
                      <span className="text-[15px] mt-1 text-black group-hover:text-gray-200">
                        Kamar Tidur
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <Bath size={22} />
                      <span className="mt-2 font-semibold">4</span>
                      <span className="text-[15px] mt-1 text-black group-hover:text-gray-200">
                        Kamar Mandi
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <Maximize size={22} />
                      <span className="mt-2 font-semibold">360m</span>
                      <span className="text-[15px] mt-1 text-black group-hover:text-gray-200">
                        Luas Rumah
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="text-[#0E7A4F] font-medium hover:underline">
              Lihat Lainnya..
            </button>
          </div>
        </div>
      </section>

      {/* ================= MOBILE ================= */}
      <section className="block md:hidden bg-[#E8F1EC] pt-16 pb-20 px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-[#0E7A4F] text-center mb-8">
            Rekomendasi Rumah
            <br /> Untuk Mu
          </h2>

          <div className="space-y-6">
            {properties.map((property) => (
              <div
                key={property.id}
                className="group rounded-xl overflow-hidden bg-white shadow-md transition-all duration-500
                active:bg-linear-to-r active:from-[#0E7A4F] active:via-[#0C6B45] active:to-[#063D2A]"
              >
                <img
                  src={property.image}
                  alt="House"
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h3 className="font-semibold text-base text-black">
                    {property.price}
                  </h3>

                  <p className="text-sm mt-1 text-gray-600">
                    {property.location}
                  </p>

                  <p className="text-sm mb-4 font-medium text-red-500">
                    {property.type}
                  </p>

                  <div className="h-px mb-5 bg-gray-300"></div>

                  {/* ========ICON SECTION========= */}
                  <div className="grid grid-cols-3 text-center text-sm">
                    <div className="flex flex-col items-center">
                      <BedDouble size={18} />
                      <span className="mt-1 font-semibold">3</span>
                      <span className="text-[13px] mt-1 text-black">
                        Kamar Tidur
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <Bath size={18} />
                      <span className="mt-1 font-semibold">4</span>
                      <span className="text-[13px] mt-1 text-black">
                        Kamar Mandi
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <Maximize size={18} />
                      <span className="mt-1 font-semibold">360m</span>
                      <span className="text-[13px] mt-1 text-black">
                        Luas Rumah
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="text-[#0E7A4F] font-medium hover:underline">
              Lihat Lainnya..
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
