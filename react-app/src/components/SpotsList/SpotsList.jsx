import React from 'react'
import { useSelector } from 'react-redux'
import SpotCard from './SpotCard'
const SpotsList = () => {
const spots = useSelector((state)=>Object.values(state.spots.spots))
  return (
    <section>
         <>
       <ul>
        {spots.map(item=>(
          <SpotCard key={item.id} id={item.id}/>
        ))}
       </ul>
      
      </>
    </section>
  )
}

export default SpotsList