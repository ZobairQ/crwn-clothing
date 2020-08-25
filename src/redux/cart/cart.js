import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "cart",
  initialState: {
    hidden: true,
    cartItems: [],
  },
  reducers: {
    toggleCartHidden: (cart, action) => {
      cart.hidden = !cart.hidden;
    },
    addItem: (cart, action) => {
      cart.cartItems = addItemToCart(cart.cartItems, action.payload);
    },
    removeItem: (cart, action) => {
      cart.cartItems = cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    removeFromCart: (cart, action) => {
      cart.cartItems = removeItemFromCart(cart.cartItems, action.payload);
    },
  },
});
export const getHidden = createSelector(
  (state) => state.cart,
  (cart) => cart.hidden
);
export const getAcumulatedCartItems = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
export const getAcumulatedPrice = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) =>
    cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)
);
export const getCartItems = createSelector(
  (state) => state.cart,
  (cart) => cart.cartItems
);
export const {
  toggleCartHidden,
  addItem,
  removeItem,
  removeFromCart,
} = slice.actions;
export default slice.reducer;
