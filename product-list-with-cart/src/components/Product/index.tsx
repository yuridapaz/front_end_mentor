import { CartButton } from '../CartButton';
import { tv } from 'tailwind-variants';

const productCardVariants = tv({
  slots: {
    wrapper: 'flex flex-col gap-4',
    imageWrapper: 'relative flex w-full justify-center rounded-lg',
    name: 'text-sm font-extralight',
    description: 'font-semibold',
    price: 'font-medium text-redType',
  },
});

const { wrapper, imageWrapper, description, price, name } = productCardVariants();

const ProductCard = () => {
  return (
    <div className={`${wrapper()}`}>
      <div className={imageWrapper()}>
        <img
          src={'src/assets/images/mobile/image-baklava-mobile.jpg'}
          className="rounded-lg"
          // border-2 border-white hover:border-redType
          alt=""
        />
        <CartButton />
        {/* <NumberInput /> */}
      </div>
      <div className="flex flex-col">
        <p className={name()}>Waffle</p>
        <p className={description()}>Waffle with Berries</p>
        <p className={price()}>$6.50</p>
      </div>
    </div>
  );
};

export default ProductCard;
