import React, { useEffect, useState } from "react";
import "./EditReviewPage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReview, updateReview } from "../../store/reviewReducer";
import CreateRating from "../../components/CreateRating";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

const EditReviewPage = () => {
  const { spot_id, review_id } = useParams();
  const review = useSelector((state) => state.reviews.review);
  const rating = useSelector((state)=>state.rating.rating)
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [reviewValue, setReviewValue] = useState("");
  const [newImage, setNewImage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newImage1, setNewImage1] = useState("");
  const [newImage2, setNewImage2] = useState("");
  const [newImage3, setNewImage3] = useState("");

  const user = useSelector((state)=>state.session.user)
  const history = useHistory()
  useEffect(() => {
    dispatch(getReview(spot_id, review_id));
  }, [dispatch, spot_id, review_id]);

  useEffect(() => {
    setReviewValue(review.review);
    if (review && Array.isArray(review.review_image) && review.review_image.length > 0) {
        setNewImage(review.review_image[0].review_image_url);
      }

      if (review && Array.isArray(review.review_image) && review.review_image.length > 1) {
        setNewImage1(review.review_image[1].review_image_url);
      }
      if (review && Array.isArray(review.review_image) && review.review_image.length > 2) {
        setNewImage2(review.review_image[2].review_image_url);
      }
      if (review && Array.isArray(review.review_image) && review.review_image.length > 3) {
        setNewImage3(review.review_image[3].review_image_url);
      }
  }, [review]);

  useEffect(() => {
    const error = {};
    if (reviewValue?.length < 5 && reviewValue?.length > 1000) {
      error.review =
        "review shoud be longer than 5 and shorter than 1000 characters";
    }
    if (!newImage?.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm)) {
      error["newImage"] = "image is incorect format";
    }
    if (!newImage1?.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm) && newImage1) {
      error["newImage1"] = "image is incorect format";
    }

    if (!newImage2?.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm) && newImage2) {
      error["newImage2"] = "image is incorect format";
    }

    if (!newImage3?.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm) && newImage3) {
      error["newImage3"] = "image is incorect format";
    }

    setErrors(error);
  }, [reviewValue, newImage, newImage1, newImage2, newImage3]);


const handleSubmit=(e)=>{
    e.preventDefault()
    setIsSubmitted(true)
    if(errors.review || errors.newImage){
      return 
    }
    const formData = {
    
        review:reviewValue,
        user_id:user.id,
        rating:rating, 
        review_images:[]

      
    };
    if (newImage) {
      formData.review_images.push(newImage);
    }
    // if (newImage1) {
    //   formData["review_images1"] = newImage1;
    // }

    // if (newImage2) {
    //   formData["review_images2"] = newImage2;
    // }
    // if (newImage3) {
    //   formData["review_images3"] = newImage3;
    // }
    console.log(formData, 4444444)
    dispatch(updateReview(formData, spot_id, review_id))
    history.push(`/spots/${spot_id}`)

}

  return (
    <main className="edit-review-page-main">
      <div className="edit-review-page-container">
        <h2>Update Review</h2>
        <form 
        onSubmit={handleSubmit}
        className="edit-review-page-form">
          <label>
            Change Review Here
            <div className="edit-review-page-rating-wrapper">
              <CreateRating />
            </div>
            <textarea
              value={reviewValue}
              onChange={(e) => setReviewValue(e.target.value)}
              placeholder="Leave your review"
              rows={6}
            ></textarea>
            {errors.review && isSubmitted && (
              <span className="edit-review-page-error">{errors.review}</span>
            )}
          </label>
          <label>
            add new image
            <input
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              placeholder="add new image"
            />
            {errors.newImage && isSubmitted && (
              <span className="edit-review-page-error">
                {errors.newImage}
              </span>
            )}
          </label>
          {newImage && (
          <label>
            one more
            <input
              value={newImage1}
              onChange={(e) => setNewImage1(e.target.value)}
              placeholder="add new image"
            />
            {errors.newImage1 && isSubmitted && (
              <span className="edit-review-page-error">
                {errors.newImage1}
              </span>
            )}
          </label>
          )}
          {newImage1 && (
            <label>
              one more
              <input
                value={newImage2}
                onChange={(e) => setNewImage2(e.target.value)}
                placeholder="add new image"
              />
              {errors.newImage2 && isSubmitted && (
                <span className="edit-review-page-error">
                  {errors.newImage2}
                </span>
              )}
            </label>
          )}
          {newImage2 && (
            <label>
              lastone
              <input
                value={newImage3}
                onChange={(e) => setNewImage3(e.target.value)}
                placeholder="add new image"
              />
              {errors.newImage3 && isSubmitted && (
                <span className="edit-review-page-error">
                  {errors.newImage3}
                </span>
              )}
            </label>
          )}
            <div className="edit-review-page-review-wrapper">
            

              <Button id="updateReview" />
            </div>
        </form>
      </div>
    </main>
  );
};

export default EditReviewPage;
