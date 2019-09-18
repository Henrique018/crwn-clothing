import { createSelector } from "reselect";

//select the cart state
const selectCart = state => state.cart;

//select the cartItems in the state
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

//select cart hidden in the state
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

//takes the item.quantity and add +1 if the action is called
export const selectCartItemCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => {
    return cartItems.reduce(
      (accumulator, cartItem) =>
        accumulator + cartItem.quantity * cartItem.price,
      0
    );
  }
);
