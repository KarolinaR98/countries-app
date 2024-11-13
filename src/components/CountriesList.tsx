import { Country } from "../types";
import styles from "./CountriesList.module.css";
import CountryCard from "./CountryCard";

type CountriesListProps = {
    countries: Country[]
}
const CountriesList = (props: CountriesListProps) => {
    return (
        <div className={`container ${styles.contriesList}`}>
            {props.countries.length && props.countries.map((country) => {
                return <CountryCard key={country.cca3} country={country}/>
            })}
        </div>
    )
}

export default CountriesList;