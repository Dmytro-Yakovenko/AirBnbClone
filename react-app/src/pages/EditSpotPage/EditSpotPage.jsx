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
  const [description,setDescription] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [lat, setLat] = useState("")
  const [long, setLong] = useState("")
  const [price, setPrice] = useState("")
//   const [images, setImages]= useState(spot?.spot_image?.reduce((acc,curr)=>{
//     acc[curr.id]=curr.spot_image_url
   
//     return acc
// }
//     ,{}))
const [error, setError]=useState({})
const [isSubmitted, setIsSubmitted]=useState(false)

useEffect(() => {
  const error = {};
  if (title?.length > 25 || title?.length < 5) {
    error["title"] = "title is to long or to short";
  }
  if (description?.length > 25 || description?.length < 5) {
    error["description"] = "description is to long or to short";
  }
  if (address?.length > 25 || address?.length < 5) {
    error["address"] = "address is to long or to short";
  }
  if (address?.city > 25 || city?.length < 5) {
    error["city"] = "city is to long or to short";
  }
  if (state?.length > 25 || state?.length < 5) {
    error["state"] = "state is to long or to short";
  }

  if (country?.length > 25 || country?.length < 5) {
    error["country"] = "country is to long or to short";
  }

  if (lat?.length > 10 || lat?.length < 3) {
    error["lat"] = "Latitude is to long or to short";
  }
  if (!lat?.match(/^[0-9]*\.?[0-9]+$/gm)) {
    error["lat"] = "Latitude is incorect format";
  }

  if (long?.length > 10 || long?.length < 3) {
    error["long"] = "Longitude is to long or to short";
  }
  if (!long?.match(/^[0-9]*\.?[0-9]+$/gm)) {
    error["long"] = "Longitude is incorect format";
  }

  if (price?.length >= 8 || price?.length <= 5) {
    error["price"] = "Price is to long or to short";
  } // ^[0-9]*\.?[0-9]+$
  if (!price?.match(/^[0-9]*\.?[0-9]+$/gm)) {
    error["price"] = "price is incorect format";
  }
  // if (!imageUrl.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm)) {
  //   error["imageUrl"] = "image url is incorect format";
  // }
  // if (!imageUrl1.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm) && imageUrl1.length>0) {
  //   error["imageUrl1"] = "image url is incorect format";
   
  // }
  // if (!imageUrl2.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm)&& imageUrl2.length>0) {
  //   error["imageUrl2"] = "image url is incorect format";
  // }
  // if (!imageUrl3.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm)&& imageUrl3.length>0) {
  //   error["imageUrl3"] = "image url is incorect format";
  // }

  setError(error);
}, [
  description,
  title,
  address,
  city,
  country,
  state,
  lat,
  long,
  price,
  // imageUrl,
  // imageUrl1,
  // imageUrl2,
  // imageUrl3
]);



useEffect(()=>{
  if(id){
    dispatch(getOneSpot(id))
  }

},[id, dispatch])


  useEffect(()=>{
setTitle(spot.title)
setDescription(spot.description)
setAddress(spot.address)
setCity(spot.city)
setState(spot.state)
setCountry(spot.country)
setLat(spot.lat)
setLong(spot.long)
setPrice(spot.price)

  },[spot])

const handleSubmitForm=(e)=>{
  e.preventDefault()
  setIsSubmitted(true);
  if (
    error.title ||
    error.description ||
    error.address ||
    error.city ||
    error.country ||
    error.lat ||
    error.long ||
    error.price 

  
  ) {
    return;
  }
}

  return (
    <div className='edit-spot-page-container'>
        <h2> Update Spot</h2>
        <form 
        className='edit-spot-page-form'
        onSubmit={handleSubmitForm}
        >
            <label>
            Title
            <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
            {error.title && isSubmitted && (
              <span className="update-spot-page-error">{error.title}</span>
            )}
            </label>

            <label>
            Description
            <input value={description} onChange={(e)=>setDescription(e.target.value)}/>
            {error.description && isSubmitted && (
              <span className="update-spot-page-error">
                {error.description}
              </span>
               )}
            </label>

            <label>
            Address
            <input value={address} onChange={(e)=>setAddress(e.target.value)}/>
            {error.address && isSubmitted && (
              <span className="update-spot-page-error">{error.address}</span>
            )}
            </label>

            <label>
            City
            <input value={city} onChange={(e)=>setCity(e.target.value)}/>
            {error.city && isSubmitted && (
              <span className="update-spot-page-error">{error.city}</span>
            )}
            </label>

            <label>
            State
            <input value={state} onChange={(e)=>setState(e.target.value)}/>
            {error.state && isSubmitted && (
              <span className="update-spot-page-error">{error.state}</span>
            )}
            </label>

            <label>
            Country
            <input value={country} onChange={(e)=>setCountry(e.target.value)}/>
            {error.country && isSubmitted && (
              <span className="update-spot-page-error">{error.country}</span>
            )}
            </label>

            <label>
            Lattitude
            <input value={lat} onChange={(e)=>setLat(e.target.value)}/>
            {error.lat && isSubmitted && (
                <span className="update-spot-page-error">{error.lat}</span>
              )}
            </label>

            <label>
            Longtitude
            <input value={long} onChange={(e)=>setLong(e.target.value)}/>
            {error.long && isSubmitted && (
                <span className="update-spot-page-error">{error.long}</span>
              )}
            </label>

            <label className="update-spot-page-label">
            Price
            <input
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            {error.price && isSubmitted && (
              <span className="update-spot-page-error">{error.price}</span>
            )}
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