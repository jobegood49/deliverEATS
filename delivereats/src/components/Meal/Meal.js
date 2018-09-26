import React from 'react';
import './Meal.css';
import LinesEllipsis from 'react-lines-ellipsis';

const Meal = ({ item }) => {
  return (
    <div className="cardContainer">
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <img style={{ height: 50 }} src={item.picture} />
    </div>
  );
};

export default Meal;
