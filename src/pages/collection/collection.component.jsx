import React from "react";

import {CollectionPageContainer,TitleContainer,ItemsContainer} from './collection.styles'

import CollectionItem from "../../Components/Collection-item/Collection-item.component";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
    const {title,items} = collection; 
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {
            items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
