import React, { Component } from 'react';
import Header from '../Header/Header';
import FeedBackOne from '../FeedBackOne/FeedBackOne';
import FeedBackTwo from '../FeedBackTwo/FeedBackTwo';
import FeedBackThree from '../FeedBackThree/FeedBackThree';
import FeedBackFour from '../FeedBackFour/FeedBackFour';
import Thankyou from '../Thankyou/Thankyou';
import Admin from '../Admin/Admin';
// import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';



class App extends Component {



  render() {
    return (
      <Router>
        <div className="main">
        {/* header can be outside of <Router> */}
          <Header /> 
          <div className="App">
            <Route path='/' exact component={FeedBackOne} />
            <Route path='/feedbacktwo' component={FeedBackTwo} />
            <Route path='/feedbackthree' component={FeedBackThree} />
            <Route path='/feedbackfour' component={FeedBackFour} />
            <Route path='/thankyou' component={Thankyou} />
            <Route path='/admin' component={Admin} />
          </div>
          <img className="bg-image" src="images/vegaBG24.png" alt="background"/>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
