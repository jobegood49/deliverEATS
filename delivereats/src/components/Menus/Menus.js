import React from 'react';
import './Menus.css';
import MenuItems from '../MenuItems';
import RestaurantDesc from './../RestaurantDesc/';
import Cart from '../Cart';
const Menus = ({ restaurant, menus }) => {
  const categories = Object.keys(menus);
  console.log(restaurant);

  return (
    <div className="containerMain">
      <div className="RestaurantComponentContainer">
        <RestaurantDesc restaurant={restaurant} />
      </div>
      <main>
        <div className="MenuContainer">
          <div className="MenuItemsContainer">
            <div className="MenuItemsComponent">
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
      </main>
    </div>
  );
};

export default Menus;
