import React, { useEffect, useState } from 'react'
import "./EditSpotPage.css"
import { useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneSpot } from '../../store/spotReducer'
import  Button from '../../components/Button'


const EditSpotPage = () => {
  const dispatch = useDispatch()   
  const {id}= useParams()
  const spot = useSelector(state=>state.spots.spot)
  const history = useHistory
 
  const [title, setTitle]= useState("")
  const [description,setDescription] = useState(spot?.description)
  const [address, setAddress] = useState(spot?.address)
  const [city, setCity] = useState(spot?.city)
  const [state, setState] = useState(spot?.state)
  const [country, setCountry] = useState(spot?.country)
  const [lat, setLat] = useState(spot?.lat)
  const [long, setLong] = useState(spot?.long)
//   const [images, setImages]= useState(spot?.spot_image?.reduce((acc,curr)=>{
//     acc[curr.id]=curr.spot_image_url
   
//     return acc
// }
//     ,{}))
useEffect(()=>{
  if(id){
    dispatch(getOneSpot(id))
  }

// if(spot.title){
//   setTitle(spot?.title)
// }
},[id, dispatch])


//   useEffect(()=>{
// setTitle(spot?.title)
//   },[spot])
  return (
    <div className='edit-spot-page-container'>
        <h2> Update Spot</h2>
        <form className='edit-spot-page-form'>
            <label>
            Title
            <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </label>

            <label>
            Description
            <input value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </label>

            <label>
            Address
            <input value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </label>

            <label>
            City
            <input value={city} onChange={(e)=>setCity(e.target.value)}/>
            </label>

            <label>
            State
            <input value={state} onChange={(e)=>setState(e.target.value)}/>
            </label>

            <label>
            Country
            <input value={country} onChange={(e)=>setCountry(e.target.value)}/>
            </label>

            <label>
            Lattitude
            <input value={lat} onChange={(e)=>setLat(e.target.value)}/>
            </label>

            <label>
            Longtitude
            <input value={long} onChange={(e)=>setLong(e.target.value)}/>
            </label>
         <>
         {/* {spot?.spot_image?.length >0 && images && spot?.spot_image?.map((item, index)=>(
              <label>
              Image url
              <input value={images[item.id]} onChange={(e)=>setLong(e.target.value)}/>
              </label>
         ))} */}
         </>

         <div className='edit-spot-page-buttons'>
         <Button id='editSpot'/>
         <Button 
         onClick={()=>{history.push(`/spots/${id}`)}}
         id='cancelEditSpot'/>

         

         </div>
     
         

        </form>
      
    </div>
  )
}

export default EditSpotPage