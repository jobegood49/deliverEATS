import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <img
          src="https://cwa.roocdn.com/_next/static/logo-teal.64a39561.svg"
          className="logo"
          alt="Logo Deliveroo"
        />
      </div>
    </header>
  );
};

export default Header;
