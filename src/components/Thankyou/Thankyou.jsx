import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';


class FeedBackResults extends Component {

  // state = {
  //   newFB = ''
  // }


  handleClickReset = () => {
    console.log('button to reset and back to FB 1');
    this.props.dispatch({ type:'RESET', payload: {key:'',value: ''}});
    this.props.history.push("/");
  }

  render () {
    return (
      <div className="box">
        <h1>Thank you! Your feedback has been submitted.</h1>
        <button onClick={this.handleClickReset}>New FeedBack</button>
      </div>
    )
  }
}

export default withRouter(connect()(FeedBackResults));