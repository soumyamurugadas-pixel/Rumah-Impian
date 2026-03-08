import { useNavigate } from "react-router-dom";

function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <div
      className="card cursor-pointer"
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <img src={property.image} alt={property.title} />

      <h3>IDR {property.price.toLocaleString()}</h3>

      <p>{property.location}</p>

      <span style={{ color: "red" }}>{property.status}</span>

      <div className="details">
        <p>{property.bedrooms} Kamar Tidur</p>
        <p>{property.bathrooms} Kamar Mandi</p>
        <p>{property.size} m²</p>
      </div>
    </div>
  );
}

export default PropertyCard;
