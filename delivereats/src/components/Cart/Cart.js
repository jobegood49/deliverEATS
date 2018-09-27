import React, { Component } from 'react';
import './Cart.css';

export default class Cart extends Component {
  state = {
    subTotal: 0,
    items: [],
  };
  render() {
    return (
      <div className="cartContainer">
        <div className="cartComponent">
          <div className="button">
            <p>THIS IS THE CART</p>
          </div>
          <div className="list">no items in cart</div>
        </div>
      </div>
    );
  }
}
