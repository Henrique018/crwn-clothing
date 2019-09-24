import React from "react";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles'


import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
import StripeButtonCheckout from '../../Components/stripe-button/stripe-button.component';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";

const Checkout = ({ cartItems, total }) => (
  <CheckoutPageContainer>

    <CheckoutHeaderContainer>

      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
 
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      
      <HeaderBlockContainer>
        <span>Remove</span>
        </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {
      cartItems.length  ? (
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
      ) : (
      <span className="empty">Your cart is empty</span>
      )
    }

    <TotalContainer>{`TOTAL $${total}`}</TotalContainer>

    <WarningContainer>
      *please use the following test creddit card <br /> 4242 4242 4242 4242 - Exp: 01/20 Cvv:123
    </WarningContainer>

    <StripeButtonCheckout className="button" price={total}/>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
