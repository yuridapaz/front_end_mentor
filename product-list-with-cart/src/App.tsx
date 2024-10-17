import { CartButton } from './components/CartButton';
import CartComponent from './components/Cart';
import CartItem from './components/CartItem';
import { IoCloseCircleOutline } from 'react-icons/io5';
import NumberInput from './components/NumberInput';
import ProductCard from './components/Product';
import { SiGumtree } from 'react-icons/si';

function App() {
  return (
    <div className="min-h-screen bg-slate-200 p-6 md:grid md:max-h-screen md:grid-cols-10 md:gap-4 md:overflow-hidden">
      <div className="col-span-6 md:h-screen md:overflow-auto md:pb-10">
        <div className="sticky top-0 mb-6 bg-slate-200 py-2 md:z-10 md:mb-0 md:py-0 md:pb-6">
          <h1 className="text-4xl font-bold">Desserts</h1>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="col-span-4">
        <CartComponent />
      </div>
    </div>
  );
}

export default App;
