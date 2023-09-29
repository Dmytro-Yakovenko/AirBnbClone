import React, { useState } from "react";
import { login, userLoading } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginPage.css';
import Button from "../../components/Button";

const LoginPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
  
    if (sessionUser) return <Redirect to="/" />;

  const handleDemoSubmit =async (e) =>{
    e.preventDefault()
    dispatch(userLoading())
    const data = await dispatch(login("demo@aa.io", "password"));
      if (data) {
        setErrors(data);
      }
  }

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(userLoading())
      const data = await dispatch(login(email, password));
      if (data) {
        setErrors(data);
      }
    };
  
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
         <label>
            Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
         

         </div>
          
          <Button id ="logIn"/>
          <Button onClick={handleDemoSubmit} id="demo"/>
        </form>
      </div>
    );
  }
  

export default LoginPage



  