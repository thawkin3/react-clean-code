import React from 'react'
import { ConditionalRenderingWhenTrueBad } from './components/01-conditional-rendering-bad'
import { ConditionalRenderingWhenTrueGood } from './components/01-conditional-rendering-good'
import { ConditionalRenderingBad } from './components/02-conditional-rendering-bad'
import { ConditionalRenderingGood } from './components/02-conditional-rendering-good'
import { BooleanPropBad } from './components/03-boolean-props-bad'
import { BooleanPropGood } from './components/03-boolean-props-good'
import './App.css'

export const App = () => (
  <main className="app">
    <header className="header">
      <h1>React Clean Code</h1>
    </header>

    <section>
      <h2>01. Conditional Rendering Only for One Condition</h2>
      <ConditionalRenderingWhenTrueBad />
      <br />
      <ConditionalRenderingWhenTrueGood />
    </section>
    <hr />

    <section>
      <h2>02. Conditional Rendering on Either Condition</h2>
      <ConditionalRenderingBad />
      <br />
      <ConditionalRenderingGood />
    </section>
    <hr />

    <section>
      <h2>03. Boolean Props</h2>
      <BooleanPropBad />
      <br />
      <BooleanPropGood />
    </section>
    <hr />
  </main>
)
