import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setDate } from '../../store/bookingReducer';
import { getOneSpot } from '../../store/spotReducer';
import { NavLink } from 'react-router-dom';
import {AiOutlineArrowLeft} from  'react-icons/ai';
import BookDetails from '../../components/BookDetails';

const BookingPage = () => {
    const dispatch = useDispatch()
    const { search } = useLocation();
 
    const dates = useSelector(state=>state.booking.dates)
   const searchArr = search.slice(1).split("&")
   console.log(dates, 3333333)
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


  return (
    <main>
      <div className='container'>
      <NavLink to={`/spots/${id}`}>
        <AiOutlineArrowLeft/>
      </NavLink>
      <h2>Confirm and pay</h2>
      <BookDetails/>

      </div>
     

    </main>
  )
}

export default BookingPage