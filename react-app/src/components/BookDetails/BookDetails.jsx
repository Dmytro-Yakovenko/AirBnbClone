import React from "react";
import "./BookDetails.css";
import { useSelector } from "react-redux";
import {formatDate} from "../../utils/utils"


const BookDetails = () => {
  const dates = useSelector((state) => state.booking.dates);
 
  return (
    <section>
      <h3> Your trip</h3>
      <p>dates: {formatDate(dates)}</p>
    </section>
  );
};

export default BookDetails;
