import React from 'react';
import './RestaurantDesc.css'

const RestaurantDesc = ({ restaurant }) => {
  return (
    <div className="restaurantDescContainer">
      <div className="restaurantInfo">
        <p>{restaurant.name}</p>
        <p>{restaurant.description}</p>
      </div>
      <div className="restaurantImage">
        <img src={restaurant.picture} />
      </div>
    </div>
  );
};

export default RestaurantDesc;
