import React from 'react';
import { Link } from 'react-router-dom';
import './MobileNav.css';

export const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div 
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className='mobile-menu-container'>
        <img className="logo" src={"src/assets/images/logo.png"} alt="Logo" />
          <ul>
            <li>
              <Link className="menu-item" to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link className="menu-item" to="/doacoes" onClick={toggleMenu}>Doações</Link>
            </li>
            <li>
              <Link className="menu-item" to="/noticias" onClick={toggleMenu}>Notícias</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
