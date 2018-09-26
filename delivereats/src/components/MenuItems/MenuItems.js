import React from 'react';

const MenuItems = ({ menus }) => {
  let keys = Object.keys(menus);
  return (
    <div>
      {keys.map(key => (
        <h2>{key}</h2>
      ))}
    </div>
  );
};

export default MenuItems;
