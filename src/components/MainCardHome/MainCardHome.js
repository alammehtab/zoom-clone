import React from "react";
import "./MainCardHome.css";

import { Link } from "react-router-dom";

const MainCardHome = () => {
  return (
    <div className="main-card">
      {/* IMAGE */}
      {/* <img src={myPic} style={{ width: "40%", height: "70%" }} alt="logo" /> */}
      <div className="main-card-form">
        <div>
          <i class="fab fa-skype fa-5x"></i>
          <h2>LET'S MEET</h2>
          <br />
          <br />
          <br />
        </div>
        <div className="join-signin-btns">
          <button className="btn btn-primary btn-lg">Join Meeting</button>
          <br />
          <button className="btn btn-outline-primary">
            <Link to="/signin" style={{ textDecoration: "none" }}>
              Sign In
            </Link>
          </button>
          <br />
          <button className="btn btn-outline-primary">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Sign Up
            </Link>
          </button>
        </div>

        {/* <br />
        <input placeholder="Enter Meeting ID" className="form-control" />
        <br />
        <button className="btn btn-primary btn-lg">Join Now</button>
        <br /> */}
        {/* <div className="login-signup-links">
          <Link style={{ textDecoration: "none" }} to="/signin">
            SignIn
          </Link>
          <span>|</span>
          <Link style={{ textDecoration: "none" }} to="/signup">
            SignUp
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default MainCardHome;
