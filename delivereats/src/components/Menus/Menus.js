import React from 'react';
import './Menus.css';
import MenuItems from '../MenuItems';
import RestaurantDesc from './../RestaurantDesc/';
import Cart from '../Cart';
const Menus = ({ restaurant, menus }) => {
  const categories = Object.keys(menus);
  return (
    <div className="containerMain">
      <div className="restaurantComponentContainer">
        <RestaurantDesc restaurant={restaurant} />
      </div>
      <div className="menus">
        <div className="menuContainer">
          <div className="menuItemsContainer">
            <div className="menuItemsComponent">
              {categories.map(category => {
                if (menus[category].length > 0) {
                  return (
                    <MenuItems category={category} items={menus[category]} />
                  );
                }
              })}
            </div>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
