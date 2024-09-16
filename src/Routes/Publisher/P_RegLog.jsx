import React from 'react'
import "./P_RegLog.css"
import CompReglog from '../../Components/login/CompReglog'

const P_RegLog = () => {
  return (
    <>
      <div className="pub-login-main">
        <h1>
          Become A Publisher With Us at <b>News 48</b>
        </h1>
        <div className="Pub-log-area">
          <CompReglog />
        </div>
      </div>
    </>
  )
}

export default P_RegLog
