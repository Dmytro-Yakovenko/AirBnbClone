import React from "react";
import "./Modal.css";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setModalId } from "../../store/modalReducer";
import Button from "../Button";
import Dates from "../Dates";

const Modal = () => {
  const id = useSelector((state) => state.modal.modalId);
  const dispatch = useDispatch()
  const history = useHistory()

  const handleEdit=()=>{
  
  }
 

  const handleBookOk = () => {
    history.push("/")
    handleClose()
  };

  const modalConfig = {
    bookingOk: {
      title: "Booking",
      text: "Your booking reserved",
      body: "",
      className: "modal-content-standart",
      action: (
        <div className="btn-wrapper">
          <Button id="bookOk" onClick={handleBookOk}>
            OK
          </Button>
        </div>
      ),
    },
    featureComing: {
      title: "Pay services",
      text: "Feature coming soon",
      body: "",
      className: "modal-content-standart",
      action: (
        <div className="btn-wrapper">
          <Button onClick={handleClose} id="featureSubmit" />

          <Button onClick={handleClose} id="featureCancel" />
        </div>
      ),
    },
    editDates: {
      title: "Edit dates",
      text: "Are you sure you want to change dates",
      body: <Dates />,
      className: "modal-content-edit",
      action: (
        <div className="btn-wrapper">
          <Button id="editSubmit"  onClick={handleEdit}/>
          <Button id="editCancel" onClick={handleClose}/>

        </div>
      ),
    },

    deleteProfile: {
      title: "Delete Profile",
      text: "You can not delete demo user",
      body: "",
      className: "modal-content-edit",
      action: (
        <div className="btn-wrapper">
          <Button id="deleteModalProfile"  onClick={handleClose}/>
        
        </div>
      ),
    },


    updateProfile: {
      title: "Update Profile",
      text: "You can not update demo user",
      body: "",
      className: "modal-content-edit",
      action: (
        <div className="btn-wrapper">
          <Button id="deleteModalProfile"  onClick={handleClose}/>
        
        </div>
      ),
    },


  };
  const modal = modalConfig[id];



  function handleClose() {
    dispatch(setModalId(null));
  }
  return (
    <>
      {id && (
        <div className="modal">
          <div className={`modal-content ${modal.className}`}>
            <span onClick={handleClose} className="close">
              &times;
            </span>
            <h2>{modal.title}</h2>
            <p>{modal.text}</p>
            {modal.body && modal.body}
            {modal.action}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
