import React, { Component } from 'react';
import axios from 'axios';


class Admin extends Component {

  state = {
    feedbackList: []
  }

  componentDidMount() {
    this.getFeedback();
  }

  getFeedback = () => {
    axios.get('/api/feedback').then( response => {
      console.log(response.data);
      this.setState({
        feedbackList: response.data
      })
    }).catch( err => {
      console.log('Error getting data from the DB:', err);
    });
  }


  handleDelete = () => {
    console.log('Delete button has been clicked');
  }

  render () {

    let table = this.state.feedbackList.map( feedback => {
      return <li key={feedback.id}>
              {feedback.feeling}
              {feedback.understanding}
              {feedback.support}
              {feedback.comments}
              </li>
    })




    return (
      <div>
        <h2>Admin page</h2>
        {table}
        <button onClick={this.handleDelete}>DELETE</button>
      </div>
    )
  }
}

export default Admin;