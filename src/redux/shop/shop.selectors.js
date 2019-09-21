import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

//converting the collections object to an array
export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections=> Object.keys(collections).map(key => collections[key])
  );


export const selectCollection = collectionUrlParams =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParams]
  );

  