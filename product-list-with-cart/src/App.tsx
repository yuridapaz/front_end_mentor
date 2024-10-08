import { CartButton } from './components/CartButton';
import NumberInput from './components/NumberInput';

function App() {
  return (
    <div className="p-6">
      <div className="mb-6 py-2">
        <h1 className="text-4xl font-bold">Desserts</h1>
      </div>
      <div className="">
        <div className="flex flex-col gap-4">
          <div className="relative w-full rounded-lg">
            <img
              src={'src/assets/images/mobile/image-baklava-mobile.jpg'}
              className="rounded-lg"
              // border-2 border-white hover:border-redType
              alt=""
            />
            <CartButton />
            <NumberInput />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-extralight">Waffle</p>
            <p className="font-semibold">Waffle with Berries</p>
            <p className="font-medium text-redType">$6.50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
