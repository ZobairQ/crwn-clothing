import React, { Component } from "react";
import "./shop.page.styles.scss";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/CollectionPage";

export class ShopPage extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
}

export default ShopPage;
