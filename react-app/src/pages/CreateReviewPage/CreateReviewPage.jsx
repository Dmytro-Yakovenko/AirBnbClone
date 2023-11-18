import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import "./CreateReviewPage.css";
import CreateRating from "../../components/CreateRating";
import { useParams, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneSpot } from "../../store/spotReducer";
import { createNewReview } from "../../store/reviewReducer";


const CreateReviewPage = () => {
  const [review, setReview] = useState("");
  const [imageInputShow, setImageInputShow] = useState(false);
  const [newImage, setNewImage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newImage1, setNewImage1] = useState("");
  const [newImage2, setNewImage2] = useState("");
  const [newImage3, setNewImage3] = useState("");

  const user = useSelector((state) => state.session.user);
  const rating = useSelector((state) => state.rating.rating);

  const history = useHistory()
  const dispatch = useDispatch();
  const { id } = useParams();
  const spot = useSelector((state) => state.spots.spot);
  useEffect(() => {
    dispatch(getOneSpot(id));
  }, [dispatch, id]);

  useEffect(() => {
    const error = {};
    if (review.length < 5 && review.length > 1000) {
      error.review =
        "review shoud be longer than 5 and shorter than 1000 characters";
    }
    if (!newImage.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm)) {
      error["newImage"] = "image is incorect format";
    }
    if (!newImage1.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm) && newImage1) {
      error["newImage1"] = "image is incorect format";
    }

    if (!newImage2.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm) && newImage2) {
      error["newImage2"] = "image is incorect format";
    }

    if (!newImage3.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm) && newImage3) {
      error["newImage3"] = "image is incorect format";
    }

    setErrors(error);
  }, [review, newImage, newImage1, newImage2, newImage3]);

  const handleCreateReview = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (errors.review || errors.newImage) {
      return;
    }

    const formData = {
      review,
      user_id: user.id,
      rating: rating,
    };
    if (newImage) {
      formData["review_images"] = newImage;
    }
    if (newImage1) {
      formData["review_images1"] = newImage1;
    }

    if (newImage2) {
      formData["review_images2"] = newImage2;
    }
    if (newImage3) {
      formData["review_images3"] = newImage3;
    }

    dispatch(createNewReview(formData, id));
    history.push(`/spots/${id}`)
  };

  return (
    <main className="create-review-page-main">
      <div className="container">
        <div className="create-review-page-image-wrapper">
          <h2>{spot?.title}</h2>
          {spot?.spot_image?.length > 0 && (
            <img src={spot?.spot_image[0]?.spot_image_url} alt={spot?.title} />
          )}
          {!spot?.spot_image?.length && (
            <img
              src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1699019340/2cb95b1cbd97bb8c57797bab4d406884_pjx2rq.jpg"
              alt={spot?.title}
            />
          )}
        </div>

        <div className="create-review-page-container">
          <h4 className="create-review-page-title">Create Review</h4>
          <form
            className="create-review-page-form"
            onSubmit={handleCreateReview}
          >
            <label>
              {" "}
              Leave your review
              <div className="create-review-page-rating-wrapper">
                <CreateRating />
              </div>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="leave a review"
                rows={6}
              ></textarea>
              {errors.review && isSubmitted && (
                <span className="create-review-page-error">
                  {errors.review}
                </span>
              )}
            </label>
            {imageInputShow && (
              <label>
                add new image
                <input
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  placeholder="add new image"
                />
                {errors.newImage && isSubmitted && (
                  <span className="create-review-page-error">
                    {errors.newImage}
                  </span>
                )}
              </label>
            )}

            {imageInputShow && newImage && (
              <label>
                one more
                <input
                  value={newImage1}
                  onChange={(e) => setNewImage1(e.target.value)}
                  placeholder="add new image"
                />
                {errors.newImage1 && isSubmitted && (
                  <span className="create-review-page-error">
                    {errors.newImage1}
                  </span>
                )}
              </label>
            )}

            {imageInputShow && newImage1 && (
              <label>
                one more
                <input
                  value={newImage2}
                  onChange={(e) => setNewImage2(e.target.value)}
                  placeholder="add new image"
                />
                {errors.newImage2 && isSubmitted && (
                  <span className="create-review-page-error">
                    {errors.newImage2}
                  </span>
                )}
              </label>
            )}

            {imageInputShow && newImage2 && (
              <label>
                lastone
                <input
                  value={newImage3}
                  onChange={(e) => setNewImage3(e.target.value)}
                  placeholder="add new image"
                />
                {errors.newImage3 && isSubmitted && (
                  <span className="create-review-page-error">
                    {errors.newImage3}
                  </span>
                )}
              </label>
            )}
            <div className="create-review-page-review-wrapper">
              <div className="create-review-page-review-container">
                {!imageInputShow && (
                  <div className="create-review-page-icon-wrapper">
                    <Button
                      onClick={() => {
                        setImageInputShow(true);
                      }}
                      id="addPhoto"
                    />
                    {errors.newImage && isSubmitted && (
                  <span className="create-review-page-icon-error">
                    You should add at least on photo
                  </span>
                )}
                  </div>
                )}
              </div>

              <Button id="postReview" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateReviewPage;
