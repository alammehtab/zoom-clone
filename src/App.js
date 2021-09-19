import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/Navbar";

import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import JoinMeeting from "./pages/JoinMeeting";

const App = () => {
  return (
    <div>
      <NavBar />
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
        <Route path="/joinmeeting">
          <JoinMeeting />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
