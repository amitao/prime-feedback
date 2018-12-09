import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Review from '../Review/Review';


class FeedBackTwo extends Component {

  state = {
    understanding: ''
  }

  handleClick = () => {
    console.log('Two has been clicked');
    this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {key: 'Understanding', value: this.state.understanding} });
    this.props.history.push("/feedbackthree");
  }

  handleChange = (event) => {
    this.setState({
      understanding: event.target.value
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
            <input type="number" onChange={this.handleChange} />
          </div>
          <button onClick={this.handleClick}>NEXT</button>
        </div> {/* .box */}
        <Review />
      </div>
    )
  }
}

export default withRouter(connect()(FeedBackTwo));