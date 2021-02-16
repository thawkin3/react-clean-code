# React Clean Code

Simple examples to write cleaner React code

## Examples

1. Conditional rendering: If you need to conditionally render something when a condition is `true` and not render anything when a condition is `false`, don't use a ternary, use the `&&` operator.

2. Conditional rendering: If you need to conditionally render one thing when a condition is `true` and render a different thing when a condition is `false`, use a ternary.

3. Boolean props: A truthy prop can be provided to a component with just the prop name like `myTruthyProp`. Writing it like `myTruthyProp={true}` is unnecessary.

4. String props: A string value can be provided as a prop value in double quotes without the use of curly braces or backticks.

5. Unnecessary anonymous event handler functions: If an event handler only takes a single argument for the `Event` object, you can just provide the function as the event handler like `onChange={handleChange}`. You don't need to wrap the function in an anonymous function like `onChange={e => handleChange(e)}`.