import React from "react";
import { Link } from "react-router-dom";
import "./MainCardSignup.css";

const MainCardSignup = () => {
  return (
    <form className="main-card">
      <h1>Sign Up</h1>
      <br />

      <div className="form-group">
        <input type="text" className="form-control" placeholder="First name" />
      </div>
      <br />

      <div className="form-group">
        <input type="text" className="form-control" placeholder="Last name" />
      </div>
      <br />

      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <br />

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <br />

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <br />
      <div className="already-reg">
        <p className="forgot-password text-right">
          Already registered
          <Link to="/signin" className="signin-link">
            sign in?
          </Link>
        </p>
      </div>
    </form>
  );
};

export default MainCardSignup;
