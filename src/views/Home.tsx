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
    setSearchValue(value.toLowerCase());
  };

  const handleSelectedRegionChange = (value: string) => {
    setSelectedRegion(value);
  };

  const filterData = () => {
    const filteredCountriesData = countries.filter((country) => {
      if (country.region === selectedRegion || selectedRegion === "all") {
        return country.name.common
          .toLowerCase()
          .startsWith(searchValue.toLowerCase());
      }
    });
    setFilteredCountries(filteredCountriesData);
  };

  useEffect(() => {
    countriesApiService.getAllCountries().then((data) => {
      setCountries(data);
      setFilteredCountries(data);
    });
  }, []);

  useEffect(() => {
    filterData();
  }, [searchValue, selectedRegion]);

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
