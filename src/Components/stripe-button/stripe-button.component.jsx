import React from "react";
import StripeCheckout from "react-stripe-checkout";

import icon from '../../assets/favicon.ico' 

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = `pk_test_8enLCyPSJS2MzQZhBcIXAdIc00I7zf4tM8`;

  const onToken = (token) => {
      console.log(token);
      alert('Payment succesfull')
  }
  return (
    <StripeCheckout
      label="PAY NOW!"
      name="Crwn Clothing Ltd."
      billingAddress
      shippingAddress
      image={icon}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      penelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
