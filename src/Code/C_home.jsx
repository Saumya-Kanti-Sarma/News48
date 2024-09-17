import React from 'react'
import Btn from '../Constants/Btn'
const C_home = () => {
  return (
    <div>
      <Btn
        text={"click"}
        onClick={() => { alert("hello") }}
        fontSize={"1.5rem"}
        width={"200px"}
        height={"50px"}
      />
    </div>
  )
}

export default C_home
