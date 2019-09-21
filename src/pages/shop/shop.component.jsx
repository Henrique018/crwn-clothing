import React from "react";
import  { Route } from 'react-router-dom'

import CollectionOverview from "../../Components/collections-overview/collections-overview.component.jsx";
import CollectionPage from '../collection/collection.component'

  const Shop = ({ match }) => {
    console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};


export default Shop;
