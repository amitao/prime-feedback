import React, { Component } from 'react';
import axios from 'axios';


class Admin extends Component {

  state = {
    feedbackList: []
  }

  componentDidMount() {
    this.getFeedback();
  }

  // GET request to get data from DB to display on DOM
  getFeedback = () => {
    axios.get('/api/feedback').then( response => {
      console.log(response.data);
      // update state with data from DB
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
    // map array and render to DOM
    let table = this.state.feedbackList.map( feedback => {
      return <tr key={feedback.id}>
              <td>{feedback.feeling}</td>
              <td>{feedback.understanding}</td>
              <td>{feedback.support}</td>
              <td>{feedback.comments}</td>
              <td><button onClick={this.handleDelete}>DELETE</button></td>
              </tr>
    })

    return (
      <div>
        <h2>Admin page</h2>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { table }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Admin;