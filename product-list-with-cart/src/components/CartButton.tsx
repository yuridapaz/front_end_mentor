import AddToCartIcon from '../assets/icons/icon-add-to-cart.svg';
import { ButtonHTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const cartButtonVariants = tv({
  slots: {
    base: 'group absolute -bottom-5 left-2/4 flex h-12 w-44 -translate-x-2/4 items-center justify-center gap-2 rounded-full border border-rose300 bg-white py-3 transition-all hover:border-redType',
    icon: 'h-5 w-5',
    text: 'text-nowrap transition-all group-hover:text-redType',
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof cartButtonVariants>;
export const CartButton = ({ className, ...props }: ButtonProps) => {
  const { base, icon, text } = cartButtonVariants();
  return (
    <button className={base({ className })} {...props}>
      <img src={AddToCartIcon} alt="" className={icon()} />
      <p className={text()}>Add to Cart</p>
    </button>
  );
};
