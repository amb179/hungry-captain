import React from 'react'
import headerLogo from '../../assets/img/Untitled-1.png'
import breakImg from '../../assets/img/brkImg.png'
import whiteCaptn from '../../assets/img/Hunger-Captian-white.png'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Link } from 'react-router-dom'

export default function Header() {
  const dispatch = useDispatch();
  return (
    <div className='home'>
        <div className="pic">
            <img id='header' src={headerLogo} alt="" /> 
            <img src={breakImg} id='blur' alt='' /> 
             <div className="logo" onClick={() => dispatch(push('/'))}>
              <Link to='/'><img src={whiteCaptn} alt="" /></Link>
              
            </div>
        
            <h1 className='full'>Good food is <br /> The Foundation of <br /><span style={{color:"orange"}}>GENUINE HAPPINESS</span></h1>
            <h1 className='short'>Good food<br/>is The<br/>Foundation of<br/><span style={{color:"orange"}}>GENUINE</span><br/><span style={{color:"orange"}}>HAPPINESS</span></h1>
        </div>
        
    </div>
  );
};
