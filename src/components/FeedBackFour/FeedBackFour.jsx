import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplaySubmit from '../DisplaySubmit/DisplaySubmit';


class FeedBackFour extends Component {

  state = {
    comment: ''
  }

  handleClick = () => {
    console.log('Four has been clicked');
    // dispatch to send data to redux store with key and value
    this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {key:'Comments',value: this.state.comment}})
  }

  // function to input value 
  handleChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>1 of 4 pages</h2>
        <div className="box">
          <div>
          <p className="questions">Any comments for us?</p>
            <input type="text" onChange={this.handleChange} />
          </div>
          <button onClick={this.handleClick}>Enter</button>
        </div>
        <DisplaySubmit />
      </div>
    )
  }
}

export default connect()(FeedBackFour);