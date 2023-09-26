import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginPage.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
  
    if (sessionUser) return <Redirect to="/" />;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = await dispatch(login(email, password));
      if (data) {
        setErrors(data);
      }
    };
  
    return (
      <div className="login">
        <h1 className="login-title">Log In</h1>
        <form onSubmit={handleSubmit}>
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
          
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
  

export default LoginPage



  