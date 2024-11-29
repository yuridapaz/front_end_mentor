import { Link } from '@tanstack/react-router';
import React from 'react';

type Props = {
  country: any;
};

const CountryCard = ({ country }: Props) => {
  return (
    <Link className="w-3/4 cursor-pointer bg-white" to={`/CountryPage/${country?.name?.common}`}>
      <div className="w-full">
        <img src={country?.flags?.png} alt="" className="h-40 w-full object-cover" />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h3 className="font-extrabold">{country?.name?.common}</h3>
        <div className="flex flex-col gap-1 text-sm">
          <p className="font-semibold">
            Population: <span className="font-light">{country?.population}</span>
          </p>
          <p>
            Region: <span className="font-light"> {country?.region} </span>
          </p>
          <p>
            Capital: <span className="font-light"> {country?.capital} </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
