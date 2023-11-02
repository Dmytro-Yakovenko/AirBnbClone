import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import "./CreateReviewPage.css";
import CreateRating from "../../components/CreateRating";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneSpot } from "../../store/spotReducer";

const CreateReviewPage = () => {
  const [review, setReview] = useState("");
  const dispatch = useDispatch()
  const {id} = useParams()
  const spot = useSelector(state=>state.spots.spot)
  useEffect(()=>{
    dispatch(getOneSpot(id))
  },[dispatch, id])
  return (
    <main className="create-review-page-main">
        <div className="container">
        <h2>{spot?.title}</h2>
        <img src={spot?.spot_image[0]?.spot_image_url} alt={spot.title}/>
      <div className="create-review-page-container">
        <h4 className="create-review-page-title">Create Review</h4>
        <form className="create-review-page-form">
          <label>
            <div className="create-review-page-rating-wrapper">
              <CreateRating />
            </div>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="leave a review"
              rows={10}
            ></textarea>
          </label>
<div className="create-review-page-review-wrapper">
<Button id="addPhoto"/>
          <Button id="postReview"/>
</div>
      
        </form>
      </div>
      </div>
    </main>
  );
};

export default CreateReviewPage;
