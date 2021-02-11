import React from 'react'

const Greeting = ({ personName }) => <p>Hi, {personName}!</p>

export const StringPropValuesBad = () => (
  <div>
    <Greeting personName={'John'} />
    <Greeting personName={'Matt'} />
    <Greeting personName={`Paul`} />
  </div>
)
