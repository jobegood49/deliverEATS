import React, { Component } from 'react';
import './Checkout.css';

export default class Checkout extends Component {
  render() {
    return (
      <div>
        {typeof this.props.location.params !== 'undefined' ? (
          this.props.location.params.cart.map(cartItem => (
            <div className="item">
              <p>{cartItem.title}</p>
              <p>{cartItem.price}</p>
              <p>{cartItem.quantity}</p>
            </div>
          ))
        ) : (
          <p>PLEASE SELECT ITEMS BEFORE CHECKOUT</p>
        )}
      </div>
    );
  }
}
