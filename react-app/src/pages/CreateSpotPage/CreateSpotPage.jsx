import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

import "./CreateSpotPage.css";
import { useDispatch, useSelector } from "react-redux";
import { createNewSpot } from "../../store/spotReducer";



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
  const [isSubmited, setIsSubmited] = useState(false);
  const [error, setError] = useState({});

  const dispatch = useDispatch()

  const user = useSelector(state=>state.session.user)

  useEffect(() => {
    const error = {};
    if (title.length > 25 || title.length < 5) {
      error["title"] = "title is to long or to short";
    }
    if (description.length > 25 || description.length < 5) {
      error["description"] = "description is to long or to short";
    }
    if (address.length > 25 || address.length < 5) {
      error["address"] = "address is to long or to short";
    }
    if (address.city > 25 || city.length < 5) {
      error["city"] = "city is to long or to short";
    }
    if (state.length > 25 || state.length < 5) {
      error["state"] = "state is to long or to short";
    }

    if (country.length > 25 || country.length < 5) {
      error["country"] = "country is to long or to short";
    }

    if (lat.length > 10 || lat.length < 3) {
      error["lat"] = "Latitude is to long or to short";
    }
    if (!lat.match(/^[0-9]*\.?[0-9]+$/gm)) {
      error["lat"] = "Latitude is incorect format";
    }

    if (long.length > 10 || long.length < 3) {
      error["long"] = "Longitude is to long or to short";
    }
    if (!long.match(/^[0-9]*\.?[0-9]+$/gm)) {
      error["long"] = "Longitude is incorect format";
    }

    if (price.length >= 8 || price.length <= 5) {
      error["price"] = "Price is to long or to short";
    } // ^[0-9]*\.?[0-9]+$
    if (!price.match(/^[0-9]*\.?[0-9]+$/gm)) {
      error["price"] = "price is incorect format";
    }

    setError(error);
  }, [description, title, address, city, country, state, lat, long, price]);

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmited(true);
    if(error.title ||
      error.description ||
      error.address ||
      error.city ||
      error.country ||
      error.lat ||
      error.long ||
      error.price ||
      error.owner_id
      ){
        return 
      }
    const formData ={
      title,
      description,
      address,
      city,
      state,
      country,
      lat,
      long,
      price,
      owner_id:user.id
    }

    dispatch(createNewSpot)
  };

  return (
    <main className="create-spot-page-main">
      <div className="create-spot-page-container">
        <h2 className="create-spot-page-title">Create your spot</h2>
        <form className="create-spot-page-form" onSubmit={handleSubmit}>
          <label className="create-spot-page-label">
            Title
            <input
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            {error.title && isSubmited && (
              <span className="create-spot-page-error">{error.title}</span>
            )}
          </label>

          <label className="create-spot-page-label">
            Description
            <textarea
              placeholder="description"
              name="description"
              id="description"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            {error.description && isSubmited && (
              <span className="create-spot-page-error">
                {error.description}
              </span>
            )}
          </label>
          <label className="create-spot-page-label">
            Address
            <input
              placeholder="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            {error.address && isSubmited && (
              <span className="create-spot-page-error">{error.address}</span>
            )}
          </label>

          <label className="create-spot-page-label">
            City
            <input
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            {error.city && isSubmited && (
              <span className="create-spot-page-error">{error.city}</span>
            )}
          </label>

          <label className="create-spot-page-label">
            State
            <input
              placeholder="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
            {error.state && isSubmited && (
              <span className="create-spot-page-error">{error.state}</span>
            )}
          </label>

          <label className="create-spot-page-label">
            Country
            <input
              placeholder="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            {error.country && isSubmited && (
              <span className="create-spot-page-error">{error.country}</span>
            )}
          </label>
          <div className="create-spot-page-long-lat">
            <label className="create-spot-page-label">
              Longtitude
              <input
                placeholder="00.000000"
                value={long}
                onChange={(e) => setLong(e.target.value)}
                required
              />
              {error.long && isSubmited && (
                <span className="create-spot-page-error">{error.long}</span>
              )}
            </label>

            <label className="create-spot-page-label">
              Latitude
              <input
                placeholder="00.000000"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                required
              />
              {error.lat && isSubmited && (
                <span className="create-spot-page-error">{error.lat}</span>
              )}
            </label>
          </div>

          <label className="create-spot-page-label">
            Price
            <input
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            {error.price && isSubmited && (
              <span className="create-spot-page-error">{error.price}</span>
            )}
          </label>

          <Button id="createSpot" />
        </form>
      </div>
    </main>
  );
};

export default CreateSpotPage;
