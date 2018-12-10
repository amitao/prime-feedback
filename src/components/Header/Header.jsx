import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render () {
    return (
      <div className="header-box">
        {/* <h1 className="h1-styling"></h1> */}
        <div><img className="fb-image" src="images/feedback24.png" alt="Feedback logo"/></div>
      </div>
    )
  }
}

export default Header;