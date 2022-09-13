import React from 'react'
import shapeDown from '../assets/img//shape-down-1.png'
import column from '../assets/img/shutterstock_136631573.png'
import { useSelector, useDispatch } from 'react-redux';
import { increaseCart, decreaseCart } from '../reducks/carts/operations';

export default function CartItem({item}) {
  const dispatch = useDispatch();

  const clickPlusCart = () => {
      dispatch(increaseCart(item));
  };
  const clickMinusCart = () => {
      dispatch(decreaseCart(item));
  };

  console.log('sdfghjkl;',item);
  return (
    <>
    <div class="r">
        <div class="container" id="pie">
            <div class="column left" >
                <img src={item.image} />
                {/* <img id='break' src={shapeDown} alt=""/> */}
                {/* <div class="break">
                    
                </div> */}
            </div>
            <div class="column right">
                <h4><strong>{item.name}</strong></h4>
                <p>{item.description}</p>
                {/* <div className="number-1">   
                    <div className="number">
                        <span className="minus" onClick={clickMinusCart}>
                        －
                        </span>
                        <span className="count">{}</span>
                        <span className="plus" onClick={clickPlusCart}>
                        +
                        </span>
                    </div>
                </div> */}
                
                <div class="p">
                        <p>${item.price}</p>
                    </div>
            </div>
        </div>
    </div> 
    </>
  )
}
