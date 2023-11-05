import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import Button from "../../components/Button";
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';


import "./SignupForm.css";
import { NavLink } from "react-router-dom";

function SignupFormPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [user_image_url, setUser_image_url] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const [isPasswordShow, setIsPasswordShow]= useState(false)
  const [isConfirmPasswordShow, setIsConfirmPasswordShow]= useState(false)
  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(
        signUp(first_name, last_name, user_image_url, username, email, password)
      );
      if (data) {
        setErrors(data);
      }
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  return (
    <div className="signup">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>

        <div className="signup-input-wrapper">
          <label>First name</label>
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            required
          />
        </div>

        <div className="signup-input-wrapper">
          <label>Last name</label>
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            required
          />
        </div>

        <div className="signup-input-wrapper">
          <label>User image url</label>
          <input
            type="text"
            value={user_image_url}
            onChange={(e) => setUser_image_url(e.target.value)}
            required
          />
        </div>

        <div className="signup-input-wrapper">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="signup-input-wrapper">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="signup-input-wrapper">
          <label
           className="signup-label">
            Password
            <input 
            className="signup-input"
            type={isPasswordShow?"text":"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
            {!isPasswordShow && < AiOutlineEyeInvisible className="signup-icon" onClick={()=>setIsPasswordShow(true)}/> }
         {isPasswordShow && <  AiOutlineEye className="signup-icon" onClick={()=>setIsPasswordShow(false)}/> }
          </label>
        
         
        </div>

        <div className="signup-input-wrapper">
          <label
          className="signup-label"
          >
            Confirm Password
            <input 
            className="signup-input"
            type={isPasswordShow?"text":"password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
         {!isConfirmPasswordShow && < AiOutlineEyeInvisible className="signup-icon" onClick={()=>setIsConfirmPasswordShow(true)}/> }
         {isConfirmPasswordShow && <  AiOutlineEye className="signup-icon" onClick={()=>setIsConfirmPasswordShow(false)}/> }


            </label>
          
        </div>
<p>Have account? <NavLink to="/login">Log In</NavLink></p>
        <Button id="signUp"/>
      </form>
    </div>
  );
}

export default SignupFormPage;
