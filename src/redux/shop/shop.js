import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import SHOP_DATA from "../../pages/shop/shop.data";
import memoize from "lodash.memoize";

const INITIAL_SATE = { collections: SHOP_DATA };
const slice = createSlice({
  name: "shop",
  initialState: INITIAL_SATE,
  reducers: {},
});

export const getCollections = createSelector(
  (state) => state.shop,
  (shop) => shop.collections
);

export const getCollectionsForPreview = createSelector(
  [getCollections],
  (collections) => Object.keys(collections).map(key=> collections[key])
);
export const getCollection = memoize((collectionId) =>
  createSelector([getCollections], (collections) => collections[collectionId])
);

export default slice.reducer;
