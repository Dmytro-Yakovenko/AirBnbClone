import React from "react";
import "./PriceDetails.css";
import { useSelector } from "react-redux";
import { calculatePrice } from "../../utils/utils";
import { AiFillStar } from 'react-icons/ai';

const PriceDetails = () => {
  const date = useSelector((state) => state.booking.dates);

  const spot = useSelector((state) => state.spots.spot);
  const amounts = calculatePrice(date);

  return (
    <section className="page-details-section">
      <div className="price-details-spot-info">
      {spot?.spot_image && (
        <img className="price-details-image" src={spot?.spot_image[0]?.spot_image_url} alt={spot.title} />
      )}
      <div className="page-details-text-info">
      <p>{spot.title}</p>
      <p>{spot.description}</p>
      <p className="page-details-rating"> <AiFillStar className="page-details-star"/> {  spot?.reviews && spot.reviews[0].rating}</p>

      </div>
      </div>
      <h2 className="price-details-title">Price details</h2>
      <div className="price-details-wrapper">
        <div  className="price-detils-fees">
          <p>
            {" "}
            ${date?.price},00 x {amounts.days} nights
          </p>
          <p> ${amounts.price},00 </p>
        </div>

        <div className="price-detils-fees">
          <p>Cleaning fee </p>
          <p> ${amounts.cleaningFee},00 </p>
        </div>

        <div className="price-detils-fees">
          <p>AirBnB fee </p>
          <p> ${amounts.airbnbFee},00 </p>
        </div>

        <div className="price-detils-fees">
          <p>Taxes </p>
          <p> ${amounts.taxes},00 </p>
        </div>

        <div className="price-detils-fees">
          <p className="page-detais-total">Total (USD) </p>
          <p className="page-detais-total"> ${amounts.totalPrice},00 </p>
        </div>
      </div>
    </section>
  );
};

export default PriceDetails;
