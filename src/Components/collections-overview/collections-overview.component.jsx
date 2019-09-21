import React from "react";
import "./collections-overview.styles.scss";
import CollectionPreview from '../collection-preview/preview-collection.component'

import { connect } from "react-redux";
import {selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {
        collections.map(({ id, ...anotherCollectionProps }) => {
        return <CollectionPreview key={id} {...anotherCollectionProps} />;
      })
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
