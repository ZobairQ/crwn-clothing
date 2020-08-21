import React, { Component } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden, getAcumulatedCartItems } from "../../redux/cart/cart";

import "./cart.icon.styles.scss";

export class CartIcon extends Component {
  componentDidMount() {}
  render() {
    const { toggleCartHidden, itemCount } = this.props;

    return (
      <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"> {itemCount} </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemCount: getAcumulatedCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
