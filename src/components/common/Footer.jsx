import React from 'react'
import cptn from '../../assets/img/Hunger-Captian.png'

export default function Footer() {
  return (
    <div>
        <div className="bottom">
        <img src={cptn} alt='' />
        <p>Premium Quality food at the best and most affordable price. <br /> We have a new offer every day for 365 days</p>
        <div className="contact">
          {' '}
          <p>Contact<br />E-mail:quickfood@Hungercaptain.com | Hotline: +1 131 138 138{' '}<br /></p>
        </div> 
        <div className="line"></div>
        <div className="cr">
          <p>DESIGN BY HUNGER CAPTAIN - © 2022. ALL RIGHTS RESERVED.</p>
        </div>
    </div>
    </div>
  )
}
