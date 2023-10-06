import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../Button";
import "./SpotDetailsCard.css";
const SpotDetailsCard = () => {
  const spot = useSelector((state) => state.spots.spot);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [error, setError] = useState({});
  useEffect(() => {
    const error = {};
    if (new Date(checkIn) > new Date(checkOut)) {
      error.message = "checkOut after checkIn";
    }
    console.log(error);
    setError(error);
  }, [checkIn, checkOut]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <ul className="spot-image-wrapper">
        {spot.spot_image?.length && (
          <>
            <li>
              <img src={spot.spot_image[0].spot_image_url} alt="" />
            </li>
            {spot.spot_image.map((item, index) => (
              <li key={item.id}>
                <img src={item.spot_image_url} alt="" />
              </li>
            ))}
          </>
        )}
      </ul>
      <div className="spot-text-wrapper">
        <h2 className="spot-title">
          {spot.title}, in {spot.city}, {spot.state}
        </h2>

        <p>{spot.address} </p>
        <p>{spot.description}</p>
        <p>{spot.lat}</p>
        <p>{spot.long}</p>

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

        <span className="spot-error">{error.message} </span>
      </form>

      <ul>
        {spot.reviews?.length &&
          spot.reviews.map((item) => (
            <li key={item.id}>
              <p>{item.rating}</p>
              <p>{item.review}</p>
              <p> {item.created_at}</p>

              <img src={item.user.user_image_url} alt="" />
              <p>{item.user.first_name}</p>
              <p>{item.user.last_name}</p>
              {item.review_image.length && (
                <ul>
                  {item.review_image.map((el) => (
                    <li>
                      <img src={el.review_image_url} alt="" />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default SpotDetailsCard;
