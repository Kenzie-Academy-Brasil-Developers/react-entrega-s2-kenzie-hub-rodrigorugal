import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import { useState } from "react";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Tech from "../pages/Tech";

const Routes = () => {
  const [user, setUser] = useState({});

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/Register">
        <Register />
      </Route>

      <Route path="/Home">
        <Home />
      </Route>

      <Route path="/Tech">
        <Tech />
      </Route>
    </Switch>
  );
};
export default Routes;
