import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import "./HomePage.css"
import SpotsList from '../../components/SpotsList/SpotsList'
const HomePage = () => {
  const isUserLoading = useSelector((state)=>state.session.isUserLoading)
  
  
  return (
    <main className='home-main'>
      <div className='container'>
      {isUserLoading && <div className='loader-wrapper'> <Loader/> </div>}
      
      {!isUserLoading && <SpotsList/>
       }
      </div>
    </main>
   
  )
}

export default HomePage