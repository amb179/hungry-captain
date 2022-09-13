import React from 'react'
import shapeDown from '../../assets/img/shape-down-1.png'
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations'
import {getCarts} from '../../reducks/carts/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'




const CartItem = ({ quantity, cartId}) => {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    console.log('carts', carts);

    const clickPlusCart = () => {
        dispatch(increaseCart(cartId));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(cartId));
    };

    useEffect(() => {
        console.log(carts.image);
        console.log(carts);
        console.log(carts);
    })


  return (
        <div className="r" >
            <div className="container" id="subm">
                <div className="column left" >
                    <img src={carts.image} alt='' />
                    <div className="break">
                        <img src={shapeDown} alt="" />
                    </div>
                </div>
                <div className="column right">
                    <h4>{carts.item.name}</h4>
                    <p>{carts.message}</p>
                    <div className="add">
                        <input type='button' value="+" onclick={clickPlusCart} />
                        <span id="output">{quantity}</span>
                        <input type='button' value="-" onclick={clickMinusCart} />
                    </div>
                    <div className="p">
                            <p>${carts.price}</p>
                        </div>
                    <div className="cart">
                        <button>ADD TO CART</button> 
                    </div>
                </div>
            </div>
        </div>
  );
};
export default CartItem;