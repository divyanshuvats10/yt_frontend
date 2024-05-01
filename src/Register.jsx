// Register.js
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!email || !username || !password || !passwordConf) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== passwordConf) {
      setError("Passwords do not match");
      return;
    }

    try {
      
      
      const response=await axios.post("http://localhost:3000/api/v1/register", {email,username,password,passwordConf});
      if (response.data.success){
        navigate("/");
      }
      //navigate("/");


    } catch (error) {
      
      setError("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="app-container">
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Your Username"
            id="username"
            name="username"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <label htmlFor="passwordConf">Confirm Password</label>
          <input
            value={passwordConf}
            onChange={(e) => setPasswordConf(e.target.value)}
            type="password"
            placeholder="********"
            id="passwordConf"
            name="passwordConf"
          />
          {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
          <button type="submit">Register</button>
        </form>
        <Link to={"/"}>
          <button className="link-btn">Already have an account? Login here.</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
