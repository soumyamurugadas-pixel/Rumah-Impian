import { useState } from "react";
import {
  FaHome,
  FaMoneyBillWave,
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";

export default function Searchhero() {
  const [activeTab, setActiveTab] = useState("Jual");
  const [searchText, setSearchText] = useState("");

  const [showType, setShowType] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const [selectedType, setSelectedType] = useState("Tipe Rumah");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const tabs = ["Jual", "Sewa", "Property Baru"];

  const tipeOptions = [
    "Rumah Minimalis",
    "Rumah Modern",
    "Rumah Mewah",
    "Apartemen",
    "Villa",
  ];

  const priceOptions = [
    "$60k",
    "$180k",
    "$350k",
    "$500k",
    "$600k",
    "$700k",
    "$900k",
    "$1.00m",
    "$1.20m",
  ];

  const priceLabel =
    minPrice || maxPrice
      ? `${minPrice || "No Min"} - ${maxPrice || "No Max"}`
      : "Range Harga";

  const handleSearch = () => {
    console.log(activeTab, selectedType, minPrice, maxPrice, searchText);
  };

  const handlePriceSelect = (price) => {
    if (!minPrice) {
      setMinPrice(price);
    } else if (!maxPrice) {
      setMaxPrice(price);
    } else {
      setMinPrice(price);
      setMaxPrice("");
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-8 lg:px-12"
      style={{ backgroundImage: "url('/livingroom.jpg')" }}
    >
      <div className="relative z-10 w-full max-w-7xl">
        {/* Heading */}
        <div className="text-center text-white mb-10">
          <h1 className="font-semibold leading-tight text-[clamp(28px,5vw,64px)] mb-4">
            Temukan Rumah Impianmu
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto text-[clamp(14px,2vw,18px)]">
            Sekarang Anda dapat menghemat semua hal stres, waktu, dan biaya
            tersembunyi dengan ratusan rumah pilihan.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center md:justify-start">
          <div className="flex rounded-t-xl overflow-hidden shadow-lg w-full max-w-md">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-sm font-semibold
                ${index !== 0 ? "border-l border-white/60" : ""}
                ${
                  activeTab === tab
                    ? "bg-white text-[#0E7A4F]"
                    : "bg-white/70 text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search Box */}
        <div className="bg-white/90 flex flex-col md:flex-row shadow-xl w-full relative">
          {/* Property Type */}
          <div className="relative md:w-64">
            <div
              onClick={() => {
                setShowType(!showType);
                setShowPrice(false);
              }}
              className="flex items-center justify-between px-5 py-4 text-[#0E7A4F] cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <FaHome />
                <span className="text-[15px] font-medium">{selectedType}</span>
              </div>

              <FaChevronDown
                className={`transition-transform ${
                  showType ? "rotate-180" : ""
                }`}
              />
            </div>

            {showType && (
              <div className="absolute left-0 top-full w-full bg-white shadow-xl rounded-b-lg overflow-hidden z-40">
                {tipeOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setSelectedType(option);
                      setShowType(false);
                    }}
                    className="px-5 py-3 text-[15px] font-medium text-[#0E7A4F] hover:bg-gray-100 hover:pl-6 transition-all duration-200 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price */}
          <div className="relative md:w-64 border-x border-white">
            <div
              onClick={() => {
                setShowPrice(!showPrice);
                setShowType(false);
              }}
              className="flex items-center justify-between px-5 py-4 text-[#0E7A4F] cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <FaMoneyBillWave />
                <span className="text-[15px] font-medium">{priceLabel}</span>
              </div>

              <FaChevronDown
                className={`transition-transform ${
                  showPrice ? "rotate-180" : ""
                }`}
              />
            </div>

            {showPrice && (
              <div className="absolute left-0 top-full w-full bg-white shadow-xl rounded-b-lg p-4 z-40">
                {/* Min Max */}
                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="Min"
                    value={minPrice}
                    readOnly
                    className="border p-2 w-1/2 rounded text-[14px] font-medium text-[#0E7A4F]"
                  />

                  <input
                    type="text"
                    placeholder="Max"
                    value={maxPrice}
                    readOnly
                    className="border p-2 w-1/2 rounded text-[14px] font-medium text-[#0E7A4F]"
                  />
                </div>

                {/* Price List */}
                <div className="max-h-48 overflow-y-auto">
                  {priceOptions.map((price) => (
                    <div
                      key={price}
                      onClick={() => handlePriceSelect(price)}
                      className="px-4 py-2 text-[14px] font-medium text-[#0E7A4F] hover:bg-gray-100 hover:pl-6 transition-all duration-200 cursor-pointer"
                    >
                      {price}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="flex-1 flex items-center px-5 py-4 relative">
            <FaSearch className="absolute left-5 text-[#0E7A4F]/70" />

            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder={`Cari ${activeTab} berdasarkan lokasi, ID, Property`}
              className="w-full pl-8 outline-none text-[15px] rounded-md px-3 py-2 placeholder:text-[#0E7A4F]/70"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleSearch}
            className="bg-[#0E7A4F] text-white px-8 py-4 font-medium text-[15px]"
          >
            Cari
          </button>
        </div>
      </div>
    </section>
  );
}
