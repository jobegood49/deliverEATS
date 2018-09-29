import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Menus from './components/Menus';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/menus" component={Menus} />
            <Redirect from="*" to="/menus" />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
