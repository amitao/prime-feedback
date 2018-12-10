import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplaySubmit from '../DisplaySubmit/DisplaySubmit';


class FeedBackOne extends Component {

  state = {
    feeling: ''
  }

  // next button to feedback two
  handleClick = () => {
    console.log('Feedback one has been clicked');
    this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {key:'Feeling',value: this.state.feeling}});
    this.props.history.push("/feedbacktwo");
    // newFeedBack
  }

  // handleChange to setState with new data when NEXT button is clicked
  handleChange = (event) => {
    this.setState({
      feeling: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>1 of 4 pages</h2>
        <div className="box">
          <div>
            <p className="questions">How are you feeling today?</p>
            <input type="number" onChange={this.handleChange}/>
          </div>
          <button onClick={this.handleClick}>NEXT</button>
        </div> {/* .box */}
        <DisplaySubmit />
      </div> 
    )
  }
}

export default connect()(FeedBackOne);