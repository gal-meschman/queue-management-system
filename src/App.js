import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Reception from "./components/reception/Reception";
import Service from "./components/service/Service";
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
