import React from 'react';
import './Menus.css';
import MenuItems from '../MenuItems';
import RestaurantDesc from './../RestaurantDesc/';
import Cart from '../Cart';

const Menus = ({
  restaurant,
  menus,
  addMeal,
  increase,
  decrease,
  cart,
  removeMeal,
}) => {
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
              {categories.map((category, i) => {
                if (menus[category].length > 0) {
                  return (
                    <MenuItems
                      key={i}
                      cart={cart}
                      addMeal={addMeal}
                      increase={increase}
                      category={category}
                      items={menus[category]}
                    />
                  );
                }
              })}
            </div>
            <Cart
              increase={increase}
              decrease={decrease}
              cart={cart}
              removeMeal={removeMeal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
