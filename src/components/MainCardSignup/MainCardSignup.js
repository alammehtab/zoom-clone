import React from "react";
import { Link } from "react-router-dom";
import "./MainCardSignup.css";

const MainCardSignup = () => {
  return (
    <div className="main-card">
      <div className="left-div">
        <div>
          <h3>SIGN UP FREE</h3>
          <br />
          <p>Meetings and Chat for free</p>
        </div>
        <br />
        <div>
          <i class="fas fa-user-plus fa-6x"></i>
        </div>
        <br />
        <div>
          <p>
            Already have an account?
            <Link class to="/signin">
              {" "}
              Sign In
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="right-div">
        {/* BOOTSTRAP FORM */}
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <p>
            By signing up, I agree to the <Link>Zoom's Privacy Statement </Link>
            and
            <Link> Terms of Service.</Link>
          </p>
          <button className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default MainCardSignup;
