import React, { Component } from 'react';
import './Cart.css';
import CartMeal from '../CartMeal';
import Total from '../Total';

export default class Cart extends Component {
  render() {
    return (
      <div className="cartContainer">
        <div className="cartComponent">
          <div className="button">
            <p>Valider mon panier</p>
          </div>
          {this.props.cart.length > 0 ? (
            <div>
              {this.props.cart.map((cartMeal, i) => (
                <CartMeal
                  key={i}
                  cartMeal={cartMeal}
                  increment={this.props.increment}
                  decrement={this.props.decrement}
                />
              ))}
              <Total cart={this.props.cart} />
            </div>
          ) : (
            <div className="list">
              <p> no items in cart</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
