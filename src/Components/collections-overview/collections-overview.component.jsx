import React from "react";
import {CollectionsOverviewContainer} from './collection-overview.styles'
import CollectionPreview from '../collection-preview/preview-collection.component'

import { connect } from "react-redux";
import {selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";


const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {
        collections.map(({ id, ...anotherCollectionProps }) => {
        return <CollectionPreview key={id} {...anotherCollectionProps} />;
      })
      }
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
