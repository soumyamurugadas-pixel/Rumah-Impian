import { useState } from "react";
import SearchHero from "./Searchhero";
import RecommendationSection from "./RecommendationSection";
import { properties as allProperties } from "./Data/properties";

export default function HandleSearch() {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (results) => {
    setFilteredProperties(results);
    setHasSearched(true);
  };

  return (
    <main>
      <SearchHero onSearch={handleSearch} />
      <RecommendationSection
        filteredProperties={filteredProperties}
        hasSearched={hasSearched}
      />
    </main>
  );
}
