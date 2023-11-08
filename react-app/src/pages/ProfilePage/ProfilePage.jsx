import React, { useState } from "react";
import "./ProfilePage.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { setModalId } from "../../store/modalReducer";
import EditProfileForm from "../../components/EditProfileForm";
import { setEditProfile } from "../../store/profileReducer";

const ProfilePage = () => {
  const isUpdate = useSelector((state)=>state.profile.editProfile)
  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const handleDelete = async () => {
    if (user.id === 1) {
      dispatch(
        setModalId({
          modalId: "deleteProfile",
        })
      );
      return;
    }
    dispatch(
      setModalId({
        modalId: "deleteUser",
        currentId: user.id,
      })
    );
  };
  

  const handleUpdate = async () => {
    if (user.id === 1) {
      dispatch(
        setModalId({
          modalId: "updateProfile",
        })
      );
    }
   dispatch(setEditProfile())
  };

  return (
    <main className="main">
      <div className="profile-page-container">
        {isUpdate && <EditProfileForm />}
        {!isUpdate && (
          <>
            <p>
              First name:{" "}
              <span onDoubleClick={() => console.log(11111)}>
                {user.first_name}
              </span>{" "}
            </p>
            <p>Last name: {user.last_name}</p>
            <p>User name: {user.username}</p>
            <p>Email: {user.email}</p>
            <img
              src={user.user_image_url}
              alt=""
              className="profile-page-user-image"
            />
            <div className="profile-page-button-wrapper">
              <Button id="updateProfile" onClick={handleUpdate} />

              <Button id="deleteProfile" onClick={handleDelete} />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default ProfilePage;
