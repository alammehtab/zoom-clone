import React from "react";
import "./joinmeeting.css";

const JoinMeeting = () => {
  return (
    <form className="container">
      <div>
        <h5>Join Meeting</h5>
        <br />
        <p>Share the meeting link to invite others</p>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" />
      </div>
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Please enter your name"
      />
      <br />
      <button className="btn btn-primary btn-block">Join meeting</button>
    </form>
  );
};

export default JoinMeeting;
