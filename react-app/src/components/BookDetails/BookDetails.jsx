import React from "react";
import "./BookDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {formatDate} from "../../utils/utils"
import { AiOutlineMail } from "react-icons/ai";
import Button from "../../components/Button";
import { setModalId } from "../../store/modalReducer";
import "./BookDetails.css"

const BookDetails = () => {
  const dispatch = useDispatch();
  const dates = useSelector((state) => state.booking.dates);
  const user = useSelector((state) => state.session.user);


  const handleClick = () => {
    dispatch(setModalId("featureComing"));
  };
  return (
    <section className="book-details-section">
      <h3 className="book-details-title"> Your trip</h3>
      <p>dates: {formatDate(dates)}</p>

      <p>Welcome back, {user.first_name}</p>

<p>
  <AiOutlineMail /> {user.email}
</p>

<Button id="continue" onClick={handleClick} />
    </section>
  );
};

export default BookDetails;
