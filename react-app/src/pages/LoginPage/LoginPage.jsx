import React, { useState } from "react";
import { login, userLoading } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye} from 'react-icons/ai';




import './LoginPage.css';
import Button from "../../components/Button";
import { NavLink, useHistory } from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const dates = useSelector(state=>state.booking.dates)
    const spot = useSelector(state=>state.spots.spot)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const [isPasswordShow, setIsPasswordShow]= useState(false)
    const history = useHistory()

 
   
  const handleDemoSubmit =async (e) =>{
    e.preventDefault()
    dispatch(userLoading())
    const data = await dispatch(login("demo@aa.io", "password"));
      if (data) {
        setErrors(data);
      }
      if(dates){
        console.log(dates,22222)
        return history.push(  `/booking?id=${spot.id}&checkIn=${dates.checkIn}&checkOut=${dates.checkOut}&price=${dates.price}`)
      }
  }

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(userLoading())
      const data = await dispatch(login(email, password));
      if (data) {
        setErrors(data);
      }
      if(dates){
        return <Redirect to={   `/booking?id=${spot.id}&checkIn=${dates.checkIn}&checkOut=${dates.checkOut}&price=${dates.price}`}/>
      }
    };
    if (sessionUser) return <Redirect to="/" />;
    return (
      <div className="login">
        <h1 className="login-title">Log In</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>

          <div className="login-input-wrapper">
          <label>
            Email
              </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
        


          </div>
         

         <div className="login-input-wrapper">
         <label className="login-label">
            Password

            <input
            className="login-input"
              type={isPasswordShow?"text":"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
         {!isPasswordShow && < AiOutlineEyeInvisible className="login-icon" onClick={()=>setIsPasswordShow(true)}/> }
         {isPasswordShow && <  AiOutlineEye className="login-icon" onClick={()=>setIsPasswordShow(false)}/> }
            </label>
         
         </div>
          <p>do not have account <NavLink to="/signup">Sign Up</NavLink></p>
          <Button id ="logIn"/>
          <Button onClick={handleDemoSubmit} id="demo"/>
        </form>
      </div>
    );
  }
  

export default LoginPage



  