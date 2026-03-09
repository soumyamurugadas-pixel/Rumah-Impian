import React from "react";
import { useLocation } from "react-router-dom";
import { properties } from "../Data/properties";
import PropertyCard from "./PropertyCard";

function SearchResults() {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const query = params.get("query")?.toLowerCase() || "";

  const filteredProperties = properties.filter((property) => {
    const title = property.title?.toLowerCase() || "";
    const location = property.location?.toLowerCase() || "";

    return title.includes(query) || location.includes(query);
  });

  return (
    <section className="bg-[#EEF2F1] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#0E7A4F] mb-14">
          Search Results
        </h2>

        {/* No Results */}
        {filteredProperties.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No properties found for "{query}"
          </p>
        ) : (
          /* Same grid layout as Recommendation section */
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchResults;
