//src/routes/customer/home/C_home.jsx
import React from 'react'
import Navbar from '../../../Components/navbar/Navbar'
import "./C_home.css"
import { useNavigate } from 'react-router-dom'
const C_home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-home-area">
        <nav id='nav-area'><Navbar /></nav>

        <main id='main-area-nav'>
          <div className="content-home">
            <h1>Welcome to 48 Hours...</h1>
            <br />
            <p>Follow the news with 100% transparency with us, we have multiple groups of +250 honest <b>Publishers</b> ready to publish the new events, incidents, achievements of humanity across the world...</p>
            <div className='more-ofit'>
              <p>
                We have available more then 100k news published in our servers, enjoy the semless entertainment of information with us, click the button down below...
              </p>
              <p>Want to change the world? We provide opportunity to young enthusiast. Become a Publisher with us...</p>
            </div>
            <div className='button-area-home'>
              <button onClick={() => { navigate("/news") }}>Check News <img src="newspaper.svg" className="btn-img" /></button>
              <button onClick={() => { navigate("/publisher/") }}>Publish News<img src="pen.svg" className="btn-img" /></button>
            </div>
          </div>
          <aside className='login-aside'>
            <h1>Register With Us...</h1>
            <div className="register">
              <div className="input-area">
                <input type="text" name='name' placeholder='Enter Name: ' />
                <div className="otp-div">
                  <input type="email" name='email' placeholder='Eg: haris@news48.com' id='email' />
                  <button id='email-btn'>send otp</button>
                </div>
                <div className='enter-otp' >
                  <input type="password" placeholder='•••••' disabled={true} />
                  <img src="Basic/see.svg" id='otp-btn' />
                </div>
                <div className='enter-password'>
                  <input type="password" placeholder='•••••' />
                  <img src="Basic/see.svg" id='pass-btn' />
                </div>
                <button id='register-btn'>Register</button>
              </div>


              <a href="#">Already have an account? Login</a>
            </div>
            <br />
          </aside>
        </main>
      </div>
    </>
  )
}

export default C_home
