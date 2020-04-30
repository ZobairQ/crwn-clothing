import React, { Component } from "react";
import "./shop.page.styles.scss";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview.collection/PreviewCollection";
export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const {collections} = this.state;
    return (<div>
    {
      collections.map(({id, ...otherCollectionsProps}) => (
        <PreviewCollection key={id} {...otherCollectionsProps}/>
      ))
    }
      
    </div>);
  }
}

export default ShopPage;
