import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import { useCountries } from "../countriesContext";

const Details = () => {
  const params = useParams();
  const { countries } = useCountries();

  const country = countries.find((country) => country.cca3 === params.cca3);

  return (
    <div className="container">
      {country && (
        <div className={styles.countryDetails}>
          <img
            className={styles.flagImg}
            src={country.flags.png}
            alt={`${country.name.common} flag`}
          />
          <div className={styles.countryInfoWrapper}>
            <h2 className={styles.name}>{country.name.common}</h2>
            <div className={styles.columnsWrapper}>
              <div className={styles.col1}>
                <p className={styles.nativeName}>
                  <span className="semiBold">Native Name: </span>{" "}
                  {country.name.official}
                </p>
                <p className={styles.population}>
                  <span className="semiBold">Population: </span>{" "}
                  {country.population}
                </p>
                <p className={styles.region}>
                  <span className="semiBold">Region: </span> {country.region}
                </p>
                {country.subregion && (
                  <p className={styles.subRegion}>
                    <span className="semiBold">Sub Region: </span>{" "}
                    {country.subregion}
                  </p>
                )}
                {country.capital && (
                  <p className={styles.capital}>
                    <span className="semiBold">Capital: </span>{" "}
                    {country.capital}
                  </p>
                )}
              </div>
              <div className={styles.col2}>
                {country.tld && (
                  <p className={styles.domain}>
                    <span className="semiBold">Top Level Domain: </span>{" "}
                    {country.tld}
                  </p>
                )}
                <p className={styles.currencies}>
                  <span className="semiBold">Currencies: </span>{" "}
                </p>
                <p className={styles.languages}>
                  <span className="semiBold">Languages: </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
