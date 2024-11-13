import { useEffect, useState } from "react";
import CountriesList from "../components/CountriesList";
import { Country } from "../types";
import countriesApiService from "../apiService/countriesApiService";
import FilterBar from "../components/FilterBar";

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const handleSearchValueChange = (value: string) => {
    const filteredCountriesData = countries?.filter((country) => {
      if (selectedRegion === "all") {
        return country.name.common
          .toLowerCase()
          .startsWith(value.toLowerCase());
      } else {
        if (country.region === selectedRegion) {
          return country.name.common
            .toLowerCase()
            .startsWith(value.toLowerCase());
        }
      }
    });

    setFilteredCountries(filteredCountriesData);
    setSearchValue(value.toLowerCase());
  };

  const handleSelectedRegionChange = (value: string) => {
    const filteredCountriesData = countries?.filter((country) => {
      if (value === "all") {
        return country.name.common
          .toLowerCase()
          .startsWith(searchValue.toLowerCase());
      } else {
        if (country.region === value) {
          return country.name.common
            .toLowerCase()
            .startsWith(searchValue.toLowerCase());
        }
      }
    });

    setFilteredCountries(filteredCountriesData);
    setSelectedRegion(value);
  };

  useEffect(() => {
    countriesApiService.getAllCountries().then((data) => {
      setCountries(data);
      setFilteredCountries(data);
    });
  }, []);

  return (
    <div>
      <FilterBar
        handleSearchValueChange={handleSearchValueChange}
        handleSelectedRegionChange={handleSelectedRegionChange}
      />
      <CountriesList countries={filteredCountries} />
    </div>
  );
};

export default Home;
