import React from "react";
import {
  CollectionFooterContainer,
  CollectionItemContainer,
  CustomButtonContainer,
  ImageContainer,
  Name,
  Price
} from "./collection-item.styles.jsx";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions.js";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooterContainer>
      <CustomButtonContainer onClick={() => addItem(item)} reversed>
        ADD TO THE CART
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
