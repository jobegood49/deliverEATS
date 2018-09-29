import React, { Component } from 'react';
import './Cart.css';
import CartMeal from '../CartMeal';

export default class Cart extends Component {
  render() {
    return (
      <div className="cartContainer">
        <div className="cartComponent">
          <div className="button">
            <p>Valider mon panier</p>
          </div>
          {this.props.cart &&
            this.props.cart.map((cartMeal, i) => (
              <CartMeal
                key={i}
                cartMeal={cartMeal}
                increment={this.props.increment}
                decrement={this.props.decrement}
              />
            ))}
          <div className="list">no items in cart</div>
        </div>
      </div>
    );
  }
}
