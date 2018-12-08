import React, { Component } from 'react';


class FeedBackFour extends Component {

  handleClick = () => {
    console.log('Four has been clicked');
    this.props.history.push("/submit");
  }


  render () {
    return (
      <div>
        <h1>FeedBack Four</h1>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default FeedBackFour;