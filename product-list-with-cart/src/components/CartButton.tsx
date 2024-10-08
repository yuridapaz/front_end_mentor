import AddToCartIcon from '../assets/icons/icon-add-to-cart.svg';
import { ButtonHTMLAttributes } from 'react';
import React from 'react';

// export const CartButton = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
//   return (
//     <button className="" {...props}>
//       <AddToCartIcon /> Add to Cart
//     </button>
//   );
// };

export const CartButton = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="group absolute -bottom-5 left-2/4 flex h-12 w-44 -translate-x-2/4 items-center justify-center gap-2 rounded-full border border-rose300 bg-white py-3 transition-all hover:border-redType">
      <img src={AddToCartIcon} alt="" className="h-5 w-5" />
      <p className="text-nowrap transition-all group-hover:text-redType">Add to Cart</p>
    </button>
  );
};
