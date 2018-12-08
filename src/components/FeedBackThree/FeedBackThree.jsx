import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class FeedBackThree extends Component {

  state = {
    newFeedBack: ''
  }

  // Next button to feedback four
  handleClick = () => {
    console.log('Three has been clicked');
    this.props.history.push("/feedbackfour");
    this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.newFeedBack });
  }


  handleChange = (event) => {
    this.setState({
      newFeedBack: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>FeedBack Three</h1>
        <p>3 of 4 pages</p>
        <div className="box">
          <div>
            <p>How well are you being supported?</p>
            <input onChange={this.handleChange} />
          </div>
          <button onClick={this.handleClick}>NEXT</button>
        </div> {/* .box */}
      </div>
    )
  }
}

export default withRouter(connect()(FeedBackThree));