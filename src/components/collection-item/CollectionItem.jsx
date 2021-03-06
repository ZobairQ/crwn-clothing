import React, { Component } from "react";
import "./collection.item.styles.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
// import {addItem } from '../../redux/cart/cart-actions';
import {addItem} from '../../redux/cart/cart';

export class CollectionItem extends Component {
  render() {
    const { item, addItem} = this.props;
   const {name, price, imageUrl} = item;
    return (
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps) (CollectionItem);
