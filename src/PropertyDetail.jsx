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

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h2>Property Not Found</h2>
        </div>
        <Footersection />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-[#E8F1EC] min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="text-[#147A55] font-medium mb-6 inline-block hover:underline"
          >
            ← Back to Home
          </Link>

          <img
            src={property.image}
            alt="property"
            className="w-full h-125 object-cover rounded-xl"
          />

          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md">
              <h1 className="text-3xl font-bold text-[#147A55]">
                {property.price}
              </h1>

              <p className="text-gray-500 mt-2 flex items-center gap-2">
                <MapPin size={16} />
                {property.location}
              </p>

              <span className="inline-block mt-3 text-sm text-white bg-[#147A55] px-4 py-1 rounded-full">
                {property.type}
              </span>

              <div className="grid grid-cols-3 gap-6 mt-8 text-center">
                <div className="bg-[#E8F1EC] p-4 rounded-lg">
                  <BedDouble className="mx-auto text-[#147A55]" />
                  <p className="font-semibold mt-2">{property.beds}</p>
                  <p className="text-xs text-gray-500">Bedrooms</p>
                </div>

                <div className="bg-[#E8F1EC] p-4 rounded-lg">
                  <Bath className="mx-auto text-[#147A55]" />
                  <p className="font-semibold mt-2">{property.baths}</p>
                  <p className="text-xs text-gray-500">Bathrooms</p>
                </div>

                <div className="bg-[#E8F1EC] p-4 rounded-lg">
                  <Maximize className="mx-auto text-[#147A55]" />
                  <p className="font-semibold mt-2">{property.area}</p>
                  <p className="text-xs text-gray-500">Area</p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-semibold text-[#147A55] mb-3">
                  Property Description
                </h2>

                <p className="text-gray-600">{property.description}</p>
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

              <button className="w-full flex items-center justify-center gap-2 bg-[#147A55] text-white py-3 rounded-lg hover:bg-[#0C6B45]">
                <Phone size={18} />
                Call Agent
              </button>

              <button className="w-full flex items-center justify-center gap-2 border border-[#147A55] text-[#147A55] py-3 rounded-lg mt-3 hover:bg-[#E8F1EC]">
                <Mail size={18} />
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footersection />
    </>
  );
}
