import React from "react";
import { Link } from "react-router-dom";

import "./MainCardSignin.css";

const MainCardSignin = () => {
  return (
    <form className="main-card">
      <h1>Sign In</h1>
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
        Submit
      </button>
      <div className="forgot-password">
        <p>
          Forgot <Link className="password">password?</Link>
        </p>
      </div>
    </form>
  );
};

export default MainCardSignin;
