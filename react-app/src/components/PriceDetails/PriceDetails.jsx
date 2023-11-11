import React from "react";
import "./PriceDetails.css";
import { useSelector } from "react-redux";
import { calculatePrice } from "../../utils/utils";
import { AiFillStar } from 'react-icons/ai';

const PriceDetails = () => {
  const date = useSelector((state) => state.booking.dates);

  const spot = useSelector((state) => state.spots.spot);
  const amounts = calculatePrice(date);

  const handleError = (e) => {
   
    e.target.src =
      "https://res.cloudinary.com/dr1ekjmf4/image/upload/v1691726195/bc2d04276b5bfde9bce68c7a91914b7f_mi6kmp.jpg";
  };


  return (
    <section className="page-details-section">
      <div className="price-details-spot-info">
      {spot?.spot_image?.length>0 && (
     
       <img className="price-details-image" 
        onError={handleError} 
        src={spot?.spot_image[0]?.spot_image_url} alt={spot.title} />
      )}{spot?.spot_image?.length===0 && 
        <img className="price-details-image" 
      
        src=  "https://res.cloudinary.com/dr1ekjmf4/image/upload/v1699155634/031bf1de0a04795094b6b3a463aaa2d0_oo8jxj.jpg" alt={spot.title} />
      }
      <div className="page-details-text-info">
      <p>{spot.title}</p>
      <p>{spot.description}</p>
      <p className="page-details-rating"> <AiFillStar className="page-details-star"/> {  spot?.reviews && spot?.reviews[0]?.rating}</p>

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
