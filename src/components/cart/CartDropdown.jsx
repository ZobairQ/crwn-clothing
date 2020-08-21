import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/CustomButton";
import "./cart.dropdown.styles.scss";
import CartItem from "../cart-item/CartItem";
import { getCartItems, toggleCartHidden } from "../../redux/cart/cart";
import { createStructuredSelector } from "reselect";
export class CartDropdown extends Component {
  render() {
    const { cartItems, history, toggleCartHidden } = this.props;
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div>
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            toggleCartHidden();
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems,
});

const mapDispatchToProps = {
  toggleCartHidden,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
