import React from 'react'
import Navbar from '../Components/navbar/Navbar'
import "./About.css"

const About = () => {
  return (
    <>

      <nav id='nav-area'><Navbar /></nav>
      <main className='about-main'>
        <h1 className='about-heading'>Welcome to 48Hours.com</h1>
        <div className="section">
          <section >
            <h1 > Who We Are?</h1>
            <p>48 News is a project work of Saumya kanti Sarma which is based on React JS Web framework. <br />
              "The idea arose in my mind and I started working on this web app from the middle of August 2024.." The main initiative of this project was to make a fully loaded news app where people could seemelessly Upload news as a publisher and the readers could enjoy those news.. <br />
              As on working on the project I faced many issues and one such issue was with the backend data framing. <br />
              Ultimately, I choosed the following data model/frame. It's simple, effective and user friendly...</p>
            <img src="webframe.jpg" className="about-img" />
          </section><section >
            <h1>What Do We Offer?</h1>
            <p>48Hours provide a new experience of reading and publishing news, events, social affairs and many more. Our core technology take care of your data in a very Sophisticated way such that it is very hard for anyone to access your data just by going through an attack on the database. <br />
              48Hours also encourage publishers to publish their data on to our site which will help them to regain and connect with many potential customers <br /></p>
            <img src="temp2.jpg" className="about-img" />
          </section>
          <section >
            <h1>About ME</h1>
            <p>My name is Saummya kanti Sarma, I created 48Hours.com as a project work to show how a <b>Full Stack</b> Application works. </p>
            <img src="/Basic/myprofile.jpg" alt="" />
          </section>
        </div>
        <br />
      </main>
    </>
  )
}

export default About
