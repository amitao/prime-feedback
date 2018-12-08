import React, { Component } from 'react';


class SubmitFeedBack extends Component {

  handleClick = () => {
    console.log('Submit has been clicked');
  }


  render () {
    return (
      <div>
        <h1>Submit FeedBack</h1>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export default SubmitFeedBack;