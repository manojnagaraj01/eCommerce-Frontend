import React, { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";
import {registerUser, loginUser } from "../Store/auth/authActions"    
const LoginSignup = () => {
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [state, setState] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.stopPropagation()

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state) {
         dispatch(registerUser(formData))
        } 
      else {
         dispatch(loginUser(formData));
      }
      navigate("/");
    } catch (err) {
      toast(err,'An Error occoured');
    }


    setFormData({
      name: "",
      mobile: "",
      email: "",
      password: "",
    });
  };
 
  return (
    <div className="container">
      <div className="form-container">
        
        <div className="button-group">
          <button
            className={`${state ? "signup-btn" : "login-btn"}`}
            onClick={() => setState(true)}
          >
            Signup
          </button>
          <button
            className={`${!state ? "signup-btn" : "login-btn"}`}
            onClick={() => setState(false)}
          >
            Login
          </button>
        </div>
        <form action="" className="">
          {state && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your FirstName"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          {state && (
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter Your Mobile No."
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            {toast && <div className="error-message">{toast}</div>}
            <button className="submit-btn" onClick={handleSubmit}>
              {state ? "Submit" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
