import React, { Component } from 'react';
import Header from '../Header/Header';
import FeedBackOne from '../FeedBackOne/FeedBackOne';
import FeedBackTwo from '../FeedBackTwo/FeedBackTwo';
import FeedBackThree from '../FeedBackThree/FeedBackThree';
import FeedBackFour from '../FeedBackFour/FeedBackFour';
import SubmitFeedBack from '../SubmitFeedBack/SubmitFeedBack';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';



class App extends Component {

  state = {
    newFeedBack: ''
  }


  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="App">
            <Route path='/' exact component={FeedBackOne} />
            <Route path='/feedbacktwo' component={FeedBackTwo} />
            <Route path='/feedbackthree' component={FeedBackThree} />
            <Route path='/feedbackfour' component={FeedBackFour} />
            <Route path='/submit' component={SubmitFeedBack} />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
