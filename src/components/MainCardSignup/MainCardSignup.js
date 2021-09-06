import React from "react";
import { Link } from "react-router-dom";
import "./MainCardSignup.css";

const MainCardSignup = () => {
  return (
    <div className="main-card">
      <div className="left-div">
        <div>
          <h2>SIGN UP FREE</h2>
          <br />
          <h5>Meetings and Chat for free</h5>
        </div>
        <br />
        <div>
          <i class="fas fa-user-plus fa-6x"></i>
        </div>
        <br />
        <div>
          <p>Already have an account? Sign In</p>
        </div>
      </div>
      <div className="right-div">
        <div>
          <span>Email address</span>
          <br />
          <input />
        </div>
        <p>
          By signing up, I agree to the <Link>Zoom's Privacy Statement </Link>
          and
          <Link>Terms of Service.</Link>
        </p>
        <button className="btn btn-primary btn-lg btn-block">Sign Up</button>
      </div>
    </div>
  );
};

export default MainCardSignup;
