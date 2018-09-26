import React from 'react';
import Meal from '../Meal';
import './MenuItems.css';

const MenuItems = ({ category, items }) => {
  return (
    <div>
      <h2>{category}</h2>
      <div className="menuItemsMeal">
        {items.map(item => (
          <Meal item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
