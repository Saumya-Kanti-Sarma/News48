//src/components/navbar/Navbar.jsx
import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu, setMenu] = useState("-100%"); // toggling the right shift of the menu
  const [img, setImg] = useState("menu"); // toggling the menu image

  function menuHandler() {
    img == "menu" ? setImg("back") : setImg("menu");
    menu == "-100%" ? setMenu("0") : setMenu("-100%");
  }
  return (
    <>
      <div className='real-nav-area'>
        <h1><Link to={"/"}>48Hours.com</Link></h1>
        <ul className='nav-uls'>
          <li className='nav-links'><Link to={"/"}>Home</Link></li>
          <li className='nav-links'><Link to={"/news"}>News</Link></li>
          <li className='nav-links'><Link to={"/about"}>About</Link></li>
        </ul>
        <p>Register/Login</p>
        <button id='menu-btn' onClick={menuHandler}>
          <img src={`./Basic/${img}.svg`} id="menu-img" />
        </button>
      </div>
      <div className="phone-menu" style={{
        right: menu
      }}>
        <ul className='phone-uls'>
          <li className='nav-links-phone'><Link to={"/"}>home</Link></li>
          <li className='nav-links-phone'><Link to={"/news"}>News</Link></li>
          <li className='nav-links-phone'><Link to={"/about"}>About</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
