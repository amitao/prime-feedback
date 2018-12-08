import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeedBackOne extends Component {


  // next button to feedback two
  handleClick = () => {
    console.log('Feedback one has been clicked');
    this.props.history.push("/feedbacktwo");
    this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.newFeedBack});
  }

  // handleChange to setState with new data when NEXT button is clicked
  HandleChange = (event) => {
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
            <input onChange={this.HandleChange}/>
          </div>
          <button onClick={this.handleClick}>NEXT</button>
        </div> {/* .box-border */}
      </div> 
    )
  }
}

export default connect()(FeedBackOne);