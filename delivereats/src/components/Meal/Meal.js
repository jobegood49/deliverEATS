import React from 'react';
import './Meal.css';
import LinesEllipsis from 'react-lines-ellipsis';

const Meal = ({ item }) => {
  return (
    <div className="cardContainer">
      <div className="itemDesc">
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
      <div className="itemPic">
        <img src={item.picture} />
      </div>
    </div>
  );
};

export default Meal;
