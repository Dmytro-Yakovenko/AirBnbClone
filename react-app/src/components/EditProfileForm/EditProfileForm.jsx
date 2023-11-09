import React, { useState } from "react";
import "./EditProfileForm.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { setEditProfile } from "../../store/profileReducer";
import { useEffect } from "react";
import { updateUser } from "../../store/session";

const EditProfileForm = () => {
  const user = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [userImageUrl, setUserImageUrl] = useState(user.user_image_url);
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const error = {};
    if (firstName.length < 5 || firstName.lenght > 255) {
      error.firstName = "write correct first name";
    }

    if (lastName.length < 5 || lastName.lenght > 255) {
      error.lastName = "write correct last name";
    }
    if (username.length < 5 || username.lenght > 255) {
      error.username = "write correct  username";
    }
    if (!email.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/)) {
      error.email = "email is incorect format";
    }

    if (!userImageUrl.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm) && userImageUrl.length>0) {
      error["userImageUrl"] = "image url is incorect format";
     
    }

    setError(error);
  }, [firstName, lastName, username, email, userImageUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  
    if (
      error.firstName ||
      error.lastName ||
      error.username ||
      error.email ||
      error.userImageUrl
    ) {
      
      return;
    }

    const formData = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      user_image_url: userImageUrl,
    };

    dispatch(updateUser(user.id, formData));
    dispatch(setEditProfile());
    setIsSubmitted(false);
    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    setUserImageUrl("");
  };

  return (
    <div className="edit-profile-page-wrapper">
      <h2>Update Profile</h2>
      <form className="edit-profile-page-form" onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {error.firstName && isSubmitted && (
            <span className="edit-profile-page-error">{error.firstName}</span>
          )}
        </label>

        <label>
          Last Name
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {error.lastName && isSubmitted && (
            <span className="edit-profile-page-error">{error.lastName}</span>
          )}
        </label>

        <label>
          Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {error.username && isSubmitted && (
            <span className="edit-profile-page-error">{error.username}</span>
          )}
        </label>

        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          {error.email && isSubmitted && (
            <span className="edit-profile-page-error">{error.email}</span>
          )}
        </label>

        <label>
          User Image Url
          <input
            value={userImageUrl}
            onChange={(e) => setUserImageUrl(e.target.value)}
          />
          {error.userImageUrl && isSubmitted && (
            <span className="edit-profile-page-error">{error.userImageUrl}</span>
          )}
        </label>

        <div className="edit-profile-page-buttons">
          <Button id="saveProfile" />

          <Button
            id="cancelEditProfile"
            onClick={() => {
              dispatch(setEditProfile());
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
