import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import test from "./containers/test";
import MyComponent from "./components/MyComponent";


export default () =>
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/myComponent" exact component={MyComponent} />
  </Switch>;