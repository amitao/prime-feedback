import React, { Component } from 'react';
import { connect } from 'react-redux';


class Review extends Component {

  render () {

    let displayFeedback = this.props.reduxState.enterFeedBackReducer.map( feedback => {
      return <p key={feedback}>{feedback}</p>
    })
    
    return (
      <div>
        <h1>Review the feedbacks</h1>
        { displayFeedback }
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(Review);