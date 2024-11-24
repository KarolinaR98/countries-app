import { useCountries } from "../context/countriesContext";
import { Country } from "../types";
import styles from "./CountriesList.module.css";
import loupeImg from "/loupe.svg";
import loupeImgDarkMode from "/loupe-dark-mode.svg"
import CountryCard from "./CountryCard";
import { useDarkMode } from "../context/darkModeContext";

type CountriesListProps = {
  filteredCountries: Country[];
  noDataFound: boolean;
};
const CountriesList = (props: CountriesListProps) => {
  const { loading } = useCountries();
  const {darkMode} = useDarkMode();
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
              <img className={styles.loupeImg} src={darkMode ? loupeImgDarkMode : loupeImg} alt="Loupe" />
              <p className={`${styles.noResultsMsg} ${darkMode && styles.noResultsMsgDarkMode}`}>No results found</p>
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
