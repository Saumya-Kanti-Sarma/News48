import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="logo" onClick={navigate("/publisher")}>48 Hours.com</h1>
        <img src="/Menu.svg" alt="Menu" className="menu-icon" onClick={toggleMenu} />
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li onClick={closeMenu}>
            <Link to="/publisher/addnews">Add</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/publish">Publish</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      {menuOpen && <div className="backdrop" onClick={closeMenu}></div>}
    </>
  );
};

export default NavBar;
