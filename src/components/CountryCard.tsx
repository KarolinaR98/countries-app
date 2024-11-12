import { Country } from "../types";
import styles from "./CountryCard.module.css";

type CountryCardProps = {
  country: Country;
};
const CountryCard = (props: CountryCardProps) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={props.country.flags.png}
        alt={`${props.country.name.common} flag`}
      />
      <div className={styles.countryInfo}>
        <h2 className={styles.name}>{props.country.name.common}</h2>
        <p className={styles.population}>
          <span className={styles.semiBold}>Population: </span>
          {props.country.population.toLocaleString()}
        </p>
        <p className={styles.region}>
          <span className={styles.semiBold}>Region: </span>{" "}
          {props.country.region}
        </p>
        {props.country.capital && (
          <p className={styles.capital}>
            <span className={styles.semiBold}>Capital: </span>{" "}
            {props.country.capital}
          </p>
        )}
      </div>
    </div>
  );
};

export default CountryCard;
