import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeedBackOne extends Component {

  handleClick = () => {
    console.log('Feedback one has been clicked');
    
  }

  render () {
    return (
      <div>
        <h1>FeedBack One</h1>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default connect()(FeedBackOne);