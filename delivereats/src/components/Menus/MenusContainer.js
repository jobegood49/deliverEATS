import React, { Component } from 'react';
import axios from 'axios';
import Menus from './Menus';
import { Spinner } from 'react-activity';

class MenusContainer extends Component {
  state = {
    restaurant: {},
    menus: {},
    cart: [],
    isLoading: true,
  };

  addMeal = meal => {
    let newCart = [...this.state.cart]
    meal = {
      id: meal.id,
      title: meal.title,
      price: meal.price,
      quantity: 1,
    };
    newCart.push(meal)
    this.setState({cart: newCart})
  };

  increment(id) {
    let newCart = [...this.state.cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === id) {
        newCart[i].quantity += 1;
      }
    }
  }

  decrement(id){
    let newCart = [...this.state.cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === id) {
        newCart[i].quantity -= 1;
        if (newCart[i].quantity === 0) newCart.splice(i, 1)
      }
    }
  }

  componentDidMount() {
    axios
      .get(
        'https://s3-eu-west-1.amazonaws.com/lereacteurapp/react/deliveroo/deliveroo-cart.json'
      )
      .then(response =>
        this.setState({
          restaurant: response.data.restaurant,
          menus: response.data.menu,
          isLoading: false,
        })
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
