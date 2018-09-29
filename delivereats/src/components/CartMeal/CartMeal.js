import React from 'react';
import './CartMeal.css';

const CartMeal = ({ cartMeal, increment, decrement }) => {
  return (
    <div className="cartMealContainer">
      <div className="quantityContainer">
        <button onClick={() => decrement(cartMeal.id)}>-</button>
        <p>{cartMeal.quantity}</p>
        <button onClick={() => increment(cartMeal.id)}>+</button>
        {cartMeal.title}
      </div>
      <p>{(cartMeal.price * cartMeal.quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartMeal;
