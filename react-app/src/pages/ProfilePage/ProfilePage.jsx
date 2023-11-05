import React from 'react'
import "./ProfilePage.css"
import { useDispatch, useSelector } from 'react-redux'
import  Button  from '../../components/Button'
import { setModalId } from '../../store/modalReducer'
const ProfilePage = () => {

  const user = useSelector(state => state.session.user)
  
  const dispatch =useDispatch()
  const handleDelete= async()=>{
    if(user.id===1){
      dispatch(setModalId("deleteProfile"))
    }
    dispatch(deleteProfile(user.id))
  }
  return (
    <main className='main'>
      <div className='container'>
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <p>User name: {user.username}</p>
      <p>Email: {user.email}</p>
      <img src={user.user_image_url} alt="" />
<div className='profile-page-button-wrapper'>
<Button id='updateProfile'/>
<Button 
id='deleteProfile'
onClick={handleDelete}

/>

</div>
      
      </div>
    </main>
  )
}

export default ProfilePage