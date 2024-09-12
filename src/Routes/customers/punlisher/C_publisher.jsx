import React, { useState } from 'react'
import "./C_publisher.css"
import Navbar from '../../../components/navbar/Navbar'
import { Link } from 'react-router-dom';
const C_publisher = () => {
  const [menu, setMenu] = useState(100);
  const [opacity, setOpacity] = useState("");
  function toogleMenu() {
    menu === 100 ? setMenu(0) : setMenu(100);
    setOpacity("low-opacity")

  }
  function closeMenu() {
    setMenu(100);
    setOpacity("");
  }
  return (
    <>
      <div className="main-home-area">
        <nav id='nav-area'><Navbar /></nav>

        <main className={`main-c-publisher`}>

          <aside className='top-publisher-aside' style={{ left: `-${menu}%` }}>
            <h1>Top Publishers</h1>
            <div className="publisher-list-under-top-publisher">
              <div>
                <img src="profile.jpg" alt="" />
                <h1>Publisher Name</h1>
              </div>
              <div>
                <img src="profile.jpg" alt="" />
                <h1>Publisher Name</h1>
              </div>
              <div>
                <img src="profile.jpg" alt="" />
                <h1>Publisher Name</h1>
              </div>
              <div>
                <img src="profile.jpg" alt="" />
                <h1>Publisher Name</h1>
              </div>
              <div>
                <img src="profile.jpg" alt="" />
                <h1>Publisher Name</h1>
              </div>
            </div>
          </aside>
          <div className="search-area-c-publisher">
            {/* menu btn */}<button id="menu-btn-c-publisher" onClick={toogleMenu}><img src="./Basic/left.svg" /></button>
            <div className={`search-container  ${opacity}`} onClick={closeMenu}>
              <div className="search-child-under-c-publisher">

                <input type='search' placeholder='search publisher name' name='search' id='search-under-c-publisher' />
                <button id='btn-under-c-publisher' ><img src="./Basic/search.svg" alt="" /></button>

              </div>
              <p>--suggestions--</p>
              <ul className='search-suggestions-child-under-c-publisher'>
                <li className="suggestion-link-under-search-suggestion">NDTV</li>
                <li className="suggestion-link-under-search-suggestion">Miles Publishing</li>
                <li className="suggestion-link-under-search-suggestion">The Next Web</li>
                <li className="suggestion-link-under-search-suggestion">Gama News</li>
                <li className="suggestion-link-under-search-suggestion">You Watch</li>
                <li className="suggestion-link-under-search-suggestion">48 Hours</li>
              </ul>
              <p className='end-text'>Become a individual publisher with us. Click <Link to={"/"}>HERE</Link></p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default C_publisher
