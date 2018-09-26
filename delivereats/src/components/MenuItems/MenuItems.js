import React from 'react';

const MenuItems = ({ category, items }) => {
  return (
    <div>
      <h2>{category}</h2>
      {items.map(item => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default MenuItems;
