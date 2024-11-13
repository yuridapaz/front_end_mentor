import { StateContextType, useStateProvider } from '../../context/context';

import { CartActionType } from '../../reducer/types';
import { CartButton } from '../CartButton';
import NumberInput from '../NumberInput';
import { findItem } from '../../helpers/functions';
import { tv } from 'tailwind-variants';

const productCardVariants = tv({
  slots: {
    wrapper: 'flex flex-col gap-4',
    imageWrapper: 'relative flex w-full h-40 md:h-36 justify-center rounded-lg',
    category: 'text-sm font-extralight',
    name: 'font-semibold md:text-sm md:leading-tight lg:min-h-[2.5rem]',
    price: 'font-medium text-redType md:flex md:items-start ',
  },
});

const { wrapper, imageWrapper, category, price, name } = productCardVariants();

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    image: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { state, dispatch } = useStateProvider() as StateContextType;
  const itemOnCart = findItem(product.id, state.cartList);

  const handleAddToCard = () => {
    dispatch({
      type: CartActionType.ADD_TO_CART,
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    });
  };

  const handleIncreaseAmount = () => {
    dispatch({
      type: CartActionType.INCREASE_AMOUNT,
      payload: {
        id: product.id,
      },
    });
  };

  const handleDecreaseAmount = () => {
    if (itemOnCart?.quantity === 1) {
      dispatch({
        type: CartActionType.REMOVE_FROM_CART,
        payload: {
          id: product.id,
        },
      });
      return;
    }
    dispatch({
      type: CartActionType.DECREASE_AMOUNT,
      payload: {
        id: product.id,
      },
    });
  };

  return (
    <div className={`${wrapper()}`}>
      <div className={imageWrapper()}>
        <img
          src={product.image.desktop}
          className={`h-full w-full rounded-lg object-cover transition-all ${itemOnCart ? 'border-2 border-redType' : 'border-2 border-transparent'} hover:border-redType`}
          // border-2 border-white hover:border-redType
          alt=""
        />
        {!itemOnCart && <CartButton onClick={handleAddToCard} />}
        {itemOnCart && (
          <NumberInput
            handleIncreaseAmount={handleIncreaseAmount}
            handleDecreaseAmount={handleDecreaseAmount}
            itemQuantity={itemOnCart.quantity}
          />
        )}
      </div>
      <div className="flex flex-col md:mt-4 md:w-full md:flex-row md:justify-between md:gap-4">
        <div>
          <p className={category()}>{product.category}</p>
          <p className={name()}>{product.name}</p>
        </div>
        <div>
          {/* <p className={name()}>{product.name}</p> */}
          <p className={price()}>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
