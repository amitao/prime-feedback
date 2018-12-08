import React, { Component } from 'react';
import Header from '../Header/Header';
import FeedBackOne from '../FeedBackOne/FeedBackOne';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FeedBackOne />
      </div>
    );
  }
}

export default connect()(App);
