import React, { Component } from 'react';

export default class Cart extends Component {
  state = {
    subTotal: 0,
    items: [],
  };
  render() {
    return (
      <div>
        <p>THIS IS THE CART</p>
      </div>
    );
  }
}
