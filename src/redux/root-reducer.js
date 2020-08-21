import { combineReducers } from "redux";
// import userReducer from "./user/user-reducer";
import userReducer from './user/users'
import cartReducer from "./cart/cart-reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
