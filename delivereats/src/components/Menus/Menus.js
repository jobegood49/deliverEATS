import React from 'react';
import './Menus.css';
import MenuItems from '../MenuItems';
import RestaurantDesc from './../RestaurantDesc/';

const Menus = ({ restaurant, menus }) => {
  const categories = Object.keys(menus);
  console.log(restaurant);

  return (
    <div className="container">
      <div className="RestaurantComponentContainer">
        <div className="RestaurantComponent">
          <RestaurantDesc restaurant={restaurant} />
        </div>
      </div>

      <div className="MenuItemsComponentContainer">
        <div className="MenuItemsComponent">
          {categories.map(category => {
            if (menus[category].length > 0) {
              return <MenuItems category={category} items={menus[category]} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Menus;
