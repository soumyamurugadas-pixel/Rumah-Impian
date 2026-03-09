import { useState } from "react";
import { FaHome, FaMoneyBillWave, FaChevronDown } from "react-icons/fa";
import { properties as allProperties } from "./Data/properties";

export default function SearchHero({ onSearch }) {
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

  // Convert "$60k" → 60,000,000 IDR; "$1.20m" → 1,200,000,000 IDR
  const convertPrice = (price) => {
    if (!price) return 0;
    const strPrice = price.toString().toLowerCase();
    const numericPart = Number(strPrice.replace(/[^0-9.]/g, ""));
    if (strPrice.includes("m")) {
      return numericPart * 1_000_000_000;
    } else {
      return numericPart * 1_000_000;
    }
  };

  const parsePropertyPrice = (price) => Number(price) || 0;

  const handleSearchClick = () => {
    const min = convertPrice(minPrice);
    const max = maxPrice ? convertPrice(maxPrice) : Infinity;

    // ----- KEYWORD PARSING (sequential removal to avoid overlap) -----
    let remainingText = searchText.toLowerCase();
    let bedFilter = null;
    let bathFilter = null;
    let areaFilter = null;

    // Bed count (e.g., "2 beds", "3 bedroom", "4 kamar tidur")
    const bedMatch = remainingText.match(
      /(\d+)\s*(bed|beds|bedroom|bedrooms|kamar tidur)/,
    );
    if (bedMatch) {
      bedFilter = parseInt(bedMatch[1], 10);
      remainingText = remainingText.replace(bedMatch[0], "").trim();
    }

    // Bath count (e.g., "2 baths", "3 bathroom", "4 kamar mandi")
    const bathMatch = remainingText.match(
      /(\d+)\s*(bath|baths|bathroom|bathrooms|kamar mandi)/,
    );
    if (bathMatch) {
      bathFilter = parseInt(bathMatch[1], 10);
      remainingText = remainingText.replace(bathMatch[0], "").trim();
    }

    // Area (e.g., "area 500", "500 m2", "luas 360", "luas rumah 120 m²", "120 sq ft")
    const areaMatch = remainingText.match(
      /(?:luas(?:\s+rumah)?|area)?\s*(\d+)\s*(?:m2|m²|sqm|meter|sq\s?ft|square\s*feet)?/i,
    );
    if (areaMatch && areaMatch[1]) {
      areaFilter = parseInt(areaMatch[1], 10);
      remainingText = remainingText.replace(areaMatch[0], "").trim();
    }

    // Remaining text is used for location search
    const locationText = remainingText;

    // Debug logs – open browser console (F12) to see these
    console.log("🔍 SEARCH PARAMETERS");
    console.log("Active tab:", activeTab);
    console.log("Selected type:", selectedType);
    console.log("Min price ($):", minPrice, "→ IDR:", min);
    console.log("Max price ($):", maxPrice, "→ IDR:", max);
    console.log("Bed filter:", bedFilter);
    console.log("Bath filter:", bathFilter);
    console.log("Area filter:", areaFilter);
    console.log(
      "Location text after keyword removal:",
      locationText || "(none)",
    );
    console.log("Total properties in database:", allProperties.length);

    const results = allProperties.filter((item) => {
      const itemPrice = parsePropertyPrice(item.price);

      // Core filters (always applied)
      const matchTab = item.category === activeTab;
      const matchType =
        selectedType === "Tipe Rumah" || item.type === selectedType;
      const matchPrice = itemPrice >= min && itemPrice <= max;

      // Location filter (if any text remains after keyword removal)
      const matchLocation =
        !locationText || item.location.toLowerCase().includes(locationText);

      // Keyword filters (only if specified)
      const matchBed = bedFilter === null || item.beds === bedFilter;
      const matchBath = bathFilter === null || item.baths === bathFilter;
      const matchArea = areaFilter === null || item.area === areaFilter;

      return (
        matchTab &&
        matchType &&
        matchPrice &&
        matchLocation &&
        matchBed &&
        matchBath &&
        matchArea
      );
    });

    console.log("✅ FILTERED RESULTS:", results);
    onSearch(results);

    // Smooth scroll to recommendation section
    setTimeout(() => {
      const section = document.getElementById("rekomendasi");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const priceLabel =
    minPrice || maxPrice
      ? `${minPrice || "Min"} - ${maxPrice || "Max"}`
      : "Range Harga";

  const handlePriceSelect = (price) => {
    if (!minPrice) setMinPrice(price);
    else if (!maxPrice) {
      setMaxPrice(price);
      setShowPrice(false);
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
        {/* Title */}
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
                className={`flex-1 py-3 text-sm font-semibold ${
                  index !== 0 ? "border-l border-white/60" : ""
                } ${
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
        <div className="bg-white/90 flex flex-col md:flex-row shadow-xl w-full relative ">
          {/* Type Dropdown */}
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
              <FaChevronDown />
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
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Dropdown */}
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
                <span>{priceLabel}</span>
              </div>
              <FaChevronDown />
            </div>
            {showPrice && (
              <div className="absolute left-0 top-full w-full bg-white shadow-xl rounded-b-lg p-4 z-40">
                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    value={minPrice}
                    placeholder="Min"
                    readOnly
                    className="border p-2 w-1/2 rounded"
                  />
                  <input
                    type="text"
                    value={maxPrice}
                    placeholder="Max"
                    readOnly
                    className="border p-2 w-1/2 rounded"
                  />
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {priceOptions.map((price) => (
                    <div
                      key={price}
                      onClick={() => handlePriceSelect(price)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {price}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Location Input */}
          <div className="flex-1 flex items-center px-5 py-4 relative">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder={`Cari ${activeTab} berdasarkan lokasi`}
              className="w-full pl-3 outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearchClick}
            className="bg-[#0E7A4F] text-white px-8 py-4"
          >
            Cari
          </button>
        </div>
      </div>
    </section>
  );
}
