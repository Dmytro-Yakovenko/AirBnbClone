import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/loader'

const HomePage = () => {
  const isUserLoading = useSelector((state)=>state.session.isUserLoading)
  return (
    <main>
      {isUserLoading && <Loader/>}
      {!isUserLoading &&  <div className='container'>Home page</div>}

    </main>
   
  )
}

export default HomePage