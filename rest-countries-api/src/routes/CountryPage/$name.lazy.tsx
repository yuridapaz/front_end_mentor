import { queryOptions, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { requestBorders, requestCountries, requestCountry } from '../../context/helpers';

import { FaArrowLeftLong } from 'react-icons/fa6';
import axios from 'axios';
import { createLazyFileRoute } from '@tanstack/react-router';
import { queryClient } from '../../main';

export const Route = createLazyFileRoute('/CountryPage/$name')({
  component: () => <Index />,
});

const Index = () => {
  const { name } = Route.useParams();
  const { data } = requestCountry(name);
  const country = data?.data[0];
  const { data: borderCountries, isFetched } = requestBorders(country?.borders);
  console.log('borderCountries:', borderCountries);

  return (
    <>
      {country && (
        <div className="flex min-h-[calc(100vh-56px)] w-full flex-col overflow-hidden px-8 py-6">
          <div className="mb-8">
            <button className="flex items-center gap-3 bg-white px-6 py-2 text-sm shadow-lg">
              <FaArrowLeftLong /> Back
            </button>
          </div>
          <div className="w-full">
            <img src={country?.flags?.png} alt="" className="max-h-60 w-full object-cover" />
          </div>
          <h1 className="my-5 text-lg font-semibold">{country?.name?.common}</h1>
          <div className="space-y-4">
            {/* native name */}
            <div className="mt-0 space-y-1.5">
              <p className="text-sm font-semibold">
                Native Name: <span className="font-normal">{country?.name?.official}</span>
              </p>
              <p className="text-sm font-semibold">
                Population: <span className="font-normal">{country?.population}</span>
              </p>
              <p className="text-sm font-semibold">
                Region: <span className="font-normal">{country?.region}</span>
              </p>
              <p className="text-sm font-semibold">
                Sub Region: <span className="font-normal">{country?.subregion}</span>
              </p>
              <p className="text-sm font-semibold">
                Capital: <span className="font-normal">{country?.capital[0]}</span>
              </p>
            </div>
            {/* top level domain */}
            <div className="space-y-1.5">
              <p className="text-sm font-semibold">
                Top Level Domain: <span className="font-normal">{country?.tld[0]}</span>
              </p>
              <p className="text-sm font-semibold">
                Currencies:{' '}
                <span className="font-normal">
                  {Object.keys(country?.currencies).map((key, index) => {
                    return index ? ',' : '' + country?.currencies[key].name;
                  })}
                </span>
              </p>
              <p className="text-sm font-semibold">
                {country?.languages.length > 1 ? ' Languages:' : 'Language:'}{' '}
                <span className="font-normal">
                  {Object.keys(country?.languages).map((key, index) => {
                    return (index ? ', ' : '') + country?.languages[key];
                  })}
                </span>
              </p>
            </div>
          </div>
          {/* border countries */}
          {borderCountries && (
            <div className="mt-auto flex flex-col gap-3 pb-4 pt-6">
              <p className="text-base font-semibold">Border Countries:</p>
              <div className="flex flex-wrap gap-2">
                {borderCountries?.data?.map((country: any) => {
                  return (
                    <p key={country.name.common} className="bg-white px-5 py-1 text-xs shadow-lg">
                      {country.name.common}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
// function Index() {
//   const { name } = Route.useParams();
//   const data = Route.useLoaderData();
//   console.log('data:', data);

//   return (
//     <div className="">
//       <button>Back</button>
//       <div>
//         <img src="" alt="" />
//         Flag IMAGE
//       </div>
//       <div>
//         {/* native name */}
//         <div>
//           <p className=""></p>
//           <p className=""></p>
//           <p className=""></p>
//           <p className=""></p>
//           <p className=""></p>
//         </div>
//         {/* top level domain */}
//         <div className="">
//           <p className=""></p>
//           <p className=""></p>
//           <p className=""></p>
//         </div>
//       </div>
//       {/* border countries */}
//       <div className="">
//         <button className="">France</button>
//         <button className="">Germany</button>
//         <button className="">Netherlands</button>
//       </div>
//     </div>
//   );
// }

// const index = () => {
//   return (
//     <div className="">
//       <button>Back</button>
//       <div>
//         <img src="" alt="" />
//         Flag IMAGE
//       </div>
//       <div>
//         {/* native name */}
//         <div>
//           <p className=""></p>
//           <p className=""></p>
//           <p className=""></p>
//           <p className=""></p>
//           <p className=""></p>
//         </div>
//         {/* top level domain */}
//         <div className="">
//           <p className=""></p>
//           <p className=""></p>
//           <p className=""></p>
//         </div>
//       </div>
//       {/* border countries */}
//       <div className="">
//         <button className="">France</button>
//         <button className="">Germany</button>
//         <button className="">Netherlands</button>
//       </div>
//     </div>
//   );
// };

// export default index;
