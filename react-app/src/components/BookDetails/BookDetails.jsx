import React from "react";
import "./BookDetails.css";
import { useSelector } from "react-redux";

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const BookDetails = () => {
  const dates = useSelector((state) => state.booking.dates);
  const formatDate = (dates) => {
    if (dates) {
      const checkIn = dates?.checkIn?.split("-");
      const checkOut = dates?.checkOut?.split("-");
      if (checkIn[0] === checkOut[0]) {
        return `${checkIn[2]}, ${months[checkIn[1] - 1]} - ${checkOut[2]}, ${
          months[checkOut[1] - 1]
        } ${checkIn[0]}`;
      }
      if(checkIn[0]<checkOut[0]){
        return `${checkIn[2]}, ${months[checkIn[1] - 1]} ${checkIn[0]} - ${checkOut[2]}, ${
            months[checkOut[1] - 1]
          } ${checkOut[0]}`;
      }
    }
  };
  return (
    <section>
      <h3> Your trip</h3>
      <p>dates: {formatDate(dates)}</p>
    </section>
  );
};

export default BookDetails;
