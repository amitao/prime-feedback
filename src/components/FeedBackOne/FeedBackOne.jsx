import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class FeedBackOne extends Component {

  state = {
    newFeedBack: ''
  }

  // next button to feedback two
  handleClick = () => {
    console.log('Feedback one has been clicked');
    this.props.history.push("/feedbacktwo");
    this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.newFeedBack});
    // newFeedBack
  }

  // handleChange to setState with new data when NEXT button is clicked
  handleChange = (event) => {
    this.setState({
      newFeedBack: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>FeedBack One</h1>
        <p>1 of 4 pages</p>
        <div className="box">
          <div>
            <p>How are you feeling today?</p>
            <input onChange={this.handleChange}/>
          </div>
          <button onClick={this.handleClick}>NEXT</button>
        </div> {/* .box */}
      </div> 
    )
  }
}

export default withRouter(connect()(FeedBackOne));