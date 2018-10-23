import React, { Component } from 'react';
import Menus from './Menus';
import { fetchMenus } from '../../redux/actions/menuActions';
import { increaseQuantity, addToCart } from '../../redux/actions/cartActions';
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
  { fetchMenus, increaseQuantity, addToCart },
)(MenusContainer);
