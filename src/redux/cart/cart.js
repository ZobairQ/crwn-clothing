import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart.utils";
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
    removeItem:(cart,action) => {
      cart.cartItems.filter(item => item.id !== action.playload);
    }
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
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.price, 0)
);
export const getCartItems = createSelector(
  (state) => state.cart,
  (cart) => cart.cartItems
);
export const { toggleCartHidden, addItem, removeItem } = slice.actions;
export default slice.reducer;
