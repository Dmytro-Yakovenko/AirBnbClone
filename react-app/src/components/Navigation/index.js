import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <ul className="nav-list">
            <li>
              <NavLink exact to="/">
               <img className="logo" src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1695613454/logoAbnb_cwzp8x.jpg"/>
              </NavLink>
            </li>
            {isLoaded && (
              <li>
                <ProfileButton user={sessionUser} />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
