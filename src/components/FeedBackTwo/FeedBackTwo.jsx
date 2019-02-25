import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplaySubmit from '../DisplaySubmit/DisplaySubmit';


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
        <h2>2 of 4 pages</h2>
        <div className="box">
          <div>
            <p className="questions">How well are you understanding the content?</p>
            <input type="number" onChange={this.handleChange} />
          </div>
          <button onClick={this.handleClick}>NEXT</button>
        </div> {/* .box */}
        <DisplaySubmit />
      </div>
    )
  }
}

export default connect()(FeedBackTwo);
