import React from "react";
import "./Modal.css";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setModalId } from "../../store/modalReducer";
import Button from "../Button";
import Dates from "../Dates";
import { deleteProfile } from "../../store/session";
import { deleteSpot } from "../../store/spotReducer";

const Modal = () => {
  const modalInfo = useSelector((state) => state.modal.modalInfo);
  const dispatch = useDispatch()
  const history = useHistory()

  const handleEdit=()=>{
  
  }

  const handleDeleteSpot=()=>{
    dispatch(deleteSpot(modalInfo.currentId))
    handleClose()
    history.push("/")
    
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



    deleteUser: {
      title: "Delete User",
      text: "Are you sure you want to delete user?",
      body: "",
      className: "modal-content-edit",
      action: (
        <div className="btn-wrapper">
          <Button id="deleteModalProfile"  onClick={()=>{
            handleClose()
            dispatch(deleteProfile(modalInfo?.currentId))
            history.push('/')
          }}/>
        
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

    deleteSpot: {
      title: "Delete Spot",
      text : "Are you sure you want to delete your spot",
      body: "",
      className: "modal-content-edit",

      action: (
        <div className="btn-wrapper">
          <Button id="deleteModalSpot"  onClick={handleDeleteSpot}/>
          <Button id="editCancel" onClick={handleClose}/>

        </div>
      ),

    },


    deleteReview: {
      title: "Delete Review",
      text : "Are you sure you want to delete your review",
      body: "",
      className: "modal-content-edit",
      action: (
        <div className="btn-wrapper">
          <Button id="deleteReview"  onClick={handleDeleteSpot}/>
          <Button id="editCancel" onClick={handleClose}/>

        </div>
      ),
    }



  };
  const modal = modalConfig[modalInfo?.modalId];


  function handleClose() {
    dispatch(setModalId(null));
  }
  return (
    <>
      {modalInfo?.modalId && (
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
