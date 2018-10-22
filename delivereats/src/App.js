import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Menus from './components/Menus';
import Header from './components/Header';
import Checkout from './components/Checkout';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/menus" component={Menus} />
            <Route path="/checkout" component={Checkout} />
            <Redirect from="*" to="/menus" />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
