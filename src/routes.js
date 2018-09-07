import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import FeaturedProps from "./components/FeaturedProps/FeaturedProps";


export default (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path='/test' component={FeaturedProps} />
  
    </Switch>
  );
