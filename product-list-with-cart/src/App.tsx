import { CartButton } from './components/CartButton';
import CartItem from './components/CartItem';
import { IoCloseCircleOutline } from 'react-icons/io5';
import NumberInput from './components/NumberInput';
import ProductCard from './components/Product';
import { SiGumtree } from 'react-icons/si';

function App() {
  return (
    <div className="min-h-screen bg-slate-200 p-6">
      <div className="mb-6 py-2">
        <h1 className="text-4xl font-bold">Desserts</h1>
      </div>
      <div className="">
        <ProductCard />
      </div>
      <div className="my-6 flex flex-col gap-4 rounded-xl bg-white px-6 py-8">
        <h1 className="text-xl font-semibold text-redType">Your Cart (10)</h1>
        <CartItem onClick={() => console.log('first')} name="Waffle" amount={1} price={5.5} totalPrice={5.5} />
        <div className="flex items-center justify-between">
          <p>Order total</p>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        {/* neutral carbon delivery */}
        <div className="flex items-center justify-center gap-2 rounded-lg bg-rose100 p-4">
          <SiGumtree className="h-5 w-5 text-green-700" />
          <p> This is a carbon-neutral delivery</p>
        </div>
        {/* button complete order */}
        <button className="rounded-full bg-redType p-4 font-semibold text-white transition-all hover:bg-redType/95">
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default App;
