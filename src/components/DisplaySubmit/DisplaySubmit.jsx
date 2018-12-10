import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

// Component to displays all the components
class DisplaySubmit extends Component {


  handleClick = () => {
    // displays data from redux store in console
    // console.log('sending data:', this.props.reduxState);

    const feedback = this.props.reduxState.enterFeedBackReducer;

    let feedbackData = {
      feeling: feedback.Feeling,
      understanding: feedback.Understanding,
      support: feedback.Support,
      comments: feedback.Comments
    }

   console.log('sending data in redux store:', feedbackData);

   // Axios POST to send redux data to DB
    axios.post('/api/feedback',feedbackData)
    .then( response => {
      console.log(response);
      this.props.history.push('/thankyou');
    })
    .catch( err => {
      console.log('ERROR in POST request', err);
    })
  }
  
  render () {

    const objects = [];
    const reducerState = this.props.reduxState.enterFeedBackReducer; // {k:v}

    for(const key in reducerState){
      objects.push(
        <p className="display-p-tag" key={key}>{key}: {reducerState[key]}</p>
        );
    }

    // let displayFeedback = this.props.reduxState.enterFeedBackReducer.map( feedback => {
    //   return <p key={feedback}> {} {feedback}</p>
    // })
    
    return (
      <div>
        <h2>feedbacks results:</h2>
          <div>
          { objects }
          </div>
          <button onClick={this.handleClick}>SUBMIT TO DB</button>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default withRouter(connect(mapStateToProps)(DisplaySubmit));