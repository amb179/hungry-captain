import React from 'react'
import { useDispatch } from 'react-redux';
// import downShape from '../../assets/img/shape-down-1.png'
import cart from'../../assets/img/cart.png'
import heart from '../../assets/img/Icon awesome-heart.png'
import { addCart, decreaseCart, increaseCart } from '../../reducks/carts/operations';



const Item = ({
        item,
        selected_count,
        setShowWriteReview,
        setShowReviews,
        setSelectedItemId,

}) => {
    console.log(selected_count);
        const dispatch = useDispatch();
        const clickAddCart = () => {
            dispatch(addCart(item));
        };
        const clickPlusCart = () => {
            dispatch(increaseCart(item));
        };
        const clickMinusCart = () => {
            dispatch(decreaseCart(item));
        };
        const clickCheckReviews = () => {
            console.log('sdfghjkl');

            setSelectedItemId(item.id);
            setShowReviews(true);
        };
        const clickWriteReview = () => {
            setSelectedItemId(item.id);
            setShowWriteReview(true);
        };
        

    return (
        <div className="card" >
            <div className='item-img'>
                <img src={item.image}  alt=''/>
                {/* <img src={downShape} id='break' alt="" />   */}
            </div>
            <div className="container">
                <div className='like'>
                    <img src={heart} alt='' />
                    <p className='likecount'>({item.total_like_count})</p>
                </div> 
                <h4>{item.name}</h4>
                <div className="link">
                    <p onClick={clickWriteReview}>Write Review</p>
                    <p onClick={clickCheckReviews}>Check Reviews</p>
                </div>
                <div className='price'> 
                {selected_count === 0 ? (
                    <div className="cart">
                        <img src={cart} alt="" />
                        <button onClick={clickAddCart}>
                            
                            Add To Cart
                        </button> 
                    {console.log(selected_count,'selected count')}

                    </div>
                ) : (
                    <div className="number-1">
                       
                    <div className="number">
                        <span className="minus" onClick={clickMinusCart}>
                        －
                        </span>
                        <span className="count">{selected_count}</span>
                        <span className="plus" onClick={clickPlusCart}>
                        +
                        </span>
                        
                    </div>
                    </div>
                )}
                        <p>${item.price}</p>
                </div>
            </div>
        </div>
    );
};
export default Item;