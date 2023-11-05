import React, { useState, useEffect, useRef } from "react";
import { NavLink, useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

import Button from "../Button";

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory()
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
    // dispatch()
    history.push("/")
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <div className="profile-wrapper">
      <button className="profile-btn" onClick={openMenu}>
        {!user && <i className="fas fa-user-circle header-profile-icon" />}
        {user && (
          <img
            className="profile-img"
            alt={`${user?.name}`}
            src={user.user_image_url}
          />
        )}
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <NavLink className="profile-link" to="/spots/create">
                Create your spot
              </NavLink>

              <NavLink className="profile-link" to="/profile">
                Profile
              </NavLink>


            </li>
            <li>
              <Button onClick={handleLogout} id="logOut" />
            </li>
          </>
        ) : (
          <>
            <NavLink className="profile-link" to="/login">
              Log in
            </NavLink>

            <NavLink className="profile-link" to="/signup">
              Sign Up
            </NavLink>
          </>
        )}
      </ul>
    </div>
  );
};

export default ProfileButton;
