import React from 'react'

const Btn = ({ text, onClick, width, height, fontSize, backgroundColor }) => {
  return (
    <>
      <button
        id='def-btn'
        onClick={onClick}
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          fontSize: fontSize
        }}
      >
        {text}
      </button>
    </>
  )
}

export default Btn
