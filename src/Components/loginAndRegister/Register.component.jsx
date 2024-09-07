import React, { useEffect, useState } from 'react';
import "./Styles.component.css"
import Loader from '../Loader/Loader.jsx';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ paramRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [OTP, setOTP] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [img, setImg] = useState("/cant-see.svg");
  const [type, setType] = useState("password");
  const [verify, setVerify] = useState("none");
  const [displayLoader, setdisplayLoader] = useState("none");
  const [display_OTP, setDisplay_OTP] = useState("block");
  const [OTPBtnPleaseWait, setOTPBtnPleaseWait] = useState("Submit");
  const [displayOTP, setdisplayOTP] = useState(true);
  const [submitOTPBtn, setSubmitOTPBtn] = useState(true);
  const [button, setButton] = useState(true);
  const [opacity, setOpacity] = useState("0.5");

  const navigate = useNavigate();

  function validateForm() {
    let formErrors = {};
    let isValid = true;

    if (!name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  }

  useEffect(() => {
    console.log(OTP);

    if (email.includes("@") && email.includes(".")) {
      setVerify("block");
    }
    if (OTP.length == 4) {
      setSubmitOTPBtn(false);
    }
    if (name.length >= 1 && password.length >= 6 && password == confirmPassword && email.length >= 4 && email.includes("@") && email.includes(".")) {
      setButton(false);
      setOpacity("1")
    }
    else {
      setButton(true);
      setOpacity("0.5");
    }

  }, [name, password, email, confirmPassword, OTP]);

  const verifyEmail = () => {
    setdisplayLoader("block");
    setTimeout(() => {
      setdisplayLoader("none");
      setdisplayOTP(false);
    }, 1000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/");
    }
  };
  function seePasswordHandler() {
    img == '/cant-see.svg' ? setImg("/see.svg") : setImg("/cant-see.svg");
    type == 'password' ? setType("text") : setType("password");
  }

  function submitOTP() {
    setOTPBtnPleaseWait("Please Wait...");
    setTimeout(() => {
      setdisplayOTP("block");
      setDisplay_OTP("none");
    }, 1600);
  }
  return (
    <div className="form-container">
      <h2 className='title-of-form'>{paramRegister}</h2>
      <a href="/login" className='toggle-link'>Already Registered? Login</a>
      <br />
      <div className='form'>
        <div className='form-area'>
          <div className="form-elements">
            <label className='form-label' htmlFor="name">NAME</label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="small">{errors.name}</p>}
          </div>
          <div className="form-elements">
            <label className='form-label' htmlFor="Email">EMAIL</label>
            <div className="see-pass">
              <input
                type="email"
                placeholder="Email"
                id="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={verifyEmail} style={{ display: verify }}>verify</button>
              {errors.email && <p className="small">{errors.email}</p>}
            </div>

          </div>
          {/* OTP */}
          <div className="form-elements" style={{ display: display_OTP }}>
            <label className='form-label' htmlFor="OTP" style={{ marginLeft: "10px" }}>ENTER OTP</label>
            <div className="see-pass">
              <input
                type="text" placeholder="****"
                id='OTP' value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                disabled={displayOTP} />
              <button onClick={submitOTP} disabled={submitOTPBtn}>{OTPBtnPleaseWait}</button>
            </div>
          </div>

          <div className="form-elements">
            <label className='form-label' htmlFor="password">PASSWORD</label>
            <div className='see-pass'>
              <input
                type={type}
                placeholder="Password"
                id="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src={img} onClick={seePasswordHandler} />
            </div>
            {errors.password && <p className="small">{errors.password}</p>}
          </div>
          <div className="form-elements">
            <label className='form-label' htmlFor="set-password">ER-ENTER PASSWORD</label>
            <div className="see-pass">
              <input
                type={type}
                placeholder="Re-enter Password"
                id='set-password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {errors.confirmPassword && <p className="small">{errors.confirmPassword}</p>}
          </div>
        </div>
        <br />
        <button
          type="submit"
          className='submit-form-btn'
          disabled={button}
          style={{ opacity: opacity }}
          onClick={handleSubmit}
        >Sign In</button>
      </div>
      <div style={{ height: "30px" }}>
        <div className="loader-area" style={{ marginTop: "10px", display: displayLoader }}>
          <Loader paramWidth={"30px"}></Loader>
        </div>
      </div>

    </div>
  );
};

export default RegisterForm;
