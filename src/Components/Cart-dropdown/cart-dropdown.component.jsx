import React from 'react'
import './cart-dropdown.styles.scss'

import CustomButton from '../custom-button/Custom-Buttom.component'

const CartDropdown = () =>{
        return(
            <div className='cart-dropdown'>
                <div className="cart-items" />
                <CustomButton reversed >GO TO CHECKOUT</CustomButton>
            </div>
        )
}

export default CartDropdown;