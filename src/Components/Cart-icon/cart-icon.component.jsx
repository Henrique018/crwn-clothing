import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";

import { connect } from "react-redux";
import {selectCartItemCount} from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {createStructuredSelector} from 'reselect'



const CartIcon = ({ toggleCartHidden, quantity}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{quantity}</span>
  </div>
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
