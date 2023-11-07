import React from "react";
import "./BookDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { formatDate } from "../../utils/utils";
import { AiOutlineMail } from "react-icons/ai";
import Button from "../../components/Button";
import { setModalId } from "../../store/modalReducer";
import "./BookDetails.css";
import Payment from "../Payment";
import { createNewBooking } from "../../store/bookingReducer";

const BookDetails = () => {
  const dispatch = useDispatch();
  const dates = useSelector((state) => state.booking.dates);
  const user = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spots.spot);

  const handleEdit = () => {
  
    dispatch(setModalId({
      modalId:"editDates"
    }));
  };

  const handleClick =async () => {
    const res =await dispatch(
      createNewBooking(
        {
          check_in: dates.checkIn,
          check_out: dates.checkOut,
          spot_id: spot.id,
        },
        user.id
      )
     
    );
    if(res){
      dispatch(setModalId({
        modalId:"bookingOk"
      }))
    }
  };
  return (
    <section className="book-details-section">
      <h3 className="book-details-title"> Your trip</h3>

      <div className="book-details-edit-dates">
        <p>dates: {formatDate(dates)}</p>

        <Button onClick={handleEdit} id="editDates" />
      </div>

      <Payment />

      <p>Welcome back, {user.first_name}</p>

      <p className="book-details-mail-icon">
        <AiOutlineMail /> {user.email}
      </p>

      <Button id="continue" onClick={handleClick} />
    </section>
  );
};

export default BookDetails;
