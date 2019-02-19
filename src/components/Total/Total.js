import React from 'react';
import './Total.css';
import Price from 'format-price';

const Total = ({ cart }) => {
  let total = cart.reduce((acc, meal) => {
    return acc + meal.price * meal.quantity;
  }, 0);
  return (
    <div className='totalContainer'>
      <div className='totalText'>Total</div>
      <div className='totalText'>{Price.format('fr-FR', 'EUR', total)}</div>
    </div>
  );
};

export default Total;
