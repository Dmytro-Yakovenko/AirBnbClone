import React, { useEffect, useState } from "react";
import "./EditSpotPage.css";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneSpot, updateSpot } from "../../store/spotReducer";
import Button from "../../components/Button";
import { createSpotImages, updateSpotImages } from "../../api/api";

const EditSpotPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const spot = useSelector((state) => state.spots.spot);
  const user = useSelector((state) => state.session.user);
  const history = useHistory();
  console.log(spot, 66666666);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");

  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const error = {};
    if (title?.length > 25 || title?.length < 5) {
      error["title"] = "title is to long or to short";
    }
    if (description?.length > 25 || description?.length < 5) {
      error["description"] = "description is to long or to short";
    }
    if (address?.length > 25 || address?.length < 5) {
      error["address"] = "address is to long or to short";
    }
    if (address?.city > 25 || city?.length < 5) {
      error["city"] = "city is to long or to short";
    }
    if (state?.length > 25 || state?.length < 5) {
      error["state"] = "state is to long or to short";
    }

    if (country?.length > 25 || country?.length < 2) {
      error["country"] = "country is to long or to short";
    }

    if (lat?.length > 10 || lat?.length < 3) {
      error["lat"] = "Latitude is to long or to short";
    }
    if (lat && !String(lat).match(/^[0-9]*\.?[0-9]+$/gm)) {
      error["lat"] = "Latitude is incorect format";
    }

    if (long?.length > 10 || long?.length < 3) {
      error["long"] = "Longitude is to long or to short";
    }
    if (long && !String(long).match(/^[0-9]*\.?[0-9]+$/gm)) {
      error["long"] = "Longitude is incorect format";
    }

    if (price?.length >= 8 || price?.length <= 5) {
      error["price"] = "Price is to long or to short";
    } // ^[0-9]*\.?[0-9]+$
    if (price && !String(price).match(/^[0-9]*\.?[0-9]+$/gm)) {
      error["price"] = "price is incorect format";
    }
    if (!imageUrl.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm)) {
      error["imageUrl"] = "image url is incorect format";
    }
    if (!imageUrl1.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm) && imageUrl1.length>0) {
      error["imageUrl1"] = "image url is incorect format";

    }
    if (!imageUrl2.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm)&& imageUrl2.length>0) {
      error["imageUrl2"] = "image url is incorect format";
    }
    if (!imageUrl3.match(/^https:\/\/.*\.(?:jpeg|jpg|png)$/gm)&& imageUrl3.length>0) {
      error["imageUrl3"] = "image url is incorect format";
    }

    setError(error);
  }, [
    description,
    title,
    address,
    city,
    country,
    state,
    lat,
    long,
    price,
    imageUrl,
    imageUrl1,
    imageUrl2,
    imageUrl3,
  ]);

  useEffect(() => {
    if (id) {
      dispatch(getOneSpot(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    setTitle(spot.title);
    setDescription(spot.description);
    setAddress(spot.address);
    setCity(spot.city);
    setState(spot.state);
    setCountry(spot.country);
    setLat(spot.lat);
    setLong(spot.long);
    setPrice(spot.price);
    if (spot && spot.spot_image && spot.spot_image.length > 0) {
      setImageUrl(spot.spot_image[0].spot_image_url);
    }
    if (spot && spot.spot_image && spot.spot_image.length > 1) {
      setImageUrl(spot.spot_image[1].spot_image_url);
    }

    if (spot && spot.spot_image && spot.spot_image.length > 2) {
      setImageUrl(spot.spot_image[2].spot_image_url);
    }

    if (spot && spot.spot_image && spot.spot_image.length > 3) {
      setImageUrl(spot.spot_image[3].spot_image_url);
    }
  }, [spot]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (
      error.title ||
      error.description ||
      error.address ||
      error.city ||
      error.country ||
      error.lat ||
      error.long ||
      error.price
    ) {
      return;
    }
    const formData = {
      title,
      description,
      address,
      city,
      state,
      country,
      lat,
      long,
      price,
      owner_id: spot.owner_id,
      user_id: user.id,
    };
    if(imageUrl){
      updateSpotImages({
        spot_image_url:imageUrl,

      },spot.id, spot.spot_image[0].id)
    }
    console.log(spot.spot_image[1], 55555555)
    if(imageUrl1 && spot.spot_image[1]){
      updateSpotImages({
        spot_image_url:imageUrl,

      },spot.id, spot.spot_image[1].id)
    }
  
    if(imageUrl1 && !spot.spot_image[1]){
      createSpotImages({
        spot_image_url:imageUrl,

      },spot.id)
    }


    if(imageUrl2 && !spot.spot_image[1]){
      createSpotImages({
        spot_image_url:imageUrl,

      },spot.id)
    }

    if(imageUrl2 &&spot.spot_image[2]){
      updateSpotImages({
        spot_image_url:imageUrl,

      },spot.id, spot.spot_image[2].id)
    }

    if(imageUrl2 && !spot.spot_image[2]){
      createSpotImages({
        spot_image_url:imageUrl,

      },spot.id)
    }

    if(imageUrl3 && spot.spot_image[3]){
      updateSpotImages({
        spot_image_url:imageUrl,

      },spot.id, spot.spot_image[3].id)
    }

    if(imageUrl3 && !spot.spot_image[3]){
      createSpotImages({
        spot_image_url:imageUrl,

      },spot.id)
    }
   
    dispatch(updateSpot(formData, spot.id));
    history.push(`/spots/${id}`)
  };

  return (
    <div className="update-spot-page-container">
      <h2> Update Spot</h2>
      <form className="update-spot-page-form" onSubmit={handleSubmitForm}>
        <label className="update-spot-page-label">
          Title
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          {error.title && isSubmitted && (
            <span className="update-spot-page-error">{error.title}</span>
          )}
        </label>

        <label className="update-spot-page-label">
          Description
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {error.description && isSubmitted && (
            <span className="update-spot-page-error">{error.description}</span>
          )}
        </label>

        <label className="update-spot-page-label">
          Address
          <input value={address} onChange={(e) => setAddress(e.target.value)} />
          {error.address && isSubmitted && (
            <span className="update-spot-page-error">{error.address}</span>
          )}
        </label>

        <label className="update-spot-page-label">
          City
          <input value={city} onChange={(e) => setCity(e.target.value)} />
          {error.city && isSubmitted && (
            <span className="update-spot-page-error">{error.city}</span>
          )}
        </label>

        <label className="update-spot-page-label">
          State
          <input value={state} onChange={(e) => setState(e.target.value)} />
          {error.state && isSubmitted && (
            <span className="update-spot-page-error">{error.state}</span>
          )}
        </label>

        <label className="update-spot-page-label">
          Country
          <input value={country} onChange={(e) => setCountry(e.target.value)} />
          {error.country && isSubmitted && (
            <span className="update-spot-page-error">{error.country}</span>
          )}
        </label>

        <label className="update-spot-page-label">
          Lattitude
          <input value={lat} onChange={(e) => setLat(e.target.value)} />
          {error.lat && isSubmitted && (
            <span className="update-spot-page-error">{error.lat}</span>
          )}
        </label>

        <label className="update-spot-page-label">
          Longtitude
          <input value={long} onChange={(e) => setLong(e.target.value)} />
          {error.long && isSubmitted && (
            <span className="update-spot-page-error">{error.long}</span>
          )}
        </label>

        <label className="update-spot-page-label">
          Price
          <input
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          {error.price && isSubmitted && (
            <span className="update-spot-page-error">{error.price}</span>
          )}
        </label>
        <>
          <label>
            Image url
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </label>

          {imageUrl && (
            <label>
              Image url1
              <input
                value={imageUrl1}
                onChange={(e) => setImageUrl1(e.target.value)}
               
              />
            </label>
          )}

          {imageUrl1 && (
            <label>
              Image url2
              <input
                value={imageUrl2}
                onChange={(e) => setImageUrl2(e.target.value)}
                
              />
            </label>
          )}
          {imageUrl2 && (
            <label>
              Image url3
              <input
                value={imageUrl3}
                onChange={(e) => setImageUrl3(e.target.value)}
               
              />
            </label>
          )}
        </>

        <div className="edit-spot-page-buttons">
          <Button id="editSpot" />
          <Button
            onClick={() => {
              history.push(`/spots/${id}`);
            }}
            id="cancelEditSpot"
          />
        </div>
      </form>
    </div>
  );
};

export default EditSpotPage;
