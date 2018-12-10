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

    // assigned data in redux storre to feedbackData and pass it to axios.post()
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
      // url to direct you back to next component/page - thankyou
      this.props.history.push('/thankyou');
    })
    .catch( err => {
      console.log('ERROR in POST request', err);
    })
  }
  
  render () {

    // declared empty array to push reducer "enterFeedBackReducer" object to display
    const objects = [];
    // assigned data from reducer to variable 
    const reducerState = this.props.reduxState.enterFeedBackReducer; // {k:v}

    // loop through object value in reducer and push into object array[]
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
        <h2>feedback results:</h2>
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

export default connect(mapStateToProps)(DisplaySubmit);