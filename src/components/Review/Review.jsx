import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

// Component to displays all the components
class Review extends Component {

  // state ={
  //   complete: false
  // }

  handleClick = () => {
    // this.setState({
    //   complete: true
    // })
    console.log('Review has been clicked');
    this.props.history.push('/result')
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

    // let btn; 

    // if (this.state.complete){
    //   btn = <button onClick={this.handleClick}>Submit</button>
    // } else {
    //   btn = <button onClick={this.handleClick}>inComplete</button>
    // }
    
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