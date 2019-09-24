import React from "react";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/Crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import CartIcon from "../Cart-icon/cart-icon.component";
import CartDropdown from "../Cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (

  <HeaderContainer>

    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer >

      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>

    {currentUser ? (
      <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
    ) : (
      <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />

    </OptionsContainer>

    {hidden ? null : <CartDropdown />}

  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
