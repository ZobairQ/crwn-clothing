import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/users";
import directoryReducer from "./directory/directory";
import collectionReducer from "./shop/shop";

// import cartReducer from "./cart/cart-reducer";
import cartReducer from "./cart/cart";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Only cart will be persisted.
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: collectionReducer 
});

export default persistReducer(persistConfig, rootReducer);
