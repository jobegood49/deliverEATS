import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menus from './components/Menus';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Route path="/menus" component={Menus} />
          <Route path="" component={Menus} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
