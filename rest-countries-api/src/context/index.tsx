import React, { useContext, useState } from 'react';

export const CountryContext = React.createContext<any | null>(null);

interface Props {
  children: React.ReactNode;
}

const CountryContextProvider = ({ children }: Props) => {
  const [countries, setCountries] = useState([]);

  return <CountryContext.Provider value={{ countries, setCountries }}>{children}</CountryContext.Provider>;
};

export default CountryContextProvider;

export const useCountryContext = () => useContext(CountryContext);
