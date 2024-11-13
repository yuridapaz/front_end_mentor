export enum CartActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  INCREASE_AMOUNT = 'INCREASE_AMOUNT',
  DECREASE_AMOUNT = 'DECREASE_AMOUNT',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}
export interface CartAction {
  type: CartActionType;
  payload: any;
}

export interface Cart {
  cartList: CartItem[];
  totalAmount: number;
  totalItems: number;
}
export interface CartItem {
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
  id: number;
}

export const initialCartState = {
  cartList: [],
  totalAmount: 0,
  totalItems: 0,
};
