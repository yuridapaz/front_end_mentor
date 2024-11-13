import { StateContext, StateContextType, useStateProvider } from '../../context/context';

import { CartActionType } from '../../reducer/types';
import CartItem from '../CartItem';
import React from 'react';
import { SiGumtree } from 'react-icons/si';

const CartWrapper = () => {
  const { state, dispatch } = useStateProvider() as StateContextType;

  return (
    <div className="my-10 flex flex-col gap-4 rounded-xl bg-white px-6 py-8 md:my-0">
      <h1 className="text-xl font-semibold text-redType">Your Cart ({state.totalItems})</h1>
      {/* cart items */}
      {state.cartList.length === 0 && <p className="my-8 text-center text-lg">Your cart is empty</p>}
      {state.cartList.length > 0 &&
        state.cartList.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.quantity}
              price={item.price}
              totalPrice={item.totalPrice}
              onClick={() => dispatch({ type: CartActionType.REMOVE_FROM_CART, payload: { id: item.id } })}
            />
          );
        })}

      <div className="flex items-center justify-between">
        <p className="md:text-sm">Order total</p>
        <p className="text-2xl font-bold md:text-lg">${state.totalAmount.toFixed(2)}</p>
      </div>
      {/* neutral carbon delivery */}
      <div className="flex items-center justify-center gap-2 rounded-lg bg-rose100 p-4 md:px-2">
        <SiGumtree className="h-5 w-5 text-green-700 md:h-4 md:w-4" />
        <p className="md:text-sm"> This is a carbon-neutral delivery</p>
      </div>
      {/* button complete order */}
      <button
        className="cursor-pointer rounded-full bg-redType p-4 font-semibold text-white transition-all hover:bg-redType/95 disabled:bg-redType/50 md:p-2 md:text-sm"
        disabled={state.cartList.length === 0}
        onClick={() => {
          alert('Order completed');
        }}
      >
        Confirm Order
      </button>
    </div>
  );
};

export default CartWrapper;
