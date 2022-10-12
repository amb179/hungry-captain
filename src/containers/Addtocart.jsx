import React from 'react'
import Header from '../components/common/Header'
import brush from '../assets/img/Brush_1_.png'
import Footer from '../components/common/Footer'
import { fetchFromLocalStorage } from '../reducks/carts/operations'
import { getCarts, getSubtotal } from '../reducks/carts/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../reducks/items/selectors'
import { useEffect } from 'react'
import { fetchItems } from '../reducks/items/operations'
import { push } from 'connected-react-router'
import CartItem from '../components/common/CartItem'




const Addtocart = () => {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const items = getItems(selector);
    const carts = getCarts(selector);
    const price = getSubtotal(selector)

    useEffect (() => {
        dispatch(fetchItems());
        dispatch(fetchFromLocalStorage());
    }, []);
    console.log('carts', carts);

  return (
    <div>
        <Header />
        <div className="home">
            <h3 style={{color:'firebrick', textAlign: 'center', fontSize: '2vw'}}>Cart</h3>
            <img src={brush} style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', bottom:'-73%'}} alt='' />
        </div>

        <section className="order">
            <div className="items">
                <div className="carts">
                {carts.items && carts.length
                    ? carts.map((carts) => (
                        <CartItem
                        cart={carts.items}
                        cartId={carts.id}
                        key={carts.items.id}
                        quantity={carts.quantity}
                        />
                    ))
                    : "Not An Array"}
                </div>
            </div>
        </section>

        <div className="back">
            <button onClick={() => dispatch(push('/'))}>BACK TO HOME</button>
            <p>Total Cost : <strong>${price}</strong></p>
        </div>

        <Footer />
    </div>
  );
};
export default Addtocart;