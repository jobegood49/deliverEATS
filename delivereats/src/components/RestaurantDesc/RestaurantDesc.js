import React from 'react';

const RestaurantDesc = ({ restaurant }) => {
  return (
    <div>
      <p>{restaurant.name}</p>
      <p>{restaurant.description}</p>
      <img src={restaurant.picture}/>
    </div>
  );
};

export default RestaurantDesc;
