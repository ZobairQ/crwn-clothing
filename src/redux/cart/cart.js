import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name:"cart",
    initialState: {
        hidden:true,
        cartItems:[]
    },
    reducers:{
        toggleCartHidden:(cart, action) => {
            cart.hidden = !cart.hidden;
        },
        addItem:(cart, action)=>{
            cart.cartItems.push(action.payload)
        }
    }
});
const CartActionTypes = {
    TOGGLE_CART_HIDDEN:'TOGGLE_CART_HIDDEN'
};

export const toggleCarHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  })

  
const INITIAL_STATE = {
    hidden: true,
  };
  
export default cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
          ...state,
          hidden: !state.hidden,
        }
        default:
            return state
    }
  };
  