import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button";

const SpotDetailsCard = () => {
  const spot = useSelector((state) => state.spots.spot);
  console.log(spot, 888888);
  return (
    <section>
      <ul>
        {spot.spot_image?.length &&
          spot.spot_image.map((item) => (
            <li key={item.id}>
              <img src={item.spot_image_url} alt="" />
            </li>
          ))}
      </ul>
      <h2>
        {spot.title}, in {spot.city}, {spot.state}
      </h2>

      <p>{spot.address} </p>
      <p>{spot.description}</p>
      <p>{spot.lat}</p>
      <p>{spot.long}</p>
      <form>
        <input type="date" />

        <input type="date" />

        <Button id="booking" />
      </form>
    </section>
  );
};

export default SpotDetailsCard;
