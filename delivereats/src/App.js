import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menus from './components/Menus';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/menus" component={Menus} />
      </Router>
    );
  }
}

export default App;
