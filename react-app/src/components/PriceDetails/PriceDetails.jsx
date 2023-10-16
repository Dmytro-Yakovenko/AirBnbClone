import React from "react";
import "./PriceDetails.css";
import { useSelector } from "react-redux";
import { calculatePrice } from "../../utils/utils";

const PriceDetails = () => {
  const date = useSelector((state) => state.booking.dates);

  const spot = useSelector((state) => state.spots.spot);
  const amounts = calculatePrice(date);

  return (
    <section>
      {spot?.spot_image && (
        <img src={spot?.spot_image[0]?.spot_image_url} alt={spot.title} />
      )}
      <p>{spot.title}</p>
      <p>{spot.description}</p>
      <p>{spot?.reviews && spot.reviews[0].rating}</p>

      <h2>Price details</h2>
      <div>
        <div>
          <p>
            {" "}
            ${date?.price},00 x {amounts.days} nights
          </p>
          <p> ${amounts.price},00 </p>
        </div>

        <div>
          <p>Cleaning fee </p>
          <p> ${amounts.cleaningFee},00 </p>
        </div>

        <div>
          <p>AirBnB fee </p>
          <p> ${amounts.airbnbFee},00 </p>
        </div>

        <div>
          <p>Taxes </p>
          <p> ${amounts.taxes},00 </p>
        </div>

        <div>
          <p>Taxes </p>
          <p> ${amounts.totalPrice},00 </p>
        </div>
      </div>
    </section>
  );
};

export default PriceDetails;
