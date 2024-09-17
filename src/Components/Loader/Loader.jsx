import React from 'react'
import './Loader.css'
const Loader = ({ paramDisplay, paramBgColor, paramWidth, paramPadding }) => {
  return (
    <div className='loader' style={
      {
        display: paramDisplay,
        backgroundColor: paramBgColor,
        width: paramWidth,
        padding: paramPadding,
      }}>

    </div>
  )
}

export default Loader
