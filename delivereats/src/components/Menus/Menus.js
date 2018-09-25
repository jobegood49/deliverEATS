import React from 'react';
import './Menus.css';
import RestaurantDesc from './../RestaurantDesc/';

const Menus = ({ restaurant, menus }) => {
  // console.log(menus);
  // console.log(menus.Brunchs[0].title);
  console.log(restaurant);

  return (
    <div className="container">
      <div className="restDesc">
        <RestaurantDesc restaurant={restaurant} />
      </div>
      {/* <p>{menus.Brunchs[0].title}</p> */}
    </div>
  );
};

export default Menus;
