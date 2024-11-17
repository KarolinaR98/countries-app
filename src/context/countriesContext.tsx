import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CountriesContextType, Country } from "../types";
import axios from "axios";

const CountriesContext = createContext<CountriesContextType| undefined>(undefined);

type CountriesProviderProps = {
  children: ReactNode;
};

export const CountriesProvider: FC<CountriesProviderProps> = (
  props: CountriesProviderProps
) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getCountries = () => {
    setLoading(true);
    axios
      .get<Country[]>("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <CountriesContext.Provider value={{countries, loading}}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => {
  const context = useContext(CountriesContext);
  if (context === undefined) {
    throw new Error("useCountries must be used within a CountriesProvider");
  }
  return context;
};
