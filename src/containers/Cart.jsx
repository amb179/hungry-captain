import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import brush from '../assets/img/Brush_1_.png'

import { useSelector, useDispatch } from 'react-redux'
import { getCarts, getSubtotal } from '../reducks/carts/selectors'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'


export default function 
() {
  const carts = useSelector(getCarts)
  const subtotal = useSelector(getSubtotal)
console.log('sdfghj', carts)


  return (
    <div >
      <Header />
      <div id='cart'>
        <h2>Cart</h2>
        <img src={brush} alt='' />
      </div>  
      {carts && carts.length > 0 && carts.map ((cart)=> <CartItem item={cart.item} />)}
      <div class="back"> 
      <Link to='/' >
        <button>BACK TO HOME</button>
      </Link>
        <p>Total Cost : <strong>${subtotal}</strong></p>
      </div>
    <Footer />
    </div>
  )
}
