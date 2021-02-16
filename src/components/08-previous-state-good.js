import React, { useState } from 'react'

export const PreviousStateGood = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const toggleButton = () => setIsDisabled(isDisabled => !isDisabled)

  const toggleButton2Times = () => {
    for (let i = 0; i < 2; i++) {
      toggleButton()
    }
  }

  return (
    <div>
      <button disabled={isDisabled}>
        I'm {isDisabled ? 'disabled' : 'enabled'}
      </button>
      <button onClick={toggleButton}>Toggle button state</button>
      <button onClick={toggleButton2Times}>Toggle button state 2 times</button>
    </div>
  )
}
