import React, { Component } from 'react';
import Menus from './Menus';
import { Spinner } from 'react-activity';
import { connect } from 'react-redux';
import { fetchMenus } from '../../redux/actions/menusActions';

class MenusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  addMeal = meal => {
    let newCart = [...this.state.cart];
    let isInCart = false;
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === meal.id) {
        isInCart = true;
        newCart[i].quantity++;
        break;
      }
    }
    if (!isInCart) {
      meal = {
        id: meal.id,
        title: meal.title,
        price: meal.price,
        quantity: 1,
      };
      newCart.push(meal);
    }
    this.setState({ cart: newCart });
  };

  // addMeal = meal => {
  //   console.log(meal);
  // };
  // increment = id => {
  //   console.log(id);
  // };
  // decrement = id => {
  //   console.log(id);
  // };
  increment = id => {
    let newCart = [...this.state.cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === id) {
        newCart[i].quantity += 1;
      }
    }
    this.setState({ cart: newCart });
  };

  decrement = id => {
    let newCart = [...this.state.cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === id) {
        newCart[i].quantity -= 1;
        if (newCart[i].quantity === 0) newCart.splice(i, 1);
      }
    }
    this.setState({ cart: newCart });
  };

  componentDidMount() {
    this.props.fetchMenus();
  }

  render() {
    return (
      <Menus
        cart={this.state.cart}
        restaurant={this.props.restaurant}
        menus={this.props.menus}
        addMeal={this.addMeal}
        increment={this.increment}
        decrement={this.decrement}
      />
    );
  }
}

const mapStateToProps = state => ({
  menus: state.menus.menuItems,
  restaurant: state.menus.restaurant,
  cart: state.cart.cartItems,
  cartItem: state.cart.cartItem,
});
export default connect(
  mapStateToProps,
  { fetchMenus },
)(MenusContainer);
