import react from 'react';
import React, { useState } from 'react';
import Button from '../../Utils/Button';
import './Product.css';

function Product(props) {
    const [amount, setAmount] = react.useState(props.product.amount);

    return (
        <li>
            <img src={props.product.imgProduct} alt={props.product.nameProduct} className="imgProduct" />
            <div className="contentInfo">
                <h2 className="titleProduct"> {props.product.nameProduct} </h2>
                <p className="descriptionProduct"> {props.product.description} </p>
                <label> ${props.product.costProduct}/unit </label>
                <div className="contentButtons">
                    <Button type="button" value="-" classStyle="buttonLeft" onClick={() => setAmount(amount - 1)} />
                    <span className="amount">{amount} </span>
                    <Button type="button" value="+" classStyle="buttonRight" onClick={() => setAmount(amount + 1)} />
                </div>
            </div>
        </li>
    );
}

export default Product;