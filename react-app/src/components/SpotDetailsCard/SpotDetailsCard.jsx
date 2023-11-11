import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button";
import "./SpotDetailsCard.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { setDate } from "../../store/bookingReducer";
import { NavLink, Redirect } from "react-router-dom";
import { setModalId } from "../../store/modalReducer";

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SpotDetailsCard = () => {
  const spot = useSelector((state) => state.spots.spot);
  
  const user = useSelector((state) => state.session.user);

  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const error = {};
    if (new Date(checkIn) >= new Date(checkOut)) {
      error.message = "checkOut after checkIn";
    }

    setError(error);
  }, [checkIn, checkOut]);

  const formatData = (data) => {
    const date = new Date(data);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return ` ${month} ${day}, ${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setDate({
        checkIn,
        checkOut,
        price: spot.price,
      })
    );
    if (!user) {
      history.push("/login");
      return;
    }
    history.push(
      `/booking?id=${spot.id}&checkIn=${checkIn}&checkOut=${checkOut}&price=${spot.price}`
    );
  };

  const handleError = (e) => {
    e.target.src =
      "https://res.cloudinary.com/dr1ekjmf4/image/upload/v1691726195/bc2d04276b5bfde9bce68c7a91914b7f_mi6kmp.jpg";
  };

  return (
    <section className="spot-section">
      <ul className="spot-image-wrapper">
        {!!spot.spot_image?.length && (
          <>
            <li>
              <img
                className="spot-details-card-image"
                src={spot.spot_image[0].spot_image_url}
                alt=""
              />
            </li>
            {spot.spot_image.map(
              (item, index) =>
                index > 0 && (
                  <li key={`spot_img_${item.id}`}>
                    <img
                      className="spot-details-card-image"
                      onError={handleError}
                      src={item.spot_image_url}
                      alt=""
                    />
                  </li>
                )
            )}
          </>
        )}
        {!spot.spot_image?.length && (
          <li>
            <img
              className="spot-details-card-image"
              src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1698849695/1e461b4afb5755045f2c2d841cc3c946_bf9cro.jpg"
              alt=""
            />
          </li>
        )}
      </ul>
      <div className="spot-text-wrapper">
        <h2 className="spot-title">
          {spot.title}, in {spot.city}, {spot.state}
        </h2>
        <div className="spot-details-card-text-wrapper">
          <div className="spot-details-text-wrapper">
            <p>{spot.address} </p>
            <p>{spot.description}</p>
            <p>{spot.lat}</p>
            <p>{spot.long}</p>
          </div>
          {(user.id===spot.owner_id) && 
          
          <div className="spot-details-button-wrapper">
            <NavLink 
            
            to={`/spots/${spot.id}/edit`}>Edit Spot</NavLink>

            <Button id="deleteSpot" 
            onClick={()=>{
              
              dispatch(  setModalId({modalId:"deleteSpot",currentId:spot.id}))
            }
            }
            />
            
            </div>
            }
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"
          width="600"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Humanity First Indonesia"
        />
      </div>
      <form className="spot-form" onSubmit={handleSubmit}>
        <div className="spot-form-container">
          <div className="input-wrapper">
            <label htmlFor="check-in">Check In</label>
            <input
              type="date"
              id="check-in"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="check-out">Check Out</label>
            <input
              type="date"
              id="check-out"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>

          <Button id="booking" disabled />
        </div>
        {error.message && <span className="spot-error">{error.message} </span>}
      </form>
      {!!spot.reviews?.length && (
        <ul>
          {spot.reviews.map((item) => (
            <li className="spot-reviews" key={item.id}>
              <div>
                {" "}
                Rating:
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.rating}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <NavLink
                  className="spot-review-link"
                  to={`/spots/${spot.id}/review/new`}
                >
                  Write a review
                </NavLink>
              </div>
              <div>
                <p>Review: </p>
                <p> {item.review}</p>
              </div>

              <div className="spot-review-wrapper">
                <p> {formatData(item.created_at)}</p>

                <img
                  className="user-image"
                  src={item.user.user_image_url}
                  alt=""
                />
                <p>
                  {item.user.first_name} {item.user.last_name}
                </p>
              </div>
              {item.review_image.length && (
                <ul>
                  {item.review_image.map((el) => (
                    <li key={`review_image_${el.id}`}>
                      <img
                        className="spot-review-image"
                        src={el.review_image_url}
                        alt=""
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
      {!spot.reviews?.length && (
        <div className="spot-form-container">
          <p>No reviews yet. You can leave you review </p>
          <NavLink className="continue-btn" to={`/spots/${spot.id}/review/new`}>
            Write a review
          </NavLink>
        </div>
      )}
    </section>
  );
};

export default SpotDetailsCard;
