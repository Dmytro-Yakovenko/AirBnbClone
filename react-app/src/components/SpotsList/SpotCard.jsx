import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./SpotList.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
 
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SpotCard = ({ id }) => {
  const spot = useSelector((state) => state.spots.spots[id]);
console.log(spot,333333)
  return (
    <Item>
      <li className="spot-card-item">
       
        <img
          className="spot-card-image"
          src={spot.spot_image[0].spot_image_url}
          alt={spot.title}
        />
<p>{spot.rating} </p>
 <p>{spot.city}, {spot.state} </p>
 <h2>{spot.title}</h2>
 <p> $ {spot.price}</p>

        <NavLink to={`/spots/${id}`}>Show Details</NavLink>
      </li>
    </Item>
  );
};

export default SpotCard;
