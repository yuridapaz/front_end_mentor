import CountryCard from '../../components/CountryCard';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { requestCountries } from '../../context/helpers';

type Props = {};

const index = (props: Props) => {
  const { data } = requestCountries();

  return (
    <div className="max-w-full p-4">
      <div className="space-y-4 pb-6">
        <div className="relative flex w-full items-center rounded-md font-light shadow-md">
          <HiMagnifyingGlass className="absolute left-5 top-3.5 h-4 w-4" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="w-full rounded-md p-3 pl-14 text-sm placeholder:text-xs placeholder:font-light"
          />
        </div>
        <select
          name="continents"
          id="continents"
          className="min-w-48 rounded-md bg-white p-2.5 text-sm font-light shadow-md"
        >
          <option value="">-- Filter by Region --</option>
          <option value="africa">Africa</option>
          <option value="america">América</option>
          <option value="asia">Ásia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      <div className="flex flex-col items-center gap-8 p-4">
        {/* country wrapper */}
        {data && <CountryCard country={data.data[2]} />}
        {data && <CountryCard country={data.data[3]} />}
        {data && <CountryCard country={data.data[4]} />}

        {/*   country wrapper */}
      </div>
    </div>
  );
};

export default index;
