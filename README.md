# React Clean Code

Simple examples to write cleaner React code

## Examples

1. **Conditional rendering only for one condition**: If you need to conditionally render something when a condition is `true` and not render anything when a condition is `false`, don't use a ternary, use the `&&` operator.

2. **Conditional rendering on either condition**: If you need to conditionally render one thing when a condition is `true` and render a different thing when a condition is `false`, use a ternary.

3. **Boolean props**: A truthy prop can be provided to a component with just the prop name like `myTruthyProp`. Writing it like `myTruthyProp={true}` is unnecessary.

4. **String props**: A string value can be provided as a prop value in double quotes without the use of curly braces or backticks.

5. **Unnecessary anonymous event handler functions**: If an event handler only takes a single argument for the `Event` object, you can just provide the function as the event handler like `onChange={handleChange}`. You don't need to wrap the function in an anonymous function like `onChange={e => handleChange(e)}`.

6. **Unnecessary anonymous function components**: When passing a component as a prop to another component, you don't need to wrap this passed component in a function if the component does not accept any props.

7. **Undefined props**: Undefined props are excluded, so don't worry about providing an `undefined` fallback if it's ok for the prop to be undefined.

8. **Setting state that relies on the previous state**: Always set state as a function of the previous state if the new state relies on the previous state.

## Honorable Mention

The following practices are not React-specific but rather are good practices for writing clean code in JavaScript (and any programming language, for that matter).

- Extract complex logic into clearly-named functions
- Extract magic numbers into constants
- Use clearly named variables
