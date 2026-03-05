import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        <img src={property.image} alt="" className="w-full h-56 object-cover" />

        <div className="p-5">
          <h2 className="text-xl font-bold">{property.price}</h2>

          <p className="text-gray-500 text-sm mt-1">{property.address}</p>

          <p className="text-red-500 mt-1">{property.type}</p>

          <hr className="my-4" />

          <div className="flex justify-between text-center">
            <div>
              <p className="font-bold">{property.beds}</p>
              <p className="text-sm">Kamar Tidur</p>
            </div>

            <div>
              <p className="font-bold">{property.baths}</p>
              <p className="text-sm">Kamar Mandi</p>
            </div>

            <div>
              <p className="font-bold">{property.area}</p>
              <p className="text-sm">Luas Rumah</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
