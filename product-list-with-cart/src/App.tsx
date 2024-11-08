import CartComponent from './components/Cart';
import ProductCard from './components/Product';

function App() {
  return (
    <div className="flex w-full justify-center bg-slate-200">
      <div className="min-h-screen max-w-[1280px] bg-slate-200 p-6 md:grid md:max-h-screen md:grid-cols-10 md:gap-4 md:overflow-hidden lg:gap-6 2xl:max-w-[1440px]">
        <div className="col-span-6 md:h-screen md:overflow-auto md:pb-10 xl:col-span-7">
          <div className="sticky top-0 mb-6 bg-slate-200 py-2 md:z-10 md:mb-0 md:py-0 md:pb-6">
            <h1 className="text-4xl font-bold">Desserts</h1>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-10">
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
        <div className="col-span-4 h-screen overflow-auto pb-10 xl:col-span-3">
          <CartComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
