import React from 'react'
import "./Modal.css"

import { useDispatch, useSelector } from 'react-redux'
import { setModalId } from '../../store/modalReducer'
import Button from '../Button'
const Modal = () => {
  const id  = useSelector(state=>state.modal.modalId)

  const modalConfig = {
    featureComing: {
      title: "Pay services",
      text: "Feature coming soon",
     
      action: (
        <div className="btn-wrapper">
          <Button onClick={handleClose} id="featureSubmit" />
  
          <Button onClick={handleClose}  id="featureCancel" />
        </div>
      ),
    },
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

 <div className="modal-content">
   <span onClick={handleClose} className="close">&times;</span>
   <h2>{modal.title}</h2>
   <p>{modal.text}</p>
   {modal.action}
 </div>

</div>
    
   }
   

  </>
  )
}

export default Modal