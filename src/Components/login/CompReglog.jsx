import React, { useEffect, useState } from 'react'
import "./RegLog.css"
import RegLogHook from '../../Hooks/RegLog.Hook';
const CompReglog = () => {
  // making the flip animation
  const [flip, setFlip] = useState("");

  function flipTheCard() {
    if (flip == "") {
      setFlip("active-flip");
    } else {
      setFlip("");
    }
  }

  return (
    <>
      <div className="flip-card">
        <div className={`flip-card-inner ${flip}`} >
          <div className="flip-card-front">

            <RegLogHook
              paramHeading={"Register your Account"}
              paramSubHeading={"Please Provide the following Informations"}
              paramSetPassPlaceHolder={"set your password"}
              paramBtn2={"none"}
              paramBtn1={"block"} />
            <p className='alreadyHave'
              onClick={flipTheCard}>
              Already have an account? Login
            </p>
          </div>
          <div className="flip-card-back">
            <RegLogHook
              paramHeading={"Login your Account"}
              paramSubHeading={"Enter Your Registered Name and Password"}
              paramNumber={"none"}
              paramEmail={"none"}
              paramOtherParams={"none"}
              paramBGcolor={"#072f9e8c"}
              paramSetPassPlaceHolder={"enter your password"}
              paramBtnColor={"#76CF5F"}
              paramBtnTxt={"black"}
              paramBtn1={"none"}
              paramBtn2={"block"}
            />
            <p className='alreadyHave'
              onClick={flipTheCard}>
              Don't have an account? Register
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default CompReglog


