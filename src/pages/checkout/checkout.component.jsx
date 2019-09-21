import React from "react";
import "./checkout.styles.scss";

import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <header className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </header>
    {
      cartItems.length  ? (
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
      ) : (
      <span className="empty">Your cart is empty</span>
      )
    }
    <div className="total">{`TOTAL $${total}`}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
