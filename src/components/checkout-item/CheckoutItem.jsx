import React, { Component } from "react";
import { connect } from "react-redux";
import "./checkout.item.styles.scss";
import { removeItem } from "../../redux/cart/cart";

export class CheckoutItem extends Component {
  render() {
    const { id, item, removeItem } = this.props;
    return (
      <div className="checkout-item">
        <div className="image-container">
          <img src={item.imageUrl} alt="item" />
        </div>
        <span className="name">{item.name}</span>
        <span className="quantity">{item.quantity}</span>
        <span className="price">{item.price}</span>
        <div onClick={removeItem} className="remove-button">
          &#10005;
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ( {
  removeItem : (id) => dispatch(removeItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
