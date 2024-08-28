import React, { useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import "./Css/RegLog.Hook.css";
import toast from 'react-hot-toast';
import axios from 'axios';
import Loader from '../Components/Loader/Loader';
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom';

const RegLogHook = ({ paramName, paramEmail, paramNumber, paramPassword, paramOtherParams, emailGoogleHeight, emailGoogleColor, paramHeading, paramSubHeading, paramBGcolor, paramSetPassPlaceHolder, paramBtnColor, paramBtnTxt, paramBtn1, paramBtn2 }) => {
  // function to save input values
  const [data, setData] = useState({
    name: null,
    email: null,
    phone: null,
    password: null,
    gender: null,
    birthDate: null,
  });
  const navigate = useNavigate()
  function handleInputChange(e) {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  };
  function handleGenderChange(e) {
    const { value } = e.target;
    setData(prevData => ({
      ...prevData,
      gender: value
    }));
  };

  // toggling tickmark and cross mark
  const [tik_name, setTick_name] = useState("");
  const [tik_email, setTick_email] = useState("");
  const [tik_number, setTick_number] = useState("");
  const [disableBtn1, setDisableBtn1] = useState(true);
  const [btnOpacity1, setBtnOpacity1] = useState(0.5);
  const [disableBtn2, setDisableBtn2] = useState(true);
  const [btnOpacity2, setBtnOpacity2] = useState(0.5);
  useEffect(() => {
    //console.log(data);
    if (data.name == null, data.email == null, data.number == null, data.password == null) {
      setTick_name("/circle.svg");
      setTick_email("/circle.svg");
      setTick_number("/circle.svg");
    }
    if (data.name != null) {
      if (data.name.length < 5 || data.name.includes(" ") || data.name.includes("#") || data.name.includes("@") || data.name.includes("!")) {
        setTick_name("/cross.svg");
      }
      else {
        setTick_name("/tick.svg");
      }
    }
    if (data.email != null) {
      if (data.email.includes("@") && data.email.includes(".") && data.email.includes("com")) {
        setTick_email("/tick.svg");
      }
      else {
        setTick_email("/cross.svg");
      }
    }
    if (data.phone != null) {
      if (data.phone.length === 10) {
        setTick_number("/tick.svg");
      }
      else {
        setTick_number("/cross.svg");
      }
    }
    if (tik_name == "/tick.svg" && tik_email == "/tick.svg" && tik_number == "/tick.svg" && data.password != null) {
      setDisableBtn1(false);
      setBtnOpacity1(1);
    }
    if (tik_name == "/tick.svg" && data.password != null) {
      setDisableBtn2(false);
      setBtnOpacity2(1);
    }
  }, [data]);

  useEffect(() => {
    if (paramEmail == null || paramName == null || paramNumber == null || paramPassword == null || paramBGcolor == null || paramSetPassPlaceHolder == null || paramBtnColor == null) {
      paramEmail = "flex";
      paramName = "flex";
      paramNumber = "flex";
      paramPassword = "flex";
      paramBGcolor = "#09b634a4";
      paramSetPassPlaceHolder = "set your password";
      paramBtnColor = "#0a14a5";
      paramBtnTxt = "white";
    }
  }, [])

  // function to check view password
  const [tik_password, setTick_password] = useState("/lock.svg");
  const [password, setPassword] = useState("password");
  function handlePasswordChange() {
    password == "password" ? setPassword("text") : setPassword("password");
    tik_password == "/lock.svg" ? setTick_password("/dontlock.svg") : setTick_password("/lock.svg");
  }

  // changing google width
  const [gooogle, setGoogle] = useState(600);
  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 720) {
      setGoogle(300);
    }
    if (width <= 600) {
      setGoogle(100)
    }
    if (width <= 360) {
      setGoogle(300)
    }
  }, []);

  // loader display
  const [loaderDisplay, setLoaderDisplay] = useState("none");
  const [loaderDisplay2, setLoaderDisplay2] = useState("none");

  // Registering the user
  async function registerUserData(e) {
    e.preventDefault();
    setLoaderDisplay("block");
    if (data.name == "" || data.email == "" || data.phone == "" || data.password == "") {
      toast.error("Please fill all the fields");
    }
    else {
      try {
        const response = await axios.post(`https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/register`, data);
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          toast.success("User Registered Successfully");
        }
      } catch (error) {
        toast.error("User Registration Failed");
        console.log(response);
      }
    }
    setLoaderDisplay("none");
  }

  // Login the user
  async function loginUserData(e) {
    e.preventDefault();
    setLoaderDisplay2("block");

    const response = await axios.post(`https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/login`, data);

    if (response.status >= 200 && response.status < 300) {
      toast.success(`${response.data.message}`);
      setLoaderDisplay2("none");
      Cookies.set("usrName", response.data.name);
      Cookies.set("usrID_", response.data.id);
      // navigate("/publisher/")
    }
    if (response.status >= 300) {
      toast.error(response.status);
      setLoaderDisplay2("none");
    }
  }
  //sereanMiles1122Demo
  //demo1122


  return (
    <>
      <div className="reglog-hook-main">
        <div className="logo">
          <h1>48</h1> <h2>Hours.com</h2>
        </div>
        <div className="reglog-hook-content">
          <div className='heading-undermain'>
            <h1>{paramHeading}</h1>
            <p>{paramSubHeading} </p>
          </div>
          <div className="regiistration-area" style={{ backgroundColor: emailGoogleColor, height: emailGoogleHeight }}>


            <form className='email-registration' style={{ backgroundColor: paramBGcolor }}>

              {/* Name */}
              <div className="input-group" style={{ display: paramName }}>
                <input type="text" name="name" placeholder='Enter Your Name' id='input' onInput={handleInputChange} />
                <img src={tik_name} />
              </div>

              {/* Email */}
              <div className="input-group" style={{ display: paramEmail }}>
                <input type="email" name="email" placeholder='Enter your Email ' id='input' onInput={handleInputChange} />
                <img src={tik_email} />
              </div>

              {/* Number */}
              <div className="input-group" style={{ display: paramNumber }}>
                <input type="number" name="phone" placeholder='Enter your Phone Number' id='input' onInput={handleInputChange} />
                <img src={tik_number} />
              </div>
              {/* Password */}
              <div className="input-group" style={{ display: paramPassword }}>
                <input type={password} name="password" placeholder={paramSetPassPlaceHolder} id='input' onInput={handleInputChange} />
                <img src={tik_password} id='password-icon' onClick={handlePasswordChange} />
              </div>

              <div className="other-param" style={{ display: paramOtherParams }}>
                {/* DOB */}
                <div className="dob">
                  <p>Date Of Birth</p>
                  <input type="date" name="birthDate" id='dob' onInput={handleInputChange} />
                </div>
                {/* Gender */}
                <div className="gender">
                  <p>Gender</p>
                  <div className='gender-child'>
                    <div>
                      <input type="radio" name="gender" value="male" onInput={handleGenderChange} /> <p>male</p>
                      <input type="radio" name="gender" value="female" onInput={handleGenderChange} /> <p>female</p>
                    </div>
                    <div>
                      <input type="radio" name="gender" value="trans" onInput={handleGenderChange} /> <p>trans</p>
                      <input type="radio" name="gender" value="other" onInput={handleGenderChange} /> <p>other</p>
                    </div>
                  </div>
                </div>
              </div>


              <button
                className='submit-btn'
                style={{
                  backgroundColor: paramBtnColor,
                  color: paramBtnTxt,
                  display: paramBtn1,
                  opacity: btnOpacity1,
                }}
                onClick={registerUserData}
                disabled={disableBtn1}>
                Submit
              </button>
              <div className="loader-container">
                <Loader paramDisplay={loaderDisplay} />
              </div>
              <button
                className='submit-btn'
                style={{
                  backgroundColor: paramBtnColor,
                  color: paramBtnTxt,
                  display: paramBtn2,
                  opacity: btnOpacity2,
                }}
                onClick={loginUserData}
                disabled={disableBtn2}>
                Submit
              </button>
              <div className="loader-container">
                <Loader paramDisplay={loaderDisplay2} />
              </div>
            </form>
            <div className='google-registration'>
              <h2>OR</h2>
              <GoogleLogin width={gooogle} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegLogHook
