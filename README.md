# React Clean Code

Simple examples to write cleaner React code

## Examples

1. Conditional rendering: If you need to conditionally render something when a condition is `true` and not render anything when a condition is `false`, don't use a ternary, use the `&&` operator.

2. Conditional rendering: If you need to conditionally render one thing when a condition is `true` and render a different thing when a condition is `false`, use a ternary.

3. Boolean props: A truthy prop can be provided to a component with just the prop name like `myTruthyProp`. Writing it like `myTruthyProp={true}` is unnecessary.
