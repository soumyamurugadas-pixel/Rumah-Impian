import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ================= DESKTOP SLIDES ================= */
const desktopSlides = [
  {
    id: 1,
    image: "/slide1.png",
    title: "Ruang Tamu",
    desc: "Rumah minimalis modern",
    price: "IDR.250jt",
  },
  {
    id: 2,
    image: "/slide2.png",
    title: "Kamar Tidur",
    desc: "Rumah minimalis Type-36",
    price: "IDR.200jt",
  },
  {
    id: 3,
    image: "/slide3.png",
    title: "Dapur",
    desc: "Interior elegan & bersih",
    price: "IDR.180jt",
  },
  {
    id: 4,
    image: "/slide4.png",
    title: "Kamar Mandi",
    desc: "Design modern minimalis",
    price: "IDR.150jt",
  },
  {
    id: 5,
    image: "/slide1.png",
    title: "Taman Rumah",
    desc: "Area hijau nyaman",
    price: "IDR.120jt",
  },
  {
    id: 6,
    image: "/slide2.png",
    title: "Garasi",
    desc: "Garasi luas & aman",
    price: "IDR.170jt",
  },
  {
    id: 7,
    image: "/slide3.png",
    title: "Ruang Makan",
    desc: "Konsep open space",
    price: "IDR.210jt",
  },
  {
    id: 8,
    image: "/slide4.png",
    title: "Balkon",
    desc: "View nyaman & santai",
    price: "IDR.190jt",
  },
];

/* ================= MOBILE SLIDES ================= */
const mobileSlides = [
  {
    id: 1,
    image: "/slide1-mobile.png",
    title: "Ruang Tamu",
    desc: "Rumah minimalis modern",
    price: "IDR.250jt",
  },
  {
    id: 2,
    image: "/slide2-mobile.png",
    title: "Kamar Tidur",
    desc: "Rumah minimalis Type-36",
    price: "IDR.200jt",
  },
  {
    id: 3,
    image: "/slide3-mobile.png",
    title: "Dapur",
    desc: "Interior elegan & bersih",
    price: "IDR.180jt",
  },
  {
    id: 4,
    image: "/slide4-mobile.png",
    title: "Kamar Mandi",
    desc: "Design modern minimalis",
    price: "IDR.150jt",
  },
];

const Slidersection = () => {
  const [desktopCurrent, setDesktopCurrent] = useState(0);
  const [mobileCurrent, setMobileCurrent] = useState(0);

  /* Desktop Controls */
  const nextDesktop = () => {
    if (desktopCurrent < desktopSlides.length - 4) {
      setDesktopCurrent(desktopCurrent + 1);
    }
  };

  const prevDesktop = () => {
    if (desktopCurrent > 0) {
      setDesktopCurrent(desktopCurrent - 1);
    }
  };

  /* Mobile Controls */
  const nextMobile = () => {
    if (mobileCurrent < mobileSlides.length - 1) {
      setMobileCurrent(mobileCurrent + 1);
    }
  };

  const prevMobile = () => {
    if (mobileCurrent > 0) {
      setMobileCurrent(mobileCurrent - 1);
    }
  };

  return (
    <div id="fitur" className="scroll-mt-28">
      {/* ================= DESKTOP SECTION ================= */}
      <section className="hidden md:block bg-[#E8F1EC] pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-5xl font-semibold text-[#11875D]">
              Fitur Rumah
            </h2>

            <a href="#fitur">
              <button className="bg-[#11875D] text-white px-5 py-2 text-sm font-medium hover:bg-[#0f6f4c] transition rounded">
                Lihat Semua.. →
              </button>
            </a>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={prevDesktop}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#11875D] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${desktopCurrent * 25}%)`,
                }}
              >
                {desktopSlides.map((slide) => (
                  <div
                    key={slide.id}
                    className="relative group min-w-[25%] h-80"
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    <div className="absolute inset-0 bg-black/60 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center px-4">
                      <h3 className="text-lg font-semibold">{slide.title}</h3>

                      <p className="text-sm mt-1">{slide.desc}</p>

                      <p className="mt-2 font-semibold">{slide.price}</p>

                      <a href="#fitur">
                        <button className="mt-4 bg-[#11875D] px-4 py-2 text-sm rounded hover:bg-[#0f6f4c] transition">
                          Lihat Rumah
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextDesktop}
              className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#11875D] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= MOBILE SECTION ================= */}
      <section className="md:hidden bg-[#E8F1EC] pb-20 px-4">
        <h2 className="text-3xl font-semibold text-[#11875D] mb-6 text-center">
          Fitur Rumah
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevMobile}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#11875D] text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md z-10"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${mobileCurrent * 100}%)`,
              }}
            >
              {mobileSlides.map((slide) => (
                <div key={slide.id} className="relative min-w-full h-64">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-lg"
                  />

                  <div className="absolute inset-0 bg-black/50 rounded-lg flex flex-col justify-center items-center text-white text-center px-4">
                    <h3 className="text-lg font-semibold">{slide.title}</h3>

                    <p className="text-sm mt-1">{slide.desc}</p>

                    <p className="mt-2 font-semibold">{slide.price}</p>

                    <a href="#fitur">
                      <button className="mt-4 bg-[#11875D] px-4 py-2 text-sm rounded hover:bg-[#0f6f4c] transition">
                        Lihat Rumah
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextMobile}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#11875D] text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md z-10"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Slidersection;
