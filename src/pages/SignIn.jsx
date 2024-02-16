// import React from "react";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("stuck here")
      console.log(inputs)
      console.log("stuck here")
      await login(inputs)
      console.log("passed01")
      navigate("/");
    } catch (err) {
      console.log("oops now in catch")
      setError(err.response.data);
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form >
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="username"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button onClick={handleSubmit}>Sign In</button>
        {err && <p>{err}</p>}
      </form>
    </div>
  );
}

export default Login;
