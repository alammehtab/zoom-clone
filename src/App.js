import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
// import NavBar from "./components/NavBar/Navbar";

import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";

const App = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
