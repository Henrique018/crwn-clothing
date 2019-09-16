import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";

import { connect } from "react-redux";
import {selectCartItemCount} from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from "../../redux/cart/cart.actions";



const CartIcon = ({ toggleCartHidden, quantity}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{quantity}</span>
  </div>
);


const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state =>({
  quantity: selectCartItemCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
