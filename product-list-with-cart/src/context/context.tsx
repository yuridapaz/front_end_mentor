import { Cart, CartActionType, initialCartState } from '../reducer/types';
import React, { createContext, useContext, useReducer } from 'react';

import { cartReducer } from '../reducer/reducer';

export const StateContext = createContext({});

type props = {
  children: React.ReactNode;
};
const StateProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(
    cartReducer as React.Reducer<Cart, { type: CartActionType; payload: any }>,
    initialCartState,
  );

  return <StateContext.Provider value={{}}>{children}</StateContext.Provider>;
};

export default StateProvider;
export const useStateProvider = () => useContext(StateContext);
