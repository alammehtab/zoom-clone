import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <div className="logo-and-name">
              <i class="fab fa-skype fa-2x"></i>
              <span style={{ fontSize: 20, fontWeight: "bolder", marginLeft:10 }}>
                Let's Meet
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
