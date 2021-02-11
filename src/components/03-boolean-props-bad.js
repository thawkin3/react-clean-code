import React from 'react'

const HungryMessage = ({ isHungry }) => (
  <p>{isHungry ? 'I am hungry' : 'I am full'}</p>
)

export const BooleanPropBad = () => (
  <div>
    <p>This person is hungry:</p>
    <HungryMessage isHungry={true} />
    <p>This person is full:</p>
    <HungryMessage isHungry={false} />
  </div>
)
