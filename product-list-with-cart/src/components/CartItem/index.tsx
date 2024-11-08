import React, { ButtonHTMLAttributes } from 'react';

import { IoCloseCircleOutline } from 'react-icons/io5';
import { tv } from 'tailwind-variants';

type CartItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
  amount: number;
  price: number;
  totalPrice: number;
};
const cartItem = ({ name, amount, price, totalPrice, onChange, onClick }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between border-b pb-4 md:pb-2">
      <div className="flex flex-col gap-1">
        <p className="font-semibold">{name}</p>
        <div className="flex items-center gap-3">
          <p className="font-semibold text-redType md:text-sm">{amount}x</p>
          <p className="text-rose400 md:text-sm">@ ${price.toFixed(2)}</p>
          <p className="font-semibold text-rose400 md:text-sm">${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <button onChange={onChange} onClick={onClick}>
        <IoCloseCircleOutline className="h-6 w-6 text-rose400" />
      </button>
    </div>
  );
};

export default cartItem;
