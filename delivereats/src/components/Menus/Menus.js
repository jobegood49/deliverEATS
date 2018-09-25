import React from 'react';
import './Menus.css';
import RestaurantDesc from './../RestaurantDesc/';

const Menus = ({ restaurant, menus }) => {
  console.log(menus);
  console.log(menus.Brunchs[0].title);
  return (
    <div className="text">
      <p>{restaurant.name}</p>
      <RestaurantDesc />
      <p>{menus.Brunchs[0].title}</p>
    </div>
  );
};

export default Menus;
