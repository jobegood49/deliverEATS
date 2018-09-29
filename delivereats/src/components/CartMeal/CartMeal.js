import React from 'react';
import './CartMeal.css';
import Price from 'format-price';

const CartMeal = ({ cartMeal, increment, decrement }) => {
  return (
    <div className="cartMealContainer">
      <div className="quantityContainer">
        <button className="cart-button" onClick={() => decrement(cartMeal.id)}>
          <i className="fas fa-minus-circle" />
        </button>
        <p>{cartMeal.quantity}</p>
        <button className="cart-button" onClick={() => increment(cartMeal.id)}>
          <i className="fas fa-plus-circle" />
        </button>
        {cartMeal.title}
      </div>
      <p>{Price.format('fr-FR', 'EUR', cartMeal.price * cartMeal.quantity)}</p>
    </div>
  );
};

export default CartMeal;
