## @propTypes(propTypes: propTypes)

Defines component's [propTypes](https://facebook.github.io/react/docs/reusable-components.html#prop-validation).

#### Example

```js
@propTypes({
  foo: React.PropTypes.string,
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
