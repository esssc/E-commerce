import React from "react";
import {connect} from 'react-redux';

import {removeItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";


import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItemFromCart, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => removeItem(cartItem)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={() => addItem(cartItem)}  className="arrow">&#10095;</div>
            </span>
            <span className="price">{price}£</span>
            <div onClick={() => removeItemFromCart(cartItem)} className="remove-button">&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});


export default connect(null, mapDispatchToProps)(CheckoutItem);