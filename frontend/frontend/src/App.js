import React, { Component } from 'react';
import Album from './template/Album';
import './App.css';

const API_ROUTE = '/api/v1';

class App extends Component {
  constructor() {
    super();
    this.state = {callingApi: true, apiResponse: {}};
    this._callApi();
  }

  _callApi() {
    fetch(API_ROUTE).then((response) => {
      return response.json();
    }).then((responseJSON) => {
      this.setState({callingApi: false, apiResponse: responseJSON});
    });
  }

  get apiStatus() {
    if (this.state.callingApi) {
      return "Calling Api";
    } else {
      return this.state.apiResponse.message;
    }
  }

  render() {
    console.log(this.apiStatus);
    return (
      <div className="App">
        <Album />
      </div>
    );
  }
}

export default App;
