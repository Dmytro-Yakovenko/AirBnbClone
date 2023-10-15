import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setDate } from '../../store/bookingReducer';
import { getOneSpot } from '../../store/spotReducer';
import { NavLink } from 'react-router-dom';
import {AiOutlineArrowLeft} from  'react-icons/ai';
import {AiOutlineMail} from "react-icons/ai"
import BookDetails from '../../components/BookDetails';
import Button from '../../components/Button';
import { setModalId } from '../../store/modalReducer';
const BookingPage = () => {
    const dispatch = useDispatch()
    const { search } = useLocation();
  const user = useSelector(state=>state.session.user)
  console.log(user ,55555555)
    const dates = useSelector(state=>state.booking.dates)
   const searchArr = search.slice(1).split("&")

    const searchObj = searchArr.reduce((acc, curr)=>{
      let temp = curr.split("=")
      acc[temp[0]]=temp[1]
      return acc
    },{})
    const{id, ...rest} = searchObj
useEffect(()=>{
  if(!dates){

    dispatch(setDate(rest))
    dispatch(getOneSpot(+id))
  }

},[search, dispatch])



const handleClick=()=>{
dispatch(setModalId("featureComing"))
}

  return (
    <main>
      <div className='container'>
      <NavLink to={`/spots/${id}`}>
        <AiOutlineArrowLeft/>
      </NavLink>
      <h2>Confirm and pay</h2>
      <BookDetails/>
      <p>
      Welcome back, {user.first_name}
      </p>
    
      <p>
      <AiOutlineMail /> {user.email}
      </p>
     
<Button id ="continue" onClick={handleClick}/>
      </div>
     

    </main>
  )
}

export default BookingPage