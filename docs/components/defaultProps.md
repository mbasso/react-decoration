## @defaultProps(props: Object)

Defines component's [defaultProps](https://facebook.github.io/react/docs/reusable-components.html#default-prop-values).

#### Example

```js
@defaultProps({
  foo: 'bar',
})
class TextField extends React.Component {

  render() {
    const { foo, ...others } = this.props;
    return (
      <input type="text" value={foo} {...others} />
    );
  }
}
```
