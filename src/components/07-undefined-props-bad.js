import React from 'react'

const ButtonOne = ({ handleClick }) => (
  <button onClick={handleClick || undefined}>Click me</button>
)

const ButtonTwo = ({ handleClick }) => {
  const noop = () => {}

  return <button onClick={handleClick || noop}>Click me</button>
}

export const UndefinedPropsBad = () => (
  <div>
    <ButtonOne />
    <ButtonOne handleClick={() => alert('Clicked!')} />
    <ButtonTwo />
    <ButtonTwo handleClick={() => alert('Clicked!')} />
  </div>
)
