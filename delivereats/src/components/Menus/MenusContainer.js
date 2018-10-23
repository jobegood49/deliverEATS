import React, { Component } from 'react';
import Menus from './Menus';
import { fetchMenus } from '../../redux/actions/menuActions';
import {
  increaseQuantity,
  reduceQuantity,
  addToCart,
  removeFromCart,
} from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

class MenusContainer extends Component {
  doneLoading = false;
  componentDidMount() {
    this.props.fetchMenus();
    this.doneLoading = true;
  }

  render() {
    return (
      this.doneLoading && (
        <Menus
          cart={this.props.cart}
          restaurant={this.props.restaurant}
          menus={this.props.menus}
          addMeal={this.props.addToCart}
          increase={this.props.increaseQuantity}
          decrease={this.props.reduceQuantity}
          removeMeal={this.props.removeFromCart}
        />
      )
    );
  }
}

const mapStateToProps = state => ({
  menus: state.menus.menuItems,
  restaurant: state.menus.restaurant,
  cart: state.cart.cartItems,
});

export default connect(
  mapStateToProps,
  { fetchMenus, reduceQuantity, increaseQuantity, addToCart, removeFromCart },
)(MenusContainer);
