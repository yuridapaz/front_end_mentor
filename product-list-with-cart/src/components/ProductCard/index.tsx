import { CartButton } from '../CartButton';
import { tv } from 'tailwind-variants';

const productCardVariants = tv({
  slots: {
    wrapper: 'flex flex-col gap-4',
    imageWrapper: 'relative flex w-full h-40 md:h-36 justify-center rounded-lg',
    category: 'text-sm font-extralight',
    name: 'font-semibold md:text-sm md:leading-tight lg:min-h-[2.5rem]',
    price: 'font-medium text-redType md:flex md:items-center ',
  },
});

const { wrapper, imageWrapper, category, price, name } = productCardVariants();

const ProductCard = ({ product }: any) => {
  return (
    <div className={`${wrapper()}`}>
      <div className={imageWrapper()}>
        <img
          // src="/src/assets/images/desktop/image-creme-brulee-desktop.jpg"
          src={product.image.desktop}
          className="h-full w-full rounded-lg object-cover"
          // border-2 border-white hover:border-redType
          alt=""
        />
        <CartButton />
        {/* <NumberInput /> */}
      </div>
      <div className="flex flex-col md:mt-4 md:w-full md:flex-row md:justify-between md:gap-4">
        <div>
          <p className={category()}>{product.category}</p>
          <p className={name()}>{product.name}</p>
        </div>
        <p className={price()}>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
