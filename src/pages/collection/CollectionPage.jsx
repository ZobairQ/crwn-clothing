import React, { Component } from "react";
import { connect } from "react-redux";
import { CollectionItem } from "../../components/collection-item/CollectionItem";
import { createStructuredSelector } from "reselect";
import "./collection.page.styles.scss";
import { getCollection, getCollections } from "../../redux/shop/shop";

export class CollectionPage extends Component {
  render() {
    const { title, items } = this.props.collection;
        return (
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className='items'>
          {
            items.map(item=> <CollectionItem key={item.id} item={item}/>)
          }
        </div>
      </div>
    );
  }
}

  const mapStateToProps = (state, ownProps) => ({
    collection:getCollection(ownProps.match.params.collectionId)(state)
  })


const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
