import React, { Component } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCarHidden } from '../../redux/cart/cart-actions';
import "./cart.icon.styles.scss";

export class CartIcon extends Component {
  componentDidMount() {
  }
  render() {
    const {toggleCartHidden } = this.props;

    return <div className='cart-icon' onClick= {toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> 0 </span>
    </div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden : () => dispatch(toggleCarHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
