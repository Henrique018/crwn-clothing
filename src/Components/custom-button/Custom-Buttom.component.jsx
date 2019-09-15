import React from 'react';
import './Custom-button.styles.scss';

const CustomButton = ({ children, reversed,isGoogleSignIn, ...otherProps }) => (
  <button className={
    `${isGoogleSignIn ? 'google-sign-in' : ''}
    ${reversed ? 'reversed' : ''}
  custom-button`} {...otherProps}>
    {children}
  </button>
);


export default CustomButton;