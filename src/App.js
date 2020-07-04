import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/nav";
import Home from "./components/Home/home";
import Reception from "./components/Reception/reception";
import Service from "./components/Service/service";
import "./App.css";

export default () => {
  return (
    <div className='app'>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reception' component={Reception} />
          <Route path='/service' component={Service} />
        </Switch>
      </Router>
    </div>
  );
};
