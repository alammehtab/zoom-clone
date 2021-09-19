import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="main-heading">ZOOM</h1>
      <br />
      <br />
      <br />
      <div className="join-signin-btns">
        <button className="btn btn-primary btn-lg join-button">
          <Link
            to="/joinmeeting"
            style={{ color: "white", textDecoration: "none" }}
          >
            Join Meeting
          </Link>
        </button>
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
    </div>
  );
};

export default Home;
