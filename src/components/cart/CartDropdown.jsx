import React, { Component } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import './cart.dropdown.styles.scss';
import CartItem from "../cart-item/CartItem";
export class CartDropdown extends Component {
  render() {
    const {cartItems} = this.props;
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
