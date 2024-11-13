import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IoMoonOutline } from 'react-icons/io5';

function App() {
  return (
    <div className="h-screen min-h-screen w-full bg-light-gray">
      <header className="flex items-center justify-between bg-white p-4 shadow-md">
        <p>Where in the world?</p>
        <button className="flex items-center gap-2 text-sm">
          <IoMoonOutline /> Dark Mode
        </button>
      </header>
      <div>
        <div className="p-4">
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
          <div className="flex flex-col items-center gap-4 bg-white p-4">
            {/* country wrapper */}
            <div className="w-3/4 space-y-4 bg-blue-100">
              <div className="w-full">
                <img src="" alt="" className="min-h-32 object-cover" />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <h3 className="font-extrabold">Name</h3>
                <div className="flex flex-col gap-1 text-xs">
                  <p className="font-semibold">
                    Population: <span className="font-light">12124</span>
                  </p>
                  <p>
                    Region: <span className="font-light"></span>
                  </p>
                  <p>
                    Capital: <span className="font-light"></span>
                  </p>
                </div>
              </div>
            </div>
            {/*   country wrapper */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
