import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class FeedBackTwo extends Component {

  state = {
    newFeedBack: ''
  }

  handleClick = () => {
    console.log('Two has been clicked');
    this.props.history.push("/feedbackthree");
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
        <h1>FeedBack Two</h1>
        <p>2 of 4 pages</p>
        <div className="box">
          <div>
            <p>How well are you understanding the content?</p>
            <input onChange={this.handleChange} />
          </div>
          <button onClick={this.handleClick}>NEXT</button>
        </div> {/* .box */}
      </div>
    )
  }
}

export default withRouter(connect()(FeedBackTwo));