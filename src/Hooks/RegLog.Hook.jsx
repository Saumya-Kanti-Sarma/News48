import React, { useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import "./Css/RegLog.Hook.css"
const RegLogHook = ({ paramName, paramEmail, paramNumber, paramPassword, paramOtherParams, emailGoogleHeight, emailGoogleColor, paramHeading, paramSubHeading, paramBGcolor }) => {
  // function to save input values
  const [data, setData] = useState({
    name: null,
    email: null,
    phone: null,
    password: null,
    gender: null,
    date: `${Date()}`,
  }); function handleInputChange(e) {
    const { name, value } = e.target;
    const newValue = name === "number" ? value.toString() : value
    setData(prevData => ({
      ...prevData,
      [name]: newValue
    }))
  }; function handleGenderChange(e) {
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
  useEffect(() => {
    console.log(data);
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
    if (data.number != null) {
      if (data.number.length === 10) {
        setTick_number("/tick.svg");
      }
      else {
        setTick_number("/cross.svg");
      }
    }
  }, [data]);

  useEffect(() => {
    if (paramEmail == null || paramName == null || paramNumber == null || paramPassword == null || paramBGcolor == null) {
      paramEmail = "flex";
      paramName = "flex";
      paramNumber = "flex";
      paramPassword = "flex";
      paramBGcolor = "#09b634a4";
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
            <form action="submit" className='email-registration' style={{ backgroundColor: paramBGcolor }}>

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
                <input type="number" name="number" placeholder='Enter your Phone Number' id='input' onInput={handleInputChange} />
                <img src={tik_number} />
              </div>
              {/* Password */}
              <div className="input-group" style={{ display: paramPassword }}>
                <input type={password} name="number" placeholder='Set your password' id='input' onInput={handleInputChange} />
                <img src={tik_password} id='password-icon' onClick={handlePasswordChange} />
              </div>

              <div className="other-param" style={{ display: paramOtherParams }}>
                {/* DOB */}
                <div className="dob">
                  <p>Date Of Birth</p>
                  <input type="date" name="date" id='dob' onInput={handleInputChange} />
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
              <button className='submit-btn'> Submit</button>
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
