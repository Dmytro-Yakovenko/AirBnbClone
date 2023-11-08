import React, { useState } from "react";
import "./EditProfileForm.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { setEditProfile } from "../../store/profileReducer";
import { useEffect } from "react";

const EditProfileForm = () => {
  const user = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [userImageUrl, setUserImageUrl] = useState(user.user_image_url);
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    const error = {};
    if (firstName.length < 5 || firstName.lenght > 255) {
      error.firstName = "write correct first name";
    }

    if (lastName.length < 5 || lastName.lenght > 255) {
      error.lasttName = "write correct last name";
    }
    if (username.length < 5 || username.lenght > 255) {
      error.username = "write correct  username";
    }
    if (!email.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/)) {
      error.email = "email is incorect format";
    }

    if (!userImageUrl.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm)) {
      error.userImageUrl = "user image url is incorect format";
    }

    setError(error);
  }, [firstName, lastName, username, email, userImageUrl]);

  const handleSubmit = ()=>{
    
  }



  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {error.firstName && <span>{error.firstName}</span>}
        </label>

        <label>
          Last Name
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {error.lastName && <span>{error.lastName}</span>}
        </label>

        <label>
          Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {error.username && <span>{error.username}</span>}
        </label>

        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          {error.email && <span>{error.email}</span>}
        </label>

        <label>
          User Image Url
          <input
            value={userImageUrl}
            onChange={(e) => setUserImageUrl(e.target.value)}
          />
          {error.userImageUrl && <span>{error.userImageUrl}</span>}
        </label>

        <Button id="saveProfile" />

        <Button
          id="cancelEditProfile"
          onClick={() => {
            dispatch(setEditProfile());
          }}
        />
      </form>
    </div>
  );
};

export default EditProfileForm;
