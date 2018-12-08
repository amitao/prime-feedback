import React, { Component } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default connect()(App);
