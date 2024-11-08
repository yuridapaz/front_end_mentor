import { CartItem } from '../reducer/types';

export const sumItems = (cartList: CartItem[]) => {
  const totalItems = cartList.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartList.reduce((total, item) => total + item.quantity * item.price, 0);
  // const totalAmount = cartList.reduce((total, item) => total + item.totalPrice, 0);
  return { totalItems, totalAmount };
};
