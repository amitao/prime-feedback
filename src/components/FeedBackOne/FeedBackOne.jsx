import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeedBackOne extends Component {

  // next button to feedback two
  handleClick = () => {
    console.log('Feedback one has been clicked');
    this.props.history.push("/feedbacktwo");
  }

  render () {
    return (
      <div>
        <h1>FeedBack One</h1>
        <div className="box-border">
          <p>1 of 4 pages</p>
          <div>

          </div>
        </div>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default connect()(FeedBackOne);