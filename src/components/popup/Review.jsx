import React, { useEffect, useState } from 'react'
// import heart from '../../assets/img/Icon awesome-heart.png'
// import down from '../../assets/img/Icon awesome-thumbs-down.png'
import Reaction0 from '../../assets/img/notgood.png'
import Reaction1 from '../../assets/img/goodimg.png'
import Reaction2 from "../../assets/img/verygood.png"
import Reaction3 from "../../assets/img/excellent.png"
import close from '../../assets/img/close.png'
import API from '../../API'
const api = new API();

const Review = ({ selectedItemId, setSelectedItemId, setShowReviews }) => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    api.getReview(selectedItemId).then((review) => {
      setSelectedItemId(null);
      setReview(review);
    });
  }, []);

  const getImgReaction = (like_count) => {
    switch (like_count) {
      case 1:
        return Reaction1;
      case 2:
        return Reaction2;
      case 3:
        return Reaction3;
      default:
        return Reaction0;
    }
  };

  return (
    <div className='reviews'>
        <div className="card" id="review">
            <div className="pict">
                <img src={close} onClick={() => setShowReviews(false)} alt="" />
            </div>
            {/* <div>{review.results.length ==0 && <>NO REVIEWS</>}</div> */}
            <ul className="container">
              <p>Reviews for <strong>{review.name}</strong></p>
                {review &&review.results&& review.results.length> 0&&
                review.results.map((review) => ( 
                  <div>
                    <div className='rate'>
                      <button>
                        <img src={getImgReaction(review.like_count)} alt='' />
                      </button>
                    </div>
                    <div className='rate-after'>
                      <button>
                        <img src={getImgReaction(review.like_count)} alt='' />
                      </button>
                    </div>
                    <div id="in">
                        <div className="rp">
                            <label>{review.name}</label>
                            <p>{review.body}</p><br />
                            <div className="line"></div>
                        </div>
                    </div>
                  </div>
                ))}
            </ul>
        </div>
    </div>
  )
};
export default Review;
