import React, { useState, useEffect, useRef } from "react";
import {NavLink} from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import Button from "../Button";

const  ProfileButton =({ user }) =>{
console.log(user, 111111)

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);




    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <div className="profile-wrapper">
      <button className="profile-btn" onClick={openMenu}>
       {!user && <i className="fas fa-user-circle header-profile-icon" />} 
       {
        user &&<img className="profile-img" alt={`${user?.name}`} src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1691812110/776229ef8d0028f88330a492116ab40b_zelqge.jpg"/>
       } 
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <Button onClick={handleLogout} id="logOut"/>
            </li>
          </>
        ) : (
          <>
            {/* <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            /> */}
    <NavLink className = "prifile-link"  to ="/login">
      Log in
    </NavLink>

    <NavLink className = "prifile-link" to ="/signup">
      Sign Up
    </NavLink>

          </>
        )}
      </ul>
    </div>
  );
}

export default ProfileButton;
