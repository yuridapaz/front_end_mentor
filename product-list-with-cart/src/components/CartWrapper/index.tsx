import CartItem from '../CartItem';
import React from 'react';
import { SiGumtree } from 'react-icons/si';

type Props = {};

const CartComponent = (props: Props) => {
  return (
    <div className="my-6 flex flex-col gap-4 rounded-xl bg-white px-6 py-8 md:my-0">
      <h1 className="text-xl font-semibold text-redType">Your Cart (10)</h1>
      <CartItem onClick={() => console.log('first')} name="Waffle" amount={1} price={5.5} totalPrice={5.5} />
      <CartItem onClick={() => console.log('first')} name="Waffle" amount={1} price={5.5} totalPrice={5.5} />
      <CartItem onClick={() => console.log('first')} name="Waffle" amount={1} price={5.5} totalPrice={5.5} />
      <div className="flex items-center justify-between">
        <p className="md:text-sm">Order total</p>
        <p className="text-2xl font-bold md:text-lg">$0.00</p>
      </div>
      {/* neutral carbon delivery */}
      <div className="flex items-center justify-center gap-2 rounded-lg bg-rose100 p-4 md:px-2">
        <SiGumtree className="h-5 w-5 text-green-700 md:h-4 md:w-4" />
        <p className="md:text-sm"> This is a carbon-neutral delivery</p>
      </div>
      {/* button complete order */}
      <button className="rounded-full bg-redType p-4 font-semibold text-white transition-all hover:bg-redType/95 md:p-2 md:text-sm">
        Confirm Order
      </button>
    </div>
  );
};

export default CartComponent;
