import React, { useEffect, useState, createContext } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState(["Location (any)"]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState(["Property type (any)"]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  // Update countries when houses change
  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, [houses]);

  // Update properties when houses change
  useEffect(() => {
    const allProperties = houses.map((house) => house.type);
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

  // Helper function to check default values
  const isDefault = (str) => str.includes("(any)");

  // Handle Click Function
  const handleClick = () => {
    let minPrice = 0;
    let maxPrice = Infinity;

    // Extract price values correctly
    if (!isDefault(price)) {
      const priceRange = price.split(" - ").map((p) => parseInt(p.trim(), 10));
      minPrice = priceRange[0] || 0;
      maxPrice = priceRange[1] || Infinity;
    }

    // Filter the houses
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price, 10);

      // Case 1: All filters applied
      if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
        return house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice;
      }

      // Case 2: No filters applied (return all houses)
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return true;
      }

      // Case 3: Only country is selected
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      // Case 4: Only property type is selected
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      // Case 5: Only price range is selected
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }

      // Case 6: Country & property type selected, but not price
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      return false;
    });

    console.log(newHouses);
    setHouses(newHouses);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        houses,
        setHouses,
        loading,
        setLoading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
