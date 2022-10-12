import React ,{ useState } from 'react'
import close from '../../assets/img/close.png'
import Reaction1 from "../../assets/img/goodimg.png";
import Reaction2 from '../../assets/img/verygood.png'
import Reaction3 from '../../assets/img/excellent.png'
import Reaction4 from '../../assets/img/notgood.png'
// import heart from '../../assets/img/goodimg.png'
// import down from '../../assets/img/down.png'
import API from '../../API'


const api = new API();

const WriteReview = ({
  selectedItemId,
  setSelectedItemId,
  setShowWriteReview,
}) => {
  const [likeCount, setLikeCount] = useState(1),
    [name, setName] = useState(""),
    [body, setBody] = useState("");

  const inputName = (event) => {
    setName(event.target.value);
  };

  const inputBody = (event) => {
    setBody(event.target.value);
  };

  const sendReviewButton = () => {
    console.log(likeCount);
    let rate=''
    if(likeCount===1){
      rate='Not Good'
    }
    else if(rate===5){
      rate='Good'
    }
    else if(rate===10){
      rate='Very Good'
    }
    else{
      rate='Excellent'
    }
    api.writeReview(selectedItemId, name,rate, body, likeCount).then((review) => {
      alert("Your review has been sent. Thank you for your review!");
      setName("");
      setBody("");
      setLikeCount(1);
      setSelectedItemId(null);
      setShowWriteReview(false);
    });
  };

  
  return (
    <div>
        <div className="card" id="review">
            <div className="pict">
                <img src={close} onClick={() => setShowWriteReview(false)} alt="" />
            </div>
            <div className="container">
                <h4>Write Review</h4>
                <p>Choose your thought</p>
                <div className="rate">
                    <button onClick={() => setLikeCount(5)}>
                        <img src={Reaction1} alt="" />
                        {/* <p>GOOD</p> */}
                    </button>
                    <button onClick={() => setLikeCount(10)}>
                        <img src={Reaction2} alt="" />
                        {/* <p>VERY GOOD</p> */}
                    </button>
                    <button onClick={() => setLikeCount(15)}>
                        <img src={Reaction3} alt="" />
                        {/* <p>EXCELLENT</p> */}
                    </button>
                    <button onClick={() => setLikeCount(1)}>
                        <img src={Reaction4} alt="" />
                        {/* <p>NOT GOOD</p> */}
                    </button>
                </div>
                <div className="rate-after">
                    <button onClick={() => setLikeCount(5)}>
                        <img src={Reaction1} alt="" />
                        {/* <p>GOOD</p> */}
                    </button>
                    <button onClick={() => setLikeCount(10)}>
                        <img src={Reaction2} alt="" />
                        {/* <p>VERY GOOD</p> */}
                    </button>
                    <button onClick={() => setLikeCount(15)}>
                        <img src={Reaction3} alt="" />
                        {/* <p>EXCELLENT</p> */}
                    </button>
                    <button onClick={() => setLikeCount(1)}>
                        <img src={Reaction4} alt="" />
                        {/* <p>NOT GOOD</p> */}
                    </button>
                </div>
                <div id="in">
                    <input onChange={inputName} type="text" name='name' placeholder="Enter Your Name" required/><br />
                    <textarea onChange={inputBody} type="text" name='body' placeholder="Enter Your Feedback / Review"  required></textarea>
                    <button onClick={sendReviewButton}>SEND REVIEW</button>
                </div>
            </div>
        </div>
    </div>
  );
};
export default WriteReview;
