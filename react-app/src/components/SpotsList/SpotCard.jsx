import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const SpotCard = ({id}) => {
const spot = useSelector(state=>state.spots.spots[id])

  return (
    <li>
        <h2>{spot.title}</h2>
        <img src={spot.spot_image[0].spot_image_url} alt={spot.title}/>
        <NavLink to = {`/spots/${id}`}>Show Details</NavLink>
        </li>
  )
}

export default SpotCard