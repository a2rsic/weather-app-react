import React, { Component } from 'react';
import '../App.css';
import { SearchLocation } from './SearchLocation';
import { Header } from './common/Header';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchLocation />
      </div>
    );
  }
}

export default App;
