import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import "./HomePage.css"
import SpotsList from '../../components/SpotsList'




const HomePage = () => {
  const isLoading = useSelector((state)=>state.spots.isLoading)
  
  
  return (
    <main className='home-main'>
      <div className='container'>
      {isLoading && <div className='loader-wrapper'> <Loader/> </div>}
    
      {!isLoading && <SpotsList/>
       }
      </div>
    </main>
   
  )
}

export default HomePage