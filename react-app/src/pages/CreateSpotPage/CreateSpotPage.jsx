import React, { useEffect, useState } from "react";

import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
  } from "react-geocode";



import "./CreateSpotPage.css";

const CreateSpotPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
useEffect(()=>{
    if(address){
        fromAddress(address)
        .then(({ results }) => {
          const { lat, lng } = results[0].geometry.location;
          console.log(lat, lng);
        })
        .catch(console.error);
    }
   
},[address])
  return (
    <div className="create-spot-page-container">
      <h2>Create your spot</h2>
      <form>
        <label>
          Title
          <input
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Description
          <textarea
            placeholder="description"
            name="description"
            id="description"
            rows="20"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            <label>
              Address
              <input
                placeholder="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>

            <label>
              City
              <input
                placeholder="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>

            <label>
              State
              <input
                placeholder="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </label>

            <label>
              Country
              <input
                placeholder="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>

            <label>
              Price
              <input
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </textarea>
        </label>
      </form>
    </div>
  );
};

export default CreateSpotPage;
