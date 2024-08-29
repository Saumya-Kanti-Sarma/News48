import React, { useEffect } from 'react';
import NavBar from '../../Components/Nav/Navbar';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const P_Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const usrID = Cookies.get("usrID_");
    if (!usrID) {
      navigate("/publisher/login");
    }
  }, [])
  return (
    <>
      <NavBar />
      <h1>Welcome {Cookies.get("usrName")}</h1>
    </>
  )
}

export default P_Home
