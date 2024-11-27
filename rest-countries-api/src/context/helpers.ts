import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const requestCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: async () => await axios.get('https://restcountries.com/v3.1/all'),
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
    queryFn: async () => await axios.get(`https://restcountries.com/v3.1/alpha?codes=${borders?.join(',')}`),
  });
};
