import React from 'react'
import brush from '../assets/img/Brush_1_.png'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Item from '../components/common/Item'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {fetchItems} from '../reducks/items/operations'
import { getItems } from '../reducks/items/selectors'
import { useState } from 'react'
import { getCarts, getSubtotal } from '../reducks/carts/selectors'
import { fetchFromLocalStorage } from '../reducks/carts/operations'
import WriteReview from '../components/popup/WriteReview'
import Review from '../components/popup/Review'
import { Link } from 'react-router-dom'

const Home  = () => {

  const dispatch= useDispatch()
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showCartList, setShowCartList] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState();
  const items = useSelector(getItems)
  const carts = useSelector(getCarts)
  const subtotal = useSelector(getSubtotal)
  console.log('items',items);
  const ShowRev = ()=>{
    setShowReviews(true)
    console.log(showReviews);
  }
  const [category, setCategory]= useState('')
  const handleClick=(params)=>{
    if(params===3){
    setCategory('Bagel')
    }
    else if(params===2){
    setCategory('Hot')
    }
    else if(params===1){
      setCategory('Cold')
    }
    else{
      setCategory('')
    }
  };

  useEffect(() => {
    if(items){
   
    dispatch(fetchItems(category));
    }
  },[category]);



  const showItem = (item) => {
    let selected_count = 0;
    if (carts[item.id] && carts[item.id].selected_count) {
      selected_count = carts[item.id].selected_count;
    }

    if (showCartList && carts[item.id] === undefined) {
      // if the page is cart page and item is not slected, show nothing.
      return;
    }

    return (
      <div>
        <Item
          key={item.id}
          item={item}
          selected_count={selected_count}
          setShowWriteReview={setShowWriteReview}
          setShowReviews={setShowReviews}
          setSelectedItemId={setSelectedItemId}
          ShowRev={ShowRev}
        />
      </div>
    );
  };

  return (
    <div className= 'home'>
        <Header />
        <h3>Our Most Popular Recipies</h3>
        <img src={brush} alt='' />
        <h3>Try our Most Delicious food and it usually take minitues to deliver!</h3>
        <div className="gl">
            <button className="shape" href='' onClick={() => handleClick('')}>All</button>
        
            <button onClick={()=>handleClick(2)} className="shape">HOT</button>
            
            <button className="shape" onClick={()=>handleClick(1)}>COLD</button>
            <button className="shape" onClick={()=>handleClick(3)}>BAGEL</button>
        </div>
        <div className="gl-after">
            <button className="shape" href='' onClick={() => handleClick('')}>All</button>
        
            <button onClick={()=>handleClick(2)} className="shape">HOT</button>
            
            <button className="shape" onClick={()=>handleClick(1)}>COLD</button>
            <button className="shape" onClick={()=>handleClick(3)}>BAGEL</button>
        </div>
        <div className='menu'>
          {items.results && items.results.length>0 && items.results.map((item)=>showItem(item) )}
        </div>
        <button id='check'><Link to='/cart'>CHECK YOU CART</Link></button>
        <Footer />
        {showWriteReview && (
        <WriteReview
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
          setShowWriteReview={setShowWriteReview}
        />
      )}
      {showReviews && (
        <Review
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
          setShowReviews={setShowReviews}
        />
      )}
    </div>
  );
};
export default Home;