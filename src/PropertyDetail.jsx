import { useParams } from "react-router-dom";

const properties = [
  {
    id: 1,
    image: "/house1.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Sewa",
  },
  {
    id: 2,
    image: "/house2.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Jual",
  },
  {
    id: 3,
    image: "/house3.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Property Baru",
  },
  {
    id: 4,
    image: "/house4.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Sewa",
  },
  {
    id: 5,
    image: "/house5.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Sewa",
  },
  {
    id: 6,
    image: "/house6.png",
    price: "IDR.200.000.000",
    location: "JL. Soekarno Hatta No.1",
    type: "Sewa",
  },
];

export default function PropertyDetail() {
  const { id } = useParams();

  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <h2>Property not found</h2>;

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <img
        src={property.image}
        className="w-full h-112.5 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">{property.price}</h1>

      <p className="text-gray-600 mt-2">{property.location}</p>

      <p className="text-red-500 font-medium mt-2">{property.type}</p>

      <div className="flex gap-10 mt-6 text-lg">
        <p>3 Bedrooms</p>
        <p>4 Bathrooms</p>
        <p>360m Area</p>
      </div>

      <p className="mt-6 text-gray-600">
        Beautiful modern house located in a prime area. Perfect for families
        looking for comfort and luxury living.
      </p>
    </div>
  );
}
