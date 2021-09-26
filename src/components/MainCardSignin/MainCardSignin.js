import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./MainCardSignin.css";

const MainCardSignin = () => {
  // START OF THE STATE VARIABLES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // FUNCTION HANDLING FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  // START OF THE RETURN FUNCTION OF THE COMPONENT
  return (
    <form className="main-card">
      <h1>Sign In</h1>
      <br />

      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <button
        onClick={handleSubmit}
        type="submit"
        className="btn btn-primary btn-block"
      >
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
