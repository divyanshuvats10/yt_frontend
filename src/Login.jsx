import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './login.css';
 

 const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    

    if (email.length === 0) {
      setError("Email cannot be empty");
    } else if (password.length === 0) {
      setError("Password cannot be empty");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError(""); 
      try{
      const response=await axios.post("http://localhost:3000/api/v1/login",{email,password});
      console.log("sdff",response);

      if (response.data.success){
        navigate("/home");
      }

      //navigate("/home");
      // navigate("/video");
      }catch(error){
        console.log(error);
        setError("login Failed");
      }
    }
  };

  return (
    <div className="app-container"> 
      <div className="auth-form-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>} {}
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            placeholder="youremail@gmail.com" 
            id="email" 
            name="email" 
            required
          />
          <label htmlFor="password">Password</label>
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            placeholder="********" 
            id="password" 
            name="password" 
            required
          />
          <button type="submit">Log In</button>
        </form>
        <Link to={"/register"}>
          <button className="link-btn">
            Don't have an account? Register here.
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
