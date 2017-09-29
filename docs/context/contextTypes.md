## @contextTypes(contextTypes: contextTypes)

Defines component's [contextTypes](https://facebook.github.io/react/docs/context.html).

#### Example

```js
@contextTypes({
  theme: PropTypes.object,
})
class TextField extends React.Component {

  render() {
    const { theme } = this.context;
    return (
      <input type="text" theme={theme} {...others} />
    );
  }
}
```
