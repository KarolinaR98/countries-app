import { useEffect, useState } from "react";
import CountriesList from "../components/CountriesList";
import { Country } from "../types";
import FilterBar from "../components/FilterBar";
import { useCountries } from "../context/countriesContext";

const Home = () => {
  const { countries } = useCountries();
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [noDataFound, setNoDataFound] = useState<boolean>(false);

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

    if (filteredCountriesData.length) {
      setNoDataFound(false);
    } else {
      setNoDataFound(true);
    }

    setFilteredCountries(filteredCountriesData);
  };

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    filterData();
  }, [searchValue, selectedRegion]);

  return (
    <div>
      <FilterBar
        handleSearchValueChange={handleSearchValueChange}
        handleSelectedRegionChange={handleSelectedRegionChange}
      />
      <CountriesList filteredCountries={filteredCountries} noDataFound={noDataFound}/>
    </div>
  );
};

export default Home;
