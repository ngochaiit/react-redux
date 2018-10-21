import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './redux/containers/user-list'
import selectuser from './redux/actions/index'
import UserDetail from './redux/containers/user-detail'
import userDetail from './redux/containers/user-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>UserName :</h2>
        <UserList/>
        <hr/>
        <h2>User Detail:</h2>
        <UserDetail></UserDetail>
      </div>
    );
  }
}

export default App;
