import React, { Component } from 'react';
import axios from 'axios';
import Menus from './Menus';
import { Spinner } from 'react-activity';

class MenusContainer extends Component {
  state = {
    restaurant: {},
    menus: {},
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        'https://s3-eu-west-1.amazonaws.com/lereacteurapp/react/deliveroo/deliveroo-cart.json',
      )
      .then(response =>
        this.setState({
          restaurant: response.data.restaurant,
          menus: response.data.menu,
          isLoading: false,
        }),
      );
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <Menus restaurant={this.state.restaurant} menus={this.state.menus} />
      );
    } else {
      return (
        <div className="loadingIndicator">
          <Spinner color={'blue'} />
        </div>
      );
    }
  }
}

export default MenusContainer;
