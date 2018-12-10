import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render () {
    return (
      <div className="header-box">
        {/* <h1 className="h1-styling"></h1> */}
        <div><img className="fb-image" src="images/feedback24.png" /></div>
      </div>
    )
  }
}

export default Header;