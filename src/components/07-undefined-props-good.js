import React from 'react'

const ButtonOne = ({ handleClick }) => (
  <button onClick={handleClick}>Click me</button>
)

export const UndefinedPropsGood = () => (
  <div>
    <ButtonOne />
    <ButtonOne handleClick={() => alert('Clicked!')} />
  </div>
)
