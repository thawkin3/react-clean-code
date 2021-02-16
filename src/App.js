import React from 'react'
import { ConditionalRenderingWhenTrueBad } from './components/01-conditional-rendering-bad'
import { ConditionalRenderingWhenTrueGood } from './components/01-conditional-rendering-good'
import { ConditionalRenderingBad } from './components/02-conditional-rendering-bad'
import { ConditionalRenderingGood } from './components/02-conditional-rendering-good'
import { BooleanPropBad } from './components/03-boolean-props-bad'
import { BooleanPropGood } from './components/03-boolean-props-good'
import { StringPropValuesBad } from './components/04-string-prop-values-bad'
import { StringPropValuesGood } from './components/04-string-prop-values-good'
import { UnnecessaryAnonymousFunctionsBad } from './components/05-unnecessary-anonymous-functions-bad'
import { UnnecessaryAnonymousFunctionsGood } from './components/05-unnecessary-anonymous-functions-good'
import './App.css'

export const App = () => (
  <main>
    <header>
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

    <section>
      <h2>04. String Prop Values</h2>
      <StringPropValuesBad />
      <br />
      <StringPropValuesGood />
    </section>
    <hr />

    <section>
      <h2>05. Unnecessary Anonymous Functions</h2>
      <UnnecessaryAnonymousFunctionsBad />
      <br />
      <br />
      <UnnecessaryAnonymousFunctionsGood />
    </section>
    <hr />
  </main>
)
