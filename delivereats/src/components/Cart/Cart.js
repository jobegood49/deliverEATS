import React, { Component } from 'react';
import './Cart.css';
import CartMeal from '../CartMeal';
import Total from '../Total';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  render() {
    return (
      <div className="cartContainer">
        <div className="cartComponent">
          <Link
            to={{ pathname: '/checkout', params: { cart: this.props.cart } }}
          >
            <div className="button">
              <p>Valider mon panier</p>
            </div>
          </Link>
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
