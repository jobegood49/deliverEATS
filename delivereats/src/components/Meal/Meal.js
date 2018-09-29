import React from 'react';
import './Meal.css';
import LinesEllipsis from 'react-lines-ellipsis';

const Meal = ({ item, addMeal }) => {
  return (
    <div className="cardContainer" onClick={() => addMeal(item)}>
      <div>
        <h5 className="title">{item.title}</h5>
        <LinesEllipsis
          text={item.description}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
          className="itemDesc foodDescription"
        />
        <div className="foodPrice">
          <p>{item.price}</p>
        </div>
      </div>
      <div>
        {item.picture && (
          <img
            style={{ height: 100, width: 100, objectFit: 'cover' }}
            src={item.picture}
            alt={item.title}
          />
        )}
      </div>
    </div>
  );
};

export default Meal;
