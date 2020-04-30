import React, { Component } from "react";
import "./preview.collection.styles.scss";
import CollectionItem from "../collection-item/CollectionItem";
export class PreviewCollection extends Component {
  render() {
    return (
      <div className="collection-preview">
        <h1 className="title">{this.props.title.toUpperCase()}</h1>
        <div className="preview">
          {this.props.items
            .filter((item, index) => index < 4)
            .map(({ id, ...otherItemProps }) => (
              <CollectionItem key={id} {...otherItemProps}></CollectionItem>
            ))}
        </div>
      </div>
    );
  }
}

export default PreviewCollection;
