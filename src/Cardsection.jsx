export default function Cardsection() {
  return (
    <section className="bg-[#E6EFE9] py-14 sm:py-16 lg:py-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0E7A4F] mb-3">
            Layanan Kami
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
            Rumah impian hadir menjadi solusi bagi kamu
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* CARD 1 - ALWAYS GRADIENT */}
          <div
            className="rounded-xl p-8 sm:p-10 text-center
            bg-linear-to-br from-[#0E7A4F] to-[#064E32]
            text-white shadow-2xl"
          >
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 rounded-full 
              bg-white flex items-center justify-center"
            >
              <img
                src="/property-icon.png"
                alt="Property Baru"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
              />
            </div>

            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Property Baru
            </h3>

            <p className="text-sm leading-relaxed text-gray-200">
              Rumah impian kini jadi kenyataan, Beli rumah baru dengan fasilitas
              terbaik dengan lingkungan yang nyaman.
            </p>
          </div>

          {/* CARD 2 - HOVER GRADIENT */}
          <div
            className="group bg-white rounded-xl p-8 sm:p-10 text-center
            transition-all duration-700 ease-in-out
            hover:-translate-y-2 hover:shadow-2xl
            hover:bg-linear-to-br hover:from-[#0E7A4F] hover:to-[#064E32]"
          >
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 rounded-full 
              bg-[#0E7A4F] flex items-center justify-center
              transition-all duration-700"
            >
              <img
                src="/rent-icon.png"
                alt="Sewa Rumah"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
              />
            </div>

            <h3
              className="text-base sm:text-lg font-semibold text-[#0E7A4F] mb-4
              transition-all duration-800
              group-hover:text-white"
            >
              Sewa Rumah
            </h3>

            <p
              className="text-sm leading-relaxed text-gray-700
              transition-all duration-700
              group-hover:text-gray-200"
            >
              Sewa rumah yang indah untuk keluarga anda, pilihan terbaik untuk
              tempat tinggal keluarga mu.
            </p>
          </div>

          {/* CARD 3 - HOVER GRADIENT */}
          <div
            className="group bg-white rounded-xl p-8 sm:p-10 text-center
            transition-all duration-700 ease-in-out
            hover:-translate-y-2 hover:shadow-2xl
            hover:bg-linear-to-br hover:from-[#0E7A4F] hover:to-[#064E32]"
          >
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 rounded-full 
              bg-[#0E7A4F] flex items-center justify-center
              transition-all duration-700"
            >
              <img
                src="/buy-icon.png"
                alt="Beli Rumah"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
              />
            </div>

            <h3
              className="text-base sm:text-lg font-semibold text-[#0E7A4F] mb-4
              transition-all duration-700
              group-hover:text-white"
            >
              Beli Rumah
            </h3>

            <p
              className="text-sm leading-relaxed text-gray-700
              transition-all duration-700
              group-hover:text-gray-200"
            >
              Beli Rumah sempurna dengan harga terbaik kualitas terjamin dari
              sumber terpercaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
