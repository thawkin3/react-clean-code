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
import { UnnecessaryAnonymousFunctionComponentsBad } from './components/06-unnecessary-anonymous-function-components-bad'
import { UnnecessaryAnonymousFunctionComponentsGood } from './components/06-unnecessary-anonymous-function-components-good'
import { UndefinedPropsBad } from './components/07-undefined-props-bad'
import { UndefinedPropsGood } from './components/07-undefined-props-good'
import { PreviousStateBad } from './components/08-previous-state-bad'
import { PreviousStateGood } from './components/08-previous-state-good'
import './App.css'

export const App = () => (
  <main>
    <header>
      <h1>React Clean Code</h1>
    </header>

    <section>
      <h2>01. Conditional Rendering Only for One Condition</h2>
      <h3 className="bad">Bad</h3>
      <ConditionalRenderingWhenTrueBad />
      <br />
      <h3 className="good">Good</h3>
      <ConditionalRenderingWhenTrueGood />
    </section>
    <hr />

    <section>
      <h2>02. Conditional Rendering on Either Condition</h2>
      <h3 className="bad">Bad</h3>
      <ConditionalRenderingBad />
      <br />
      <h3 className="good">Good</h3>
      <ConditionalRenderingGood />
    </section>
    <hr />

    <section>
      <h2>03. Boolean Props</h2>
      <h3 className="bad">Bad</h3>
      <BooleanPropBad />
      <br />
      <h3 className="good">Good</h3>
      <BooleanPropGood />
    </section>
    <hr />

    <section>
      <h2>04. String Prop Values</h2>
      <h3 className="bad">Bad</h3>
      <StringPropValuesBad />
      <br />
      <h3 className="good">Good</h3>
      <StringPropValuesGood />
    </section>
    <hr />

    <section>
      <h2>05. Unnecessary Anonymous Functions</h2>
      <h3 className="bad">Bad</h3>
      <UnnecessaryAnonymousFunctionsBad />
      <br />
      <br />
      <h3 className="good">Good</h3>
      <UnnecessaryAnonymousFunctionsGood />
    </section>
    <hr />

    <section>
      <h2>06. Unnecessary Anonymous Function Components</h2>
      <h3 className="bad">Bad</h3>
      <UnnecessaryAnonymousFunctionComponentsBad />
      <br />
      <h3 className="good">Good</h3>
      <UnnecessaryAnonymousFunctionComponentsGood />
    </section>
    <hr />

    <section>
      <h2>07. Undefined Props</h2>
      <h3 className="bad">Bad</h3>
      <UndefinedPropsBad />
      <br />
      <h3 className="good">Good</h3>
      <UndefinedPropsGood />
    </section>
    <hr />

    <section>
      <h2>08. Setting State That Relies on the Previous State</h2>
      <h3 className="bad">Bad</h3>
      <PreviousStateBad />
      <br />
      <h3 className="good">Good</h3>
      <PreviousStateGood />
    </section>
    <hr />
  </main>
)
