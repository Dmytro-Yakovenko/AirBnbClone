import React from 'react'
import "./Modal.css"
import { NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { setModalId } from '../../store/modalReducer'
import Button from '../Button'
import Dates from '../Dates'
const Modal = () => {
  const id  = useSelector(state=>state.modal.modalId)
  const booking = useSelector(state => state.booking.bookDetails)
  console.log(booking, 444444)
  const modalConfig = {
    bookingOk:{
      title:"Booking",
      text:"Your booking reserved",
      body:"",
      className:'modal-content-standart',
      action: (
        <div className="btn-wrapper">
          <NavLink to={`/bookings/${booking?.id}`}>OK</NavLink>
        </div>
      ),
    },
    featureComing: {
      title: "Pay services",
      text: "Feature coming soon",
     body:"",
     className:'modal-content-standart',
      action: (
        <div className="btn-wrapper">
          <Button onClick={handleClose} id="featureSubmit" />
  
          <Button onClick={handleClose}  id="featureCancel" />
        </div>
      ),
    },
    editDates:{
      title:"Edit dates",
      text:"Are you sure you want to change dates", 
      body:<Dates/>,
      className:'modal-content-edit',
      action:(<div className='btn-wrapper'>
        <Button id="editSubmit"/>
        <Button id="editCancel"/> 
      </div>)
    }
  };
  const modal = modalConfig[id]
  const dispatch = useDispatch()
  function handleClose(){
    dispatch(setModalId(null))
  }
  return (
    <>
   {id && 
 <div className='modal' >

 <div className={`modal-content ${modal.className}`}>
   <span onClick={handleClose} className="close">&times;</span>
   <h2>{modal.title}</h2>
   <p>{modal.text}</p>
   {modal.body && modal.body}
   {modal.action}
 </div>

</div>
    
   }
   

  </>
  )
}

export default Modal