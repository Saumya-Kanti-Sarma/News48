import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './C_Nav.css';

const C_Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIMG, setMenuIMG] = useState("/Menu.svg");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    menuIMG == "/Menu.svg" ? setMenuIMG("/close_white.svg") : setMenuIMG("/Menu.svg")
  };

  return (
    <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className="C_logo">
        <button className='logo-btn'><h1>48Hours.com</h1></button>
      </div>
      <div className={`links ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/" exact activeClassName="active">Breaking News</NavLink>
        <NavLink to="/national" activeClassName="active">National</NavLink>
        <NavLink to="/international" activeClassName="active">International</NavLink>
        <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/profile" activeClassName="active">Register/Login</NavLink>
      </div>
      <div className="menu-icon">
        <img src={menuIMG} alt="menu" onClick={toggleMenu} />
      </div>
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default C_Nav;
