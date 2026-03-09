import { useParams, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footersection from "./components/Footersection";

import { properties } from "./Data/properties";

import {
  BedDouble,
  Bath,
  Maximize,
  Phone,
  Mail,
  MapPin,
  User,
} from "lucide-react";

export default function PropertyDetail() {
  const { id } = useParams();

  const property = properties.find((item) => item.id === parseInt(id));

  if (!property)
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h2>Property Not Found</h2>
        </div>
        <Footersection />
      </>
    );

  return (
    <>
      <Navbar />

      <div className="bg-[#E8F1EC] min-h-screen py-10 sm:py-14 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="text-[#147A55] font-medium mb-6 inline-block hover:underline"
          >
            ← Back to Home
          </Link>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={property.image}
              alt="property"
              className="w-full h-65 sm:h-87.5 md:h-112.5 lg:h-130 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mt-10">
            <div className="lg:col-span-2 bg-white p-5 sm:p-8 rounded-xl shadow-md">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#147A55]">
                {property.price}
              </h1>

              <p className="text-gray-500 mt-2 flex items-center gap-2 text-sm sm:text-base">
                <MapPin size={16} />
                {property.location}
              </p>

              <span className="inline-block mt-3 text-xs sm:text-sm font-medium text-white bg-[#147A55] px-4 py-1 rounded-full">
                {property.type}
              </span>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 text-center">
                <div className="bg-[#E8F1EC] p-3 sm:p-4 rounded-lg">
                  <BedDouble className="mx-auto text-[#147A55]" />
                  <p className="font-semibold mt-2">{property.beds}</p>
                  <p className="text-xs text-gray-500">Bedrooms</p>
                </div>

                <div className="bg-[#E8F1EC] p-3 sm:p-4 rounded-lg">
                  <Bath className="mx-auto text-[#147A55]" />
                  <p className="font-semibold mt-2">{property.baths}</p>
                  <p className="text-xs text-gray-500">Bathrooms</p>
                </div>

                <div className="bg-[#E8F1EC] p-3 sm:p-4 rounded-lg">
                  <Maximize className="mx-auto text-[#147A55]" />
                  <p className="font-semibold mt-2">{property.area}</p>
                  <p className="text-xs text-gray-500">Area</p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-lg sm:text-xl font-semibold text-[#147A55] mb-3">
                  Property Description
                </h2>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {property.description}
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-lg sm:text-xl font-semibold text-[#147A55] mb-4">
                  Interior Features
                </h2>

                <ul className="grid sm:grid-cols-2 gap-3 text-gray-600 text-sm">
                  <li>• Modern Kitchen</li>
                  <li>• Air Conditioning</li>
                  <li>• Walk-in Closet</li>
                  <li>• Smart Home System</li>
                  <li>• Wooden Flooring</li>
                  <li>• LED Lighting</li>
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="text-lg sm:text-xl font-semibold text-[#147A55] mb-4">
                  Exterior Features
                </h2>

                <ul className="grid sm:grid-cols-2 gap-3 text-gray-600 text-sm">
                  <li>• Private Garden</li>
                  <li>• Parking Garage</li>
                  <li>• Security System</li>
                  <li>• Swimming Pool</li>
                  <li>• Balcony</li>
                  <li>• Outdoor Lighting</li>
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="text-lg sm:text-xl font-semibold text-[#147A55] mb-4">
                  Property Location
                </h2>

                <iframe
                  title="map"
                  className="w-full h-64 sm:h-80 rounded-lg border"
                  src="https://www.google.com/maps?q=Jakarta&output=embed"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md h-fit">
              <h3 className="text-lg font-semibold text-[#147A55] mb-4">
                Contact Agent
              </h3>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-[#E8F1EC] rounded-full">
                  <User size={26} className="text-[#147A55]" />
                </div>

                <div>
                  <p className="font-semibold">Michael Johnson</p>
                  <p className="text-sm text-gray-500">Property Agent</p>
                </div>
              </div>

              <a href="tel:+60102449030">
                <button className="w-full flex items-center justify-center gap-2 bg-[#147A55] text-white py-3 rounded-lg hover:bg-[#0C6B45] transition">
                  <Phone size={18} />
                  Call Agent
                </button>
              </a>

              <a href="mailto:agent@propertyexample.com">
                <button className="w-full flex items-center justify-center gap-2 border border-[#147A55] text-[#147A55] py-3 rounded-lg mt-3 hover:bg-[#E8F1EC] transition">
                  <Mail size={18} />
                  Send Email
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footersection />
    </>
  );
}
