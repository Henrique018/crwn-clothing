import React from "react";

import {
  CartItemContainer,
  ItemImageContainer,
  ItemDetails,
  Name
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ItemImageContainer src={imageUrl} alt="item" />
    <ItemDetails>
      <Name>{name}</Name>
      <Name>
        {quantity} X {price}
      </Name>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
