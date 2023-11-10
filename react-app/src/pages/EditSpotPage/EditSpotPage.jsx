import React, { useState } from 'react'
import "./EditSpotPage.css"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const EditSpotPage = () => {
     
  const {id}= useParams()
  const spot = useSelector(state=>state.spots.spots[id])

  console.log(spot, 777777)
  const [title, setTitle]= useState(spot?.title)
  const [description,setDescription] = useState(spot?.description)
  const [address, setAddress] = useState(spot?.address)
  const [city, setCity] = useState(spot?.city)
  const [state, setState] = useState(spot?.state)
  const [country, setCountry] = useState(spot?.country)
  const [lat, setLat] = useState(spot?.lat)
  const [long, setLong] = useState(spot?.long)
  const [images, setImages]= useState(spot?.image?.reduce((acc,curr)=>{
    acc[curr.id]=curr.spot_image_url
    return acc
}
    ,{}))
  console.log(images, 66666)
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
         {/* {spot?.spot_image?.map((item, index)=>(
              <label>
              Image url
              <input value={images[item.id]} onChange={(e)=>setLong(e.target.value)}/>
              </label>
         ))} */}
         </>
         
         
         

        </form>
      
    </div>
  )
}

export default EditSpotPage