import { useParams, Link } from "react-router-dom";
import { BedDouble, Bath, Maximize, Phone, Mail, MapPin } from "lucide-react";

const properties = [
  {
    id: 1,
    image: "/house1.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Sewa",
    beds: 3,
    baths: 4,
    area: "360m²",
    description:
      "Beautiful modern house located in a peaceful residential area. Perfect for families looking for comfort and convenience with modern facilities.",
  },
  {
    id: 2,
    image: "/house2.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Jual",
    beds: 3,
    baths: 4,
    area: "360m²",
    description:
      "Luxury property with modern architecture and spacious rooms. Located close to schools, shopping centers, and parks.",
  },
  {
    id: 3,
    image: "/house3.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Property Baru",
    beds: 3,
    baths: 4,
    area: "360m²",
    description:
      "Newly developed property offering stylish living spaces and excellent accessibility to the city center.",
  },
  {
    id: 4,
    image: "/house4.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Sewa",
    beds: 3,
    baths: 4,
    area: "360m²",
    description:
      "Comfortable house with a beautiful garden and modern interior design. Ideal for family living.",
  },
  {
    id: 5,
    image: "/house5.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Sewa",
    beds: 3,
    baths: 4,
    area: "360m²",
    description:
      "Luxury villa with spacious rooms and elegant design. Perfect for relaxing living.",
  },
  {
    id: 6,
    image: "/house6.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Sewa",
    beds: 3,
    baths: 4,
    area: "360m²",
    description:
      "Modern house with premium facilities and a peaceful neighborhood.",
  },
];

export default function PropertyDetail() {
  const { id } = useParams();

  const property = properties.find((item) => item.id === parseInt(id));

  if (!property) return <h2>Property Not Found</h2>;

  return (
    <div className="bg-[#E8F1EC] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="text-[#0E7A4F] font-medium mb-6 inline-block hover:underline"
        >
          ← Back to Home
        </Link>

        {/* Property Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={property.image}
            alt="property"
            className="w-full h-112.5 object-cover"
          />
        </div>

        {/* Property Info */}
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {/* LEFT CONTENT */}
          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold text-[#0E7A4F]">
              {property.price}
            </h1>

            <p className="text-gray-500 mt-2 flex items-center gap-2">
              <MapPin size={16} />
              {property.location}
            </p>

            <span className="inline-block mt-3 text-sm font-medium text-white bg-[#0E7A4F] px-4 py-1 rounded-full">
              {property.type}
            </span>

            {/* Property Features */}
            <div className="grid grid-cols-3 gap-6 mt-8 text-center">
              <div className="bg-[#E8F1EC] p-4 rounded-lg">
                <BedDouble className="mx-auto text-[#0E7A4F]" />
                <p className="font-semibold mt-2">{property.beds}</p>
                <p className="text-sm text-gray-500">Bedrooms</p>
              </div>

              <div className="bg-[#E8F1EC] p-4 rounded-lg">
                <Bath className="mx-auto text-[#0E7A4F]" />
                <p className="font-semibold mt-2">{property.baths}</p>
                <p className="text-sm text-gray-500">Bathrooms</p>
              </div>

              <div className="bg-[#E8F1EC] p-4 rounded-lg">
                <Maximize className="mx-auto text-[#0E7A4F]" />
                <p className="font-semibold mt-2">{property.area}</p>
                <p className="text-sm text-gray-500">Area</p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-[#0E7A4F] mb-3">
                Property Description
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Interior Features */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-[#0E7A4F] mb-4">
                Interior Features
              </h2>

              <ul className="grid grid-cols-2 gap-3 text-gray-600">
                <li>• Modern Kitchen</li>
                <li>• Air Conditioning</li>
                <li>• Walk-in Closet</li>
                <li>• Smart Home System</li>
                <li>• Wooden Flooring</li>
                <li>• LED Lighting</li>
              </ul>
            </div>

            {/* Exterior Features */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-[#0E7A4F] mb-4">
                Exterior Features
              </h2>

              <ul className="grid grid-cols-2 gap-3 text-gray-600">
                <li>• Private Garden</li>
                <li>• Parking Garage</li>
                <li>• Security System</li>
                <li>• Swimming Pool</li>
                <li>• Balcony</li>
                <li>• Outdoor Lighting</li>
              </ul>
            </div>

            {/* Map */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-[#0E7A4F] mb-4">
                Property Location
              </h2>

              <iframe
                title="map"
                className="w-full h-80 rounded-lg border"
                src="https://www.google.com/maps?q=Jakarta&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* AGENT CARD */}
          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h3 className="text-lg font-semibold text-[#0E7A4F] mb-4">
              Contact Agent
            </h3>

            <div className="flex items-center gap-4 mb-6">
              <img
                src="/agent.png"
                alt="agent"
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold">Michael Johnson</p>
                <p className="text-sm text-gray-500">Property Agent</p>
              </div>
            </div>

            {/* CALL BUTTON */}
            <a href="tel:+60102449030">
              <button className="w-full flex items-center justify-center gap-2 bg-[#0E7A4F] text-white py-3 rounded-lg hover:bg-[#0C6B45] transition">
                <Phone size={18} />
                Call Agent
              </button>
            </a>

            {/* EMAIL BUTTON */}
            <a href="mailto:agent@propertyexample.com?subject=Property Inquiry&body=Hello, I am interested in this property. Please send more details.">
              <button className="w-full flex items-center justify-center gap-2 border border-[#0E7A4F] text-[#0E7A4F] py-3 rounded-lg mt-3 hover:bg-[#E8F1EC] transition">
                <Mail size={18} />
                Send Email
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
