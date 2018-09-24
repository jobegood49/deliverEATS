import React from 'react';
import './Menus.css';

const Menus = ({ restaurant, menus }) => {
  console.log(menus);
  console.log(menus.Brunchs[0].title);
  return (
    <div className="text">
      <p>{restaurant.name}</p>
      <p>{menus.Brunchs[0].title}</p>
    </div>
  );
};

export default Menus;
