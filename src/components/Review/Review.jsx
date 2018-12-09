import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

// Component to displays all the components
class Review extends Component {


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


    axios.post('/api/feedback',feedbackData)
    .then( response => {
      console.log(response);
      this.props.history.push('/result');
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
        <p key={key}>{key}: {reducerState[key]}</p>
        );
    }

    // let displayFeedback = this.props.reduxState.enterFeedBackReducer.map( feedback => {
    //   return <p key={feedback}> {} {feedback}</p>
    // })
    
    return (
      <div>
        <h1>Review the feedbacks</h1>
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

export default withRouter(connect(mapStateToProps)(Review));