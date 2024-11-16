import styles from "./Details.module.css";
import { Link, useParams } from "react-router-dom";
import { useCountries } from "../countriesContext";

const Details = () => {
  const params = useParams();
  const { countries } = useCountries();

  const country = countries.find((country) => country.cca3 === params.cca3);

  return (
    <div className="container">
      <Link className={`link ${styles.backButton}`} to="/">
        Back
      </Link>
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
                  <span className="bold">Native Name: </span>
                  {country.name.official}
                </p>
                <p className={styles.population}>
                  <span className="bold">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p className={styles.region}>
                  <span className="bold">Region: </span> {country.region}
                </p>
                {country.subregion && (
                  <p className={styles.subRegion}>
                    <span className="bold">Sub Region: </span>
                    {country.subregion}
                  </p>
                )}
                {country.capital && (
                  <p className={styles.capital}>
                    <span className="bold">Capital: </span> {country.capital}
                  </p>
                )}
              </div>
              <div className={styles.col2}>
                {country.tld && (
                  <p className={styles.domain}>
                    <span className="bold">Top Level Domain: </span>
                    {country.tld}
                  </p>
                )}
                {country.currencies && (
                  <p className={styles.currencies}>
                    <span className="bold">Currencies: </span>
                    {Object.keys(country.currencies).map((key, index, keys) => {
                      const currency = country.currencies![key];
                      const isLast = index === keys.length - 1;
                      return (
                        <span key={index}>
                          {currency.name}
                          {isLast ? " " : ", "}
                        </span>
                      );
                    })}
                  </p>
                )}
                {country.languages && (
                  <p className={styles.languages}>
                    <span className="bold">Languages: </span>
                    {Object.keys(country.languages).map((key, index, keys) => {
                      const language = country.languages![key];
                      const isLast = index === keys.length - 1;
                      return (
                        <span key={index}>
                          {language}
                          {isLast ? " " : ", "}
                        </span>
                      );
                    })}
                  </p>
                )}
              </div>
            </div>
            {country.borders && (
              <div className={styles.borderCountriesWrapper}>
                <span className={`bold ${styles.borderCountries}`}>
                  Border Countries:{" "}
                </span>
                {country.borders.map((borderCountry) => {
                  const findingCountryDetails = countries.find(
                    (country) => country.cca3 === borderCountry
                  );
                  return (
                    <Link
                      className={`link ${styles.borderCountry}`}
                      key={borderCountry}
                      to={
                        `/details/${borderCountry}`
                      }
                    >
                      {findingCountryDetails?.name.common}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
