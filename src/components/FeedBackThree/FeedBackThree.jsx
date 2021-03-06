
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplaySubmit from '../DisplaySubmit/DisplaySubmit';


class FeedBackThree extends Component {

  state = {
    support: ''
  }

  // Next button to feedback four
  handleClick = () => {
    console.log('Three has been clicked');
    this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {key:'Support',value: this.state.support} });
    this.props.history.push("/feedbackfour");
  }


  handleChange = (event) => {
    this.setState({
      support: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>3 of 4 pages</h2>
        <div className="box">
          <div>
            <p className="questions">How well are you being supported?</p>
            <input type="number" onChange={this.handleChange} />
          </div>
          <button onClick={this.handleClick}>NEXT</button>
        </div> {/* .box */}
        <DisplaySubmit />
      </div>
    )
  }
}

export default connect()(FeedBackThree);