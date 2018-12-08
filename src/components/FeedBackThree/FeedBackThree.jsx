import React, { Component } from 'react';


class FeedBackThree extends Component {

  // Next button to feedback four
  handleClick = () => {
    console.log('Three has been clicked');
    this.props.history.push("/feedbackfour");
  }
  

  render () {
    return (
      <div>
        <h1>FeedBack Three</h1>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default FeedBackThree;