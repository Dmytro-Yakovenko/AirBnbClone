import React from 'react'
import "./ProfilePage.css"
import { useDispatch, useSelector } from 'react-redux'
import  Button  from '../../components/Button'
import { setModalId } from '../../store/modalReducer'
import {deleteProfile} from "../../store/session"
import { useHistory } from 'react-router-dom'
const ProfilePage = () => {

  const user = useSelector(state => state.session.user)
  const history=useHistory()
  const dispatch =useDispatch()
  const handleDelete= async()=>{
    if(user.id===1){
      dispatch(setModalId("deleteProfile"))
      return 
    }
   
    dispatch(deleteProfile(user.id))
    history.push('/')
  }

  const handleUpdate = async()=>{
    if(user.id ===1){
      dispatch(setModalId("updateProfile"))
    }

  }

  return (
    <main className='main'>
      <div className='profile-page-container'>
      <p >First name: <span onDoubleClick={()=>console.log(11111)}>{user.first_name}</span> </p>
      <p>Last name: {user.last_name}</p>
      <p>User name: {user.username}</p>
      <p>Email: {user.email}</p>
      <img 
      src={user.user_image_url} 
      alt="" 
      className='profile-page-user-image'
      />
<div className='profile-page-button-wrapper'>
<Button 
id='updateProfile'
onClick={handleUpdate}
/>

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