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
      {/* ================= MOBILE SECTION ================= */}
      <section
        className="md:hidden relative min-h-[75vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/livingroom-mobile.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 w-full px-4">
          {/* Heading */}
          <div className="text-center text-white mb-8">
            <h1 className="text-2xl font-semibold mb-3">
              Temukan Rumah Impianmu
            </h1>
            <p className="text-sm text-white/80">
              Hemat waktu dan biaya dengan ratusan pilihan rumah terbaik.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex w-full rounded-t-xl overflow-hidden shadow-lg">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-sm font-semibold
                  ${index !== 0 ? "border-l border-white/70" : ""}
                  ${
                    activeTab === tab
                      ? "bg-white/60 text-[#0E7A4F]"
                      : "bg-white/35 text-black"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="bg-white/60 rounded-b-xl shadow-xl flex flex-col overflow-hidden">
            <div className="flex justify-between items-center px-4 py-4 border-b text-[#0E7A4F] text-sm">
              <div className="flex items-center gap-2">
                <FaHome />
                <span>Tipe Rumah</span>
              </div>
              <FaChevronDown />
            </div>

            <div className="flex justify-between items-center px-4 py-4 border-b text-[#0E7A4F] text-sm">
              <div className="flex items-center gap-2">
                <FaMoneyBillWave />
                <span>Range Harga</span>
              </div>
              <FaChevronDown />
            </div>

            <div className="relative flex items-center border-b">
              <FaSearch className="absolute left-4 text-[#0E7A4F]/70 text-sm" />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={`Cari ${activeTab}`}
                className="w-full pl-10 pr-4 py-4 text-sm outline-none bg-transparent text-[#0E7A4F]"
              />
            </div>

            <button
              onClick={handleSearch}
              className="bg-[#0E7A4F] text-white py-4 text-base font-medium"
            >
              Cari
            </button>
          </div>
        </div>
      </section>

      {/* ================= DESKTOP SECTION ================= */}
      <section
        className="hidden md:flex relative min-h-screen bg-cover bg-center items-center"
        style={{ backgroundImage: "url('/livingroom.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-semibold mb-4">
              Temukan Rumah Impianmu
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Sekarang Anda dapat menghemat semua hal stres, waktu, dan biaya
              tersembunyi, dengan ratusan rumah untuk anda.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex rounded-t-xl overflow-hidden shadow-lg w-fit">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-4 font-semibold
                  ${index !== 0 ? "border-l border-white/70" : ""}
                  ${
                    activeTab === tab
                      ? "bg-white/70 text-[#0E7A4F]"
                      : "bg-white/50 text-black"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="bg-white/70 rounded-b-xl rounded-tr-xl shadow-2xl flex items-stretch overflow-hidden">
            <div className="flex items-center justify-between px-8 py-6 border-r border-white/60 text-[#0E7A4F] w-72 cursor-pointer">
              <div className="flex items-center gap-2">
                <FaHome />
                <span>Tipe Rumah</span>
              </div>
              <FaChevronDown />
            </div>

            <div className="flex items-center justify-between px-8 py-6 border-r border-white/60 text-[#0E7A4F] w-72 cursor-pointer">
              <div className="flex items-center gap-2">
                <FaMoneyBillWave />
                <span>Range Harga</span>
              </div>
              <FaChevronDown />
            </div>

            <div className="relative flex-1 flex items-center">
              <FaSearch className="absolute left-6 text-[#0E7A4F]/70" />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={`Cari ${activeTab} berdasarkan lokasi, ID, Property`}
                className="w-full pl-14 pr-6 py-6 outline-none bg-transparent text-[#0E7A4F]"
              />
            </div>

            <button
              onClick={handleSearch}
              className="bg-[#0E7A4F] text-white px-12 py-6 text-lg font-medium"
            >
              Cari
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
