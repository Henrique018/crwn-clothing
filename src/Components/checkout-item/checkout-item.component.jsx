import React from 'react';

import './checkout-item.styles.scss';

import  {connect} from 'react-redux';


const CheckoutItem = ({cartItem:{name,imageUrl,price,quantity},dispatch}) => {
    
 return(  
      <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="Cart Item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button">
            &#10005; {/* x */ }
        </div>
      </div>
 );
}


export default CheckoutItem;