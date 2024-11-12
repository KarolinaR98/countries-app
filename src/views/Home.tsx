import { useEffect, useState } from "react";
import CountriesList from "../components/CountriesList";
import { Country } from "../types";
import countriesApiService from "../apiService/countriesApiService";
import FilterBar from "../components/FilterBar";

const Home = () => {

    const [countries, setCountries] = useState<Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

    const filterCountriesByName = (searchValue: string) => {
        const filteredCountriesData = countries?.filter(country => 
            country.name.common.toLowerCase().startsWith(searchValue.toLowerCase()));
            setFilteredCountries(filteredCountriesData);
    }

    useEffect(() => {
        countriesApiService.getAllCountries()
        .then((data) => {
            setCountries(data);
            setFilteredCountries(data)
        })
    }, [])

    console.log(countries);

    return (
        <div>
            <FilterBar  filterCountriesByName={filterCountriesByName}/>
            <CountriesList countries={filteredCountries}/>
        </div>
    )
}

export default Home;
