import React from "react";


import {CartIconContainer,ShoppingIconContainer,ItemCount} from './cart-icon.styles.jsx'



import { connect } from "react-redux";
import {selectCartItemCount} from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {createStructuredSelector} from 'reselect'



const CartIcon = ({ toggleCartHidden, quantity}) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer />
    <ItemCount>{quantity}</ItemCount>
  </CartIconContainer>
);


const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  quantity: selectCartItemCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
