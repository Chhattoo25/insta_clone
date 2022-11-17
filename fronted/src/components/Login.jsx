import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [formdata, setFormData] = useState({});
const navigate = useNavigate()
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
      // computed Properties
    });
  };

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/login",
        formdata
      );
      const user = data;
      console.log(user);
      localStorage.setItem("userid", user["_id"]);
      navigate("/feed")
    } catch (err) {
 if(err.response.status===401){
 alert("Invalid Credentials")
 }
      console.log(err);
    }
  };
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
