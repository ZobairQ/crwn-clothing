import React, { Component } from "react";
import { connect } from "react-redux";
import "./checkout.item.styles.scss";
import { removeItem, addItem, removeFromCart } from "../../redux/cart/cart";

export class CheckoutItem extends Component {
  render() {
    const {item, removeItem, addItem, removeItemFromCart } = this.props;
    return (
      <div className="checkout-item">
        <div className="image-container">
          <img src={item.imageUrl} alt="item" />
        </div>
        <span className="name">{item.name}</span>
        <span className="quantity">
        <div className='arrow' onClick={() =>removeItemFromCart(item)}>&#10094;</div>
        <span className='value'>{item.quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
        </span>
        <span className="price">{item.price}</span>
        <div onClick={() => removeItem(item)} className="remove-button">
          &#10005;
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ( {
  removeItem : (item) => dispatch(removeItem(item)),
  addItem : (item) => dispatch(addItem(item)),
  removeItemFromCart : (item) => dispatch(removeFromCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
