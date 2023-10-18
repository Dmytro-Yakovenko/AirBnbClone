import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setDate } from "../../store/bookingReducer";
import { getOneSpot } from "../../store/spotReducer";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import BookDetails from "../../components/BookDetails";


import PriceDetails from "../../components/PriceDetails";

import "./BookingPage.css"

const BookingPage = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
 
  
  const dates = useSelector((state) => state.booking.dates);
  const searchArr = search.slice(1).split("&");

  const searchObj = searchArr.reduce((acc, curr) => {
    let temp = curr.split("=");
    acc[temp[0]] = temp[1];
    return acc;
  }, {});
  const { id, ...rest } = searchObj;
  useEffect(() => {
    if (!dates) {
      dispatch(setDate(rest));
      dispatch(getOneSpot(+id));
    }
  }, [search, dispatch]);

 

  return (
    <main className="booking-page-main">
      <div className="booking-page-container">
        <NavLink className="booking-page-link" to={`/spots/${id}` }>
          <AiOutlineArrowLeft />
          <h2 className="booking-page-title">Confirm and pay</h2>
        </NavLink>
        <div className="booking-page-wrapper">
        <div>
         
          <BookDetails />
         
        </div>
       
          <PriceDetails />
        </div>
      </div>
    </main>
  );
};

export default BookingPage;
