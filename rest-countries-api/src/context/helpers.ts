import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const requestCountries = (region: string) => {
  if (!region) {
    return useQuery({
      queryKey: ['countries'],
      queryFn: async () => await axios.get('https://restcountries.com/v3.1/all'),
      refetchOnWindowFocus: false,
    });
  }
  return useQuery({
    queryKey: ['countries', region],
    queryFn: async () => {
      return await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    },
  });
};

export const requestCountry = (name: string) => {
  return useQuery({
    queryKey: ['country', name],
    queryFn: async () => await axios.get(`https://restcountries.com/v3.1/name/${name}`),
  });
};

export const requestBorders = (borders: string[]) => {
  return useQuery({
    queryKey: ['borders', borders],
    queryFn: async () => {
      if (!borders) {
        return null;
      }
      return await axios.get(`https://restcountries.com/v3.1/alpha?codes=${borders.join(',')}`);
    },
  });
};
