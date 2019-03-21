import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import '../App.css';
import { SearchLocation } from './searchLocation/SearchLocation';
import { Header } from './common/Header';
import { LocationForecast } from "./locationForecast/LocationForecast"



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={SearchLocation} />
          <Route path="/location" component={LocationForecast} />
        </Switch>
      </div>
    );
  }
}

export default App;
