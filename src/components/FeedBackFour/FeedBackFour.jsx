import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Review from '../Review/Review';


class FeedBackFour extends Component {

  state = {
    comment: ''
  }

  handleClick = () => {
    console.log('Four has been clicked');
    // submit to DB 
    // this.props.history.push("/result");
    this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.comment})
  }

  handleChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>FeedBack Four</h1>
        <div className="box">
          <div>
            <p>Comments</p>
            <input onChange={this.handleChange} />
          </div>
          <button onClick={this.handleClick}>Enter</button>
        </div>
        <Review />
      </div>
    )
  }
}

export default withRouter(connect()(FeedBackFour));