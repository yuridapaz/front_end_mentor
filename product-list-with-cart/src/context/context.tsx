import { Cart, CartActionType, initialCartState } from '../reducer/types';
import React, { createContext, useContext, useReducer } from 'react';

import { CartItemProps } from '../components/CartItem/index';
import { cartReducer } from '../reducer/reducer';

export type StateContextType = {
  state: Cart;
  dispatch: React.Dispatch<{ type: CartActionType; payload: any }>;
};

export const StateContext = React.createContext<StateContextType | null>(null);

type props = {
  children: React.ReactNode;
};

const StateProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(
    cartReducer as React.Reducer<Cart, { type: CartActionType; payload: any }>,
    initialCartState,
  );

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

export default StateProvider;

export const useStateProvider = () => useContext(StateContext);
