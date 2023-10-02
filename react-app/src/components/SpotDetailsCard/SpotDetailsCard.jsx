import React from 'react'
import { useSelector } from 'react-redux'

const SpotDetailsCard = () => {
    const spot = useSelector(state=>state.spots.spot)
    console.log(spot,888888)
  return (
    <div>SpotDetailsCard</div>
  )
}

export default SpotDetailsCard