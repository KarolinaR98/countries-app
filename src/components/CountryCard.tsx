import { Link } from "react-router-dom";
import { Country } from "../types";
import styles from "./CountryCard.module.css";
import { useDarkMode } from "../context/darkModeContext";

type CountryCardProps = {
  country: Country;
};
const CountryCard = (props: CountryCardProps) => {
  const {darkMode} = useDarkMode();

  return (
    <Link to={`/details/${props.country.cca3}`} className="link">
      <div className={`${styles.card} ${darkMode && styles.cardDarkMode}`}>
        <img
          className={styles.img}
          src={props.country.flags.png}
          alt={`${props.country.name.common} flag`}
        />
        <div className={styles.countryInfo}>
          <h2 className={styles.name}>{props.country.name.common}</h2>
          <p className={styles.population}>
            <span className="semiBold">Population: </span>
            {props.country.population.toLocaleString()}
          </p>
          <p className={styles.region}>
            <span className="semiBold">Region: </span>{" "}
            {props.country.region}
          </p>
          {props.country.capital && (
            <p className={styles.capital}>
              <span className="semiBold">Capital: </span>{" "}
              {props.country.capital}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
