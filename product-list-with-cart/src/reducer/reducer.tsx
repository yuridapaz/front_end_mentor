import { Cart, CartAction, CartActionType, CartItem } from './types';
import { findItemIndex, sumItems } from '../helpers/functions';

export const cartReducer: React.Reducer<Cart, CartAction> = (state: Cart, action: CartAction) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionType.ADD_TO_CART:
      // if (findItemIndex(payload.id, state.cartList) < 0) {
      //   state.cartList.push({ ...payload, quantity: 1, totalPrice: payload.price });
      // }
      state.cartList.push({ ...payload, quantity: 1, totalPrice: payload.price });
      return {
        ...state,
        cartList: [...state.cartList],
        ...sumItems(state.cartList),
      };
      break;

    case CartActionType.INCREASE_AMOUNT:
      const IndexInc = findItemIndex(payload.id, state.cartList);
      state.cartList[IndexInc!].quantity += 1;
      state.cartList[IndexInc!].totalPrice = state.cartList[IndexInc!].quantity * state.cartList[IndexInc!].price;
      return {
        ...state,
        ...sumItems(state.cartList),
      };
      break;

    case CartActionType.DECREASE_AMOUNT:
      const IndexDec = findItemIndex(payload.id, state.cartList);
      state.cartList[IndexDec!].quantity -= 1;
      state.cartList[IndexDec!].totalPrice = state.cartList[IndexDec!].quantity * state.cartList[IndexDec!].price;
      return {
        ...state,
        ...sumItems(state.cartList),
      };
      break;

    case CartActionType.REMOVE_FROM_CART:
      // Método 1
      const IndexRem = findItemIndex(payload.id, state.cartList);
      state.cartList.splice(IndexRem!, 1);

      return {
        ...state,
        cartList: [...state.cartList],
        ...sumItems(state.cartList),
        // Método 2
        // cartList: state.cartList.filter((item: CartItem) => item.id !== payload.id),
      };
      break;

    default:
      return state;
  }
};
