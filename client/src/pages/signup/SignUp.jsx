import React from 'react'
import MovingText from 'react-moving-text'

const SignUp = () => {
  return (
    <div>
     <MovingText
      type="flipSlowDown"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none">
      Content...
    </MovingText>
  </div>
  )
}

export default SignUp