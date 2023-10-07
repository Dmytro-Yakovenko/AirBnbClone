import React from 'react'
import { useSelector } from 'react-redux'
import SpotCard from './SpotCard'


import Box from '@mui/material/Box';

import Masonry from '@mui/lab/Masonry';

import "./SpotList.css"

const SpotsList = () => {
const spots = useSelector((state)=>Object.values(state.spots.spots))
  return (
    <section>
         <>
       {/* <ul>
        {spots.map(item=>(
        
        ))}
       </ul> */}
       <Box sx={{ width: 1400, minHeight: 390 }}>
      <Masonry columns={4} spacing={2}>
        {spots.map((spot, index) => (
          <SpotCard key={spot.id} id={spot.id}/>
        ))}
      </Masonry>
    </Box>
      </>
    </section>
  )
}

export default SpotsList