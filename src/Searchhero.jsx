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

  const handleSearch = () => {
    console.log("Tab:", activeTab);
    console.log("Search:", searchText);
  };

  const tabs = ["Jual", "Sewa", "Property Baru"];

  return (
    <>
      {/* ================= MOBILE ================= */}
      <section
        className="md:hidden relative min-h-[75vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/livingroom-mobile.jpg')" }}
      >
        {/* Black opacity overlay */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 w-full px-4">
          {/* Heading */}
          <div className="text-center text-white mb-4">
            <h1 className="text-2xl font-semibold mb-2">
              Temukan Rumah Impianmu
            </h1>
            <p className="text-sm text-white/80 mb-4">
              Hemat waktu dan biaya dengan ratusan pilihan rumah terbaik.
            </p>
          </div>

          {/* Tabs wrapper with reduced width */}
          <div className="flex justify-center ">
            <div className="flex rounded-t-xl overflow-hidden shadow-lg w-3/4 max-w-xs">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 text-sm font-semibold
                    ${index !== 0 ? "border-l border-white/60" : ""}
                    ${activeTab === tab ? "bg-white/70 text-[#0E7A4F]" : "bg-white/30 text-[#000b07]"}
                    py-2
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="bg-white/60 flex flex-col rounded-b-xl shadow-lg">
            <div className="flex justify-between items-center px-4 py-3 border-b text-[#0E7A4F] text-sm">
              <div className="flex items-center gap-2">
                <FaHome />
                <span>Tipe Rumah</span>
              </div>
              <FaChevronDown />
            </div>

            <div className="flex justify-between items-center px-4 py-3 border-b text-[#0E7A4F] text-sm">
              <div className="flex items-center gap-2">
                <FaMoneyBillWave />
                <span>Range Harga</span>
              </div>
              <FaChevronDown />
            </div>

            <div className="relative flex items-center border-b">
              <FaSearch className="absolute left-3 text-[#0E7A4F]/70 text-sm" />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={`Cari ${activeTab}`}
                className="w-full pl-10 pr-4 py-3 text-sm outline-none bg-transparent text-[#0E7A4F]"
              />
            </div>

            <button
              onClick={handleSearch}
              className="bg-[#0E7A4F] text-white py-3 text-base font-medium"
            >
              Cari
            </button>
          </div>
        </div>
      </section>

      {/* ================= DESKTOP ================= */}
      <section
        className="hidden md:flex relative min-h-screen bg-cover bg-center items-center"
        style={{ backgroundImage: "url('/livingroom.jpg')" }}
      >
        {/* Black opacity overlay */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14">
          {/* Heading */}
          <div className="text-center text-white mb-6 lg:mb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
              Temukan Rumah Impianmu
            </h1>
            <p className="text-base sm:text-lg lg:text-[18px] text-white/80 max-w-3xl mx-auto mb-10">
              Sekarang Anda dapat menghemat semua hal stres, waktu, dan biaya
              tersembunyi, dengan ratusan rumah untuk anda.
            </p>
          </div>

          {/* Tabs wrapper */}
          <div className="flex justify-start">
            <div className="flex rounded-t-xl overflow-hidden shadow-lg w-1/2 max-w-md">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 text-sm font-semibold
                    ${index !== 0 ? "border-l border-white/60" : ""}
                    ${activeTab === tab ? "bg-white/70 text-[#0E7A4F]" : "bg-white/50 text-[#000a06] hover:bg-white/70"}
                    py-3
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="bg-white/70 flex flex-col sm:flex-row rounded-b-xl shadow-2xl w-full">
            <div className="flex items-center justify-between px-4 sm:px-6 py-5 sm:py-6 border-b sm:border-b-0 sm:border-r border-white/60 text-[#0E7A4F] w-full sm:w-72 cursor-pointer">
              <div className="flex items-center gap-2">
                <FaHome />
                <span>Tipe Rumah</span>
              </div>
              <FaChevronDown />
            </div>

            <div className="flex items-center justify-between px-4 sm:px-6 py-5 sm:py-6 border-b sm:border-b-0 sm:border-r border-white/60 text-[#0E7A4F] w-full sm:w-72 cursor-pointer">
              <div className="flex items-center gap-2">
                <FaMoneyBillWave />
                <span>Range Harga</span>
              </div>
              <FaChevronDown />
            </div>

            <div className="relative flex-1 flex items-center px-4 sm:px-6 py-5 sm:py-6">
              <FaSearch className="absolute left-3 sm:left-6 text-[#0E7A4F]/70" />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={`Cari ${activeTab} berdasarkan lokasi, ID, Property`}
                className="w-full pl-14 pr-4 outline-none bg-transparent text-[#0E7A4F]"
              />
            </div>

            <button
              onClick={handleSearch}
              className="bg-[#0E7A4F] text-white w-full sm:w-auto px-12 py-6 text-lg font-medium"
            >
              Cari
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
