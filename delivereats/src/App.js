import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menus from './components/Menus';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/menus" component={Menus} />
        </div>
      </Router>
    );
  }
}

export default App;
