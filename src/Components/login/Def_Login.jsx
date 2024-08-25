import React, { useEffect, useState } from 'react'
import "./RegLog.css"
import LoginHook from '../../Hooks/Login.hook';

const DefRegLog = () => {
  //  function to flip between reg and log
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }
  return (
    <div className="reg-area">
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-inner">

          {/* REGISTRATION */}
          <div className="register">
            <LoginHook
              paramEmail={"block"}
              paramName={"block"}
              paramNumber={"block"}
              paramPassword={"block"}
              paramOtherParams={"block"}
              paramHeading={"Register Your Account"}
              paramSubHeading={"Welcome User! Please select a method to register..."}
            />

            <div className='already-reg'>
              <p onClick={handleClick} >Already register? Click here to Login</p>
            </div>
          </div>
          {/* LOGIN */}
          <div className="login">
            <LoginHook
              paramPassword={"block"}
              paramName={"block"}
              paramEmail={"none"}
              paramNumber={"none"}
              paramOtherParams={"none"}
              emailGoogleColor={"#09b634ad"}
              emailGoogleHeight={"17vh"}
              paramHeading={"Login To Account"}
              paramSubHeading={"welcome back! please Login with us"}
            />
            <div className='already-reg'>
              <p onClick={handleClick} >Don't have an Account? Register Now </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default DefRegLog
