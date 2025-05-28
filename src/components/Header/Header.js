import React from 'react';
import './Header.css';
import { FaBell, FaPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Healthcare.</h1>
      <div className="header-actions">
        <input className="search-bar" type="text" placeholder="Search..." />
        <FaBell className="icon" />
        <img
          className="profile-pic"
          src="https://via.placeholder.com/40"
          alt="User"
        />
        <button className="add-button">
          <FaPlus />
        </button>
      </div>
    </header>
  );
};

export default Header;
