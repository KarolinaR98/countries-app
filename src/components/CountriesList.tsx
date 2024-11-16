import { useCountries } from "../countriesContext";
import { Country } from "../types";
import styles from "./CountriesList.module.css";
import loupeImg from "/loupe.svg";
import CountryCard from "./CountryCard";

type CountriesListProps = {
  filteredCountries: Country[];
  noDataFound: boolean;
};
const CountriesList = (props: CountriesListProps) => {
  const { loading } = useCountries();
  return (
    <div className={`container ${styles.contriesList}`}>
      {!loading ? (
        props.filteredCountries.length ? (
          props.filteredCountries.map((country) => {
            return <CountryCard key={country.cca3} country={country} />;
          })
        ) : (
          props.noDataFound && (
            <div className={styles.noDataContainer}>
              <img className={styles.loupeImg} src={loupeImg} alt="Loupe" />
              <p className={styles.noResultsMsg}>No results found</p>
            </div>
          )
        )
      ) : (
        <div className={styles.loadingContainer}>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default CountriesList;
