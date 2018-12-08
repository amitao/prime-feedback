import React, { Component } from 'react';


class FeedBackTwo extends Component {

  handleClick = () => {
    console.log('Two has been clicked');
    this.props.history.push("/feedbackthree");
  }



  render () {
    return (
      <div>
        <h1>FeedBack Two</h1>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default FeedBackTwo;