import React, {useState} from 'react'
import "./EditProfileForm.css"
import { useSelector } from 'react-redux'
import Button from '../Button'

const EditProfileForm = () => {

    const user = useSelector(state=>state.session.user)
    const [firstName, setFirstName]= useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [username, setUsername]=useState(user.username)
    const [email, setEmail]= useState(user.email)
    const [userImageUrl, setUserImageUrl]= useState(user.user_image_url)
  return (
    <div>
        <h2>Update Profile</h2>
        <form>
    <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
<input value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
<input value={username} onChange={(e)=>setUsername(e.target.value)}/>
<input value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input value={userImageUrl} onChange={(e)=>setUserImageUrl(e.target.value)}/>

<Button id="saveProfile"/>

<Button id="cancelEditProfile"/>
        </form>
        
    </div>
  )
}

export default EditProfileForm