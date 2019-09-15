import React from 'react';
import './Collection-item.styles.scss'
import CustomButton from '../custom-button/Custom-Buttom.component'

import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions.js'

const CollectionItem = ({item, addItem})=>{
    const {imageUrl,name,price } = item;
    return(
        <div className='collection-item'>
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={()=> addItem(item)} reversed>ADD TO THE CART</CustomButton>
        </div>
    );
}

const mapDispatchToProps = (dispatch)=>({
    addItem: item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);
