import React, { Component } from "react";
import { connect } from "react-redux";
import { getCartItems, getAcumulatedPrice } from "../../redux/cart/cart";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";
import "./checkout.styles.scss";

export class Checkout extends Component {
  render() {
    const { cartItems, totalPrice } = this.props;
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block"></div>
        </div>

        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))}
        <div className="total">
          <span>TOTAL:${totalPrice}</span>
          <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
          </div>
          <StripeButton price={totalPrice}></StripeButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems,
  totalPrice: getAcumulatedPrice,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
