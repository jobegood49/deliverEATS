import React from 'react';
import Meal from '../Meal';
import './MenuItems.css';

const MenuItems = ({ category, items, addMeal, cart, increase }) => {
  return (
    <div>
      <h2>{category}</h2>
      <div className="menuItemsMeal">
        {items.map((item, i) => (
          <Meal
            key={i}
            item={item}
            addMeal={addMeal}
            increase={increase}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
