import React, { Component } from 'react';
import './Cart.css';

export default class Cart extends Component {
  render() {
    return (
      <div className="cartContainer">
        <div className="cartComponent">
          <div className="button">
            {this.props.cart &&
              this.props.cart.map(cartItem => <p>{cartItem.title}</p>)}
          </div>
          <div className="list">no items in cart</div>
        </div>
      </div>
    );
  }
}
