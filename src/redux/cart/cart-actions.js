import CartActionTypes from './cart-types';
import CartItem from '../../components/cart-item/CartItem';

export const toggleCarHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})