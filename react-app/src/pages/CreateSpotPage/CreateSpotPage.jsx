import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import {useHistory} from "react-router-dom"
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
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const history=useHistory()

  const user = useSelector((state) => state.session.user);


  useEffect(()=>{
    if(imageUrl.length<1){
      setImageUrl1("")
      setImageUrl2("")
      setImageUrl3("")
    }
    if(imageUrl1.length<1){
      setImageUrl2("")
      setImageUrl3("")
    }
    if(imageUrl2.length<1){
      setImageUrl3("")
    }
  },[imageUrl,imageUrl1,imageUrl2])

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
    imageUrl3
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmited(true);
    if (
      error.title ||
      error.description ||
      error.address ||
      error.city ||
      error.country ||
      error.lat ||
      error.long ||
      error.price ||
      error.imageUrl ||
      error.imageUrl1||
      error.imageUrl2||
      error.imageUrl3
     
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
      spot_image_url: imageUrl,
      
      
      owner_id: user.id,
    };
    if(imageUrl1){
      formData['spot_image_url1']=imageUrl1
    }
    if(imageUrl2){
      formData['spot_image_url2']=imageUrl2
    }
    if(imageUrl3){
      formData['spot_image_url3']=imageUrl3
    }
    const data = await dispatch(createNewSpot(formData));


    if(data.id){
      
      history.push(`/spots/${data.id}`)
    }
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

          <label className="create-spot-page-label">
            Image Url
            <input
              placeholder="image url"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value)
             
              }}
              required
            />
            {error.imageUrl && isSubmited && (
              <span className="create-spot-page-error">{error.imageUrl}</span>
            )}
          </label>
          {imageUrl &&   <label className="create-spot-page-label">
           Add more Image Url
            <input
              placeholder="image url"
              value={imageUrl1}
              onChange={(e) => setImageUrl1(e.target.value)}
              
            />
            {error.imageUrl1 && isSubmited && (
            
              <span className="create-spot-page-error">{error.imageUrl1}</span>
            )}
          </label>}

          {imageUrl1 &&   <label className="create-spot-page-label">
           Add more Image Url
            <input
              placeholder="image url"
              value={imageUrl2}
              onChange={(e) => setImageUrl2(e.target.value)}
              
            />
            {error.imageUrl2 && isSubmited && (
              <span className="create-spot-page-error">{error.imageUrl2}</span>
            )}
          </label>}

          {imageUrl2 &&   <label className="create-spot-page-label">
           Add more Image Url
            <input
              placeholder="image url"
              value={imageUrl3}
              onChange={(e) => setImageUrl3(e.target.value)}
              
            />
            {error.imageUrl3 && isSubmited && (
              <span className="create-spot-page-error">{error.imageUrl3}</span>
            )}
          </label>}

          <Button id="createSpot" />
        </form>
      </div>
    </main>
  );
};

export default CreateSpotPage;
