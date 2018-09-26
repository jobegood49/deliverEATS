import React from 'react';
import './Menus.css';
import MenuItems from '../MenuItems';
import RestaurantDesc from './../RestaurantDesc/';

const Menus = ({ restaurant, menus }) => {
  const categories = Object.keys(menus);

  // console.log(menus);
  // console.log(menus.Brunchs[0].title);
  console.log(restaurant);

  return (
    <div className="container">
      <div className="restContainer">
        <div className="restDesc">
          <RestaurantDesc restaurant={restaurant} />
        </div>
      </div>
      <div className="menuItemsContainer">
        {categories.map(category => {
          if (menus[category].length > 0) {
            return <MenuItems category={category} items={menus[category]} />;
          }
        })}
      </div>
    </div>
  );
};

export default Menus;
